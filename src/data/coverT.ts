import {
  discover,
  discover1,
  discover2,
  discover4,
  discover5,
  discover6,
  discover7,
  discover8,
} from "../images";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const coverT: Image[] = [
  { id: 1, src: discover, alt: "Description 1" },
  { id: 2, src: discover1, alt: "Description 2" },
  { id: 3, src: discover2, alt: "Description 3" },
  { id: 4, src: discover6, alt: "Description 4" },
  { id: 5, src: discover4, alt: "Description 5" },
  { id: 6, src: discover5, alt: "Description 6" },
  { id: 3, src: discover2, alt: "Description 3" },
  { id: 7, src: discover6, alt: "Description 7" },
  { id: 8, src: discover7, alt: "Description 8" },
  { id: 3, src: discover8, alt: "Description 3" },
];

export default coverT;
