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