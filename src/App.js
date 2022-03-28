import './index.scss';
import Footer from "./components/layout/footer/footer";
import Home from './components/pages/homepage/home';
import Nav from './components/layout/nav/nav';
import Header from './components/layout/header/header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
