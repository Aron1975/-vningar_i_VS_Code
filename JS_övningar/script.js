let titel = document.getElementById('titel');
titel.textContent="Datum och Tid med JS!"
titel.style.color = 'blue';
titel.style.fontSize = '30px';

function printDateTime(){
let date = new Date();
let datum = date.toLocaleDateString();
let tid = date.toLocaleTimeString();
document.getElementById('datum').textContent = tid;

document.getElementById('datum2').textContent = getDay(date.getDay()) + " den " + date.getDate() + " " + getMonth(date.getMonth()) + " " + date.getFullYear();

}

function isChecked(){
    let input = document.getElementById("pwd");
    if(document.getElementById("chb").checked == true){
        console.log("checked");
        input.type="text"
    }
    else{
        console.log("unchecked")
        input.type="password"
    }
}


function getDay(dag){
    console.log(dag)
    switch(dag){
        case 0: return "söndag";
        break;
        case 1: return "måndag";
        break;
        case 2: return "tisdag";
        break;
        case 3: return "onsdag";
        break;
        case 4: return "torsdag";
        break;
        case 5: return "fredag";
        break;
        case 6: return "lördag";
        break;
        default: return "Okänd dag"
    }
}

function getMonth(month){
    console.log(month)
    switch(month){
        case 0: return "januari";
        break;
        case 1: return "februari";
        break;
        case 2: return "mars";
        break;
        case 3: return "april";
        break;
        case 4: return "maj";
        break;
        case 5: return "juni";
        break;
        case 6: return "juli";
        break;
        case 7: return "augusti";
        break;
        case 8: return "september";
        break;
        case 9: return "oktober";
        break;
        case 10: return "november";
        break;
        case 11: return "december";
        break;
        default: return "Okänd månad"
    }
}