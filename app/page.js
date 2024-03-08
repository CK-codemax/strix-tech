import Products from "./components/Products";
import TopSlide from "./components/TopSlide";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Top from "./components/Top";

export default function page() {
  return (<div>
       <Top />
       <Header />
        <Nav />
     <TopSlide />
     <Products />
  </div>
   
  )
}
