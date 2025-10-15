export interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  keyImplementations: string[];
  detailedDescription: string;
  duration: string;
  role: string;
  liveUrl?: string; // optional로 만들기
  media: {
    type: "images" | "video" | "mixed";
    items: string[];
  };
}

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

export const projects: Project[] = [
  {
    title: "OK비교대출 - 한도조회 결과 페이지",
    year: "2025",
    description: "한도조회 결과 페이지 – Vue Transition-group 기반 슬라이드 전환 구현",
    technologies: ["VueJS", "SCSS/SASS"],
    keyImplementations: [
      "transition-group 기반 Move Transition 구현",
      "리스트 갱신 시 오른쪽→왼쪽 슬라이드 전환 효과",
      "translateX(±100%) 기반 상대 단위로 모바일웹 뷰포트 대응",
      "자연스러운 데이터 전환 및 시각적 피드백 제공"
    ],
    detailedDescription: "Vue의 <transition-group>을 활용해 한도조회 결과 리스트가 오른쪽에서 왼쪽으로 자연스럽게 슬라이드 교체되는 Move Transition을 구현했습니다. 조회 결과에 따라 각 금융사의 금리가 갱신될 때 데이터 변화가 한눈에 인지되도록 시각적 피드백을 강화했으며, transform: translateX(±100%) 기반의 상대 단위를 사용해 모바일웹 환경에서도 기기 해상도나 뷰포트 크기에 관계없이 일관된 전환 효과가 유지되도록 설계했습니다. 이를 통해 한도조회 과정에서 사용자 경험의 흐름이 끊기지 않도록 하고, 금리 비교 결과를 직관적으로 확인할 수 있는 인터랙션 완성도를 높였습니다.",
    duration: "1 weeks",
    role: "Web Publisher",
    media: {
      type: "mixed", // "images" | "video" | "mixed"
      items: [
        "/images/projects/project-portfolio-1.png",
        "/images/projects/project-portfolio-2.mp4",
      ]
    }
  },
  {
    title: "원유니버스 게임 관리자 페이지",
    year: "2023",
    description: "웹 기반 게임 관리자(Admin) 페이지 구축 – 퍼블리싱·UI 흐름 전담 및 대량 데이터 대응 설계",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    keyImplementations: [
      "관리자 시스템 UI/UX 설계 및 퍼블리싱 전담",
      "대량 데이터에 대응한 테이블 구조 안정화",
      "기획자 및 개발자와의 협업을 통한 초기 구조 설계 및 기술 스택 선정"
    ],
    detailedDescription: "웹 기반 게임 관리자(Admin) 페이지 구축 프로젝트에 프리랜서로 단독 참여하여 전체 화면의 퍼블리싱과 UI 흐름 구현을 전담하였습니다. 기획자와 직접 커뮤니케이션하며 요구사항을 정리하고, 프론트엔드 전담 인력으로서 개발자와 함께 기술 스택(프레임워크·툴 등)을 논의하고 선정하는 등 초기 구조 설계부터 마무리까지 주도적으로 참여했습니다. 대량의 데이터가 누적되며 테이블 영역이 깨지는 이슈를 발견하고, CSS 구조 재정비와 동적 width 계산 로직을 통해 안정적인 UI를 유지했습니다. 요구사항 변경에 유연하게 대응하며 관리자용 인터페이스에 적합한 직관적인 UI/UX 구조 설계와 퍼블리싱 품질 확보에 집중하였습니다.",
    duration: "5 months",
    role: "Frontend Developer",
    media: {
      type: "images", // 비디오 예시
      items: [
        "/images/projects/project-portfolio-3.png",
        "/images/projects/project-portfolio-4.png",
        "/images/projects/project-portfolio-5.png",
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
