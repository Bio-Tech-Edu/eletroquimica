/* =====================================================
   Pré-ENEM Digital MT — Eletroquímica (Lição 26)
   Bio+Tech EduDesign © 2026
   ABP + Gamificação + Storytelling + Simuladores
   ===================================================== */

// ================= STATE =================
const state = {
  name:"", mentor:null, xp:0, lives:3,
  currentMission:null, currentQ:0,
  ffDone:{}, missionsDone:[], badges:[]
};

// ================= MENTORAS =================
const mentors = [
  {
    id:"joana", name:"Dra. Joana D'Arc Félix",
    role:"Química · UFAL · Baterias",
    img:"assets/avatars/joana_darc.png",
    bio:"Química paraibana, pesquisadora da UFAL e referência em nanotecnologia sustentável. Começou a trabalhar aos 7 anos e hoje inspira milhares de jovens cientistas.",
    quotes:[
      "Toda bateria do seu celular é uma pilha de Daniell moderna: química virando eletricidade!",
      "Ânodo perde elétron, Cátodo recebe. Mnemônico: Ânodo = Oxidação (as duas começam com vogal!).",
      "Em série, as voltagens SOMAM. É assim que 3 pilhas de 3,59 V viram uma bateria de 10,77 V."
    ]
  },
  {
    id:"sonia", name:"Dra. Sonia Guimarães",
    role:"Física · ITA · Semicondutores",
    img:"assets/avatars/sonia_guimaraes.png",
    bio:"Primeira mulher negra doutora em Física do Brasil (ITA). Pesquisa semicondutores — materiais que só funcionam porque elétrons se movem de forma controlada.",
    quotes:[
      "A ddp é a 'pressão elétrica' que empurra os elétrons pelo fio. Calcule: ΔE = E(maior) − E(menor).",
      "Potenciais de redução são como placar de jogo: quem tem o maior valor vence e sofre redução.",
      "Elétron não escolhe caminho: ele vai do polo negativo para o positivo, sempre pelo fio externo."
    ]
  },
  {
    id:"marcia", name:"Dra. Marcia Barbosa",
    role:"Física · UFRJ · Corrosão",
    img:"assets/avatars/marcia_barbosa.png",
    bio:"Física gaúcha da UFRJ, estudiosa das anomalias da água e referência internacional. Mulher na ciência que ensina: entender a matéria é proteger o que construímos.",
    quotes:[
      "Ferrugem é eletroquímica em ação: o ferro vira ânodo, perde elétrons e se desmancha.",
      "Metal de sacrifício: o zinco 'morre' no lugar do ferro do navio. É proteção catódica!",
      "Quanto MENOR o potencial de redução, mais o metal 'quer' oxidar — melhor sacrifício ele é."
    ]
  },
  {
    id:"elisa", name:"Dra. Elisa Orth",
    role:"Química · UFPR · Eletrólise",
    img:"assets/avatars/elisa_orth.png",
    bio:"Química paranaense da UFPR, pesquisadora de catálise e processos industriais. Estuda como reações químicas podem ser comandadas — inclusive pela eletricidade.",
    quotes:[
      "Eletrólise é o contrário da pilha: a tomada FORÇA a reação que não aconteceria sozinha.",
      "Na eletrólise aquosa do NaCl: sai Cl₂ no ânodo, H₂ no cátodo e sobra NaOH na solução — a soda cáustica!",
      "Na cuba eletrolítica os polos se invertem: ânodo é o polo POSITIVO. Cuidado com essa pegadinha do ENEM!"
    ]
  },
  {
    id:"yvonne", name:"Dra. Yvonne Mascarenhas",
    role:"Física · USP · Cristalografia",
    img:"assets/avatars/yvonne_mascarenhas.png",
    bio:"Física paulista pioneira, fundadora da cristalografia no Brasil (USP São Carlos). Dedicou a vida à ciência e à formação de pesquisadores.",
    quotes:[
      "Faraday quantificou tudo: 1 mol de elétrons = 96.500 Coulombs. Com isso calculamos massa, tempo e corrente!",
      "Na galvanoplastia, a joia é o cátodo: os íons de prata nadam até ela e se depositam, átomo por átomo.",
      "Eletrólise em série: a mesma corrente atravessa todas as cubas. Q₁ = Q₂. Nunca esqueça!"
    ]
  }
];

// ================= BADGES =================
const badges = [
  {id:"m1", name:"Energia Portátil", img:"assets/badges/badge_m1.svg", desc:"Dominou pilhas e baterias do cotidiano"},
  {id:"m2", name:"Mestre dos Potenciais", img:"assets/badges/badge_m2.svg", desc:"Calcula ddp com a tabela de potenciais"},
  {id:"m3", name:"Escudo Anticorrosão", img:"assets/badges/badge_m3.svg", desc:"Protege metais com sacrifício eletroquímico"},
  {id:"m4", name:"Operador Industrial", img:"assets/badges/badge_m4.svg", desc:"Domina eletrólise ígnea e aquosa"},
  {id:"m5", name:"Joalheiro de Faraday", img:"assets/badges/badge_m5.svg", desc:"Boss: galvanoplastia e leis de Faraday"}
];

// ================= TABELA DE POTENCIAIS (simulador) =================
const potentials = [
  {name:"Li", red:-3.05}, {name:"K", red:-2.92}, {name:"Ca", red:-2.87},
  {name:"Na", red:-2.71}, {name:"Mg", red:-2.37}, {name:"Al", red:-1.66},
  {name:"Zn", red:-0.76}, {name:"Fe", red:-0.44}, {name:"Ni", red:-0.23},
  {name:"Pb", red:-0.13}, {name:"H₂", red:0.00}, {name:"Cu", red:+0.34},
  {name:"I₂", red:+0.54}, {name:"Ag", red:+0.80}, {name:"Au", red:+1.50}
];

// ================= MISSÕES =================
const missions = [
  {
    id:"m1", title:"Missão 01 — Baterias do Cotidiano", region:"Pilhas e Oxirredução",
    intro:"Seu celular, o controle remoto, o marcapasso: todos funcionam com pilhas — dispositivos que convertem energia QUÍMICA em ELÉTRICA por reações espontâneas de oxirredução. Como isso é possível?",
    ff:{
      statement:"A Pilha de Daniell, inventada em 1836, é constituída por um único eletrodo e uma única solução que converte energia elétrica em energia química.",
      isFato:false,
      explicacao:"<strong>FAKE!</strong> A pilha de Daniell converte energia <strong>química → elétrica</strong> (reação espontânea) e possui DOIS eletrodos (Zn e Cu) imersos em soluções distintas, interligados por ponte salina."
    },
    theory:[
      {h:"Pilhas", p:"<span class='highlight'>Pilha</span> = produção de corrente elétrica por meio de reação química espontânea (ΔE > 0). <span class='highlight'>Eletrólise</span> = ocorrência de reação química pela passagem de corrente elétrica (não espontânea, ΔE < 0)."},
      {h:"Oxidação × Redução", p:"<span class='highlight'>Oxidação</span>: perda de elétrons (Zn⁰ → Zn²⁺ + 2e⁻). <span class='highlight'>Redução</span>: ganho de elétrons (Cu²⁺ + 2e⁻ → Cu⁰). Mnemônico: Ânodo-Oxidação (vogais), Cátodo-Redução (consoantes).", formula:"Ânodo (−): Zn⁰ → Zn²⁺ + 2e⁻  (oxidação)\nCátodo (+): Cu²⁺ + 2e⁻ → Cu⁰  (redução)"},
      {h:"Pilha de Daniell", p:"Componentes: dois eletrodos (barras metálicas), fio condutor, soluções com íons do mesmo metal do eletrodo, voltímetro e <span class='highlight'>ponte salina</span> (KCl) que mantém a neutralidade elétrica.", formula:"Zn + CuSO₄ → ZnSO₄ + Cu"},
      {h:"O que acontece", p:"A barra de zinco PERDE massa; a solução de Zn²⁺ fica mais concentrada. A barra de cobre AUMENTA; a solução de Cu²⁺ fica mais diluída."}
    ]
  },
  {
    id:"m2", title:"Missão 02 — Potencial e DDP", region:"Tabela de Potenciais",
    intro:"Um brinquedo precisa de 6 V para funcionar. Quais metais você combinaria para construir essa pilha? A resposta está na tabela de potenciais de redução.",
    ff:{
      statement:"O eletrodo em que ocorre a oxidação é denominado ânodo e corresponde ao polo negativo de uma pilha.",
      isFato:true,
      explicacao:"<strong>FATO!</strong> O ânodo perde elétrons (oxidação) e atua como polo NEGATIVO da pilha. Lembre: na PILHA, ânodo é (−); na ELETRÓLISE, ânodo é (+)."
    },
    theory:[
      {h:"Eletrodo Padrão", p:"O <span class='highlight'>eletrodo de hidrogênio</span> (E° = 0,00 V) é a referência: 2H⁺ + 2e⁻ → H₂. Todos os demais potenciais são medidos em relação a ele, a 25°C e 1 atm."},
      {h:"Cálculo da ddp", p:"A diferença de potencial (ΔE ou força eletromotriz) pode ser calculada por qualquer uma das três fórmulas:", formula:"ΔE = E_maior − E_menor\nΔE = E_red(cátodo) − E_red(ânodo)\nΔE = E_oxi(ânodo) + E_red(cátodo)"},
      {h:"Exemplo", p:"Al³⁺ + 3e⁻ → Al (E° = −1,67 V) e Cu²⁺ + 2e⁻ → Cu (E° = +0,34 V):", formula:"ΔE = (+0,34) − (−1,67) = +2,01 V"},
      {h:"Associação em série", p:"Pilhas ligadas em série SOMAM suas voltagens: 3 pilhas de 3,59 V → bateria de 10,77 V."}
    ]
  },
  {
    id:"m3", title:"Missão 03 — Corrosão no Litoral", region:"Metais de Sacrifício",
    intro:"Navios, cascos de embarcações, tanques de postos de gasolina e estruturas metálicas do litoral sofrem com a maresia. Como a eletroquímica protege essas estruturas?",
    ff:{
      statement:"Na corrosão do ferro, a presença de água e oxigênio acelera o processo, e o ferro atua como cátodo no processo.",
      isFato:false,
      explicacao:"<strong>FAKE!</strong> Água e oxigênio de fato aceleram a corrosão, mas o ferro atua como ÂNODO (sofre oxidação: Fe → Fe²⁺ + 2e⁻). É por isso que ele se desgasta."
    },
    theory:[
      {h:"Corrosão", p:"A corrosão é um processo eletroquímico <span class='highlight'>espontâneo</span> de deterioração de metais. No ferro:", formula:"4 Fe(s) + 2 H₂O(l) + 3 O₂(g) → 2 Fe₂O₃·H₂O(s)"},
      {h:"Metal de Sacrifício", p:"Conecta-se ao ferro um metal com <span class='highlight'>menor potencial de redução</span> (Mg, Zn). Ele oxida no lugar do ferro, protegendo-o. O ferro vira CÁTODO — por isso o nome <span class='highlight'>proteção catódica</span>."},
      {h:"Outras proteções", p:"<span class='highlight'>Galvanização</span> (revestir com zinco), <span class='highlight'>pintura/filmes de barreira</span> (impedem contato com O₂ e H₂O) e ligas resistentes (aço inox)."},
      {h:"Nanotecnologia", p:"Filmes nanocerâmicos à base de ZrO₂ e Al₂O₃ sobre o metal criam uma <span class='highlight'>barreira física</span> que impede o contato com o agente oxidante (ENEM 2022)."}
    ]
  },
  {
    id:"m4", title:"Missão 04 — Eletrólise Industrial", region:"Da Salmoura à Soda Cáustica",
    intro:"A indústria produz soda cáustica (NaOH), cloro (Cl₂) e alumínio metálico a partir da eletrólise. Como a corrente elétrica força reações que não aconteceriam sozinhas?",
    ff:{
      statement:"Na eletrólise ígnea, diferentemente da eletrólise aquosa, o processo ocorre com compostos iônicos fundidos, sem presença de água.",
      isFato:true,
      explicacao:"<strong>FATO!</strong> A eletrólise ÍGNEA usa o composto no estado líquido após fusão (ex: NaCl fundido → Na + Cl₂). Na eletrólise AQUOSA, a água participa competindo com os íons do sal."
    },
    theory:[
      {h:"Eletrólise", p:"Processo de oxirredução <span class='highlight'>NÃO espontâneo</span> que requer fornecimento de energia elétrica (gerador/bateria externa). Na cuba eletrolítica: ânodo é o polo POSITIVO (oxidação) e cátodo é o NEGATIVO (redução)."},
      {h:"Eletrólise Ígnea", p:"Composto iônico fundido, sem água. Exemplo: NaCl(l):", formula:"Cátodo(−): 2 Na⁺ + 2e⁻ → 2 Na(s)\nÂnodo(+): 2 Cl⁻ → Cl₂(g) + 2e⁻\nGlobal: 2 NaCl(l) → 2 Na(s) + Cl₂(g)"},
      {h:"Eletrólise Aquosa do NaCl", p:"A água compete: no cátodo descarrega H⁺(H₂O) em vez de Na⁺; no ânodo descarrega Cl⁻ em vez de OH⁻:", formula:"Cátodo(−): 2 H₂O + 2e⁻ → H₂ + 2 OH⁻\nÂnodo(+): 2 Cl⁻ → Cl₂ + 2e⁻\nGlobal: 2 NaCl + 2 H₂O → H₂ + Cl₂ + 2 NaOH"},
      {h:"Ordem de descarga", p:"Cátions: descarregam por último os alcalinos e alcalino-terrosos; H⁺ antes deles; demais cátions antes do H⁺. Ânions: oxoânions e F⁻ não descarregam na presença de água."}
    ]
  },
  {
    id:"m5", title:"Missão 05 — Galvanoplastia (Boss)", region:"Leis de Faraday",
    intro:"Uma joalheria precisa banhar uma pulseira com 54 g de prata usando corrente de 9,65 A. Quanto tempo levará? As Leis de Faraday respondem — e o ENEM cobra isso todo ano!",
    ff:{
      statement:"A carga de 96.500 Coulombs recebe o nome de Faraday (F).",
      isFato:true,
      explicacao:"<strong>FATO!</strong> 1 F = 96.500 C = carga de 1 mol de elétrons. É a ponte entre a corrente elétrica e a massa depositada na eletrólise."
    },
    theory:[
      {h:"1ª Lei de Faraday", p:"A massa eletrolisada é proporcional à carga elétrica (Q = i·t):", formula:"m = K₁ · Q"},
      {h:"2ª Lei de Faraday", p:"A massa é proporcional ao equivalente-grama (E) do elemento:", formula:"m = K₂ · E\nm = (1/96500) · Q · E"},
      {h:"Carga", p:"Q = i · t, onde i = corrente (A) e t = tempo (s).", formula:"1 F = 96.500 C"},
      {h:"Eletrólise em série", p:"Cubas associadas em série são atravessadas pela MESMA carga:", formula:"Q₁ = Q₂ = Q₃ ..."}
    ]
  }
];

// ================= QUESTÕES (3 por missão = 15) =================
const questions = {
  m1:[
    {
      tag:"BANCO · ENEM 2021",
      enunciado:"Considere que uma bateria é construída pela associação em série de três pilhas de lítio-iodo, nas condições-padrão, com as semiequações de redução:\n\nI₂ + 2e⁻ → 2I⁻  (E° = +0,54 V)\nLi⁺ + e⁻ → Li  (E° = −3,05 V)\n\nEssa bateria associada (3 pilhas) atinge qual ddp?",
      options:["1,2 V","3,59 V","7,18 V","10,77 V","19,5 V"],
      correct:3,
      textoOk:"Letra D! Primeiro a ddp de UMA pilha: ΔE = (+0,54) − (−3,05) = +3,59 V. Como estão associadas EM SÉRIE, as voltagens somam: 3,59 × 3 = 10,77 V. Essa questão caiu no ENEM 2021 com a tabela de dispositivos eletrônicos!",
      textoErr:"Passo a passo: (1) o iodo tem MAIOR potencial (+0,54) → sofre redução (cátodo); o lítio tem MENOR (−3,05) → oxida (ânodo). (2) ΔE de uma pilha = 0,54 − (−3,05) = 3,59 V. (3) Em SÉRIE as ddp SOMAM: 3 × 3,59 = 10,77 V. Quem marcou B (3,59 V) esqueceu da associação em série!"
    },
    {
      tag:"APOSTILA · Pilha de Daniell",
      enunciado:"Na pilha de Daniell (Zn + CuSO₄ → ZnSO₄ + Cu), é CORRETO afirmar sobre o funcionamento:",
      options:[
        "A barra de zinco aumenta de massa e a solução de Cu²⁺ fica mais concentrada.",
        "O cobre sofre oxidação e o zinco sofre redução.",
        "A barra de zinco perde massa (oxida no ânodo) e a barra de cobre aumenta (redução de Cu²⁺ no cátodo).",
        "A ponte salina transfere elétrons entre as soluções.",
        "Os elétrons fluem pelo fio do cátodo de cobre para o ânodo de zinco."
      ],
      correct:2,
      textoOk:"Perfeito! O zinco oxida (Zn → Zn²⁺ + 2e⁻): a barra PERDE massa e a solução de Zn²⁺ concentra. O cobre reduz (Cu²⁺ + 2e⁻ → Cu): a barra AUMENTA e a solução de Cu²⁺ dilui. Os elétrons fluem do Zn (polo −) para o Cu (polo +) pelo fio externo.",
      textoErr:"Relembre a pilha de Daniell: Zn tem MENOR potencial → é o ânodo (oxida, perde massa). Cu²⁺ reduz no cátodo → a barra de cobre GANHA massa. A ponte salina NÃO transfere elétrons — ela transfere ÍONS para manter a neutralidade elétrica das soluções. Elétrons só trafegam pelo fio externo!"
    },
    {
      tag:"ENEM-STYLE · Fato histórico",
      enunciado:"Luigi Galvani (1756) observou que pernas de sapo morto se contraíam presas a uma mesa de ferro por ganchos de metal. Alessandro Volta (1800) empilhou discos alternados de zinco e cobre separados por tecidos molhados em ácido sulfúrico, produzindo corrente contínua — a pilha de Volta. O que esses dois experimentos têm em comum do ponto de vista eletroquímico?",
      options:[
        "Ambos demonstram a conversão de energia elétrica em energia química por eletrólise.",
        "Ambos envolvem reações de oxirredução espontâneas gerando corrente elétrica entre metais diferentes em contato com eletrólito.",
        "Ambos provam que os músculos dos animais produzem eletricidade sem participação química.",
        "Ambos utilizam corrente alternada gerada por indução eletromagnética.",
        "Nenhum dos dois envolve processos químicos."
      ],
      correct:1,
      textoOk:"Exato! Galvani tinha, sem saber, uma pilha: dois metais diferentes (ferro e gancho) + eletrólito (fluidos do sapo) = corrente por oxirredução espontânea. Volta sistematizou isso com discos de Zn/Cu + ácido. É o mesmo princípio de toda bateria moderna!",
      textoErr:"O elo comum é a PILHA: reação de oxirredução ESPONTÂNEA entre metais diferentes imersos em eletrólito gerando corrente elétrica (química → elétrica). No sapo de Galvani, os dois metais + os fluidos corporais formavam uma célula galvânica acidental. A eletrólise (elétrica → química) é o fenômeno INVERSO."
    }
  ],
  m2:[
    {
      tag:"APOSTILA · Cálculo de ddp",
      enunciado:"Com base nas semirreações de redução dos metais abaixo, determine a ddp da pilha:\n\nAl³⁺ + 3e⁻ → Al    E° = −1,67 V\nCu²⁺ + 2e⁻ → Cu    E° = +0,34 V",
      options:["1,33 V","2,01 V","−1,33 V","−2,01 V","0,67 V"],
      correct:1,
      textoOk:"Correto! ΔE = E_maior − E_menor = (+0,34) − (−1,67) = +2,01 V. Dica: subtrair um número negativo SOMA os valores. O cobre é o cátodo (maior E°) e o alumínio o ânodo.",
      textoErr:"Use qualquer uma das 3 fórmulas. A mais direta: ΔE = E_maior − E_menor. Aqui: (+0,34) − (−1,67) = 0,34 + 1,67 = +2,01 V. Erros comuns: (A) fez 1,67 − 0,34 = 1,33; (C/D) inverteram os sinais. Em pilha espontânea, ΔE é SEMPRE positivo!"
    },
    {
      tag:"ENEM-STYLE · Eletrodo padrão",
      enunciado:"Para determinar os potenciais de oxidação e redução, os químicos adotaram como eletrodo padrão o eletrodo de hidrogênio, ao qual se atribui o valor zero para os potenciais a 1 atm e 25 °C:\n\n2H⁺ + 2e⁻ → H₂    E° = 0,00 V\n\nSobre o papel desse eletrodo na tabela de potenciais, é correto afirmar:",
      options:[
        "O hidrogênio nunca participa de reações de oxirredução, por isso serve de referência.",
        "Ele é a referência absoluta: potenciais acima de zero indicam maior tendência à redução que o H⁺; abaixo, menor tendência.",
        "Metais com E° negativo, como Zn e Fe, são melhores cátodos que o hidrogênio.",
        "O valor zero significa que o hidrogênio não possui energia elétrica.",
        "Somente metais alcalinos podem ser comparados ao hidrogênio."
      ],
      correct:1,
      textoOk:"Isso! A tabela é RELATIVA: o H₂/H⁺ é o marco zero. E° > 0 (Cu, Ag, Au) → reduzem mais facilmente que o H⁺ → são nobres. E° < 0 (Zn, Fe, Mg) → oxidam mais facilmente → são reativos. Por isso o ferro enferruja e o ouro não!",
      textoErr:"O eletrodo padrão de hidrogênio (E° = 0,00 V) é o PONTO DE REFERÊNCIA da tabela, não um valor 'sem energia'. Interpretação: quanto MAIOR o E° de redução, maior a tendência de sofrer redução (ser cátodo). Quanto MENOR (mais negativo), maior a tendência à oxidação (ser ânodo — bons metais de sacrifício!)."
    },
    {
      tag:"ENEM-STYLE · Espontaneidade",
      enunciado:"Dado os potenciais: Zn²⁺/Zn = −0,76 V; Fe²⁺/Fe = −0,44 V; Cu²⁺/Cu = +0,34 V; Ag⁺/Ag = +0,80 V.\n\nQual combinação de eletrodos produz a pilha de MAIOR ddp?",
      options:["Zn e Fe","Fe e Cu","Zn e Ag","Cu e Ag","Zn e Cu"],
      correct:2,
      textoOk:"Perfeito! Maior ddp = MAIOR diferença entre os potenciais. Zn (−0,76) × Ag (+0,80): ΔE = 0,80 − (−0,76) = 1,56 V — a maior combinação. Regra: escolha o MENOR e o MAIOR potencial da lista.",
      textoErr:"Calcule todas: Zn−Fe = 0,32 V; Fe−Cu = 0,78 V; Zn−Ag = 1,56 V; Cu−Ag = 0,46 V; Zn−Cu = 1,10 V (a famosa Daniell). Vence quem tem a MAIOR distância na tabela: o metal mais à esquerda (menor E°) com o mais à direita (maior E°)."
    }
  ],
  m3:[
    {
      tag:"APOSTILA · ENEM 2022",
      enunciado:"A nanotecnologia é responsável pelo aprimoramento de diversos materiais, incluindo os que são impactados com a presença de poluentes e da umidade na atmosfera, causadores de corrosão. O processo de corrosão é espontâneo e provoca a deterioração de metais como o ferro, que, em presença de oxigênio e água, sofre oxidação:\n\n4 Fe(s) + 2 H₂O(l) + 3 O₂(g) → 2 Fe₂O₃·H₂O(s)\n\nUma forma de garantir a durabilidade da estrutura metálica é depositar filmes nanocerâmicos à base de zircônia (ZrO₂) e alumina (Al₂O₃) sobre a superfície do objeto que se deseja proteger.\n\nEssa nanotecnologia aplicada na proteção contra a corrosão se baseia no(a):",
      options:[
        "proteção catódica, que utiliza um metal fortemente redutor.",
        "uso de metais de sacrifício, que se oxidam no lugar do ferro.",
        "passivação do ferro, que fica revestido pelo seu próprio óxido.",
        "efeito de barreira, que impede o contato com o agente oxidante.",
        "galvanização, que usa outros metais de menor potencial de redução."
      ],
      correct:3,
      textoOk:"Letra D! O filme nanocerâmico (ZrO₂/Al₂O₃) é uma BARREIRA FÍSICA: ele impede que O₂ e H₂O (os agentes oxidantes) encostem no ferro. Sem contato, sem corrosão. Não há troca de elétrons — é proteção física, não eletroquímica.",
      textoErr:"Atenção às pegadinhas: (A) proteção catódica e (B) metal de sacrifício exigem OUTRO metal que oxida no lugar — não é o caso; (C) passivação é quando o próprio óxido do metal protege (ex: alumínio); (E) galvanização é banho de zinco. O filme cerâmico é inerte e só isola fisicamente: EFEITO DE BARREIRA."
    },
    {
      tag:"BANCO · ENEM 2022",
      enunciado:"Em navios, conecta-se ao ferro do casco um metal com menor potencial de redução para que este oxide no lugar do ferro. Essa técnica é conhecida como:",
      options:[
        "proteção catódica por metal de sacrifício.",
        "passivação anódica.",
        "galvanização isolante.",
        "efeito de barreira nanoestruturada.",
        "redução espontânea."
      ],
      correct:0,
      textoOk:"Letra A! O metal de MENOR potencial de redução (ex: Mg ou Zn) vira o ânodo e se sacrifica oxidando no lugar do ferro — que passa a ser o cátodo, protegido. Blocos de zinco no casco de navios são a aplicação clássica. Quem marcou D confundiu proteção eletroquímica com proteção física (pintura/filme).",
      textoErr:"A chave está em 'metal com menor potencial de redução oxide no lugar do ferro': isso define METAL DE SACRIFÍCIO. Como o ferro é forçado a ser cátodo, o nome técnico completo é PROTEÇÃO CATÓDICA. Efeito de barreira (D) seria um revestimento físico sem troca eletrônica — não é o descrito."
    },
    {
      tag:"ENEM-STYLE · Escolha do sacrifício",
      enunciado:"Uma estrutura de ferro (E° Fe²⁺/Fe = −0,44 V) enterrada precisa de proteção catódica. Disponíveis: Cu (+0,34 V), Ni (−0,23 V), Mg (−2,37 V), Ag (+0,80 V) e Pb (−0,13 V).\n\nQual metal é o MAIS eficiente como metal de sacrifício?",
      options:["Cu","Ni","Mg","Ag","Pb"],
      correct:2,
      textoOk:"Magnésio! Regra: quanto MENOR o potencial de redução, MAIOR a tendência à oxidação → melhor sacrifício. Mg (−2,37 V) é o mais reativo da lista e oxida facilmente, protegendo o ferro. É o usado em tanques de postos e aquecedores.",
      textoErr:"O metal de sacrifício deve oxidar MAIS FACILMENTE que o ferro (−0,44 V), ou seja, ter E° MENOR que −0,44 V. Dos listados, só o Mg (−2,37 V) satisfaz com folga. Cu, Ag (+) oxidariam o ferro! Ni e Pb (−0,23; −0,13) têm E° MAIOR que o ferro → seriam protegidos PELO ferro, invertendo o papel."
    }
  ],
  m4:[
    {
      tag:"APOSTILA · ENEM 2021",
      enunciado:"Um produto, obtido industrialmente da eletrólise de solução aquosa de cloreto de sódio, tem sido amplamente empregado na indústria, por exemplo, na fabricação de papéis, tecidos e sabões. Normalmente, esse produto é usado na desobstrução de encanamentos e sumidouros, pois é capaz de reagir com gorduras. No entanto, a sua manipulação exige cuidados, pois é altamente corrosivo, podendo, em contato com a pele, provocar vermelhidão, irritação ou 'queimaduras' de tecidos vivos. Além disso, se o frasco do produto for abandonado aberto por um longo período de tempo, ele pode absorver CO₂, convertendo-se em um sal.\n\nEsse produto industrial é o:",
      options:["cloro molecular, Cl₂","ácido clorídrico, HCl","ácido sulfúrico, H₂SO₄","hidróxido de sódio, NaOH","carbonato de sódio, Na₂CO₃"],
      correct:3,
      textoOk:"Letra D! Na eletrólise aquosa do NaCl: cátodo libera H₂ (+OH⁻), ânodo libera Cl₂, e na solução restam Na⁺ + OH⁻ = NaOH, a soda cáustica. As pistas confirmam: desentope encanamentos (reage com gorduras — saponificação), queima a pele e absorve CO₂ virando Na₂CO₃. Quem marcou A lembrou de um produto válido, mas o Cl₂ não é o desengordurante!",
      textoErr:"Monte a eletrólise: NaCl(aq) tem Na⁺, Cl⁻, H⁺ e OH⁻ da água. Descarregam: H⁺ no cátodo (→H₂) e Cl⁻ no ânodo (→Cl₂). Sobram Na⁺ + OH⁻ = NaOH (soda cáustica). As características do enunciado batem: corrosivo, reage com gordura (sabão), absorve CO₂ → Na₂CO₃. O Cl₂ (A) é coproduto, mas é o NaOH o desentupidor."
    },
    {
      tag:"APOSTILA · Eletrólise ígnea",
      enunciado:"Na eletrólise ÍGNEA do cloreto de sódio fundido, os produtos formados são:",
      options:[
        "H₂ no cátodo e Cl₂ no ânodo.",
        "Na metálico no cátodo e Cl₂ gasoso no ânodo.",
        "Na metálico no ânodo e Cl₂ gasoso no cátodo.",
        "O₂ no ânodo e Na metálico no cátodo.",
        "H₂ no ânodo e O₂ no cátodo."
      ],
      correct:1,
      textoOk:"Correto! Sem água, só existem Na⁺ e Cl⁻. No CÁTODO (polo −): Na⁺ + e⁻ → Na(s) — redução. No ÂNODO (polo +): 2Cl⁻ → Cl₂(g) + 2e⁻ — oxidação. É o processo industrial de obtenção do sódio metálico!",
      textoErr:"Na eletrólise ÍGNEA não há água competindo — os únicos íons são Na⁺ e Cl⁻. O cátion SEMPRE migra para o cátodo (polo −), onde reduz: Na⁺ + e⁻ → Na. O ânion migra para o ânodo (polo +), onde oxida: 2Cl⁻ → Cl₂ + 2e⁻. Se você pensou em H₂ (letra A), isso só ocorre na eletrólise AQUOSA."
    },
    {
      tag:"APOSTILA · ENEM 2024",
      enunciado:"Pesquisadores da Universidade de Wisconsin-Madison, nos Estados Unidos, desenvolveram uma dessalinizadora-pilha. O invento se mostrou muito promissor para dessalinizar água do mar, empregando eletrodos com bismuto e titânio em suas composições. Para realizar a dessalinização, o dispositivo funciona por eletrólise. No descarregamento do dispositivo ocorre o processo inverso, que permite reaproveitar a energia, como em uma pilha.\n\nDurante a dessalinização da água por eletrólise ocorre a formação de:",
      options:[
        "BiOCl no ânodo.",
        "H₂(g) no cátodo.",
        "Bi no polo positivo.",
        "O₂(g) no polo negativo.",
        "Na₃Ti₂(PO₄)₃ no ânodo."
      ],
      correct:0,
      textoOk:"Letra A! Na eletrólise, o ânodo é o polo POSITIVO (atrai ânions). O eletrodo de bismuto (Bi) atrai o ânion cloreto (Cl⁻) e oxida formando BiOCl — removendo o sal da água. O gabarito oficial do ENEM 2024 confirma: BiOCl no ânodo.",
      textoErr:"Duas pegadinhas clássicas aqui: (1) na ELETRÓLISE os polos invertem em relação à pilha: ânodo = polo POSITIVO; (2) o ânodo atrai ÂNIONS — o Bi reage com o Cl⁻ da água do mar formando BiOCl (oxidação). H₂ no cátodo (B) ocorreria com eletrodo inerte, mas aqui o Bi participa ativamente no ânodo."
    }
  ],
  m5:[
    {
      tag:"BANCO · Galvanoplastia",
      enunciado:"Em processo eletrolítico, para banhar uma pulseira com prata com 54 g, foi utilizada uma intensidade de corrente de 9,65 A. Qual foi o tempo gasto nessa eletrólise?\n\n(Dados: M(Ag) = 108 g/mol e Constante de Faraday = 96.500 C/mol)",
      options:["1h 23min 40s","1h 23min 20s","1h 20min 23s","1h 23min 23s","1h 20min 20s"],
      correct:1,
      textoOk:"Letra B! Cálculo completo: 54 g de Ag ÷ 108 g/mol = 0,5 mol de Ag. Como Ag⁺ + 1e⁻ → Ag, precisamos de 0,5 mol de elétrons = 0,5 × 96.500 = 48.250 C. Então t = Q/i = 48.250 ÷ 9,65 = 5.000 s = 1h 23min 20s.",
      textoErr:"Passo a passo: (1) n(Ag) = 54/108 = 0,5 mol. (2) Ag é MONOvalente (Ag⁺): cada mol precisa de 1 mol de e⁻ → Q = 0,5 × 96.500 = 48.250 C. (3) t = Q ÷ i = 48.250 ÷ 9,65 = 5.000 s. (4) Convertendo: 5.000 s = 1h (3.600s) + 1.400s = 1h 23min (1.380s) + 20s = 1h 23min 20s."
    },
    {
      tag:"APOSTILA · Eletrólise em série",
      enunciado:"Duas células eletrolíticas contêm respectivamente soluções de nitrato de prata e sulfato de cobre II e são ligadas em série. Sabendo-se que em um eletrodo há a deposição de 21,6 g de prata, qual será a massa de cobre II que se depositará em um outro eletrodo?\n\n(Dados: M(Cu) = 63,5 g/mol e M(Ag) = 108 g/mol e Constante de Faraday = 96.500 C/mol)",
      options:["6,35 g","12,7 g","19,05 g","25,40 g","31,75 g"],
      correct:0,
      textoOk:"Letra A! Em série, a carga Q é a MESMA nas duas cubas. 21,6 g Ag ÷ 108 = 0,2 mol Ag → usaram 0,2 mol de e⁻ (Ag⁺ é monovalente) = 19.300 C. Para o Cu²⁺ (BIvalente): 2 mol e⁻ depositam 1 mol Cu (63,5 g). Com 19.300 C: 0,1 mol de Cu = 6,35 g.",
      textoErr:"O segredo é Q₁ = Q₂! (1) 21,6 g Ag = 0,2 mol → como Ag⁺ + 1e⁻ → Ag, passaram 0,2 mol de elétrons (19.300 C). (2) Cu²⁺ + 2e⁻ → Cu: os mesmos 0,2 mol de e⁻ depositam só 0,1 mol de Cu. (3) 0,1 × 63,5 = 6,35 g. Quem marcou B (12,7 g) fez proporção 1:1, esquecendo que o cobre é bivalente e a prata monovalente!"
    },
    {
      tag:"APOSTILA · ENEM 2024 (Boss)",
      enunciado:"O ácido sulfúrico é uma das principais substâncias produzidas industrialmente no mundo. O esquema apresenta, de forma simplificada, as etapas de sua produção:\n\nEtapa 1: Queima do enxofre (S) para produção de SO₂.\nEtapa 2: Conversão de SO₂ em SO₃ (na presença de V₂O₅, como catalisador).\nEtapa 3: Absorção do SO₃ (em H₂SO₄), para formar H₂S₂O₇.\nEtapa 4: Diluição do H₂S₂O₇ (com água para produzir H₂SO₄).\n\nEm qual etapa ocorre a conversão química do enxofre (S) para o seu maior estado de oxidação?",
      options:["1","2","3","4","5"],
      correct:1,
      textoOk:"Letra B (etapa 2)! Calcule o NOX: S⁰ → SO₂ (S = +4) → SO₃ (S = +6) → H₂S₂O₇ e H₂SO₄ (S = +6). O MAIOR estado de oxidação do enxofre é +6, alcançado pela primeira vez na etapa 2, quando SO₂ vira SO₃. Nas etapas 3 e 4 o NOX já está em +6 e não muda.",
      textoErr:"Calcule o NOX do enxofre em cada substância: S = 0; SO₂: x + 2(−2) = 0 → x = +4; SO₃: x + 3(−2) = 0 → x = +6; H₂S₂O₇ e H₂SO₄: S = +6 (não muda mais). O enxofre atinge seu MAIOR NOX (+6) na conversão SO₂ → SO₃, ou seja, na ETAPA 2. Alternativa correta: B."
    }
  ]
};

// ================= HELPERS =================
function $(s){return document.querySelector(s)}
function $$(s){return document.querySelectorAll(s)}
function show(id){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $('#'+id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function toast(msg,type='info'){
  const c=$('#toastContainer'); const t=document.createElement('div');
  t.className='toast '+(type==='error'?'error':(type==='gold'?'gold':''));
  t.textContent=msg; c.appendChild(t);
  setTimeout(()=>{t.style.opacity=0;setTimeout(()=>t.remove(),300)},3200);
}
function confetti(){
  const colors=['#38bdf8','#facc15','#a855f7','#10b981','#fde047'];
  for(let i=0;i<80;i++){
    const c=document.createElement('div'); c.className='confetti';
    c.style.left=Math.random()*100+'vw';
    c.style.background=colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDelay=Math.random()*.5+'s';
    c.style.animationDuration=(2.4+Math.random()*1.4)+'s';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}
function updateHud(){
  $('#hudXp').textContent=state.xp;
  $('#hudLives').textContent='❤️'.repeat(state.lives)+'🖤'.repeat(3-state.lives);
  $('#progressFill').style.width=(state.missionsDone.length/missions.length*100)+'%';
  if(state.mentor){
    const m=mentors.find(x=>x.id===state.mentor);
    $('#hudAvatar').src=m.img; $('#hudAvatar').style.display='block';
    $('#hudName').textContent=state.name||'Estudante'; $('#hudName').style.display='inline-flex';
  }
}

// ================= WELCOME / MENTORS =================
function renderMentors(){
  $('#mentorGrid').innerHTML=mentors.map(m=>`
    <div class="mentor-card" data-id="${m.id}">
      <img src="${m.img}" alt="${m.name}">
      <h3>${m.name}</h3>
      <div class="role">${m.role}</div>
      <div class="bio">${m.bio}</div>
    </div>`).join('');
  $$('#mentorGrid .mentor-card').forEach(el=>{
    el.addEventListener('click',()=>{
      $$('#mentorGrid .mentor-card').forEach(x=>x.classList.remove('selected'));
      el.classList.add('selected');
      state.mentor=el.dataset.id;
      $('#btnStartTrail').disabled=false;
    });
  });
}
function startJourney(){
  const name=$('#inputName').value.trim();
  if(!name){toast('Digite seu nome para começar!','error');return}
  if(!state.mentor){toast('Escolha uma mentora primeiro!','error');return}
  state.name=name; updateHud();
  toast('⚡ Bem-vinda(o), '+name+'!','gold');
  renderTrail(); show('screenTrail');
}

// ================= TRAIL =================
function renderTrail(){
  $('#trailGrid').innerHTML=missions.map((m,i)=>{
    const done=state.missionsDone.includes(m.id);
    const locked=i>0 && !state.missionsDone.includes(missions[i-1].id);
    const badge=badges[i];
    return `
    <div class="mission-card ${done?'completed':''} ${locked?'locked':''}">
      <div class="status">${done?'✅':(locked?'🔒':'🚀')}</div>
      <img src="${badge.img}" class="badge-img" alt="${badge.name}">
      <h3>${m.title}</h3>
      <div class="region">${m.region}</div>
      <div class="desc">${m.intro.slice(0,110)}...</div>
      <div class="meta"><span>⚡ ${questions[m.id].length} desafios + Fato ou Fake</span><span>+${questions[m.id].length*30} XP</span></div>
      <button class="btn ${done?'btn-ghost':'btn-primary'}" style="width:100%;justify-content:center" ${locked?'disabled':''} onclick="startMission('${m.id}')">
        ${done?'Revisitar':(locked?'Bloqueada':'Iniciar')}
      </button>
    </div>`;
  }).join('');
  $('#badgesGallery').innerHTML=badges.map(b=>{
    const earned=state.badges.includes(b.id);
    return `<div class="badge-item ${earned?'earned':''}" title="${b.desc}">
      <img src="${b.img}" alt="${b.name}"><div class="name">${b.name}</div></div>`;
  }).join('');
}

// ================= MISSION FLOW =================
window.startMission=function(mid){
  state.currentMission=mid; state.currentQ=0;
  renderFatoFake(mid);
};
function renderFatoFake(mid){
  const m=missions.find(x=>x.id===mid);
  const idx=missions.findIndex(x=>x.id===mid);
  const badge=badges[idx];
  const mentor=mentors.find(x=>x.id===state.mentor);
  $('#missionContent').innerHTML=`
    <div class="mission-header">
      <img src="${badge.img}" alt="badge">
      <div style="flex:1"><h2>${m.title}</h2><div class="subtitle">${m.region}</div></div>
      <div class="q-indicator">🔥 Aquecimento</div>
    </div>
    <div class="mentor-box">
      <img src="${mentor.img}" alt="${mentor.name}">
      <p><strong>${mentor.name.split(',')[0]} diz:</strong> Antes de estudar, vamos testar sua intuição! Responda: isso é <strong>FATO</strong> ou <strong>FAKE</strong>?</p>
    </div>
    <div class="ff-card">
      <div class="ff-tag">⚡ FATO OU FAKE</div>
      <div class="ff-statement">"${m.ff.statement}"</div>
      <div class="ff-buttons">
        <button class="ff-btn fato" onclick="answerFF(true)">✅ FATO</button>
        <button class="ff-btn fake" onclick="answerFF(false)">❌ FAKE</button>
      </div>
      <div id="ffResult"></div>
    </div>
    <div class="nav-footer">
      <button class="btn btn-ghost" onclick="show('screenTrail')">← Voltar à trilha</button>
      <button class="btn btn-primary" id="btnFFNext" style="display:none" onclick="renderMissionStudy()">Ir para o estudo →</button>
    </div>`;
  show('screenMission');
}
window.answerFF=function(saidFato){
  const m=missions.find(x=>x.id===state.currentMission);
  const correct = saidFato === m.ff.isFato;
  if(!state.ffDone[state.currentMission]){
    state.ffDone[state.currentMission]=true;
    if(correct){state.xp+=10;toast('✔ +10 XP de aquecimento!','gold');confetti()}
    else{toast('Opa! Veja a explicação abaixo.','error')}
    updateHud();
  }
  $('#ffResult').innerHTML=`
    <div class="ff-result ${correct?'ok':'no'}">
      <strong>${correct?'🎉 Mandou bem!':'💡 Aprendizado:'}</strong><br>${m.ff.explicacao}
    </div>`;
  $$('.ff-btn').forEach(b=>b.disabled=true);
  $('#btnFFNext').style.display='inline-flex';
};

window.renderMissionStudy=function(){
  const m=missions.find(x=>x.id===state.currentMission);
  const idx=missions.findIndex(x=>x.id===state.currentMission);
  const badge=badges[idx];
  const mentor=mentors.find(x=>x.id===state.mentor);
  const totalQ=questions[m.id].length;
  $('#missionContent').innerHTML=`
    <div class="mission-header">
      <img src="${badge.img}" alt="badge">
      <div style="flex:1"><h2>${m.title}</h2><div class="subtitle">${m.region} · ${totalQ} desafios</div></div>
      <div class="q-indicator">📚 Estudo</div>
    </div>
    <div class="mentor-box">
      <img src="${mentor.img}" alt="${mentor.name}">
      <p><strong>${mentor.name.split(',')[0]} diz:</strong> ${mentor.quotes[idx % mentor.quotes.length]}</p>
    </div>
    <div class="content-card"><h3>🎯 Contexto do Desafio</h3><p>${m.intro}</p></div>
    ${m.theory.map(t=>`
      <div class="content-card">
        <h3>📖 ${t.h}</h3><p>${t.p}</p>
        ${t.formula?`<div class="formula">${t.formula}</div>`:''}
      </div>`).join('')}
    ${m.id==='m2'?renderDDPSim():''}
    ${m.id==='m5'?renderFaradaySim():''}
    ${m.id==='m4'?renderPilhaVsEletrolise():''}
    <div class="nav-footer">
      <button class="btn btn-ghost" onclick="show('screenTrail')">← Voltar à trilha</button>
      <button class="btn btn-primary" onclick="startQuestions()">Começar desafios →</button>
    </div>`;
};

// ======== SIMULADOR 1: Calculadora de ddp ========
function renderDDPSim(){
  const opts=potentials.map(p=>`<option value="${p.red}">${p.name} (${p.red>0?'+':''}${p.red} V)</option>`).join('');
  return `
  <div class="simulator">
    <h4>🔋 Simulador: Monte sua pilha</h4>
    <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:.9rem">Escolha os dois metais e veja a ddp, o ânodo e o cátodo:</p>
    <div class="sim-grid">
      <div><label>Metal A</label><select id="simMetalA" onchange="calcDDP()">${opts}</select></div>
      <div><label>Metal B</label><select id="simMetalB" onchange="calcDDP()">${opts}</select></div>
    </div>
    <div class="sim-cell">
      <div class="sim-beaker"><div class="sim-electrode"></div><div class="lbl" id="beakerA">—</div></div>
      <div class="sim-wire">⟶ e⁻</div>
      <div class="sim-beaker"><div class="sim-electrode"></div><div class="lbl" id="beakerB">—</div></div>
    </div>
    <div class="sim-result" id="ddpResult">Selecione dois metais diferentes para montar a pilha...</div>
  </div>`;
}
window.calcDDP=function(){
  const a=parseFloat($('#simMetalA').value), b=parseFloat($('#simMetalB').value);
  const ma=potentials.find(p=>p.red===a), mb=potentials.find(p=>p.red===b);
  if(a===b){$('#ddpResult').innerHTML='<strong>⚠️ Escolha dois metais diferentes!</strong>';$('#beakerA').textContent=ma.name;$('#beakerB').textContent=mb.name;return}
  const ddp=Math.abs(a-b);
  const anodo = a<b ? ma : mb;
  const catodo = a<b ? mb : ma;
  $('#beakerA').textContent=ma.name+(ma===anodo?' (−)':' (+)');
  $('#beakerB').textContent=mb.name+(mb===anodo?' (−)':' (+)');
  $('#ddpResult').innerHTML=`<span class="big">ΔE = ${ddp.toFixed(2)} V</span><br>
    <strong>Ânodo (−):</strong> ${anodo.name} (oxida) · <strong>Cátodo (+):</strong> ${catodo.name} (reduz)<br>
    <span style="color:var(--text-muted);font-size:.85rem">ΔE = E_maior − E_menor = (${catodo.red>0?'+':''}${catodo.red}) − (${anodo.red>0?'+':''}${anodo.red})</span>`;
};

// ======== SIMULADOR 2: Leis de Faraday ========
function renderFaradaySim(){
  return `
  <div class="simulator">
    <h4>⚗️ Simulador: Leis de Faraday</h4>
    <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:.9rem">Calcule o tempo de eletrólise para depositar uma massa de metal:</p>
    <div class="sim-grid">
      <div><label>Massa desejada (g)</label><input type="number" id="simMass" value="54" min="0.1" step="0.1" oninput="calcFaraday()"></div>
      <div><label>Massa molar (g/mol)</label><input type="number" id="simMolar" value="108" min="1" step="0.1" oninput="calcFaraday()"></div>
      <div><label>Carga do íon (nº de e⁻)</label><input type="number" id="simCharge" value="1" min="1" max="4" oninput="calcFaraday()"></div>
      <div><label>Corrente i (A)</label><input type="number" id="simCurrent" value="9.65" min="0.01" step="0.01" oninput="calcFaraday()"></div>
    </div>
    <div class="sim-result" id="faradayResult"></div>
  </div>`;
}
window.calcFaraday=function(){
  const m=parseFloat($('#simMass').value)||0, M=parseFloat($('#simMolar').value)||1,
        z=parseInt($('#simCharge').value)||1, i=parseFloat($('#simCurrent').value)||1;
  if(m<=0||i<=0){$('#faradayResult').innerHTML='<strong>⚠️ Informe massa e corrente positivas.</strong>';return}
  const mols=m/M, Q=mols*z*96500, t=Q/i;
  const h=Math.floor(t/3600), min=Math.floor((t%3600)/60), s=Math.round(t%60);
  $('#faradayResult').innerHTML=`
    n = ${m}/${M} = <strong>${mols.toFixed(3)} mol</strong> · Q = ${mols.toFixed(3)} × ${z} × 96.500 = <strong>${Math.round(Q).toLocaleString('pt-BR')} C</strong><br>
    t = Q ÷ i = ${Math.round(Q).toLocaleString('pt-BR')} ÷ ${i} = <span class="big">${Math.round(t).toLocaleString('pt-BR')} s ≈ ${h}h ${min}min ${s}s</span>`;
};

// ======== QUADRO COMPARATIVO Pilha × Eletrólise ========
function renderPilhaVsEletrolise(){
  return `
  <div class="content-card">
    <h3>⚖️ Quadro comparativo: Pilha × Eletrólise</h3>
    <table class="cmp-table">
      <tr><th>Característica</th><th>Pilha (Galvânica)</th><th>Eletrólise (Eletrolítica)</th></tr>
      <tr><td>Conversão de energia</td><td>Química → Elétrica</td><td>Elétrica → Química</td></tr>
      <tr><td>Espontaneidade</td><td>Espontânea (ΔE > 0)</td><td>Não espontânea (ΔE < 0)</td></tr>
      <tr><td>Polo positivo (+)</td><td>Cátodo (redução)</td><td>Ânodo (oxidação)</td></tr>
      <tr><td>Polo negativo (−)</td><td>Ânodo (oxidação)</td><td>Cátodo (redução)</td></tr>
      <tr><td>Exemplo</td><td>Bateria de celular</td><td>Banho de prata, soda cáustica</td></tr>
    </table>
  </div>`;
}

// ================= QUESTIONS =================
window.startQuestions=function(){state.currentQ=0;renderQuestion()};
function renderQuestion(){
  const mid=state.currentMission, qs=questions[mid];
  if(state.currentQ>=qs.length){finishMission();return}
  const q=qs[state.currentQ];
  const m=missions.find(x=>x.id===mid);
  const badge=badges[missions.findIndex(x=>x.id===mid)];
  const mentor=mentors.find(x=>x.id===state.mentor);
  $('#missionContent').innerHTML=`
    <div class="mission-header">
      <img src="${badge.img}" alt="badge">
      <div style="flex:1"><h2>${m.title}</h2><div class="subtitle">${m.region}</div></div>
      <div class="q-indicator">Questão ${state.currentQ+1}/${qs.length}</div>
    </div>
    <div class="mentor-box">
      <img src="${mentor.img}" alt="${mentor.name}">
      <p><strong>Dica:</strong> ${mentor.quotes[state.currentQ % mentor.quotes.length]}</p>
    </div>
    <div class="question-card">
      <span class="q-tag">${q.tag}</span>
      <div class="q-enunciado">${q.enunciado}</div>
      <div class="options" id="opts">
        ${q.options.map((op,i)=>`
          <div class="option" data-idx="${i}" onclick="answer(${i})">
            <div class="letter">${String.fromCharCode(65+i)}</div><div>${op}</div>
          </div>`).join('')}
      </div>
      <div id="feedbackBox"></div>
      <div class="nav-footer" id="navBox" style="display:none">
        <button class="btn btn-ghost" onclick="show('screenTrail')">↩ Trilha</button>
        <button class="btn btn-primary" onclick="nextQuestion()">Próxima →</button>
      </div>
    </div>`;
}
window.answer=function(idx){
  const q=questions[state.currentMission][state.currentQ];
  const opts=$$('#opts .option');
  if(opts[0].classList.contains('disabled'))return;
  opts.forEach(o=>o.classList.add('disabled'));
  const correct=idx===q.correct;
  opts[q.correct].classList.add('correct');
  if(!correct)opts[idx].classList.add('wrong');
  if(correct){state.xp+=30;confetti();toast('✔ +30 XP!','gold')}
  else{state.lives=Math.max(0,state.lives-1);toast('✘ Vida perdida','error')}
  updateHud();
  $('#feedbackBox').innerHTML=`
    <div class="feedback ${correct?'':'wrong'}">
      <h4>${correct?'✔ Excelente!':'✘ Não foi dessa vez'}</h4>
      <p>${correct?q.textoOk:q.textoErr}</p>
      <div class="resolucao"><strong>Resposta correta:</strong> ${String.fromCharCode(65+q.correct)}) ${q.options[q.correct]}</div>
    </div>`;
  $('#navBox').style.display='flex';
  if(state.lives<=0){
    setTimeout(()=>{
      toast('💔 Suas vidas acabaram. Recomeçando missão...','error');
      state.lives=3;updateHud();
      const mid=state.currentMission;
      setTimeout(()=>startMission(mid),1500);
    },1200);
  }
};
window.nextQuestion=function(){state.currentQ++;renderQuestion()};
function finishMission(){
  const mid=state.currentMission;
  if(!state.missionsDone.includes(mid)){
    state.missionsDone.push(mid);state.badges.push(mid);
    toast('🏅 Badge: '+badges[missions.findIndex(x=>x.id===mid)].name,'gold');
  }
  updateHud();
  if(state.missionsDone.length===missions.length){setTimeout(showCertificate,800)}
  else{renderTrail();show('screenTrail');confetti()}
}
function showCertificate(){
  const rank=state.xp>=480?'S — Mestre da Eletroquímica':
             state.xp>=360?'A — Eletroquímica(o) Experiente':
             state.xp>=240?'B — Aprendiz Avançada(o)':'C — Iniciante Persistente';
  const totalQ=Object.values(questions).flat().length;
  $('#certContent').innerHTML=`
    <div class="certificate">
      <h2>🎓 Certificado de Conclusão</h2>
      <p>Concedido a</p>
      <h3 style="font-size:1.6rem;margin:.4rem 0;color:var(--accent)">${state.name}</h3>
      <p>por completar a Trilha <strong>Eletroquímica — Pré-ENEM Digital MT</strong></p>
      <div class="rank">${rank}</div>
      <div class="stats">
        <div class="stat"><div class="num">${state.xp}</div><div class="lbl">XP Total</div></div>
        <div class="stat"><div class="num">${state.missionsDone.length}/${missions.length}</div><div class="lbl">Missões</div></div>
        <div class="stat"><div class="num">${state.badges.length}</div><div class="lbl">Badges</div></div>
        <div class="stat"><div class="num">${totalQ}</div><div class="lbl">Desafios</div></div>
      </div>
      <p style="color:var(--text-muted);font-size:.9rem;margin-top:1rem">Mentora escolhida: <strong>${mentors.find(x=>x.id===state.mentor).name}</strong></p>
      <div style="margin-top:1.5rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-gold" onclick="window.print()">🖨️ Imprimir</button>
        <button class="btn btn-ghost" onclick="location.reload()">🔄 Recomeçar</button>
      </div>
    </div>`;
  show('screenCert');confetti();setTimeout(confetti,800);setTimeout(confetti,1600);
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded',()=>{
  renderMentors();updateHud();
  $('#btnStartTrail').addEventListener('click',startJourney);
  $('#btnStartHero').addEventListener('click',()=>{
    document.getElementById('mentorSection').scrollIntoView({behavior:'smooth'});
  });
});
