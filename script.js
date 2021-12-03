import App from './class/app.js';

let titleID = 'title';
let authorID = 'author';
let priorityID = 'priority';
let categoryID = 'categories';
let submitID = 'submit';
let booksID = 'books';

let app = new App(titleID, authorID, priorityID,categoryID,submitID,booksID);

app.Init();

