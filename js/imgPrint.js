function printSymbols(number){

    let image = [];

    //image[1] = "Aurinko";
    //img.id = 'saasymboli';


    switch (number){
        case 0:
            image[0] = 'images/weathersymbols/sun.png';
            image[1] = 'Aurinko';
            console.log('Ei merkittäviä sääilmiöitä (minkään alla olevan WaWa-koodin ehdot eivät täyty');
            break;

        case 4:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km')
            break;

        case 5:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km');
            break;

        case 10:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Utua')
            break;

        case 20:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('sumua');
            break;

        case 21:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            console.log('Sadetta (olomuoto on määrittelemätön)');
            break;

        case 22:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            console.log('Tihkusadetta (ei jäätävää) tai lumijyväsiä');
            break;

        case 23:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            console.log('Vesisadetta (ei jäätävää)');
            break;

        case 24:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumisade';
            console.log('Lumisadetta');
            break;

        case 25:
            image[0] = 'images/weathersymbols/snowcloud.png';
            image[1] = 'Lumipilvi';
            console.log('Jäätävää vesisadetta tai jäätävää tihkua');
            break;

        case 30:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('– SUMUA');
            break;

        case 31:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Sumua tai jääsumua erillisinä hattaroina');
            break;

        case 32:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana');
            break;

        case 33:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana');
            break;

        case 34:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            console.log('Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana');
            break;

        case 40:
            image[0] = 'images/weathersymbols/cloud.png';
            image[1] = 'Pilvi';
            console.log('SADETTA (olomuoto on määrittelemätön)');
            break;

        case 41:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)');
            break;

        case 42:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kovaa sadetta (olomuoto on määrittelemätön)');
            break;

        case 50:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('TIHKUSADETTA (heikkoa, ei jäätävää)');
            break;

        case 51:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Heikkoa tihkua, joka ei ole jäätävää');
            break;

        case 52:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kohtalaista tihkua, joka ei ole jäätävää');
            break;

        case 53:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kovaa tihkua, joka ei ole jäätävää');
            break;

        case 54:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää heikkoa tihkua');
            break;

        case 55:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää kohtalaista tihkua');
            break;

        case 56:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää kovaa tihkua');
            break;

        case 60:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('VESISADETTA (heikkoa, ei jäätävää)');
            break;

        case 61:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Heikkoa vesisadetta, joka ei ole jäätävää');
            break;

        case 62:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kohtalaista vesisadetta, joka ei ole jäätävää');
            break;

        case 63:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kovaa vesisadetta, joka ei ole jäätävää');
            break;

        case 64:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää heikkoa vesisadetta');
            break;

        case 65:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää kohtalaista vesisadetta');
            break;

        case 66:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Jäätävää kovaa vesisadetta');
            break;

        case 67:
            image[0] = 'images/weathersymbols/coldsnow.png';
            image[1] = 'Lämmin lumisade';
            console.log('Heikkoa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 68:
            image[0] = 'images/weathersymbols/coldsnow.png';
            image[1] = 'Lämmin lumisade';
            console.log('Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)');
            break;

        case 70:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Lumisadetta');
            break;

        case 71:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Heikkoa lumisadetta');
            break;

        case 72:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Kohtalaista lumisadetta');
            break;

        case 73:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Tiheää lumisadetta');
            break;

        case 74:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Heikkoa jääjyvässadetta');
            break;

        case 75:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Kohtalaista jääjyväsadetta');
            break;

        case 76:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Kovaa jääjyväsadetta');
            break;

        case 77:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Lumijyväsiä');
            break;

        case 78:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Jääkiteitä');
            break;

        case 80:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kuuroja tai ajoittaista sadetta (heikkoja)');
            break;

        case 81:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Heikkoja vesikuuroja');
            break;

        case 82:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kohtalaisia vesikuuroja');
            break;

        case 83:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Kovia vesikuuroja');
            break;

        case 84:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            console.log('Ankaria vesikuuroja (>32 mm/h)');
            break;

        case 85:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Heikkoja lumikuuroja');
            break;

        case 86:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Kohtalaisia lumikuuroja');
            break;

        case 87:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            console.log('Kovia lumikuuroja');
            break;

        case 89:
            image[0] = 'images/weathersymbols/snowcloud.png';
            image[1] = 'vesilumipilvi';
            console.log('Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa');
            break;

        default:
            // image[0] = 'images/weathersymbols/unknown.png';
            // image[1] = 'tuntematon sää';
            console.log('Tuntematon sää');
    }
        console.log("imgPrint " + image[0] + " " +image[1]);
        return (image);
//    document.getElementById("tulostusAlue").appendChild(img);
}
