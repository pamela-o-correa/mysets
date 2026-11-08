const workouts = {
  A: {
    name: "Inferiores",
    day: "Segunda-feira",
    items: [
      ["Agachamento livre", "Pernas", 3, 12, 90],
      ["Leg press", "Pernas", 3, 12, 90],
      ["Cadeira extensora", "Pernas", 3, 12, 60],
      ["Mesa flexora", "Pernas", 3, 12, 60],
      ["Elevação pélvica", "Glúteos", 3, 12, 90],
    ],
  },
  B: {
    name: "Superiores",
    day: "Terça-feira",
    items: [
      ["Puxada frontal", "Costas", 3, 12, 60],
      ["Remada baixa", "Costas", 3, 12, 60],
      ["Supino máquina", "Peito", 3, 12, 60],
      ["Rosca direta", "Braços", 3, 12, 60],
    ],
  },
  C: {
    name: "Corpo inteiro",
    day: "Quinta-feira",
    items: [
      ["Agachamento goblet", "Pernas", 3, 12, 60],
      ["Remada baixa", "Costas", 3, 12, 60],
      ["Supino máquina", "Peito", 3, 12, 60],
      ["Elevação pélvica", "Glúteos", 3, 12, 60],
      ["Prancha", "Abdômen", 3, 30, 45],
    ],
  },
};
const exerciseInfo = [
  // PERNAS
  {
    name: "Agachamento livre",
    group: "Pernas",
    equipment: "Barra ou peso corporal",
    how: "Afaste os pés aproximadamente na largura dos ombros. Flexione quadris e joelhos de forma controlada, mantendo os pés apoiados. Retorne à posição inicial.",
    care: "Use uma amplitude confortável e mantenha o movimento controlado.",
    symbol: "✣",
  },
  {
    name: "Agachamento goblet",
    group: "Pernas",
    equipment: "Halter ou kettlebell",
    how: "Segure o peso próximo ao peito. Agache levando o quadril para baixo e retorne mantendo o tronco estável.",
    care: "Escolha um peso que permita manter a postura.",
    symbol: "✣",
  },
  {
    name: "Agachamento sumô",
    group: "Pernas",
    equipment: "Halter, kettlebell ou barra",
    how: "Afaste os pés além da largura dos ombros com as pontas levemente voltadas para fora. Desça mantendo os joelhos alinhados à direção dos pés e retorne.",
    care: "Mantenha a coluna neutra e evite que os joelhos caiam para dentro.",
    symbol: "✣",
  },
  {
    name: "Agachamento no Smith",
    group: "Pernas",
    equipment: "Barra guiada (Smith)",
    how: "Posicione a barra sobre o trapézio, destrave o equipamento e desça flexionando quadris e joelhos de forma controlada antes de subir.",
    care: "Ajuste as travas de segurança e posicione os pés de modo confortável para os joelhos.",
    symbol: "▥",
  },
  {
    name: "Leg press",
    group: "Pernas",
    equipment: "Máquina leg press",
    how: "Ajuste o banco e posicione os pés na plataforma. Desça o peso lentamente, sem tirar o quadril do encosto, e empurre sem travar os joelhos.",
    care: "Evite aproximar demais os joelhos do tronco ou bloquear as articulações.",
    symbol: "▥",
  },
  {
    name: "Afundo (Passada)",
    group: "Pernas",
    equipment: "Halteres ou peso corporal",
    how: "Dê um passo à frente e flexione ambos os joelhos até formar um ângulo confortável. Empurre o chão com o pé da frente para retornar.",
    care: "Mantenha o tronco firme e o joelho da frente alinhado com a ponta do pé.",
    symbol: "✣",
  },
  {
    name: "Stiff",
    group: "Pernas",
    equipment: "Barra ou halteres",
    how: "Com os joelhos levemente semiflexionados, projete o quadril para trás inclinando o tronco com a coluna reta até sentir alongar a parte posterior da coxa. Retorne contraindo glúteos e posteriores.",
    care: "Não arredonde a lombar e mantenha o peso sempre próximo às pernas.",
    symbol: "◌",
  },
  {
    name: "Cadeira extensora",
    group: "Pernas",
    equipment: "Cadeira extensora",
    how: "Ajuste o encosto e o apoio próximo ao tornozelo. Estenda os joelhos de forma controlada e retorne devagar.",
    care: "Evite impulso e cargas que prejudiquem o controle.",
    symbol: "◉",
  },
  {
    name: "Mesa flexora",
    group: "Pernas",
    equipment: "Mesa flexora",
    how: "Ajuste o equipamento para que o apoio fique próximo aos tornozelos. Flexione os joelhos e retorne lentamente.",
    care: "Mantenha o quadril apoiado e evite movimentos bruscos.",
    symbol: "◌",
  },
  {
    name: "Cadeira flexora",
    group: "Pernas",
    equipment: "Cadeira flexora",
    how: "Sente-se, ajuste o rolo acima dos tornozelos e a trava sobre as coxas. Flexione os joelhos puxando o apoio para baixo e retorne devagar.",
    care: "Mantenha as costas bem apoiadas no encosto durante toda a série.",
    symbol: "◌",
  },
  {
    name: "Cadeira adutora",
    group: "Pernas",
    equipment: "Máquina adutora",
    how: "Sente-se na máquina com os apoios na parte interna das coxas. Feche as pernas de maneira controlada e retorne sem soltar o peso de vez.",
    care: "Respeite sua amplitude articular e evite movimentos rápidos.",
    symbol: "◉",
  },
  {
    name: "Panturrilha em pé",
    group: "Pernas",
    equipment: "Máquina, degrau ou peso corporal",
    how: "Apoie a ponta dos pés na plataforma e eleve os calcanhares o máximo possível. Segure um instante no topo e desça alongando bem.",
    care: "Evite dar impulsos curtos; priorize a amplitude completa.",
    symbol: "↟",
  },
  {
    name: "Panturrilha sentado",
    group: "Pernas",
    equipment: "Máquina de panturrilha sentado",
    how: "Sente-se, apoie as coxas sob o suporte e a ponta dos pés na base. Eleve os calcanhares contraindo as panturrilhas e desça lentamente.",
    care: "Controle a descida e não deixe o peso bater.",
    symbol: "↟",
  },

  // GLÚTEOS
  {
    name: "Elevação pélvica",
    group: "Glúteos",
    equipment: "Banco e barra ou peso corporal",
    how: "Apoie a parte superior das costas no banco, mantenha os pés firmes e eleve o quadril. Faça uma pausa confortável no alto e desça controlando.",
    care: "Evite hiperestender a região lombar.",
    symbol: "⌁",
  },
  {
    name: "Agachamento búlgaro",
    group: "Glúteos",
    equipment: "Banco e halteres ou peso corporal",
    how: "Apoie o peito do pé de trás sobre um banco e mantenha o pé da frente firme no chão. Flexione o joelho da frente descendo o quadril e suba empurrando com o calcanhar.",
    care: "Incline levemente o tronco à frente para maior foco no glúteo e mantenha o equilíbrio.",
    symbol: "⌁",
  },
  {
    name: "Cadeira abdutora",
    group: "Glúteos",
    equipment: "Máquina abdutora",
    how: "Sente-se com os apoios na lateral externa das coxas. Afaste as pernas contraindo os glúteos e retorne controlando o peso.",
    care: "Mantenha a postura estável e evite usar impulso.",
    symbol: "⌁",
  },
  {
    name: "Glúteo na polia (Coice)",
    group: "Glúteos",
    equipment: "Polia baixa com tornozeleira",
    how: "Prenda a tornozeleira na polia baixa, apoie as mãos na estrutura e incline levemente o tronco. Estenda o quadril levando a perna para trás e volte devagar.",
    care: "Evite arquear a coluna lombar; o movimento deve acontecer apenas no quadril.",
    symbol: "⌁",
  },
  {
    name: "Abdução de quadril na polia",
    group: "Glúteos",
    equipment: "Polia baixa com tornozeleira",
    how: "De lado para a máquina, prenda a tornozeleira no pé mais distante. Eleve a perna lateralmente de forma controlada e retorne.",
    care: "Mantenha o tronco ereto sem inclinar excessivamente para o lado.",
    symbol: "⌁",
  },
  {
    name: "Glúteo 4 apoios",
    group: "Glúteos",
    equipment: "Colchonete e caneleira",
    how: "Apoie mãos e joelhos no colchonete. Eleve uma das pernas mantendo o joelho flexionado ou estendido, contraindo o glúteo no topo, e desça devagar.",
    care: "Mantenha o abdômen firme para não girar o quadril nem forçar a lombar.",
    symbol: "⌁",
  },

  // COSTAS
  {
    name: "Puxada frontal",
    group: "Costas",
    equipment: "Polia alta",
    how: "Segure a barra com pegada confortável. Puxe em direção à parte superior do peito, conduzindo os cotovelos para baixo, e retorne devagar.",
    care: "Evite balançar o tronco ou puxar a barra atrás da nuca.",
    symbol: "⇣",
  },
  {
    name: "Puxada triângulo",
    group: "Costas",
    equipment: "Polia alta com puxador triângulo",
    how: "Segure o triângulo, incline muito levemente o tronco para trás e puxe o acessório em direção à parte superior do peito, aproximando as escápulas.",
    care: "Alongue bem os braços na subida sem perder a estabilidade dos ombros.",
    symbol: "⇣",
  },
  {
    name: "Remada baixa",
    group: "Costas",
    equipment: "Polia baixa",
    how: "Sente-se com a coluna confortável e segure o puxador. Traga-o em direção ao abdômen, aproximando as escápulas sem encolher os ombros.",
    care: "Evite arredondar excessivamente as costas ou usar impulso.",
    symbol: "↔",
  },
  {
    name: "Remada curvada",
    group: "Costas",
    equipment: "Barra ou halteres",
    how: "Incline o tronco à frente mantendo a coluna neutra e os joelhos semiflexionados. Puxe o peso em direção ao abdômen e desça controlando.",
    care: "Não deixe as costas curvarem e mantenha o pescoço alinhado à coluna.",
    symbol: "↔",
  },
  {
    name: "Remada unilateral (Serrote)",
    group: "Costas",
    equipment: "Halter e banco",
    how: "Apoie uma mão e um joelho no banco mantendo as costas retas. Com a outra mão, puxe o halter em direção à lateral do quadril e retorne devagar.",
    care: "Evite girar o tronco ao subir o peso.",
    symbol: "↔",
  },
  {
    name: "Remada articulada (Máquina)",
    group: "Costas",
    equipment: "Máquina de remada",
    how: "Ajuste o banco e o apoio do peito. Segure as manoplas e puxe levando os cotovelos para trás, contraindo o meio das costas.",
    care: "Mantenha o peito apoiado na almofada durante todo o movimento.",
    symbol: "↔",
  },
  {
    name: "Pulldown na polia",
    group: "Costas",
    equipment: "Polia alta com barra reta ou corda",
    how: "Em pé, incline levemente o tronco e mantenha os cotovelos quase estendidos. Empurre a barra de cima até as coxas usando a musculatura das costas.",
    care: "Não transforme o exercício em tríceps; mantenha o ângulo dos cotovelos fixo.",
    symbol: "⇣",
  },
  {
    name: "Extensão lombar (Banco romano)",
    group: "Costas",
    equipment: "Banco romano ou colchonete",
    how: "Posicione o quadril no apoio do banco, cruze os braços no peito e desça o tronco de forma controlada. Suba até alinhar o corpo.",
    care: "Suba apenas até a linha neutra da coluna, evitando hiperextensão no topo.",
    symbol: "↔",
  },

  // PEITO
  {
    name: "Supino máquina",
    group: "Peito",
    equipment: "Máquina de supino",
    how: "Ajuste o assento para que as alças fiquem na altura do peito. Empurre à frente e retorne lentamente, mantendo os ombros confortáveis.",
    care: "Não force a amplitude nem trave os cotovelos.",
    symbol: "▱",
  },
  {
    name: "Supino reto",
    group: "Peito",
    equipment: "Barra ou halteres no banco reto",
    how: "Deite-se no banco com os pés firmes no chão. Desça o peso de maneira controlada até a linha do peito e empurre para cima.",
    care: "Mantenha as escápulas firmes no banco e os cotovelos levemente abaixo da linha dos ombros.",
    symbol: "▱",
  },
  {
    name: "Supino inclinado com halteres",
    group: "Peito",
    equipment: "Halteres e banco inclinado (30° a 45°)",
    how: "Com o banco inclinado, empurre os halteres para cima a partir da linha superior do peitoral e desça controlando o movimento.",
    care: "Evite abrir os cotovelos a 90°; mantenha uma angulação natural e segura para os ombros.",
    symbol: "▱",
  },
  {
    name: "Crucifixo máquina (Voador)",
    group: "Peito",
    equipment: "Máquina peck deck",
    how: "Ajuste o banco para que as manoplas fiquem na linha do peito. Aproxime os braços à frente contraindo o peitoral e retorne devagar.",
    care: "Não leve os braços excessivamente para trás da linha do tronco.",
    symbol: "▱",
  },
  {
    name: "Crucifixo com halteres",
    group: "Peito",
    equipment: "Halteres e banco reto",
    how: "Deitado no banco, segure os halteres acima do peito com os cotovelos levemente flexionados. Abra os braços lateralmente e retorne aproximando-os.",
    care: "Desça apenas até sentir um alongamento confortável no peitoral.",
    symbol: "▱",
  },
  {
    name: "Crossover na polia",
    group: "Peito",
    equipment: "Polias duplas (Cross over)",
    how: "Em pé no centro do aparelho, segure os puxadores e dê um passo à frente. Feche os braços à frente do corpo em arco controlado.",
    care: "Mantenha o abdômen contraído para estabilizar o tronco.",
    symbol: "▱",
  },
  {
    name: "Flexão de braços",
    group: "Peito",
    equipment: "Peso corporal ou colchonete",
    how: "Apoie as mãos no chão um pouco além da largura dos ombros (pode apoiar os joelhos se preferir). Desça o peito em direção ao chão e empurre de volta.",
    care: "Mantenha o corpo alinhado sem deixar o quadril cair.",
    symbol: "▱",
  },

  // OMBROS
  {
    name: "Desenvolvimento com halteres",
    group: "Ombros",
    equipment: "Halteres e banco com encosto",
    how: "Sentado com as costas apoiadas, posicione os halteres na altura das orelhas e empurre-os para cima até quase estender os braços. Retorne devagar.",
    care: "Evite arquear as costas ao empurrar o peso.",
    symbol: "△",
  },
  {
    name: "Elevação lateral",
    group: "Ombros",
    equipment: "Halteres ou polia baixa",
    how: "Em pé, com os cotovelos levemente flexionados, eleve os braços lateralmente até a altura dos ombros e desça de forma controlada.",
    care: "Não use cargas excessivas que forcem você a dar impulso com o corpo.",
    symbol: "△",
  },
  {
    name: "Elevação frontal",
    group: "Ombros",
    equipment: "Halteres, anilha ou polia",
    how: "Segure o peso à frente das coxas e eleve os braços à frente até a linha dos ombros, descendo de forma controlada.",
    care: "Mantenha o tronco firme sem balançar para trás.",
    symbol: "△",
  },
  {
    name: "Crucifixo inverso",
    group: "Ombros",
    equipment: "Máquina peck deck ou halteres",
    how: "De frente para o encosto da máquina (ou inclinado com halteres), afaste os braços para trás focando na parte posterior dos ombros.",
    care: "Evite encolher o trapézio; mantenha os ombros baixos.",
    symbol: "△",
  },
  {
    name: "Remada alta",
    group: "Ombros",
    equipment: "Polia baixa ou barra",
    how: "Segure a barra com as mãos próximas à largura dos ombros e puxe em direção à parte alta do peito, guiando o movimento pelos cotovelos.",
    care: "Suba os cotovelos apenas até a linha dos ombros para proteger a articulação.",
    symbol: "△",
  },
  {
    name: "Encolhimento de ombros",
    group: "Ombros",
    equipment: "Halteres ou barra",
    how: "Em pé com os braços estendidos ao lado do corpo, eleve os ombros em direção às orelhas, segure um segundo no topo e desça.",
    care: "Faça o movimento reto para cima e para baixo, sem girar os ombros.",
    symbol: "△",
  },

  // BRAÇOS
  {
    name: "Rosca direta",
    group: "Braços",
    equipment: "Barra ou halteres",
    how: "Com os cotovelos próximos ao tronco, flexione os braços para elevar o peso e retorne de forma controlada.",
    care: "Evite balançar o corpo para ajudar no movimento.",
    symbol: "↟",
  },
  {
    name: "Rosca alternada com halteres",
    group: "Braços",
    equipment: "Halteres",
    how: "Em pé ou sentado, flexione um braço de cada vez girando a palma da mão para cima durante a subida. Desça controlando.",
    care: "Mantenha o cotovelo fixo ao lado das costelas.",
    symbol: "↟",
  },
  {
    name: "Rosca martelo",
    group: "Braços",
    equipment: "Halteres ou corda na polia",
    how: "Com as palmas das mãos voltadas uma para a outra (pegada neutra), flexione os cotovelos elevando o peso e retorne devagar.",
    care: "Excelente para bíceps e antebraço; evite jogar os ombros para frente.",
    symbol: "↟",
  },
  {
    name: "Rosca Scott",
    group: "Braços",
    equipment: "Banco Scott ou máquina",
    how: "Apoie a parte de trás dos braços na almofada do banco Scott. Desça o peso de forma controlada e suba contraindo os bíceps.",
    care: "Não estenda os cotovelos de forma brusca no final da descida.",
    symbol: "↟",
  },
  {
    name: "Tríceps pulley (Corda ou barra)",
    group: "Braços",
    equipment: "Polia alta com corda ou barra",
    how: "Com os cotovelos colados ao lado do corpo, empurre o puxador para baixo até estender os braços e retorne controlando até 90°.",
    care: "Mantenha os cotovelos fixos; apenas os antebraços devem se mover.",
    symbol: "⇣",
  },
  {
    name: "Tríceps testa",
    group: "Braços",
    equipment: "Barra W, halteres ou polia",
    how: "Deitado no banco, mantenha os braços apontados para o teto e flexione apenas os cotovelos, descendo o peso em direção à testa antes de estender.",
    care: "Mantenha os cotovelos fechados e controle bem a descida.",
    symbol: "↟",
  },
  {
    name: "Tríceps francês",
    group: "Braços",
    equipment: "Halter ou corda na polia",
    how: "Sentado ou em pé, segure o peso acima da cabeça e flexione os cotovelos levando o peso atrás da nuca. Estenda os braços para o alto.",
    care: "Mantenha o abdômen contraído para não arquear a lombar.",
    symbol: "↟",
  },
  {
    name: "Tríceps banco (Mergulho)",
    group: "Braços",
    equipment: "Banco fixo",
    how: "Apoie as mãos na borda do banco e os pés à frente. Flexione os cotovelos descendo o quadril próximo ao banco e empurre de volta.",
    care: "Desça apenas até uma amplitude confortável para seus ombros.",
    symbol: "↟",
  },

  // ABDÔMEN
  {
    name: "Prancha",
    group: "Abdômen",
    equipment: "Colchonete",
    how: "Apoie antebraços e pontas dos pés no chão. Mantenha o corpo alinhado e respire normalmente durante o tempo proposto.",
    care: "Interrompa se sentir dor e evite deixar o quadril cair.",
    symbol: "━",
  },
  {
    name: "Prancha lateral",
    group: "Abdômen",
    equipment: "Colchonete",
    how: "De lado no colchonete, apoie um antebraço no chão e eleve o quadril mantendo o corpo em linha reta. Troque de lado após o tempo estipulado.",
    care: "Mantenha o cotovelo exatamente abaixo da linha do ombro.",
    symbol: "━",
  },
  {
    name: "Abdominal supra (Tradicional)",
    group: "Abdômen",
    equipment: "Colchonete",
    how: "Deite-se de barriga para cima com os joelhos flexionados. Eleve suavemente a parte superior das costas do chão contraindo o abdômen e desça devagar.",
    care: "Não puxe a cabeça com as mãos; mantenha o queixo afastado do peito.",
    symbol: "━",
  },
  {
    name: "Abdominal infra (Elevação de pernas)",
    group: "Abdômen",
    equipment: "Colchonete ou banco",
    how: "Deitado de costas com as mãos ao lado do quadril, eleve as pernas (flexionadas ou semi-estendidas) tirando levemente o quadril do solo e desça controlando.",
    care: "Mantenha a região lombar sempre pressionada contra o colchonete.",
    symbol: "━",
  },
  {
    name: "Abdominal bicicleta",
    group: "Abdômen",
    equipment: "Colchonete",
    how: "Deitado, alterne o movimento de levar o cotovelo direito em direção ao joelho esquerdo e vice-versa, simulando uma pedalada lenta.",
    care: "Priorize o giro controlado do tronco em vez da velocidade.",
    symbol: "━",
  },
  {
    name: "Abdominal na polia (Crunch)",
    group: "Abdômen",
    equipment: "Polia alta com corda",
    how: "Ajoelhado de frente ou de costas para a polia alta, segure a corda próxima à cabeça e flexione a coluna levando as costelas em direção ao quadril.",
    care: "Não sente sobre os calcanhares; o movimento deve ser de flexão do abdômen.",
    symbol: "━",
  },

  // CARDIO
  {
    name: "Caminhada ou corrida na esteira",
    group: "Cardio",
    equipment: "Esteira ergométrica",
    how: "Ajuste a velocidade e a inclinação de acordo com o seu condicionamento. Mantenha a postura ereta e o olhar à frente durante o tempo planejado.",
    care: "Comece com um ritmo leve para aquecer e hidrate-se bem.",
    symbol: "⚡",
  },
  {
    name: "Bicicleta ergométrica",
    group: "Cardio",
    equipment: "Bicicleta vertical ou horizontal",
    how: "Ajuste a altura do banco na linha do seu quadril. Pedale em cadência contínua ajustando a carga conforme o objetivo do treino.",
    care: "O joelho deve ficar levemente semiflexionado no ponto mais baixo do pedal.",
    symbol: "⚡",
  },
  {
    name: "Elíptico (Transport)",
    group: "Cardio",
    equipment: "Aparelho elíptico",
    how: "Apoie os pés nas plataformas e segure nas alças móveis. Realize o movimento contínuo coordenando braços e pernas sem impacto.",
    care: "Mantenha os pés inteiros apoiados na plataforma e a coluna alinhada.",
    symbol: "⚡",
  },
  {
    name: "Escada ergométrica",
    group: "Cardio",
    equipment: "Simulador de escada",
    how: "Suba os degraus em ritmo constante apoiando o pé inteiro a cada passo, usando o apoio lateral apenas para equilíbrio.",
    care: "Evite apoiar o peso do tronco sobre os braços no painel.",
    symbol: "⚡",
  },
];
const STORAGE_KEY = "mysets-state-v1";
const LEGACY_STORAGE_KEY = "fit-companion-demo-v1";
const ACTIVE_SESSION_KEY = "mysets-active-session-v1";
const LEGACY_ACTIVE_SESSION_KEY = "fit-companion-active-session-v1";
const EXERCISE_GROUPS = [
  "Pernas",
  "Glúteos",
  "Costas",
  "Peito",
  "Ombros",
  "Braços",
  "Abdômen",
  "Cardio",
];
const WORKOUT_DAYS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
  "Livre",
];
const WORKOUT_KEY_RE = /^[A-Za-z0-9_-]{1,8}$/;
let state = loadState(),
  selectedWorkout = state.selectedWorkout || "A",
  activeSession = null,
  restInterval = null,
  restEndTime = 0,
  restRemaining = 0,
  toastTimeout = null,
  chart = null;
/* ---------- Normalização / validação de dados externos ----------
   Tudo que vem do localStorage, de backups importados ou da nuvem passa por
   aqui antes de ser usado, garantindo tipos, limites e ausência de lixo. */
function cleanText(v, max, multiline = false) {
  if (typeof v !== "string" && typeof v !== "number") return "";
  let s = String(v).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "");
  if (!multiline) s = s.replace(/[\r\n\t]+/g, " ");
  return s.trim().slice(0, max);
}
function toInt(v, min, max, fallback) {
  const n = Math.round(Number(v));
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}
function toWeight(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? Math.min(1000, n) : null;
}
function isoOrNull(v) {
  if (!v) return null;
  const t = new Date(v).getTime();
  return Number.isNaN(t) ? null : new Date(t).toISOString();
}
function isHttpUrl(v) {
  try {
    const u = new URL(String(v).trim());
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}
function normalizeWorkoutItem(it) {
  if (!Array.isArray(it)) return null;
  const name = cleanText(it[0], 60);
  if (!name) return null;
  return [
    name,
    EXERCISE_GROUPS.includes(it[1]) ? it[1] : "Pernas",
    toInt(it[2], 1, 10, 3),
    toInt(it[3], 1, 300, 12),
    toInt(it[4], 10, 300, 60),
  ];
}
function normalizeWorkout(wk) {
  if (!wk || typeof wk !== "object" || !Array.isArray(wk.items)) return null;
  const items = wk.items.map(normalizeWorkoutItem).filter(Boolean).slice(0, 40);
  if (!items.length) return null;
  return {
    name: cleanText(wk.name, 40) || "Treino",
    day: WORKOUT_DAYS.includes(wk.day) ? wk.day : "Livre",
    items,
    updatedAt: isoOrNull(wk.updatedAt),
  };
}
function sanitizeCustomWorkouts(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return {};
  const clean = {};
  for (const [k, wk] of Object.entries(obj)) {
    if (!WORKOUT_KEY_RE.test(k)) continue;
    const norm = normalizeWorkout(wk);
    if (norm) clean[k] = norm;
  }
  return clean;
}
function normalizeExercise(ex) {
  if (!ex || typeof ex !== "object") return null;
  const name = cleanText(ex.name, 45);
  const how = cleanText(ex.how, 2000, true);
  if (!name) return null;
  const video = typeof ex.video === "string" ? ex.video.trim() : "";
  return {
    name,
    group: EXERCISE_GROUPS.includes(ex.group) ? ex.group : "Pernas",
    equipment: cleanText(ex.equipment, 50) || "Equipamento livre",
    video: isHttpUrl(video) ? video.slice(0, 500) : "",
    how: how || "Adicione instruções para este exercício.",
    care: cleanText(ex.care, 1000, true),
    symbol: Array.from(cleanText(ex.symbol, 8))[0] || "✣",
    updatedAt: isoOrNull(ex.updatedAt),
  };
}
function normalizeSession(s) {
  if (!s || typeof s !== "object") return null;
  const date = isoOrNull(s.date);
  if (!date) return null;
  const details = (Array.isArray(s.details) ? s.details : [])
    .filter((d) => d && typeof d === "object" && cleanText(d.name, 60))
    .slice(0, 60)
    .map((d) => ({
      name: cleanText(d.name, 60),
      group: cleanText(d.group, 30),
      reps: toInt(d.reps, 0, 300, 0),
      note: cleanText(d.note, 120),
      records: (Array.isArray(d.records) ? d.records : [])
        .slice(0, 20)
        .map((r) => ({
          weight: toWeight(r?.weight),
          done: Boolean(r?.done),
        })),
    }));
  return {
    key: cleanText(s.key, 8) || "A",
    name: cleanText(s.name, 40) || "Treino",
    date,
    minutes: toInt(s.minutes, 1, 600, 1),
    exercises: toInt(s.exercises, 0, 100, details.length),
    sets: toInt(s.sets, 0, 1000, 0),
    avgWeight: toWeight(s.avgWeight) || 0,
    maxWeight: toWeight(s.maxWeight) || 0,
    details,
  };
}
function sanitizeSessions(arr) {
  if (!Array.isArray(arr)) return [];
  return arr
    .map(normalizeSession)
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
function sanitizeExercises(arr) {
  if (!Array.isArray(arr)) return [];
  const seen = new Set();
  return arr
    .map(normalizeExercise)
    .filter((ex) => {
      if (!ex) return false;
      const k = ex.name.toLocaleLowerCase("pt-BR");
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
}
function sanitizeStringList(arr, max) {
  return Array.isArray(arr)
    ? arr
        .filter((x) => typeof x === "string" && x)
        .map((x) => x.slice(0, max))
        .slice(0, 500)
    : [];
}
function normalizeProfile(p) {
  const rawName = cleanText(p?.name, 32);
  const updatedAt = isoOrNull(p?.updatedAt);
  let confirmed = false;
  try {
    confirmed = localStorage.getItem("mysets-name-confirmed-v1") === "1";
  } catch {}
  // Migração: se o perfil ainda estiver com o antigo valor padrão "Ana" sem ter sido confirmado pelo usuário, limpa para pedir o nome real.
  const name = rawName === "Ana" && !confirmed ? "" : rawName;
  return {
    name,
    weeklyGoal: toInt(p?.weeklyGoal, 1, 14, 4),
    updatedAt: name ? updatedAt : null,
  };
}
function normalizeState(raw, ownerId) {
  const r = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  return {
    ownerId: ownerId ?? (typeof r.ownerId === "string" ? r.ownerId : null),
    selectedWorkout: WORKOUT_KEY_RE.test(r.selectedWorkout || "")
      ? r.selectedWorkout
      : "A",
    sessions: sanitizeSessions(r.sessions),
    customExercises: sanitizeExercises(r.customExercises),
    customWorkouts: sanitizeCustomWorkouts(r.customWorkouts),
    deletedWorkouts: sanitizeStringList(r.deletedWorkouts, 8),
    deletedExercises: sanitizeStringList(r.deletedExercises, 45),
    deletedSessions: sanitizeStringList(r.deletedSessions, 40),
    profile: normalizeProfile(r.profile),
  };
}
function normalizeActiveSession(raw) {
  if (!raw || typeof raw !== "object") return null;
  const key = cleanText(raw.key, 8);
  if (!key || !Array.isArray(raw.sets) || !raw.sets.length) return null;
  const sets = raw.sets
    .slice(0, 40)
    .map((x) => {
      const name = cleanText(x?.name, 60);
      if (!name) return null;
      const total = toInt(x.total, 1, 10, 3);
      const records = Array.from({ length: total }, (_, i) => {
        const r = Array.isArray(x.records) ? x.records[i] : null;
        const w = r && r.weight !== "" ? toWeight(r.weight) : null;
        return { weight: w === null ? "" : String(w), done: Boolean(r?.done) };
      });
      const lm = toWeight(x.lastMaxWeight);
      return {
        name,
        group: EXERCISE_GROUPS.includes(x.group) ? x.group : "Pernas",
        total,
        reps: toInt(x.reps, 1, 300, 12),
        rest: toInt(x.rest, 10, 300, 60),
        lastMaxWeight: lm && lm > 0 ? lm : null,
        note: cleanText(x.note, 120),
        records,
      };
    })
    .filter(Boolean);
  if (!sets.length) return null;
  const started = Number(raw.started);
  const rest = Number(raw.restEndTime);
  return {
    key,
    name: cleanText(raw.name, 40) || "Treino",
    started: Number.isFinite(started) && started > 0 ? started : Date.now(),
    index: toInt(raw.index, 0, sets.length - 1, 0),
    minimized: Boolean(raw.minimized),
    ...(Number.isFinite(rest) && rest > 0 ? { restEndTime: rest } : {}),
    sets,
  };
}
function loadState() {
  try {
    const rawStr =
      localStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem(LEGACY_STORAGE_KEY);
    return normalizeState(JSON.parse(rawStr));
  } catch {
    return normalizeState(null);
  }
}
let storageWarned = false;
function saveState() {
  state.selectedWorkout = selectedWorkout;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    if (!storageWarned) {
      storageWarned = true;
      showToast(
        "Não foi possível salvar neste aparelho (armazenamento cheio ou bloqueado). Exporte um backup.",
      );
    }
  }
}
function saveActiveSession() {
  try {
    if (activeSession) {
      localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(activeSession));
      localStorage.removeItem(LEGACY_ACTIVE_SESSION_KEY);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
      localStorage.removeItem(LEGACY_ACTIVE_SESSION_KEY);
    }
  } catch {}
}
/* ---------- Foco e acessibilidade dos modais ---------- */
const modalReturnFocus = {};
function rememberFocus(id) {
  if (!modalReturnFocus[id]) modalReturnFocus[id] = document.activeElement;
}
function focusModal(id) {
  const box = document.querySelector(`#${id} .modal`);
  if (box) setTimeout(() => box.focus(), 0);
}
function restoreFocus(id) {
  const el = modalReturnFocus[id];
  delete modalReturnFocus[id];
  if (el && el.isConnected && typeof el.focus === "function") el.focus();
}
function restoreActiveSession() {
  try {
    const rawStr =
      localStorage.getItem(ACTIVE_SESSION_KEY) ||
      localStorage.getItem(LEGACY_ACTIVE_SESSION_KEY);
    const raw = rawStr ? normalizeActiveSession(JSON.parse(rawStr)) : null;
    if (raw) {
      activeSession = raw;
      if (raw.restEndTime) {
        if (raw.restEndTime > Date.now()) {
          const rem = Math.ceil((raw.restEndTime - Date.now()) / 1000);
          startRest(rem);
        } else {
          delete activeSession.restEndTime;
          saveActiveSession();
        }
      }
      renderActiveWorkout();
      if (raw.minimized) {
        renderActiveWorkoutBar();
      } else {
        document.getElementById("workout-modal").classList.add("open");
        document
          .getElementById("workout-modal")
          .setAttribute("aria-hidden", "false");
        renderActiveWorkoutBar();
      }
    } else if (rawStr) {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
      localStorage.removeItem(LEGACY_ACTIVE_SESSION_KEY);
    }
  } catch {}
}
function minimizeWorkoutModal() {
  if (!activeSession) return;
  activeSession.minimized = true;
  saveActiveSession();
  document.getElementById("workout-modal").classList.remove("open");
  document.getElementById("workout-modal").setAttribute("aria-hidden", "true");
  renderActiveWorkoutBar();
  renderWorkout();
  renderHome();
  restoreFocus("workout-modal");
  showToast("Treino salvo em andamento. Toque na barra inferior ou escolha outro exercício.");
}
function resumeWorkoutModal() {
  if (!activeSession) return;
  activeSession.minimized = false;
  saveActiveSession();
  renderActiveWorkout();
  rememberFocus("workout-modal");
  document.getElementById("workout-modal").classList.add("open");
  document.getElementById("workout-modal").setAttribute("aria-hidden", "false");
  renderActiveWorkoutBar();
  focusModal("workout-modal");
}
function renderActiveWorkoutBar() {
  const bar = document.getElementById("active-workout-bar");
  if (!bar) return;
  const modalOpen = document
    .getElementById("workout-modal")
    ?.classList.contains("open");
  if (!activeSession || modalOpen) {
    bar.hidden = true;
    bar.innerHTML = "";
    return;
  }
  const ex = activeSession.sets[activeSession.index] || activeSession.sets[0];
  const restText =
    restRemaining > 0 ? ` · Descanso: ${formatTime(restRemaining)}` : "";
  bar.hidden = false;
  bar.innerHTML = `
    <div class="active-workout-bar-info">
      <strong><span class="live-dot"></span>Treino ${escapeHtml(activeSession.key)} — ${escapeHtml(activeSession.name)}</strong>
      <small id="bar-workout-sub">${escapeHtml(ex?.name || "")} (${activeSession.index + 1}/${activeSession.sets.length})<span id="bar-rest-clock">${restText}</span></small>
    </div>
    <button type="button" class="button button-light" id="resume-workout-btn">Retomar ↗</button>
  `;
  document
    .getElementById("resume-workout-btn")
    ?.addEventListener("click", resumeWorkoutModal);
}
function getTodayWeekdayName() {
  const names = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return names[new Date().getDay()];
}
function getSuggestedWorkoutForToday() {
  const todayName = getTodayWeekdayName();
  for (const k of allWorkoutKeys()) {
    const wk = getWorkout(k);
    if (wk?.day === todayName) return k;
  }
  return null;
}
function isCardioExercise(name, group) {
  if (group === "Cardio") return true;
  const n = String(name || "").toLocaleLowerCase("pt-BR");
  return (
    n.includes("esteira") ||
    n.includes("bicicleta ergom") ||
    n.includes("elíptico") ||
    n.includes("eliptico") ||
    n.includes("stairmaster") ||
    n.includes("escada")
  );
}
function isTimeBasedExercise(name, group, reps) {
  const n = String(name || "").toLocaleLowerCase("pt-BR");
  const numReps = Number(reps);
  return (
    !Number.isNaN(numReps) &&
    numReps >= 20 &&
    (n.includes("prancha") || group === "Cardio")
  );
}
function formatExerciseUnit(name, group, reps) {
  if (isCardioExercise(name, group)) return "min";
  if (isTimeBasedExercise(name, group, reps)) return "segundos";
  return "repetições";
}
function allExercises() {
  const customMap = new Map(
    state.customExercises.map((x) => [x.name.toLocaleLowerCase("pt-BR"), x]),
  );
  const merged = exerciseInfo.map(
    (x) => customMap.get(x.name.toLocaleLowerCase("pt-BR")) || x,
  );
  const baseNames = new Set(
    exerciseInfo.map((x) => x.name.toLocaleLowerCase("pt-BR")),
  );
  const extra = state.customExercises.filter(
    (x) => !baseNames.has(x.name.toLocaleLowerCase("pt-BR")),
  );
  return [...merged, ...extra];
}
function allWorkoutKeys() {
  const baseKeys = Object.keys(workouts);
  const customKeys = Object.keys(state.customWorkouts).filter(
    (k) => !baseKeys.includes(k),
  );
  return [...baseKeys, ...customKeys];
}
function getWorkout(key) {
  return state.customWorkouts[key] || workouts[key] || workouts.A;
}
function showToast(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.classList.remove("show");
    toastTimeout = null;
  }, 2800);
}
function navigate(view) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.toggle("active", v.id === `view-${view}`));
  document
    .querySelectorAll("[data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "progress") renderProgress();
  if (view === "workouts") renderWorkout();
}
document.querySelectorAll("[data-view]").forEach((b) =>
  b.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(b.dataset.view);
  }),
);
document.getElementById("today-label").textContent = new Intl.DateTimeFormat(
  "pt-BR",
  { weekday: "long", day: "numeric", month: "long" },
).format(new Date());
document
  .getElementById("start-today")
  .addEventListener("click", () => startWorkout(selectedWorkout || "A"));
document.getElementById("upcoming-grid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-workout]");
  if (!b) return;
  selectedWorkout = b.dataset.workout;
  saveState();
  navigate("workouts");
  renderWorkout();
  renderHome();
});
document.getElementById("workout-tabs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-workout-tab]");
  if (!b) return;
  selectedWorkout = b.dataset.workoutTab;
  saveState();
  renderWorkout();
  renderHome();
});
document
  .getElementById("new-workout")
  .addEventListener("click", () => openWorkoutForm());
document
  .getElementById("new-exercise")
  .addEventListener("click", () => openExerciseForm());
document
  .getElementById("close-form-modal")
  .addEventListener("click", closeFormModal);
document.getElementById("profile-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("input-profile-name");
  const name = cleanText(nameInput.value, 32);
  if (!name) {
    showToast("Por favor, digite seu nome.");
    nameInput.focus();
    return;
  }
  const weeklyGoal = Math.min(
    14,
    Math.max(1, Number(document.getElementById("input-weekly-goal").value) || 4),
  );
  try {
    localStorage.setItem("mysets-name-confirmed-v1", "1");
  } catch {}
  state.profile = {
    name,
    weeklyGoal,
    updatedAt: new Date().toISOString(),
  };
  saveState();
  pushProfileToCloud();
  renderProfile();
  renderHome();
  showToast("Preferências do perfil atualizadas!");
});
document
  .getElementById("chart-exercise-filter")
  ?.addEventListener("change", () => renderProgress());
document.getElementById("export-backup")?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mysets-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup exportado com sucesso!");
});
document.getElementById("import-backup")?.addEventListener("click", () => {
  document.getElementById("import-backup-file")?.click();
});
document
  .getElementById("import-backup-file")
  ?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    const input = e.target;
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast("Arquivo de backup muito grande.");
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => showToast("Não foi possível ler o arquivo.");
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
          throw new Error("Formato inválido");
        }
        const imported = normalizeState(
          parsed,
          currentUser?.id || state.ownerId || null,
        );
        const nowIso = new Date().toISOString();
        Object.values(imported.customWorkouts).forEach(
          (wk) => (wk.updatedAt = nowIso),
        );
        imported.customExercises.forEach((ex) => (ex.updatedAt = nowIso));
        imported.profile.updatedAt = nowIso;
        if (
          !confirm(
            `Importar este backup? Seus dados atuais neste aparelho serão substituídos por: ${imported.sessions.length} treino(s) no histórico, ${Object.keys(imported.customWorkouts).length} ficha(s) e ${imported.customExercises.length} exercício(s) personalizado(s).`,
          )
        ) {
          return;
        }
        state = imported;
        selectedWorkout = allWorkoutKeys().includes(state.selectedWorkout)
          ? state.selectedWorkout
          : "A";
        saveState();
        if (currentUser) syncWithCloud();
        renderProfile();
        renderWorkout();
        renderExercises();
        renderHome();
        renderProgress();
        showToast("Backup importado com sucesso!");
      } catch {
        showToast("Arquivo de backup inválido.");
      }
    };
    reader.readAsText(file);
    input.value = "";
  });
document.getElementById("reset-demo").addEventListener("click", async () => {
  if (
    confirm(
      "Restaurar os dados padrão? Seus registros locais e na nuvem (se conectada) serão reiniciados.",
    )
  ) {
    const keepName = cleanText(state.profile?.name, 32);
    state = normalizeState(null, currentUser?.id || null);
    if (keepName) {
      state.profile.name = keepName;
      state.profile.updatedAt = new Date().toISOString();
    }
    selectedWorkout = "A";
    stopRest();
    activeSession = null;
    saveActiveSession();
    renderActiveWorkoutBar();
    saveState();
    let cloudFailed = false;
    if (supabaseClient && currentUser) {
      try {
        const results = await Promise.all([
          supabaseClient
            .from("custom_workouts")
            .delete()
            .eq("user_id", currentUser.id),
          supabaseClient
            .from("custom_exercises")
            .delete()
            .eq("user_id", currentUser.id),
          supabaseClient
            .from("workout_sessions")
            .delete()
            .eq("user_id", currentUser.id),
          pushProfileToCloud(),
        ]);
        cloudFailed = results.slice(0, 3).some((r) => r?.error);
      } catch {
        cloudFailed = true;
      }
    }
    renderProfile();
    renderWorkout();
    renderExercises();
    renderHome();
    renderProgress();
    showToast(
      cloudFailed
        ? "Dados locais restaurados, mas não foi possível limpar a nuvem agora."
        : "Dados demonstrativos restaurados.",
    );
  }
});
document
  .querySelectorAll("[data-close-modal]")
  .forEach((b) => b.addEventListener("click", closeExerciseModal));
document.getElementById("close-workout").addEventListener("click", () => {
  if (activeSession) {
    minimizeWorkoutModal();
  } else {
    closeWorkoutModal();
  }
});
document.getElementById("exercise-modal").addEventListener("click", (e) => {
  if (e.target.id === "exercise-modal") closeExerciseModal();
});
document.getElementById("form-modal").addEventListener("click", (e) => {
  if (e.target.id === "form-modal") closeFormModal();
});
document.getElementById("workout-modal").addEventListener("click", (e) => {
  if (e.target.id === "workout-modal") {
    if (activeSession) minimizeWorkoutModal();
    else closeWorkoutModal();
  }
});
document.addEventListener("keydown", (e) => {
  const exModal = document.getElementById("exercise-modal");
  const formModal = document.getElementById("form-modal");
  const wkModal = document.getElementById("workout-modal");
  if (e.key === "Tab") {
    // Mantém o foco do teclado dentro do modal que está por cima.
    const top = [formModal, exModal, wkModal].find((m) =>
      m.classList.contains("open"),
    );
    if (!top) return;
    const focusable = [
      ...top.querySelectorAll(
        'button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), a[href]',
      ),
    ].filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const box = top.querySelector(".modal");
    const active = document.activeElement;
    if (!top.contains(active)) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && (active === first || active === box)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
    return;
  }
  if (e.key !== "Escape") return;
  if (formModal.classList.contains("open")) {
    closeFormModal();
  } else if (exModal.classList.contains("open")) {
    closeExerciseModal();
  } else if (wkModal.classList.contains("open")) {
    if (activeSession) minimizeWorkoutModal();
    else closeWorkoutModal();
  }
});
document
  .getElementById("exercise-search")
  .addEventListener("input", renderExercises);
document.getElementById("exercise-filters").addEventListener("click", (e) => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  document
    .querySelectorAll(".filter")
    .forEach((x) => x.classList.toggle("active", x === b));
  renderExercises();
});
function renderWorkout() {
  const keys = allWorkoutKeys();
  if (!keys.includes(selectedWorkout)) selectedWorkout = keys[0] || "A";
  const tabsEl = document.getElementById("workout-tabs");
  tabsEl.innerHTML = keys
    .map((k) => {
      const wk = getWorkout(k);
      return `<button class="tab ${k === selectedWorkout ? "active" : ""}" data-workout-tab="${escapeAttr(k)}">Treino ${escapeHtml(k)} <small>${escapeHtml(wk.name)}</small></button>`;
    })
    .join("");
  const w = getWorkout(selectedWorkout);
  const detail = document.getElementById("workout-detail");
  const isCustom = Boolean(state.customWorkouts[selectedWorkout]);
  const isActiveThis = Boolean(
    activeSession && activeSession.key === selectedWorkout,
  );
  detail.innerHTML = `<div class="detail-title"><div><h2>Treino ${escapeHtml(selectedWorkout)} — ${escapeHtml(w.name)}</h2><p>${escapeHtml(w.day || "Ficha personalizada")} · ${w.items.length} exercícios</p></div><div class="detail-actions"><button class="button button-secondary" id="edit-selected">Editar ficha</button>${isCustom ? `<button class="button button-secondary" id="delete-selected">${workouts[selectedWorkout] ? "Restaurar padrão" : "Excluir"}</button>` : ""}<button class="button button-primary" id="start-selected">${isActiveThis ? "Retomar treino →" : "Iniciar treino →"}</button></div></div>${w.items
    .map((it, i) => {
      const activeSet = isActiveThis ? activeSession.sets?.[i] : null;
      const doneCount = activeSet
        ? activeSet.records.filter((r) => r.done).length
        : 0;
      const totalSets = activeSet ? activeSet.records.length : Number(it[2]) || 3;
      const statusBadge =
        isActiveThis && doneCount > 0
          ? `<span class="row-status-pill">${doneCount >= totalSets ? "✓ Concluído" : `${doneCount}/${totalSets} feitas`}</span>`
          : "";
      const jumpBtn = isActiveThis
        ? `<button class="row-action" data-jump-exercise="${i}" style="font-weight:700;color:var(--forest)">${doneCount >= totalSets ? "Rever ↻" : "Treinar este →"}</button>`
        : "";
      return `<div class="exercise-row"><span class="exercise-number">${String(i + 1).padStart(2, "0")}</span><div><strong>${escapeHtml(it[0])}${statusBadge}</strong><small>${escapeHtml(it[1])} · ${it[2]} ${Number(it[2]) === 1 ? "série" : "séries"} × ${it[3]} ${formatExerciseUnit(it[0], it[1], it[3])}</small></div><div style="display:flex;gap:10px;align-items:center">${jumpBtn}<button class="row-action" data-open-exercise="${escapeAttr(it[0])}">Ver exercício ↗</button></div><span class="muted">${it[4]}s descanso</span></div>`;
    })
    .join("")}`;
  detail
    .querySelector("#start-selected")
    .addEventListener("click", () => startWorkout(selectedWorkout));
  detail
    .querySelectorAll("[data-jump-exercise]")
    .forEach((b) =>
      b.addEventListener("click", () =>
        startWorkout(selectedWorkout, Number(b.dataset.jumpExercise)),
      ),
    );
  detail
    .querySelector("#edit-selected")
    .addEventListener("click", () => openWorkoutForm(selectedWorkout));
  const deleteBtn = detail.querySelector("#delete-selected");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      const isBase = Boolean(workouts[selectedWorkout]);
      if (
        confirm(
          isBase
            ? `Restaurar o Treino ${selectedWorkout} para a ficha original?`
            : `Excluir a ficha personalizada Treino ${selectedWorkout}?`,
        )
      ) {
        const keyToDelete = selectedWorkout;
        delete state.customWorkouts[keyToDelete];
        if (!state.deletedWorkouts.includes(keyToDelete)) {
          state.deletedWorkouts.push(keyToDelete);
        }
        if (!isBase) selectedWorkout = "A";
        saveState();
        deleteWorkoutFromCloud(keyToDelete);
        renderWorkout();
        renderHome();
        showToast(
          isBase ? "Ficha original restaurada." : "Ficha personalizada excluída.",
        );
      }
    });
  }
  detail
    .querySelectorAll("[data-open-exercise]")
    .forEach((b) =>
      b.addEventListener("click", () => openExercise(b.dataset.openExercise)),
    );
}
function openFormModal(html) {
  const modal = document.getElementById("form-modal");
  document.getElementById("form-modal-content").innerHTML = html;
  rememberFocus("form-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  focusModal("form-modal");
}
function closeFormModal() {
  const modal = document.getElementById("form-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  const content = document.getElementById("form-modal-content");
  if (content) content.innerHTML = "";
  restoreFocus("form-modal");
}
function openWorkoutForm(editKey = null) {
  const existingKeys = allWorkoutKeys();
  const letters = ["A", "B", "C", "D", "E", "F"];
  const defaultKey =
    editKey || letters.find((l) => !existingKeys.includes(l)) || "D";
  const baseWorkout = editKey
    ? getWorkout(editKey)
    : {
        name: "",
        day: "Segunda-feira",
        items: [["Agachamento livre", "Pernas", 3, 12, 60]],
      };
  const exercisesList = allExercises();
  const days = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
    "Livre",
  ];
  openFormModal(`
    <p class="eyebrow">${editKey ? "EDITAR FICHA" : "NOVA FICHA DE TREINO"}</p>
    <h2 id="form-modal-title">${editKey ? `Editar Treino ${escapeHtml(editKey)}` : "Criar ficha personalizada"}</h2>
    <p class="muted">Monte a sequência de exercícios, séries e tempo de descanso.</p>
    <form id="workout-builder-form" class="form-grid" style="margin-top:16px">
      <div class="form-row">
        <label class="form-field">
          <span>Ficha (Letra)</span>
          <select id="wf-key" ${editKey ? "disabled" : ""}>
            ${letters.map((l) => `<option value="${l}" ${l === defaultKey ? "selected" : ""}>Treino ${l}</option>`).join("")}
          </select>
        </label>
        <label class="form-field">
          <span>Dia sugerido</span>
          <select id="wf-day">
            ${days.map((d) => `<option value="${escapeAttr(d)}" ${baseWorkout.day === d ? "selected" : ""}>${escapeHtml(d)}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="form-field">
        <span>Nome ou foco do treino</span>
        <input type="text" id="wf-name" placeholder="Ex.: Inferiores, Superiores, Glúteos..." value="${escapeAttr(baseWorkout.name)}" required maxlength="40" />
      </label>
      <div class="form-field">
        <span>Exercícios da ficha</span>
        <div id="wf-items" class="builder-list"></div>
        <button type="button" class="button button-secondary" id="wf-add-item" style="justify-self:start">＋ Adicionar exercício</button>
      </div>
      <div class="form-actions">
        <button type="button" class="button button-secondary" id="wf-cancel">Cancelar</button>
        <button type="submit" class="button button-primary">Salvar ficha</button>
      </div>
    </form>
  `);
  const itemsContainer = document.getElementById("wf-items");
  function addBuilderRow(item = ["Agachamento livre", "Pernas", 3, 12, 60]) {
    const row = document.createElement("div");
    row.className = "builder-item";
    const groupOrder = [
      "Pernas",
      "Glúteos",
      "Costas",
      "Peito",
      "Ombros",
      "Braços",
      "Abdômen",
      "Cardio",
    ];
    const groupedMap = new Map();
    const itemNameLower = String(item[0] || "").toLocaleLowerCase("pt-BR");
    let hasItemInList = false;
    exercisesList.forEach((ex) => {
      const g = ex.group || "Outros";
      if (!groupedMap.has(g)) groupedMap.set(g, []);
      groupedMap.get(g).push(ex);
      if (ex.name.toLocaleLowerCase("pt-BR") === itemNameLower) {
        hasItemInList = true;
      }
    });
    if (!hasItemInList && item[0]) {
      const fallbackGroup = item[1] || "Outros";
      if (!groupedMap.has(fallbackGroup)) groupedMap.set(fallbackGroup, []);
      groupedMap.get(fallbackGroup).push({
        name: String(item[0]),
        group: fallbackGroup,
      });
    }
    const sortedGroups = [
      ...groupOrder.filter((g) => groupedMap.has(g)),
      ...Array.from(groupedMap.keys()).filter((g) => !groupOrder.includes(g)),
    ];
    const optionsHtml = sortedGroups
      .map(
        (g) =>
          `<optgroup label="${escapeAttr(g)}">${groupedMap
            .get(g)
            .map(
              (ex) =>
                `<option value="${escapeAttr(ex.name)}" data-group="${escapeAttr(ex.group)}" ${ex.name.toLocaleLowerCase("pt-BR") === itemNameLower ? "selected" : ""}>${escapeHtml(ex.name)}</option>`,
            )
            .join("")}</optgroup>`,
      )
      .join("");
    const initialIsCardio = isCardioExercise(item[0], item[1]);
    row.innerHTML = `
      <div class="builder-item-top">
        <select class="wf-ex-select" aria-label="Selecionar exercício">${optionsHtml}</select>
        <div class="builder-actions">
          <button type="button" class="builder-move" data-move="up" title="Mover para cima" aria-label="Mover exercício para cima">↑</button>
          <button type="button" class="builder-move" data-move="down" title="Mover para baixo" aria-label="Mover exercício para baixo">↓</button>
          <button type="button" class="builder-remove" aria-label="Remover exercício">Remover</button>
        </div>
      </div>
      <div class="builder-item-metrics">
        <label>Séries<input type="number" class="wf-ex-sets" min="1" max="10" value="${Number(item[2]) || (initialIsCardio ? 1 : 3)}" required /></label>
        <label><span class="wf-reps-label">${initialIsCardio ? "Tempo (min)" : "Repetições / seg"}</span><input type="number" class="wf-ex-reps" min="1" max="300" value="${Number(item[3]) || (initialIsCardio ? 20 : 12)}" required /></label>
        <label>Descanso (s)<input type="number" class="wf-ex-rest" min="10" max="300" step="5" value="${Number(item[4]) || 60}" required /></label>
      </div>
    `;
    const exSelect = row.querySelector(".wf-ex-select");
    const repsLabelEl = row.querySelector(".wf-reps-label");
    const setsInputEl = row.querySelector(".wf-ex-sets");
    const repsInputEl = row.querySelector(".wf-ex-reps");
    exSelect.addEventListener("change", () => {
      const opt = exSelect.selectedOptions?.[0];
      const grp = opt?.dataset?.group || "";
      const cardio = isCardioExercise(exSelect.value, grp);
      if (repsLabelEl) {
        repsLabelEl.textContent = cardio ? "Tempo (min)" : "Repetições / seg";
      }
      if (cardio && setsInputEl.value === "3" && repsInputEl.value === "12") {
        setsInputEl.value = "1";
        repsInputEl.value = "20";
      }
    });
    row.querySelector('[data-move="up"]').addEventListener("click", () => {
      if (row.previousElementSibling) {
        itemsContainer.insertBefore(row, row.previousElementSibling);
      }
    });
    row.querySelector('[data-move="down"]').addEventListener("click", () => {
      if (row.nextElementSibling) {
        itemsContainer.insertBefore(row.nextElementSibling, row);
      }
    });
    row.querySelector(".builder-remove").addEventListener("click", () => {
      if (itemsContainer.children.length > 1) row.remove();
      else showToast("A ficha precisa ter pelo menos 1 exercício.");
    });
    itemsContainer.appendChild(row);
  }
  baseWorkout.items.forEach((it) => addBuilderRow(it));
  document
    .getElementById("wf-add-item")
    .addEventListener("click", () => addBuilderRow());
  document
    .getElementById("wf-cancel")
    .addEventListener("click", closeFormModal);
  document
    .getElementById("workout-builder-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const key = editKey || document.getElementById("wf-key").value;
      const name = document.getElementById("wf-name").value.trim();
      const day = document.getElementById("wf-day").value;
      const rows = Array.from(itemsContainer.querySelectorAll(".builder-item"));
      if (!name || !rows.length) return;
      if (
        !editKey &&
        allWorkoutKeys().includes(key) &&
        !confirm(
          `O Treino ${key} já existe. Deseja substituir a ficha atual do Treino ${key}?`,
        )
      ) {
        return;
      }
      const items = rows.map((r) => {
        const sel = r.querySelector(".wf-ex-select");
        const exName = sel.value;
        const exObj = allExercises().find(
          (x) =>
            x.name.toLocaleLowerCase("pt-BR") ===
            exName.toLocaleLowerCase("pt-BR"),
        );
        const group = exObj ? exObj.group : "Pernas";
        const sets = Math.max(1, Number(r.querySelector(".wf-ex-sets").value) || 3);
        const reps = Math.max(1, Number(r.querySelector(".wf-ex-reps").value) || 12);
        const rest = Math.max(10, Number(r.querySelector(".wf-ex-rest").value) || 60);
        return [exObj ? exObj.name : exName, group, sets, reps, rest];
      });
      state.customWorkouts[key] = {
        name,
        day,
        items,
        updatedAt: new Date().toISOString(),
      };
      state.deletedWorkouts = (state.deletedWorkouts || []).filter(
        (k) => k !== key,
      );
      if (activeSession && activeSession.key === key) {
        activeSession.name = name;
        saveActiveSession();
        renderActiveWorkoutBar();
      }
      selectedWorkout = key;
      saveState();
      pushWorkoutToCloud(key, state.customWorkouts[key]);
      renderWorkout();
      renderHome();
      closeFormModal();
      showToast(`Treino ${key} salvo com sucesso!`);
    });
}
function openExerciseForm(editName = null) {
  const groups = [
    "Pernas",
    "Glúteos",
    "Costas",
    "Peito",
    "Ombros",
    "Braços",
    "Abdômen",
    "Cardio",
  ];
  const symbols = {
    Pernas: "✣",
    Glúteos: "⌁",
    Costas: "↔",
    Peito: "▱",
    Ombros: "△",
    Braços: "↟",
    Abdômen: "━",
    Cardio: "⚡",
  };
  const existing = editName
    ? allExercises().find(
        (e) =>
          e.name.toLocaleLowerCase("pt-BR") ===
          editName.toLocaleLowerCase("pt-BR"),
      )
    : null;
  const isCustomized = Boolean(
    editName &&
      state.customExercises.some(
        (x) =>
          x.name.toLocaleLowerCase("pt-BR") ===
          editName.toLocaleLowerCase("pt-BR"),
      ),
  );
  const isBaseExercise = Boolean(
    editName &&
      exerciseInfo.some(
        (x) =>
          x.name.toLocaleLowerCase("pt-BR") ===
          editName.toLocaleLowerCase("pt-BR"),
      ),
  );
  openFormModal(`
    <p class="eyebrow">BIBLIOTECA</p>
    <h2 id="form-modal-title">${existing ? `Editar ${escapeHtml(existing.name)}` : "Novo exercício personalizado"}</h2>
    <p class="muted">Cadastre ou atualize as instruções e vídeo demonstrativo do movimento.</p>
    <form id="exercise-builder-form" class="form-grid" style="margin-top:16px">
      <div class="form-row">
        <label class="form-field">
          <span>Nome do exercício</span>
          <input type="text" id="ef-name" placeholder="Ex.: Stiff com halteres" value="${escapeAttr(existing?.name || "")}" ${existing ? "readonly" : ""} required maxlength="45" />
        </label>
        <label class="form-field">
          <span>Grupo muscular</span>
          <select id="ef-group">
            ${groups.map((g) => `<option value="${g}" ${existing?.group === g ? "selected" : ""}>${g}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="form-field">
        <span>Equipamento utilizado</span>
        <input type="text" id="ef-equipment" placeholder="Ex.: Halteres, Polia, Peso corporal..." value="${escapeAttr(existing?.equipment || "")}" maxlength="50" />
      </label>
      <label class="form-field">
        <span>Link de vídeo demonstrativo (YouTube ou MP4 — opcional)</span>
        <input type="url" id="ef-video" placeholder="Ex.: https://www.youtube.com/watch?v=..." value="${escapeAttr(existing?.video || "")}" />
      </label>
      <label class="form-field">
        <span>Como executar</span>
        <textarea id="ef-how" placeholder="Descreva o passo a passo da execução de forma simples..." required>${escapeHtml(existing?.how || "")}</textarea>
      </label>
      <label class="form-field">
        <span>Cuidados importantes</span>
        <textarea id="ef-care" placeholder="Dicas de postura e segurança...">${escapeHtml(existing?.care || "")}</textarea>
      </label>
      <div class="form-actions">
        ${isCustomized ? `<button type="button" class="button button-secondary" id="ef-delete" style="margin-right:auto">${isBaseExercise ? "Restaurar padrão" : "Excluir exercício"}</button>` : ""}
        <button type="button" class="button button-secondary" id="ef-cancel">Cancelar</button>
        <button type="submit" class="button button-primary">${existing ? "Salvar alterações" : "Adicionar exercício"}</button>
      </div>
    </form>
  `);
  document
    .getElementById("ef-cancel")
    .addEventListener("click", closeFormModal);
  document.getElementById("ef-delete")?.addEventListener("click", () => {
    if (
      !confirm(
        isBaseExercise
          ? `Restaurar "${editName}" para as instruções originais?`
          : `Deseja excluir o exercício "${editName}" da biblioteca?`,
      )
    )
      return;
    state.customExercises = state.customExercises.filter(
      (x) =>
        x.name.toLocaleLowerCase("pt-BR") !==
        editName.toLocaleLowerCase("pt-BR"),
    );
    if (
      !state.deletedExercises.some(
        (n) =>
          n.toLocaleLowerCase("pt-BR") === editName.toLocaleLowerCase("pt-BR"),
      )
    ) {
      state.deletedExercises.push(editName);
    }
    saveState();
    deleteExerciseFromCloud(editName);
    renderExercises();
    renderWorkout();
    if (activeSession) renderActiveWorkout();
    closeFormModal();
    showToast(
      isBaseExercise ? "Exercício original restaurado." : "Exercício excluído.",
    );
  });
  document
    .getElementById("exercise-builder-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const rawName = document.getElementById("ef-name").value.trim();
      const group = document.getElementById("ef-group").value;
      const equipment =
        document.getElementById("ef-equipment").value.trim() ||
        "Equipamento livre";
      const video = document.getElementById("ef-video").value.trim();
      const how = document.getElementById("ef-how").value.trim();
      const care =
        document.getElementById("ef-care").value.trim() ||
        "Mantenha o movimento controlado e respeite seus limites.";
      if (!rawName || !how) return;
      if (video && !isHttpUrl(video)) {
        showToast("Use um link de vídeo começando com http:// ou https://");
        return;
      }
      const matchedExisting = allExercises().find(
        (x) =>
          x.name.toLocaleLowerCase("pt-BR") ===
          rawName.toLocaleLowerCase("pt-BR"),
      );
      if (
        !editName &&
        matchedExisting &&
        !confirm(
          `O exercício "${matchedExisting.name}" já existe na biblioteca. Deseja atualizar as informações dele?`,
        )
      ) {
        return;
      }
      const name = matchedExisting ? matchedExisting.name : rawName;
      const existingIdx = state.customExercises.findIndex(
        (x) =>
          x.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"),
      );
      const newEx = {
        name,
        group,
        equipment,
        video,
        how,
        care,
        symbol:
          existing?.symbol || matchedExisting?.symbol || symbols[group] || "✣",
        updatedAt: new Date().toISOString(),
      };
      if (existingIdx >= 0) state.customExercises[existingIdx] = newEx;
      else state.customExercises.push(newEx);
      state.deletedExercises = (state.deletedExercises || []).filter(
        (n) => n.toLocaleLowerCase("pt-BR") !== name.toLocaleLowerCase("pt-BR"),
      );
      Object.entries(state.customWorkouts).forEach(([k, wk]) => {
        if (!Array.isArray(wk?.items)) return;
        let changed = false;
        wk.items.forEach((it) => {
          if (
            String(it[0]).toLocaleLowerCase("pt-BR") ===
            name.toLocaleLowerCase("pt-BR")
          ) {
            if (it[1] !== group) {
              it[1] = group;
              changed = true;
            }
          }
        });
        if (changed) {
          wk.updatedAt = new Date().toISOString();
          pushWorkoutToCloud(k, wk);
        }
      });
      if (activeSession && Array.isArray(activeSession.sets)) {
        activeSession.sets.forEach((sItem) => {
          if (
            String(sItem.name).toLocaleLowerCase("pt-BR") ===
            name.toLocaleLowerCase("pt-BR")
          ) {
            sItem.group = group;
          }
        });
        saveActiveSession();
        renderActiveWorkout();
      }
      saveState();
      pushExerciseToCloud(newEx);
      renderExercises();
      renderWorkout();
      closeFormModal();
      showToast(`Exercício "${name}" salvo na biblioteca!`);
    });
}
function renderProfile() {
  const name = cleanText(state.profile?.name, 32);
  const goal = state.profile?.weeklyGoal || 4;
  const initial = name ? (Array.from(name)[0] || "✦").toUpperCase() : "✦";
  const ids = ["sidebar-avatar", "topbar-avatar", "profile-avatar"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = initial;
  });
  const sideGreet = document.getElementById("sidebar-greeting");
  if (sideGreet) {
    sideGreet.textContent = name ? `Olá, ${name}` : "Definir meu nome";
    sideGreet.style.cursor = "pointer";
    sideGreet.onclick = () => {
      if (!cleanText(state.profile?.name, 32)) {
        promptUserNameIfNeeded(true);
      } else {
        navigate("profile");
      }
    };
  }
  const homeName = document.getElementById("home-user-name");
  if (homeName) homeName.textContent = name ? `, ${name}` : "";
  const profName = document.getElementById("profile-name");
  if (profName) profName.textContent = name || "Seu perfil";
  const inputName = document.getElementById("input-profile-name");
  if (inputName) inputName.value = name;
  const inputGoal = document.getElementById("input-weekly-goal");
  if (inputGoal) inputGoal.value = goal;
  const goalLabel = document.getElementById("week-goal-label");
  if (goalLabel) {
    goalLabel.textContent = `/ ${goal} ${goal === 1 ? "treino" : "treinos"}`;
  }
}

function promptUserNameIfNeeded(force = false) {
  if (!force && cleanText(state.profile?.name, 32)) return;
  if (
    !force &&
    (document.getElementById("workout-modal")?.classList.contains("open") ||
      document.getElementById("exercise-modal")?.classList.contains("open") ||
      document.getElementById("form-modal")?.classList.contains("open"))
  ) {
    return;
  }
  const goal = state.profile?.weeklyGoal || 4;
  const currentName = cleanText(state.profile?.name, 32);
  openFormModal(`
    <p class="eyebrow">BEM-VINDO(A) AO MYSETS</p>
    <h2 id="form-modal-title">Como você quer ser chamado(a)?</h2>
    <p class="muted" style="margin-bottom:14px">Digite seu nome para personalizar o aplicativo e escolha sua meta semanal de treinos.</p>
    <form id="welcome-profile-form" class="form-grid">
      <label class="form-field">
        <span>Seu nome ou apelido</span>
        <input type="text" id="welcome-name" maxlength="32" value="${escapeAttr(currentName)}" placeholder="Digite seu nome..." autocomplete="given-name" required />
      </label>
      <label class="form-field">
        <span>Meta semanal (treinos por semana)</span>
        <input type="number" id="welcome-goal" min="1" max="14" value="${goal}" required />
      </label>
      <div class="form-actions">
        <button type="submit" class="button button-primary" style="width:100%">Continuar →</button>
      </div>
    </form>
  `);
  const nameInput = document.getElementById("welcome-name");
  setTimeout(() => nameInput?.focus(), 40);
  document
    .getElementById("welcome-profile-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = cleanText(nameInput.value, 32);
      if (!name) {
        showToast("Por favor, digite seu nome.");
        nameInput.focus();
        return;
      }
      const weeklyGoal = toInt(
        document.getElementById("welcome-goal").value,
        1,
        14,
        4,
      );
      try {
        localStorage.setItem("mysets-name-confirmed-v1", "1");
      } catch {}
      state.profile = {
        name,
        weeklyGoal,
        updatedAt: new Date().toISOString(),
      };
      saveState();
      pushProfileToCloud();
      renderProfile();
      renderHome();
      closeFormModal();
      showToast(`Bem-vindo(a), ${name}! Bons treinos!`);
    });
}
function renderExercises() {
  const q = document
    .getElementById("exercise-search")
    .value.trim()
    .toLocaleLowerCase("pt-BR");
  const filter =
    document.querySelector(".filter.active")?.dataset.filter || "Todos";
  const list = allExercises().filter(
    (x) =>
      (filter === "Todos" || x.group === filter) &&
      `${x.name} ${x.group}`.toLocaleLowerCase("pt-BR").includes(q),
  );
  document.getElementById("exercise-grid").innerHTML = list.length
    ? list
        .map(
          (x) =>
            `<article class="exercise-card" tabindex="0" role="button" data-exercise="${escapeAttr(x.name)}"><div class="exercise-art">${escapeHtml(x.symbol || "✣")}</div><div class="exercise-info"><strong>${escapeHtml(x.name)}</strong><p>${escapeHtml(x.equipment || "Exercício personalizado")}</p><span class="pill">${escapeHtml(x.group)}</span></div></article>`,
        )
        .join("")
    : `<p class="empty-state">Nenhum exercício encontrado. Tente outro termo.</p>`;
  document.querySelectorAll("[data-exercise]").forEach((card) => {
    card.addEventListener("click", () => openExercise(card.dataset.exercise));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openExercise(card.dataset.exercise);
      }
    });
  });
}
function renderVideoMedia(videoUrl) {
  if (!videoUrl || !isHttpUrl(videoUrl)) {
    return `<div class="video-placeholder"><div><span>▶</span><small>Vídeo demonstrativo<br>Clique em "Editar / Vídeo" abaixo para associar um link.</small></div></div>`;
  }
  const ytMatch = videoUrl.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  if (ytMatch) {
    return `<iframe class="video-embed" src="https://www.youtube.com/embed/${ytMatch[1]}" title="Vídeo demonstrativo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  return `<video class="video-embed" src="${escapeAttr(videoUrl.trim())}" controls playsinline preload="metadata"></video>`;
}
function openExercise(name) {
  if (!name) return;
  const x = allExercises().find(
    (e) =>
      e.name.toLocaleLowerCase("pt-BR") ===
      String(name).toLocaleLowerCase("pt-BR"),
  ) || {
    name: String(name),
    group: "Pernas",
    equipment: "Equipamento livre",
    video: "",
    how: "Exercício personalizado ainda sem instruções detalhadas. Clique em 'Editar / Vídeo' para preencher.",
    care: "Mantenha a postura controlada e respeite a amplitude segura do movimento.",
  };
  document.getElementById("exercise-modal-content").innerHTML =
    `<p class="eyebrow">GUIA DO EXERCÍCIO</p><h2 id="modal-title">${escapeHtml(x.name)}</h2><p class="muted">${escapeHtml(x.group)} · ${escapeHtml(x.equipment || "Equipamento não informado")}</p>${renderVideoMedia(x.video)}<div class="modal-section"><h3>Como executar</h3><p>${escapeHtml(x.how || "Adicione instruções para este exercício.")}</p></div><div class="modal-section"><h3>Cuidados importantes</h3><p>${escapeHtml(x.care || "Siga a orientação do profissional responsável pelo seu treino.")}</p></div><div class="modal-actions"><button class="button button-primary" data-close-exercise>Entendi</button><button class="button button-secondary" data-edit-exercise="${escapeAttr(x.name)}">Editar / Vídeo</button></div>`;
  rememberFocus("exercise-modal");
  document.getElementById("exercise-modal").classList.add("open");
  document
    .getElementById("exercise-modal")
    .setAttribute("aria-hidden", "false");
  focusModal("exercise-modal");
  document
    .querySelector("[data-close-exercise]")
    .addEventListener("click", closeExerciseModal);
  document
    .querySelector("[data-edit-exercise]")
    .addEventListener("click", () => {
      closeExerciseModal();
      openExerciseForm(x.name);
    });
}
function closeExerciseModal() {
  const modal = document.getElementById("exercise-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  const content = document.getElementById("exercise-modal-content");
  if (content) content.innerHTML = "";
  restoreFocus("exercise-modal");
}
function getLastExerciseRecord(exerciseName) {
  let latestRecords = null;
  let latestMaxWeight = null;
  let latestNote = "";
  const target = String(exerciseName || "").toLocaleLowerCase("pt-BR");
  for (const s of state.sessions) {
    if (!Array.isArray(s.details)) continue;
    const found = s.details.find(
      (d) => String(d.name || "").toLocaleLowerCase("pt-BR") === target,
    );
    if (!found) continue;
    if (!latestNote && found.note && String(found.note).trim()) {
      latestNote = String(found.note).trim();
    }
    if (!latestRecords && Array.isArray(found.records)) {
      const validWeights = found.records
        .map((r) => Number(r.weight))
        .filter((w) => !Number.isNaN(w) && w > 0);
      if (validWeights.length > 0) {
        latestRecords = found.records;
        latestMaxWeight = Math.max(...validWeights);
      }
    }
    if (latestRecords && latestNote) break;
  }
  if (!latestRecords && !latestNote) return null;
  return {
    records: latestRecords,
    maxWeight: latestMaxWeight,
    note: latestNote,
  };
}
function startWorkout(key, targetIndex = null) {
  if (activeSession) {
    if (activeSession.key === key) {
      if (
        typeof targetIndex === "number" &&
        targetIndex >= 0 &&
        targetIndex < activeSession.sets.length
      ) {
        activeSession.index = targetIndex;
      } else {
        const cur = activeSession.sets[activeSession.index];
        const curAllDone =
          cur && Array.isArray(cur.records) && cur.records.every((r) => r.done);
        if (curAllDone) {
          const nextPending = activeSession.sets.findIndex((sItem) =>
            sItem.records.some((r) => !r.done),
          );
          if (nextPending !== -1) activeSession.index = nextPending;
        }
      }
      resumeWorkoutModal();
      return;
    }
    if (
      !confirm(
        `Você já está com o Treino ${activeSession.key} em andamento. Deseja descartá-lo e iniciar o Treino ${key}?`,
      )
    ) {
      return;
    }
    stopRest();
  }
  const w = getWorkout(key);
  activeSession = {
    key,
    name: w.name,
    started: Date.now(),
    index:
      typeof targetIndex === "number" &&
      targetIndex >= 0 &&
      targetIndex < w.items.length
        ? targetIndex
        : 0,
    minimized: false,
    sets: w.items.map((it) => {
      const last = getLastExerciseRecord(it[0]);
      return {
        name: it[0],
        group: it[1],
        total: it[2],
        reps: it[3],
        rest: it[4],
        lastMaxWeight: last ? last.maxWeight : null,
        note: last?.note || "",
        records: Array.from({ length: it[2] }, (_, idx) => {
          const prevW =
            last?.records?.[idx]?.weight ?? last?.maxWeight ?? "";
          return {
            weight: prevW !== null && prevW !== "" ? String(prevW) : "",
            done: false,
          };
        }),
      };
    }),
  };
  saveActiveSession();
  renderActiveWorkout();
  rememberFocus("workout-modal");
  document.getElementById("workout-modal").classList.add("open");
  document.getElementById("workout-modal").setAttribute("aria-hidden", "false");
  renderActiveWorkoutBar();
  focusModal("workout-modal");
}
function renderActiveWorkout() {
  const s = activeSession;
  if (!s || !Array.isArray(s.sets) || !s.sets.length) return;
  s.index = Math.min(s.sets.length - 1, Math.max(0, Number(s.index) || 0));
  const ex = s.sets[s.index];
  const total = s.sets.length;
  const exInfo = allExercises().find(
    (e) =>
      e.name.toLocaleLowerCase("pt-BR") ===
      String(ex.name).toLocaleLowerCase("pt-BR"),
  );
  const symbol = exInfo?.symbol || "✣";
  const isCardio = isCardioExercise(ex.name, ex.group);
  const isSeconds = !isCardio && isTimeBasedExercise(ex.name, ex.group, ex.reps);
  const unitText = isCardio ? "min" : isSeconds ? "segundos" : "repetições";
  const col2Title = isCardio ? "Meta" : isSeconds ? "Tempo" : "Repetições";
  const col2Suffix = isCardio ? " min" : isSeconds ? "s" : "";
  const col3Title = isCardio ? "Tempo feito (min)" : "Carga (kg)";
  const lastHintText = ex.lastMaxWeight
    ? isCardio
      ? `Último tempo registrado: ${ex.lastMaxWeight} min`
      : `Última carga registrada: ${ex.lastMaxWeight} kg`
    : "";
  const notePlaceholder = isCardio
    ? "Ex.: Velocidade 6.5 km/h, inclinação 3%, nível 8..."
    : "Ex.: Banco no furo 3, pegada neutra...";
  const stripHtml = `<div class="active-ex-strip" role="tablist" aria-label="Alternar exercício da ficha">${s.sets
    .map((item, idx) => {
      const doneCnt = item.records.filter((r) => r.done).length;
      const allDone = doneCnt >= item.records.length && item.records.length > 0;
      const prefix = allDone
        ? "✓ "
        : doneCnt > 0
          ? `${doneCnt}/${item.records.length} · `
          : `${idx + 1}. `;
      return `<button type="button" class="active-ex-chip ${idx === s.index ? "current" : ""} ${allDone ? "done" : ""}" data-switch-ex="${idx}" title="Ir para ${escapeAttr(item.name)}">${prefix}${escapeHtml(item.name)}</button>`;
    })
    .join("")}</div>`;
  const otherPendingIdx = s.sets.findIndex(
    (item, idx) => idx !== s.index && item.records.some((r) => !r.done),
  );
  const isLastOrAllOtherDone = s.index === total - 1 || otherPendingIdx === -1;
  document.getElementById("active-workout-content").innerHTML =
    `<div class="active-top"><span class="pill">TREINO ${escapeHtml(s.key)}</span><div class="active-top-right"><span class="active-count">Exercício ${s.index + 1} de ${total}</span><button type="button" class="minimize-btn" id="minimize-workout" title="Minimizar para consultar o app">— Minimizar</button></div></div>${stripHtml}<p class="eyebrow">EM TREINAMENTO</p><h2 id="active-title">${escapeHtml(ex.name)}</h2><p class="muted">${ex.total} ${Number(ex.total) === 1 ? "série" : "séries"} · ${ex.reps} ${unitText} por série</p>${lastHintText ? `<span class="last-weight-hint">${escapeHtml(lastHintText)}</span>` : ""}<div class="active-exercise-art">${escapeHtml(symbol)}</div><button class="text-button" id="active-video">▶ Ver instruções do exercício</button><table class="set-table"><thead><tr><th>Série</th><th>${col2Title}</th><th>${col3Title}</th><th>Feita</th></tr></thead><tbody>${ex.records.map((r, i) => `<tr><td>${i + 1}</td><td>${ex.reps}${col2Suffix}</td><td><input type="number" min="0" step="${isCardio ? "1" : "0.5"}" placeholder="${isCardio ? escapeAttr(String(ex.reps)) : "—"}" value="${escapeAttr(r.weight)}" data-weight="${i}" aria-label="${col3Title} da série ${i + 1}"></td><td><input type="checkbox" class="set-check" data-set="${i}" ${r.done ? "checked" : ""} aria-label="Concluir série ${i + 1}"></td></tr>`).join("")}</tbody></table><label class="exercise-note-field"><span>📝 Observações / ajuste do aparelho</span><input type="text" id="active-exercise-note" placeholder="${notePlaceholder}" value="${escapeAttr(ex.note || "")}" maxlength="120" /></label><div class="rest-panel"><div><small class="muted">DESCANSO</small><strong id="rest-clock">${formatTime(restRemaining || ex.rest)}</strong></div><button id="start-rest">Iniciar descanso</button></div><div class="active-footer">${s.index > 0 ? `<button class="button button-secondary" id="prev-exercise">← Anterior</button>` : ""}${s.index === total - 1 && otherPendingIdx !== -1 ? `<button class="button button-secondary" id="jump-pending-exercise">Ir p/ pendente (${otherPendingIdx + 1})</button>` : ""}<button class="button button-primary" id="next-exercise">${isLastOrAllOtherDone ? "Finalizar treino" : "Próximo exercício →"}</button></div><div class="discard-workout-row"><button type="button" class="discard-workout-btn" id="discard-workout">Descartar treino em andamento</button></div>`;
  document
    .getElementById("minimize-workout")
    ?.addEventListener("click", minimizeWorkoutModal);
  document.querySelectorAll("[data-switch-ex]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const targetIdx = Number(btn.dataset.switchEx);
      if (targetIdx !== s.index) {
        s.index = targetIdx;
        stopRest();
        restRemaining = 0;
        saveActiveSession();
        renderActiveWorkout();
      }
    }),
  );
  document
    .getElementById("jump-pending-exercise")
    ?.addEventListener("click", () => {
      if (otherPendingIdx !== -1) {
        s.index = otherPendingIdx;
        stopRest();
        restRemaining = 0;
        saveActiveSession();
        renderActiveWorkout();
      }
    });
  document.getElementById("discard-workout")?.addEventListener("click", () => {
    if (
      confirm(
        "Deseja descartar o treino em andamento? As séries marcadas nesta sessão não serão salvas.",
      )
    ) {
      closeWorkoutModal();
      renderWorkout();
    }
  });
  document
    .getElementById("active-exercise-note")
    ?.addEventListener("input", (e) => {
      ex.note = e.target.value;
      saveActiveSession();
    });
  document
    .getElementById("active-video")
    .addEventListener("click", () => openExercise(ex.name));
  document.querySelectorAll("[data-weight]").forEach((input) =>
    input.addEventListener("input", () => {
      const val = input.value.trim();
      if (val !== "" && Number(val) < 0) input.value = "0";
      ex.records[Number(input.dataset.weight)].weight = input.value;
      saveActiveSession();
    }),
  );
  document.querySelectorAll("[data-set]").forEach((input) =>
    input.addEventListener("change", () => {
      const idx = Number(input.dataset.set);
      ex.records[idx].done = input.checked;
      if (input.checked && isCardio && ex.records[idx].weight === "") {
        ex.records[idx].weight = String(ex.reps);
        const wInput = document.querySelector(`[data-weight="${idx}"]`);
        if (wInput) wInput.value = String(ex.reps);
      }
      saveActiveSession();
      if (input.checked) {
        startRest(ex.rest);
        showToast("Série registrada. Bom trabalho!");
      }
    }),
  );
  document
    .getElementById("start-rest")
    .addEventListener("click", () => startRest(ex.rest));
  const prevBtn = document.getElementById("prev-exercise");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (s.index > 0) {
        s.index--;
        stopRest();
        restRemaining = 0;
        saveActiveSession();
        renderActiveWorkout();
      }
    });
  }
  document.getElementById("next-exercise").addEventListener("click", () => {
    if (isLastOrAllOtherDone) {
      const anyDone = s.sets.some((x) => x.records.some((r) => r.done));
      if (
        !anyDone &&
        !confirm(
          "Você ainda não marcou nenhuma série como feita. Deseja finalizar o treino mesmo assim?",
        )
      ) {
        return;
      }
      finishWorkout();
      renderWorkout();
    } else {
      const nextUnfinishedAfter = s.sets.findIndex(
        (item, idx) => idx > s.index && item.records.some((r) => !r.done),
      );
      s.index =
        nextUnfinishedAfter !== -1
          ? nextUnfinishedAfter
          : otherPendingIdx !== -1
            ? otherPendingIdx
            : s.index + 1;
      stopRest();
      restRemaining = 0;
      saveActiveSession();
      renderActiveWorkout();
    }
  });
}
function notifyRestFinished() {
  try {
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  } catch {}
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const playTone = (freq, startOffset, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startOffset);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + startOffset);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + startOffset + duration,
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + startOffset);
      osc.stop(ctx.currentTime + startOffset + duration);
    };
    playTone(523.25, 0, 0.18);
    playTone(659.25, 0.2, 0.28);
    setTimeout(() => ctx.close().catch(() => {}), 700);
  } catch {}
}
function startRest(seconds) {
  stopRest();
  restEndTime = Date.now() + seconds * 1000;
  restRemaining = seconds;
  if (activeSession) {
    activeSession.restEndTime = restEndTime;
    saveActiveSession();
  }
  updateClock();
  restInterval = setInterval(() => {
    restRemaining = Math.max(0, Math.ceil((restEndTime - Date.now()) / 1000));
    updateClock();
    if (restRemaining <= 0) {
      stopRest();
      notifyRestFinished();
      showToast("Descanso concluído. Vamos continuar!");
    }
  }, 500);
}
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && restInterval && restEndTime > 0) {
    restRemaining = Math.max(0, Math.ceil((restEndTime - Date.now()) / 1000));
    updateClock();
    if (restRemaining <= 0) {
      stopRest();
      notifyRestFinished();
      showToast("Descanso concluído. Vamos continuar!");
    }
  }
});
function updateClock() {
  const el = document.getElementById("rest-clock");
  if (el) {
    const defaultRest =
      activeSession?.sets?.[activeSession.index]?.rest || 0;
    el.textContent = formatTime(restRemaining > 0 ? restRemaining : defaultRest);
  }
  const barClock = document.getElementById("bar-rest-clock");
  if (barClock) {
    barClock.textContent =
      restRemaining > 0 ? ` · Descanso: ${formatTime(restRemaining)}` : "";
  }
}
function stopRest() {
  if (restInterval) clearInterval(restInterval);
  restInterval = null;
  restEndTime = 0;
  restRemaining = 0;
  if (activeSession && activeSession.restEndTime) {
    delete activeSession.restEndTime;
    saveActiveSession();
  }
  updateClock();
}
function formatTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function getWeekSessions(sessions) {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const startOfWeek = new Date(now);
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(now.getDate() + diffToMonday);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  return sessions.filter((s) => {
    const d = new Date(s.date);
    return d >= startOfWeek && d < endOfWeek;
  });
}
function finishWorkout() {
  stopRest();
  const rawMinutes = Math.round((Date.now() - activeSession.started) / 60000);
  const elapsed = Math.min(180, Math.max(1, rawMinutes));
  const doneSets = activeSession.sets.reduce(
    (n, x) => n + x.records.filter((r) => r.done).length,
    0,
  );
  const details = activeSession.sets.map((x) => ({
    name: x.name,
    group: x.group,
    reps: x.reps,
    note: (x.note || "").trim(),
    records: x.records.map((r) => ({
      weight: r.weight !== "" ? Number(r.weight) : null,
      done: Boolean(r.done),
    })),
  }));
  const weights = details
    .filter((d) => !isCardioExercise(d.name, d.group))
    .flatMap((d) => d.records)
    .filter((r) => r.weight !== null && !Number.isNaN(r.weight) && r.weight > 0)
    .map((r) => r.weight);
  const avgWeight = weights.length
    ? Math.round((weights.reduce((a, b) => a + b, 0) / weights.length) * 10) /
      10
    : 0;
  const maxWeight = weights.length ? Math.max(...weights) : 0;
  const newSession = {
    key: activeSession.key,
    name: activeSession.name,
    date: new Date().toISOString(),
    minutes: elapsed,
    exercises: activeSession.sets.length,
    sets: doneSets,
    avgWeight,
    maxWeight,
    details,
  };
  state.sessions.unshift(newSession);
  saveState();
  pushSessionToCloud(newSession);
  document.getElementById("active-workout-content").innerHTML =
    `<div style="text-align:center;padding:25px 0"><div class="profile-avatar" style="margin:0 auto 18px;font-size:28px">✓</div><p class="eyebrow">SESSÃO REGISTRADA</p><h2>Treino concluído!</h2><p class="muted">Você avançou mais um passo. Parabéns pela dedicação.</p><div class="stats-grid" style="margin-top:25px"><article class="card stat-card"><small>Exercícios</small><strong>${activeSession.sets.length}</strong></article><article class="card stat-card"><small>Séries feitas</small><strong>${doneSets}</strong></article><article class="card stat-card"><small>Duração</small><strong>${elapsed}m</strong></article></div><button class="button button-primary" id="finish-close" style="width:100%">Voltar ao início</button></div>`;
  document
    .getElementById("finish-close")
    .addEventListener("click", closeWorkoutModal);
  activeSession = null;
  saveActiveSession();
  renderActiveWorkoutBar();
  renderHome();
  renderProgress();
}
function closeWorkoutModal() {
  stopRest();
  document.getElementById("workout-modal").classList.remove("open");
  document.getElementById("workout-modal").setAttribute("aria-hidden", "true");
  activeSession = null;
  saveActiveSession();
  renderActiveWorkoutBar();
  renderHome();
  renderProgress();
  restoreFocus("workout-modal");
}
function renderHome() {
  const sessions = state.sessions;
  const weekSessions = getWeekSessions(sessions);
  const goal = state.profile?.weeklyGoal || 4;
  document.getElementById("week-count").textContent = weekSessions.length;
  const goalLabel = document.getElementById("week-goal-label");
  if (goalLabel) {
    goalLabel.textContent = `/ ${goal} ${goal === 1 ? "treino" : "treinos"}`;
    goalLabel.title = "Clique para alterar sua meta semanal no perfil";
    goalLabel.style.cursor = "pointer";
    goalLabel.onclick = () => {
      navigate("profile");
      setTimeout(() => document.getElementById("input-weekly-goal")?.focus(), 60);
    };
  }
  document.getElementById("week-bar").style.width =
    `${Math.min(100, (weekSessions.length / goal) * 100)}%`;
  const trainedDays = new Set(
    weekSessions.map((s) => new Date(s.date).getDay()),
  );
  document.querySelectorAll("#week-days [data-day]").forEach((span) => {
    const dayNum = Number(span.dataset.day);
    const icon = span.querySelector("i");
    if (icon) icon.classList.toggle("done", trainedDays.has(dayNum));
  });
  const todayKey = selectedWorkout || "A";
  const todayW = getWorkout(todayKey);
  const pillEl = document.getElementById("today-card-pill");
  if (pillEl && todayW) {
    const todayStr = new Date().toLocaleDateString("pt-BR");
    const trainedToday = sessions.some(
      (s) =>
        new Date(s.date).toLocaleDateString("pt-BR") === todayStr &&
        s.key === todayKey,
    );
    const isScheduledToday = todayW.day === getTodayWeekdayName();
    pillEl.textContent = trainedToday
      ? `✓ CONCLUÍDO HOJE · ${(todayW.day || "LIVRE").replace("-feira", "").toUpperCase()}`
      : isScheduledToday
        ? `TREINO DE HOJE · ${todayW.day.replace("-feira", "").toUpperCase()}`
        : `FICHA SELECIONADA · ${(todayW.day || "LIVRE").replace("-feira", "").toUpperCase()}`;
  }
  const titleEl = document.getElementById("today-workout-title");
  if (titleEl && todayW) {
    titleEl.innerHTML = `Treino ${escapeHtml(todayKey)} <span>·</span> ${escapeHtml(todayW.name)}`;
  }
  const metaEl = document.getElementById("today-workout-meta");
  if (metaEl && todayW) {
    const estMin = Math.max(15, todayW.items.length * 8);
    metaEl.innerHTML = `<span>◈ ${todayW.items.length} exercícios</span><span>◷ ${estMin}–${estMin + 10} min</span>`;
  }
  const upcomingEl = document.getElementById("upcoming-grid");
  if (upcomingEl) {
    const badgeStyles = ["", "sage", "sand"];
    upcomingEl.innerHTML = allWorkoutKeys()
      .map((k, idx) => {
        const wk = getWorkout(k);
        const dayShort = (wk.day || "Livre").replace("-feira", "");
        const styleClass = badgeStyles[idx % badgeStyles.length];
        return `<button class="upcoming-card" data-workout="${escapeAttr(k)}"><span class="workout-letter ${styleClass}">${escapeHtml(k)}</span><span><strong>${escapeHtml(wk.name)}</strong><small>${wk.items.length} exercícios · ${escapeHtml(dayShort)}</small></span><span class="arrow">↗</span></button>`;
      })
      .join("");
  }
  document.getElementById("recent-list").innerHTML = sessions.length
    ? sessions
        .slice(0, 3)
        .map(
          (s, idx) =>
            `<div class="recent-item" role="button" tabindex="0" data-session-idx="${idx}" style="cursor:pointer"><span><strong>Treino ${escapeHtml(s.key)} — ${escapeHtml(s.name)}</strong><small>${new Date(s.date).toLocaleDateString("pt-BR")} · ${s.minutes} min${s.maxWeight ? ` · máx ${s.maxWeight} kg` : ""}</small></span><span>↗</span></div>`,
        )
        .join("")
    : `<p class="empty-state">Seus treinos concluídos aparecerão aqui.</p>`;
  document.querySelectorAll("#recent-list [data-session-idx]").forEach((el) => {
    const openFn = () => openSessionDetail(Number(el.dataset.sessionIdx));
    el.addEventListener("click", openFn);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  });
}
function openSessionDetail(idx) {
  const s = state.sessions[idx];
  if (!s) return;
  const dateFormatted = new Date(s.date).toLocaleString("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const detailsHtml =
    Array.isArray(s.details) && s.details.length
      ? s.details
          .map((d) => {
            const doneCount = (d.records || []).filter((r) => r.done).length;
            const cardio = isCardioExercise(d.name, d.group);
            const repsLabel = d.reps
              ? ` · ${d.reps} ${cardio ? "min" : isTimeBasedExercise(d.name, d.group, d.reps) ? "seg" : "reps"}`
              : "";
            const unitSuffix = cardio ? " min" : "kg";
            const weightsStr = (d.records || [])
              .filter((r) => r.weight !== null && r.weight !== "")
              .map((r) => `${r.weight}${unitSuffix}`)
              .join(", ");
            const fallbackRight = cardio
              ? doneCount > 0 && d.reps
                ? `${d.reps} min`
                : "Sem tempo"
              : "Sem carga";
            return `<div class="exercise-row" style="grid-template-columns:1fr auto"><div><strong>${escapeHtml(d.name)}</strong><small>${escapeHtml(d.group || "Geral")} · ${doneCount}/${(d.records || []).length} séries concluídas${repsLabel}</small>${d.note ? `<small style="display:block;color:var(--sage);margin-top:2px">📝 ${escapeHtml(d.note)}</small>` : ""}</div><span class="muted">${weightsStr ? escapeHtml(weightsStr) : fallbackRight}</span></div>`;
          })
          .join("")
      : `<p class="empty-state">Sem detalhamento de séries para esta sessão.</p>`;
  openFormModal(`
    <p class="eyebrow">RESUMO DA SESSÃO</p>
    <h2 id="form-modal-title">Treino ${escapeHtml(s.key)} — ${escapeHtml(s.name)}</h2>
    <p class="muted">${escapeHtml(dateFormatted)} · Duração: ${s.minutes} min</p>
    <div style="margin:16px 0">${detailsHtml}</div>
    <div class="form-actions">
      <button type="button" class="button button-secondary" id="sd-delete">Excluir registro</button>
      <button type="button" class="button button-primary" id="sd-close">Fechar</button>
    </div>
  `);
  document
    .getElementById("sd-close")
    .addEventListener("click", closeFormModal);
  document.getElementById("sd-delete").addEventListener("click", async () => {
    if (!confirm("Deseja excluir este treino do seu histórico?")) return;
    const removed = state.sessions.splice(idx, 1)[0];
    if (removed?.date) {
      const normRemoved = normalizeIsoDate(removed.date);
      if (!state.deletedSessions.includes(normRemoved)) {
        state.deletedSessions.push(normRemoved);
      }
    }
    saveState();
    if (supabaseClient && currentUser && removed?.date) {
      try {
        const candidates = Array.from(
          new Set([removed.date, normalizeIsoDate(removed.date)]),
        );
        const { error } = await supabaseClient
          .from("workout_sessions")
          .delete()
          .eq("user_id", currentUser.id)
          .in("session_date", candidates);
        if (!error) {
          state.deletedSessions = state.deletedSessions.filter(
            (d) => d !== normalizeIsoDate(removed.date),
          );
          saveState();
        }
      } catch {}
    }
    closeFormModal();
    renderHome();
    renderProgress();
    showToast("Registro de treino excluído.");
  });
}
function renderProgress() {
  const sessions = state.sessions;
  const weekSessions = getWeekSessions(sessions);
  const totalMinutes = sessions.reduce((n, s) => n + s.minutes, 0);
  document.getElementById("stat-workouts").textContent = sessions.length;
  document.getElementById("stat-time").textContent =
    totalMinutes === 0
      ? "0h"
      : totalMinutes < 60
        ? `${totalMinutes}m`
        : `${Math.floor(totalMinutes / 60)}h${totalMinutes % 60 ? ` ${totalMinutes % 60}m` : ""}`;
  document.getElementById("stat-week").textContent = weekSessions.length;
  document.getElementById("history-list").innerHTML = sessions.length
    ? sessions
        .map(
          (s, idx) =>
            `<div class="history-item" role="button" tabindex="0" data-session-idx="${idx}" style="cursor:pointer"><span><strong>Treino ${escapeHtml(s.key)} — ${escapeHtml(s.name)}</strong><small>${new Date(s.date).toLocaleString("pt-BR", { dateStyle: "medium" })}${s.sets !== undefined ? ` · ${s.sets} séries` : ""}${s.maxWeight ? ` · máx ${s.maxWeight} kg` : ""}</small></span><strong>${s.minutes} min ↗</strong></div>`,
        )
        .join("")
    : `<p class="empty-state">Você ainda não concluiu nenhum treino.</p>`;
  document
    .querySelectorAll("#history-list [data-session-idx]")
    .forEach((el) => {
      const openFn = () => openSessionDetail(Number(el.dataset.sessionIdx));
      el.addEventListener("click", openFn);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openFn();
        }
      });
    });
  const canvas = document.getElementById("progress-chart");
  if (!canvas || !window.Chart) return;
  if (chart) chart.destroy();
  const filterSelect = document.getElementById("chart-exercise-filter");
  const selectedExFilter = filterSelect ? filterSelect.value : "__ALL__";
  if (filterSelect) {
    const groupOrder = [
      "Pernas",
      "Glúteos",
      "Costas",
      "Peito",
      "Ombros",
      "Braços",
      "Abdômen",
      "Cardio",
    ];
    const groupedMap = new Map();
    const seenLower = new Set();
    allExercises().forEach((ex) => {
      const g = ex.group || "Outros";
      if (!groupedMap.has(g)) groupedMap.set(g, []);
      groupedMap.get(g).push(ex.name);
      seenLower.add(ex.name.toLocaleLowerCase("pt-BR"));
    });
    sessions.forEach((s) => {
      if (!Array.isArray(s.details)) return;
      s.details.forEach((d) => {
        if (!d?.name) return;
        const keyLower = String(d.name).toLocaleLowerCase("pt-BR");
        if (seenLower.has(keyLower)) return;
        seenLower.add(keyLower);
        const g = d.group || "Outros";
        if (!groupedMap.has(g)) groupedMap.set(g, []);
        groupedMap.get(g).push(d.name);
      });
    });
    const sortedGroups = [
      ...groupOrder.filter((g) => groupedMap.has(g)),
      ...Array.from(groupedMap.keys()).filter((g) => !groupOrder.includes(g)),
    ];
    filterSelect.innerHTML =
      `<option value="__ALL__">Geral (maior carga)</option>` +
      sortedGroups
        .map(
          (g) =>
            `<optgroup label="${escapeAttr(g)}">${groupedMap
              .get(g)
              .map(
                (name) =>
                  `<option value="${escapeAttr(name)}" ${name === selectedExFilter ? "selected" : ""}>${escapeHtml(name)}</option>`,
              )
              .join("")}</optgroup>`,
        )
        .join("");
  }
  const filterLower = selectedExFilter.toLocaleLowerCase("pt-BR");
  const filteredSessions =
    selectedExFilter === "__ALL__"
      ? sessions
      : sessions.filter(
          (s) =>
            Array.isArray(s.details) &&
            s.details.some(
              (d) =>
                String(d.name || "").toLocaleLowerCase("pt-BR") === filterLower,
            ),
        );
  const recentChronological = filteredSessions.slice(0, 8).reverse();
  const hasRealData = recentChronological.length > 0;
  const labels = hasRealData
    ? recentChronological.map(
        (s) =>
          `${new Date(s.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })} (${s.key})`,
      )
    : ["Início", "Semana 2", "Semana 3", "Semana 4"];
  const dataPoints = hasRealData
    ? recentChronological.map((s) => {
        if (selectedExFilter === "__ALL__") {
          return s.maxWeight || s.avgWeight || 0;
        }
        const detail = s.details?.find(
          (d) =>
            String(d.name || "").toLocaleLowerCase("pt-BR") === filterLower,
        );
        const wts = (detail?.records || [])
          .map((r) => Number(r.weight))
          .filter((w) => !Number.isNaN(w) && w > 0);
        return wts.length ? Math.max(...wts) : 0;
      })
    : [0, 0, 0, 0];
  const isFilteredCardio =
    selectedExFilter !== "__ALL__" &&
    isCardioExercise(
      selectedExFilter,
      allExercises().find(
        (x) => x.name.toLocaleLowerCase("pt-BR") === filterLower,
      )?.group,
    );
  const noteEl = document.getElementById("chart-note");
  const footnoteEl = document.getElementById("chart-footnote");
  if (noteEl) {
    noteEl.textContent = hasRealData
      ? isFilteredCardio
        ? "Tempo por sessão (min)"
        : "Maior carga por sessão (kg)"
      : "Exemplo demonstrativo";
  }
  if (footnoteEl) {
    footnoteEl.textContent = hasRealData
      ? isFilteredCardio
        ? "Evolução do tempo registrado nas suas últimas sessões deste exercício."
        : "Evolução da carga máxima registrada nas suas últimas sessões concluídas."
      : "Os registros reais aparecerão aqui conforme você concluir seus treinos.";
  }
  chart = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: isFilteredCardio
            ? "Tempo registrado (min)"
            : "Carga registrada (kg)",
          data: dataPoints,
          borderColor: "#788d72",
          backgroundColor: "rgba(120,141,114,.12)",
          fill: true,
          tension: 0.35,
          pointBackgroundColor: "#34483b",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#eff0ea" },
          ticks: { font: { size: 10 } },
        },
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      },
    },
  });
}
function escapeHtml(v) {
  return String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function escapeAttr(v) {
  return escapeHtml(v);
}
const SUPABASE_CFG_KEY = "mysets-supabase-cfg";
const LEGACY_SUPABASE_CFG_KEY = "fit-companion-supabase-cfg";
const MIN_NEW_PASSWORD = 8;
let supabaseClient = null,
  currentUser = null,
  isSyncing = false,
  showCloudConfigForm = false;

function getSupabaseCredentials() {
  const winCfg = window.MYSETS_SUPABASE_CONFIG || {};
  if (winCfg.url && winCfg.anonKey) {
    return { url: winCfg.url.trim(), anonKey: winCfg.anonKey.trim() };
  }
  try {
    const rawCfg =
      localStorage.getItem(SUPABASE_CFG_KEY) ||
      localStorage.getItem(LEGACY_SUPABASE_CFG_KEY);
    const saved = JSON.parse(rawCfg) || {};
    if (
      typeof saved.url === "string" &&
      typeof saved.anonKey === "string" &&
      saved.url &&
      saved.anonKey
    ) {
      return {
        url: saved.url.trim(),
        anonKey: saved.anonKey.trim(),
      };
    }
  } catch {}
  return { url: "", anonKey: "" };
}

function getAuthRedirectUrl() {
  return window.location.protocol.startsWith("http")
    ? window.location.origin + window.location.pathname
    : undefined;
}

function authErrorMessage(error, fallbackPrefix) {
  const msg = String(error?.message || "");
  if (/invalid login credentials/i.test(msg)) return "E-mail ou senha incorretos.";
  if (/email not confirmed/i.test(msg)) {
    return "Confirme seu e-mail antes de entrar.";
  }
  if (/already registered|already exists/i.test(msg)) {
    return "Este e-mail já está cadastrado! Use o botão Entrar.";
  }
  if (/rate limit|too many|429|security purposes/i.test(msg)) {
    return "Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.";
  }
  if (
    /fetch|network|failed to|timeout/i.test(msg) ||
    error?.name === "AuthRetryableFetchError"
  ) {
    return "Sem conexão com a internet. Verifique sua rede e tente novamente.";
  }
  if (/password/i.test(msg) && /(short|least|weak|characters)/i.test(msg)) {
    return "Senha muito fraca. Use pelo menos 8 caracteres.";
  }
  return `${fallbackPrefix}: ${msg || "tente novamente."}`;
}

/* Desabilita os botões do formulário enquanto a requisição está em andamento
   (evita cadastros/logins duplicados) e trata falhas inesperadas de rede. */
async function runBusy(container, fn) {
  const buttons = [...container.querySelectorAll("button")];
  buttons.forEach((b) => (b.disabled = true));
  try {
    await fn();
  } catch {
    showToast("Sem conexão com a internet. Verifique sua rede e tente novamente.");
  } finally {
    buttons.forEach((b) => {
      if (b.isConnected) b.disabled = false;
    });
  }
}

async function initSupabase() {
  const { url, anonKey } = getSupabaseCredentials();
  if (!url || !anonKey || !window.supabase?.createClient) {
    supabaseClient = null;
    currentUser = null;
    renderCloudSection();
    return;
  }
  try {
    if (!supabaseClient) {
      supabaseClient = window.supabase.createClient(url, anonKey);
      supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === "INITIAL_SESSION") return;
        currentUser = session?.user || null;
        // Executa fora do callback para não bloquear o lock interno do Supabase.
        setTimeout(() => {
          renderCloudSection();
          if (event === "PASSWORD_RECOVERY") {
            openPasswordRecoveryForm();
          } else if (
            currentUser &&
            event !== "TOKEN_REFRESHED" &&
            event !== "USER_UPDATED"
          ) {
            syncWithCloud();
          }
        }, 0);
      });
    }
    const { data } = await supabaseClient.auth.getSession();
    currentUser = data?.session?.user || null;
    renderCloudSection();
    if (currentUser) await syncWithCloud();
  } catch {
    supabaseClient = null;
    currentUser = null;
    renderCloudSection();
  }
}

function openPasswordRecoveryForm() {
  openFormModal(`
    <p class="eyebrow">RECUPERAÇÃO DE ACESSO</p>
    <h2 id="form-modal-title">Definir nova senha</h2>
    <p class="muted">Escolha uma nova senha com pelo menos ${MIN_NEW_PASSWORD} caracteres.</p>
    <form id="password-reset-form" class="form-grid" style="margin-top:16px">
      <label class="form-field">
        <span>Nova senha</span>
        <input type="password" id="pr-password" minlength="${MIN_NEW_PASSWORD}" autocomplete="new-password" required />
      </label>
      <label class="form-field">
        <span>Confirmar nova senha</span>
        <input type="password" id="pr-confirm" minlength="${MIN_NEW_PASSWORD}" autocomplete="new-password" required />
      </label>
      <div class="form-actions">
        <button type="button" class="button button-secondary" id="pr-cancel">Cancelar</button>
        <button type="submit" class="button button-primary">Salvar nova senha</button>
      </div>
    </form>
  `);
  document.getElementById("pr-cancel").addEventListener("click", closeFormModal);
  const form = document.getElementById("password-reset-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pwd = document.getElementById("pr-password").value;
    if (pwd !== document.getElementById("pr-confirm").value) {
      showToast("As senhas não conferem.");
      return;
    }
    runBusy(form, async () => {
      const { error } = await supabaseClient.auth.updateUser({ password: pwd });
      if (error) {
        showToast(authErrorMessage(error, "Erro ao alterar a senha"));
        return;
      }
      closeFormModal();
      showToast("Senha alterada com sucesso!");
    });
  });
}

function renderCloudSection() {
  const area = document.getElementById("cloud-auth-area");
  const statusPill = document.getElementById("cloud-status-pill");
  const modePill = document.getElementById("profile-mode-pill");
  const subtitle = document.getElementById("profile-subtitle");
  if (!area) return;
  const creds = getSupabaseCredentials();
  const hasCreds = Boolean(creds.url && creds.anonKey);
  const isHardcodedConfig = Boolean(
    window.MYSETS_SUPABASE_CONFIG?.url && window.MYSETS_SUPABASE_CONFIG?.anonKey,
  );

  if (!hasCreds || showCloudConfigForm) {
    if (statusPill) statusPill.textContent = "Modo local";
    if (modePill) modePill.textContent = "Modo local";
    if (subtitle) subtitle.textContent = "Perfil local personalizado";
    area.innerHTML = `
      <form id="supabase-cfg-form" class="form-grid">
        <label class="form-field">
          <span>URL do Projeto Supabase</span>
          <input type="url" id="sb-url" placeholder="https://seu-projeto.supabase.co" value="${escapeAttr(creds.url)}" required />
        </label>
        <label class="form-field">
          <span>Anon Public Key</span>
          <input type="text" id="sb-key" placeholder="sb_publishable_..." value="${escapeAttr(creds.anonKey)}" required />
        </label>
        <div class="form-actions">
          ${hasCreds ? `<button type="button" class="button button-secondary" id="sb-cancel-cfg">Voltar</button><button type="button" class="button button-secondary" id="sb-clear-cfg">Desconectar projeto</button>` : ""}
          <button type="submit" class="button button-primary">Conectar Supabase</button>
        </div>
      </form>
    `;
    document
      .getElementById("supabase-cfg-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const url = document.getElementById("sb-url").value.trim();
        const anonKey = document.getElementById("sb-key").value.trim();
        if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
          showToast("Informe a URL do projeto no formato https://xxxx.supabase.co");
          return;
        }
        try {
          localStorage.setItem(
            SUPABASE_CFG_KEY,
            JSON.stringify({ url, anonKey }),
          );
        } catch {}
        showCloudConfigForm = false;
        supabaseClient = null;
        showToast("Credenciais do Supabase salvas!");
        await initSupabase();
      });
    document.getElementById("sb-cancel-cfg")?.addEventListener("click", () => {
      showCloudConfigForm = false;
      renderCloudSection();
    });
    document.getElementById("sb-clear-cfg")?.addEventListener("click", () => {
      try {
        localStorage.removeItem(SUPABASE_CFG_KEY);
        localStorage.removeItem(LEGACY_SUPABASE_CFG_KEY);
      } catch {}
      supabaseClient = null;
      currentUser = null;
      showCloudConfigForm = false;
      renderCloudSection();
      showToast("Projeto Supabase desconectado. Usando modo local.");
    });
    return;
  }

  if (!currentUser) {
    if (statusPill) statusPill.textContent = "Desconectado";
    if (modePill) modePill.textContent = "Modo local";
    if (subtitle) subtitle.textContent = "Entre na conta para sincronizar";
    area.innerHTML = `
      <form id="supabase-auth-form" class="form-grid">
        <div class="form-row">
          <label class="form-field">
            <span>Seu e-mail</span>
            <input type="email" id="sb-email" placeholder="voce@exemplo.com" autocomplete="email" required />
          </label>
          <label class="form-field">
            <span>Senha (mín. ${MIN_NEW_PASSWORD} caracteres ao criar conta)</span>
            <input type="password" id="sb-password" minlength="6" placeholder="••••••••" autocomplete="current-password" required />
          </label>
        </div>
        <div class="form-actions">
          ${!isHardcodedConfig ? `<button type="button" class="button button-secondary" id="sb-edit-cfg">Credenciais da API</button>` : ""}
          <button type="button" class="text-button" id="sb-forgot" style="margin-right:auto">Esqueci a senha</button>
          <button type="button" class="button button-secondary" id="sb-signup">Criar conta</button>
          <button type="submit" class="button button-primary">Entrar</button>
        </div>
      </form>
    `;
    const authForm = document.getElementById("supabase-auth-form");
    document.getElementById("sb-edit-cfg")?.addEventListener("click", () => {
      showCloudConfigForm = true;
      renderCloudSection();
    });
    const ensureClient = async () => {
      if (!supabaseClient) await initSupabase();
      if (!supabaseClient) {
        showToast("Não foi possível inicializar a conexão com a nuvem.");
        return false;
      }
      return true;
    };
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      runBusy(authForm, async () => {
        if (!(await ensureClient())) return;
        const email = document.getElementById("sb-email").value.trim();
        const password = document.getElementById("sb-password").value;
        const { error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });
        showToast(
          error
            ? authErrorMessage(error, "Erro ao entrar")
            : "Login realizado! Sincronizando dados...",
        );
      });
    });
    document.getElementById("sb-signup").addEventListener("click", () => {
      runBusy(authForm, async () => {
        if (!(await ensureClient())) return;
        const emailInput = document.getElementById("sb-email");
        const email = emailInput.value.trim();
        const password = document.getElementById("sb-password").value;
        if (!email || !emailInput.checkValidity()) {
          showToast("Informe um e-mail válido.");
          return;
        }
        if (password.length < MIN_NEW_PASSWORD) {
          showToast(
            `Para criar a conta, use uma senha com no mínimo ${MIN_NEW_PASSWORD} caracteres.`,
          );
          return;
        }
        const redirectUrl = getAuthRedirectUrl();
        const { data, error } = await supabaseClient.auth.signUp({
          email,
          password,
          options: redirectUrl ? { emailRedirectTo: redirectUrl } : undefined,
        });
        if (error) {
          showToast(authErrorMessage(error, "Erro no cadastro"));
          return;
        }
        if (
          data?.user &&
          Array.isArray(data.user.identities) &&
          data.user.identities.length === 0
        ) {
          showToast("Este e-mail já está cadastrado! Use o botão Entrar.");
          return;
        }
        showToast(
          data?.session
            ? "Conta criada e conectada! Sincronizando dados..."
            : "Conta criada! Confirme o link enviado para o seu e-mail antes de entrar.",
        );
      });
    });
    document.getElementById("sb-forgot").addEventListener("click", () => {
      runBusy(authForm, async () => {
        if (!(await ensureClient())) return;
        const emailInput = document.getElementById("sb-email");
        const email = emailInput.value.trim();
        if (!email || !emailInput.checkValidity()) {
          showToast("Digite seu e-mail no campo acima para receber o link de redefinição.");
          emailInput.focus();
          return;
        }
        const redirectUrl = getAuthRedirectUrl();
        const { error } = await supabaseClient.auth.resetPasswordForEmail(
          email,
          redirectUrl ? { redirectTo: redirectUrl } : undefined,
        );
        showToast(
          error
            ? authErrorMessage(error, "Erro ao solicitar redefinição")
            : "Se este e-mail estiver cadastrado, enviaremos um link para redefinir a senha.",
        );
      });
    });
    return;
  }

  if (statusPill) statusPill.textContent = "Nuvem ativa";
  if (modePill) modePill.textContent = "Nuvem ativa";
  if (subtitle)
    subtitle.textContent = `Sincronizado (${currentUser.email || "Online"})`;
  area.innerHTML = `
    <div class="detail-actions">
      <button type="button" class="button button-primary" id="sb-sync-now">↻ Sincronizar agora</button>
      ${!isHardcodedConfig ? `<button type="button" class="button button-secondary" id="sb-edit-cfg">Credenciais da API</button>` : ""}
      <button type="button" class="button button-secondary" id="sb-signout">Sair da conta</button>
    </div>
  `;
  document
    .getElementById("sb-sync-now")
    .addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      btn.disabled = true;
      try {
        await syncWithCloud(true);
      } finally {
        btn.disabled = false;
      }
    });
  document.getElementById("sb-edit-cfg")?.addEventListener("click", () => {
    showCloudConfigForm = true;
    renderCloudSection();
  });
  document.getElementById("sb-signout").addEventListener("click", async () => {
    if (!supabaseClient) return;
    // Tenta enviar alterações pendentes antes de limpar os dados deste aparelho.
    const synced = await syncWithCloud(false);
    if (
      !synced &&
      !confirm(
        "Não foi possível sincronizar agora. Se você sair, as alterações feitas apenas neste aparelho serão perdidas. Deseja sair mesmo assim?",
      )
    ) {
      return;
    }
    try {
      await supabaseClient.auth.signOut({ scope: "local" });
    } catch {}
    try {
      localStorage.removeItem("mysets-name-confirmed-v1");
    } catch {}
    currentUser = null;
    state = normalizeState(null);
    selectedWorkout = "A";
    stopRest();
    activeSession = null;
    saveActiveSession();
    renderActiveWorkoutBar();
    selectedWorkout = getSuggestedWorkoutForToday() || "A";
    saveState();
    renderProfile();
    renderWorkout();
    renderExercises();
    renderHome();
    renderProgress();
    renderCloudSection();
    showToast("Você saiu da sua conta. Seus dados continuam salvos na nuvem.");
  });
}

async function pushProfileToCloud() {
  if (!supabaseClient || !currentUser) return false;
  const cleanName = cleanText(state.profile?.name, 32);
  if (!cleanName) return true;
  try {
    const { error } = await supabaseClient.from("profiles").upsert({
      id: currentUser.id,
      name: cleanName,
      weekly_goal: state.profile.weeklyGoal,
      updated_at: state.profile.updatedAt || new Date().toISOString(),
    });
    return !error;
  } catch {
    return false;
  }
}

async function pushWorkoutToCloud(key, wk) {
  if (!supabaseClient || !currentUser) return false;
  try {
    const { error } = await supabaseClient.from("custom_workouts").upsert(
      {
        user_id: currentUser.id,
        workout_key: key,
        name: wk.name,
        day: wk.day || "Livre",
        items: wk.items,
        updated_at: wk.updatedAt || new Date().toISOString(),
      },
      { onConflict: "user_id,workout_key" },
    );
    return !error;
  } catch {
    return false;
  }
}

async function deleteWorkoutFromCloud(key) {
  if (!supabaseClient || !currentUser) return false;
  try {
    const { error } = await supabaseClient
      .from("custom_workouts")
      .delete()
      .eq("user_id", currentUser.id)
      .eq("workout_key", key);
    if (!error) {
      state.deletedWorkouts = (state.deletedWorkouts || []).filter(
        (k) => k !== key,
      );
      saveState();
    }
    return !error;
  } catch {
    return false;
  }
}

// Escapa curingas do LIKE (%, _ e \) para que o nome seja comparado literalmente.
function escapeLikePattern(s) {
  return String(s).replace(/[\\%_]/g, "\\$&");
}

async function deleteExerciseFromCloud(name) {
  if (!supabaseClient || !currentUser) return false;
  try {
    const { error } = await supabaseClient
      .from("custom_exercises")
      .delete()
      .eq("user_id", currentUser.id)
      .ilike("name", escapeLikePattern(name));
    if (!error) {
      state.deletedExercises = (state.deletedExercises || []).filter(
        (n) => n.toLocaleLowerCase("pt-BR") !== name.toLocaleLowerCase("pt-BR"),
      );
      saveState();
    }
    return !error;
  } catch {
    return false;
  }
}

async function pushExerciseToCloud(ex) {
  if (!supabaseClient || !currentUser) return false;
  try {
    const { error } = await supabaseClient.from("custom_exercises").upsert(
      {
        user_id: currentUser.id,
        name: ex.name,
        group_name: ex.group,
        equipment: ex.equipment || "Equipamento livre",
        video: ex.video || "",
        how: ex.how,
        care: ex.care || "",
        symbol: ex.symbol || "✣",
        updated_at: ex.updatedAt || new Date().toISOString(),
      },
      { onConflict: "user_id,name" },
    );
    return !error;
  } catch {
    return false;
  }
}

async function pushSessionToCloud(s) {
  if (!supabaseClient || !currentUser) return false;
  try {
    const { error } = await supabaseClient.from("workout_sessions").upsert(
      {
        user_id: currentUser.id,
        workout_key: s.key,
        workout_name: s.name,
        session_date: s.date,
        minutes: s.minutes,
        exercises_count: s.exercises,
        sets_count: s.sets,
        avg_weight: s.avgWeight || 0,
        max_weight: s.maxWeight || 0,
        details: s.details || [],
      },
      { onConflict: "user_id,session_date" },
    );
    return !error;
  } catch {
    return false;
  }
}

function normalizeIsoDate(d) {
  try {
    return new Date(d).toISOString();
  } catch {
    return String(d);
  }
}

/* Sincroniza com o Supabase (Last-Write-Wins por updatedAt).
   Retorna true somente se TUDO foi sincronizado sem erro. */
async function syncWithCloud(notify = false) {
  if (!supabaseClient || !currentUser || isSyncing) return false;
  isSyncing = true;
  let ok = true;
  try {
    if (state.ownerId && state.ownerId !== currentUser.id) {
      state = normalizeState(null, currentUser.id);
      selectedWorkout = "A";
      stopRest();
      activeSession = null;
      saveActiveSession();
      renderActiveWorkoutBar();
    }
    state.ownerId = currentUser.id;

    // 1. Processar exclusões feitas enquanto estava offline
    for (const delKey of [...(state.deletedWorkouts || [])]) {
      if (!(await deleteWorkoutFromCloud(delKey))) ok = false;
    }
    for (const delEx of [...(state.deletedExercises || [])]) {
      if (!(await deleteExerciseFromCloud(delEx))) ok = false;
    }
    for (const delSessDate of [...(state.deletedSessions || [])]) {
      try {
        const { error } = await supabaseClient
          .from("workout_sessions")
          .delete()
          .eq("user_id", currentUser.id)
          .eq("session_date", delSessDate);
        if (!error) {
          state.deletedSessions = state.deletedSessions.filter(
            (d) => d !== delSessDate,
          );
        } else ok = false;
      } catch {
        ok = false;
      }
    }

    const [profRes, wkRes, exRes, sessRes] = await Promise.all([
      supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .maybeSingle(),
      supabaseClient
        .from("custom_workouts")
        .select("*")
        .eq("user_id", currentUser.id),
      supabaseClient
        .from("custom_exercises")
        .select("*")
        .eq("user_id", currentUser.id),
      supabaseClient
        .from("workout_sessions")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("session_date", { ascending: false }),
    ]);
    const failed = [profRes, wkRes, exRes, sessRes].find((r) => r.error);
    if (failed) throw failed.error;

    if (profRes.data) {
      const cloudName = cleanText(profRes.data.name, 32);
      let confirmed = false;
      try {
        confirmed = localStorage.getItem("mysets-name-confirmed-v1") === "1";
      } catch {}
      const effectiveCloudName =
        cloudName === "Ana" && !confirmed ? "" : cloudName;
      if (effectiveCloudName && effectiveCloudName !== "Ana") {
        try {
          localStorage.setItem("mysets-name-confirmed-v1", "1");
        } catch {}
      }
      const localTime = state.profile?.updatedAt
        ? new Date(state.profile.updatedAt).getTime()
        : 0;
      const cloudTime = profRes.data.updated_at
        ? new Date(profRes.data.updated_at).getTime()
        : 0;
      if (localTime > cloudTime && cleanText(state.profile?.name, 32)) {
        if (!(await pushProfileToCloud())) ok = false;
      } else {
        state.profile = normalizeProfile({
          name: effectiveCloudName || state.profile.name,
          weeklyGoal:
            Number(profRes.data.weekly_goal) || state.profile.weeklyGoal,
          updatedAt: profRes.data.updated_at || new Date().toISOString(),
        });
      }
    } else if (cleanText(state.profile?.name, 32)) {
      if (!(await pushProfileToCloud())) ok = false;
    }

    if (Array.isArray(wkRes.data)) {
      const cloudMap = new Map(wkRes.data.map((r) => [r.workout_key, r]));
      const deletedSet = new Set(state.deletedWorkouts || []);
      for (const [k, localWk] of Object.entries(state.customWorkouts)) {
        const cloudRow = cloudMap.get(k);
        const localTime = localWk.updatedAt
          ? new Date(localWk.updatedAt).getTime()
          : 0;
        const cloudTime = cloudRow?.updated_at
          ? new Date(cloudRow.updated_at).getTime()
          : 0;
        if (!cloudRow || localTime > cloudTime) {
          if (!(await pushWorkoutToCloud(k, localWk))) ok = false;
        }
      }
      wkRes.data.forEach((r) => {
        if (!WORKOUT_KEY_RE.test(r.workout_key || "")) return;
        if (deletedSet.has(r.workout_key)) return;
        const localWk = state.customWorkouts[r.workout_key];
        const localTime = localWk?.updatedAt
          ? new Date(localWk.updatedAt).getTime()
          : 0;
        const cloudTime = r.updated_at ? new Date(r.updated_at).getTime() : 0;
        if (!localWk || cloudTime >= localTime) {
          const norm = normalizeWorkout({
            name: r.name,
            day: r.day,
            items: r.items,
            updatedAt: r.updated_at,
          });
          if (norm) state.customWorkouts[r.workout_key] = norm;
        }
      });
    }

    if (Array.isArray(exRes.data)) {
      const cloudMap = new Map(
        exRes.data.map((r) => [
          String(r.name).toLocaleLowerCase("pt-BR"),
          r,
        ]),
      );
      const deletedExSet = new Set(
        (state.deletedExercises || []).map((n) =>
          n.toLocaleLowerCase("pt-BR"),
        ),
      );
      for (const localEx of state.customExercises) {
        const keyLower = localEx.name.toLocaleLowerCase("pt-BR");
        const cloudRow = cloudMap.get(keyLower);
        const localTime = localEx.updatedAt
          ? new Date(localEx.updatedAt).getTime()
          : 0;
        const cloudTime = cloudRow?.updated_at
          ? new Date(cloudRow.updated_at).getTime()
          : 0;
        if (!cloudRow || localTime > cloudTime) {
          if (!(await pushExerciseToCloud(localEx))) ok = false;
        }
      }
      const mergedMap = new Map(
        state.customExercises.map((x) => [x.name.toLocaleLowerCase("pt-BR"), x]),
      );
      exRes.data.forEach((r) => {
        const keyLower = String(r.name).toLocaleLowerCase("pt-BR");
        if (deletedExSet.has(keyLower)) return;
        const localEx = mergedMap.get(keyLower);
        const localTime = localEx?.updatedAt
          ? new Date(localEx.updatedAt).getTime()
          : 0;
        const cloudTime = r.updated_at ? new Date(r.updated_at).getTime() : 0;
        if (!localEx || cloudTime >= localTime) {
          const norm = normalizeExercise({
            name: r.name,
            group: r.group_name,
            equipment: r.equipment,
            video: r.video,
            how: r.how,
            care: r.care,
            symbol: r.symbol,
            updatedAt: r.updated_at,
          });
          if (norm) mergedMap.set(keyLower, norm);
        }
      });
      state.customExercises = Array.from(mergedMap.values());
    }

    if (Array.isArray(sessRes.data)) {
      const deletedSessSet = new Set(state.deletedSessions || []);
      const cloudDates = new Set(
        sessRes.data.map((r) => normalizeIsoDate(r.session_date)),
      );
      for (const localSess of state.sessions) {
        const normLocal = normalizeIsoDate(localSess.date);
        localSess.date = normLocal;
        if (!cloudDates.has(normLocal) && !deletedSessSet.has(normLocal)) {
          if (!(await pushSessionToCloud(localSess))) ok = false;
        }
      }
      const sessionMap = new Map();
      state.sessions.forEach((s) => {
        const norm = normalizeIsoDate(s.date);
        if (!deletedSessSet.has(norm)) sessionMap.set(norm, s);
      });
      sessRes.data.forEach((r) => {
        const normDate = normalizeIsoDate(r.session_date);
        if (deletedSessSet.has(normDate)) return;
        const norm = normalizeSession({
          key: r.workout_key,
          name: r.workout_name,
          date: normDate,
          minutes: r.minutes,
          exercises: r.exercises_count,
          sets: r.sets_count,
          avgWeight: r.avg_weight,
          maxWeight: r.max_weight,
          details: r.details,
        });
        if (norm) sessionMap.set(normDate, norm);
      });
      state.sessions = Array.from(sessionMap.values()).sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
    }

    if (!allWorkoutKeys().includes(selectedWorkout)) {
      selectedWorkout = getSuggestedWorkoutForToday() || "A";
      state.selectedWorkout = selectedWorkout;
    }
    saveState();
    renderProfile();
    renderWorkout();
    renderExercises();
    renderHome();
    renderProgress();
    if (
      cleanText(state.profile?.name, 32) &&
      document.getElementById("welcome-profile-form")
    ) {
      closeFormModal();
    } else if (!cleanText(state.profile?.name, 32)) {
      promptUserNameIfNeeded();
    }
    if (notify) {
      showToast(
        ok
          ? "Dados sincronizados com a nuvem!"
          : "Sincronização parcial: alguns itens serão reenviados depois.",
      );
    }
    return ok;
  } catch {
    if (notify) showToast("Não foi possível sincronizar no momento.");
    return false;
  } finally {
    isSyncing = false;
  }
}

window.addEventListener("online", () => {
  if (currentUser) syncWithCloud();
  else initSupabase();
});

const suggestedToday = getSuggestedWorkoutForToday();
if (suggestedToday) {
  selectedWorkout = suggestedToday;
}
renderProfile();
renderWorkout();
renderExercises();
renderHome();
renderProgress();
renderCloudSection();
restoreActiveSession();
initSupabase().finally(() => {
  promptUserNameIfNeeded();
});
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => reg.update())
      .catch(() => {});
  });
}
