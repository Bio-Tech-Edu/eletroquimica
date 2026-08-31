# ⚡ Pré-ENEM Digital MT — Eletroquímica

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Pronto-brightgreen)](#-como-publicar-no-github-pages)
[![Metodologias](https://img.shields.io/badge/Metodologias-ABP%20%2B%20Gamifica%C3%A7%C3%A3o%20%2B%20Storytelling-blueviolet)](#-metodologias-ativas)

> **Aula interativa gamificada de Química — Eletroquímica (Lição 26)**: pilhas, potenciais e ddp, corrosão e metais de sacrifício, eletrólise e Leis de Faraday — com **5 cientistas brasileiras** como mentoras, dinâmica **Fato ou Fake** e **simuladores virtuais**. Parte do projeto **Pré-ENEM Digital MT**, ação educacional do **Governo do Estado de Mato Grosso** em parceria com **Bio+Tech EduDesign**.

---

## 🎯 Sobre o Projeto

O **Pré-ENEM Digital MT** é uma iniciativa educacional gratuita para estudantes do Ensino Médio da rede pública de Mato Grosso que se preparam para o **ENEM**.

Esta é a **quinta unidade** da série de Química:

1. Estudo das Soluções
2. Termoquímica
3. Cinética Química
4. Equilíbrio Químico
5. **Eletroquímica** *(este repositório)*

---

## 🧭 Objetivos Pedagógicos

- Compreender a conversão **energia química ⇌ energia elétrica**;
- Diferenciar **pilha** (espontânea, ΔE > 0) de **eletrólise** (não espontânea);
- Identificar **ânodo/cátodo** e os polos em cada tipo de célula;
- Calcular a **ddp (ΔE)** com a tabela de potenciais de redução;
- Aplicar a **proteção catódica por metal de sacrifício** à corrosão;
- Resolver eletrólise **ígnea e aquosa** com a ordem de descarga;
- Aplicar as **Leis de Faraday** (m = Q·E/96500) e a eletrólise em série (Q₁ = Q₂).

**Habilidades BNCC/ENEM**: EM13CNT101 · EM13CNT301 · Matriz ENEM H17/H18.

---

## 🎓 Metodologias Ativas

### 🔹 ABP — Aprendizagem Baseada em Problemas
| Missão | Tema | Mentora | Problema real |
|---|---|---|---|
| **M1** | Baterias do Cotidiano | Dra. Joana D'Arc Félix (Química/UFAL) | Como dispositivos mantêm energia contínua? |
| **M2** | Potencial e DDP | Dra. Sonia Guimarães (Física/ITA) | Como calcular a voltagem de uma pilha? |
| **M3** | Corrosão no Litoral | Dra. Marcia Barbosa (Física/UFRJ) | Como metais de sacrifício protegem navios? |
| **M4** | Eletrólise Industrial | Dra. Elisa Orth (Química/UFPR) | Como a indústria faz soda cáustica do sal? |
| **M5** | Galvanoplastia (Boss) | Dra. Yvonne Mascarenhas (Física/USP) | Quanto tempo leva um banho de prata? |

### 🔹 Gamificação + Storytelling
- 👩‍🔬 5 mentoras brasileiras com falas contextualizadas
- 🔥 Dinâmica **Fato ou Fake** como aquecimento de cada missão (+10 XP)
- ⭐ +30 XP por questão · 3 vidas · 5 badges · certificado com ranking S/A/B/C

### 🔹 Simuladores Virtuais
- 🔋 **Monte sua pilha** (M2): selecione 2 metais da tabela de potenciais → ddp, ânodo e cátodo calculados em tempo real
- ⚗️ **Leis de Faraday** (M5): massa × carga do íon × corrente → tempo de eletrólise (mesma lógica das questões ENEM)
- ⚖️ **Quadro comparativo Pilha × Eletrólise** (M4)

---

## 📚 Banco de Questões (15 · feedback duplo)

- **Apostila (Lição 26)**: ENEM 2022 (corrosão/nanocerâmica → efeito de barreira), ENEM 2021 (bateria Li-I → 10,77 V), ENEM 2021 (NaOH → soda cáustica), galvanoplastia 54 g Ag (1h 23min 20s), eletrólise em série (6,35 g Cu), ENEM 2024 (bismuto/dessalinizadora → BiOCl), ENEM 2024 (produção de H₂SO₄ → etapa 2);
- **Banco de questões anexo**: 5 questões com gabarito comentado em duplo feedback (pilhas em série, metal de sacrifício, eletrólise aquosa, Faraday, série);
- **Extras estilo ENEM**: história de Galvani/Volta, eletrodo padrão de hidrogênio, escolha do metal de sacrifício, eletrólise ígnea.

Cada questão possui **feedback explicativo duplo**: reforço com raciocínio completo para acertos (`textoOk`) e **resolução passo a passo** para erros (`textoErr`) — incluindo os erros típicos de cada alternativa distrativa.

---

## 🖼️ Assets Visuais

| Asset | Formato | Status |
|---|---|---|
| 4 avatares (Joana D'Arc, Sonia, Marcia, Elisa) | PNG 1024² gerado por IA | ✅ Final |
| Avatar Dra. Yvonne Mascarenhas | SVG vetorial | ⚠️ **Versão vetorial provisória** — regerar em PNG/IA quando houver créditos |
| 5 badges das missões | SVG vetorial | ⚠️ **Versões vetoriais provisórias** — substituir pelos badges 3D gerados por IA |
| hero / favicon | SVG vetorial | ⚠️ Provisórios — substituir por versões IA |
| Logos Bio+Tech EduDesign + Gov. MT | PNG oficiais | ✅ Final |

> **Nota de transparência:** a geração das imagens foi interrompida por esgotamento de créditos após a produção dos 3 primeiros avatares. Os demais visuais foram entregues como arte vetorial SVG funcional (não placeholders de texto) para que a aula esteja 100% utilizável. Para gerar as versões 3D definitivas, basta solicitar em uma nova conversa com os prompts já documentados no histórico do projeto.

---

## 🚀 Como Publicar no GitHub Pages

```bash
unzip pre-enem-quimica-eletroquimica.zip
cd eletroquimica
git init
git add .
git commit -m "⚡ Aula interativa de Eletroquímica"
git branch -M main
git remote add origin https://github.com/<SEU-USUARIO>/pre-enem-quimica-eletroquimica.git
git push -u origin main
# Settings → Pages → Source: main / (root)
```

**URL final:** `https://<SEU-USUARIO>.github.io/pre-enem-quimica-eletroquimica/`

Uso local: abra `index.html` em qualquer navegador moderno (funciona offline).

---

## 📁 Estrutura do Repositório

```
eletroquimica/
├── index.html
├── README.md
├── LICENSE
├── .nojekyll
├── css/style.css
├── js/app.js
├── assets/
│   ├── hero.svg · favicon.svg
│   ├── avatars/  (joana_darc.png, sonia_guimaraes.png, marcia_barbosa.png,
│   │              elisa_orth.png, yvonne_mascarenhas.svg)
│   ├── badges/   (badge_m1.svg … badge_m5.svg)
│   └── logos/    (biotech_edudesign.png, gov_mato_grosso.png)
└── docs/
    ├── modelo_conceitual_eletroquimica.md
    └── banco_questoes_eletroquimica.md
```

---

## 🤝 Créditos

- **Desenvolvimento & Autoria**: Bio+Tech EduDesign
- **Apoio Institucional**: Governo do Estado de Mato Grosso — SEDUC/MT
- **Base pedagógica**: Videoaula "CONECTA ENEM — Lição 26" (Editora LT / Educa LT) + Apostila pp. 156–162
- **Documentos de referência**: `docs/modelo_conceitual_eletroquimica.md` e `docs/banco_questoes_eletroquimica.md`

## 📜 Licença

**MIT** — livre para uso pedagógico em escolas públicas e privadas. Veja [LICENSE](LICENSE).

---

<div align="center">

**🇧🇷 Feito com ❤️ para estudantes brasileiros do ENEM 🇧🇷**

*"De Volta a Faraday: química que move o mundo — e agora a sua aprovação."*

</div>
