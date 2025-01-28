

let HTMLinfo = ""
let BtnName = "HTML" //starter på html siden men kan endres
let BtnChange = ""
const html = document.getElementById("bhtml")

html.addEventListener("click", () => {
    BtnChange = `"${html.innerText}"`
    console.log(BtnName)
})

//finn ut hvordan du kan bytte ut "html" med hva som blir trykket på!!! og fiks css så det ser likt ut som på skissen
function Update(){

    
let resultat = resources.filter((res) => res.category === BtnName)

resultat.map(resource => {HTMLinfo =
    ` 
    <h1>${resource.category}</h1>
    <p>${resource.text}</p>
        <ul>
            ${resource.sources.map(source => `<li><a href=${source.url}>${source.title}</a></li>`).join("")}
        </ul>
    `
}) /*må bruke .map for å skrive ut linkene fordi de er lagt inni en array */
document.getElementById("print-info").innerHTML = HTMLinfo}
Update()
console.log(Update)


