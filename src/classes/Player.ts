import { isPlayer } from '../interfaces/IsPlayer.js';

export class PlayerClasses implements isPlayer {
  constructor(
    public name: string, // interface can'r access private property.
    private age: number,
    readonly country: string,
  ) {}

  getProperty() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
