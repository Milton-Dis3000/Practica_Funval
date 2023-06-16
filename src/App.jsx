import "./App.css";
import Tarjeta from "./caja/Tarjeta";
import Header from "./header/Header";
function App() {
  return (
    <>
      <section className="body">
        <div className="mes">
          <h1>Tarjeta de Animales</h1>
          <Tarjeta
            img="http://placekitten.com/201/200"
            nombre="Doly"
            cargo="Raza Unica"
            numero="345-456-7"
            app="src\iconos\whatsapp.svg"
            
         
          />
        </div>
      </section>
    </>
  );
}
export default App