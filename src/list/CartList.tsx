import { cart1, cart2, cart3, cart4, cart5, cart6 } from "../images";
type RecommendType = {
  image: string;
  link: string;
  about: string;
  amount: string;
};

export const CartList: Array<RecommendType> = [
  {
    image: cart1,
    link: "first link",
    about: "Stylish shoe for all occasions",
    amount: "$50.00",
  },
  {
    image: cart2,
    link: "second link",
    about: "Amazing gadget for tech enthusiasts",
    amount: "$150.75",
  },
  {
    image: cart3,
    link: "third link",
    about: "Beautiful scenery for your living room",
    amount: "$200.99",
  },
  {
    image: cart4,
    link: "fourth link",
    about: "Modern kitchen appliance for healthy meals",
    amount: "$75.50",
  },
  {
    image: cart5,
    link: "fifth link",
    about: "Delicious cake for breakfast and dessert",
    amount: "$30.56",
  },
  {
    image: cart6,
    link: "sixth link",
    about: "Convenient payment method for online shopping",
    amount: "$5.00",
  },
];

export default CartList;
