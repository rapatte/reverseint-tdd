module.exports = reverseInt = (n) => parseFloat(
    n.toString()
    .split("")
    .reverse()
    .join("")
) * Math.sign(n)