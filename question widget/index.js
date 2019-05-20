import Question from './Models/Question';
window.addEventListener('load',() =>{
    Question.showQuestion(0);


    document.querySelector('.button_next').addEventListener('click',event =>{
            event.preventDefault();
            Question.showQuestion(parseInt(event.target.id));
       
    });

    document.querySelector('.button_prev').addEventListener('click',event =>{
        event.preventDefault();
        Question.showQuestion(parseInt(event.target.id));
    });

    

    
    
    
   
    
})



    
