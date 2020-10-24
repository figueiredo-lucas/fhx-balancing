import { DmgFactor } from '../dmg-factor';

export const DMG_FACTORS: DmgFactor = {
  expFactor: 0.5,
  melee: {
    constant: 12,
    factor: 0.025,
    stats: [{
      key: 'str',
      constant: 3,
      factor: 0.028
    }, {
      key: 'dex',
      constant: 1.5,
      factor: 0.052
    }]
  },
  ranged: {
    constant: 15,
    factor: 0.025,
    stats: [{
      key: 'str',
      constant: 1.5,
      factor: 0.048
    }, {
      key: 'dex',
      constant: 3,
      factor: 0.03
    }]
  },
  magic: {
    constant: 14,
    factor: 0.025,
    stats: [{
      key: 'int',
      constant: 3.5,
      factor: 0.022
    }]
  }
};

export const DMG_MULTIPLIERS = {
  melee: {
    BA: {
      factor: 1,
      classes: {
        0: 1.05,
        1: 0.95,
        2: 1,
        4: 1
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 1.05,
        5: 1,
        7: 1,
        9: 1.05
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 1.1,
        2: 1.05,
        5: 1,
        9: 1.05
      }
    }
  },
  ranged: {
    BA: {
      factor: 1,
      classes: {
        0: 1,
        1: 1,
        2: 1.05,
        4: 1
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 1.05,
        5: 1,
        7: 1,
        9: 1.05
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 1,
        2: 1.1,
        5: 1,
        9: 1
      }
    }
  },
  magic: {
    BA: {
      factor: 1,
      classes: {
        0: 1,
        1: 1,
        2: 1,
        4: 1.05
      }
    },
    HE: {
      factor: 1,
      classes: {
        2: 1,
        5: 1.05,
        7: 1,
        9: 1
      }
    },
    WE: {
      factor: 1,
      classes: {
        0: 1,
        2: 1,
        5: 1,
        9: 1
      }
    }
  }
}