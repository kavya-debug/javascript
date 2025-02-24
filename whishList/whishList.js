

const addButton = document.querySelector(".b-add");

const divName = document.querySelector(".name");

let count = 0;
let itemList = [];
addButton.addEventListener("click", function () {

    let inputValue = document.querySelector(".form-input").value;
    count = count+1;
     itemList.push({"id":count,"value":inputValue,isComplted:false});

     loadData(itemList);

});



divName.addEventListener("click",function(e){
let id = e.target.id;
console.log("id..............",id);
itemList = itemList.map(item =>  (item.id == (id.split("-")[1])) ? {...item, isComplted : !item.isComplted}  : item );

itemList = itemList.filter(item =>  item.id != id );
console.log(itemList);

  loadData(itemList);
});


function loadData(itemList){
    divName.innerHTML = "";
    itemList.map(itemList => {
        const div = document.createElement("div");

        div.innerHTML = `<input id=${"check-" + itemList.id} ${itemList.isComplted === true ? "checked" : ""} class="checkbox-input" type="checkbox">
        <label class="label ${itemList.isComplted === true ? "decoration" : ""}">${itemList.value}</label>
        <button id=${itemList.id} class="button btn-primary cursor">Delete</button>`;
    
        divName.appendChild(div);
    });
}

