const myAccount = {
    name: 'Varan',    
    expenses: 0,
    income: 0   
}

const addIncome = function (account, amount) {
    account.income += amount
}

const addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
}

const getSummary = function (account) {
    return `\nAccount holder's name: ${account.name}.\nIncome: ${account.income}.\nExpenses: ${account.expenses}.`
}

const resetAccount = function (account) {
    account.income = 0,
    account.expenses = 0
}

console.log(getSummary(myAccount))
addIncome(myAccount, 100)
console.log(getSummary(myAccount))
addExpenses(myAccount, 10)
console.log(getSummary(myAccount))
addExpenses(myAccount, 5)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(getSummary(myAccount))
