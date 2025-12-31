ul = document.getElementById("table")
let guest = ["nikoloiz","giorgi","mariami","barbare"]

for(let i = 0;i < guest.length;i++){
    let li = document.createElement("li");
    li.textContent = guest[i];
    ul.appendChild(li);
    
}