let myInput = document.getElementById('myInput');
let validInput = null;
let myButton = document.getElementById('myButton')
let par = document.getElementById('paragraph')
let myNumber = document.getElementById('num');
let par2 = document.getElementById('paragraph2')
let par3 = document.getElementById('paragraph3')
par2.style.display = 'none'
par3.style.display = 'none'

let func = async function(){

    let inputChecker = ()=>{
        validInput = myInput.value

         
    }
    myInput.addEventListener("change",inputChecker);

    let buttonChecker = (event)=>{
        event.preventDefault()
        myInput.style.display = 'none'
        par.style.display = 'none'
        myButton.style.display = 'none'
        if(validInput && validInput>=0 && validInput<=10){
            myNumber.innerHTML = validInput;
            par2.style.display = 'block'
        }
        else{
            par2.style.display = 'none'
            par3.style.display = 'block'
        }
    }
    myButton.addEventListener("click",buttonChecker)
}
func();

