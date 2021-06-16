const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const UppercaseElement =document.getElementById('Uppercase')
const NumbersElement =document.getElementById('Numbers')
const SymbolsElement =document.getElementById('Symbols')
const form = document.getElementById('GeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')




const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)






characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)




form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const Uppercase = UppercaseElement.checked
    const Numbers = NumbersElement.checked
    const Symbols = SymbolsElement.checked
    const password = generatePassword(characterAmount, Uppercase, Numbers, Symbols)
    passwordDisplay.innerText = password
})



function generatePassword(characterAmount,Uppercase,Numbers,Symbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (Uppercase) charCodes = CharCodes.concat(UPPERCASE_CHAR_CODES)
    if (Symbols) charCodes = CharCodes.concat(SYMBOLS_CHAR_CODES)
    if (Numbers) charCodes = CharCodes.concat(NUMBERS_CHAR_CODES)
    
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[ Math.floor(Math.random() * charCodes.length)] //// <--- suspicious sentence!
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')  
}



function arrayFromLowToHigh(low,high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

