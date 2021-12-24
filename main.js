// lấy dữ liệu từ input và thêm vào mảng chứa
var array = []
function showResult() {
    var value = document.querySelector("#inputValue").value;
    array.push(value)
    
    document.getElementById("showNumber1").innerHTML = array
    document.querySelector("#inputValue").value = null
    document.querySelector("#inputValue").focus()
}
function deleteResult() {
    array.splice(array.length-1, 1)
    document.getElementById("showNumber1").innerHTML = array

}
// bài tập 1

function showResult2() {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += Number(array[i])
        document.getElementById("show__result").innerHTML = "Tổng là: " + sum
        document.getElementById("show__result").style.display = "block"
    }
}

// bài tập 2
function showResult3() {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > 0 ) {
            count++
        }
        document.getElementById("show__result2").innerHTML = "Số dương là: " + count
        document.getElementById("show__result2").style.display = "block"
    }
}
// bài tập 3
function showResult4() {
    var find = array[0]
    for(var i = 1; i < array.length; i++) {
        if(Number(find) > Number(array[i]) ) {
          find =array[i]

        }
        document.getElementById("show__result3").innerHTML = "Số nhỏ nhất là : " + find
        document.getElementById("show__result3").style.display = "block"
    }
}

// bài tập 4
function showResult5() {
  var arrayPositve = []
  for(var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      arrayPositve.push(array[i])
      
    }
    var minPositive = arrayPositve[0]
    for(var j = 1; j < arrayPositve.length; j++) 
    if(minPositive > arrayPositve[j]  ) {
        minPositive = arrayPositve[j]
    
    }
      document.getElementById("show__result4").innerHTML = "Số dương nhỏ nhất là : " + minPositive
      document.getElementById("show__result4").style.display = "block"
  }
}

// bài tập 5

function showResult6() {
  var evenArray = []
  for(var i = 0; i < array.length; i++) {
      if(array[i] % 2 == 0 ) {
         evenArray.push(array[i]) 

      }
      var evenNumber = evenArray[evenArray.length-1]
      document.getElementById("show__result5").innerHTML = "Số chẵn cuối cùng là : " + evenNumber
      document.getElementById("show__result5").style.display = "block"
  }
}

// bài tập 6
function showResult7() {
  var num1 = document.getElementById("changeNumber1").value;
  var num2 = document.getElementById("changeNumber2").value;

  var newArray = []
  for(var i = 0; i < array.length; i++) {
       newArray.push(array[i]) 

    }
    for(var j = 0; j < newArray.length; j++) {
      var temp = newArray[num1]
      newArray[num1] = newArray[num2]
      newArray[num2] = temp
    }
      document.getElementById("show__result6").innerHTML = "Mảng sau khi đổi là : " + newArray
      document.getElementById("show__result6").style.display = "block"
 }

//  Bài tập 7

function showResult8() {
  console.log(array);
  var newArray = []
  for(var i = 0; i < array.length; i++) {
       newArray.push(array[i]) 
  
    }
    console.log(newArray);

    for(var j= 0; j < newArray.length; j++) {

      for(var k = 0; k < newArray.length -1; k++) {
        if (Number(newArray[k]) > Number(newArray[k +1])) {
          var temp = newArray[k]
          newArray[k] = newArray[k +1]
          newArray[k +1] = temp

        }
      }
    }
    var content = ""
    for( var i = 0; i < newArray.length; i++) {
      content +=  " " + newArray[i] 
  }
    document.getElementById("show__result7").innerHTML = "Mảng sau khi sắp xếp là : " + content
    document.getElementById("show__result7").style.display = "block"
}

// bài tập 8 
function showResult9() {
  

  var newArray = []
  for(var i = 0; i < array.length; i++) {
       newArray.push(array[i]) 

    }
    var ngToArray = []
    for(var i = 0; i < newArray.length; i++) {
      if(testSNT(newArray[i]) === true) {
        ngToArray.push(newArray[i])
      }
      var ngToNumber = ngToArray[0]
    }
   
      document.getElementById("show__result8").innerHTML = "Số nguyên tố đầu tiên là : " + ngToNumber
      document.getElementById("show__result8").style.display = "block"
 }

      function testSNT(n) {
        var isNgto = true;

        if (n < 2) {
            isNgto = false;
        }
        else if (n == 2) {
            isNgto = true;
        }
        else if (n % 2 == 0) {
            isNgto = false;
        }
        else {
            for (var i = 3; i <= Math.sqrt(n); i += 2)
            {
                if (n % i == 0) {
                    isNgto = false;
                    break;
                }
            }
        }
        
        return isNgto;

      }   


  // bài tập 9
  
  var intergerArray = []
  function addNumber() {
    var num = document.getElementById("changeNumber3").value;
    intergerArray.push(num)
    document.getElementById("showNumber3").innerHTML = intergerArray
    document.querySelector("#changeNumber3").value = null
    document.querySelector("#changeNumber3").focus()
  }  

  function showResult10() {
  

  
    var count = 0;
    for(var i = 0; i < intergerArray.length; i++) {
         if(Number.isInteger(Number(intergerArray[i])) === true) {
          count = count + 1
         }
  
      }
    
     
        document.getElementById("show__result9").innerHTML = "Số nguyên : " + count
        document.getElementById("show__result9").style.display = "block"
   }


// bài tập 10


function showResult11() {
  

  var newArray = []
  for(var i = 0; i < array.length; i++) {
       newArray.push(array[i]) 

    }
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < newArray.length; i++) {
      if(Number(newArray[i]) > 0) {
        soDuong += 1
      }
     else if (Number(newArray[i]) < 0) {
         soAm += 1
     }
    }
  var result =  campareNumber(soDuong,soAm)

   
      document.getElementById("show__result10").innerHTML = "Số dương " + result + " Số Âm"
      document.getElementById("show__result10").style.display = "block"
 }

 function campareNumber(soDuong,soAm) {
   if(soDuong == soAm) {
     return "="
   }
   else if (soDuong > soAm) {
     return ">"
   }
   else if (soDuong < soAm) {
     return "<"
   }
 }