import Answer from '../Models/Answer';
let ans = new Answer(); 
let num = "";

export default class QuestionView{
    static disableNextButton(){
        document.querySelector('.button_next').disabled = true;
        document.querySelector('.button_next').style.backgroundColor = 'grey';
    }

    static enableNextButton(){
        document.querySelector('.button_next').disabled = false;
        document.querySelector('.button_next').style.backgroundColor = 'blue';
    }

    static enablePrevButton(){
        document.querySelector('.button_prev').disabled = false;
        document.querySelector('.button_prev').style.backgroundColor = 'orange';
    }

    static disablePrevButton(){
        document.querySelector('.button_prev').disabled = true;
        document.querySelector('.button_prev').style.backgroundColor = 'grey';
    }

    
    static showQuestion(questions,pos){
        let qstnsAnswered = ans.getAnsweredQuestionsCount();
        document.getElementById("ques_attempted").innerHTML= qstnsAnswered;
        num=ans.getAnswerId(questions[pos].id);
       if((pos!== 0 && ans.getAnswerId(questions[pos-1].id) == undefined)){
        this.disableNextButton();
        alert("please choose an option");
       }else{
        this.enableNextButton();
        document.getElementById("question").innerHTML="";
        if(document.getElementById("answer")){
            document.getElementById("answer").innerHTML="";
        }
        document.getElementById("question").innerHTML =`<h1> ${questions[pos].title}</h1>`;
        
        if(questions[pos].type === "radiogroup"){
            let radioElement = document.createRange().createContextualFragment(
                this.createRadioGroupElements(questions[pos].options[0],questions[pos].id,num), 
            );
            document.getElementById("question").appendChild(radioElement);

        }else{
            let dropdownElement = document.createRange().createContextualFragment(
                this.createDropdownElements(questions[pos].options[0],questions[pos].id,num), 
            );
            document.getElementById("question").appendChild(dropdownElement);        }

            document.querySelector('#answer').addEventListener('change',event =>{
            
            ans.addAnswer(event.target.name,event.target.value);
            qstnsAnswered = ans.getAnsweredQuestionsCount();
            document.getElementById("ques_attempted").innerHTML= qstnsAnswered;
            if(qstnsAnswered == questions.length){
                this.disableNextButton();
                document.querySelector('.submit').style.display = 'block';
            }
            if (!(pos == questions.length -1)){
                this.enableNextButton();
            }
            
        });
        document.querySelector('.submit').style.display = 'none';
        this.enablePrevButton();
        if(pos === 0 && questions.length > 1){
            document.querySelector('.submit').style.display = 'none';
            this.disablePrevButton();
            document.querySelector('.button_next').disabled = false;
        }else{
            if(pos === questions.length-1 && qstnsAnswered == questions.length){
                this.disableNextButton();
                document.querySelector('.submit').style.display = 'block';
        }
            this.enablePrevButton();
        }
        document.querySelector('.button_prev').id=pos-1;
        document.querySelector('.button_next').id=pos+1;
    }

    }
    
    
    static createRadioGroupElements(options,qid,num){

        if (num == -1 || num == undefined || num == null){
            this.disableNextButton();
        }else{
            this.enableNextButton();
        }

        let ele='<div id="answer">';
        for(let i=0;i<options.length;i++){
            ele += `<input type="radio" name ="${qid}" value="${i}"`;
            if (num == i) {
                ele+=`checked="true"`;
            }
            ele+=`>${options[i]}</input>`;

        }  
        ele+='</div>';
        return ele;


    }

    static createDropdownElements(options,qid,num){
        if (num == -1 || num == undefined || num == null ){
                this.disableNextButton();
            }else{
                this.enableNextButton();
            }
        let ele=`<div id="answer"><select name=${qid}>`;
        for(let i=0;i<options.length;i++){
            ele += `<option value="${i}"`;
            if (num == -1 && i==0) {
                ele+=`selected="selected"`;
            }else if(num == i && i!= 0){
                ele+=`selected="selected"`;
            }
            ele+=`>${options[i]}</option>`;
        }
        ele+='</select></div>';
        return ele;

    }

}