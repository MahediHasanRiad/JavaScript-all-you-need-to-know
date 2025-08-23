const printName = function(fatherName, motherName){
    return{
        fatherName: fatherName,
        motherName: motherName,

        father: function(){
            console.log('Father name is: ', this.fatherName)
        },
        mother: function(){
            console.log('Mother name is: ', this.motherName)
        }
    }
}

const allName = printName('Nasir Uddin', 'Eysmin akter')
allName.father()
allName.mother()
