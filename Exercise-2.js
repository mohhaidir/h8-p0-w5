// ==== Logic Challenge - Password Generator ====

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
    let vocal = 'aAiIuUeEoO'
    let consonant = 'bBjJvVfFpP'
    let result = ''

    for (let i = 0; i < str.length; i++) {
        var initiate = false
        for (let j = 0; j < vocal.length; j++) {
            if (str[i] == vocal[j]) {
                result += consonant[j]
                initiate = true
            }
        }
        if (initiate != true) {
            result += str[i]
        }
    }
    return result
}

function reverseWord(str) {
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}

function setLowerUpperCase(str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            temp += str[i].toLowerCase()
        } else if (str[i] == str[i].toLowerCase()) {
            temp += str[i].toUpperCase()
        }
    }
    return temp
}

function removeSpaces(str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            temp += str[i]
        }
    }
    return temp
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    const changedVocal = changeVocals(name)
    const reversed = reverseWord(changedVocal)
    const setToUpperCase = setLowerUpperCase(reversed)
    const removedSpace = removeSpaces(setToUpperCase)

    return removedSpace;
}

/*
var listSort = sorting(arrNumber);
var countHighest = getTotal(listSort);
return countHighest;
*/

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'