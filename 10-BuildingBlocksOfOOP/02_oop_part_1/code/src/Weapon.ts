import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected static MODIFIER_CHANGE_RATE: number = 0.05;
  protected baseDamage: number = 0;
  protected baseDurability: number = 0;
  protected damageModifier: number = 0;
  protected durabilityModifier: number = 0;
  protected breakFlag: boolean = false;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }
  abstract polish(): void;

  getDamage(): number {
    let effectiveDamage: number = this.baseDamage + this.damageModifier;
    return Math.round(effectiveDamage * 1e2);
  }

  getDurability() {
    let effectiveDurability = this.baseDurability + this.durabilityModifier;
    return Math.round(effectiveDurability * 1e2);
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
  }

  use(): string {
    let breakInfo = "";
    if (this.getDurability() <= 0) {
      breakInfo = `\nThe ${this.name} breaks.`;
      return `You can't use the ${this.name}, it is broken`;
    }
    this.durabilityModifier =
      this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

    if (this.breakFlag && this.name == "hammer") {
      return "";
    } else {
      return `You use the ${
        this.name
      }, dealing ${this.getDamage()} points of damage.${breakInfo}`;
    }
  }
}
