export default class Id {
  static get newId(): number {
    return Math.floor(Math.random() * 1000 + 1);
  }
}
