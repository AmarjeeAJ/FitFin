import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cursor from "./Components/Cursor";
import Home from "./Components/Home/Homepage";
import Solution1 from "./Components/Oursolution/Solution1";
import Solution2 from "./Components/Oursolution/Solution2";
import ScrollToTop from "./ScrollToTop";
import Solution3 from "./Components/Oursolution/Solution3";
import PaymentSolution from "./Components/Oursolution/PaymentSolution";
import PricingPlan from "./Components/Oursolution/PricingPlan";
import News from "./Components/Oursolution/News";
import Footer from "./Components/Footer";
import Pricepage from "./Components/Pages/Pricepage";
import PricePlanpage from "./Components/Pages/Pricepage1";
import QuestionAns from "./Components/Pages/Pricenews";

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      <ScrollToTop />
      
      <Routes>
        
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Solution1 />
              <Solution2 />
              <Solution3 />
              <PaymentSolution />
              <PricingPlan />
              <News />
            </>
          } 
        />
        <Route path="/Pricing" element={<>
        <Pricepage/>
        <PricePlanpage/>
        <QuestionAns/>
        </>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
