import { Banner } from './components/Banner';
import { Navbar } from "./components/Navbar";
import { Services } from './components/services';
import { WhatsApp } from './components/Whatsapp';
import "./App.css"



const App = () => {
  return (
    <>
    <Navbar />
    <Services/>
    <WhatsApp />
    <Banner />
    </>
  )
};

export default App;
