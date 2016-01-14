function submitTest(){
	var str1 = $('#str1_input').val();
	var str2 = $('#str2_input').val();

	if(str1 == "" || str2 == "" ){
		$('#result_answer').text = "Be sure to enter values for both strings :)"
	}
	var res = strTest(str1, str2);
	$('#result_answer').text = "Your answer is: " + res;
};

function strTest(str1, str2){
	return str1 + str2;
};
