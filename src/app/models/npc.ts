export interface Npc {
  id: number,
	name: string,
	type: number,
	level: number,
	hp: number,
	max_attack: number,
	min_attack: number,
	phys_def: number,
	magic_def: number,
	curse_resist: number,
	magic_resist: number,
	range_resist: number,
	melee_resist: number
}