
let HTMLinfo = ""
resources.map((resource, index) => HTMLinfo =
    ` 
    <h1>${resources[0].category}</h1>
    <p>${resources[0].text}</p>
        <ul>
            <li><a href="${resources[0].sources[0].url}">${resources[0].sources[0].title}</a></li>
            <li><a href="${resources[1].sources[1].url}">${resources[1].sources[1].title}</a></li>
            <li><a href="${resources[2].sources[2].url}">${resources[2].sources[2].title}</a></li>
        </ul>
    `
)
document.getElementById("print-info").innerHTML = HTMLinfo

