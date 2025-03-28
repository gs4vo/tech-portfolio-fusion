
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
