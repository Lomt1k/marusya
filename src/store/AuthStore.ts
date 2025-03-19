import { makeAutoObservable } from "mobx";
import { User } from "../api/Auth";

class AuthStore {
  user: User | null = null;
  isModalActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthorized(): boolean {
    return this.user != null;
  }

  setUser(user: User) {
    this.user = user;
  }

  clear() {
    this.user = null;
  }

  setModalActive(state: boolean) {
    this.isModalActive = state;
  }
}

export default AuthStore;