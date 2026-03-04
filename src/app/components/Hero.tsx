import { ArrowRight, CheckCircle } from 'phosphor-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-5 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-blue-800/5" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="font-secondary inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full ">
              <CheckCircle size={20} className="mr-2" weight="fill" />
              <span className="text-sm md:text-base font-semibold">Transformação Digital para sua Empresa</span>
            </div>

            <div className="space-y-4 -mt-5">
              <h1 className="font-secondary text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Impulsione seu negócio com{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  tecnologia de ponta
                </span>
              </h1>
              <p className="text-center md:text-left text-lg md:text-xl text-slate-600 leading-relaxed">
                Ajudamos empresas de pequeno e médio porte a crescerem através da automação de
                processos e soluções digitais personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg px-8"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 text-lg px-8"
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="text-center grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-slate-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-slate-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1762341123207-534f965910df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTk0MDc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tecnologia moderna"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
