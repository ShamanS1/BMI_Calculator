function getbmivalue(){
   var weight = document.getElementById('weight').value;
   var height = document.getElementById('height').value;
   var bmi = weight/(height*height).toFixed(2);
   document.getElementById('bmivalue').value = bmi;
   
   if(bmi<18.5){
       document.getElementById('health').innerHTML =" You are underweight"
   }
   if ((bmi>18.5)&&(bmi<24.9)) {
       document.getElementById('health').innerHTML = " You are normal"
   } else {
       document.getElementById('health').innerHTML = "You are overweight"
   }
}
