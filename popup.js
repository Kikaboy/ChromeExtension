function calculate(e){
	var result = document.GetElementById("expression").value.trim();
	if(e.keyCode==13){
	var v = document.GetElementById("expression").value.trim();
	var ex = new Expression("");
		if (v != ""){
			try{
			ex.Expression(v);
			result.innerText = "=" + ex.Evaluate();
			}
			catch(e){
			result.innerText = "= ошибка в выражении";
			}
		}
	}
	else result.innerText = "";
}
document.addEventListener('DOMContentLoaded',function(){
	var expr = document.GetElementById('expression');
	expr.addEventListener('keyup', calculate);
})