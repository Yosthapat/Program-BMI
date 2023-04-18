function BMI(mass,height){
    var result= mass/(height*height)
    console.log(result)
    document.getElementById("result").innerHTML=result
}