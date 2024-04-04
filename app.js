const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown = document.querySelectorAll(".dropdowm select");


// for(let select of dropdown ){
//     for(currCode  in countryList){
//        let newOption  = document.createElement("option");
//        newOption.innerText =currCode ;
//        newOption.value = currCode;
//        select.append(newOption);

//     }
// }



for (let select of dropdown) {
    for (let currCode of Object.keys(countryList)) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.appendChild(newOption);
    }
}


