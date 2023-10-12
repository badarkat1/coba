const baseUrl = "https://be-palembang-24-production.up.railway.app/";

let formCekResi = document.getElementById("get-resi");
const display = document.querySelector("div[name='hasil-query2']")
display.innerHTML = ""

formCekResi.addEventListener("submit", (event) =>{
    event.preventDefault();
    const resiValue = document.querySelector("#resi").value.substr(1);
    
    if (
        !resiValue
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            resi: resiValue
        };
        
        fetch(`${baseUrl}get-resi`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedData)
        })
        .then(response => response.json())
        .then((res) => {
            console.log("test", res)

            const data = res.data[0];
            const display = document.querySelector("div[name='hasil-query2']")
            display.innerHTML = `
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
}); 