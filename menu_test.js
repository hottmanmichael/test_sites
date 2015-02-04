
$(document).ready();
	
$(document).scroll(function(e) {
		$("#bar.container").toggleClass('open', $(document).scrollTop() >= 50);
	
	if ($("#bar.container").hasClass('open')) {
		$("#menu.menu").addClass('open');
	} else {
		$("#menu.menu").removeClass('open');
	}
	if ($("#menu.menu").hasClass ('open')) {
		$("#list.list").removeClass('flat');
		$("#list.list").addClass('open');
	} else {
		$("#list.list").removeClass('open');
		$("#list.list").addClass('flat');
	}
}); 

	function welcomeName (form) {
		
		var name = form.name.value;
		    $("#result_box").prepend("Welcome, " + name + "!");
		    $(form.name).val("");
		    console.log()	
		}
	$("#name").keypress(function(e) {
		if(e.keyCode == '13') {
			$("#name_btn").click();
		}	
	});	
		

var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';

function choose (form) {	
	var number = Math.random(0, 1);
	var computerChoice = "";
		if (number < .33) {
			var computerChoice = rock;
		} else if (number > .33 && number < .66) {
			var computerChoice = paper;
		} else {
			var computerChoice = scissors;
		}
	$("#userChoice").keypress(function(e) {
		if(e.keyCode == '13') {
			$("#submitButton").click();
		}
	});		

	var userChoice = form.userChoice.value.toLowerCase();
	var listItemRemove = "#list_box li:last-child()";
	var countItemRemove = "#counter_list li:last-child()";
	
  	var num = 0;
  	var countNum = ("<li id='tie'>Tied Games: " + num + "</li>");
  	countNum = parseInt(num.value, 10) + 1;
  	console.log(countNum);

// Clear the form after submission
	$(form.userChoice).val("");
//

		if (userChoice === computerChoice) {
			$(listItemRemove).remove();
			$(countItemRemove).remove();
			$("#result_box ul").prepend("<li>The computer also chose: " + computerChoice  + "<hr>" + "You tied, please choose again!" + "</li>");
			$("#counter_list").append(countNum);
		} else if (userChoice !== rock && userChoice !== paper && userChoice !== scissors) {
			$(listItemRemove).remove();
			$("#result_box ul").prepend("<li>" + userChoice + " is not a valid entry, please re-enter your choice.</li>");
			console.log("something was removed?");

		} else if (computerChoice === rock) {
			if (userChoice === (paper)) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You win!</li>");
			} else if (userChoice === scissors) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You lost...</li>");
			}
		} else if (computerChoice === paper) {
			if (userChoice === rock) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You lost...</li>");
			} else if (userChoice === scissors) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You win!</li>");
			}
		} else if (computerChoice === scissors) {
			if (userChoice === rock) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You win!</li>");
			} else if (userChoice === paper) {
				$(listItemRemove).remove();
				$("#result_box ul").prepend("<li>The computer chose: " + computerChoice + "<hr>" + "You lost...</li>");
				console.log("paper choice")
			}
		} 
};




	