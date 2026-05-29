import { useState } from 'react';
import AdministracaoProjetoBancoDadosSections from './AdministracaoProjetoBancoDadosSections.tsx';
import { ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS } from './data.ts';

export default function AdministracaoProjetoBancoDadosContent() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div>
      {activeSection === 'intro' && (
        <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-65">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(108, 99, 255, 0.13), transparent 38%), linear-gradient(215deg, rgba(78, 205, 196, 0.1), transparent 42%)',
              }}
            />
          </div>

          <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
            4º período · 80h · APBD
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
            Administração e<br /><span className="gradient-text">Projeto de Banco de Dados</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
            Introdução · Modelagem de Dados · Armazenamento · Segurança · Arquitetura · PL/SQL
          </p>
        </div>
      )}

      <div className="page-wrap">
        <nav className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex gap-2 overflow-x-auto whitespace-nowrap">
          {ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`study-pill px-3 py-1.5 inline-flex items-center gap-1.5 ${activeSection === section.id ? 'active' : ''}`}
            >
              {'exam' in section && section.exam && (
                <span className="text-[10px] font-black opacity-75">{section.exam}</span>
              )}
              {section.shortTitle}
            </button>
          ))}
        </nav>
      </div>

      <div className={`page-wrap pb-20 ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}>
        <AdministracaoProjetoBancoDadosSections activeSection={activeSection} />
      </div>
    </div>
  );
}
