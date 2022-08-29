const charRange = document.getElementById('charRange')
const charNumber = document.getElementById('charNumber')
const form = document.getElementById('passwordGeneratorForm')
const passwordisplay = document.getElementById('passwordisplay')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolElement = document.getElementById('includeSymbol')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123,126))

charNumber.addEventListener('input', synCharacterAmount)
charRange.addEventListener('input', synCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const charcterAmount = charNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumber = includeNumberElement.checked
    const includeSymbol = includeSymbolElement.checked
    const password = generatePassword(charcterAmount, includeUpperCase, includeNumber, includeSymbol)
    passwordisplay.innerText = password
})

function synCharacterAmount(e){
    const value = e.target.value
    charNumber.value = value
    charRange.value = value
}

function generatePassword(charcterAmount, includeUpperCase, includeNumber, includeSymbol){
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for (let i=0; i<charcterAmount; i++){
        const characterCOde = charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCOde))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}