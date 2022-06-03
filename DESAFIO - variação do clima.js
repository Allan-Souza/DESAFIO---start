const humorVariaComClima = (temp1, temp2, temp3, varia1, varia2) => {
    varia1 = temp1 - temp2
    varia2 = temp2 - temp3
    
    if(temp1 < temp2 && temp2 >= temp3){
      console.log("As pessoas ficaram felizes")
    }else if(temp1 > temp2 && temp2 <= temp3){
      console.log("as pessoas ficaram tristes")
    }else if(temp1 > temp2 && (temp2 > temp3) - varia1){
      console.log("As pessoas estão tristes")
    }else if(temp1 > temp2 && temp2 > temp3 && varia1 == varia2){
      console.log("as pessoas estão felizes")
    }else if(temp1 < temp2 && (temp2 < temp3) - varia1){
      console.log("as pessoas estão felizes")
    }else if(temp1 < temp2 && temp2 < temp3 && varia1 == varia2){
      console.log("as pessoas estão triste")
    }else if(temp1 == temp2){
      console.log("as pessoas ficam felizes")
    }else if(temp2 > temp3){
      console.log("as pessoas ficam felizes")
    }else{
      console.log("as pessoas ficam tristes")
    }
  }
  var temp1 = parseFloat(prompt("Digite a temperatura do 1º dia"))  
  var temp2 = parseFloat(prompt("Digite a temperatura do 2º dia"))
  var temp3 = parseFloat(prompt("Digite a temperatura do 3º dia"))
  
  humorVariaComClima(temp1, temp2, temp3)