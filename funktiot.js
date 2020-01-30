function addThree(n)
{
    return n+3
}

function addFourAndThenMultiplyByThree(n) {
    return (n+4) * 3
}

function maybeUppercaseAndDecorateText(s, uppercase, decorate) {
    if (uppercase) s = s.toUpperCase()
    if (decorate) s = `-:${s}:-`
    return s;
}

function tellRelationToHundred(number) {
    if (number < 0) {
        return `${number} is a negative number`
    }
    if (number > 100) {
        return `${number} is greater than 100`
    }
    return `Add ${100 - number} to ${number} and you get 100`
}

// Apuluokka toteuttamattomien funkioiden huomaamiseksi
class NotImplementedException extends Error {    
}

module.exports = {addThree, addFourAndThenMultiplyByThree, maybeUppercaseAndDecorateText, tellRelationToHundred}
