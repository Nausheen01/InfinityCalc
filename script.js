let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value = e.target.innerHTML;

        // Equal button
        if(value == '='){
            try{
                string = string.replace(/x/g,'*');
                string = eval(string).toString();
                document.querySelector('.display').value = string;
            } 
            catch{
                document.querySelector('.display').value = 'Error';
                string = "";
            }
            
        }
        // Clear button

        else if(value == 'C'){
            string = "";
            document.querySelector('.display').value = string;
        }
        // percentage button
        else if(value =='%'){
            string= (eval(string)/100).toString();
            document.querySelector('.display').value= string;
        }
        // Memory plus
        else if(value == 'M+'){
            memory=memory + Number(string);
            document.querySelector('.display').value =memory;
        }
        // Memory minus
        else if(value=="M-"){
            memory = memory - Number(string);
            document.querySelector('.display').value = memory;
        }
        // other buttons
        else{
        string = string + value;
        document.querySelector('.display').value = string;
    }
        
    });
});

//Keyboard support
    document.addEventListener('keydown', (e)=>{

    let key = e.key;

    // Allowed Keys
    if(
        (key >= '0' && key <= '9') ||
        key == '+' ||
        key == '-' ||
        key == '*' ||
        key == '/' ||
        key == '.' 
    ){

        string += key;

        document.querySelector('.display').value = string;
    }

    // Enter Key
    else if(key == 'Enter'){

        try{
            string = eval(string).toString();

            document.querySelector('.display').value = string;
        }

        catch{
            document.querySelector('.display').value = "Error";
        }
    }

    // Backspace Key
    else if(key == 'Backspace'){

        string = string.slice(0,-1);

        document.querySelector('.display').value = string;
    }
});
