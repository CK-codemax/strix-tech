import Products from "./components/Products";
import TopSlide from "./components/TopSlide";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Top from "./components/Top";
import Footer from "./components/Footer";

export default function page() {
  return (<div>
       <Top />
       <Header />
        <Nav />
     <TopSlide />
     <Products />
     <Footer />
  </div>
   
  )
}
