
document.querySelector('.calculateBtn').addEventListener("click", clickMyBtn);
function clickMyBtn () {
    let val1 = document.querySelector('.val1').value;
    let val2 = document.querySelector('.val2').value;
    let operation = document.querySelector('.operation').value;

    if(val1.trim() === '' || val2.trim() === '' || operation.trim() === ''){
        alert("Fill all boxes");
        return;
    }

    let output;
    switch(operation) {
        case "+":
            output = parseInt(val1) + parseInt(val2);
          break;
        case "/":
            output = parseInt(val1) / parseInt(val2);
          break;
        default:
            document.querySelector('.output').innerHTML = `Invalid expression`;
            return;
      }



    document.querySelector('.output').innerHTML = `Output: ${output}`;


    
}

const isInputNumber = (evt) => {
    let ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
} 
