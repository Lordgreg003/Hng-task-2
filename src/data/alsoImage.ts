import {
  cloths,
  frame24,
  frame25,
  fynboi,
  fynboi1,
  fyngal,
  fyngal2,
  fyngal3,
} from "../images";
interface Image {
  id: number;
  src: string;
  alt: string;
}

const alsoImage: Image[] = [
  { id: 1, src: cloths, alt: "Description 1" },
  { id: 2, src: frame24, alt: "Description 2" },
  { id: 7, src: fyngal2, alt: "Description 7" },
  { id: 3, src: frame25, alt: "Description 3" },
  { id: 4, src: fynboi, alt: "Description 4" },
  { id: 5, src: fynboi1, alt: "Description 5" },
  { id: 6, src: fyngal, alt: "Description 6" },
  { id: 3, src: frame25, alt: "Description 3" },
  { id: 7, src: fyngal2, alt: "Description 7" },
  { id: 8, src: fyngal3, alt: "Description 8" },
  { id: 3, src: frame25, alt: "Description 3" },
  { id: 7, src: fyngal2, alt: "Description 7" },
  { id: 3, src: frame25, alt: "Description 3" },

  { id: 2, src: frame24, alt: "Description 2" },
];

export default alsoImage;
