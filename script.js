// declarations 
let table = document.getElementById("books") // main container 
const form = document.getElementById("form") // pop up form
const newBook = document.getElementById("new") 
const bookn = document.getElementById("bookname") // book name input field 
const submitBtn = document.getElementById("submit") // submit button from the form 
const writer = document.getElementById("writer") // writer's name input field 
const pages = document.getElementById("pages") // number of pages input field 
const checkBox = document.getElementById("check") // read status check button
const crossBtn = document.getElementById("end") // close pop up button 
const tableBody = document.querySelector("tbody") 




let myLibrary = []

// main cosntructor function with name , author , number of pages and read status 
function book(name,author,pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    

}

//mannually added book 
animalFarm = new book("Animal farm","George Orwell",123, "✔")
myLibrary.push(animalFarm)
// 

// eventlistners 
crossBtn.addEventListener("click",closeForm)
newBook.addEventListener("click",formPopup)
table.addEventListener("click",removeElement)
submitBtn.addEventListener("click",storeInformation)
tableBody.addEventListener("click",changeStatus)






function storeInformation(e){
    if(bookn.value ==""|| writer.value == "" ||pages.value === ""){
        alert("please fill out the fields")
        return
    }


    
    if(checkBox.value = "on"){
        checkBox.value = "☒"

        
    }
    else if(checkBox.value!= "on"){
       checkBox.value =  "✔"
    }

   
    let newBook = new book(`${bookn.value}`,`${writer.value}`,`${pages.value}`,`${checkBox.value}`)
    
    
 
    myLibrary.push(newBook)
    let lastElement = myLibrary.slice(-1).pop()
    let lastElementArray  = []
    lastElementArray.push(lastElement)
    addBooks(lastElementArray);

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

       
    }
    
    
    
}



addBooks(myLibrary)




function changeStatus(e){
    if(e.target.classList.contains("read")){
        
       if(e.target.dataset.status == "☒"){
           e.target.dataset.status = "✔"
           e.target.style.color = "green"
           myLibrary[e.target.dataset.index].read = "✔"
           e.target.textContent = e.target.dataset.status
          
       }else if(e.target.dataset.status == "✔"){
        e.target.dataset.status = "☒"
        e.target.textContent = e.target.dataset.status
        myLibrary[e.target.dataset.index].read = "☒"
        e.target.style.color = "red"
    }
       console.log(e.target.dataset.status)
       

    }
}


    
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
function addBooks(array){
    array.forEach(book=> {
          
        let row = document.createElement("tr")
        let data1 = document.createElement("td")
        let data2 = document.createElement("td")
        let data3 = document.createElement("td")
        let data4 = document.createElement("td")
        let data5 = document.createElement("td")
        data5.dataset.index = myLibrary.indexOf(book)
        data4.dataset.index = myLibrary.indexOf(book)
        row.classList.add("row")
        row.setAttribute("id","row")
        data1.textContent = book.name
        data2.textContent = book.author;
        data3.textContent = book.pages;
        if(book.read == "✔"){
            data4.style.color = "green"
             
        }else if(book.read == "☒"){
            data4.style.color = "red"

        }
        data4.style.fontSize = "25px"
        data4.textContent = book.read;
        
        
        data5.textContent = "x"
        data1.dataset.name = book.name
        data4.dataset.status = book.read
        data4.classList.add("read")
        data5.classList.add("cross")
        data5.setAttribute("id","remove")
        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        row.appendChild(data4)
        row.appendChild(data5)
        tableBody.appendChild(row)
    
        
    
    
    
    });
    

}

