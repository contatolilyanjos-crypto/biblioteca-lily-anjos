export type CarouselImage = {
  src: string;
  alt: string;
};

export type Volume = {
  slug: string;
  numero: number;
  titulo: string;
  descricao: string;
  imagem: string;
  imagensCarrossel: CarouselImage[];
  precoAVista: string;
  parcelamento: string;
  linkCheckout: string;
  ctaLabel: string;
};

export const colecao = {
  titulo: "Leve o Guia do Decorador e Florista completo",
  subtitulo: "Biblioteca Lily Anjos",
  selo: "MELHOR ESCOLHA • ECONOMIZE R$ 74,60",
  descricao:
    "Flores de corte, folhagens, sementes, frutos, elementos desidratados, plantas de vaso e frutas aplicadas à decoração de eventos.",
  imagemHero: "/produtos/colecao-abertura.png",
  imagem: "/produtos/colecao-completa.png",
  precoAnterior: "De R$ 299,50",
  precoAVista: "Por R$ 224,90 à vista",
  parcelamento: "ou 12x de R$ 23,26",
  linkCheckout: "https://pay.hotmart.com/W106909386M?off=5wn31j8a",
  ctaLabel: "QUERO OS 5 VOLUMES DIGITAIS COM DESCONTO",
};

export const volumes: Volume[] = [
  {
    slug: "volume-1",
    numero: 1,
    titulo: "Volume 1 — Flores de Corte",
    descricao:
      "94 espécies com fotos, cores, tamanhos, disponibilidade, custos, cuidados e aplicações.",
    imagem: "/produtos/volume-1-flores-de-corte.jpg",
    imagensCarrossel: [
      {
        src: "/produtos/carrossel/volume-1-imagem-1.png",
        alt: "Volume 1 — Flores de Corte: exemplo do índice visual por cor, com fotos de flores organizadas por tonalidade.",
      },
      {
        src: "/produtos/carrossel/volume-1-imagem-2.png",
        alt: "Volume 1 — Flores de Corte: exemplo de ficha técnica completa de uma flor, com tons, tamanhos e cuidados.",
      },
    ],
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/L106908323G?off=9ype1fn2",
    ctaLabel: "COMPRAR VOLUME 1",
  },
  {
    slug: "volume-2",
    numero: 2,
    titulo: "Volume 2 — Folhagens, Sementes e Frutos",
    descricao:
      "108 folhagens e 45 sementes e frutos, com identificação, características, cuidados e aplicações.",
    imagem: "/produtos/volume-2-folhagens-sementes-frutos.jpg",
    imagensCarrossel: [
      {
        src: "/produtos/carrossel/volume-2-imagem-1.png",
        alt: "Volume 2 — Folhagens, Sementes e Frutos: exemplo de ficha técnica de uma folhagem, com identificação e cuidados.",
      },
      {
        src: "/produtos/carrossel/volume-2-imagem-2.png",
        alt: "Volume 2 — Folhagens, Sementes e Frutos: exemplo de ficha técnica de uma semente/fruto, com identificação e cuidados.",
      },
    ],
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/A106908702D?off=nchlxtij",
    ctaLabel: "COMPRAR VOLUME 2",
  },
  {
    slug: "volume-3",
    numero: 3,
    titulo: "Volume 3 — Flores e Plantas Desidratadas",
    descricao:
      "91 elementos secos, desidratados, preservados e alvejados, com diferenças, cuidados e aplicações.",
    imagem: "/produtos/volume-3-flores-plantas-desidratadas.jpg",
    imagensCarrossel: [
      {
        src: "/produtos/carrossel/volume-3-imagem-1.png",
        alt: "Volume 3 — Flores e Plantas Desidratadas: exemplo de ficha técnica de um material seco, com variações comerciais.",
      },
      {
        src: "/produtos/carrossel/volume-3-imagem-2.png",
        alt: "Volume 3 — Flores e Plantas Desidratadas: exemplo de ficha técnica completa, com uso em projetos e durabilidade.",
      },
    ],
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/Q106908821K?off=8clssgdp",
    ctaLabel: "COMPRAR VOLUME 3",
  },
  {
    slug: "volume-4",
    numero: 4,
    titulo: "Volume 4 — Plantas de Vaso",
    descricao:
      "Mais de 70 espécies, com orientações sobre manutenção, reutilização e aplicação em eventos.",
    imagem: "/produtos/volume-4-plantas-de-vaso.jpg",
    imagensCarrossel: [
      {
        src: "/produtos/carrossel/volume-4-imagem-1.png",
        alt: "Volume 4 — Plantas de Vaso: exemplo de ficha técnica de uma planta, com tonalidades encontradas no mercado.",
      },
      {
        src: "/produtos/carrossel/volume-4-imagem-2.png",
        alt: "Volume 4 — Plantas de Vaso: exemplo de ficha técnica completa, com cuidados e potencial de reutilização.",
      },
    ],
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/F106908936R?off=z70x8qoj",
    ctaLabel: "COMPRAR VOLUME 4",
  },
  {
    slug: "volume-5",
    numero: 5,
    titulo: "Volume 5 — Frutas na Decoração de Eventos",
    descricao:
      "45 frutas, técnicas de utilização, conservação e sugestões de composições para arranjos, mesas e cenários.",
    imagem: "/produtos/volume-5-frutas-decoracao-eventos.jpg",
    imagensCarrossel: [
      {
        src: "/produtos/carrossel/volume-5-imagem-1.png",
        alt: "Volume 5 — Frutas na Decoração de Eventos: exemplo de ficha técnica de uma fruta, com técnicas de utilização.",
      },
      {
        src: "/produtos/carrossel/volume-5-imagem-2.png",
        alt: "Volume 5 — Frutas na Decoração de Eventos: exemplo de ficha técnica completa, com cuidados de conservação.",
      },
    ],
    precoAVista: "R$ 59,90 à vista",
    parcelamento: "ou 12x de R$ 6,20",
    linkCheckout: "https://pay.hotmart.com/V106909031O?off=cz8jdnvz",
    ctaLabel: "COMPRAR VOLUME 5",
  },
];
