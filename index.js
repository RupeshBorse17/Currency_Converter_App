
const base_url = "https://api.frankfurter.app/latest";





const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");


for (select of dropdowns){
    for(currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;

        if(select.name === "from" && currcode === "USD"){
            newoption.selected = "selected";
        }
        else if(select.name === "to" && currcode === "INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);
    }

    select.addEventListener("change",(evt) =>{
        updateflag(evt.target);
    });
}


const updateflag = (element)=>{
    let currcode = element.value;
    console.log(currcode);
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

// btn.addEventListener("click",async(evt)=>{

//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtvalue = amount.value;

//     if(amtvalue === "" || amtvalue < 1){
//         amtvalue = 1;
       
//     }
//     console.log(amtvalue);


//     //const URL = `${base_url}?amount=${amtvalue}&from=${fromcurr.value}&to=${tocurr.value}`;
//     const URL = `${base_url}?from=${fromcurr.value}&to=${tocurr.value}`;


    

//     try {
//         let response = await fetch(URL);
//         let data = await response.json();
        
        
//         let rate = data.rates[tocurr.value];
//         console.log(rate);

        
//         let msg = document.querySelector(".msg");
//         msg.innerText = `${amtvalue} ${fromcurr.value} = ${rate} ${tocurr.value}`;
        


//     }catch (error) {
//         console.log("API Error:", error);
//     }



  
    




    
    
//     });






// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");

// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".to select");

// for (let select of dropdowns) {
//     for (let currcode in countryList) {
//         let newoption = document.createElement("option");
//         newoption.innerText = currcode;
//         newoption.value = currcode;

//         if (select.name === "from" && currcode === "USD") {
//             newoption.selected = "selected";
//         } else if (select.name === "to" && currcode === "INR") {
//             newoption.selected = "selected";
//         }
//         select.append(newoption);
//     }

//     select.addEventListener("change", (evt) => {
//         updateflag(evt.target);
//     });
// }

// const updateflag = (element) => {
//     let currcode = element.value;
//     let countrycode = countryList[currcode];
//     let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newsrc;
// };

// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtvalue = amount.value;

//     if (amtvalue === "" || amtvalue < 1) {
//         amtvalue = 1;
//         amount.value = "1";
//     }

//     const URL = `${base_url}?amount=${amtvalue}&from=${fromcurr.value}&to=${tocurr.value}`;

//     try {
//         let response = await fetch(URL);
//         let data = await response.json();
//         console.log(data);

//         let rate = data.rates[tocurr.value];
//         const msg = document.querySelector(".msg");
//         msg.innerText = `${amtvalue} ${fromcurr.value} = ${rate} ${tocurr.value}`;
//     } catch (error) {
//         console.log("API error:", error);
//     }
// });


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;

    if (amtvalue === "" || amtvalue < 1) {
        amtvalue = 1;
        amount.value = "1";
    }

    const URL = `${base_url}?amount=${amtvalue}&from=${fromcurr.value}&to=${tocurr.value}`;

    try {
        let response = await fetch(URL);
        let data = await response.json();
        let convertedAmount = data.rates[tocurr.value];

        let msg = document.querySelector(".msg");
        msg.innerText = `${amtvalue} ${fromcurr.value} = ${convertedAmount} ${tocurr.value}`;
    } catch (error) {
        console.log("API Error:", error);
    }
});














