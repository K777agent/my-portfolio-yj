import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github, CalendarDays, X, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full bg-dark-950 aspect-video rounded-xl overflow-hidden group shadow-lg border border-white/10">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
        </div>
      ))}
      
      {/* Navigation Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-400 w-6' : 'bg-white/40 w-2 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Prev/Next controls */}
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-500 backdrop-blur-md z-20"
          >
            ←
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-500 backdrop-blur-md z-20"
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

const projects = [
  {
    id: 'rolling',
    title: 'Rolling (추억의 롤링 페이퍼 프로젝트)',
    period: '2024.06.10 ~ 2024.06.22',
    description: '웹상에서 즐길 수 있는 롤링 페이퍼 플랫폼. Skeleton UI 구현의 중요성을 체득하고 백엔드 DB 속도 개선에 관심을 가지게 되었습니다.',
    tags: ['React', 'Styled-components', 'Skeleton UI'],
    color: 'from-orange-500 to-amber-400',
    repo: 'https://github.com/K777agent/FE-Rolling-5team',
    live: 'https://rolling05.netlify.app/',
    details: {
      goal: '오프라인의 추억인 롤링 페이퍼를 웹상에서도 즐길 수 있는 플랫폼을 구축하고자 했습니다. 리액트(React)를 활용한 다양한 기술적 실험이 용이하여 기획되었습니다.',
      design: '컴포넌트 단위의 구조화 및 React를 주력으로 활용했으며 Netlify를 통해 배포 환경을 구축했습니다.',
      feedback: '타 개발자가 만든 스켈레톤(Skeleton) 기능을 사용해 보았으나, 다음에는 직접 구현해 보고 싶다는 갈증을 느꼈습니다. 또한 백엔드 서버 통신 시 DB 지연 문제를 인지하게 되었습니다.',
      images: ['/rolling/rolling1.png', '/rolling/rolling2.png', '/rolling/rolling3.png']
    }
  },
  {
    id: 'schedo',
    title: 'Schedo (일정 관리 이상의 경험)',
    period: '2024.07.29 ~ 2024.08.14',
    description: '단순한 일정 관리를 넘어 사용자에게 새로운 경험을 제공하는 다차원 일정 관리 프로젝트.',
    tags: ['React', 'Next.js', 'TypeScript', 'Zustand'],
    color: 'from-blue-500 to-cyan-400',
    repo: 'https://github.com/gorgeousTeam6/Schedo',
    live: 'https://sched6.netlify.app/',
    details: {
      goal: '`Schedule`과 `Do`의 합성어로, 단순한 일정 관리를 넘어 효율적인 협업 경험을 제공하기 위해 기획되었습니다. GitHub 프로젝트 관리와 노션 일정 관리에서 영감을 받았습니다.',
      design: '상태 관리를 위해 Zustand와 Tanstack Query를 도입하여 서버/클라이언트 상태를 최적화했습니다. 공통 모달(Modal) 컴포넌트를 설계하여 팀 전체의 개발 속도를 비약적으로 향상시켰습니다.',
      feedback: '공통 컴포넌트 설계가 협업 효율에 미치는 큰 영향력을 체감했습니다. 향후 소셜 로그인 부재를 보완하고 약관 동의 스크롤 UX 디테일을 개선할 계획입니다.',
      images: ['/schedo/schedo1.png', '/schedo/schedo2.png', '/schedo/schedo3.png']
    }
  },
  {
    id: 'globalnomard',
    title: 'GlobalNomard (세계 문화 경험)',
    period: '2024.09.03 ~ 2024.10.06',
    description: '세계 문화를 예약하고 참여할 수 있는 웹 페이지. 지도 API 연결 문제를 해결하고 연동 최적화를 이뤄냈습니다.',
    tags: ['Next.js', 'TypeScript', 'Map API'],
    color: 'from-emerald-400 to-teal-500',
    repo: 'https://github.com/Y00nS00Hyun/GlobalNomard-7',
    live: 'https://global-nomard-7-7-y00ns00hyuns-projects.vercel.app/',
    details: {
      goal: '전 세계의 다양한 문화 체험을 예약하고 참여할 수 있는 글로벌 무대 교류 플랫폼 기획 목적.',
      design: '핵심 기능으로 지도 API 연동하여 체험 장소를 시각화하고, 실시간 예약 시스템을 성공적으로 구축했습니다.',
      feedback: '지도 API 연결 과정에서의 이슈와 예약 기능에서 발생한 버그를 해결하며 API 연동과 관련된 실무 역량을 크게 키웠습니다.',
      images: ['/globalnomad/globalnomad1.png', '/globalnomad/globalnomad2.png']
    }
  },
  {
    id: 'capstone',
    title: 'Capstone (AI 가상피팅 서비스)',
    period: '2025.03.05 ~ 2025.06.20',
    description: '학교 서버를 활용하여 모델 이미지와 의류 상품 이미지를 합성하는 대규모 언어모델 기반 가상 피팅 서비스 개발 진행 중.',
    tags: ['AI', 'Python', 'Virtual Try-On', 'FastAPI'],
    color: 'from-purple-500 to-pink-500',
    repo: 'https://github.com/capstone-project23/front-end',
    live: 'https://fashionfitting.netlify.app/',
    details: {
      goal: '온라인 쇼핑 시 의류의 핏이나 스타일이 자신과 맞지 않는 문제를 해결하기 위한 AI 가상 피팅(Virtual-Try-On) 서비스입니다.',
      design: 'FastAPI 서버, ComfyUI 파이프라인, ngrok 터널링, SSH 기반 SFTP를 활용해 프론트와 AI 연동 및 이미지 분석을 처리했습니다.',
      feedback: '백엔드 경험 없이도 FastAPI와 ngrok을 활용해 시스템을 구축하며 문제 해결 능력을 입증했습니다. 향후 Docker와 AWS EC2 배포가 목표입니다.',
      images: ['/fashion/fashionfitting1.png', '/fashion/fashionfitting2.png', '/fashion/fashionfitting3.png']
    }
  }
];

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  // Render modal into document.body to break out of any z-index stacking bugs
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto bg-dark-900/80 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center py-6 md:py-10">
        <div 
          className="relative w-full max-w-5xl bg-dark-800 border border-white/10 rounded-2xl shadow-3xl animate-slide-up flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-t-2xl shrink-0`} />
          
          <div className="p-6 md:p-10 space-y-10">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/5 pb-6">
              <div className="pr-4">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-400 mb-2">
                  <CalendarDays size={16} /> {project.period}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-slate-200 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 shrink-0 rounded-full glass hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Close Modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-12">
              
              {/* Image Slider */}
              <div className={`w-full shadow-inner ${(!project.details.images || project.details.images.length === 0) ? 'border border-white/10 bg-dark-900 aspect-video rounded-xl flex items-center justify-center' : ''}`}>
                {project.details.images && project.details.images.length > 0 ? (
                  <ImageSlider images={project.details.images} />
                ) : (
                  <div className="text-slate-500 flex flex-col items-center gap-4 text-center p-6">
                    <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-primary-500 animate-spin"></div>
                    <div>
                      <span className="block font-medium text-slate-300 mb-1">Images Required</span>
                      <span className="text-sm opacity-80 break-keep">작동 화면이나 이미지를 `public/` 폴더에 넣고 연결해 주세요.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Goal & Design */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-primary-400 flex items-center gap-2">
                    <CheckCircle2 size={20} /> 프로젝트 목적
                  </h3>
                  <div className="flex-1 text-slate-300 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5 shadow-inner">
                    {project.details.goal}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-accent-400 flex items-center gap-2">
                    <CheckCircle2 size={20} /> 프로젝트 설계
                  </h3>
                  <div className="flex-1 text-slate-300 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5 shadow-inner">
                    {project.details.design}
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="flex flex-col gap-4 pt-6 md:pt-8 border-t border-white/5">
                <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                  <CheckCircle2 size={20} /> 피드백 및 배운점
                </h3>
                <div className="text-slate-300 leading-relaxed bg-green-500/10 p-6 md:p-8 rounded-xl border border-green-500/20 shadow-inner">
                  {project.details.feedback}
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-end gap-4 mt-8">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-dark-900 hover:bg-black text-white border border-white/10 transition-colors font-medium">
                  <Github size={18} /> Source Code
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-400 text-white transition-colors font-medium shadow-lg shadow-primary-500/20">
                  Live Demo <ExternalLink size={18} />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 relative z-10" id="projects">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Projects</span>
        </h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx * 150} className="h-full">
            <div 
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20 border border-white/5 hover:border-white/20 flex flex-col h-full cursor-pointer"
            >
              <div className={`h-2 relative w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-400 mb-2">
                    <CalendarDays size={14} /> {project.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-5 border-t border-white/10 mt-auto text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>프로젝트 상세 내용 보기</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
