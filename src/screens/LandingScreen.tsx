import { Nav, Sec, Footer } from "../components/layouts";
import {
  Product,
  Recently,
  Alsolike,
  Discover,
  Category,
} from "../components/product";

const LandingScreen = () => {
  return (
    <div>
      <Nav />
      {/* <Sec /> */}
      <Category />
      <Product />
      <Recently />
      <Alsolike />
      <Discover />
      <Footer />
    </div>
  );
};

export default LandingScreen;
