function checkuser(userID1, userID2){
	switch(userID1){
		case "42648380417":
		case "17941466":
		case "14947148876":
		case "10125217811":
			$('#pfp').css('border', 'solid blue');
			$('#name1').css('color', '#00c0f9');
			$('#odometer2').css('color', '#24fff5');
			$('#pfp').css('filter', 'blur(0px)')
			$('#pfp').css('border-radius', '0');
		break;
		case "37217076350":
			$('#pfp').css('filter', 'blur(0px)')
			$('#pfp').css('border', 'solid green');
			$('#name1').css('color', '#25eb00');
			$('#odometer2').css('color', '#3eff3e');
			$('#pfp').css('border-radius', '0');
		break;
		case "713290421":
		case "21460398":
		case "9287261029":
		case "2651834442":
		case "8296823329":
			$('#pfp').css('border', 'solid red')
			$('#pfp').css('filter', 'blur(10px)')
			$('#pfp').css('border-radius', '100%')
			$('#name1').css('color', '#FF0000')
			$('#odometer2').css('color', '#FF0000')
		break;
		default:
			$('#pfp').css('filter', 'blur(0px)')
			$('#pfp').css('border', 'solid black');
			$('#pfp').css('border-radius', '0');
			$('#name1').css('color', '#FFFFFF');
			$('#odometer2').css('color', '#FFFFFF');
		break;
	}
	
	switch(userID2){
		case "42648380417":
		case "17941466":
		case "14947148876":
		case "10125217811":
			$('#pfp3').css('filter', 'blur(0px)');
			$('#pfp3').css('border', 'solid blue');
			$('#name2lol').css('color', '#00c0f9');
			$('#odometer3').css('color', '#24fff5');
			$('#pfp3').css('border-radius', '0');
		break;
		case "37217076350":
			$('#pfp3').css('border', 'solid green');
			$('#name2lol').css('color', '#25eb00');
			$('#pfp3').css('filter', 'blur(0px)');
			$('#odometer3').css('color', '#3eff3e');
			$('#pfp3').css('border-radius', '0');
		break;
		case "713290421":
		case "21460398":
		case "9287261029":
		case "2651834442":
		case "8296823329":
			$('#pfp3').css('border', 'solid red');
			$('#pfp3').css('border-radius', '100%');
			$('#name2lol').css('color', '#FF0000');
			$('#pfp3').css('filter', 'blur(10px)')
			$('#odometer3').css('color', '#FF0000');
		break
		default:
			$('#pfp3').css('border', 'solid black');
			$('#pfp3').css('filter', 'blur(0px)');
			$('#pfp3').css('border-radius', '0');
			$('#name2lol').css('color', '#FFFFFF');
			$('#odometer3').css('color', '#FFFFFF');
		break
	}
}