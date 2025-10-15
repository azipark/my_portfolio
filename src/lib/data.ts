export const personalInfo = {
  name: "abcd",
  location: "Seoul, Republic of KOREA",
  email: "azipark7721@gmail.com",
  github: "https://github.com/azipark",
};

export const workExperience = [
  {
    company: "오케이금융그룹(정규직)",
    location: "서울 중구",
    position: "웹 퍼블리셔",
    period: "2023.09 - 재직중",
    achievements: [
      {
        topic: "OK금융그룹 전사 웹·앱 서비스 퍼블리싱 및 운영 전담",
      },
      {
        topic: "AI TF소속으로 퍼블리싱 자동화 및 LLM 기반 실험 주도",
      },
      {
        topic: "서비스 운영 모니터링 및 시스템 점검 지원",
      },
    ],
  },
  {
    company: "원유니버스(프리랜서)",
    location: "서울 강남구",
    position: "UI 개발",
    period: "2023.04 - 2023.08",
    achievements: [
      {
        topic: "신규 게임 관리자 페이지 UI 개발",
      },
    ],
  },
  {
    company: "한화생명보험(프리랜서)",
    location: "서울 중구",
    position: "UI 개발",
    period: "2023.06",
    achievements: [
      {
        topic:
          "한화생명보험 X 미국 스타트업 Need 공동 서비스 런칭 페이지 UI 개발",
      },
    ],
  },
  {
    company: "플레이위드코리아(정규직)",
    location: "경기도 성남시",
    position: "웹 퍼블리셔",
    period: "2021.06 - 2023.04",
    achievements: [
      {
        topic: "국내외 웹서비스 운영 및 신규 게임 서비스 UI 개발",
      },
      {
        topic: "사내 BI 플랫폼 화면 개발 및 유지·보수",
      },
    ],
  },
  {
    company: "디케이테크인(정규직)",
    location: "경기도 성남시",
    position: "UI 개발",
    period: "2020.11 - 2021.02",
    achievements: [
      {
        topic: "카카오 주요 서비스 UI 개발 및 자사 홈페이지 리뉴얼 작업 수행",
      },
    ],
  },
  {
    company: "씨티티디(CTTD)(정규직)",
    location: "서울 강남구",
    position: "웹 퍼블리셔",
    period: "2019.02 - 2020.03",
    achievements: [
      {
        topic:
          "eBay 판매자 페이지 및 LG전자 11번가 플랫폼 등 주요 서비스 운영·프로모션 퍼블리싱 수행",
      },
    ],
  },
  {
    company: "넥슨(NEXON)(단기계약직)",
    location: "경기도 성남시",
    position: "UI 개발",
    period: "2018.07 - 2018.10",
    achievements: [
      {
        topic: "FIFA ONLINE 4(현 FC ONLINE) 웹 서비스 운영 및 프로모션 퍼블리싱 담당",
      },
    ],
  },
];

export const education = [
  {
    institution: "고려대학교 공학대학원 전기전자컴퓨터공학",
    location: "서울 성북구",
    period: "2022.08 - 2025.02(수료 후 논문 작성 중)",
  },
  {
    institution: "강남대학교 세무학 전공, 경영학 부전공",
    location: "경기도 용인시",
    period: "2008.03 - 2014.08",
  },
];
export const skills = {
  programmingLanguages: [
    "Javascript",
  ],
  frontendDevelopment: [
    "React",
    "VueJS",
    "Tailwind CSS",
    "SCSS/SASS",
    "CSS",
    "Bootstrap",
    "WebSquare5",
    "HTML",
  ],
  versionControl: [
    "Git",
    "SVN",
    "GitHub",
    "GitLab",
    "ChangeFlow",
  ],
  designTools: [
    "Figma",
    "Zeplin",
    "Sketch",
    "Adobe XD",
    "Adobe Photoshop",
  ],
};

export const projects = [
  {
    title: "Portfolio Website",
    year: "2024",
    description: "Personal portfolio website built with Astro and React",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    keyImplementations: [
      "Responsive design optimized for all devices",
      "Dark/Light theme toggle support",
      "Smooth animations and interactions",
      "SEO optimization and performance tuning",
    ],
    detailedDescription: "A modern, responsive portfolio website showcasing my development skills and projects. Built with cutting-edge technologies including Astro for optimal performance and React for interactive components.",
    duration: "2 weeks",
    role: "Full-stack Developer",
    liveUrl: "https://azipark.github.io/my_portfolio",
    media: {
      type: "images", // "images" | "video" | "mixed"
      items: [
        "/project-portfolio-1.jpg",
        "/project-portfolio-2.jpg", 
        "/project-portfolio-3.jpg"
      ]
    }
  },
  {
    title: "Todo Management App",
    year: "2023",
    description: "Task management application built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    keyImplementations: [
      "Real-time task CRUD operations",
      "Category-based task organization", 
      "Progress tracking and statistics",
      "User authentication and data sync",
    ],
    detailedDescription: "A comprehensive task management application featuring real-time updates, user authentication, and advanced filtering capabilities. Designed with a focus on user experience and productivity.",
    duration: "3 weeks",
    role: "Frontend Developer",
    liveUrl: "https://todo-app-demo.vercel.app",
    media: {
      type: "video", // 비디오 예시
      items: [
        "/project-todo-demo.mp4"
      ]
    }
  },
];

export const awards = [
  {
    name: "2019 공개SW 컨트리뷰톤 장려상 수상",
    issuer: "과학기술정보통신부 주최, 정보통신산업진흥원 주관",
    type: "과학기술정보통신부 주최, 정보통신산업진흥원 주관의 공개SW 컨트리뷰톤에서 '자바스크립트 튜토리얼 한글화'에 기여하여 장려상 수상",
  },
];
