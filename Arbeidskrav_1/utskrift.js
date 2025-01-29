

let HTMLinfo = ""
let BtnName = "" //starter på html siden men kan endres


//finn ut hvordan du kan bytte ut "html" med hva som blir trykket på!!! og fiks css så det ser likt ut som på skissen
function Update(CategoryName){
    BtnName = CategoryName
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

Update('HTML')

