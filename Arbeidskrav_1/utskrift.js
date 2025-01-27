

let HTMLinfo = ""


let resultat = resources.filter((res) => res.category == "HTML")

resultat.map(resource => {HTMLinfo +=
    ` 
    <h1>${resource.category}</h1>
    <p>${resource.text}</p>
        <ul>
            <li><a href="${resource.sources.url}">${resource.sources.title}</a></li>
            <li><a href="${resource.sources.url}">${resource.sources.title}</a></li>
            <li><a href="${resource.sources.url}">${resource.sources.title}</a></li>
        </ul>
    `
})
document.getElementById("print-info").innerHTML = HTMLinfo

/*document.getElementById("bhtml").addEventListener("click", function(){
    const filter = resources.filter(checkresources)
    function checkresources(resource) {
        return resource === document.getElementById("bhtml").value
      }
})
*/


//