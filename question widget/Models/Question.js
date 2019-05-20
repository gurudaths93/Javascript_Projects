import * as json from '../data/QuestionBank.json';
import QuestionView from '../Views/QuestionView';

export default class Question {
     

    constructor(){
        this.allQuestions = [];
        this.curQuestion = 0;
    
    }
    
    addQuestion(id,title,type,options){
    let question =new Question();   
    question.id =id;
    question.title = title;
    question.type = type;
    question.options = [options];
    return question;
    }

    static showQuestion(pos=0){
       let qus =new Question(pos);
       qus.loadQuestions();
       QuestionView.showQuestion(qus.allQuestions,pos);

    }
     loadQuestions() {
        document.getElementById('total_questions').innerText = json.questions.length;

        for(let i=0;i<json.questions.length;i++){
            this.allQuestions[i] = this.addQuestion(json.questions[i].id,
                json.questions[i].title,
                json.questions[i].type,
                json.questions[i].options);
        }
        
    }
    
}