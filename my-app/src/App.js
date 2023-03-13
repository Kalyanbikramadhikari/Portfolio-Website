import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Myworks from "./components/myworks";
import Navbar from "./components/navbar"
import Services from "./components/services";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Myworks/>
      <Contact/>

    </div>
  );
}

export default App;
