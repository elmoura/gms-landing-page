import { Target, Users, Lightbulb, ShieldCheck } from 'phosphor-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Suas metas são nossas metas. Trabalhamos lado a lado para alcançar resultados.',
    },
    {
      icon: Users,
      title: 'Transparência',
      description: 'Comunicação clara e honesta em cada etapa do projeto.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Utilizamos as tecnologias mais modernas para criar soluções eficientes.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiabilidade',
      description: 'Entregamos qualidade e suporte contínuo para o sucesso do seu negócio.',
    },
  ];

  return (
    <section id="sobre" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl transform -rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1758518730037-a16581a040e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nfGVufDF8fHx8MTc3MTk0MzI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipe em reunião"
              className="relative rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className='flex flex-col items-center'>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
                <span className="text-sm md:text-base font-semibold">Sobre Nós</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
                Sua parceira na transformação digital
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-center mb-8">
                A <span className="font-semibold text-blue-600">GMS Desenvolvimento</span> nasceu
                com a missão de democratizar a tecnologia para empresas de pequeno e médio porte.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Acreditamos que toda empresa, independente do tamanho, merece ter acesso a soluções
                tecnológicas de qualidade que impulsionem seu crescimento. Nossa abordagem é
                cordial, transparente e focada em resultados reais: aumento de eficiência para seu negócio, e
                melhoria na experiência dos seus clientes.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-white rounded-xl border border-blue-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Nossa Missão</h3>
              <p className="text-slate-600">
                Ajudar empresas de pequeno e médio porte em sua transformação digital,
                automatizando e melhorando processos para proporcionar uma melhor experiência aos
                clientes e aumentar o faturamento das empresas.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className='flex flex-col md:flex-row items-center gap-x-2'>
                      <Icon size={32} weight="duotone" className="text-blue-600 mb-2" />
                      <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-2">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
