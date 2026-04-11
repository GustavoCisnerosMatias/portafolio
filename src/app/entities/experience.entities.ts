export interface Slide {
  img: string;
  description: string;
  isVideo?: any;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
}
