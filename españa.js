var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+""
document.getElementById("player2_name").innerHTML=player2_name+""
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Turno para preguntar a:"+player1_name
document.getElementById("player_answer").innerHTML="Turno para responder a:"+player2_name
function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
var questions="player1_name";
var answers="player2_name";
function check(){
var wordstorage=document.getElementById("input_check_box").value;
var lowercasedetector=wordstorage.toLowerCase();
console.log(lowercasedetector);
if(lowercasedetector==word){
    if(answers=="player1_name"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score
}
if(answers=="player2_name"){
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score
}
}
if(answers=="player1_name"){
answers="player2_name";
document.getElementById("player_answer").innerHTML="Turno para responder a:"+player2_name;    
}
if(answers=="player2_name"){
answers="player1_name";
document.getElementById("player_answer").innerHTML="Turno para responder a:"+player1_name;
}
if(questions=="player1_name"){
questions="player2_name";
document.getElementById("player_question").innerHTML="Turno para preguntar a:"+player2_name;    
}
if(questions=="player2_name"){
questions="player1_name";
document.getElementById("player_question").innerHTML="Turno para preguntar a:"+player1_name;
}
document.getElementById("output").innerHTML="";
}