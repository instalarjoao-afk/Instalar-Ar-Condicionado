export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'instalacao' | 'manutencao' | 'higienizacao' | 'exterior';
  categoryLabel: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  isPlaceholder?: boolean;
  category: 'climatizacao' | 'outros';
  features: string[];
}

export const siteConfig = {
  companyName: "Instalar Ar Condicionado",
  tagline: "Climatização e soluções para o seu espaço em Coimbra",
  subtitle: "Instalação de ar condicionado, bombas de calor, eletricidade e remodelações.",
  description: "Serviços para habitações e espaços comerciais, com soluções adaptadas às necessidades de cada projeto.",
  email: "instalar.joao@gmail.com",
  phone: "924 807 017",
  phoneRaw: "+351924807017",
  phoneFormatted: "+351 924 807 017",
  phone1: "924 807 017",
  phone1Raw: "+351924807017",
  whatsapp: "https://wa.me/351924807017",
  whatsapp1: "https://wa.me/351924807017",
  whatsappMessage: "Olá, gostaria de falar sobre instalação ou manutenção de ar condicionado em Coimbra.",
  instagram: "https://www.instagram.com/instalar.arcondicionado?stkn=MWRicW13c29lYnpzZw==",
  serviceArea: "Coimbra e região",
  serviceAreaFull: "Coimbra e região, Portugal",
  logo: "/logo.png",
  highlights: [
    "Coimbra e concelhos vizinhos",
    "Atendimento rápido e direto",
    "Soluções para diferentes espaços"
  ],
  brands: [
    { name: "CoolSmart", description: "Sistemas eficientes de climatização" },
    { name: "Nipon", description: "Equipamentos de alta fiabilidade e robustez" },
    { name: "Haier", description: "Tecnologia moderna e conectividade inteligente" },
    { name: "Mitsubishi Electric", description: "Referência em eficiência e silêncio" },
    { name: "Samsung", description: "Inovação tecnológica e climatização uniforme" },
    { name: "LG", description: "Design moderno e eficiência energética" }
  ],
  whyChooseUs: [
    {
      title: "Atendimento próximo",
      description: "Acompanhamento direto e resposta rápida às suas questões e necessidades específicas."
    },
    {
      title: "Soluções personalizadas",
      description: "Propostas claras e transparentes, adequadas à dimensão e características do seu espaço."
    },
    {
      title: "Instalação cuidada",
      description: "Atenção rigorosa aos acabamentos, proteção das superfícies e correta passagem técnica."
    },
    {
      title: "Foco no conforto",
      description: "Soluções pensadas para garantir temperatura ideal, eficiência energética e tranquilidade."
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "CONTACTO INICIAL",
      description: "Entre em contacto através do WhatsApp ou chamada telefónica (+351 924 807 017)."
    },
    {
      step: "02",
      title: "AVALIAÇÃO",
      description: "Recolhemos as informações necessárias sobre o espaço e o serviço pretendido."
    },
    {
      step: "03",
      title: "PROPOSTA",
      description: "Apresentamos uma solução adequada e transparente para o serviço pretendido."
    },
    {
      step: "04",
      title: "SERVIÇO",
      description: "Agendamos e executamos a intervenção com rigor técnico e limpeza."
    },
    {
      step: "05",
      title: "ACOMPANHAMENTO",
      description: "Prestamos as orientações necessárias e assistência pós-intervenção."
    }
  ],
  faqs: [
    {
      question: "Fazem instalação de ar condicionado em Coimbra?",
      answer: "Sim, prestamos serviços de instalação, manutenção e assistência de ar condicionado em toda a região de Coimbra, tanto para habitações como para espaços comerciais."
    },
    {
      question: "Como posso entrar em contacto para agendar um serviço?",
      answer: "Pode contactar-nos diretamente pelo WhatsApp ou por chamada telefónica através do número +351 924 807 017, ou enviar uma mensagem através do formulário nesta página."
    },
    {
      question: "Posso enviar fotografias do local?",
      answer: "Sim, pode enviar fotografias do espaço diretamente pelo WhatsApp para o número +351 924 807 017. Isto ajuda-nos a avaliar antecipadamente as características do local e as necessidades de intervenção."
    },
    {
      question: "Fazem manutenção de ar condicionado?",
      answer: "Sim, realizamos manutenção preventiva e corretiva, incluindo limpeza profunda e higienização dos filtros e componentes internos para preservar o bom funcionamento dos equipamentos."
    },
    {
      question: "Que marcas trabalham?",
      answer: "Trabalhamos com equipamentos de várias marcas conceituadas, designadamente CoolSmart, Nipon, Haier, Mitsubishi Electric, Samsung e LG, o que nos permite sugerir a opção mais adequada para cada situação."
    },
    {
      question: "Que outros serviços disponibilizam?",
      answer: "Além da climatização (instalação, manutenção, limpeza, assistência e avaliação), disponibilizamos também serviços de eletricidade, instalação de bombas de calor e remodelações para a sua casa ou empresa."
    }
  ]
};

// Galeria oficial de trabalhos com fotografias reais fornecidas pelo cliente
export const galleryImages: GalleryItem[] = [
  {
    id: "servico-01",
    src: "/images/servico-01.jpeg",
    alt: "Instalação de ar condicionado interior sobre portas em habitação",
    title: "Instalação Interior Residencial",
    category: "instalacao",
    categoryLabel: "Instalação",
    description: "Instalação de unidade interior split com encaminhamento técnico discreto e alinhamento milimétrico."
  },
  {
    id: "servico-02",
    src: "/images/servico-02.jpeg",
    alt: "Unidade exterior de ar condicionado instalada em varanda com suportes de parede",
    title: "Unidade Exterior em Varanda",
    category: "exterior",
    categoryLabel: "Exterior",
    description: "Montagem exterior sobre suportes reforçados de parede com calha de proteção das tubagens frigoríficas."
  },
  {
    id: "servico-03",
    src: "/images/servico-03.jpeg",
    alt: "Unidade interior split moderna da marca Haier",
    title: "Split Haier em Espaço Moderno",
    category: "instalacao",
    categoryLabel: "Instalação",
    description: "Equipamento split com acabamento de alta qualidade e integração estética no ambiente interior."
  },
  {
    id: "servico-04",
    src: "/images/servico-04.jpeg",
    alt: "Filtros de ar condicionado com poeira acumulada antes da limpeza e higienização",
    title: "Manutenção - Estado Inicial (Antes)",
    category: "higienizacao",
    categoryLabel: "Higienização",
    description: "Verificação e diagnóstico de filtros com poeira acumulada antes do processo de higienização profunda."
  },
  {
    id: "servico-05",
    src: "/images/servico-05.jpeg",
    alt: "Unidade de ar condicionado totalmente limpa e higienizada",
    title: "Higienização Concluída (Depois)",
    category: "higienizacao",
    categoryLabel: "Higienização",
    description: "Equipamento totalmente desinfetado e limpo, restaurando a qualidade do ar e o rendimento térmico."
  },
  {
    id: "servico-06",
    src: "/images/servico-06.jpeg",
    alt: "Instalação de ar condicionado em parede azul decorada com iluminação pendente",
    title: "Integração Arquitetónica Elegante",
    category: "instalacao",
    categoryLabel: "Instalação",
    description: "Integração harmoniosa do ar condicionado em ambiente decorado com iluminação contemporânea."
  },
  {
    id: "servico-07",
    src: "/images/servico-07.jpeg",
    alt: "Instalação em sala com vigas de madeira rústica e display digital com indicação de temperatura",
    title: "Ambiente Rústico e Conforto Térmico",
    category: "instalacao",
    categoryLabel: "Instalação",
    description: "Climatização precisa com leitura de temperatura digital (22°C) sob vigamento de madeira tradicional."
  },
  {
    id: "servico-08",
    src: "/images/servico-08.jpeg",
    alt: "Duas unidades exteriores Nipon montadas em cobertura plana com apoios antivibráticos",
    title: "Unidades Exteriores em Cobertura",
    category: "exterior",
    categoryLabel: "Exterior",
    description: "Instalação de compressores Nipon com apoios antivibráticos ajustáveis para anulação de ruído e vibração."
  },
  {
    id: "servico-09",
    src: "/images/servico-09.jpeg",
    alt: "Ligação técnica e isolamento térmico de tubagens de ar condicionado em terraço",
    title: "Acabamento Técnico e Isolamento",
    category: "exterior",
    categoryLabel: "Exterior",
    description: "Passagem de tubagens frigoríficas seladas e isoladas com proteção impermeável duradoura."
  }
];

export const mainServices: ServiceItem[] = [
  {
    id: "instalacao-ar-condicionado",
    title: "Instalação de Ar Condicionado",
    description: "Instalação de sistemas de ar condicionado adaptada às características do espaço.",
    image: "/images/servico-01.jpeg",
    category: "climatizacao",
    features: [
      "Habitações e espaços comerciais",
      "Encaminhamento técnico discreto",
      "Equipamentos mono-split e multi-split",
      "Testes de estanquidade e vácuo rigorosos"
    ]
  },
  {
    id: "manutencao",
    title: "Manutenção",
    description: "Manutenção de sistemas de ar condicionado para ajudar a preservar o desempenho e o bom funcionamento dos equipamentos.",
    image: "/images/servico-04.jpeg",
    category: "climatizacao",
    features: [
      "Verificação de pressões e gás refrigerante",
      "Revisão de circuitos elétricos e drenos",
      "Deteção precoce de anomalias",
      "Otimização do consumo elétrico"
    ]
  },
  {
    id: "limpeza-higienizacao",
    title: "Limpeza e Higienização",
    description: "Limpeza e higienização dos equipamentos de ar condicionado.",
    image: "/images/servico-05.jpeg",
    category: "climatizacao",
    features: [
      "Lavagem profunda de filtros",
      "Desinfeção de baterias e turbinas",
      "Eliminação de odores e bactérias",
      "Melhoria imediata da qualidade do ar respirado"
    ]
  },
  {
    id: "assistencia-tecnica",
    title: "Assistência Técnica",
    description: "Apoio na identificação de problemas e assistência aos equipamentos.",
    image: "/images/servico-07.jpeg",
    category: "climatizacao",
    features: [
      "Diagnóstico rigoroso de avarias",
      "Resolução de fugas e ruídos anormais",
      "Substituição de componentes",
      "Apoio técnico no local"
    ]
  },
  {
    id: "avaliacao-espaco",
    title: "Avaliação do Espaço",
    description: "Análise do espaço para ajudar a encontrar uma solução de climatização adequada.",
    image: "/images/servico-03.jpeg",
    category: "climatizacao",
    features: [
      "Cálculo de potência térmica necessária (BTU)",
      "Análise de exposição solar e isolamento",
      "Definição da melhor localização dos aparelhos",
      "Proposta à medida sem compromisso"
    ]
  }
];

export const otherServices: ServiceItem[] = [
  {
    id: "eletricidade",
    title: "Eletricidade",
    description: "Serviços de eletricidade para instalações, melhorias e necessidades elétricas de habitações e espaços comerciais.",
    image: "/images/servico-eletricidade.jpg",
    isPlaceholder: true,
    category: "outros",
    features: [
      "Quadros elétricos e proteções",
      "Iluminação e tomadas",
      "Alimentação dedicada para climatização",
      "Remodelação e reforço de redes elétricas"
    ]
  },
  {
    id: "bomba-calor",
    title: "Bomba de Calor",
    description: "Soluções com bombas de calor para climatização e conforto, de acordo com as características e necessidades do espaço.",
    image: "/images/servico-08.jpeg",
    isPlaceholder: false,
    category: "outros",
    features: [
      "Soluções aerotérmicas de elevado rendimento",
      "Conforto térmico todo o ano",
      "Eficiência energética sustentável",
      "Adequação técnica ao espaço"
    ]
  },
  {
    id: "remodelacoes",
    title: "Remodelações",
    description: "Serviços de remodelação e melhoria de espaços, com soluções adaptadas às necessidades de cada projeto.",
    image: "/images/servico-remodelacoes.jpg",
    isPlaceholder: true,
    category: "outros",
    features: [
      "Renovação e melhoria de divisões",
      "Tetos falsos e integração de calhas",
      "Acabamentos interiores cuidados",
      "Apoio integral em projetos residenciais e comerciais"
    ]
  }
];
