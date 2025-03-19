import SearchStore from "./SearchStore";
import UserStore from "./UserStore";

class RootStore {
  search: SearchStore;
  user: UserStore;
  
  constructor() {
    this.search = new SearchStore();
    this.user = new UserStore();
  }
}

export default new RootStore();