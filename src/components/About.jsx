import React from 'react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Front-end',
    skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js', 'Styled-components', 'Storybook']
  },
  {
    title: 'AI & Tools',
    skills: ['ComfyUI', 'Virtual Try-On', 'Flux']
  },
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C', 'SQL']
  }
];

const experiences = [
  {
    title: '대한민국 인재상 수상',
    period: '2017 (과학창의재단 고등학생 부문)'
  },
  {
    title: '한국외국어대학교 테니스 동아리 ACE',
    period: '동아리 활동'
  },
  {
    title: '코드잇 프론트엔드 부트캠프 7기',
    period: '2024.04.15 ~ 2024.10.15'
  },
  {
    title: 'KAIST-IP 영재원 조교 활동',
    period: '2024.10.30 ~ 2025.05.25'
  },
  {
    title: '컴퓨터공학부 개발 블로그 챌린지',
    period: '2024.11.20 ~ 현재'
  },
  {
    title: 'SURESOFT 파견 근무',
    period: '2025.10.06 ~ 2025.11.28'
  }
];

const About = () => {
  return (
    <section className="py-20 relative z-10" id="about">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Experience Section */}
        <div className="flex-1 space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Experience & <span className="text-primary-400">Education</span>
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6 relative border-l border-white/10 pl-6 ml-3">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="relative">
                <div className="absolute w-3 h-3 bg-primary-500 rounded-full -left-[1.9rem] top-1.5 ring-4 ring-dark-900"></div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-sm text-slate-400 mt-1 block">{exp.period}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="flex-1 w-full space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Technical <span className="text-accent-400">Skills</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid gap-6">
            {skillCategories.map((category, idx) => (
              <ScrollReveal key={category.title} delay={idx * 200}>
                <div className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-primary-500/50 transition-colors duration-500">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-500/10 blur-[40px] rounded-full group-hover:bg-accent-400/20 transition-colors"></div>
                  <h3 className="text-lg font-semibold text-white mb-4 pt-1">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
