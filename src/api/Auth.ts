import { z } from 'zod';
import api from './api';
import RootStore from '../store/RootStore';

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  favorites: z.array(z.number()),
});

export const RegisterDataSchema = z.object({
  email: z.string()
    .email('Некорректный email'),
  name: z.string()
    .nonempty('Необходимо указать имя'),
  surname: z.string()
    .nonempty('Необходимо указать фамилию'),
  password: z.string()
    .min(8, 'Длина пароля должна быть не менее 8 символов')
    .max(24, 'Длина пароля должна быть не более 24 символов'),
  passwordRepeat: z.string()
    .nonempty('Необходимо подтвердить пароль'),
}).refine(data => data.password === data.passwordRepeat, {
  message: 'Пароли не совпадают',
  path: ['passwordRepeat'],
});

export type User = z.infer<typeof UserSchema>;
export type RegisterData = z.infer<typeof RegisterDataSchema>;
export type RequestRegisterData = Omit<RegisterData, 'passwordRepeat'>;

export const fetchUser = async (): Promise<User | null> => {
  const response = await api.get('/profile', { validateStatus: status => [200, 401].includes(status) });
  if (response.status === 401) {
    RootStore.auth.clear();
    return null;
  }
  const user = UserSchema.parse(response.data);
  RootStore.auth.setUser(user);
  return user;
};

export const fetchRegister = async (registerData: RequestRegisterData): Promise<void> => {
  await api.post('/user', registerData);
}