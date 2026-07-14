<img width="80" height="80" alt="un_PNG20-removebg-preview" src="https://github.com/user-attachments/assets/1c7d4468-e319-46cf-92e0-f18a7677dc0d" />

# Direitos Humanos na Era Digital

> **Quando o direito humano encontra o código, o feed e o banco de dados.**

Um projeto educativo que conecta a Declaração Universal dos Direitos Humanos (1948) a três problemas contemporâneos de violação de direitos no contexto digital: viés algorítmico em recrutamento, discurso de ódio em redes sociais e violação de privacidade de dados pessoais.

---

## 📋 Visão Geral

Este trabalho interativo examina como sistemas técnicos — algoritmos de recrutamento, redes sociais e bancos de dados — herdam vieses, incentivos e omissões de quem os projeta, treina e opera. Através de estudos de caso concretos, legislação aplicável e simulações interativas, o projeto demonstra:

- Que direitos humanos não mudam quando o meio muda
- Como a prevenção é mais ética e barata que a reparação
- A responsabilidade compartilhada entre poder público, empresas e usuários

---

## 🎯 Seções Principais

### 1. **Declaração** (`#declaracao`)
Apresenta seis artigos da Declaração Universal dos Direitos Humanos que fundamentam os estudos de caso:

- **Artigo 1º**: Igualdade de nascença
- **Artigo 2º**: Vedação à distinção
- **Artigo 7º**: Igualdade perante a lei
- **Artigo 12**: Privacidade e vida íntima
- **Artigo 19**: Liberdade de expressão
- **Artigo 23**: Direito ao trabalho


### 2. **Estudos de Caso** (`#casos`)
Três casos contemporâneos estruturados em quatro blocos cada um:

#### **Caso 1: Discriminação em Seleção de Emprego**
- *O que houve*: Sistemas de triagem automática (ATS) perpetuam preconceitos históricos
- *Normas violadas*: DUDH Arts. 2º, 7º, 23; CF/88 Art. 5º; Lei 9.029/1995; CLT Art. 373-A
- *Prevenção*: Auditoria de viés, blind recruitment, transparência algorítmica
- *Ações*: MPT, PL 2338/2023, comitês de ética corporativos
- **Demo interativa**: Simulação de taxa de aprovação com/sem auditoria de viés

#### **Caso 2: Discurso de Ódio nas Redes Sociais**
- *O que houve*: Algoritmos de recomendação maximizam engajamento, favorecendo conteúdo inflamatório
- *Normas violadas*: DUDH Arts. 1º, 2º, 7º; CF/88 Art. 5º, XLII; Lei 7.716/1989; Marco Civil
- *Prevenção*: Moderação híbrida, canais de denúncia, educação midiática
- *Ações*: Tipificação do racismo, responsabilidade de plataformas, auditorias

#### **Caso 3: Violação de Privacidade e Dados Pessoais**
- *O que houve*: Vazamentos em massa expõem CPFs, dados de renda, informações familiares
- *Normas violadas*: DUDH Art. 12; CF/88 Art. 5º, X; LGPD Lei 13.709/2018
- *Prevenção*: Privacy by design, criptografia, consentimento granular
- *Ações*: Sanções da ANPD, ações judiciais, investimento em segurança

### 3. **Conscientização** (`#consciencia`)
Síntese com três princípios-chave:

1. Direitos humanos na era digital são a mesma Declaração de 1948 aplicada a novas ferramentas
2. Prevenção é mais barata e ética que reparação
3. Responsabilidade é compartilhada: poder público, empresas e usuários

### 4. **Referências** (`#referencias`)
Lista completa de fontes normativas:
- Declaração Universal dos Direitos Humanos (1948)
- Constituição Federal do Brasil (1988)
- Leis trabalhistas, de proteção de dados e marco regulatório de IA
- Institucões: ANPD, MPT, etc.

---

## 🛠️ Tecnologias

- **HTML 5**: Estrutura semântica com ARIA labels para acessibilidade
- **CSS 3**: Design responsivo com variáveis CSS e grid layout
- **JavaScript (Vanilla)**: Sem dependências externas
  - Accordion interativo para artigos e casos
  - IntersectionObserver para animação de cards e navegação ativa
  - Simulação interativa de viés algorítmico
- **Fontes do Google**:
  - *Fraunces*: Exibição (títulos, citações jurídicas)
  - *Source Sans 3*: Corpo de texto
  - *IBM Plex Mono*: Utilitária (parágrafos jurídicos)
- **Bootstrap 5.3.8**: Via CDN (utilitários opcionais)

---

## 📁 Estrutura do Projeto

```
Projeto_DH/
├── index.html          # Página principal
├── styles.css          # Estilos globais
├── script.js           # Lógica interativa
├── images/
│   ├── img01.png       # Logo/marca
│   └── img02.png       # Logo secundário
├── README.md           # Este arquivo

```

---

## 🚀 Como Usar

### Localmente
1. Clone ou baixe este repositório
2. Abra `index.html` em um navegador moderno (Chrome, Firefox, Safari, Edge)
3. Navegue usando o menu no topo ou os links diretos nas seções

### Comportamentos Interativos

**Artigos (Declaração)**
- Clique no botão "Mostrar / Ocultar" para expandir/colapsar conteúdo
- O título permanece sempre visível

**Estudos de Caso**
- Clique no cabeçalho do caso para abrir/fechar o painel
- Explore "O que houve", "Normas violadas", "Prevenção" e "Ações"
- No Caso 1: Teste a simulação de viés com os botões "Sem auditoria" e "Com auditoria de viés"

**Navegação**
- Menu responsivo: redimensione para ver o menu colapsável em mobile
- Links de âncora internos garantem navegação suave entre seções

---

## ♿ Acessibilidade

- Uso de `aria-expanded`, `aria-controls` e `aria-pressed` para componentes interativos
- Semântica HTML5 com `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`
- Contraste de cores conforme recomendações WCAG
- Fontes legíveis e espaçamento adequado
- Suporte a navegação por teclado

---

## 🎨 Design

- **Palette**: Cores em tom neutro/profissional com destaque para elementos-chave
- **Layout**: Grid responsivo; adapta-se a mobile, tablet e desktop
- **Tipografia**: Hierarquia clara com fontes Google de alta qualidade
- **Animações**: Suaves e acessíveis; não prejudicam legibilidade

---

## 📊 Recursos Interativos

### Simulação de Viés Algorítmico (Caso 1)
Demonstra como algoritmos de recrutamento podem perpetuar discriminação de gênero:
- **Sem auditoria**: Taxa de aprovação desigual entre currículos com marcadores masculinos e femininos
- **Com auditoria de viés**: Redistribuição mais equilibrada após intervenção

*Nota*: Simulação ilustrativa com dados fictícios para fins pedagógicos.

---

## 📚 Conteúdo de Referência

Todos os artigos, normas e legislação citados são fundamentados em:

1. **Organização das Nações Unidas** — Declaração Universal dos Direitos Humanos (1948)
2. **Brasil** — Constituição Federal (1988), LGPD, Marco Civil da Internet
3. **Legislação laboral** — Lei 9.029/1995, CLT, Lei 7.716/1989
4. **Instituições** — ANPD, MPT, Congresso Nacional
5. **Literatura acadêmica** — Casos reais documentados em auditorias de viés e estudos de impacto social

---

## 👤 Autor

**Gabriel Christino**  
Faculdade de Tecnologia Senac Rio  
Disciplina: Diversidade Cultural e Direitos Humanos

---

## 📄 Licença

Este projeto é fornecido para fins educacionais. Sinta-se livre para usar, modificar e distribuir com fins pedagógicos, mantendo a atribuição ao autor original.

---

## 🤝 Contribuições

Sugestões, correções ou melhorias são bem-vindas! Abra uma *issue* ou envie um *pull request*.

---

## 🔗 Links Rápidos

- [Ir para a Declaração](#declaracao)
- [Ir para Estudos de Caso](#casos)
- [Ir para Conscientização](#consciencia)
- [Ver Referências](#referencias)

---

*"Direitos humanos não se negocia por contexto. Tecnologia não é neutra. Exige vigilância."*
