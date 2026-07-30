import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import FaleConosco from './pages/FaleConosco';
import Sobre from './pages/SobreNos';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
