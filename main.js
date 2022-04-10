
document.querySelector('.calculateBtn').addEventListener("click", clickMyBtn);
function clickMyBtn () {
    let val1 = document.querySelector('.val1').value;
    let val2 = document.querySelector('.val2').value;
    let operation = document.querySelector('.operation').value;

    if(val1.trim() === '' || val2.trim() === '' || operation.trim() === ''){
        alert("Fill all boxes");
        return;
    }

    if(operation !== '+'){
        alert("You can use just '+'");
        return;
    }

    document.querySelector('.output').innerHTML = `Output: ${parseInt(val1) + parseInt(val2)}`

    document.querySelector('.output').classList.remove("hidden");
    document.querySelector('.output').classList.add("flex");
    
}

const isInputNumber = (evt) => {
    let ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
} 
