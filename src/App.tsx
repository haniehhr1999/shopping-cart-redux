import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ProductList from "./components/ProductList.tsx";
import { productData } from "./data/items.ts";
import Product from "./components/Product.tsx";
import Navbar from "./components/Navbar.tsx";
// import {Navbar} from "./components/Navbar.jsx";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {productData.map((product) => (
            <div key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </ProductList>
    </Provider>
  );
}

export default App;
