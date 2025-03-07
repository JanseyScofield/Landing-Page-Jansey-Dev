import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacao from "./components/barraNavegacao/BarraNavegacao";
import Sobre from "./components/sobre/Sobre";

function App() {

  return(
    <main className="container d-flex flex-column align-items-center justify-content-center">
      <BarraNavegacao/>
      <Sobre/>
    </main>
  );
}

export default App;
