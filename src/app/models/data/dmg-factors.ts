import { DmgFactor } from '../dmg-factor';
import { DmgType } from './dmg-type';

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