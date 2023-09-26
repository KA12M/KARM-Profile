import { createContext, useContext } from "react";
import BlogStore from "./blog.store";
import CommonStore from "./common.store";
import TechnologyStore from './technology.store';

export const store = {
  blogStore: new BlogStore(),
  commonStore: new CommonStore(),
  technologyStore: new TechnologyStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
