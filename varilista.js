const Vari = require('./vari')

class Varilista {
    constructor() {
        this.varit = []
    }
    lisaaVari(vari) {
        this.varit.push(vari)
    }
}

module.exports = Varilista