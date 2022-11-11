import "./app.scss";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productList/ProductList";
import Topbar from "./components/topbar/TopbarProductList";
import AddForm from "./pages/addProduct/AddForm";

function App() {
  return (
    <div className="app">
      {/* <Topbar />
      <ProductList />
      <Footer /> */}
      <AddForm />
    </div>
  );
}

export default App;
