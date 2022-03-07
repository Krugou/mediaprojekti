function printSymbols(number){
    let tulos = document.getElementById("tulos");

    switch (number){
        case 0:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/sun.png">';
            console.log('Ei merkittäviä sääilmiöitä (minkään alla olevan WaWa-koodin ehdot eivät täyty');
            break;

        case 4:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/sun.png">';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km')
            break;

        case 5:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km');
            break;

        case 10:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Utua')
            break;

        case 20:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('sumua');
            break;

        case 21:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Sadetta (olomuoto on määrittelemätön)');
            break;

        case 22:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Tihkusadetta (ei jäätävää) tai lumijyväsiä');
            break;

        case 23:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Vesisadetta (ei jäätävää)');
            break;

        case 24:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/snow.png">';
            console.log('Lumisadetta');
            break;

        case 25:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/snowcloud.png">';
            console.log('Jäätävää vesisadetta tai jäätävää tihkua');
            break;

        case 30:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('– SUMUA');
            break;

        case 31:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua erillisinä hattaroina');
            break;

        case 32:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana');
            break;

        case 33:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana');
            break;

        case 34:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana');
            break;

        case 40:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('SADETTA (olomuoto on määrittelemätön)');
            break;

        case 41:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)');
            break;

        case 42:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovaa sadetta (olomuoto on määrittelemätön)');
            break;

        case 50:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('TIHKUSADETTA (heikkoa, ei jäätävää)');
            break;

        case 51:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa tihkua, joka ei ole jäätävää');
            break;

        case 52:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kohtalaista tihkua, joka ei ole jäätävää');
            break;

        case 53:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kovaa tihkua, joka ei ole jäätävää');
            break;

        case 54:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää heikkoa tihkua');
            break;

        case 55:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kohtalaista tihkua');
            break;

        case 56:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kovaa tihkua');
            break;

        case 60:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('VESISADETTA (heikkoa, ei jäätävää)');
            break;

        case 61:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Heikkoa vesisadetta, joka ei ole jäätävää');
            break;

        case 62:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kohtalaista vesisadetta, joka ei ole jäätävää');
            break;

        case 63:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Kovaa vesisadetta, joka ei ole jäätävää');
            break;

        case 64:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää heikkoa vesisadetta');
            break;

        case 65:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/rain.png">';
            console.log('Jäätävää kohtalaista vesisadetta');
            break;

        case 66:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Jäätävää kovaa vesisadetta');
            break;

        case 67:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/snowcloud.png">';
            console.log('Heikkoa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 68:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 70:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('LUMISADETTA');
            break;

        case 71:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoa lumisadetta');
            break;

        case 72:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista lumisadetta');
            break;

        case 73:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Tiheää lumisadetta');
            break;

        case 74:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoa jääjyvässadetta');
            break;

        case 75:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaista jääjyväsadetta');
            break;

        case 76:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovaa jääjyväsadetta');
            break;

        case 77:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Lumijyväsiä');
            break;

        case 78:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Jääkiteitä');
            break;

        case 80:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('KUUROJA TAI AJOITTAISTA SADETTA (heikkoja)');
            break;

        case 81:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoja vesikuuroja');
            break;

        case 82:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaisia vesikuuroja');
            break;

        case 83:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovia vesikuuroja');
            break;

        case 84:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Ankaria vesikuuroja (>32 mm/h)');
            break;

        case 85:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Heikkoja lumikuuroja');
            break;

        case 86:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kohtalaisia lumikuuroja');
            break;

        case 87:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Kovia lumikuuroja');
            break;

        case 89:
            tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/cloud.png">';
            console.log('Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa');
            break;

        default:
            // tulos.innerHTML += '<img id="tulos" alt="sääkuva" src="images/weathersymbols/unknown.png">';
            console.log('Tuntematon sää');
    }
}
