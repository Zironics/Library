let addbtn=document.querySelector("#add");
let image=document.querySelector('#plus');
let overlay=document.querySelector('.overlay');
let modal=document.querySelector(".add-container");
let form=document.querySelector("form");
let submitbtn=document.querySelector('#submit');
let bookAuthor=document.querySelector("#book-author");
let bookName=document.querySelector("#name");
let bookPages=document.querySelector("#pages");
let checkbox=document.querySelector('#check');
let deletebtns,readbtn;

// functions
function setActive()
{
    overlay.classList.add('active');
    modal.classList.add('active');
}
function removeActive()
{
    overlay.classList.remove('active');
    modal.classList.remove('active');
    clearInput();
}

function book(name,author,page,read)
{
    this.name=name;
    this.author=author;
    this.page=page;
    this.read=read;
}

function clearInput()
{
    bookAuthor.value='';
    bookName.value='';
    bookPages.value='';
}

function getBook(){
    let new_book=new book(bookName.value,bookAuthor.value,bookPages.value,checkbox.checked);
    return new_book;
}

function changeReadStatus(e){
    let op=e.target.parentNode;
    let div=op.parentNode;
    let hread=div.childNodes[6]; 
    if(hread.textContent==='Book read')
    {
        hread.classList.remove('read-active');
        hread.classList.add('read-disable');
        hread.textContent='Book not read';
    }
    else 
    {
        hread.classList.remove('read-disable');
        hread.classList.add('read-active');
        hread.textContent='Book read';
    }
    
}


const createDiv = (book) => {
    let div=document.createElement('div');
    div.setAttribute('class','book-container');
    let delet=document.createElement('button');
    delet.setAttribute('class','delete');
    delet.textContent='Delete';
    let hAuthor=document.createElement('h4');
    hAuthor.setAttribute('id','author');
    hAuthor.textContent='Author:';
    let htitle=document.createElement("h4");
    htitle.setAttribute('id','title');
    htitle.textContent='Title:';
    let hpages=document.createElement("h4");
    hpages.setAttribute('id','nb-pages');
    hpages.textContent='Pages:';
    let pauthor=document.createElement("p");
    pauthor.setAttribute('id',"author-name");
    pauthor.textContent=book.author;
    let ptitle=document.createElement("p");
    ptitle.setAttribute("id",'book-title');
    ptitle.textContent=book.name;
    let pPages=document.createElement("p");
    pPages.setAttribute('id','book-pages');
    pPages.textContent=book.page;
    let options=document.createElement('div');
    options.setAttribute('class','options');
    let readtoggle=document.createElement('button');
    readtoggle.setAttribute('class','read-btn');
    readtoggle.textContent='Toggle read status';
    let read=document.createElement("h4");
    read.setAttribute("class",'read');


    if(book.read){
        read.textContent='Book read';
        read.setAttribute('class','read-active');
    }
    else
    {
        read.textContent='Book not read';
        read.setAttribute('class','read-disable');
    }
    
    let content=document.querySelector('.content');
    content.appendChild(div);
    div.appendChild(hAuthor);
    div.appendChild(pauthor);
    div.appendChild(htitle);
    div.appendChild(ptitle);
    div.appendChild(hpages);
    div.appendChild(pPages);
    div.appendChild(read);
    div.appendChild(options);
    options.appendChild(delet);
    options.appendChild(readtoggle);
    deletebtns=document.querySelectorAll('.delete');
    readbtn=document.querySelectorAll('.read-btn');
    deleteListen();
    readListen();
}

const deleteDiv = (element) => {
    let opt=element.parentNode;
    let div=opt.parentNode;
    div.remove();
}

function deleteListen()
{
    deletebtns.forEach(element =>{
        element.addEventListener('click',()=>{
            deleteDiv(element);
        });
    });
}

function readListen(){ 
    readbtn.forEach(element => {
    element.addEventListener('click',changeReadStatus);
    });
}
//eventListeners

addbtn.addEventListener("mousedown",function(e)
{ 
    image.setAttribute('src','plus-white.png');
});

addbtn.addEventListener("mouseup",function(e){
    image.setAttribute("src",'plus-black.png');
});

addbtn.addEventListener("click",setActive);

form.addEventListener("submit",function(e){
    let new_book=getBook();
    createDiv(new_book);
    removeActive();
});

overlay.addEventListener("click",removeActive);

