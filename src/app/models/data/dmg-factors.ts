import { DmgFactor } from '../dmg-factor';

export const DMG_FACTORS: DmgFactor = {
  expFactor: 0.5,
  melee: {
    constant: 12,
    factor: 0.025,
    stats: [{
      key: 'str',
      constant: 2.4,
      factor: 0.028
    }, {
      key: 'dex',
      constant: 1.2,
      factor: 0.052
    }]
  },
  ranged: {
    constant: 15,
    factor: 0.025,
    stats: [{
      key: 'str',
      constant: 1.2,
      factor: 0.048
    }, {
      key: 'dex',
      constant: 2.5,
      factor: 0.03
    }]
  },
  magic: {
    constant: 18,
    factor: 0.025,
    stats: [{
      key: 'int',
      constant: 3.8,
      factor: 0.02
    }]
  }
};

export const DMG_MULTIPLIERS = {
  melee: {
    BA: {
      factor: 1,
      classes: {
        0: 1.1,
        1: 0.95,
        2: 0.6,
        4: 1
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 0.6,
        5: 0.6,
        7: 0.6,
        9: 1.05
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 1.15,
        2: 0.65,
        5: 0.6,
        9: 1.05
      }
    }
  },
  ranged: {
    BA: {
      factor: 1,
      classes: {
        0: 0.6,
        1: 0.6,
        2: 1.05,
        4: 0.6
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 1.05,
        5: 0.6,
        7: 0.6,
        9: 0.8
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 0.6,
        2: 1.1,
        5: 0.6,
        9: 0.7
      }
    }
  },
  magic: {
    BA: {
      factor: 1,
      classes: {
        0: 0.5,
        1: 0.5,
        2: 0.5,
        4: 1.05
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 0.5,
        5: 1.05,
        7: 1,
        9: 0.5
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 0.5,
        2: 0.5,
        5: 1,
        9: 0.5
      }
    }
  }
}