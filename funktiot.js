function addThree(n)
{
    return n+3
}

function addFourAndThenMultiplyByThree(n) {
    throw new NotImplementedException();
}

function maybeUppercaseAndDecorateText(s, uppercase, decorate) {
    throw new NotImplementedException();
}

function tellRelationToHundred(number) {
    throw new NotImplementedException();
}

// Apuluokka toteuttamattomien funkioiden huomaamiseksi
class NotImplementedException extends Error {    
}

module.exports = {addThree, addFourAndThenMultiplyByThree, maybeUppercaseAndDecorateText, tellRelationToHundred}
