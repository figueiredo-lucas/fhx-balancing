import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { DmgType } from '../models/data/dmg-type';
import { FACTORS } from '../models/data/factors';
import { DMG_FACTORS } from '../models/data/dmg-factors';
import { Dmg } from '../models/dmg';
import { DmgFactor, TypedDmgFactor } from '../models/dmg-factor';
import { Factor } from '../models/factors';

@Injectable({
  providedIn: 'root'
})
export class StatCalcService {

  constructor() { }

  private prog(level) {
    return ((1 + level) * level) / 2;
  }

  private formulaHpMpSp(factor: Factor, char: Character, statName: string): number {
    const valuePerPoint = Math.pow(factor.constant, Math.exp(factor.factor * char.level))
    const baseValue = valuePerPoint * char[statName] + this.prog(char.level) * factor.progFactor;
    const race = factor[char.race.abbr];
    return baseValue * race.factor * race.classes[char.class.id] + race.min;
  }

  private calcDmg(constant, exp, factor, level) {
    return Math.pow(constant, Math.pow(exp, factor * level));
  }

  private formulaDmg(factor: DmgFactor, type: DmgType, char: Character): number {
    const typedDmg: TypedDmgFactor = factor[type];
    const exp = Math.exp(factor.expFactor);
    const baseGrowth = this.calcDmg(typedDmg.constant, exp, typedDmg.factor, char.level);
    return typedDmg.stats.reduce((acc, curr) => {
      const pointPerLevel = this.calcDmg(curr.constant, exp, curr.factor, char.level);
      return acc + pointPerLevel * char[curr.key];
    }, baseGrowth);
  }

  getHp(char: Character): number {
    return Math.floor(this.formulaHpMpSp(FACTORS.hp, char, 'vit'));
  }
  getMp(char: Character): number {
    return Math.floor(this.formulaHpMpSp(FACTORS.mp, char, 'int'));
  }
  getSp(char: Character): number {
    return Math.floor(this.formulaHpMpSp(FACTORS.sp, char, 'vit'));
  }

  getMeleeDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DMG_FACTORS, DmgType.MELEE, char));
    return { min: dmg, max: dmg };
  }
  getRangedDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DMG_FACTORS, DmgType.RANGED, char));
    return { min: dmg, max: dmg };
  }
  getMagicDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DMG_FACTORS, DmgType.MAGIC, char));
    return { min: dmg, max: dmg };
  }
}
