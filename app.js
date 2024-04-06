const BASE_URL =
  "https://v6.exchangerate-api.com/v6/0f6ced279b7f5b315898b44b/pair";

const toCurr = document.querySelector(".from select");
const fromCurr = document.querySelector(".to select");

const dropdown = document.querySelectorAll('.dropdown select');  
const msg = document.querySelector('.msg');


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


const updateFlag = (element) =>       {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};
 const btn = document.querySelector("form button");

btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
    if(amtVal < 1 || amtVal ==="" ){
        amtVal = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${toCurr.value}/${fromCurr.value}`;
    console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    let rate  = data.conversion_rate;

    console.log(rate);
    let final_conversion = amtVal*rate ; 
    console.log(final_conversion)
    
    msg.innerHTML = final_conversion;




})




        