export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqrt must be a number');
    }

    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqrt = sqft;
  }

  get sqrt() {
    return this._sqrt;
  }
}
