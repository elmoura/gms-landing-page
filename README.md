# GMSB Desenvolvimento - Landing Page

Landing page corporativa profissional para consultoria de software GMSB Desenvolvimento, desenvolvida com React, Vite e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 6.3.5** - Build tool e dev server de alta performance
- **TailwindCSS 4.1.12** - Framework CSS utility-first
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Hook Form 7.55.0** - Gerenciamento de formulários
- **React Query (TanStack Query)** - Gerenciamento de estado assíncrono
- **Radix UI** - Componentes acessíveis e unstyled
- **Phosphor Icons** - Biblioteca de ícones moderna
- **Motion (Framer Motion)** - Animações e transições
- **Sonner** - Notificações toast elegantes

## 🎨 Design

O design segue uma identidade corporativa profissional com:

- **Cores principais**: Azul (#2563eb) e Branco (#ffffff)
- **Gradientes suaves**: Tons de azul para sensação de refinamento
- **Tom**: Cordial, gentil e transparente
- **Layout responsivo**: Adaptado para desktop, tablet e mobile

## 📦 Estrutura do Projeto

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # Componentes de UI reutilizáveis
│   │   │   ├── Header.tsx    # Cabeçalho com navegação
│   │   │   ├── Hero.tsx      # Seção hero principal
│   │   │   ├── Services.tsx  # Seção de serviços
│   │   │   ├── About.tsx     # Sobre a empresa
│   │   │   ├── Benefits.tsx  # Benefícios e processo
│   │   │   ├── Contact.tsx   # Formulário de contato
│   │   │   └── Footer.tsx    # Rodapé
│   │   └── App.tsx           # Componente principal
│   └── styles/
│       ├── fonts.css         # Fontes customizadas
│       ├── index.css         # Estilos globais
│       ├── tailwind.css      # Configuração Tailwind
│       └── theme.css         # Tokens de design
├── .eslintrc.cjs             # Configuração ESLint
├── .prettierrc               # Configuração Prettier
└── package.json
```

## 🛠️ Configuração e Instalação

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Lint do código
pnpm lint

# Formatar código
pnpm format

# Verificar formatação
pnpm format:check
```

## 📋 Funcionalidades

### Seções da Landing Page

1. **Header/Navegação**
   - Menu fixo com scroll suave
   - Menu mobile responsivo
   - Logo e identidade visual

2. **Hero Section**
   - Chamada principal com gradiente
   - CTAs (Call-to-Action) destacados
   - Estatísticas da empresa
   - Imagem ilustrativa

3. **Serviços**
   - Grid de 7 serviços principais
   - Ícones com animação
   - Descrições claras
   - CTA para contato

4. **Benefícios**
   - 4 principais benefícios com métricas
   - Seção de processo de trabalho (4 etapas)
   - Design com gradientes

5. **Sobre Nós**
   - Missão da empresa
   - Valores corporativos
   - Imagem da equipe

6. **Contato**
   - Formulário validado com React Hook Form
   - Informações de contato
   - Horários de atendimento
   - Toast de confirmação

7. **Footer**
   - Links rápidos
   - Redes sociais
   - Informações de contato
   - Copyright

## 🎯 Serviços da GMSB

- Desenvolvimento de Sistemas Completos
- Sites Organizacionais
- Landing Pages
- Consultoria de TI
- Aplicativos Mobile
- Automação de Processos
- Integração de Sistemas

## 💼 Sobre a GMSB Desenvolvimento

**Missão**: Ajudar empresas de pequeno e médio porte em sua transformação digital, automatizando e melhorando processos para proporcionar melhor experiência aos clientes e aumentar o faturamento.

**Cliente Ideal**: Donos de empresas ou gestores locais de pequeno/médio porte.

**Valores**:
- Foco no Cliente
- Transparência
- Inovação
- Confiabilidade

## 🔧 Ferramentas de Desenvolvimento

### Linting e Formatação

O projeto está configurado com:

- **ESLint**: Para análise estática do código
- **Prettier**: Para formatação consistente
- **TypeScript**: Para type checking

### Scripts Disponíveis

```json
{
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
  "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\""
}
```

## 📱 Responsividade

O layout é totalmente responsivo e otimizado para:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 🎨 Customização de Cores

As cores podem ser facilmente customizadas no arquivo `/src/styles/theme.css`:

```css
:root {
  --primary: #2563eb; /* Azul principal */
  --background: #ffffff; /* Fundo branco */
  /* ... outras variáveis */
}
```

## 📄 Licença

Este projeto é privado e pertence à GMSB Desenvolvimento.

## 📞 Contato

- **Email**: contato@gmsb.dev
- **Telefone**: (11) 99999-9999
- **Localização**: São Paulo, SP - Brasil
