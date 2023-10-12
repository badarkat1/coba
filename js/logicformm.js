const baseUrl = "https://be-palembang-24-production.up.railway.app/";

let formCekOngkir = document.getElementById("formpostt");

formCekOngkir.addEventListener("submit", (event) =>{
    event.preventDefault();
    const asalValue = document.querySelector("#asal").value;
    const tujuanValue = document.querySelector("#tujuan").value;
    const quantityValue = document.querySelector("#quantity").value;
    const display = document.querySelector("div[name='hasil-query']")

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
        asalkota: asalValue,
        tujuankota: tujuanValue,
        harga: 10000*quantityValue,

    };

    fetch(`${baseUrl}formpostt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
    })
        .then((res) => {
            if(res.ok) {
                alert("Ongkir dapat dilihat");
            } else {
                alert("Ongkir belum dapat dilihat");
            }
        })
        .catch((error) => {
            alert(`Error Massage: ${error.massage}`);
        })
        .finally(() => {
            display.innerHTML = `
            <div class="parentPackageDiv">
                <div>
                    <p>Asal Kota : ${submittedData.asalkota}</p>
                </div>
                <div>
                    <p>Tujuan Kota : ${submittedData.tujuankota}</p>
                </div>
                <div>
                    <p> Harga : ${submittedData.harga}</p>
                </div>
                <div class="button-container">
                    <button type="button" onclick="clearOutput()">Clear</button>
                </div>
            </div>
            `;
        });
    document.querySelector("#asal").value = " ";
    document.querySelector("#tujuan").value = " ";
    document.querySelector("#quantity").value = " ";
});