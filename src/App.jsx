import { Buscador } from "./components/Buscador";
import { Clima } from "./components/Clima";
import { DiasClima } from "./components/DiasClima";
import { MiClima } from "./components/MiClima";
import Spline from '@splinetool/react-spline';

//import { fetchDiasData } from './apis/dias';
// import { miUbicacionClima } from "./apis/miUbicaciónClima";

function App() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 flex flex-col items-center justify-center gap-4">
      <Spline
        className="absolute inset-0 z-0"
        scene="https://prod.spline.design/L9Jf3BohcSU7wbTb/scene.splinecode"
      />
      <Buscador/>
      <div className="relative flex flex-col items-center justify-center gap-4 z-10">
        <section className="flex items-center justify-center gap-7">
          <MiClima />
          <Clima />
        </section>
        <DiasClima />
      </div>
    </main>
  );
}


export default App;