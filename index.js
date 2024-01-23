


const banks = [
    {
        "name": "Bank of Springfield",
        "client":"Clients:5000",
        "location": "123 Main St, Springfield, IL",
        "overall_score": 5,
        "opening_hours": "9:00 AM - 5:00 PM",
        "loan_interest_rate": "3.5%"
    },
    {
        "name": "Capital City Bank",
        "client":"Clients:4500",
        "location": "456 Elm St, Capital City, CA",
        "overall_score": 78,
        "opening_hours": "8:30 AM - 4:30 PM",
        "loan_interest_rate": "4.0%"
    },
    {
        "name": "Metro Financial",
        "client":"Clients:4000",
        "location": "789 Oak St, Metroville, NY",
        "overall_score": 72,
        "opening_hours": "10:00 AM - 7:00 PM",
        "loan_interest_rate": "3.75%"
    },
    {
        "name": "Riverside Savings & Loan",
        "client":"Clients:3500",
        "location": "101 River Rd, Riverside, TX",
        "overall_score": 31,
        "opening_hours": "9:00 AM - 6:00 PM",
        "loan_interest_rate": "3.9%"
    }
]

let konecnívysledek = document.getElementById("banky")
for (bank of banks){
    let div = document.createElement("div")
    div.className = "celakarta"

    let jmenobanky = document.createElement("h4")
    jmenobanky.className="jmenobanky"
    jmenobanky.textContent = bank.name

    let clientbanky = document.createElement("span")
    clientbanky.className="clients"
    clientbanky.textContent = bank.client

    let lokacebanky = document.createElement("span")
    lokacebanky.textContent = bank.location
    lokacebanky.className = "banky"

    let overallbanky = document.createElement("span")
    overallbanky.textContent = "score : " + bank.overall_score

    let openingbanky = document.createElement("span")
    openingbanky.textContent = bank.opening_hours

    let loanbanky = document.createElement("span")
    loanbanky.textContent = bank.loan_interest_rate

    let buton = document.createElement("button")
    buton.className = "buton"
    buton.textContent = "Favorite"



    if (bank.overall_score < 55) {
        jmenobanky.classList.add("blue");
        overallbanky.classList.add("blue")
    } else if (bank.overall_score < 75) {
        jmenobanky.classList.add("green");
        overallbanky.classList.add("green")
    } else {
        jmenobanky.classList.add("orange");
        overallbanky.classList.add("orange")
    }
    if (bank.overall_score < 55) {
        buton.classList.add("bluebutton");
    } else if (bank.overall_score < 75) {
        buton.classList.add("greenbutton");
    } else {
        buton.classList.add("orangebutton");
    }



    div.appendChild(jmenobanky)
    div.appendChild(clientbanky)
    div.appendChild(lokacebanky)
    div.appendChild(overallbanky)
    div.appendChild(openingbanky)
    div.appendChild(loanbanky)
    div.appendChild(buton)
    konecnívysledek.appendChild(div);
}


