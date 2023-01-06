const bill = 480
const tip = bill <= 300  && bill >=50 ? bill * 0.15 : bill * 0.2
switch(bill){
     case 275 : 
        console.log(`Bill ${bill} được tip số tiền là ${tip} `)
        break;
     case 40 : 
        console.log(`Bill ${bill} được tip số tiền là ${tip} `)
        break;
     case 430 : 
        console.log(`Bill ${bill} được tip số tiền là ${tip} `)
        break;
     default : 
        console.log(`Bill ${bill} được tip số tiền là ${tip} `)
         break
}

