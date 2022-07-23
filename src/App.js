import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/home';
import SimpleComponent from './routes/SimpleComponent';
import Invoices from './routes/invoices';


function App() {
  return (
    <>
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/simple-component">Simple Component</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/Invoices">Invoices</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="simple-component" element={<SimpleComponent />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </>
  );
}
export default App;