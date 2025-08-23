// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'getlarge',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Public GitHub Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'getlarge/ticketing',
          'getlarge/nestjs-tools',
          'getlarge/nestjs-ory-integration',
          'getlarge/cat-fostering',
          'getlarge/nx-heroku',
          'getlarge/node-sea-demo',
        ],
      },
    },
    external: {
      header: 'Speaking In Public',
      projects: [
        {
          title: 'EnterJS Conf 2025',
          description: 'Building Single Executable Applications with Node.js.',
          imageUrl:
            'https://github.com/user-attachments/assets/04bbd0b8-8991-4b1e-8b85-35a1660a860d',
          link: 'https://enterjs.de/lecture.php?id=82719&source=0',
        },
        {
          title: 'Vendure Conf 2024',
          description: 'Building Single Executable Applications with Node.js.',
          imageUrl: 'https://img.youtube.com/vi/sqU1z09Gl58/0.jpg',
          link: 'https://youtube.com/watch?v=sqU1z09Gl58',
        },
        {
          title: 'NestJS Vienna Meetup June 2024',
          description:
            'Authentication and Authorization strategies with NestJS and Ory.',
          imageUrl: 'https://img.youtube.com/vi/lJTVrOlFq9o/0.jpg',
          link: 'https://www.youtube.com/watch?v=lJTVrOlFq9o',
        },
        {
          title: 'Angular Master Podcast',
          description: 'Scalable Architecture with Nx.',
          imageUrl: 'https://img.youtube.com/vi/OuGSrrdn-cA/0.jpg',
          link: 'https://www.youtube.com/watch?v=OuGSrrdn-cA',
        },
        {
          title: 'ViennaJS Meetup June 2024',
          description:
            'Authentication and Authorization strategies with NestJS and Ory.',
          imageUrl:
            'https://secure.meetupstatic.com/photos/event/8/b/f/5/clean_489155829.webp',
          link: 'https://viennajs.org/en/meetup/viennajs-may-2024',
        },
      ],
    },
  },
  seo: {
    title: 'Edouard Maleix - Software Engineer',
    description: '',
    imageURL: 'https://avatars.githubusercontent.com/u/15331923?v=4&size=64',
  },
  social: {
    linkedin: 'edouard-maleix',
    x: 'e_maleix',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'getlarge',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ed@getlarge.eu',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  googleAnalytics: {
    id: '',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Nx',
    'PostgreSQL',
    'Git',
    'Docker',
    'Heroku',
    'AWS',
    'Erlang',
    'Go',
  ],
  experiences: [
    {
      company: 'Self-employed',
      position: 'Freelance Software Engineer',
      from: 'August 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'S1Seven | Metal Identity',
      position: 'Lead Developer (Node.js)',
      from: 'October 2020',
      to: 'December 2023',
      companyLink: 'https://s1seven.com',
    },
    {
      company: 'Insticore',
      position: 'Full-stack Javascript developper',
      from: 'June 2020',
      to: 'October 2020',
      companyLink: 'https://insticore.com',
    },
    {
      company: 'CUBE Software- und Hotelprojektierungs GmbH',
      position: 'Full-stack Javascript developper',
      from: 'February 2020',
      to: 'May 2020',
      companyLink: 'https://cube-tech.ai',
    },
    {
      company: 'Self-employed',
      position: 'Freelance Software Engineer',
      from: 'July 2018',
      to: 'January 2020',
      companyLink: '',
    },
    {
      company: 'Aloes',
      position: 'Co-founder',
      from: 'January 2016',
      to: 'January 2020',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'getlarge', // to hide blog section, keep it empty
    limit: 8, // How many articles to display. Max is 10.
    header: 'Articles',
  },
  themeConfig: {
    defaultTheme: 'wireframe',
    // Hides the themes selector in the navbar
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#0589fc',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#FFFFFF',
      '--rounded-box': '1rem',
      '--rounded-btn': '0.3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Edouard Maleix ☕️ Vienna, Austria`,

  enablePWA: true,
};

export default CONFIG;
