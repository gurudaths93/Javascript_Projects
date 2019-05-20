export default class Answer{
    constructor(){
       this.qids =[];
       this.optionsSelected = [];
       this.size = 0;
    }

    addAnswer(qid,option){
        if(this.qids.indexOf(qid) == -1){
            this.qids.push(qid);
            this.size++;
            this.optionsSelected.push(option);
        }else{
            this.optionsSelected[this.qids.indexOf(qid)] = option;
        }
        console.log(this.qids);
        console.log(this.optionsSelected);
    }

     getAnswerId(qid){
         let index = this.qids.indexOf(qid);
         if (index !== "-1"){
             return this.optionsSelected[index];
         }else{
             this.qids.push(qid);
             this.optionsSelected("");
             return this.optionsSelected[index];
         }
    }

     getAnsweredQuestionsCount(){
         return this.size;
    }



} 