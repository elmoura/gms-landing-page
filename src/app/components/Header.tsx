import { useState } from 'react';
import { List, X } from 'phosphor-react';
import { Button } from './ui/button';
import LogoIcon from '../../assets/icon.svg'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-xl">G</span> */}
                <LogoIcon className='w-7 h-7 text-white' />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">GMS</h1>
                <p className="text-xs text-slate-600">Desenvolvimento</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 w-full"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
