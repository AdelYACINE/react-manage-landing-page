import About from "./Componet/About";
import Footer from "./Componet/Footer";
import Header from "./Componet/Header";
import Pub from "./Componet/Pub";
import Testemonios from "./Componet/Testemonios";

function App() {
  return (
    <div className="body-container">
      <div className="container">
        <Header />
        <About />
      </div>
      <Testemonios />
      <Pub />
      <Footer />
    </div>
  );
}

export default App;
