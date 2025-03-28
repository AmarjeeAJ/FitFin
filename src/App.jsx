import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Cursor from "./Components/Cursor";
import Home from "./Components/Home/Homepage";
import Solution1 from "./Components/Oursolution/Solution1";
import Solution2 from "./Components/Oursolution/Solution2";
import ScrollToTop from "./ScrollToTop"
import Solution3 from "./Components/Oursolution/Solution3";
import PaymentSolution from "./Components/Oursolution/PaymentSolution";
import PricingPlan from "./Components/Oursolution/PricingPlan";
import News from "./Components/Oursolution/News";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Cursor />
        <Header />
        <Home />
        <Solution1 />
        <Solution2 />
        <Solution3/>
        <PaymentSolution/>
        <PricingPlan/>
        <News/>
        <ScrollToTop />  {/* Added ScrollToTop here */}
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
