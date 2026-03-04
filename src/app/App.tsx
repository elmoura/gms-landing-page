import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
