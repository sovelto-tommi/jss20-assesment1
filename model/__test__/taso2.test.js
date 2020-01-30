const NotImplementedException = require('../../funktiot').NotImplementedException
const Hamsteri = require('../hamsteri')
const Hamsterilaji = require('../hamsterilaji')
const Kolo = require('../kolo')

// Toteuta koodi, jotta kaikki testit menevät läpi
// poista siis kunkin funktion throws lause ja toteuta koodi.
// Testejä ei siis muuten saa muuttaa kuin poistamalla throws lause

test("lemmikkihamsteri, joka ei pidä ruoasta", () => {
    throw new NotImplementedException()
    const h = new Hamsteri("Maximilian", true, Hamsterilaji.Campbell);
    const result = h.kuvaus();
    expect(result).toEqual("Maximilian on lemmikki Campbell hamsteri. Maximilian ei pidä mistään ruoista.");
})

test("lemmikkihamsteri, joka pitää kolmen tyyppisistä ruoista", () => {
    throw new NotImplementedException();
    const h = new Hamsteri("Dexter", true, Hamsterilaji.Syyrian);
    h.pitääRuoasta = ["siemenet", "hedelmät", "hyönteiset"];
    const result = h.kuvaus();
    expect(result).toEqual("Dexter on lemmikki Syyrian hamsteri. Dexter pitää 3 tyyppisistä ruoista.");
})

test("lemmikkihamsteri, joka pitää kahden tyyppisistä ruoista", () => {
    throw new NotImplementedException();
    const h = new Hamsteri("Chiquitita", true, Hamsterilaji.Roborovski);
    h.pitääRuoasta = ["hedelmät", "hyönteiset"];
    const result = h.kuvaus();
    expect(result).toEqual("Chiquitita on lemmikki Roborovski hamsteri. Chiquitita pitää 2 tyyppisistä ruoista.");
})

test("villihamsteri, joka pitää yhden tyyppisestä ruoasta", () => {
    throw new NotImplementedException();
    const h = new Hamsteri("Kultakutri", false, Hamsterilaji.WinterWhite);
    h.pitääRuoasta = ["hyönteiset"];
    const result = h.kuvaus();
    expect(result).toEqual("Kultakutri on villi WinterWhite hamsteri. Kultakutri pitää 1 tyyppisestä ruoasta.");
})

test("hamsteri luotu vaihtoehtoisilla konstruktorin parametreilla", () => {
    throw new NotImplementedException();

    const b = new Kolo(10.77, 20.55);

    const h = new Hamsteri("Jojo", b);

    const sijainti = h.kolonSijainti();

    expect(sijainti).toEqual('Jojo hamsterin kolon sijainti on 10.77 pituutta ja 20.55 leveyttä')

    expect(h.onkoLemmikki).toBeFalsy()
    // Vaihtoehtoisen konstruktorin tulee antaa joitain oletusarvoja
    expect(h.kuvaus()).toEqual("Jojo on villi WinterWhite hamsteri. Jojo pitää 1 tyyppisestä ruoasta.");
    expect(h.pitääRuoasta.length).toBe(1)
    expect(h.pitääRuoasta[0]).toEqual("hyönteiset")

 
    // Kadotetaan Jojon kolo
    h.kolo = null;

    expect(h.kolonSijainti()).toEqual('Jojo on koloton')

})
