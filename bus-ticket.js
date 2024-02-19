
let totalPrice = 0;
let grandPrice = 0;





// click korle form e nia jbe



document.getElementById("buyTicket").addEventListener("click", function() {
    const section = document.getElementById("topSection");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }

   
});



// seat click korle color chng hobe

function changeColor(event){
    var color = 'green';
    event.style.backgroundColor=color;

}

// seat append and seat er man change and total price 



const cards = document.querySelectorAll(".card")



for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", function(){


       

        // get the title
        const title = card.querySelector('button').innerText;
        const price = parseFloat(
            card.querySelector("span").innerText
        );
      
        
       const titleContainer = document.getElementById("title-container");
       


       const p = document.createElement('p');
       p.innerText = title + " " + " ______  economy _____ 550";
       titleContainer.appendChild(p);

       // total


totalPrice += price;

document.getElementById('totalPrice').innerText = totalPrice



       
    //seat er man barano   
      const currentScoreElement = document.getElementById('seat-up'); 

     const  currentScoreText = currentScoreElement.innerText;
     const currentScore = parseInt(currentScoreText);
     console.log(currentScore);


     const newScore = currentScore + 1;

     currentScoreElement.innerText = newScore;

// seat er number komano

     


const currentNumberElement = document.getElementById('seat-Down'); 

     const  currentNumberText = currentNumberElement.innerText;
     const currentNumber = parseInt(currentNumberText);
     console.log(currentNumber);


     const newNumber = currentNumber - 1;

     currentNumberElement.innerText = newNumber;




     grandPrice += price;

     document.getElementById('grandPrice').innerText = grandPrice
     


}
    
 )};


 


//  coupon code 


const btn = document.getElementById("Apply-button");
btn.addEventListener("click", function(){


    
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join(" ");
   console.log(couponCode);
  
if(couponCode === "NEW15" ){

const discountElement = document.getElementById("grandPrice");
const discountAmount = grandPrice * 0.15;
discountElement.innerText = discountAmount.toFixed(2);


  document.getElementById("label").style.display = "none";






} else if (couponCode === "Couple 20"){

    const discountElement = document.getElementById("grandPrice");
    const discountAmount = grandPrice * 0.2;
    discountElement.innerText = discountAmount.toFixed(2);
    


    document.getElementById("label").style.display = "none";


}
   
else{

    alert("invalid code");

}





});















