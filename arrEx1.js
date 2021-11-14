//배열 추가 제거 continu break 개념 알기

const arr = ['타노스', '아이언맨', '블랙 위도우']

console.log(arr.length) //배열 갯수 출력

console.log(arr[0]) //배열의 0번째
console.log(arr[1]) //배열의 1번째
console.log(arr[2]) //배열의 2번째

//맨 마지막에 추가
const changedLength = arr.push("블랙팬서")

console.log(changedLength)

//console.log(arr.indexOf("캡틴 아메리카")) //indexOf함수를 사용하여 배열의 몇번째 인덱스인지 구할수있다./-1나오면 배열안에 캡틴아메리카가 없다는 뜻

console.log(arr)

arr.splice(1,1) //spleice(시작인덱스,제거할갯수)

console.log(arr)

console.log("-----------------------------------")

for (let i = 0; i < arr.length; i++) { //i번째부터 arr.length 까지 문장 실행
    if(arr[i] === '블랙 위도우'){ //arr[i]가 블랙 위도우와 같다면 전문장까지만 실행하고 중단한다
        break
    }
    console.log(i)
    console.log(arr[i])
}

console.log("-----------------------------------")

for (let i = 0; i < arr.length; i++) { //i번째부터 arr.length 까지 문장 실행
    if(arr[i] === '블랙 위도우'){ //arr[i] ===블랙 위도우 조건이 성립하면 성립하는 조건 문장을 넘어가고 다음 문장을 실행한다
        continue
    }
    console.log(i)
    console.log(arr[i])
}
