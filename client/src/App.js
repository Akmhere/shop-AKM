import "./App.css";
import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Productdescsreen from "./screens/Productdescsreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Orderinfo from "./screens/Orderinfo";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={Productdescsreen} />
        <Route path="/cart" component={Cartscreen} />
        <Route path="/login" component={Loginscreen} />
        <Route path="/register" component={Registerscreen} />
        <Route path="/orders" component={Ordersscreen} />
        <Route path="/orderinfo/:orderid" component={Orderinfo} />
        <Route path="/profile" component={Profilescreen} />
        <Route path="/admin" component={Adminscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
