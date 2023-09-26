import { makeAutoObservable, runInAction } from "mobx";
import { TechnologyAPI } from "./api";

export default class TechnologyStore {
  technologies = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadTechnologies = async () => {
    this.isLoading = true;
    try {
      var res = await TechnologyAPI.getAll();
      runInAction(() => {
        this.technologies = res.data;
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}
