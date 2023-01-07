const calcTip = function(bill){
        return bill >=50 && bill <=300 ? bill *0.15:bill*0.2
}
const bills = [125,500,44,100,204,304,205,1102,1111];
const tips=[]
const totals=[]
for(let i=0; i<bills.length; i++){
         const tips =  calcTip(bills[i])
         tips.push(tip)
         totals.push(tip+bills[i])
}
console.log(bills , tips , totals)
const calcAverage = function(arr){
        let sum = 0
        for (let i=0; i<arr.length; i++){
                sum += arr[i]
        }
        return sum / arr.length;
}  
console.log(calcAverage([2,3,7]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))