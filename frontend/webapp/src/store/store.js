import { createContext, useContext } from "react";
import BlogStore from "./blog.store";

export const store = {
  blogStore: new BlogStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
