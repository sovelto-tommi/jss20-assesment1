const Vari = require('../vari')

// Valmis toteutus
test("orange is the new black", () => {
    let vari = new Vari("oranssi", "#ffa500", [255,165,0])
    expect(vari.nimi).toEqual("oranssi")
    expect(vari.hex).toMatch(/#FFA500/i)
    expect(vari.custom).toBe(true)
})

// Tästä testit mukaan
test("Värin rgb arvo lasketaan oikein construktoria käytettäessä", () => {
    // let vari = new Vari("oranssi", "#ffa500")
    // expect(vari.nimi).toEqual("oranssi")
    // expect(vari.rgb).toEqual([255,165,0])
})