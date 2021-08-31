// declarations 
let table = document.getElementById("books") // main container 
const form = document.getElementById("form") // pop up form
const newBook = document.getElementById("new") 
const bookn = document.getElementById("bookname") // book name input field 
const submitBtn = document.getElementById("submit") // submit button from the form 
const writer = document.getElementById("writer")// writer's name input field 
const pages = document.getElementById("pages") // number of pages input field 
const checkBox = document.getElementById("check") // read status check button
const crossBtn = document.getElementById("end") // close pop up button 
const tableBody = document.querySelector("tbody") 


class book{
    constructor(name,author,pages,read){
    this.name = name
    this.author = author;
    this.pages = pages;
    this.read = read;
}
}

let myLibrary = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : []

// mannually added book
animalFarm = new book("Animal farm","George Orwell", 123, "✔")







//mannually added book 



// eventlistners 
crossBtn.addEventListener("click",closeForm)
newBook.addEventListener("click",formPopup)
table.addEventListener("click",removeElement)
submitBtn.addEventListener("click",storeInformation)
tableBody.addEventListener("click",changeStatus)






function storeInformation(e){
    
    if(bookn.value ==""|| writer.value == "" ||pages.value === ""||checkBox.value === ""){
        alert("please fill out the fields")
        return
    }
    

        
    

    
  
   
    let newBook = new book(`${bookn.value}`,`${writer.value}`,parseInt(pages.value),`${checkBox.value}`)
    
    
 
    myLibrary.push(newBook)
    bookMaker(newBook)
    localStorage.setItem('books', JSON.stringify(myLibrary))

    table.classList.remove("display")

    form.style.display = "none"
   
    bookn.value = ""
    writer.value = ""
    pages.value = ""
    checkBox.value = ""
   
    
}
function formPopup(){
    table.classList.add("display")
    form.style.display = "flex"
}
function closeForm(){
    form.style.display = "none"
    table.classList.remove("display")
}


function removeElement(e){
    if(e.target.classList.contains("cross")){
        console.log(e.target.dataset.index)
        parentEL = e.target.parentElement
        tableBody.removeChild(parentEL)
        myLibrary = arrayRemove(myLibrary,myLibrary[e.target.dataset.index])
        localStorage.setItem('books', JSON.stringify(myLibrary))


       
    }
    
    
    
}

myLibrary.forEach(element=>{bookMaker(element)})
// data.forEach(thingy=>{
//     bookMaker(thingy)
// })





function changeStatus(e){
    if(e.target.classList.contains("read")){
        
       if(e.target.dataset.status == "☒"){
           e.target.dataset.status = "✔"
           e.target.style.color = "green"
           myLibrary[e.target.dataset.index].read = "✔"
           localStorage.setItem('books', JSON.stringify(myLibrary))
           e.target.textContent = e.target.dataset.status
          
       }else if(e.target.dataset.status == "✔"){
        e.target.dataset.status = "☒"
        e.target.textContent = e.target.dataset.status
        myLibrary[e.target.dataset.index].read = "☒"

        localStorage.setItem('books', JSON.stringify(myLibrary))
        e.target.style.color = "red"
    }
      
       

    }
}


    
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}


 function bookMaker(bookInstance){

    let row = document.createElement("tr")
    let data1 = document.createElement("td")
    let data2 = document.createElement("td")
    let data3 = document.createElement("td")
    let data4 = document.createElement("td")
    let data5 = document.createElement("td")
    data5.dataset.index = myLibrary.indexOf(bookInstance)
    data4.dataset.index = myLibrary.indexOf(bookInstance)
    row.classList.add("row")
    row.setAttribute("id","row")
    data1.textContent = bookInstance.name
    data2.textContent = bookInstance.author;
    data3.textContent = bookInstance.pages;
    if(bookInstance.read == "✔"){
        data4.style.color = "green"
         
    }else if(bookInstance.read == "☒"){
        data4.style.color = "red"

    }
    data4.style.fontSize = "25px"
    data4.textContent = bookInstance.read;
    
    
    data5.textContent = "x"
    data1.dataset.name = bookInstance.name
    data4.dataset.status = bookInstance.read
    data4.classList.add("read")
    data5.classList.add("cross")
    data5.setAttribute("id","remove")
    row.appendChild(data1)
    row.appendChild(data2)
    row.appendChild(data3)
    row.appendChild(data4)
    row.appendChild(data5)
    tableBody.appendChild(row)

    
}
