import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, skills } from './content';
import './style.css';

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }

function Project({ project }) {
  return (
    <article className="project" id={`project-${project.number}`}>
      <div className="project-heading">
        <span className="project-number">{project.number} / CASE STUDY</span>
        <span className="project-label">{project.label}</span>
      </div>
      <div className="project-grid">
        <div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="project-details">
          <div><h4>과제</h4><p>{project.problem}</p></div>
          <div><h4>담당 범위</h4><p>{project.role}</p></div>
          <div><h4>구현 및 수행</h4><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h4>결과</h4><p>{project.result}</p></div>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="페이지 맨 위로">{profile.name}<span className="wordmark-dot">.</span></a>
        <nav aria-label="주요 메뉴"><a href="#about">소개</a><a href="#work">프로젝트</a><a href="#contact">연락처</a></nav>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="eyebrow"><span className="signal" /> PLATFORM DEVELOPMENT PORTFOLIO <span className="hero-year">/ 2026</span></div>
            <h1 id="hero-title">요구사항을 이해하고,<br /><em>작동하는 서비스</em>로 만듭니다.</h1>
            <p className="hero-copy">{profile.introduction}</p>
            <a className="primary-link" href="#work">프로젝트 살펴보기 <Arrow /></a>
          </div>
          <div className="hero-side" aria-hidden="true"><span>ANALYZE</span><span>BUILD</span><span>VERIFY</span></div>
          <div className="hero-bottom"><span>01 — 03 SELECTED WORK</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="section-intro"><span className="section-index">01 / ABOUT</span><h2 id="about-title">설계와 구현 사이를<br />연결하는 개발자</h2></div>
          <div className="about-content"><p className="lead">{profile.headline}</p><p>서비스의 사용 흐름을 살피고, 필요한 데이터를 정의하고, 화면과 API를 연결합니다. 프로젝트 관리와 품질 검증 경험을 바탕으로 구현 이후의 운영까지 생각합니다.</p>
            <div className="skill-list">{skills.map(({group, items}) => <div className="skill-row" key={group}><strong>{group}</strong><span>{items.join(' · ')}</span></div>)}</div>
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><span className="section-index">02 / SELECTED WORK</span><h2 id="work-title">문제를 정의하고<br /><em>구현한 경험</em></h2><p>실제 수행 범위에 맞춰 프로젝트의 과제, 담당 역할과 결과를 정리했습니다.</p></div>
          <div className="project-list">{projects.map((project) => <Project key={project.number} project={project} />)}</div>
        </section>

        <section className="approach section" aria-labelledby="approach-title"><span className="section-index">03 / HOW I WORK</span><h2 id="approach-title">일하는 방식</h2><div className="approach-grid"><div><span>01</span><h3>맥락 파악</h3><p>요구사항과 사용 흐름을 먼저 확인하고 기능의 목적을 정의합니다.</p></div><div><span>02</span><h3>작게 구현</h3><p>데이터와 API의 연결을 점검하며 사용 가능한 단위로 구현합니다.</p></div><div><span>03</span><h3>검증과 공유</h3><p>오류 조건과 검증 결과를 정리해 팀이 빠르게 판단할 수 있게 합니다.</p></div></div></section>

        <section className="contact section" id="contact" aria-labelledby="contact-title"><span className="section-index">04 / CONTACT</span><h2 id="contact-title">함께 만들<br />다음 서비스를 기다립니다<span>.</span></h2><p>플랫폼 개발과 서비스 개선의 전 과정을 함께 고민하겠습니다.</p><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}>이메일 보내기 <Arrow diagonal /></a>}{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub 보기 <Arrow diagonal /></a>}{!profile.email && !profile.github && <span>연락처는 지원서에 기재했습니다.</span>}</div></section>
      </main>
      <footer><span>© 2026 {profile.name}</span><a href="#top">맨 위로 ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
