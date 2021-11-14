//로또 번호 생성하기 (번호 중복)

const arr = [] // 번호가 들어갈 빈배열을 하나 만든다

while(true) {

    // 1-45 숫자를 생성한다
    const num = parseInt(Math.random() * 45) + 1

    console.log(num)

    //검사

    //num의 index 값을 반환한다. 존재하지 않으면 -1을 반환한다
    const index = arr.indexOf(num)

    //인덱스 NUM값과 INDEX 값 을 확인하여 검토
    //index 값이 0이상이면 continue가 실행되어 처음으로 되돌아간다
    //if 조건에 해당 되지않으면 -1 나오면 arr.push를하여 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
    console.log(`NUM : ${num}  INDEX : ${index}`)
    if(index >= 0){
        continue
    }
    const newLength = arr.push(num)

    //newLength 값이 6이되면 break로 인해 while문을 빠져 나온다
    if(newLength === 6){
        break
    }

}