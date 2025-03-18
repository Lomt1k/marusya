import SearchStore from "./SearchStore";

class RootStore {
  search: SearchStore;
  
  constructor() {
    this.search = new SearchStore();
  }
}

export default new RootStore();