//로또 번호 생성하기 (중복제거)

const arr = []

//1-45 배열 생성
//빈배열에다가 숫자 i값을 집어 넣는다
for (let i = 1; i <= 45; i++) {
    arr.push(i)

}

//배열길이 만큼 중 랜덤한 하나의 정수 생성(0-45)
//카운트제거 (인덱스 번호 44/43/42 순으로 제거)
for (let i = 0; i < 6; i++) { //6번 뽑는 for문

    const idx = parseInt((Math.random() * arr.length))

    //카운트제거 (인덱스 번호 44/43/42 순으로 제거)
    console.log(arr.splice(idx,1))


}