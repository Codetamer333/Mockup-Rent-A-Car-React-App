
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComp from './components/HomeComp';
import FooterComp from './components/FooterComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhyChooseUs from './components/WhyChooseUs';
import SearchCars from './components/SearchCars';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import HowItWorkPage from './components/HowItWorkPage';
import Example from './components/Example';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <HomeComp/>} />
            <Route path="/page3" element={<WhyChooseUs/>} />
            <Route path="/page4" element={<SearchCars/>} />
            <Route path="/page2" element={<HowItWorkPage/>} />
            <Route path="/SignUpPage" element={<SignUpPage/>} />
            <Route path="/SignInPage" element={<SignInPage/>} />
            <Route path="/RegisterPage" element={<RegisterPage/>} />
            <Route path="/rent" element={<Example/>} />
            <Route path="*" element={<h1>You are not in a page</h1>} />
          </Routes>
          <FooterComp/>
        </Router>
    </div>
  )
}

export default App;
