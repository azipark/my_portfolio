import * as React from "react";
import { projects } from "@/lib/data";
import { ExternalLink, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  const project = selectedProject !== null ? projects[selectedProject] : null;

  const nextMedia = () => {
    if (project && currentMediaIndex < project.media.items.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const prevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const openModal = (index: number) => {
    setSelectedProject(index);
    // 미디어가 2개 이상이면 두 번째부터 시작, 아니면 첫 번째부터
    const startIndex = projects[index].media.items.length > 1 ? 1 : 0;
    setCurrentMediaIndex(startIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-6xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard 
                className="group overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* 프로젝트 이미지/비디오 미리보기 */}
                <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 h-48 flex items-center justify-center">
                  {project.media.type === "video" && (
                    <div className="flex flex-col items-center">
                      <Play className="h-12 w-12 opacity-70" />
                    </div>
                  )}
                  
                  {/* 실제 이미지 미리보기 */}
                  {(project.media.type === "images" || project.media.type === "mixed") && project.media.items[0] && project.media.items[0].match(/\.(jpg|jpeg|png|webp)$/i) && (
                    <img 
                      src={project.media.items[0]} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 text-xs bg-purple-500/80 text-white rounded-full">
                      Click to view details
                    </span>
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-purple-500 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md ml-3 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* 기술 스택 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Demo 버튼 */}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm mt-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>

        {/* 프로젝트 디테일 모달 */}
        <AnimatePresence>
          {selectedProject !== null && project && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 모달 헤더 */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* 미디어 갤러리 */}
                <div className="relative bg-muted/30">
                  {project.media.type === "video" ? (
                    <div className="w-full h-80 md:h-[32rem] flex items-center justify-center bg-black">
                      <video
                        controls
                        autoPlay
                        loop
                        muted
                        className="max-w-full max-h-full object-contain"
                        src={project.media.items[currentMediaIndex]}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-80 md:h-[32rem] flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                      {/* 실제 이미지 표시 */}
                      {project.media.items[currentMediaIndex] && project.media.items[currentMediaIndex].match(/\.(jpg|jpeg|png|webp)$/i) ? (
                        <img 
                          src={project.media.items[currentMediaIndex]} 
                          alt={project.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : project.media.items[currentMediaIndex] && project.media.items[currentMediaIndex].match(/\.(mp4|webm|ogg)$/i) ? (
                        <video
                          controls
                          autoPlay
                          loop
                          muted
                          className="max-w-full max-h-full object-contain"
                          src={project.media.items[currentMediaIndex]}
                        />
                      ) : (
                        /* 임시 아이콘 */
                        <div className="text-8xl opacity-50">🖥️</div>
                      )}
                    </div>
                  )}
                  
                  {/* 미디어 네비게이션 */}
                  {project.media.items.length > 2 && (
                    <>
                      <button
                        onClick={prevMedia}
                        disabled={currentMediaIndex === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={nextMedia}
                        disabled={currentMediaIndex === project.media.items.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                      
                      {/* 미디어 인디케이터 */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.media.items.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentMediaIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentMediaIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* 프로젝트 상세 정보 */}
                <div className="p-6 space-y-6">
                  {/* 프로젝트 메타 정보 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Duration</h4>
                      <p className="text-sm">{project.duration}</p>
                    </div>
                  </div>

                  {/* 상세 설명 */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-purple-500/10 text-purple-500 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 핵심 구현사항 */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Implementations</h4>
                    <ul className="space-y-2">
                      {project.keyImplementations.map((implementation, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span className="text-muted-foreground">{implementation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Demo 버튼 */}
                  {project.liveUrl && (
                    <div className="pt-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Live Project
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
