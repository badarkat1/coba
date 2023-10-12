const baseUrl = "https://be-palembang-24-production.up.railway.app/";

let formCekOngkir = document.getElementById("formpostt");
const display = document.querySelector("div[name='hasil-query']")
display.innerHTML = ""
//let formCekResi = document.getElementById("formpostr");
//const display2 = document.querySelector("div[name='hasil-query2']")
//display2.innerHTML = ""

formCekOngkir.addEventListener("submit", (event) =>{
    event.preventDefault();
    const asalValue = document.querySelector("#asal").value;
    const tujuanValue = document.querySelector("#tujuan").value;
    const quantityValue = document.querySelector("#quantity").value;
    
    if (
        !asalValue ||
        !tujuanValue ||
        isNaN(quantityValue) ||
        quantityValue <= 0
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            asal: asalValue,
            tujuan: tujuanValue,
            berat: quantityValue
        };
        
        fetch(`${baseUrl}formpostt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedData),
        })
        .then(response => response.json())
        .then((res) => {
            console.log("test", res)

            const data = res.data[0];
            const su_tarif = data[`su_tarif*'${quantityValue}'`]/5;
            const display = document.querySelector("div[name='hasil-query']")
            display.innerHTML = `
            <div class="parentPackageDiv">
                <div>
                    <p>Asal Kota : ${data.asal}</p>
                </div>
                <div>
                    <p>Tujuan Kota : ${data.tujuan}</p>
                </div>
                <div>
                    <p> Harga : ${su_tarif}</p>
                </div>
                <div class="button-container">
                    <button type="button" onclick="clearOutput()">Clear</button>
                </div>
            </div>
            `;
        })
        .catch((error) => {
            alert(`Error Massage: ${error.massage}`);
        });
    document.querySelector("#asal").value = " ";
    document.querySelector("#tujuan").value = " ";
    document.querySelector("#quantity").value = " ";
});

/*
formCekResi.addEventListener("submit", (event) =>{
    event.preventDefault();
    const resiValue = document.querySelector("#resi").value;
    
    if (
        !resiValue
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            resi: resiValue
        };
        
        fetch(`${baseUrl}formpostr`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedData),
        })
        .then(response => response.json())
        .then((res) => {
            console.log("test", res)

            const data = res.data[0];
            const display2 = document.querySelector("div[name='hasil-query2']")
            display2.innerHTML = `
            <div class="parentPackageDiv">
                <div>
                    <p>Resi : ${data.resi}</p>
                </div>
                <div>
                    <p>Penerima : ${data.penerima}</p>
                </div>
                <div>
                    <p>Status : ${data.status}</p>
                </div>
                <div class="button-container">
                    <button type="button" onclick="clearOutput()">Clear</button>
                </div>
                </div>
                `;
        })
        .catch((error) => {
            alert(`Error Massage: ${error.massage}`);
        })
    document.querySelector("#resi").value = " ";
}); */
        