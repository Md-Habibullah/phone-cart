// Phone area


var phnPrice = document.getElementById('phn-price').innerText;
const phnPriceNum = parseFloat(phnPrice);


    // plus event handler


let btn1 = document.getElementById('phn-plus');
btn1.addEventListener('click', function(){
    var inputPlus = document.getElementById('input-num').value;
    var inputPlusNum = parseFloat(inputPlus);

    document.getElementById('input-num').value = inputPlusNum+1;

    var phnPriceCount = document.getElementById('phn-price').innerText
    var doPhnPriceCount = parseFloat(phnPriceCount)

    document.getElementById('phn-price').innerText = phnPriceNum + doPhnPriceCount
})


    // minus event handler

let btn2 = document.getElementById('phn-minus');
btn2.addEventListener('click', function(){
    var inputMinus = document.getElementById('input-num').value;
    var inputMinusNum = parseFloat(inputMinus);

    if(inputMinusNum>0){
        document.getElementById('input-num').value = inputMinusNum-1;

        var phnPriceCount = document.getElementById('phn-price').innerText
        var doPhnPriceCount = parseFloat(phnPriceCount);

    let m = phnPriceNum - doPhnPriceCount;
    let n = Math.abs(m)
    document.getElementById('phn-price').innerText = n;
    }
})



// Cover Area

var coverPrice = document.getElementById('cover-price').innerText;
const coverPriceNum = parseFloat(coverPrice);

   // plus event handler


   let btn3 = document.getElementById('cover-plus');
   btn3.addEventListener('click', function(){
       var inputPlus = document.getElementById('input-num2').value;
       var inputPlusNum = parseFloat(inputPlus);
   
       document.getElementById('input-num2').value = inputPlusNum+1;
   
       var coverPriceCount = document.getElementById('cover-price').innerText
       var doCoverPriceCount = parseFloat(coverPriceCount);
   
       document.getElementById('cover-price').innerText = coverPriceNum + doCoverPriceCount
   })
   
   
       // minus event handler
   
   let btn4 = document.getElementById('cover-minus');
   btn4.addEventListener('click', function(){
       var inputMinus = document.getElementById('input-num2').value;
       var inputMinusNum = parseFloat(inputMinus);
   
       if(inputMinusNum>0){
           document.getElementById('input-num').value = inputMinusNum-1;
   
           var coverPriceCount = document.getElementById('cover-price').innerText
           var docoverPriceCountCount = parseFloat(coverPriceCount);
   
       let x = coverPriceNum - docoverPriceCountCount;
       let y = Math.abs(x)
       document.getElementById('cover-price').innerText = y;
       }
   })