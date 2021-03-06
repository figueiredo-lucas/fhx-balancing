import { Factors } from '../factors';

export const FACTORS: Factors = {
  hp: {
    factor: 0.0091,
    constant: 20,
    progFactor: 1.3,
    BA: {
      factor: 1,
      min: 60,
      classes: {
        0: 1.35,
        1: 1.25,
        2: 0.8,
        4: 1.2
      }
    },
    HE: {
      factor: 0.6,
      min: 100,
      classes: {
        2: 1.15,
        5: 1,
        7: 1.1,
        9: 1.4
      }
    },
    WE: {
      factor: 0.65,
      min: 80,
      classes: {
        0: 1.45,
        2: 1.1,
        5: 1,
        9: 1.35
      }
    }
  },
  mp: {
    factor: 0.006,
    constant: 19,
    progFactor: 1.5,
    BA: {
      factor: 0.6,
      min: 60,
      classes: {
        0: 0.95,
        1: 0.9,
        2: 1,
        4: 1.1
      }
    },
    HE: {
      factor: 1,
      min: 60,
      classes: {
        2: 0.9,
        5: 1.4,
        7: 1.35,
        9: 1
      }
    },
    WE: {
      factor: 0.7,
      min: 60,
      classes: {
        0: 0.9,
        2: 1.1,
        5: 1.6,
        9: 1.3
      }
    }
  },
  sp: {
    factor: 0.003,
    constant: 15,
    progFactor: 1,
    BA: {
      factor: 0.8,
      min: 60,
      classes: {
        0: 1.2,
        1: 1.1,
        2: 1.3,
        4: 1
      }
    },
    HE: {
      factor: 0.6,
      min: 60,
      classes: {
        2: 1.95,
        5: 1,
        7: 1.05,
        9: 1.8
      }
    },
    WE: {
      factor: 0.9,
      min: 60,
      classes: {
        0: 1.2,
        2: 1.4,
        5: 1,
        9: 1.3
      }
    }
  }
};