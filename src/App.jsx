import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './router/appRouter';
import Productos from './components/Productos';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;