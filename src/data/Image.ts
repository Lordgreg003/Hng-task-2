import { cart1, cart2, cart3, cart4, cart5, cart6 } from "../images";
interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: cart1, alt: "Description 1" },
  { id: 2, src: cart2, alt: "Description 2" },
  { id: 3, src: cart3, alt: "Description 3" },
  { id: 4, src: cart4, alt: "Description 4" },
  { id: 5, src: cart5, alt: "Description 5" },
  { id: 6, src: cart6, alt: "Description 6" },
  { id: 7, src: cart1, alt: "Description 7" },
  { id: 8, src: cart4, alt: "Description 8" },
];

export default images;
