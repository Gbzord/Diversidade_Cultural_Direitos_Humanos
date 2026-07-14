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

*"Direitos humanos não se negocia por contexto. Tecnologia não é neutra. Exige vigilância."*
