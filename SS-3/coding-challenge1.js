

const calcAverage  = (a , b , c) => (a + b + c)/3
const scoreKoalas = calcAverage(85 ,54 , 41);
const scoreDolphins = calcAverage(23 , 34 , 27)
const checkWinner = function (avgDolphins,avgKoalas){
  if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins thắng  ${avgDolphins} vs ${avgKoalas}`)
  }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas thắng  ${avgKoalas} vs ${avgDolphins}`)

  }else {
        console.log(` Không có đội nào thắng`)
  }
}
console.log(checkWinner(scoreDolphins , scoreKoalas))
