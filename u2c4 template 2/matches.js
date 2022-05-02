// write js code here corresponding to matches.html
var schArr=JSON.parse(localStorage.getItem("schedule"));
displayData(schArr);

function handlefilter(){

var selected =document.getElementById("filterVenue").value; 
    var filterList=schArr.filter(function (elem){
        return elem.matchVenue == selected;

    });

console.log(filterList);
    displayData(filterList);
}

var favouriteArr=JSON.parse(localStorage.getItem("favourites")) || [];



function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
var tr= document.createElement("tr");

var td1=document.createElement("td");
td1.innerText=elem.matchNo
var td2=document.createElement("td");
td2.innerText=elem.TeamA
var td3=document.createElement("td");
td3.innerText=elem.TeamB
var td4=document.createElement("td");
td4.innerText=elem.matchDate
var td5=document.createElement("td");
td5.innerText=elem.matchVenue
var td6=document.createElement("td");
td6.innerText="Add to Favourite";
td6.style.color="green";
td6.style.cursor="pointer";
td6.addEventListener("click",function(){
    FavouriteFun(elem);
});

tr.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr);
    });
}

function FavouriteFun(elem) {
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}