import Products from "./components/Products";
import TopSlide from "./components/TopSlide";
import Header from "./components/Header";
import Nav from "./components/Nav";

export default function page() {
  return (<>
       <Header />
        <Nav />
     <TopSlide />
     <Products />
  </>
   
  )
}
