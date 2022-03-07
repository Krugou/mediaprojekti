function printSymbols(number){

    let image = [];

    switch (number){
        case 0:
            image[0] = 'images/weathersymbols/sun.png';
            image[1] = 'Aurinko';
            image[2] = 'Luultavasti aurinkoista';
            break;

        case 4:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys vähintään 1 km';
            break;

        case 5:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Auerta, savua tai ilmassa leijuvaa pölyä ja näkyvyys alle 1 km';
            break;

        case 10:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Utua';
            break;

        case 20:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'sumua';
            break;

        case 21:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            image[2] = 'Sadetta (olomuoto on määrittelemätön)';
            break;

        case 22:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            image[2] = 'Tihkusadetta (ei jäätävää) tai lumijyväsiä';
            break;

        case 23:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sade';
            image[2] = 'Vesisadetta (ei jäätävää)';
            break;

        case 24:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumisade';
            image[2] = 'Lumisadetta';
            break;

        case 25:
            image[0] = 'images/weathersymbols/snowcloud.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Jäätävää vesisadetta tai jäätävää tihkua';
            break;

        case 30:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = '– SUMUA';
            break;

        case 31:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Sumua tai jääsumua erillisinä hattaroina';
            break;

        case 32:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Sumua tai jääsumua, joka on ohentunut edellisen tunnin aikana';
            break;

        case 33:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Sumua tai jääsumua, jonka tiheydessä ei ole tapahtunut merkittäviä muutoksia edellisen tunnin aikana';
            break;

        case 34:
            image[0] = 'images/weathersymbols/ufocloud.png';
            image[1] = 'sumusymboli';
            image[2] = 'Sumua tai jääsumua, joka on muodostunut tai tullut sakeammaksi edellisen tunnin aikana';
            break;

        case 40:
            image[0] = 'images/weathersymbols/cloud.png';
            image[1] = 'Pilvi';
            image[2] = 'SADETTA (olomuoto on määrittelemätön)';
            break;

        case 41:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Heikkoa tai kohtalaista sadetta (olomuoto on määrittelemätön)';
            break;

        case 42:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kovaa sadetta (olomuoto on määrittelemätön)';
            break;

        case 50:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'TIHKUSADETTA (heikkoa, ei jäätävää)';
            break;

        case 51:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Heikkoa tihkua, joka ei ole jäätävää';
            break;

        case 52:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kohtalaista tihkua, joka ei ole jäätävää';
            break;

        case 53:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kovaa tihkua, joka ei ole jäätävää';
            break;

        case 54:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää heikkoa tihkua';
            break;

        case 55:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää kohtalaista tihkua';
            break;

        case 56:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää kovaa tihkua';
            break;

        case 60:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'VESISADETTA (heikkoa, ei jäätävää)';
            break;

        case 61:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Heikkoa vesisadetta, joka ei ole jäätävää';
            break;

        case 62:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kohtalaista vesisadetta, joka ei ole jäätävää';
            break;

        case 63:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kovaa vesisadetta, joka ei ole jäätävää';
            break;

        case 64:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää heikkoa vesisadetta';
            break;

        case 65:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää kohtalaista vesisadetta';
            break;

        case 66:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Jäätävää kovaa vesisadetta';
            break;

        case 67:
            image[0] = 'images/weathersymbols/coldsnow.png';
            image[1] = 'Lämmin lumisade';
            image[2] = 'Heikkoa lumensekaista vesisadetta tai tihkua (räntää)';
            break;

        case 68:
            image[0] = 'images/weathersymbols/coldsnow.png';
            image[1] = 'Lämmin lumisade';
            image[2] = 'Kohtalaista tai kovaa lumensekaista vesisadetta tai tihkua (räntää)';
            break;

        case 70:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Lumisadetta';
            break;

        case 71:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Heikkoa lumisadetta';
            break;

        case 72:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Kohtalaista lumisadetta';
            break;

        case 73:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Tiheää lumisadetta';
            break;

        case 74:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Heikkoa jääjyvässadetta';
            break;

        case 75:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Kohtalaista jääjyväsadetta';
            break;

        case 76:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Kovaa jääjyväsadetta';
            break;

        case 77:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Lumijyväsiä';
            break;

        case 78:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Jääkiteitä';
            break;

        case 80:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kuuroja tai ajoittaista sadetta (heikkoja)';
            break;

        case 81:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Heikkoja vesikuuroja';
            break;

        case 82:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kohtalaisia vesikuuroja';
            break;

        case 83:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Kovia vesikuuroja';
            break;

        case 84:
            image[0] = 'images/weathersymbols/rain.png';
            image[1] = 'Sadepilvi';
            image[2] = 'Ankaria vesikuuroja (>32 mm/h)';
            break;

        case 85:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Heikkoja lumikuuroja';
            break;

        case 86:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Kohtalaisia lumikuuroja';
            break;

        case 87:
            image[0] = 'images/weathersymbols/snow.png';
            image[1] = 'Lumipilvi';
            image[2] = 'Kovia lumikuuroja';
            break;

        case 89:
            image[0] = 'images/weathersymbols/snowcloud.png';
            image[1] = 'vesilumipilvi';
            image[2] = 'Raekuuroja mahdollisesti yhdessä vesi- tai räntäsateen kanssa';
            break;

        default:
            //Tarvitaan unknown symboli
            image[0] = 'images/weathersymbols/snowcloud.png';
            image[1] = 'tuntematon sää';
            image[2] = 'Tuntematon sää';
    }
        return (image);
}
