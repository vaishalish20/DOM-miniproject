var frndTag = document.querySelector("h5");
var addBtn = document.querySelector("#add-btn");
var rmvBtn = document.querySelector("#rmv-btn");
 var flag = 0;
addBtn.addEventListener("click", function () {
    if (flag == 0) {
        frndTag.innerHTML = "Friends!";
        frndTag.style.color = "green";
        addBtn.textContent = "Remove"
        addBtn.style.backgroundColor = "grey";
        flag = 1;
    }
    else {
        frndTag.innerHTML = "Stranger";
    frndTag.style.color = "Red";
    addBtn.textContent = "Add Friends";
        addBtn.style.backgroundColor = "cadetblue";
        flag = 0;
    }
   

});
// rmvBtn.addEventListener("click", function () {
    
    
// })
