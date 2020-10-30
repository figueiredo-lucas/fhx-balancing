import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { DmgType } from '../models/data/dmg-type';
import { FACTORS } from '../models/data/factors';
import { DMG_FACTORS, DMG_MULTIPLIERS } from '../models/data/dmg-factors';
import { Dmg } from '../models/dmg';
import { DmgFactor, TypedDmgFactor } from '../models/dmg-factor';
import { Factor, Factors } from '../models/factors';
import { LiveFactorsService } from './live-factors.service';

@Injectable({
  providedIn: 'root'
})
export class StatCalcService {

  constructor(private liveFactorsService: LiveFactorsService) { }

  private prog(level) {
    return ((1 + level) * level) / 2;
  }

  private formulaHpMpSp(factor: Factor, char: Character, statName: string): number {
    const valuePerPoint = Math.pow(factor.constant, Math.exp(factor.factor * char.level))
    const baseValue = valuePerPoint * char[statName] + this.prog(char.level) * factor.progFactor;
    const race = factor[char.race.abbr];
    return baseValue * race.factor * race.classes[char.class.id] + parseInt(race.min);
  }

  private calcDmg(constant, exp, factor, level) {
    return Math.pow(constant, Math.pow(exp, factor * level));
  }

  private formulaDmg(type: DmgType, char: Character): number {
    const typedDmg: TypedDmgFactor = DMG_FACTORS[type];
    const exp = Math.exp(DMG_FACTORS.expFactor);
    const baseGrowth = this.calcDmg(typedDmg.constant, exp, typedDmg.factor, char.level);
    const race = DMG_MULTIPLIERS[type][char.race.abbr];
    return typedDmg.stats.reduce((acc, curr) => {
      const pointPerLevel = this.calcDmg(curr.constant, exp, curr.factor, char.level);
      return acc + pointPerLevel * char[curr.key];
    }, baseGrowth) * race.factor * race.classes[char.class.id];
  }

  getHp(char: Character, live: boolean = true): number {
    const factors: Factors = live ? this.liveFactorsService.getLiveFactor() : this.liveFactorsService.getOriginalFactor();
    return Math.floor(this.formulaHpMpSp(factors.hp, char, 'vit'));
  }
  getMp(char: Character, live: boolean = true): number {
    const factors: Factors = live ? this.liveFactorsService.getLiveFactor() : this.liveFactorsService.getOriginalFactor();
    return Math.floor(this.formulaHpMpSp(factors.mp, char, 'int'));
  }
  getSp(char: Character, live: boolean = true): number {
    const factors: Factors = live ? this.liveFactorsService.getLiveFactor() : this.liveFactorsService.getOriginalFactor();
    return Math.floor(this.formulaHpMpSp(factors.sp, char, 'vit'));
  }

  getMeleeDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DmgType.MELEE, char));
    return { min: dmg, max: dmg };
  }
  getRangedDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DmgType.RANGED, char));
    return { min: dmg, max: dmg };
  }
  getMagicDmg(char: Character): Dmg {
    const dmg = Math.floor(this.formulaDmg(DmgType.MAGIC, char));
    return { min: dmg, max: dmg };
  }
}
