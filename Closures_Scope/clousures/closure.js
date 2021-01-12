const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}
moneyBox(5)
moneyBox(10)

const moneyBox = () => {
   debugger
    var saveCoins = 0
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MOneyBox: ${saveCoins}`)
    }
    return countCoins;
}
let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(10)
myMoneyBox(23)

nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };