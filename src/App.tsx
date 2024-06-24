import Feature from './Feature.tsx';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import Footer from './Footer.tsx';

function App() {
  return (
    <div>
      <div className="w-full border-b border-gray-200">
        <Header />
      </div>
      <main className="mb-8 flex flex-col gap-8 md:mb-24 md:gap-24">
        <Hero />
        <Feature />
      </main>
      <div className="w-full border-t border-gray-200">
        <Footer />
      </div>
    </div>
  );
}

export default App;
