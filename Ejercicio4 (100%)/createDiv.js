let body = document.getElementsByTagName("body")[0];
let div;
let h2;
let text;
let label;
let input;
let select;
let option;

for (let i=0;i<10;i++) {
    div = document.createElement("div");
    text = document.createTextNode("Soy el div " + (i + 1));
    h2 = document.createElement("h2");
    h2.appendChild(text);
    div.appendChild(h2);
    if (i === 9) {
        select = document.createElement("select");
        for (let j = 0; j < 5; j++) {
            option = document.createElement("option");
            option.setAttribute("value", "valor " + (j + 1));
            text = document.createTextNode("Texto " + (j + 1));
            option.appendChild(text);
            select.appendChild(option);
            div.appendChild(select);
            body.appendChild(div);
        }
    } else {
        label = document.createElement("label");
        label.setAttribute("for", "input" + (i + 1));
        text = document.createTextNode("label del div" + (i + 1));
        label.appendChild(text);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
        input = document.createElement("input");
        input.setAttribute("id", "input" + (i + 1));
        input.setAttribute("type", "text");
        input.setAttribute("value", "input del div " + (i + 1));
        div.appendChild(input);
    }

    body.appendChild(div);
}