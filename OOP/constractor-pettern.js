const constructorPattern = function(fatherName, motherName){
    this.fatherName = fatherName
    this.motherName = motherName

    this.father = function(){
        console.log('Father name is: ', fatherName)
    }
    this.mother = function(){
        console.log('Mother name is: ', motherName)
    }
}

const allName = new constructorPattern('Nasir uddin', 'Eysmin Akter')
allName.father()
allName.mother()