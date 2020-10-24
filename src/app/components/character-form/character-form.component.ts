import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Class } from 'src/app/models/class';
import { Race } from 'src/app/models/race';
import { CharacterService } from 'src/app/services/character.service';
import { StatCalcService } from 'src/app/services/stat-calc.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  constructor(private characterService: CharacterService, private statCalcService: StatCalcService) { }

  character = {} as Character;
  races: Race[];
  classes: Class[];
  usablePoints: number = 6;

  onRaceChange(): void {
    if (this.character.class) {
      if(!this.character.race?.classes.some(c => c.id === this.character.class.id)) {
        this.character.class = undefined;
      }
    }
    this.character.level = 1;
    this.usablePoints = 6;
    this.character.vit = this.character.race?.vit;
    this.character.int = this.character.race?.int;
    this.character.str = this.character.race?.str;
    this.character.dex = this.character.race?.dex;
    this.character.hp = undefined;
    this.character.mp = undefined;
    this.character.sp = undefined;
    this.character.meleeDmg = undefined;
    this.character.rangedDmg = undefined;
    this.character.magicDmg = undefined;

    if (this.character.class) {
      this.character.hp = this.statCalcService.getHp(this.character);
      this.character.mp = this.statCalcService.getMp(this.character);
      this.character.sp = this.statCalcService.getSp(this.character);
      this.character.meleeDmg = this.statCalcService.getMeleeDmg(this.character);
      this.character.rangedDmg = this.statCalcService.getRangedDmg(this.character);
      this.character.magicDmg = this.statCalcService.getMagicDmg(this.character);
    }
  }

  onClassChange(): void {
    if (this.character.class) {
      this.character.hp = this.statCalcService.getHp(this.character);
      this.character.mp = this.statCalcService.getMp(this.character);
      this.character.sp = this.statCalcService.getSp(this.character);
      this.character.meleeDmg = this.statCalcService.getMeleeDmg(this.character);
      this.character.rangedDmg = this.statCalcService.getRangedDmg(this.character);
      this.character.magicDmg = this.statCalcService.getMagicDmg(this.character);
    }
  }

  onLevelChange(): void {
    this.usablePoints = 6 + ((this.character.level - 1) * 2);
    this.character.vit = this.character.race?.vit;
    this.character.int = this.character.race?.int;
    this.character.str = this.character.race?.str;
    this.character.dex = this.character.race?.dex;
    if (this.character.class) {
      this.character.hp = this.statCalcService.getHp(this.character);
      this.character.mp = this.statCalcService.getMp(this.character);
      this.character.sp = this.statCalcService.getSp(this.character);
      this.character.meleeDmg = this.statCalcService.getMeleeDmg(this.character);
      this.character.rangedDmg = this.statCalcService.getRangedDmg(this.character);
      this.character.magicDmg = this.statCalcService.getMagicDmg(this.character);
    }
  }

  raceHasClass(clazz: Class): boolean {
    return this.character.race && this.character.race.classes.some(c => c.id === clazz.id);
  }

  statChange($event: Event, statName): void {
    let newValue = +(<HTMLInputElement>$event.target).value;
    if (newValue === NaN || newValue < this.character.race[statName]) {
      (<HTMLInputElement>$event.target).value = this.character[statName];
      return;
    }
    let diff = newValue - this.character[statName];
    if (diff > 0 && this.usablePoints === 0) {
      (<HTMLInputElement>$event.target).value = this.character[statName];
      return;
    }
    this.character[statName] = newValue;
    if (this.character.class) {
      this.character.hp = this.statCalcService.getHp(this.character);
      this.character.mp = this.statCalcService.getMp(this.character);
      this.character.sp = this.statCalcService.getSp(this.character);
      this.character.meleeDmg = this.statCalcService.getMeleeDmg(this.character);
      this.character.rangedDmg = this.statCalcService.getRangedDmg(this.character);
      this.character.magicDmg = this.statCalcService.getMagicDmg(this.character);
    }

    this.usablePoints -= diff;
  }

  ngOnInit(): void {
    this.races = this.characterService.getRaces();
    this.classes = this.characterService.getClasses();
  }

}
