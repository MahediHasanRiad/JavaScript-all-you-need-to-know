const str = 'My name is Riad'
let length = 0;

//  chatAt return index position
console.log(str.charAt(5)) // m

// count index 
while(true){
    if(str.charAt(length) == ''){
        break;
    }else{
        length++
    }
}

console.log(length)