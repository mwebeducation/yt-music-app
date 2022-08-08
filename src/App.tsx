import {FC} from 'react';
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Experience from "./components/Experience";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Download from "./components/Download";

const App: FC = () => {
  return <div className="App text-white overflow-hidden item-center z=[5]">
    <Header/>
    <HeroSection />
    <Experience />
    <Search />
    <Download/>
    <Footer/>
  </div>
}

export default App;