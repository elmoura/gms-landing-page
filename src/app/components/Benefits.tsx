import { TrendUp, Clock, ChartLineUp, Headset } from 'phosphor-react';

export function Benefits() {
  const benefits = [
    {
      icon: TrendUp,
      title: 'Aumento de Faturamento',
      description:
        'Soluções que geram resultados reais: mais vendas, mais eficiência e mais lucro para seu negócio.',
      stat: '+40%',
      statLabel: 'em média',
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description:
        'Automatize processos repetitivos e libere sua equipe para focar em atividades estratégicas.',
      stat: '15h',
      statLabel: 'economizadas/semana',
    },
    {
      icon: ChartLineUp,
      title: 'Escalabilidade',
      description:
        'Sistemas que crescem junto com seu negócio, sem necessidade de recomeçar do zero.',
      stat: '100%',
      statLabel: 'adaptável',
    },
    {
      icon: Headset,
      title: 'Suporte Dedicado',
      description:
        'Nossa equipe está sempre disponível para garantir que tudo funcione perfeitamente.',
      stat: '24/7',
      statLabel: 'disponibilidade',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <span className="text-sm md:text-base font-semibold font-medium">Por que escolher a GMS Desenvolvimento?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Benefícios que fazem a diferença
          </h2>
          <p className="text-lg text-slate-600">
            Nossos clientes experimentam resultados concretos e mensuráveis
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={index}
                className="relative px-6 py-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className='flex flex-col gap-x-4 max-md:items-center'>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <section className='flex gap-x-3'>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-white" />
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{benefit.stat}</div>
                      <div className="text-xs text-slate-600">{benefit.statLabel}</div>
                    </div>
                  </section>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Como Trabalhamos</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Um processo transparente e colaborativo do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Descoberta',
                description: 'Entendemos seu negócio, desafios e objetivos',
              },
              {
                number: '02',
                title: 'Planejamento',
                description: 'Criamos uma estratégia personalizada para você',
              },
              {
                number: '03',
                title: 'Desenvolvimento',
                description: 'Construímos a solução com acompanhamento constante',
              },
              {
                number: '04',
                title: 'Suporte',
                description: 'Garantimos o sucesso contínuo da sua solução',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-2 text-5xl font-bold bg-gradient-to-b from-blue-300/30 to-white text-transparent bg-clip-text ">{step.number}</div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}