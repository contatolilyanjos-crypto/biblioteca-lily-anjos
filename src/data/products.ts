export type InteriorImage = {
  src: string;
  alt: string;
};

export type Volume = {
  slug: string;
  numero: number;
  titulo: string;
  descricao: string;
  imagem: string;
  precoAVista: string;
  parcelamento: string;
  linkCheckout: string;
  ctaLabel: string;
  interiores: InteriorImage[];
};

export const colecao = {
  titulo: "Leve os cinco volumes da Biblioteca Lily Anjos",
  selo: "MELHOR ESCOLHA • ECONOMIZE R$ 74,60",
  descricao:
    "Flores de corte, folhagens, sementes, frutos, elementos desidratados, plantas de vaso e frutas aplicadas à decoração de eventos.",
  imagem: "/produtos/colecao-completa.png",
  precoAnterior: "De R$ 299,50",
  precoAVista: "Por R$ 224,90 à vista",
  parcelamento: "ou 12x de R$ 23,26",
  linkCheckout: "https://pay.hotmart.com/W106909386M?off=5wn31j8a",
  ctaLabel: "QUERO OS 5 VOLUMES COM DESCONTO",
};

export const volumes: Volume[] = [
  {
    slug: "volume-1",
    numero: 1,
    titulo: "Volume 1 — Flores de Corte",
    descricao:
      "94 espécies com fotos, cores, tamanhos, disponibilidade, custos, cuidados e aplicações.",
    imagem: "/produtos/volume-1-flores-de-corte.png",
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/L106908323G?off=9ype1fn2",
    ctaLabel: "COMPRAR VOLUME 1",
    interiores: [
      {
        src: "/interiores/volume-1/01-indice-flores-brancas.png",
        alt: "Página de índice visual do Volume 1 com fotos de flores brancas de corte, cada uma com nome e número de página.",
      },
      {
        src: "/interiores/volume-1/02-indice-flores-rosas.png",
        alt: "Página de índice visual do Volume 1 com fotos de flores rosa e pink de corte, cada uma com nome e número de página.",
      },
      {
        src: "/interiores/volume-1/03-ficha-bouvardia-tons.png",
        alt: "Ficha técnica da Bouvardia mostrando foto, identificação, tons disponíveis (branco, rosa, salmão, vermelho), aplicabilidade e cuidados.",
      },
      {
        src: "/interiores/volume-1/04-ficha-gypsophila.png",
        alt: "Ficha técnica da Gypsophila (mosquitinho) com foto, identificação, tamanho, uso em projetos e dica de cuidado.",
      },
    ],
  },
  {
    slug: "volume-2",
    numero: 2,
    titulo: "Volume 2 — Folhagens, Sementes e Frutos",
    descricao:
      "108 folhagens e 45 sementes e frutos, com identificação, características, cuidados e aplicações.",
    imagem: "/produtos/volume-2-folhagens-sementes-frutos.png",
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/A106908702D?off=nchlxtij",
    ctaLabel: "COMPRAR VOLUME 2",
    interiores: [
      {
        src: "/interiores/volume-2/01-ficha-folhagem-alecrim.png",
        alt: "Ficha técnica da folhagem Alecrim com foto, identificação, aparência, uso em projetos e dica de cuidado.",
      },
      {
        src: "/interiores/volume-2/02-ficha-folhagem-aspargo-ming.png",
        alt: "Ficha técnica da folhagem Aspargo Ming com foto, identificação, aparência e cuidados.",
      },
      {
        src: "/interiores/volume-2/03-ficha-folhagem-palmeira.png",
        alt: "Ficha técnica da folhagem Palmeira com foto, identificação, aparência e cuidados.",
      },
      {
        src: "/interiores/volume-2/04-ficha-peperomia-melancia.png",
        alt: "Ficha técnica da folhagem Peperômia Melancia com foto, identificação, aparência e cuidados.",
      },
    ],
  },
  {
    slug: "volume-3",
    numero: 3,
    titulo: "Volume 3 — Flores e Plantas Desidratadas",
    descricao:
      "91 elementos secos, desidratados, preservados e alvejados, com diferenças, cuidados e aplicações.",
    imagem: "/produtos/volume-3-flores-plantas-desidratadas.png",
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/Q106908821K?off=8clssgdp",
    ctaLabel: "COMPRAR VOLUME 3",
    interiores: [
      {
        src: "/interiores/volume-3/01-ficha-assa-peixe-desidratado.png",
        alt: "Ficha técnica do Assa-peixe desidratado com foto, identificação, comercialização e uso em projetos.",
      },
      {
        src: "/interiores/volume-3/02-ficha-capim-pinguelo.png",
        alt: "Ficha técnica do Capim pinguelo com foto, identificação, comercialização e uso em projetos.",
      },
      {
        src: "/interiores/volume-3/03-ficha-estrelinha.png",
        alt: "Ficha técnica da Estrelinha (semente de Pau Jaú colada) com foto, identificação e uso em projetos.",
      },
      {
        src: "/interiores/volume-3/04-ficha-mileto.png",
        alt: "Ficha técnica do Mileto com foto, identificação, cores naturais e tingidas, e uso em projetos.",
      },
    ],
  },
  {
    slug: "volume-4",
    numero: 4,
    titulo: "Volume 4 — Plantas de Vaso",
    descricao:
      "Mais de 70 espécies, com orientações sobre manutenção, reutilização e aplicação em eventos.",
    imagem: "/produtos/volume-4-plantas-de-vaso.png",
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/F106908936R?off=z70x8qoj",
    ctaLabel: "COMPRAR VOLUME 4",
    interiores: [
      {
        src: "/interiores/volume-4/01-ficha-begonia-tons.png",
        alt: "Ficha técnica da Begônia mostrando foto, identificação e as tonalidades encontradas no mercado: amarelo, branco, laranja e rosa.",
      },
      {
        src: "/interiores/volume-4/02-ficha-hortensia-de-vaso-tons.png",
        alt: "Ficha técnica da Hortênsia de Vaso com foto, identificação e tonalidades: azul, rosa, branco e lilás.",
      },
      {
        src: "/interiores/volume-4/03-ficha-filodendro-xanadu.png",
        alt: "Ficha técnica do Filodendro Xanadu com foto, identificação, porte, uso em projetos e cuidados.",
      },
      {
        src: "/interiores/volume-4/04-ficha-samambaia-americana.png",
        alt: "Ficha técnica da Samambaia Americana com foto, identificação, porte e cuidados.",
      },
    ],
  },
  {
    slug: "volume-5",
    numero: 5,
    titulo: "Volume 5 — Frutas na Decoração de Eventos",
    descricao:
      "45 frutas, técnicas de utilização, conservação e sugestões de composições para arranjos, mesas e cenários.",
    imagem: "/produtos/volume-5-frutas-decoracao-eventos.png",
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/V106909031O?off=cz8jdnvz",
    ctaLabel: "COMPRAR VOLUME 5",
    interiores: [
      {
        src: "/interiores/volume-5/01-ficha-abobora-mini.png",
        alt: "Ficha técnica da Abóbora mini com foto, técnicas de utilização e cuidados de conservação.",
      },
      {
        src: "/interiores/volume-5/02-ficha-carambola.png",
        alt: "Ficha técnica da Carambola com foto, técnicas de utilização e cuidados de conservação.",
      },
      {
        src: "/interiores/volume-5/03-ficha-limao-capeta.png",
        alt: "Ficha técnica do Limão Capeta com foto, técnicas de utilização e cuidados de conservação.",
      },
      {
        src: "/interiores/volume-5/04-arranjo-estilizado-mesa-citrica.png",
        alt: "Exemplo de arranjo de mesa em tons de coral usando frutas cítricas, combinando flores e frutas na decoração de eventos.",
      },
    ],
  },
];

export const colecaoInteriores: InteriorImage[] = [
  volumes[0].interiores[0],
  volumes[0].interiores[2],
  volumes[3].interiores[0],
  volumes[3].interiores[1],
  volumes[2].interiores[0],
  volumes[4].interiores[3],
];
