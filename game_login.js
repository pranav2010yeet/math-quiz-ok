function login(){
       player1_name=document.getElementById("player1_name").value;

      player2_name=document.getElementById("player2_name").value;

    localStorage.setItem("Player1",player1_name);
   localStorage.setItem("Player2",player2_name);

   window.location="game_page.html";
}

