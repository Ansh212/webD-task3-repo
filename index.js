var title = document.querySelector(".first");
var note = document.querySelector(".second");
var finalbox = document.querySelector(".third");
var button = document.querySelector(".addition");

button.addEventListener("click", () => {
    if (note.value == "" || title.value =="") {
        alert("Add a note");
    } else {
        return savednote();
    } 

})

var savednote = function () {
    var notes = document.createElement("div");
    notes.className = "notes"
    notes.innerHTML=`
    <p claass="newtext"><b>${title.value}</b></p>
    <p>${note.value}</p>
    <button class="delete">&#x1f5d1;</button>`

    finalbox.appendChild(notes);
   note.value = "";
   var del = notes.querySelector(".delete");
   del.addEventListener("click", () => notes.remove())

}
