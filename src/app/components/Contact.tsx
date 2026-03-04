import { useForm } from 'react-hook-form';
import { Envelope, Phone, MapPin, PaperPlaneRight } from 'phosphor-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    reset();
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <span className="text-sm md:text-base font-semibold">Entre em Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário abaixo e receba uma consultoria gratuita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Vamos conversar sobre sua transformação digital
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Estamos prontos para ouvir suas necessidades e criar uma solução personalizada que
                impulsione o crescimento do seu negócio. Nossa consultoria inicial é totalmente
                gratuita e sem compromisso.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Envelope size={24} weight="duotone" className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a
                    href="mailto:gabriel.moura.software@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    gabriel.moura.software@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} weight="duotone" className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Telefone</h4>
                  <a
                    href="tel:+55 (13) 99137-1291"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    +55 (13) 99137-1291
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} weight="duotone" className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Localização</h4>
                  <p className="text-slate-600">São Vicente, SP - Brasil</p>
                  <p className="text-sm text-slate-500 mt-1">Atendimento remoto para todo o país</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white">
              <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-blue-100">Segunda a Sexta: 9h às 18h</p>
              <p className="text-sm text-blue-100">Sábado: 9h às 13h</p>
              <p className="text-xs text-blue-200 mt-3">Suporte de emergência disponível 24/7 via WhastsApp: (13) 99137-1291</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="border-slate-300"
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                  className="border-slate-300"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  {...register('phone', { required: 'Telefone é obrigatório' })}
                  className="border-slate-300"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  {...register('company')}
                  className="border-slate-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  rows={5}
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  className="border-slate-300"
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                size="lg"
              >
                Enviar Mensagem
                <PaperPlaneRight size={20} className="ml-2" weight="bold" />
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Ao enviar este formulário, você concorda em ser contatado pela GMS Desenvolvimento
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
