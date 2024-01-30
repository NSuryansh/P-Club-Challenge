const allCurrencies = [
    'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK',
    'NZD', 'NOK', 'INR', 'BRL', 'RUB', 'ZAR', 'TRY', 'SGD', 'PLN',
    'THB', 'IDR', 'HUF', 'CZK', 'ILS', 'MXN', 'PHP', 'DKK', 'RON',
    'MYR', 'HRK', 'ARS', 'CLP', 'COP', 'TWD', 'AED', 'SAR', 'KRW',
    'HKD', 'IQD', 'EGP', 'KWD', 'PKR', 'QAR', 'VND', 'MAD', 'BHD',
    'OMR', 'LKR', 'BDT', 'JOD', 'NPR', 'KZT', 'TND', 'UZS', 'BYN',
    'TMT', 'AZN', 'GEL', 'AMD', 'DZD', 'AFN', 'XAG', 'XAU'
];

let sourceCurrencyMenu = document.getElementById("Source_Currency");
let toCurrencyMenu = document.getElementById("To_Currency");
let data;

function givingOptions() {

    const defaultOption = document.createElement("option");
    defaultOption.value = "default";
    defaultOption.textContent = "Select Currency";
    sourceCurrencyMenu.appendChild(defaultOption);

    const defaultToOption = document.createElement("option");
    defaultToOption.value = "default";
    defaultToOption.textContent = "Select To Currency";
    toCurrencyMenu.appendChild(defaultToOption);

    allCurrencies.forEach(currency => {
        const sourceOption = document.createElement("option");
        sourceOption.value = currency;
        sourceOption.textContent = currency;
        sourceCurrencyMenu.appendChild(sourceOption);
        sourceOption.setAttribute("onclick" , "animate()")

        const toOption = document.createElement("option");
        toOption.value = currency;
        toOption.textContent = currency;
        toCurrencyMenu.appendChild(toOption);
    });
    main();
}

givingOptions();

async function main() {
    let response = await fetch("https://openexchangerates.org/api/latest.json?app_id=5b58067b61ea4e72a901515ce1c4bf1d");
    data = await response.json();
    console.log(data);
}

function Converting_Currency() {
    const source_value = document.getElementById("Source_Value").value
    const Source_Currency = document.getElementById("Source_Currency").value;
    const To_Currency = document.getElementById("To_Currency").value;
    
    if(source_value){

        const Rate1 = data.rates[Source_Currency]
        let inUSD = source_value/Rate1;
        console.log(inUSD)
        
        const Rate2 = data.rates[To_Currency]
        let converted_value = inUSD*Rate2;
        converted_value = Number(converted_value.toFixed(3));
        console.log(converted_value);
        
        let to_delete = document.getElementById("final_ans")
        if(to_delete){
            to_delete.remove()
        }
        let outputDiv = document.querySelector(".converted")
        let ans = document.createElement("div")
        ans.setAttribute("id","final_ans")
        ans.textContent = converted_value
        outputDiv.append(ans)

        let oneUSD = 1/Rate1;
        let oneConverted = oneUSD*Rate2
        oneConverted=Number(oneConverted.toFixed(3));
        let lastans = document.querySelector(".boxlast")
        let ltext = document.createElement("span")
        ltext.innerHTML = "1" + Source_Currency + "=" + oneConverted + To_Currency;
        lastans.append(ltext)
    }else{
        let to_delete = document.getElementById("final_ans")
        if(to_delete){
            to_delete.remove()
        }
    }
}

function GivingInput(){

}
function animate1() {
    let animationTo = document.getElementById("To_Currency");
   
    const appear = [
        { backgroundColor: "white",borderColor: "black" }
    ];

    const timingAppear = {
        duration: 4000
    };

    
    let animation = animationTo.animate(appear, timingAppear);

    
    animation.onfinish = function () {
        animationTo.style.backgroundColor = "white";
        animationTo.style.borderColor = "black";
    };

    

}
function animate2(){
    let animationTo2 = document.querySelector(".label2")

    const appear2 =[
        {   color: "black",backgroundColor: "chartreuse"
        }
     ]
     const timingAppear = {
        duration: 4000
    };
 
     let animation2 = animationTo2.animate(appear2,timingAppear)
 
     animation2.onfinish = function () {
         animationTo2.style.backgroundColor = "chartreuse";
         animationTo2.style.color = "black";
     };
}
function animate3(){
    let animationTo3 = document.querySelector(".input_value")

    const appear3=[
        {color:"black",backgroundColor:"aqua"}
    ]
    const timingAppear = {
        duration: 4000
    }

    let animation3 = animationTo3.animate(appear3,timingAppear)

    animation3.onfinish = function () {
        animationTo3.style.backgroundColor = "aqua";
        animationTo3.style.color = "black";
    };
}
function animate4(){
    let animationTo4 = document.getElementById("Source_Value")

    const appear4=[
        {  backgroundColor: "white",borderColor: "black"  }
    ]
    const timingAppear = {
        duration: 4000
    }

    let animation4 = animationTo4.animate(appear4,timingAppear)

    animation4.onfinish = function () {
        animationTo4.style.backgroundColor = "white";
        animationTo4.style.borderColor = "black";
    };
}

    function animate5(){
        let animationTo5 = document.querySelector(".output")
    
        const appear5=[
            {color:"black",backgroundColor:"aqua"}
        ]
        const timingAppear = {
            duration: 4000
        }
    
        let animation5 = animationTo5.animate(appear5,timingAppear)
    
        animation5.onfinish = function () {
            animationTo5.style.backgroundColor = "aqua";
            animationTo5.style.color = "black";
        };
    }
    function animate6(){
        let animationTo6 = document.querySelector(".converted")
    
        const appear6=[
            {  backgroundColor: "white",borderColor: "black"  }
        ]
        const timingAppear = {
            duration: 4000
        }
    
        let animation6 = animationTo6.animate(appear6,timingAppear)
    
        animation6.onfinish = function () {
            animationTo6.style.backgroundColor = "white";
            animationTo6.style.borderColor = "black";
        };
}

function animate7(){
    let animationTo7 = document.querySelector(".CurrencyRates")

    const appear7=[
        {color:"black",backgroundColor:"#ef00ff"}
    ]
    const timingAppear = {
        duration: 8000
    }

    let animation7 = animationTo7.animate(appear7,timingAppear)

    animation7.onfinish = function () {
        animationTo7.style.backgroundColor = "#ef00ff";
        animationTo7.style.color = "black";
    };
}
function animate8(){
    let animationTo8 = document.querySelector(".boxlast")

    const appear8=[
        {  backgroundColor: "white",borderColor: "black"}
    ]
    const timingAppear = {
        duration: 8000
    }

    let animation8 = animationTo8.animate(appear8,timingAppear)

    animation8.onfinish = function () {
        animationTo8.style.backgroundColor = "white";
        animationTo8.style.borderColor = "black";
    };
}

document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus1");
    let toappened = document.getElementById("faq1")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "Currency is a medium of exchange for goods and services replacing the older barter system. In the older times, the exchange between goods and services had no proper foundation for valuing the traded goods and services. It is essentially money issued by the government and is an acceptable form of payment. The modern currency comprises paper and metals in the form of bills and coins. On their own, they are insignificant. The issuing authority and institutions that accept it provide the value; hence it is considered more stable. Countries have developed their currencies over the years based on their standard of living and cost of living.";
        additionalInfo.className = "additional-info";
        toappened.after(additionalInfo);
        toappened.classList.add("tomove");
        additionalInfo.classList.add("tomove")
        
        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove")
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus2");
    let toappened = document.getElementById("faq2")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "Conversion rate is the ratio between two currencies defining the value of one currency to the other. It is useful in foreign exchange markets for trading purposes, hence why it often fluctuate The supply and demand of the currency dictate the conversion rate. That is why institutions such as the governments or the central banks implement policies to inflate or deflate the rates by increasing or decreasing the country's money supply.";
        additionalInfo.className = "additional-info";
        toappened.appendChild(additionalInfo);
        toappened.classList.add("tomove2");       

        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove2")
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus3");
    let toappened = document.getElementById("faq3")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "The exchange rate is the cost of exchanging one currency for another. The rates are generally fluctuating due to economic and political factors. Economic factors are the economic policies implemented, trade balances, economic growth projects, and inflation. Political factors include how politically stable the region is to determine whether it is safe to trade or not.";
        additionalInfo.className = "additional-info";
        toappened.appendChild(additionalInfo);
        toappened.classList.add("tomove3");
      
        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove3")
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus4");
    let toappened = document.getElementById("faq4")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "The currency conversion rates between countries differ because the rates can be floating or fixed. The fixed exchange rate is fixed with another currency. In contrast, the floating exchange rate is calculated based on supply and demand and macroeconomic factors. It depends on the country's government to follow which system suits them best. Then the monetary policies implemented dictate the conversion rate.";
        additionalInfo.className = "additional-info";
        toappened.appendChild(additionalInfo);
        toappened.classList.add("tomove4");
      
        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove4")
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus5");
    let toappened = document.getElementById("faq5")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "For converting, simply enter the desired amount and select the source, destination currencies. The tool will automatically show you the converted amount and the historical exchange rate chart for the selected currency pair.";
        additionalInfo.className = "additional-info";
        toappened.appendChild(additionalInfo);
        toappened.classList.add("tomove5");
      
        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove5")
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let plus1Image = document.getElementById("plus6");
    let toappened = document.getElementById("faq6")
    plus1Image.addEventListener("mouseover", function () {
        let additionalInfo = document.createElement("div");
        additionalInfo.innerText = "Hello, how are you doing?";
        additionalInfo.className = "additional-info";
        toappened.appendChild(additionalInfo);
        toappened.classList.add("tomove");
      
        plus1Image.addEventListener("mouseout", function () {
            additionalInfo.remove();
            toappened.classList.remove("tomove")
        });
    });
});


