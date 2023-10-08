function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(0) // tofixed -> decimals after coma
    return mantissa.toFixed(2) + " e " + power // sci format if above 1k
}