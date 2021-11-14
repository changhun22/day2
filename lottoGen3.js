
const arr = []

while(true) {


    const num = parseInt(Math.random() * 45) + 1

    console.log(num)

    const index = arr.indexOf(num)

    console.log(`NUM : ${num}   INDEX : ${index}` )
    if(index >= 0){
        continue
    }
    const newLength = arr.push(num)

    if(newLength === 6) {
        break
    }
}

console.log(arr)