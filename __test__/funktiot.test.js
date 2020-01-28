const funktiot = require('../funktiot')


test("lämmittelyä", () => {
    const tulos = funktiot.addThree(5);
    expect(tulos).toBe(8)
})


test("lämmitelyä taulukon kanssa", () => {
    const parit = [new TestPariData(0, 3), new TestPariData(5, 8), new TestPariData(10, 13)]
    for(pari of parit) {
        const {parametri, odotettu} = pari;
        const tulos = funktiot.addThree(parametri);
        expect(tulos).toBe(odotettu);
    }
})

test("add_four_and_then_multiply_by_three", () => {
    const parit = [new TestPariData(0, 12), new TestPariData(1, 15), new TestPariData(5, 27)]
    for(pari of parit) {
        const {parametri, odotettu} = pari;
        const tulos = funktiot.addFourAndThenMultiplyByThree(parametri);
        expect(tulos).toBe(odotettu);
    }
})


test("maybe_uppercase_and_decorate_text", () =>{
    const data = [new TextTestData("aaa", true, true, "-:AAA:-"),new TextTestData("aaa", true, false, "AAA"),new TextTestData("aaa", false, true, "-:aaa:-"),new TextTestData("aaa", false, false, "aaa")]
    for(item of data) {
        const {s, uppercase, decorate, odotettu} = item;
        const tulos = funktiot.maybeUppercaseAndDecorateText(s, uppercase, decorate);
        expect(tulos).toBe(odotettu);
    }
})

test("tell_relation_to_the_number_100", () => {
    const parit = [new TestPariData(-5555, "-5555 is a negative number"), 
    new TestPariData(-1, "-1 is a negative number"), 
    new TestPariData(92, "Add 8 to 92 and you get 100"), 
    new TestPariData(95, "Add 5 to 95 and you get 100"), 
    new TestPariData(100, "Add 0 to 100 and you get 100"),
    new TestPariData(101, "101 is greater than 100"),
    new TestPariData(4444, "4444 is greater than 100")]
    for(pari of parit) {
        const {parametri, odotettu} = pari;
        const tulos = funktiot.tellRelationToHundred(parametri);
        expect(tulos).toBe(odotettu);
    }
})


// Apuluokkia testikoodin yksinkertaistamiseksi
class TestPariData {
    constructor(parametri, odotettu) {
        this.parametri = parametri;
        this.odotettu = odotettu;
    }
}
class TextTestData {
    constructor(s, uppercase, decorate, odotettu) {
        this.s = s;
        this.uppercase = uppercase;
        this.decorate = decorate;
        this.odotettu = odotettu;
    }
}
