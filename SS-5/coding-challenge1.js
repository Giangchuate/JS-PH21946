const data1 = [17,21,23]
const data2 = [12,5,-5,0,4 ]
console.log(`...${data1[0]}oC...${data1[1]}oC...${data1[2]}oC`)
 const printForecast = (arr) =>{
        let str =''
        for(let i=0; i<arr.length; i++){
             str +=`${arr[i]}oC  `
        }
        return str
 }
console.log(printForecast(data2))