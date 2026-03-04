import {
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  GithubLogo,
  Envelope,
  Phone,
} from 'phosphor-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">GMS</h3>
                <p className="text-xs text-slate-400">Desenvolvimento</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transformando negócios através da tecnologia. Seu parceiro confiável para soluções
              digitais.
            </p>
            {/* <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <LinkedinLogo size={20} weight="bold" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FacebookLogo size={20} weight="bold" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <GithubLogo size={20} weight="bold" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-slate-400">Desenvolvimento de Sistemas</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Sites e Landing Pages</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Aplicativos Mobile</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Consultoria de TI</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Automação de Processos</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Envelope size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:gabriel.moura.software@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  gabriel.moura.software@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5511999999999"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  (13) 99137-1291
                </a>
              </li>
              <li>
                <p className="text-sm text-slate-400">São Vicente, SP - Brasil</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {currentYear} GMS Desenvolvimento. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
