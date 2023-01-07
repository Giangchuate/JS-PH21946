const giang = {
        fullName: 'Nho Giang',
        mass : 60,
        height :170,
        calcBMI :function(){
            this.bmi =  this.mass /  this.height **2;
            return this.bmi;
        }
}
const ha = {
        fullName: 'Thu Ha',
        mass : 50,
        height :160,
        calcBMI :function(){
                this.bmi =  this.mass /  this.height **2;
                return this.bmi;
            }
}
giang.calcBMI()
ha.calcBMI()
if(giang.bmi > ha.bmi){
    console.log(`${giang.fullName} BMI ${giang.bmi}`)
}