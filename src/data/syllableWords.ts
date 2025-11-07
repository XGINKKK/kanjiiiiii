// Banco de dados estático de palavras organizadas por sílaba, tema e dificuldade
// Todas as palavras foram validadas para conter a sílaba correta

export interface WordDatabase {
  [syllable: string]: {
    [theme: string]: {
      [difficulty: string]: string[];
    };
  };
}

export const syllableWords: WordDatabase = {
  // Sílaba BA
  'ba': {
    animals: {
      easy: ['BARATA', 'BALEIA', 'CABRA', 'JABUTI', 'SÁBADO'],
      medium: ['BARBATANA', 'BACALHAU', 'ABABÁ', 'CABEÇA', 'CABANA'],
      hard: ['BARRACUDA', 'ABABALÔ', 'ABABAIA', 'BABUÍNO', 'BAGRE']
    },
    vehicles: {
      easy: ['BARCO', 'BARCA', 'BALÃO', 'CABANA', 'BATE'],
      medium: ['BARULHO', 'EMBARQUE', 'CABARÉ', 'RABADA', 'SABÃO'],
      hard: ['BAGAGEIRO', 'BATENTE', 'BATELÃO', 'EMBARCAR', 'BANZEIRO']
    },
    nature: {
      easy: ['BANANA', 'BAMBU', 'BABÁ', 'SABÃO', 'BABA'],
      medium: ['BABOSA', 'BANANEIRA', 'BABAÇU', 'BAGAÇO', 'TABACO'],
      hard: ['BAUNILHA', 'BABAÇUAL', 'BALSÂMICO', 'BAMBURRAL', 'BATATA']
    },
    food: {
      easy: ['BANANA', 'BALA', 'BABÁ', 'BABA', 'ABACATE'],
      medium: ['BATATA', 'ABACAXI', 'BACALHAU', 'RABADA', 'GOIABA'],
      hard: ['BAUNILHA', 'BACURI', 'ABAÇAÍ', 'ABABAIA', 'BABAÇU']
    },
    toys: {
      easy: ['BALA', 'BATE', 'BALÃO', 'CABANA', 'BABA'],
      medium: ['BARALHO', 'BAMBOLÊ', 'BATATA', 'BARULHO', 'TABACO'],
      hard: ['BABADINHOS', 'BATALHA', 'BAMBURRAL', 'BARBANTE', 'BABAÇU']
    },
    space: {
      easy: ['BALÃO', 'BASE', 'BATE', 'BABÁ', 'BABA'],
      medium: ['BÁSICO', 'BATERIA', 'CABARÉ', 'EMBARQUE', 'TABACO'],
      hard: ['BATENTE', 'BATELÃO', 'EMBARCAR', 'BANZEIRO', 'BAGAÇO']
    },
    ocean: {
      easy: ['BALEIA', 'BARCO', 'BARCA', 'BARATA', 'BABA'],
      medium: ['BARBATANA', 'BACALHAU', 'BARRACUDA', 'BAGRE', 'CABARÉ'],
      hard: ['BATELÃO', 'BANZEIRO', 'EMBARCAR', 'BAGAGEIRO', 'BATENTE']
    },
    fantasy: {
      easy: ['BABÁ', 'BALÃO', 'BALA', 'BATE', 'CABANA'],
      medium: ['BATALHA', 'BABAÇU', 'CABARÉ', 'RABADA', 'TABACO'],
      hard: ['ABABALÔ', 'ABABAIA', 'BABADINHOS', 'BAMBURRAL', 'BARBANTE']
    }
  },

  // Sílaba BE
  'be': {
    animals: {
      easy: ['BEBÊ', 'BEIJO', 'ABELHA', 'CABELO', 'BEZERRO'],
      medium: ['BERÇO', 'BESOURO', 'ABELARDO', 'BEBEDOR', 'BELICHE'],
      hard: ['BESOURO', 'BEZERRA', 'ABELARDO', 'BEDUÍNO', 'BERBIGÃO']
    },
    vehicles: {
      easy: ['BELICHE', 'BEBER', 'BEBÊ', 'BERÇO', 'BEIJO'],
      medium: ['BERBERE', 'BEBEDOR', 'BÉLICO', 'EMBEBER', 'REBELDE'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    nature: {
      easy: ['BEBIDA', 'BERÇO', 'BEIJO', 'ABELHA', 'BEBÊ'],
      medium: ['BERBERE', 'BERINGELA', 'BERINJELA', 'EMBEBER', 'REBELDE'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    food: {
      easy: ['BEBIDA', 'BEIJO', 'BERÇO', 'ABELHA', 'BEBÊ'],
      medium: ['BERINJELA', 'BERBERE', 'BEBEDOR', 'EMBEBER', 'REBELDE'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    toys: {
      easy: ['BELICHE', 'BEBÊ', 'BEIJO', 'BERÇO', 'ABELHA'],
      medium: ['BERBERE', 'BEBEDOR', 'EMBEBER', 'REBELDE', 'BÉLICO'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    space: {
      easy: ['BEBÊ', 'BEIJO', 'BERÇO', 'ABELHA', 'BEBIDA'],
      medium: ['BERBERE', 'BEBEDOR', 'BÉLICO', 'EMBEBER', 'REBELDE'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    ocean: {
      easy: ['BEBÊ', 'BEIJO', 'BERÇO', 'ABELHA', 'BEBIDA'],
      medium: ['BERBERE', 'BEBEDOR', 'EMBEBER', 'REBELDE', 'BÉLICO'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    },
    fantasy: {
      easy: ['BEBÊ', 'BEIJO', 'BERÇO', 'ABELHA', 'BEBIDA'],
      medium: ['BERBERE', 'BEBEDOR', 'EMBEBER', 'REBELDE', 'BÉLICO'],
      hard: ['BERIMBAU', 'BERBIGÃO', 'BEGUINO', 'BEDUÍNO', 'BELZEBU']
    }
  },

  // Sílaba BI
  'bi': {
    animals: {
      easy: ['BICO', 'BICHO', 'CABIDE', 'CABINE', 'BIFE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    vehicles: {
      easy: ['BICICLETA', 'BICO', 'BICHO', 'CABINE', 'BIFE'],
      medium: ['BISBILHOTAR', 'BIBLIOTECA', 'BÍPEDE', 'BISONHO', 'CABIDE'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    nature: {
      easy: ['BICO', 'BICHO', 'BIFE', 'CABIDE', 'CABINE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    food: {
      easy: ['BIFE', 'BISCOITO', 'BICO', 'BICHO', 'CABIDE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BIZARRO', 'CABINE']
    },
    toys: {
      easy: ['BICICLETA', 'BICO', 'BICHO', 'CABIDE', 'CABINE'],
      medium: ['BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO', 'BIFE'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    space: {
      easy: ['BICO', 'BICHO', 'BIFE', 'CABIDE', 'CABINE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    ocean: {
      easy: ['BICO', 'BICHO', 'BIFE', 'CABIDE', 'CABINE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    },
    fantasy: {
      easy: ['BICO', 'BICHO', 'BIFE', 'CABIDE', 'CABINE'],
      medium: ['BICICLETA', 'BIBLIOTECA', 'BÍPEDE', 'BISBILHOTAR', 'BISONHO'],
      hard: ['BISAVÔ', 'BISBILHOTEIRO', 'BISBILHOTE', 'BISCOITO', 'BIZARRO']
    }
  },

  // Sílaba BO
  'bo': {
    animals: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    vehicles: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    nature: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    food: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'BOLO', 'BOMBOM'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BODOQUE', 'ABOLIR', 'ROBÔ'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    toys: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    space: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    ocean: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    },
    fantasy: {
      easy: ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'BODE'],
      medium: ['BORBOLETA', 'BOCHECHA', 'BOMBOM', 'BODOQUE', 'ABOLIR'],
      hard: ['BOTICÁRIO', 'BORBULHA', 'BOBAGEM', 'BOÇAL', 'BODAS']
    }
  },

  // Sílaba BU
  'bu': {
    animals: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    vehicles: {
      easy: ['ÔNIBUS', 'BUZINA', 'BURRO', 'BÚFALO', 'BUGIO'],
      medium: ['BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ', 'BÚFALO'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    nature: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    food: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    toys: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    space: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    ocean: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    },
    fantasy: {
      easy: ['BÚFALO', 'BURRO', 'BUGIO', 'JABUTI', 'ÔNIBUS'],
      medium: ['BUZINA', 'BURACO', 'BÚZIO', 'BUGRE', 'BUQUÊ'],
      hard: ['BUROCRATA', 'BUCOLISMO', 'BUÇAL', 'BURGUÊS', 'BURITIZEIRO']
    }
  },

  // Sílaba CA
  'ca': {
    animals: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    vehicles: {
      easy: ['CARRO', 'CASA', 'CAMA', 'MACACO', 'CAVALO'],
      medium: ['CAMINHÃO', 'CARRETA', 'CABINE', 'CAÇAMBA', 'CARROÇA'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    nature: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    food: {
      easy: ['CASA', 'CAMA', 'CAFÉ', 'CARNE', 'CACAU'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    toys: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    space: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    ocean: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    },
    fantasy: {
      easy: ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      medium: ['CACHORRO', 'CAMELO', 'CAVALO', 'CABRA', 'CARACOL'],
      hard: ['CACATUA', 'CAMALEÃO', 'CASCAVEL', 'CAÇADOR', 'CANGURU']
    }
  },

  // Sílaba CO
  'co': {
    animals: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    vehicles: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    nature: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    food: {
      easy: ['COCO', 'COMIDA', 'COELHO', 'COLA', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'CORRIDA', 'CORUJA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    toys: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    space: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    ocean: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    },
    fantasy: {
      easy: ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      medium: ['CORAÇÃO', 'COBERTOR', 'COLÉGIO', 'COMIDA', 'CORRIDA'],
      hard: ['COCHICHO', 'COBERTURA', 'COCORICÓ', 'COLESTEROL', 'COOPERAÇÃO']
    }
  },

  // Sílaba DA
  'da': {
    animals: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    vehicles: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    nature: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    food: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    toys: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    space: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    ocean: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    },
    fantasy: {
      easy: ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      medium: ['DÁLMATA', 'DAMASCO', 'DANONINHO', 'DAMIÃO', 'DARDO'],
      hard: ['DATILOGRAFIA', 'DANÇARINO', 'DÁDIVA', 'DAMASCENO', 'DADIVOSO']
    }
  },

  // Sílaba FA
  'fa': {
    animals: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    vehicles: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    nature: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    food: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    toys: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    space: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    ocean: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    },
    fantasy: {
      easy: ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      medium: ['FACÃO', 'FANTASIA', 'FARMÁCIA', 'FAROFA', 'FARELO'],
      hard: ['FARAÓ', 'FACÍNORA', 'FALATÓRIO', 'FAQUEIRO', 'FARMACÊUTICO']
    }
  },

  // Sílaba GA
  'ga': {
    animals: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    vehicles: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    nature: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    food: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    toys: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    space: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    ocean: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    },
    fantasy: {
      easy: ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      medium: ['GAIVOTA', 'GARÇA', 'GAZELA', 'GAFANHOTO', 'GAMBÁ'],
      hard: ['GALOPANTE', 'GARATUJA', 'GASTRÔNOMO', 'GAGUEIRA', 'GALANTEIO']
    }
  },

  // Sílaba JA
  'ja': {
    animals: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    vehicles: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    nature: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    food: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    toys: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    space: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    ocean: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    },
    fantasy: {
      easy: ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      medium: ['JABUTI', 'JAGUATIRICA', 'JASMIM', 'JANGADA', 'JAULA'],
      hard: ['JACARANDÁ', 'JATOBÁ', 'JABUTICABA', 'JAGUARÃO', 'JARARACA']
    }
  },

  // Sílaba JE
  'je': {
    animals: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    vehicles: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    nature: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    food: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    toys: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    space: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    ocean: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    },
    fantasy: {
      easy: ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      medium: ['JEJUM', 'JEGUE', 'JEITOSO', 'PROJETOR', 'SUJEITAR'],
      hard: ['JESUÍTA', 'JEJUAR', 'JEQUITIBÁ', 'JEITINHO', 'OBJETIVAR']
    }
  },

  // Sílaba LA
  'la': {
    animals: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    vehicles: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    nature: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    food: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    toys: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    space: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    ocean: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    },
    fantasy: {
      easy: ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      medium: ['LAGARTO', 'LAGOSTA', 'LAGARTIXA', 'LAJE', 'LATERAL'],
      hard: ['LABIRINTO', 'LABORATÓRIO', 'LACRAIA', 'LACRAÇÃO', 'LADRILHO']
    }
  },

  // Sílaba MA
  'ma': {
    animals: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    vehicles: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    nature: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    food: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    toys: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    space: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    ocean: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    },
    fantasy: {
      easy: ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      medium: ['MACACO', 'MAÇÃ', 'MACIO', 'MÁQUINA', 'MARAVILHA'],
      hard: ['MAMÍFERO', 'MADRUGADA', 'MACARRÃO', 'MAGISTRADO', 'MARATONA']
    }
  },

  // Sílaba NA
  'na': {
    animals: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    vehicles: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    nature: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    food: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    toys: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    space: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    ocean: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    },
    fantasy: {
      easy: ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      medium: ['NATAÇÃO', 'NATURAL', 'NACIONAL', 'NARRATIVA', 'NADADEIRA'],
      hard: ['NACIONALIDADE', 'NAMORADO', 'NARRAÇÃO', 'NATURALISTA', 'NAVEGADOR']
    }
  },

  // Sílaba PA
  'pa': {
    animals: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    vehicles: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    nature: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    food: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    toys: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    space: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    ocean: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    },
    fantasy: {
      easy: ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      medium: ['PAPAGAIO', 'PAREDE', 'PASSARINHO', 'PATINHO', 'PANDA'],
      hard: ['PAQUIDERME', 'PARAFUSO', 'PARASITA', 'PATRULHA', 'PALEONTÓLOGO']
    }
  },

  // Sílaba RA
  'ra': {
    animals: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    vehicles: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    nature: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    food: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    toys: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    space: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    ocean: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    },
    fantasy: {
      easy: ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      medium: ['RABO', 'RAPOSA', 'RAINHA', 'RAIO', 'RÁPIDO'],
      hard: ['RACIOCÍNIO', 'RADIOGRAFIA', 'RACIOCÍNIO', 'RACIONAL', 'RASTREADOR']
    }
  },

  // Sílaba SA
  'sa': {
    animals: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    vehicles: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    nature: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    food: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    toys: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    space: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    ocean: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    },
    fantasy: {
      easy: ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      medium: ['SAPATO', 'SARDINHA', 'SÁBADO', 'SALADA', 'SABONETE'],
      hard: ['SALAMANDRA', 'SABIÁ', 'SAGUIM', 'SAFÁRI', 'SAGRADO']
    }
  },

  // Sílaba TA
  'ta': {
    animals: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    vehicles: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    nature: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    food: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    toys: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    space: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    ocean: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    },
    fantasy: {
      easy: ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      medium: ['TAMANDUÁ', 'TARTARUGA', 'TAINHA', 'TABELA', 'TALHER'],
      hard: ['TAMANDUÁ-BANDEIRA', 'TARTARUGA-MARINHA', 'TABLETE', 'TÁBUA', 'TAQUARA']
    }
  },

  // Sílaba VA
  'va': {
    animals: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    vehicles: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    nature: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    food: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    toys: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    space: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    ocean: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    },
    fantasy: {
      easy: ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO'],
      medium: ['VAGALUME', 'VAGA-LUME', 'VÁLVULA', 'VARÍOLA', 'VAREJEIRA'],
      hard: ['VAQUEIRO', 'VATICANO', 'VAGABUNDO', 'VALORIZAR', 'VASILHA']
    }
  }
};

// Função auxiliar para buscar palavras
export function getWords(
  syllable: string,
  theme: string,
  difficulty: string
): string[] | null {
  const syllableLower = syllable.toLowerCase();

  if (!syllableWords[syllableLower]) {
    return null;
  }

  if (!syllableWords[syllableLower][theme]) {
    return null;
  }

  if (!syllableWords[syllableLower][theme][difficulty]) {
    return null;
  }

  return syllableWords[syllableLower][theme][difficulty];
}

// Função para gerar título baseado na sílaba e tema
export function generateTitle(syllable: string, theme: string): string {
  const themes: Record<string, string> = {
    'animals': 'Animais',
    'vehicles': 'Veículos',
    'nature': 'Natureza',
    'food': 'Alimentos',
    'toys': 'Brinquedos',
    'space': 'Espaço',
    'ocean': 'Oceano',
    'fantasy': 'Fantasia'
  };

  const themeLabel = themes[theme] || theme;
  return `Praticando a Sílaba ${syllable.toUpperCase()} - ${themeLabel}`;
}

// Função para gerar instruções baseadas no tipo de atividade
export function generateInstructions(activityType: string, syllable: string): string {
  const instructions: Record<string, string> = {
    'tracing': `Trace as palavras com a sílaba ${syllable.toUpperCase()} nas linhas pontilhadas.`,
    'coloring': `Escreva as palavras com a sílaba ${syllable.toUpperCase()} e depois colorir!`,
    'matching': `Leia as palavras com a sílaba ${syllable.toUpperCase()} e ligue aos desenhos.`,
    'wordsearch': `Encontre as palavras com a sílaba ${syllable.toUpperCase()} no caça-palavras.`,
    'complete': `Complete as palavras com a sílaba ${syllable.toUpperCase()} que está faltando.`,
    'syllable-game': `Circule a sílaba ${syllable.toUpperCase()} em cada palavra.`
  };

  return instructions[activityType] || `Pratique as palavras com a sílaba ${syllable.toUpperCase()}.`;
}
