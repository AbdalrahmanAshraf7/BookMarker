var bookNameInput = document.getElementById("bookName")
var bookUrlInput = document.getElementById("bookUrl")
var rowData = document.getElementById("TableDisplay")
var changeColor=document.getElementById("change")
var message=document.getElementById("alert")




var BookArr=[]

if(localStorage.getItem("BookArr")!=null){

  

  BookArr=JSON.parse(localStorage.getItem("BookArr"))

  

  display(BookArr)
  clearHistoryButton()

}





function book(){

  if(validate(bookNameInput) && validatee(bookUrlInput)){
    Book = {
      name: bookNameInput.value,
      url: bookUrlInput.value.trim(),
    }
  
    BookArr.push(Book)
  
    localStorage.setItem("BookArr",JSON.stringify(BookArr))
  
    display(BookArr)
    restartForm ()
    clearHistoryButton()

    bookName.classList.remove("is-valid")
    bookName.classList.remove("is-invalid")
    bookUrl.classList.remove("is-valid")
    bookUrl.classList.remove("is-invalid")

  }else{


    message.classList.replace("d-none","d-flex")

   
  }


  

}  




function display(arr){

var cartoona=" "

  for(var i=0; i<arr.length; i++){
    cartoona +=`<tr><td class="text-capitalize">${i+1}</td>
        <td class="text-capitalize">${arr[i].name}</td>
        
        <td class="text-capitalize"><button class=" btn btn-visit fs-6 fw-bolder" style="width: 110px;"><i class="fa-solid fa-eye pe-2"></i><a href="#"  target="_blank" onclick="visitButton('${arr[i].url}')">Visit</a> </button></td>
        <td class="text-capitalize"><button class=" btn btn-danger fs-6 fw-bolder" style="width: 110px;"   onclick="deleteButton(${i})" ><i class="fa-solid fa-trash-can"></i> Delete</button></td></tr>
  
  `
  }

  rowData.innerHTML =cartoona
}




function restartForm (){
  bookNameInput.value=""
   bookUrlInput.value=""
}



function deleteButton(deleteIndex){

BookArr.splice(deleteIndex,1)

localStorage.setItem("BookArr",JSON.stringify(BookArr))

display(BookArr)
clearHistoryButton()
 

}


function restartHistory(){
localStorage.clear()
BookArr=[]
display(BookArr)
clearHistoryButton()

}



function clearHistoryButton(){

if(BookArr.length>0){

  changeColor.classList.replace("btn-primary", "btn-danger")
}else{
  changeColor.classList.replace("btn-danger", "btn-primary")

}
}


function visitButton(url){

  window.open(url,"_blank")
  
}


function validate (x){
  
  var regex=/^[a-zA-Z0-9]{3,10}$/


  

  if(regex.test(x.value)){

    x.classList.add("is-valid")
    x.classList.remove("is-invalid")
    return true ;
  }else{
    x.classList.add("is-invalid")
    x.classList.remove("is-valid")
    return false;

  }

}


function validatee (y){
  
  var regex = /^(https:\/\/|www\.)[\w-]+(\.[a-z]{2,10})+(\/[\w\-\.]*)*(\?[a-zA-Z0-9&%=]*)?(\/)?$/i
  

  if(regex.test(y.value.trim())){

    y.classList.add("is-valid")
    y.classList.remove("is-invalid")
    return true ;
  }else{
    y.classList.add("is-invalid")
    y.classList.remove("is-valid")
    return false;

  }

}



function removeAlert(){

  message.classList.replace("d-flex","d-none")

}