const Band = require('./band');

class BandList {
    constructor() {
        this.bands = [
            new Band('Queen'),
            new Band('Led Zeppelin'),
            new Band('The Beatles'),
            new Band('Pink Floyd')
        ];
    }

    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return newBand;
    }

    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increaseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
            }
            return band;
        });
    }

    changeBandName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        });
    }
}

module.exports = BandList;