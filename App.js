function BMI(mass,height){
    var result= mass/((height*height)/10000)
    document.getElementById("result").innerHTML=result
}