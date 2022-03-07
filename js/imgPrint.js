function printSymbols(number){

    let img = document.createElement('img');
    //img.alt = "Aurinko";
    img.id = 'tulos';


    switch (number){
        case 0:
            img.src = 'images/weathersymbols/sun.png';
            img.alt = 'Aurinko';
            console.log('Ei merkittäviä sääilmiöitä (minkään alla olevan WaWa-koodin ehdot eivät täyty');
            break;

        case 4:
            img.src = 'images/weathersymbols/sun.png';
            img.alt = 'Aurinko';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km')
            break;

        case 5:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km');
            break;

        case 10:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Utua')
            break;

        case 20:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('sumua');
            break;

        case 21:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sade';
            console.log('Sadetta (olomuoto on määrittelemätön)');
            break;

        case 22:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sade';
            console.log('Tihkusadetta (ei jäätävää) tai lumijyväsiä');
            break;

        case 23:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sade';
            console.log('Vesisadetta (ei jäätävää)');
            break;

        case 24:
            img.src = 'images/weathersymbols/snow.png';
            img.alt = 'Lumisade';
            console.log('Lumisadetta');
            break;

        case 25:
            img.src = 'images/weathersymbols/snowcloud.png';
            img.alt = 'Lumipilvi';
            console.log('Jäätävää vesisadetta tai jäätävää tihkua');
            break;

        case 30:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('– SUMUA');
            break;

        case 31:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Sumua tai jääsumua erillisinä hattaroina');
            break;

        case 32:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana');
            break;

        case 33:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana');
            break;

        case 34:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana');
            break;

        case 40:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('SADETTA (olomuoto on määrittelemätön)');
            break;

        case 41:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)');
            break;

        case 42:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kovaa sadetta (olomuoto on määrittelemätön)');
            break;

        case 50:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('TIHKUSADETTA (heikkoa, ei jäätävää)');
            break;

        case 51:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Heikkoa tihkua, joka ei ole jäätävää');
            break;

        case 52:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Kohtalaista tihkua, joka ei ole jäätävää');
            break;

        case 53:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Kovaa tihkua, joka ei ole jäätävää');
            break;

        case 54:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Jäätävää heikkoa tihkua');
            break;

        case 55:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Jäätävää kohtalaista tihkua');
            break;

        case 56:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Jäätävää kovaa tihkua');
            break;

        case 60:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('VESISADETTA (heikkoa, ei jäätävää)');
            break;

        case 61:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Heikkoa vesisadetta, joka ei ole jäätävää');
            break;

        case 62:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Kohtalaista vesisadetta, joka ei ole jäätävää');
            break;

        case 63:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Kovaa vesisadetta, joka ei ole jäätävää');
            break;

        case 64:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Jäätävää heikkoa vesisadetta');
            break;

        case 65:
            img.src = 'images/weathersymbols/rain.png';
            img.alt = 'Sadepilvi';
            console.log('Jäätävää kohtalaista vesisadetta');
            break;

        case 66:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Jäätävää kovaa vesisadetta');
            break;

        case 67:
            img.src = 'images/weathersymbols/snowcloud.png';
            img.alt = 'lumipilvi';
            console.log('Heikkoa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 68:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 70:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('LUMISADETTA');
            break;

        case 71:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Heikkoa lumisadetta');
            break;

        case 72:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kohtalaista lumisadetta');
            break;

        case 73:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Tiheää lumisadetta');
            break;

        case 74:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Heikkoa jääjyvässadetta');
            break;

        case 75:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kohtalaista jääjyväsadetta');
            break;

        case 76:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kovaa jääjyväsadetta');
            break;

        case 77:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Lumijyväsiä');
            break;

        case 78:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Jääkiteitä');
            break;

        case 80:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('KUUROJA TAI AJOITTAISTA SADETTA (heikkoja)');
            break;

        case 81:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Heikkoja vesikuuroja');
            break;

        case 82:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kohtalaisia vesikuuroja');
            break;

        case 83:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kovia vesikuuroja');
            break;

        case 84:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Ankaria vesikuuroja (>32 mm/h)');
            break;

        case 85:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Heikkoja lumikuuroja');
            break;

        case 86:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kohtalaisia lumikuuroja');
            break;

        case 87:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Kovia lumikuuroja');
            break;

        case 89:
            img.src = 'images/weathersymbols/cloud.png';
            img.alt = 'Pilvi';
            console.log('Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa');
            break;

        default:
            // img.src = 'images/weathersymbols/unknown.png';
            // img.alt = 'tuntematon sää';
            console.log('Tuntematon sää');
    }
    document.getElementById("tulostusAlue").appendChild(img);
}
