const Dolphins = (96  + 108 + 89) /3 
const Koalas = (88 + 91 + 110) / 3
console.log(Dolphins  , Koalas)

if(Dolphins > Koalas && Dolphins >= 100){
        console.log(`Dolphins dành chiến thắng với số điểm là: ${Dolphins}`)
}else if(Koalas > Dolphins && Koalas >= 100) {
        console.log(`Koalas dành chiến thắng với số điểm là : ${Koalas}`)
} else if(Koalas === Dolphins && Koalas >= 100 && Dolphins >=100) {
        console.log(`Hai đội hòa nhau`)
} else {
        console.log(`Hai đội không đủ điểm`)
}