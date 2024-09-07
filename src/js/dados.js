let jogos = [
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2015/06/84332-god-of-war-ii-playstation-2-front-cover.jpg",
      titulo: "God of War II",
      descricao: "Uma sequência épica, com batalhas ainda mais intensas e um enredo envolvente.",
      linkInfo: "https://www.playstation.com.com/en-us/games/god-of-war-ii/",
      tags: "jogo ação god war"
    },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2015/05/GTA_San_Andreas-Coverart.jpg",
      titulo: "Grand Theft Auto: San Andreas",
      descricao: "Um mundo aberto imenso e detalhado, com uma história épica.",
      linkInfo: "https://www.rockstargames.com/gta3",
      tags: "rockstar games aventura ação mundo aberto"
    },
    {
      linkCapa: "https://exemplo.com/imagem-metal-gear-solid-3.jpg",
      titulo: "Metal Gear Solid 3: Snake Eater",
      descricao: "Um dos melhores jogos da série, com uma história emocionante e jogabilidade inovadora.",
      linkInfo: "https://www.konami.com/games/metalgear/",
      tags: "metal gear franquia metal gear ação, jogo, game"
    },
    {
      linkCapa: "https://exemplo.com/imagem-monster-hunter-freedom.jpg",
      titulo: "Monster Hunter Freedom",
      descricao: "O primeiro Monster Hunter a chegar no ocidente, iniciando uma franquia de sucesso.",
      linkInfo: "https://www.capcom.co.jp/monsterhunter/",
      tags: "game ação aventura hunter"
    },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/06/Shin_Megami_Tensei_Persona_3_Portable_USA_PSP-Coverart.jpg",
      titulo: "Persona 3 Portable",
      descricao: "Um RPG tático com elementos de vida escolar, com uma história profunda.",
      linkInfo: "https://www.atlus.com/persona/",
      tags: "portátil ação fantasia sobrenatural"
    },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/06/BurnOut_USA_MULTi5_PROPER_READNFO_PSP-Coverart.jpg",
      titulo: "Burnout Legends",
      descricao: "Burnout Legends é um jogo de corrida frenético que traz a intensidade da série Burnout para o portátil PSP.",
      linkInfo: "https://en.m.wikipedia.org/wiki/Burnout_Legends",
      tags: "corrida combate veicular"
    },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/07/Gran_Turismo_USA_PSP-Coverart.jpg",
      titulo: "Gran Turismo",
      descricao: "Gran Turismo PSP oferece uma experiência de simulação de corrida realista, com uma vasta gama de carros e pistas para explorar.",
      linkInfo: "https://en.m.wikipedia.org/wiki/Gran_Turismo_(2009_video_game)",
      tags: "carros simulador corridas"
    },
    {
    linkCapa: "https://cdromance.org/wp-content/uploads/2018/05/53231_front.jpg",
    titulo: "Need for Speed: Underground",
    descricao: "Corridas de rua intensas com personalização extrema de carros.",
    linkInfo: "https://www.ea.com/games/need-for-speed/need-for-speed-underground",
    tags: "corrida tunning carros ação ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2018/05/60110_front.jpg",
      titulo: "Devil May Cry 3",
      descricao: "Ação frenética com combos e lutas contra demônios, um clássico do gênero.",
      linkInfo: "https://www.capcom.com/devilmaycry3/",
      tags: "ação hack and slash capcom ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2022/08/60143_front.jpg",
      titulo: "Midnight Club 3: DUB Edition",
      descricao: "Corridas de rua com personalização detalhada e uma trilha sonora vibrante.",
      linkInfo: "https://www.rockstargames.com/midnightclub3",
      tags: "corrida personalização ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2015/06/198187-god-of-war-playstation-2-front-cover.jpg",
      titulo: "God of War",
      descricao: "Um jogo de ação épico com lutas intensas e uma narrativa mitológica envolvente.",
      linkInfo: "https://www.playstation.com/god-of-war",
      tags: "ação mitologia hack and slash ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/07/Burnout_Dominator_USA_PSP-Coverart.jpg",
      titulo: "Burnout Dominator",
      descricao: "Corridas frenéticas com colisões épicas e adrenalina pura.",
      linkInfo: "https://en.wikipedia.org/wiki/Burnout_Dominator",
      tags: "corrida combate veicular ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/12/Twisted_Metal_Head_On_USA_PSP-Coverart.jpg",
      titulo: "Twisted Metal: Head-On",
      descricao: "Combates veiculares em arenas caóticas com personagens icônicos.",
      linkInfo: "https://www.playstation.com/twisted-metal-head-on",
      tags: "combate veicular ação psp"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2023/04/44996_front.jpg",
      titulo: "Ridge Racer",
      descricao: "Clássico jogo de corrida com controles precisos e gráficos vibrantes.",
      linkInfo: "https://en.wikipedia.org/wiki/Ridge_Racer_(PSP)",
      tags: "corrida arcade psp"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2013/07/The.Warriors.EUR_.PSP-Coverart.jpg",
      titulo: "The Warriors",
      descricao: "Ação em mundo aberto baseada no filme clássico, com lutas de gangues intensas.",
      linkInfo: "https://www.rockstargames.com/thewarriors",
      tags: "ação aventura mundo aberto ps2"
  },
    {
      linkCapa: "https://cdromance.org/wp-content/uploads/2021/04/0359-Syphon_Filter_Dark_Mirror_USA_READNFO_PSP-pSyPSP.jpg",
      titulo: "Syphon Filter: Dark Mirror",
      descricao: "Um jogo de ação e espionagem com uma narrativa envolvente e jogabilidade tática.",
      linkInfo: "https://en.wikipedia.org/wiki/Syphon_Filter:_Dark_Mirror",
      tags: "ação espionagem tático psp"
  },
];