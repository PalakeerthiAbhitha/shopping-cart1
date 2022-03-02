import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Banner from "./components/Banner";
function App(props) {

  const {product,cartVal,cartItem,onAddCart,onRemoveCart,onRemoveWholeCart}=props;

  return (
    <>
     <Header cartVal={cartVal}/>
     <Banner/>
     <MainContent  product={product}
          onAddCart={onAddCart}
          onRemoveCart={onRemoveCart}
          cartItem={cartItem}
          onRemoveWholeCart={onRemoveWholeCart}/>
     <Footer/>
    </>
  );
}

export default App;