import Footer from "./components/Footer";
import QrCode from './components/QrCode';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow flex justify-center items-center pb-40 pr-10">
  <QrCode />
</main>

      <Footer />
    </div>
  );
}
