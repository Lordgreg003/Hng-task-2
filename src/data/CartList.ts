import {
  belt,
  belts,
  cap,
  frame9,
  frame999,
  gown1,
  gown2,
  handsome,
  image2,
  image3,
  sandal,
  shoe3,
} from "../images";
interface Image {
  id: number;
  src: string;
  alt: string;
}

const imageProduct: Image[] = [
  { id: 1, src: belt, alt: "Description 1" },
  { id: 2, src: belts, alt: "Description 2" },
  { id: 3, src: cap, alt: "Description 3" },
  { id: 4, src: frame9, alt: "Description 4" },
  { id: 5, src: frame999, alt: "Description 5" },
  { id: 6, src: gown1, alt: "Description 6" },
  { id: 7, src: gown2, alt: "Description 7" },
  { id: 8, src: handsome, alt: "Description 8" },
  { id: 8, src: image2, alt: "Description 9" },
  { id: 8, src: image3, alt: "Description 10" },
  { id: 8, src: sandal, alt: "Description 11" },
  { id: 8, src: shoe3, alt: "Description 12" },
];

export default imageProduct;
