class Vari {
    constructor(nimi, hex, rgb, custom=true) {
        this.nimi = nimi
        this.hex = hex
        this.custom = custom
        if (rgb) {
            this.rgb = rgb
        } else {
            this.rgb = Vari.hex2rgb(hex)
        }
    }

    static hex2rgb(hex="#1a22b6") {
        // Ei tarvita virheentarkistusta, voit olettaa että parametri on 
        // merkkijono muotoa #1a22b6
        const r = parseInt(hex.substring(1,3), 16)
        const g = parseInt(hex.substring(3,5), 16)
        const b = parseInt(hex.substring(5,7), 16)
        return [r, g, b]
    }
    static rgb2hex(rgb) {
        if (typeof rgb !== typeof []) {
            throw new Error(`RGB value must be an array, not ${typeof rgb}`)
        }
        let r=rgb[0], g=rgb[1], b=rgb[2];
        if (r < 0 || r > 255) throw new Error('Invalid red value')
        if (g < 0 || g > 255) throw new Error('Invalid red value')
        if (b < 0 || b > 255) throw new Error('Invalid red value')
        r = r ? r.toString(16) : '00';
        g = g ? g.toString(16) : '00';
        b = b ? b.toString(16) : '00';
        return `#${r}${g}${b}`
    }
}

module.exports = Vari