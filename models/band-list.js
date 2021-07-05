const Band = require("./bands");
class BandList {
  constructor() {
    this.bands = [
      new Band("The neighbourhood"),
      new Band("Heroes del silencio"),
      new Band("The Artick Monkeys"),
      new Band("Simple Plan"),
      new Band("The Rasmus"),
    ];
  }

  addBand(name) {
    const newBand = Band(name);
    this.bands.push(newBand);
  }
  removedBand(uuid) {
    this.bands = this.bands.filter((band) => band.id != uuid);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(uuid) {
    this.bands = this.bands.map((band) => {
      if (band.uuid === uuid) {
        band.vote += 1;
      }
    });
    return band;
  }

  changeName(uuid,name) {
    this.bands = this.bands.map((band) => {
      if (band.uuid === uuid) {
        band.name  = name;
      }
    });
    return band;
  }
}

module.exports = BandList;
