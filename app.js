const BASE_URL =
  "https://v6.exchangerate-api.com/v6/0f6ced279b7f5b315898b44b/pair";

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const dropdown = document.querySelectorAll('.dropdown select');  
const msg = document.querySelector('.msg');
const currResult = document.querySelector('.toCurrCode');
const btn = document.querySelector("form button");



//  to make flags at default 
for(let select of dropdown ){
    for(currCode  in countryList){
       let newOption  = document.createElement("option");
       newOption.innerText =currCode ;
       newOption.value = currCode;
       
       if(select.name === "from" && currCode ===  "USD"){
        newOption.selected="selected";

       }else  if(select.name === "to" && currCode ===  "INR"){
        newOption.selected="selected";

       }
select.append(newOption);
    }
    select.addEventListener("change" ,(evt) =>  {
        updateFlag(evt.target);

    });

}


// // Check if msg and curResult are empty before fetching data
// if (msg.innerHTML === "" && curResult.innerHTML === "") {
//     const URL = `https://v6.exchangerate-api.com/v6/0f6ced279b7f5b315898b44b/pair/USD/INR`;
    
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data.conversion_rate;
    
//     // Update msg and curResult with the values from the API
//     msg.innerHTML = rate;
//     curResult.innerHTML = 'INR'; // Use quotes around 'INR'
// }

//  ApI code 
async function apiUse(amtVal){
    const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}`;
    
    let response = await fetch(URL);
    let data = await response.json();
    let rate  = data.conversion_rate;

    
    let final_conversion = amtVal*rate ; 
    
    
    msg.innerHTML = final_conversion.toFixed(4) +" " ;
    currResult.innerHTML = toCurr.value ;
}
// it will change the flag on the basis of currency code 
const updateFlag = (element) =>       {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};
 
//when we press button of exchange rate 
btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    if(amtVal < 1 || amtVal ==="" ){
        amtVal = 1;
        amount.value = "1";
    }
   apiUse(amtVal);
})






        