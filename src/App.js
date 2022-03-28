import './index.scss';
import Footer from "./components/layout/footer/footer";
import Home from './components/pages/homepage/home';
import Services from './components/pages/services/services';
import Nav from './components/layout/nav/nav';
import Header from './components/layout/header/header';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
