// ─────────────────────────────────────────────────────────────────────────────
// ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA MUDAR O CONTEÚDO DO SITE.
// Conteúdo extraído do seu currículo. Procure por "REVISAR:" para os pontos
// em que eu tive que decidir algo por você.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'en' | 'pt';

export const SITE = {
  name: 'Iuri Menin',
  // REVISAR: o CV traz iurimenin@gmail.com. Usei esse como email público, e não
  // o iuri.menin@refator.ai, por ser o que já está no currículo circulando.
  email: 'iurimenin@gmail.com',
  // REVISAR: seu telefone (+55 46 98805-0403) está no CV mas NÃO no site.
  // Telefone em página pública vira spam e ligação de robô. Se quiser expor,
  // preencha aqui e descomente o bloco em src/components/Contact.astro.
  phone: null as string | null,
  location: { en: 'Vitorino, PR — Brazil', pt: 'Vitorino, PR — Brasil' },
  url: 'https://iurimenin.github.io',
  // Coloque uma foto quadrada (~600x600) em public/avatar.jpg.
  // Se não colocar, o site mostra suas iniciais num círculo — sem quebrar.
  avatar: '/avatar.jpg',
  // Link do CV. Aceita três formas:
  //   'public/cv.pdf' local  →  '/cv.pdf'
  //   link externo (Drive)   →  'https://drive.google.com/uc?export=download&id=ID'
  //   sem CV                 →  null  (o botão some do site, sem deixar 404)
  //
  // Sobre o Drive: use SEMPRE o formato uc?export=download acima, não o
  // /file/d/ID/view — o segundo abre o visualizador em vez de baixar. E para
  // atualizar o currículo depois, substitua o arquivo em "Gerenciar versões";
  // subir um arquivo novo gera outro ID e quebra este link.
  cvUrl: null as string | null,
};

export const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/iurimenin/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/iurimenin', icon: 'github' },
  { name: 'X', url: 'https://x.com/iuri_menin', icon: 'x' },
  { name: 'Instagram', url: 'https://www.instagram.com/iurimenin/', icon: 'instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/iurimenin', icon: 'facebook' },
] as const;

export type SkillGroup = { label: string; items: string[] };
export type Role = { name: string; period: string; bullets: string[] };
export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  roles: Role[];
};
export type EducationItem = { title: string; org: string; note?: string };
export type LanguageItem = { name: string; level: string };
export type Project = {
  name: string;
  status?: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
};

type Content = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    role: string;
    headline: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    yearsLabel: string;
  };
  about: { heading: string; paragraphs: string[] };
  skills: { heading: string; groups: SkillGroup[] };
  experience: { heading: string; cvLabel: string; jobs: Job[] };
  projects: {
    heading: string;
    intro: string;
    items: Project[];
    visitLabel: string;
    repoLabel: string;
  };
  education: {
    heading: string;
    items: EducationItem[];
    languagesHeading: string;
    languages: LanguageItem[];
  };
  contact: { heading: string; text: string; emailLabel: string };
  footer: { built: string; rights: string };
  langSwitch: { label: string; title: string; to: string };
  skipLink: string;
};

export const CONTENT: Record<Lang, Content> = {
  // ───────────────────────────────── ENGLISH ─────────────────────────────────
  en: {
    meta: {
      title: 'Iuri Menin — Senior Full-Stack Software Engineer & Tech Lead',
      description:
        'Senior software engineer with 12+ years building scalable systems in Java/Kotlin, Angular and Flutter. Tech lead on fintech and agribusiness platforms.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      role: 'Senior Full-Stack Software Engineer · Tech Lead',
      headline: 'I build systems that hold up under real load.',
      tagline:
        'Twelve years turning complex financial and agribusiness problems into scalable architecture — Kotlin and Spring Boot on the backend, Angular and Flutter on the front.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See my experience',
      yearsLabel: '12+ years of experience',
    },
    about: {
      heading: 'About',
      paragraphs: [
        'I am a senior software engineer and tech lead with more than twelve years of experience, focused on scalable architecture with Java and Kotlin and full-stack delivery with Angular and Flutter.',
        'Most of that time has been spent on complex projects for the financial and agribusiness sectors — credit pipelines, field operations, geolocated logistics — where security, auditability and high availability are not optional extras. I lead the technical side of these projects end to end: architecture, security with Keycloak, CI/CD pipelines and the Docker environments underneath.',
        'What I care about most is the part that outlives the release: reusable foundations that make the next feature cheaper, and an architecture the next developer can actually reason about.',
      ],
    },
    skills: {
      heading: 'Technical skills',
      groups: [
        { label: 'Languages', items: ['Java', 'Kotlin', 'Dart', 'TypeScript', 'SQL'] },
        {
          label: 'Backend',
          items: ['Spring Boot', 'JPA / Hibernate', 'Flyway', 'RabbitMQ', 'Struts 1.3'],
        },
        {
          label: 'Frontend & Mobile',
          items: ['Angular', 'PrimeNG', 'Flutter (Bloc/Cubit)', 'Native Android'],
        },
        { label: 'Security & Cloud', items: ['Keycloak (OAuth2/JWT)', 'Firebase'] },
        { label: 'DevOps & Tooling', items: ['Docker', 'CI/CD (GitLab, Bitbucket)'] },
      ],
    },
    experience: {
      heading: 'Experience',
      cvLabel: 'Download CV',
      jobs: [
        {
          role: 'Tech Lead & Senior Full-Stack Developer',
          company: 'Softfocus',
          // REVISAR: confirme o site da Softfocus e preencha aqui, ou apague a linha.
          // companyUrl: 'https://www.softfocus.com.br',
          period: 'July 2013 — Present',
          roles: [
            {
              name: 'Agis (Sicredi)',
              period: 'October 2025 — April 2026',
              bullets: [
                'Defined the backend architecture in Kotlin and Spring Boot, building reusable foundations — a generic CRUD layer and a BaseService — that cut development time across the project.',
                'Implemented security with Keycloak and dynamic, entity-based permission management.',
                'Led the technical work on the Angular frontend and Flutter mobile app, simplifying the architecture down to a clean three-layer model.',
                'Modelled complex visit-logistics data with geolocation, plus full auditing through Hibernate Envers.',
                'Set up the CI/CD pipelines and orchestrated environments with Docker.',
              ],
            },
            {
              name: 'Agricredit / CresolCredi',
              period: 'January 2019 — September 2025',
              bullets: [
                'Technical focal point for developers and analysts, holding the quality bar and driving the evolution of the credit pipeline.',
                'Turned client-specific modules into customisable components reusable across different customers.',
              ],
            },
            {
              name: 'SICMOB (Field Monitoring & Projects)',
              period: 'July 2015 — December 2024',
              bullets: [
                'Conceived and built native Android apps for supervising technical field projects.',
                'Built offline-first integration on top of Firebase.',
              ],
            },
          ],
        },
      ],
    },
    projects: {
      heading: 'Projects',
      intro: 'Things I build outside the day job.',
      visitLabel: 'Visit',
      repoLabel: 'Code',
      items: [
        {
          name: 'Nossa Escola Pato Branco',
          status: 'In progress',
          description:
            'The website for my kids’ school in Pato Branco, PR. Built on my own time so the school has a real presence online and families can find what they need without chasing it through group chats.',
          // REVISAR: não sei com o que você construiu esse site. Troque "Web"
          // pelas tecnologias reais (WordPress? Astro? Next?).
          stack: ['Web'],
          url: 'https://nossaescolapb.com.br/',
        },
      ],
    },
    education: {
      heading: 'Education',
      items: [
        {
          title: 'Technology in Systems Analysis and Development',
          org: 'UTFPR',
        },
        { title: 'Android Developer Nanodegree', org: 'Udacity' },
        {
          title: 'Dale Carnegie Course',
          org: 'Dale Carnegie',
          note: 'Leadership, public speaking and human relations',
        },
      ],
      languagesHeading: 'Languages',
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'C2 — Proficient (EFSET 71/100)' },
      ],
    },
    contact: {
      heading: 'Get in touch',
      text: 'Got a project, a role, or a hard architecture problem? My inbox is open.',
      emailLabel: 'Email me',
    },
    footer: { built: 'Built with Astro', rights: 'All rights reserved.' },
    langSwitch: { label: 'PT', title: 'Ver em português', to: '/pt/' },
    skipLink: 'Skip to content',
  },

  // ──────────────────────────────── PORTUGUÊS ────────────────────────────────
  pt: {
    meta: {
      title: 'Iuri Menin — Engenheiro de Software Full-Stack Sênior e Tech Lead',
      description:
        'Engenheiro de software sênior com mais de 12 anos construindo sistemas escaláveis em Java/Kotlin, Angular e Flutter. Tech lead em plataformas de crédito e agronegócio.',
    },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      role: 'Engenheiro de Software Full-Stack Sênior · Tech Lead',
      headline: 'Construo sistemas que aguentam carga de verdade.',
      tagline:
        'Doze anos transformando problemas complexos do setor financeiro e do agronegócio em arquitetura escalável — Kotlin e Spring Boot no backend, Angular e Flutter na frente.',
      ctaPrimary: 'Fale comigo',
      ctaSecondary: 'Ver minha experiência',
      yearsLabel: '12+ anos de experiência',
    },
    about: {
      heading: 'Sobre',
      paragraphs: [
        'Sou engenheiro de software sênior e tech lead, com mais de doze anos de experiência, especializado em arquiteturas escaláveis com Java e Kotlin e entrega full-stack com Angular e Flutter.',
        'Boa parte desse tempo foi em projetos complexos para os setores financeiro e de agronegócio — esteiras de crédito, operação em campo, logística geolocalizada — onde segurança, auditoria e alta disponibilidade não são opcionais. Lidero a parte técnica desses projetos de ponta a ponta: arquitetura, segurança com Keycloak, pipelines de CI/CD e os ambientes Docker por baixo.',
        'O que mais me interessa é a parte que sobrevive à release: bases reutilizáveis que barateiam a próxima feature, e uma arquitetura que o próximo desenvolvedor consiga entender de fato.',
      ],
    },
    skills: {
      heading: 'Competências técnicas',
      groups: [
        { label: 'Linguagens', items: ['Java', 'Kotlin', 'Dart', 'TypeScript', 'SQL'] },
        {
          label: 'Backend',
          items: ['Spring Boot', 'JPA / Hibernate', 'Flyway', 'RabbitMQ', 'Struts 1.3'],
        },
        {
          label: 'Frontend & Mobile',
          items: ['Angular', 'PrimeNG', 'Flutter (Bloc/Cubit)', 'Android Nativo'],
        },
        { label: 'Segurança & Cloud', items: ['Keycloak (OAuth2/JWT)', 'Firebase'] },
        { label: 'DevOps & Ferramentas', items: ['Docker', 'CI/CD (GitLab, Bitbucket)'] },
      ],
    },
    experience: {
      heading: 'Experiência',
      cvLabel: 'Baixar CV',
      jobs: [
        {
          role: 'Tech Lead & Desenvolvedor Full-Stack Sênior',
          company: 'Softfocus',
          // companyUrl: 'https://www.softfocus.com.br',
          period: 'Julho 2013 — Atual',
          roles: [
            {
              name: 'Agis (Sicredi)',
              period: 'Outubro 2025 — Abril 2026',
              bullets: [
                'Defini a arquitetura de backend em Kotlin e Spring Boot, criando estruturas base reutilizáveis — CRUD genérico e BaseService — que reduziram o tempo de desenvolvimento do projeto.',
                'Implementei a segurança via Keycloak e a gestão de permissões dinâmicas baseadas em entidades.',
                'Liderei tecnicamente o frontend em Angular e o mobile em Flutter, simplificando a arquitetura para um modelo limpo de três camadas.',
                'Modelei dados complexos de logística de visitas com geolocalização, além da auditoria completa via Hibernate Envers.',
                'Configurei os pipelines de CI/CD e orquestrei os ambientes com Docker.',
              ],
            },
            {
              name: 'Agricredit / CresolCredi',
              period: 'Janeiro 2019 — Setembro 2025',
              bullets: [
                'Ponto focal técnico para desenvolvedores e analistas, garantindo a qualidade técnica e a evolução da esteira de crédito.',
                'Transformei módulos específicos em componentes customizáveis, reutilizáveis por diferentes clientes.',
              ],
            },
            {
              name: 'SICMOB (Acompanhamento & Projetos)',
              period: 'Julho 2015 — Dezembro 2024',
              bullets: [
                'Idealizei e desenvolvi aplicativos Android nativos para supervisão de projetos técnicos em campo.',
                'Construí a integração offline-first sobre o Firebase.',
              ],
            },
          ],
        },
      ],
    },
    projects: {
      heading: 'Projetos',
      intro: 'Coisas que construo fora do trabalho.',
      visitLabel: 'Acessar',
      repoLabel: 'Código',
      items: [
        {
          name: 'Nossa Escola Pato Branco',
          status: 'Em andamento',
          description:
            'O site da escola dos meus filhos, em Pato Branco, PR. Construído no meu tempo livre para a escola ter uma presença digital de verdade e as famílias acharem o que precisam sem caçar em grupo de WhatsApp.',
          stack: ['Web'],
          url: 'https://nossaescolapb.com.br/',
        },
      ],
    },
    education: {
      heading: 'Formação',
      items: [
        {
          title: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
          org: 'UTFPR',
        },
        { title: 'Android Developer Nanodegree', org: 'Udacity' },
        {
          title: 'Dale Carnegie Course',
          org: 'Dale Carnegie',
          note: 'Liderança, oratória e relações humanas',
        },
      ],
      languagesHeading: 'Idiomas',
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'C2 — Proficiente (EFSET 71/100)' },
      ],
    },
    contact: {
      heading: 'Vamos conversar',
      text: 'Tem um projeto, uma vaga ou um problema difícil de arquitetura? Minha caixa de entrada está aberta.',
      emailLabel: 'Me mande um email',
    },
    footer: { built: 'Feito com Astro', rights: 'Todos os direitos reservados.' },
    langSwitch: { label: 'EN', title: 'View in English', to: '/' },
    skipLink: 'Pular para o conteúdo',
  },
};
