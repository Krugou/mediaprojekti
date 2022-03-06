function printSymbols(number){
    let saakuva = document.getElementById("saakuva");

    switch (number){
        case 0:
            saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/sun.png">';
            console.log('Ei merkittäviä sääilmiöitä (minkään alla olevan WaWa-koodin ehdot eivät täyty');
            break;

        case 4:
            saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/sun.png">';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km')
            break;

        case 5:
            saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km');
            break;

        case 10:
            saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Utua')
            break;

        case 20:
            saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('sumua');
            break;

        case 21:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Sadetta (olomuoto on määrittelemätön)');
            break;

        case 22:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Tihkusadetta (ei jäätävää) tai lumijyväsiä');
            break;

        case 23:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Vesisadetta (ei jäätävää)');
            break;

        case 24:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snow.png">';
            console.log('Lumisadetta');
            break;

        case 25:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snowcloud.png">';
            console.log('Jäätävää vesisadetta tai jäätävää tihkua');
            break;

        case 30:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('– SUMUA');
            break;

        case 31:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua erillisinä hattaroina');
            break;

        case 32:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana');
            break;

        case 33:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana');
            break;

        case 34:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana');
            break;

        case 40:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('SADETTA (olomuoto on määrittelemätön)');
            break;

        case 41:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)');
            break;

        case 42:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovaa sadetta (olomuoto on määrittelemätön)');
            break;

        case 50:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('TIHKUSADETTA (heikkoa, ei jäätävää)');
            break;

        case 51:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa tihkua, joka ei ole jäätävää');
            break;

        case 52:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kohtalaista tihkua, joka ei ole jäätävää');
            break;

        case 53:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kovaa tihkua, joka ei ole jäätävää');
            break;

        case 54:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää heikkoa tihkua');
            break;

        case 55:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kohtalaista tihkua');
            break;

        case 56:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kovaa tihkua');
            break;

        case 60:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('VESISADETTA (heikkoa, ei jäätävää)');
            break;

        case 61:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa vesisadetta, joka ei ole jäätävää');
            break;

        case 62:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kohtalaista vesisadetta, joka ei ole jäätävää');
            break;

        case 63:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kovaa vesisadetta, joka ei ole jäätävää');
            break;

        case 64:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää heikkoa vesisadetta');
            break;

        case 65:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kohtalaista vesisadetta');
            break;

        case 66:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Jäätävää kovaa vesisadetta');
            break;

        case 67:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/snowcloud.png">';
            console.log('Heikkoa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 68:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 70:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('LUMISADETTA');
            break;

        case 71:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoa lumisadetta');
            break;

        case 72:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista lumisadetta');
            break;

        case 73:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Tiheää lumisadetta');
            break;

        case 74:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoa jääjyvässadetta');
            break;

        case 75:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista jääjyväsadetta');
            break;

        case 76:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovaa jääjyväsadetta');
            break;

        case 77:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Lumijyväsiä');
            break;

        case 78:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Jääkiteitä');
            break;

        case 80:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('KUUROJA TAI AJOITTAISTA SADETTA (heikkoja)');
            break;

        case 81:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoja vesikuuroja');
            break;

        case 82:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaisia vesikuuroja');
            break;

        case 83:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovia vesikuuroja');
            break;

        case 84:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Ankaria vesikuuroja (>32 mm/h)');
            break;

        case 85:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoja lumikuuroja');
            break;

        case 86:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaisia lumikuuroja');
            break;

        case 87:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovia lumikuuroja');
            break;

        case 89:
            saakuva.innerHTML= '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa');
            break;

        default:
            // saakuva.innerHTML = '<img id="saakuva" alt="sääkuva" src="images/weathersymbols/unknown.png">';
            console.log('Tuntematon sää');
    }
}
