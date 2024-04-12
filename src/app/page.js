import App from "./components/App";
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import Customers from "./components/Customers";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Savers from "./components/Savers";
import Sells from "./components/Sells";
import Shipping from "./components/Shipping";
import Subscribe from "./components/Subscribe";
import Vegetables from "./components/Vegetables";
export default function Home() {
  return (
    <main className="Home">
      <HomePage />
      <Shipping />
      <Categories />
      <Products />
      <Vegetables/>
      <Savers/>
      <Customers/>
      <App/>
      <Sells/>  
      <Blogs/>
      <Subscribe/>
    </main>
  );
}
