import { makeAutoObservable, runInAction } from "mobx";
import { karmProfileAPI } from "./api";

export default class CommonStore {
  karmProfile = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadKarmProfile = async () => {
    this.isLoading = true;
    try {
      const res = await karmProfileAPI.getKarm();
      runInAction(() => { 
        this.karmProfile = res.data;
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}
