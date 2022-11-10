import "./app.scss";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productList/ProductList";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
