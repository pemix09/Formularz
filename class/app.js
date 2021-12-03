export default class App{

    constructor(titleID, authorID, priorityID,categoryID,submitID,booksID){
        this.title = document.getElementById(titleID);
        this.author = document.getElementById(authorID);
        this.priority = document.getElementById(priorityID);
        this.category = document.getElementById(categoryID);
        this.submit = document.getElementById(submitID);
        this.books = document.getElementById(booksID);
    }

    Init(){
        this.submit.addEventListener('click',this.ValidateInput);
    }
    AddBook(title, author, priority, category){

    }
    ValidateInput(){
        if(this.title.innerHTML.length<1){
            return;
        }
        if(this.author.innerHTML.length<3){
            return;
        }
        let validator = false;
        for(let i = 1;i<=5;i++){
            if(document.getElementById('Priority'+i).checked) validator = true;
        }
        if(!validator){
            return;
        }
        if()

    }
}