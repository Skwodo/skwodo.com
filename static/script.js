window.onload = function(){
    const names = [
        "pieron",
        "frisk",
        "chara",
        "skwodo",
        "snooomy",
        "meni",
        "karx",
        "missing",
        "lemon",
        "famfo",
        "delta"
    ];
    var name;
    const hudlv = document.getElementById("hud-lv");

    function RandName(min){
    name = names[Math.floor(Math.random() * (names.length - min)) + min];
    }
    if (Math.floor(Math.random() * 3) == 1){
        var lv = 1;
    } else {
        var lv = Math.floor(Math.random() * 20) + 1;
    }

    if (lv !== 20){    
        var hp = 20 + ((lv - 1) * 4);
    } else {    
        var hp = 99;    
    }

    switch (lv) {
        case 1:
            if (Math.floor(Math.random() * 5) == 1){
                name = names[0];
            } else {
                RandName(2);
            }
            break;
        case 19:
            name = names[1];
            document.getElementById("hud-kr").style.display = "inline";
            document.getElementById("hud-right").style.left = "20em";
            break;
        case 20:
            name = names[1];
            hudlv.style.color = "#FFBCD5";
            break;
        default:
            RandName(1);
            break;
    }
    document.getElementById("hud-hpbar").style.minWidth = `${(hp * 1.25) / 10}em`;
    document.getElementById("hud-text2").textContent = hp + " / " + hp;
    document.getElementById("hud-text").textContent = name;
    hudlv.textContent = "LV " + lv;       
};
