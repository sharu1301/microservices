export interface Picture {
  id?: number;
  url: string;
  alt_text?: string;
}

export interface AllGalleryProps {
  pictures: Picture[];
}
