p1_name=localStorage.getItem("Player1")
p2_name=localStorage.getItem("Player2")
document.getElementById("p1name").innerHTML=p1_name
document.getElementById("p2name").innerHTML=p2_name
document.getElementById("qturn").innerHTML="Question turn- "+ p1_name
document.getElementById("aturn").innerHTML="Answer turn- "+p2_name
var p1score=0;
var p2score=0;
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
function send(){
    n1=document.getElementById("n1").value
n2=document.getElementById("n2").value
correct_answer=n1*n2
console.log(correct_answer)


questiontag="<h4 id='word_display'>Q. "+n1+" x "+n2+"</h4>";

answertag="<br> Answer:<input type='text' id='input_check_box'>";

buttontag="<br> <button class='btn btn-info' onclick='check()'>Check</button>";

 row=questiontag+answertag+buttontag;
 document.getElementById("output").innerHTML=row;
 document.getElementById("n1").value=""
 document.getElementById("n2").value=""

}
 
var qturn="player1"
var aturn="player2"

function check(){
 get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
console.log(answer);

if (answer==correct_answer){

    if (aturn="player1"){
      p1score=p1score+1;
    document.getElementById("p1score").innerHTML=p1score;
    
    aturn="player2"
    document.getElementById("aturn").innerHTML="Answer turn- "+p2_name;

    qturn="player1"
    document.getElementById("qturn").innerHTML="Question turn- "+p1_name
    }

    else{
        p2score=p2score+1;
        document.getElementById("p1score").innerHTML=p1score;
        
        aturn="player1"
        document.getElementById("aturn").innerHTML="Answer turn- "+p2_name;

        qturn="player2"
        document.getElementByI("qturn").innerHTML="Question turn"+p1_name;
    
}
}
document.getElementById("output").innerHTML="";


}
