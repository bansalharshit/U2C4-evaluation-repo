// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",schsubmit)
schArr= JSON.parse(localStorage.getItem("schedule")) || [];


function schsubmit(){
    event.preventDefault();

    var schObj={
        matchNo:document.querySelector("#matchNum").value,
        TeamA:document.querySelector("#teamA").value,
        TeamB:document.querySelector("#teamA").value,
        matchDate:document.querySelector("#date").value,
        matchVenue:document.querySelector("#venue").value
    };
    schArr.push(schObj);
    console.log(schArr);
    localStorage.setItem("schedule",JSON.stringify(schArr));
    window.location.href="matches.html"

}
