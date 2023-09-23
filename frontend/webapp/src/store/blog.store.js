import { makeAutoObservable } from "mobx";
import { blogAPI } from "./api";

export default class BlogStore {
  blogs = [];

  constructor() {
    makeAutoObservable(this);
  }

  getBlogs = async function () {
    const response = blogAPI.getAll();
    return response.data;
  };
}
