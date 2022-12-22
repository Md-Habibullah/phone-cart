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

    // total section

    let phnPriceAmount = document.getElementById('phn-price').innerText;
    let phnPriceNumber = parseFloat(phnPriceAmount);

    let coverPriceAmount = document.getElementById('cover-price').innerText;
    let coverPriceNumber = parseFloat(coverPriceAmount);

    let subTotal = phnPriceNumber + coverPriceNumber;
    document.getElementById('sub-total').innerText = subTotal;

    //tax area

    let phnTax = document.getElementById('phn-price').innerText;
    let phnTaxAdd = parseFloat(phnTax);

    let coverTax = document.getElementById('cover-price').innerText;
    let coverTaxAdd = parseFloat(coverTax);

    let phnTaxAmount =  0.05 * phnTaxAdd
    let coverTaxAmount = 0.02 * coverTaxAdd

    let tax = phnTaxAmount + coverTaxAmount

    document.getElementById('tax').innerText = Math.round(tax)

    document.getElementById('total').innerText = Math.round(subTotal + tax);
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

    //total

        let phnPriceAmount = document.getElementById('phn-price').innerText;
        let phnPriceNumber = parseFloat(phnPriceAmount);

        let coverPriceAmount = document.getElementById('cover-price').innerText;
        let coverPriceNumber = parseFloat(coverPriceAmount);

        let subTotal = phnPriceNumber + coverPriceNumber;
        document.getElementById('sub-total').innerText = subTotal;
        

        let phnTax = document.getElementById('phn-price').innerText;
        let phnTaxAdd = parseFloat(phnTax);

        let coverTax = document.getElementById('cover-price').innerText;
        let coverTaxAdd = parseFloat(coverTax);

        let phnTaxAmount =  0.05 * phnTaxAdd
        let coverTaxAmount = 0.02 * coverTaxAdd

        let tax = phnTaxAmount + coverTaxAmount

        document.getElementById('tax').innerText = Math.round(tax)

        document.getElementById('total').innerText = Math.round(subTotal + tax);
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

       // total area

        let phnPriceAmount = document.getElementById('phn-price').innerText;
        let phnPriceNumber = parseFloat(phnPriceAmount);

        let coverPriceAmount = document.getElementById('cover-price').innerText;
        let coverPriceNumber = parseFloat(coverPriceAmount);

        let subTotal = phnPriceNumber + coverPriceNumber;
        document.getElementById('sub-total').innerText = subTotal;
        

        let phnTax = document.getElementById('phn-price').innerText;
        let phnTaxAdd = parseFloat(phnTax);

        let coverTax = document.getElementById('cover-price').innerText;
        let coverTaxAdd = parseFloat(coverTax);

        let phnTaxAmount =  0.05 * phnTaxAdd
        let coverTaxAmount = 0.02 * coverTaxAdd

        let tax = phnTaxAmount + coverTaxAmount

        document.getElementById('tax').innerText = Math.round(tax)

        document.getElementById('total').innerText = Math.round(subTotal + tax);

   })
   
   
       // minus event handler
   
   let btn4 = document.getElementById('cover-minus');
   btn4.addEventListener('click', function(){
       var inputMinus = document.getElementById('input-num2').value;
       var inputMinusNum = parseFloat(inputMinus);
   
       if(inputMinusNum>0){
           document.getElementById('input-num2').value = inputMinusNum-1;
   
           var coverPriceCount = document.getElementById('cover-price').innerText
           var docoverPriceCountCount = parseFloat(coverPriceCount);
   
       let x = coverPriceNum - docoverPriceCountCount;
       let y = Math.abs(x)
       document.getElementById('cover-price').innerText = y;

       //total 

            let phnPriceAmount = document.getElementById('phn-price').innerText;
            let phnPriceNumber = parseFloat(phnPriceAmount);

            let coverPriceAmount = document.getElementById('cover-price').innerText;
            let coverPriceNumber = parseFloat(coverPriceAmount);

            let subTotal = phnPriceNumber + coverPriceNumber;
            document.getElementById('sub-total').innerText = subTotal;
            

            let phnTax = document.getElementById('phn-price').innerText;
        let phnTaxAdd = parseFloat(phnTax);

        let coverTax = document.getElementById('cover-price').innerText;
        let coverTaxAdd = parseFloat(coverTax);

        let phnTaxAmount =  0.05 * phnTaxAdd
        let coverTaxAmount = 0.02 * coverTaxAdd

        let tax = phnTaxAmount + coverTaxAmount

        document.getElementById('tax').innerText = tax;

        document.getElementById('total').innerText = subTotal + tax;
       }
   })

