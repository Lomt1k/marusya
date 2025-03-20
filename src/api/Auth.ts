import { z } from 'zod';
import api from './api';
import RootStore from '../store/RootStore';

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  favorites: z.array(z.number()),
});

export type User = z.infer<typeof UserSchema>;

export const fetchUser = async (): Promise<User | null> => {
  try {
    const response = await api.get('/profile', { validateStatus: status => [200, 401].includes(status) });
    if (response.status === 401) {
      RootStore.auth.clear();
      return null;
    }
    const user = UserSchema.parse(response.data);
    RootStore.auth.setUser(user);
    return user;
  } catch (error) {
    console.error('Ошибка при запросе пользователя:', error);
    return null;
  }
}

const RegisterDataSchema = z.object({
  email: z.string()
    .email('Некорректный email'),
  password: z.string()
    .min(8, 'Длина пароля должна быть не менее 8 символов')
    .max(24, 'Длина пароля должна быть не более 24 символов'),
  name: z.string()
    .nonempty('Необходимо указать имя'),
  surname: z.string()
    .nonempty('Необходимо указать фамилию'),
});

export type RegisterData = z.infer<typeof RegisterDataSchema>;

export const fetchRegister = async (registerData: RegisterData): Promise<void> => {
  const response = await api.post('/user', registerData);
  console.log(response);
}