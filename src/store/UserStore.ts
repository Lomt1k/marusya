import { makeAutoObservable } from "mobx";
import { User } from "../api/Auth";

class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthorized(): boolean {
    return this.user != null;
  }

  set(user: User) {
    this.user = user;
  }

  clear() {
    this.user = null;
  }
}

export default UserStore;