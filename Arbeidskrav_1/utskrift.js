
let HTMLinfo = ""
resources.map((resource, index) => HTMLinfo =
    ` 
    <h1>CATEGORY</h1>
    <p>TEXT</p>
        <ul>
            <li><a href="#SOURCES.URL">TITLE</a></li>
            <li><a href="#SOURCES.URL">TITLE</a></li>
            <li><a href="#SOURCES.URL">TITLE</a></li>
        </ul>
    `
)
document.getElementById("print-info").innerHTML = HTMLinfo
