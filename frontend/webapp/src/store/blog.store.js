import { makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";

import { blogAPI } from "./api";

export default class BlogStore {
  isLoading = false;
  blogs = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBlog = (blog) => { 
    const cookieId = Cookies.get("cookieId");
    this.blogs = [...this.blogs.filter((a) => a._id != blog._id), { ...blog }];
  };

  loadBlogs = async () => {
    try {
      const response = await blogAPI.getAll();
      runInAction(() => {
        response.data.forEach(this.setBlog);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };

  likeBlog = async (blogId) => {
    this.isLoading = true;
    const cookieId = Cookies.get("cookieId");
    console.log(cookieId);
    try {
      var response = await blogAPI.like(blogId);
      runInAction(() => {
        const currentBlog = this.blogs.find((a) => a._id == blogId);
        this.setBlog({
          ...currentBlog,
          ...response,
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}
