export const personalInfo = {
  name: "abcd",
  location: "Seoul, Republic of KOREA",
  email: "azipark7721@gmail.com",
  github: "https://github.com/azipark",
};

export const workExperience = [
  {
    company: "Lorem Ipsum Corp",
    location: "Lorem City",
    position: "Lorem Engineer",
    period: "Jan 2020 - Present",
    achievements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      "Excepteur sint occaecat cupidatat non proident.",
      "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    ],
  },
  {
    company: "Dolor Sit Amet",
    location: "Ipsumville",
    position: "Software Developer",
    period: "Feb 2019 - Jan 2020",
    achievements: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
    ],
  },
  {
    company: "Consectetur Inc.",
    location: "Adipiscing, Ipsum",
    position: "Intern",
    period: "Jun 2018 - Feb 2019",
    achievements: [
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
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
