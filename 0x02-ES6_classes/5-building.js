export default class Building {
  constructor(sqrt) {
    if (typeof sqrt !== 'number') {
      throw new TypeError('sqrt must be a number');
    }

    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }
}
