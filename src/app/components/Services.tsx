import {
  Code,
  Desktop,
  Megaphone,
  Headset,
  DeviceMobile,
  GitBranch,
  Gear,
} from 'phosphor-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Sistemas',
    description:
      'Sistemas completos e personalizados para otimizar os processos do seu negócio, aumentando eficiência e produtividade.',
  },
  {
    icon: Desktop,
    title: 'Sites Organizacionais',
    description:
      'Sites institucionais profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description:
      'Páginas de conversão otimizadas para capturar leads e aumentar suas vendas de forma estratégica.',
  },
  {
    icon: Headset,
    title: 'Consultoria de TI',
    description:
      'Orientação especializada para tomar as melhores decisões tecnológicas alinhadas aos objetivos do seu negócio.',
  },
  {
    icon: DeviceMobile,
    title: 'Aplicativos Mobile',
    description:
      'Apps nativos e híbridos para iOS e Android, levando seu negócio para o bolso dos seus clientes.',
  },
  {
    icon: Gear,
    title: 'Automação de Processos',
    description:
      'Automatize tarefas repetitivas, reduza custos e erros, permitindo que sua equipe foque no que realmente importa.',
  },
  {
    icon: GitBranch,
    title: 'Integração de Sistemas',
    description:
      'Conectamos suas ferramentas e sistemas para trabalharem em harmonia, eliminando trabalho manual duplicado.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <span className="font-secondary font-semibold">Nossas Soluções</span>
          </div>
          <h2 className="font-secondary text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Serviços que transformam seu negócio
          </h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma gama completa de serviços de tecnologia para impulsionar sua
            transformação digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex text-center md:text-left flex-col md:flex-row gap-x-6 group px-4 py-4 md:py-7 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} weight="duotone" className="text-blue-600" />
                  </div>

                </div>
                <div>
                  <h3 className="font-secondary text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Não encontrou o que procura?
              </h3>
              <p className="text-slate-600">
                Entre em contato conosco para discutir uma solução personalizada para seu negócio.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all whitespace-nowrap"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}