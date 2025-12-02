// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'kimminjo-lab', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * GitHub Pages에서 이 프로젝트를 리포지토리 이름을 포함한 경로로 배포할 때 사용합니다.
   * 예: https://<USERNAME>.github.io/<REPO_NAME>/
   */
  base: '/memorichip.gitprofile/',

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects on GitHub',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        projects: [], // List of repository names to display.
      },
    },
    external: {
      header: 'Other Works',
      projects: [
        {
          title: 'Fandom Re:Play',
          description: '고령층 팬덤 커뮤니티 & 세대 간 소통 프로젝트',
          imageUrl:
            'https://img.freepik.com/free-vector/music-festival-poster-template_23-2148365742.jpg',
          link: 'https://github.com/kimminjo-lab/fandom-replay',
        },
        {
          title: 'AR 인지 향상 앱',
          description: 'AR + AI를 활용한 인지기능 훈련 앱 개발',
          imageUrl:
            'https://img.freepik.com/free-vector/brain-activity-concept-illustration_114360-7731.jpg',
          link: 'https://github.com/kimminjo-lab/ar-cognitive',
        },
      ],
    },
  },
  
  seo: {
    title: '김민조 | AI & AR 융합 개발자',
    description:
      '성균관대학교 인공지능융합전공 21살 김민조의 기술 스택, 프로젝트, 이야기',
    imageURL: '',
  },

  social: {
    instagram: 'hannahkimminjo',
    github: 'kimminjo-lab',
    website: '',
    email: 'your_email@example.com',
    linkedin: '',
    x: '',
    // 다른 소셜 미디어는 필요에 따라 추가/수정하세요.
  },

  resume: {
    fileUrl: '', // 빈 값으로 설정하여 'Download Resume' 버튼을 숨깁니다.
  },

  skills: [
    'Python',
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'TensorFlow',
    'OpenCV',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'Tailwind',
    // 나머지 필요한 스킬 추가
  ],

  experiences: [
    {
      company: '성균관대학교 인공지능융합전공',
      position: '학부생 / 연구 참여',
      from: '2023',
      to: 'Present',
      companyLink: 'https://www.skku.edu',
    },
  ],

  certifications: [],

  educations: [
    {
      institution: '성균관대학교',
      degree: '인공지능융합전공',
      from: '2023',
      to: '현재',
    },
  ],

  publications: [],

  blog: {
    source: '',
    username: '', // 빈 값으로 블로그 섹션 숨김
    limit: 0,
  },

  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      // ... 나머지 테마들 ...
    ],
  },

  footer: `Made by 김민조 ❤️ using <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,

  enablePWA: true,
};