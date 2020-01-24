var arr = [
    {
        id: 001,
        nama: 'joni',
        umur: 15
    },
    {
        id: 002,
        nama: 'jeni',
        umur: 12
    },
    {
        id: 003,
        nama: 'doni',
        umur: 11
    },
    {
        id: 004,
        nama: 'dede',
        umur: 14
    },
    {
        id: 005,
        nama: 'supri',
        umur: 13
    }
]

function myFunction(params) {
    for (let i = 0; i < params.length; i++) {
        console.log(params[i])
    }
}

console.log(myFunction(arr))

// output array 2 dimensi, yang mengelompokkan dimensi yang kedua mengelompokkan by nama, ada 3 array dalam 1 array
// sorting by age
// [['jeni', 'joni']['doni', 'dede']['supri']]