// let myBook = {
//         title: '1984', 
//         author: 'George Orwell', 
//         pageCount: 326
// }

// let otherBook = {
//     title: 'A Peoples History',
//     author: 'Howard Zinn',
//     pageCount: 700
// }

// // const getSummary = function (book) {
// //     console.log(`${book.title} by ${book.author}`)
// // }

// const getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//     }
// }

// bookSummary = getSummary(myBook)
// otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)    


const convertFarenheit = function (farenheit) {
    return {
        farenheit: farenheit,
        celcius: farenheit + 10,
        kelvin: farenheit + 273
    }
}

const result = convertFarenheit(100)
console.log(result.farenheit)
console.log(result.celcius)
console.log(result.kelvin)
console.log(result)







