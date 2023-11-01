
    const fullName = document.getElementById('fullname');
    const form = document.getElementById('form');
    const submitBtn  = document.getElementById('submit-button');
    const email = document.getElementById('email');
    const selectOne = document.getElementById('select1');
    const selectTwo = document.getElementById('select2');
    const textArea = document.getElementById('message')



// The functions that give the colors
    function inputCorrect(inputName){
        inputName.style.border = '2px solid'
        inputName.style.boxShadow = 'inset 1px 1px 2px 2px rgba(60, 179, 60, 0.8)';
    }
    function inputIncorrect(inputName){
        inputName.style.border = '3px solid'
        inputName.style.boxShadow = 'inset 1px 1px 3px 3px rgba(255, 0, 0, 0.8)';
    }


// Main function that checks if the Name and Email inputs 
// are completed correct

    // submitBtn.addEventListener('submit', checkInput)

    function checkInput(event){
        // event.preventDefault();

        const fullNameValue = fullName.value.trim();
        const emailValue = email.value.trim();

        function checkName(){
            if(fullNameValue.length > 2){
                inputCorrect(fullName);
             }
            else{
                inputIncorrect(fullName);            
            }
        }

        
        function checkEmail(){
           
            if(emailValue.length <4 ){
                inputIncorrect(email);            
            }
            else{
                inputCorrect(email);
            }
        }

      checkName();
      checkEmail();
    }

// Function that checks if the selects are completed correct

    function checkSelect(selectElement){
        if (selectElement.selectedIndex > 0) {
            inputCorrect(selectElement);
          } else {
            inputIncorrect(selectElement)
          }
    }

// Function that checks if the textArea are completed correct
    
function checkTextArea(){
    const messageValue = message.value.trim();

    const words = messageValue.split(/\s+/);

    if (messageValue !== '' && words.length >= 3) {
        inputCorrect(message)
    } else {
       inputIncorrect(message)
    }
}


  





 


