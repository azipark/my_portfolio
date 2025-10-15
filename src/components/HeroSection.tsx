import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              UI Developer
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm max-w-6xl mx-auto">
            <div className="text-muted-foreground text-md pl-4 py-2 relative leading-relaxed">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              <div className="mb-2 before:content-['·_'] before:mr-1"><b>금융과 게임 등 다양한 산업</b>에서 사용자 경험을 고려한 UI 개발을 진행해왔습니다.</div>
              <div className="mb-2 before:content-['·_'] before:mr-1">Cursor, Claude Code 등 <b>AI 디자인-투-코드 툴을 실험하며 퍼블리싱 자동화</b>의 새로운 가능성을 탐구하고 있습니다.</div>
              <div className="mb-2 before:content-['·_'] before:mr-1">React, Vue, WebSquare 등 <b>여러 프레임워크 환경</b>에서 프로젝트를 완수한 경험이 있습니다.</div>
              <div className="mb-2 before:content-['·_'] before:mr-1"><b>Figma, Zeplin, Sketch, Adobe XD, Git, SVN, ChangeFlow, Jira</b> 등 협업 툴을 적극 활용해 다양한 직군과 함께 일해왔습니다.</div>
              <div className="mb-2 before:content-['·_'] before:mr-1"><b>소통과 신뢰를 기반으로 팀의 목표를 함께 이루는 협업</b>을 중요하게 생각합니다.</div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
