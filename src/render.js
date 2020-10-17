const inp = document.getElementById("input");
const content =  document.getElementById("content");
const sub = document.getElementById("sub");

async function results() {
    sub.textContent = "";
    sub.setAttribute('href', "");

    switch (true) {
        case inp.value == "discord":
            content.textContent = "Discord";
            content.setAttribute('href', 'discord://');
            break;

        case inp.value == "spotify":
            content.textContent = "Spotify";
            content.setAttribute('href', 'spotify://');
            break;

        case inp.value == "vscode":
            content.textContent = "Vscode";
            content.setAttribute('href', 'vscode://');
            break;

        case inp.value == "netflix":
            content.textContent = "Netflix";
            content.setAttribute('href', 'netflix://');
            break;
        
        case inp.value == "steam":
            content.textContent = "Steam";
            content.setAttribute('href', 'steam://');
            break;

        case inp.value == "among us":
            content.textContent = "Among Us";
            content.setAttribute('href', 'steam://rungameid/945360');
            break;

        case inp.value == "csgo":
            content.textContent = "Csgo";
            content.setAttribute('href', 'steam://rungameid/730');
            break;

        case inp.value == "whatsapp":
            content.textContent = "WhatsApp";
            content.setAttribute('href', 'whatsapp://');
            break;

        case inp.value == "twitch":
            content.textContent = "Twitch";
            content.setAttribute('href', 'twitch://');
            break;

        case inp.value.charAt(0) == "c" && inp.value.charAt(1) == "a" && inp.value.charAt(2) == "l":
            content.textContent = `${eval(inp.value.substring(4))}`;
            break;

        default:
            if (inp.value.includes("file://")) {
                content.textContent = `${inp.value}`;
                content.setAttribute('href', `file://${inp.value}`);
            } else {
                content.textContent = `google- ${inp.value}`;
                content.setAttribute('href', `https://www.google.com/search?q=${inp.value}`);
                sub.textContent = `youtube- ${inp.value}`;
                sub.setAttribute('href', `https://www.youtube.com/results?search_query=${inp.value}`);
            }
            break;
    }
}

inp.addEventListener('keypress', async e => {
    if (e.code == "Enter") {
        results();
    }
});
