import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
