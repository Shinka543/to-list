var inputBox=document.getElementById("input-box");
var listContainer=document.getElementById("list-container");


function addTask (){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        
        let Addlist=`<li>${inputBox.value}<label id="day">${writeTime.toLocaleDateString()}</label><span>\u00d7</span></li>`;
        document.getElementById("list-container").insertAdjacentHTML('beforeend',Addlist);
    }
    inputBox.value="";
    saveDate();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem("date",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("date");
}
showTask()


var btn = document.getElementById('input-box');

    // Enterキー押下時、送信処理が実行する
    window.document.onkeydown = function(event){
        if (event.key === 'Enter') {
            addTask ();
        }
    }

    // inputBox.addEventListener("keyup", function(event) {
    //     if (event.which === 13) {
    //       event.preventDefault();
    //       addTask();
    //     }
    //方法2
function DeleteChecked(){
    var checkedItems = document.querySelectorAll(".checked");
  checkedItems.forEach(function(item){
    item.remove();
  });
  saveDate();
}

function reset(){
    if(confirm("Are you sure to continue ?")){
    var liItems = document.querySelectorAll("li");
    liItems.forEach(function(item){
    item.remove();
    });
    }
  saveDate();
}

const writeTime = new Date();
console.log(writeTime);
//time set

