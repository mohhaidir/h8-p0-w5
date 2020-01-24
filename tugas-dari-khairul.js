// function tanpa push

function myFunction(str) {
    let result = []
    // console.log(result.length)
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ',') {
            temp += str[i]
        } else {
            result[result.length] = temp
            // result.push(temp)
            temp = ''
        }
    }
    result[result.length] = temp
    // result.push(temp)
    return result
}

console.log(myFunction('haidir, ulul, khairul'))

// output expected = ['haidir', 'ulul', 'khairul']
// result[result.length] = temp