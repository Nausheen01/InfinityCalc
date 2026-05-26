let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // sound effect
        let sound = document.getElementById('clickSound');
        sound.currentTime = 0;
        sound.play();
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
            let history = document.querySelector('.history');
            history.innerHTML += `<p> ${string}</p>`
            
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

// Theme Dark/Light

let themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
});

// Voice Input
let voiceBtn = document.querySelector('.voice-btn');
voiceBtn.addEventListener('click', ()=>{
    let recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.onresult = function(event){
        let speechText = event.results[0][0].transcript;
        document.querySelector('.display').value= speechText;
        string= speechText;
    }
})

