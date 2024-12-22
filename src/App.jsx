import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import { BookingProvider } from "./context/booking/BookingContext";
function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
