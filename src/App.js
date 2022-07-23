import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';


function App() {
  return (
    <>
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/Expenses">Expenses</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/Invoices">Invoices</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </>
  );
}
export default App;


// <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />} />
//       </Routes>
