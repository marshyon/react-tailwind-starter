import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/home';
import EmailSubscription from './routes/EmailSubscription';
import Purchase from './routes/Purchase';
import Prices from './routes/Prices';
import Login from './routes/Login';
import StickyHeader from './routes/stickyHeader';
import FixedFooter from './routes/fixedFooter';


function App() {
  return (
    <>
      {/* <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/email-subscription">Email Subscription</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/purchase">Purchase</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/prices">Prices</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/login">Login</Link>
        </li>

      </ul> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sticky-header" element={<StickyHeader />} />
      <Route path="/fixed-footer" element={<FixedFooter />} />
        <Route path="email-subscription" element={<EmailSubscription />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="prices" element={<Prices />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;