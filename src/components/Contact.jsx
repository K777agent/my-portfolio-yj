import React from 'react';
import { Send, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section className="py-24 relative z-10" id="contact">
      <ScrollReveal className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 blur-[90px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="block mb-1 md:mb-2">끊임없는 성장을 향한</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EE5FF] to-[#B462FE]">새로운 도전</span>을 환영합니다.
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            기술적 완성도와 비즈니스 목표를 동시에 달성하는 사용자 중심의 웹 서비스를 구축합니다. <br/>새로운 프로젝트 제안이나 채용 및 협업 관련 문의는 언제든 환영합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=junzang00@gmail.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-400 hover:to-accent-400 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg">
              이메일 보내기 <Mail size={20} />
            </a>
            <a href="https://k777agent.tistory.com/" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              블로그 방문하기 <Send size={20} />
            </a>
          </div>
        </div>
      </ScrollReveal>
      
      <footer className="mt-20 text-center text-slate-500 text-sm flex flex-col items-center justify-center gap-4 animate-fade-in">
        <p className="font-medium">© {new Date().getFullYear()} Kim Ye-jun. All rights reserved.</p>
        <p className="text-xs">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </section>
  );
};

export default Contact;
