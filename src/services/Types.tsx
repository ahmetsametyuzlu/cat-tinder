export interface Action {
  type: string;
  payload: any;
}

export interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
}

export interface Category {
  id: number;
  name: string;
  image?: Image;
}

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatSwipe {
  cat: Cat;
  status?: boolean | null;
}
