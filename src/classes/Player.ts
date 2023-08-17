export class PlayerClasses {
  constructor(
    private name: string,
    readonly age: number,
    readonly country: string,
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
