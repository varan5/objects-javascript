// const myName = 'Varan '
// const length = myName.length
// const includes = myName.includes('Karan')
// const toLowerCase = myName.toLowerCase()
// const toUpperCase = myName.toUpperCase()
// const trim = myName.trim()

// Is valid password

const isValidPassword = (password) => {
    if (password.length <= 9) 
        return false
    else if (password.includes('password'))
        return false

    return true
}

console.log(isValidPassword('34jfjd'))
console.log(isValidPassword('43443dfkjfjkfjjjfj'))
console.log(isValidPassword('fdkl4434passwordd'))