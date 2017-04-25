

var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
console.log(filtre);


class App extends React.Component {
  render() {
    const poisItem = this.props.poisBDD.map( poi => {
      return <div key={poi._id} className="poisCard">{poi.name}</div>
    })
    return <div>{poisItem}</div>
  }
}

const poisBDD = [
  {
    "name": "Magic Candy Bar",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Super fast internet"],
    "position": {
      "latitude": "45.1885903",
      "longitude": "5.7192693"
    },
    "_id": "080c5255b6a7f1734e508a0b13925393"
  }, {
    "name": "CafÃ© Antic",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.4167658",
      "longitude": "-3.7102152999999998"
    },
    "_id": "148c56f3d411dd39ded53a621f6a8b9c"
  }, {
    "name": "33/45",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Cozy couches, chilly hipster ambiance."],
    "position": {
      "latitude": "41.381009999999996",
      "longitude": "2.1674194"
    },
    "_id": "1YWXBSWiS86EGd89"
  }, {
    "name": "Miznon ",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["cabbage specialty. Can be busy in the evening "],
    "position": {
      "latitude": "48.85718231",
      "longitude": "2.35901548"
    },
    "address": {
      "house_number": "24",
      "road": "Rue des Ã‰couffes",
      "suburb": "Quartier Saint-Gervais",
      "city_district": "Paris 4e Arrondissement",
      "city": "Paris",
      "county": "Paris",
      "state": "ÃŽle-de-France",
      "country": "France",
      "postcode": "75004",
      "country_code": "fr"
    },
    "_id": "1effe0ab50020388aee0f2cb6460b0f7"
  }, {
    "name": "cafÃ© bun",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "43.6074927",
      "longitude": "3.8776676"
    },
    "_id": "1uLQT99MQhs4BVO5"
  }, {
    "name": "Brasserie Le Leyritz",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Crazy speed for this internet (84Mbps)!!!"],
    "position": {
      "latitude": "45.1880737",
      "longitude": "5.728502"
    },
    "_id": "228e33af17e68dc17fa776a82d13bd02"
  }, {
    "name": "Dhagpo Kagyu library",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Buddhist library open to all"],
    "position": {
      "latitude": "44.9996359",
      "longitude": "1.0604528"
    },
    "address": {
      "place_of_worship": "Dhagpo Kagyu Ling",
      "road": "D 6",
      "village": "Plazac",
      "county": "Sarlat-la-CanÃ©da",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "24580",
      "country_code": "fr"
    },
    "_id": "288fc424bcb3cb380b5adfc86b764035"
  }, {
    "name": "Les 3 Temps",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "45.1851765",
      "longitude": "0.7179951"
    },
    "address": {
      "beauty": "Fleur de Lys",
      "road": "Place AndrÃ© Maurois",
      "town": "PÃ©rigueux",
      "county": "PÃ©rigueux",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "24000",
      "country_code": "fr"
    },
    "_id": "2cb088d0b5abf71d4e70981c199cd2e1"
  }, {
    "name": "Mutinerie",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Quiet zone. Access has a fee."],
    "position": {
      "latitude": "48.8799152",
      "longitude": "2.3717406999999997"
    },
    "_id": "337YUZk5cpmFDVet"
  }, {
    "name": "Le Mitico",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "44.8274517",
      "longitude": "-0.5570094"
    },
    "address": {
      "house_number": "242",
      "road": "Cours de la Marne",
      "suburb": "Bordeaux Sud",
      "city": "Bordeaux",
      "county": "Bordeaux",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "33000;33100;33300;33800",
      "country_code": "fr"
    },
    "_id": "356318e28bcce0809d75e4099d2fa2ee"
  }, {
    "name": "Medialab Prado",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["great maker place,  free,  open. "],
    "position": {
      "latitude": "40.41042011",
      "longitude": "-3.69351113"
    },
    "_id": "38c2905b6611ecd6ff78d36cb60bbebc"
  }, {
    "name": "Horno Sn Marcos",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["The wifi was not connecting when I came, but it's a good one.\nBright spot and quiet."],
    "position": {
      "latitude": "38.56291630507494",
      "longitude": "-6.33494833297403"
    },
    "_id": "3CFfUa80FpxgiAQg"
  }, {
    "name": "Miro Bistro",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Terrasse available, cozy and bright.\nA little expensive but good tea selection"],
    "position": {
      "latitude": "47.50103454624854",
      "longitude": "19.032743717681136"
    },
    "_id": "3FkgTdCRFVTcUqf1"
  }, {
    "name": "Cafe Cometa",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3762873,
      "longitude": 2.1620247
    },
    "creation_date": "2015-05-01T19:56:26.742Z",
    "address": {
      "address29": "G.H.B",
      "road": "Carrer del Parlament",
      "suburb": "Sant Antoni",
      "city_district": "Eixample",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "3RfnTYR8D2Q8cb6tn"
  }, {
    "name": "Kayak's",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Power undernearth the tables. Open bright space, lots of students (in front of WashU).\nQuick food.\nThey have a patio (along the road though)"],
    "position": {
      "latitude": "38.6495537",
      "longitude": "-90.30033859999999"
    },
    "_id": "3VbvLCKQjmNPOAia"
  }, {
    "name": "AJE Madrid",
    "wiFiQuality": 2,
    "powerAvailable": true,
    "comments": ["Nice venue, AJE Madrid"],
    "position": {
      "latitude": 40.4460191,
      "longitude": -3.675816
    },
    "address": {
      "house_number": "14",
      "road": "Calle de PechuÃ¡n",
      "suburb": "ChamartÃ­n",
      "city_district": "ChamartÃ­n",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28002",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "44aymwjMiD4hmHt2u"
  }, {
    "name": "Beer Station",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.4205732",
      "longitude": "-3.7062301"
    },
    "_id": "476f549b01a0a2e2f3a3b839f7b19338"
  }, {
    "name": "Coffee and Kicks",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4192253,
      "longitude": -3.7065672999999997
    },
    "creation_date": "2015-10-01T09:06:22.242Z",
    "address": {
      "house_number": "6",
      "pedestrian": "Calle de las Navas de Tolosa",
      "residential": "Barrio Sol",
      "suburb": "Barrio de los Austrias",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "4CAKMyKRoBFtT38yw"
  }, {
    "name": "test",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["test"],
    "position": {
      "latitude": "48.827019400000005",
      "longitude": "2.2798539"
    },
    "_id": "4OVOubiupg4ga2RR"
  }, {
    "name": "CafÃ© Loreto",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.4217322",
      "longitude": "-3.7043618"
    },
    "address": {
      "restaurant": "Loreto",
      "house_number": "6",
      "road": "Corredera Baja de San Pablo",
      "residential": "Barrio Universidad",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "4c78b7b3f5f352f35a14436a0c5456a4"
  }, {
    "name": "Lata Barra",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.404440699999995,
      "longitude": 2.1767438
    },
    "creation_date": "2015-07-21T13:24:07.662Z",
    "address": {
      "address29": "Parking California",
      "road": "Carrer de Mallorca",
      "suburb": "la Sagrada FamÃ­lia",
      "city_district": "Eixample",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08026",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "4w9NBCvJDSy8cx9dE"
  }, {
    "name": "Capri",
    "wifiQuality": "0",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "45.1875153",
      "longitude": "5.7145123"
    },
    "_id": "551e7b4f36a17b07bd1333fc7aabf233"
  }, {
    "name": "Abonavida",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.419209599999995,
      "longitude": -3.7066779
    },
    "creation_date": "2015-10-02T15:14:41.644Z",
    "address": {
      "cafe": "Coffee & Kicks",
      "house_number": "6",
      "pedestrian": "Calle de las Navas de Tolosa",
      "residential": "Barrio Sol",
      "suburb": "Barrio de los Austrias",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "55RfRdKuX4boAMQFX"
  }, {
    "name": "Lilipep",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3847381,
      "longitude": 2.1798014
    },
    "creation_date": "2015-05-05T12:10:57.078Z",
    "address": {
      "supermarket": "Supermercat Picasso",
      "pedestrian": "Carrer de les Candeles",
      "suburb": "Sant Pere, Santa Caterina i la Ribera",
      "city_district": "Ciutat Vella",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08003",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "56YSH4gFaKzCgQ5Cn"
  }, {
    "name": "Antico CaffÃ¨",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.4021573,
      "longitude": 2.1531637
    },
    "creation_date": "2015-05-25T16:09:45.580Z",
    "address": {
      "restaurant": "Luna de Istanbul",
      "house_number": "160",
      "road": "Carrer Gran de GrÃ cia",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "5Gz6Lt4TfdLvekoKw"
  }, {
    "name": "Cafeteca",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Probably the best spot in Brasov for working.\nThey have power plugs at each table and USB hubs for charging.\nChill music, shaded ambiance and full powered fiber.\nMight be a little noisy by time with the coffee machine."],
    "position": {
      "latitude": "45.6407677",
      "longitude": "25.5901893"
    },
    "_id": "5LJq2DPlH1U3QQZJ"
  }, {
    "name": "Impact Hub Madrid",
    "wiFiQuality": 2,
    "powerAvailable": false,
    "comments": ["Nice venue, Impact Hub Madrid"],
    "position": {
      "latitude": 40.4089711,
      "longitude": -3.6967683
    },
    "address": {
      "school": "Real Colegio Santa Isabel-La AsunciÃ³n",
      "road": "Calle de San Cosme y San DamiÃ¡n",
      "residential": "Barrio Embajadores",
      "suburb": "Barrio de LavapiÃ©s",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28009",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "5r4Dpdd2BYvKKQxBS"
  }, {
    "name": "Villa de Madrid",
    "wiFiQuality": 2,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.384391199999996,
      "longitude": 2.1720631
    },
    "creation_date": "2015-05-04T14:27:19.013Z",
    "address": {
      "archaeological_site": "Via Sepulcral Romana",
      "pedestrian": "PlaÃ§a de la Vila de Madrid",
      "suburb": "el GÃ²tic",
      "city_district": "Ciutat Vella",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08002",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "66qgr6FCkfdoY3KK3"
  }, {
    "name": "the Hot Pot",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Healthy and affordable food and smoothies.\nHand made with employee respect."],
    "position": {
      "latitude": "38.5988794",
      "longitude": "-90.4163502"
    },
    "_id": "6WdZnOs3vg6LOj2q"
  }, {
    "name": "Chez FranÃ§ois",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Traditional French restaurant"],
    "position": {
      "latitude": "48.8452327",
      "longitude": "2.2843275000000003"
    },
    "_id": "6d31a4bb3f2390114fd458d37172ac7b"
  }, {
    "name": "El Mos",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "41.381477",
      "longitude": "2.1575329"
    },
    "_id": "6uOALIQspfPemOYc"
  }, {
    "name": "El Jardin de Bachiler",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "longitude": -3.7021527,
      "latitude": 40.4191125
    },
    "address": {
      "house_number": "39",
      "pedestrian": "Calle de la Montera",
      "residential": "Barrio Sol",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "71a650d8ec14fed5fe786dab277cfd74"
  }, {
    "name": "Gentle Cat",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Bar Ã  chat trÃ¨s cosy"],
    "position": {
      "latitude": "45.7512452",
      "longitude": "4.8262373"
    },
    "address": {
      "restaurant": "Le Gone",
      "road": "Rue GÃ©nÃ©ral Plessier",
      "suburb": "Lyon 2e Arrondissement",
      "city_district": "Lyon 2e Arrondissement",
      "city": "Lyon",
      "county": "Lyon",
      "state_district": "Circonscription dÃ©partementale du RhÃ´ne",
      "state": "Auvergne-RhÃ´ne-Alpes",
      "country": "France",
      "postcode": "69002",
      "country_code": "fr"
    },
    "_id": "72805ba871b012d701a9f1cdf48a11d1"
  }, {
    "name": "Sous les palmiers la plage",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Wifi based on email.\nOpen nice view on the green square and the sea."],
    "position": {
      "latitude": "47.2713464",
      "longitude": "-2.2043087999999997"
    },
    "_id": "76joEtBvH0DFk672"
  }, {
    "name": "Likitta",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 39.218930799999995,
      "longitude": 9.1214522
    },
    "creation_date": "2015-06-29T12:46:21.964Z",
    "address": {
      "fuel": "Q8",
      "pedestrian": "Piazza Giuseppe Garibaldi",
      "suburb": "Villanova",
      "city": "Cagliari",
      "county": "Cagliari",
      "state": "Sardaigne",
      "postcode": "09121-09131, 09134",
      "country": "Italie",
      "country_code": "it"
    },
    "_id": "79oLJKEwTJi7YZ49y"
  }, {
    "name": "EatBurger",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.4125923",
      "longitude": "-3.7116435"
    },
    "_id": "83OnybtCLE2KJlcZ"
  }, {
    "name": "Hotel Plaza Grande",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Nice indoor, quiet in the morning. Outdoor available. Open all day long.\nInternet is 10Mb from the inside with no restriction."],
    "position": {
      "latitude": "38.42529241251875",
      "longitude": "-6.419433051635993"
    },
    "_id": "89Ei7P4UZu3Oh4Mn"
  }, {
    "name": "Locanda Garden",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Wide terrace"],
    "position": {
      "latitude": "31.599481666666666",
      "longitude": "35.56164666666667"
    },
    "_id": "8YSIKDDAzO3sDSne"
  }, {
    "name": "Casa de l'Orxata",
    "wifiQuality": "1",
    "powerAvailable": "on",
    "comments": ["Nice little outdoor protected from the rain."],
    "position": {
      "latitude": "39.468987",
      "longitude": "-0.36841009999999996"
    },
    "_id": "8jlf6lUype5J6xDG"
  }, {
    "name": "Le casse croÃ»te Ã  DÃ©dÃ©",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Good meal concept,  home made and cheap prices. "],
    "position": {
      "latitude": "45.1914282",
      "longitude": "5.7309177"
    },
    "_id": "9a02ad49f0403f25e38ee66d61a8fdd6"
  }, {
    "name": "Mc Arthur's",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Bakery / coffeeshop"],
    "position": {
      "latitude": "38.6561823",
      "longitude": "-90.3068007"
    },
    "_id": "Ahn4XB1IIrZFBmFs"
  }, {
    "name": "Casa Concha",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Small bar with outdoor.\nNice, quiet and easy."],
    "position": {
      "latitude": "37.873162199999996",
      "longitude": "-6.0831802"
    },
    "_id": "AzaYW1jRQBj46Zki"
  }, {
    "name": "Manzano cafe",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["A bit loud, though there's a covered outdoor."],
    "position": {
      "latitude": "38.56298675741396",
      "longitude": "-6.33495740820524"
    },
    "_id": "B70gSrF6huS3gqTx"
  }, {
    "name": "AmbigÃ¹ Bar",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4240045,
      "longitude": -3.6946207
    },
    "creation_date": "2015-10-08T13:21:02.566Z",
    "address": {
      "park": "Plaza de las Salesas",
      "road": "Calle del General CastaÃ±os",
      "residential": "Barrio Justicia",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28071",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "B95CGQRrwbWsZQBoz"
  }, {
    "name": "Urban Youth Hostel",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Modern youth hostel / coffee shop / restaurant.\nJazzy music playing softly.\nGood place to have a video call.\nOutdoor available."],
    "position": {
      "latitude": "39.4612798",
      "longitude": "-0.3371808"
    },
    "_id": "BVj0UoJAVmLVVrlz"
  }, {
    "name": "Cafe Barcelona",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 39.2155929,
      "longitude": 9.1143131
    },
    "creation_date": "2015-06-22T15:54:45.031Z",
    "address": {
      "bar": "CaffÃ¨ Barcellona",
      "pedestrian": "Via Giovanni Maria Dettori",
      "suburb": "Marina",
      "city": "Cagliari",
      "county": "Cagliari",
      "state": "Sardaigne",
      "postcode": "09121-09131, 09134",
      "country": "Italie",
      "country_code": "it"
    },
    "_id": "CX7qdNtJPNtuFFB9a"
  }, {
    "name": "Casa Carlos",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Very typical and local restaurant.\nOutdoor available."],
    "position": {
      "latitude": "37.38132061473691",
      "longitude": "-6.009424772305575"
    },
    "_id": "CvnIUmrjoSESm7Wh"
  }, {
    "name": "AiÃ²",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4224558,
      "longitude": -3.7039454999999997
    },
    "creation_date": "2015-12-01T15:15:00.402Z",
    "address": {
      "restaurant": "AiÃ²",
      "house_number": "25",
      "road": "Corredera Baja de San Pablo",
      "residential": "Barrio Universidad",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "D5ce5hWSLuZaC9pLB"
  }, {
    "name": "El Castillo",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Quiet"],
    "position": {
      "latitude": "38.7866655",
      "longitude": "-6.2520987"
    },
    "_id": "DAb0FJ1wU9POONUl"
  }, {
    "name": "Perla Timi's",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Nice terrace (with shade) over the main square of Sibiu.\nThe internet works ok.\n"],
    "position": {
      "latitude": "45.796388099999994",
      "longitude": "24.151367699999998"
    },
    "_id": "DRDHTQC9SxahKo7q"
  }, {
    "name": "palau de la musica",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Very tipical architecture, Gaudi style and affordable"],
    "position": {
      "latitude": "41.3876925",
      "longitude": "2.1752479"
    },
    "_id": "ETcpkkYvjlnW8H8F"
  }, {
    "name": "Cafe del Teatre",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.404072299999996,
      "longitude": 2.1582000999999997
    },
    "creation_date": "2015-05-18T15:42:26.998Z",
    "address": {
      "bar": "ChÃ¢telet",
      "road": "Carrer de Sant LLuis",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08037 BCN",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "EfPnL5cvFpSfhGQJM"
  }, {
    "name": "BioBurger",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Organic good quality burger. Bright spot, cozy couches, nice quite area."],
    "position": {
      "latitude": "48.8749933",
      "longitude": "2.3402243"
    },
    "_id": "F6Y4nHhkxaFAgmzw"
  }, {
    "name": "El Chati",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Typical local"],
    "position": {
      "latitude": "37.9495368",
      "longitude": "-6.1519115"
    },
    "_id": "F9H9BiesztNgnfIN"
  }, {
    "name": "SCQ",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Perfect place to work with wonderful coffee and handmade cakes"],
    "position": {
      "latitude": "42.878094399999995",
      "longitude": "-8.5431705"
    },
    "_id": "FaTdIl1XrlkMih6A"
  }, {
    "name": "Cink Emprende",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "comments": ["Nice venue, Cink Emprende"],
    "position": {
      "latitude": 40.4341611,
      "longitude": -3.6924041
    },
    "address": {
      "pharmacy": "Farmacia - Calle Zurbano 54",
      "house_number": "54",
      "road": "Calle de Zurbano",
      "residential": "Barrio Almagro",
      "suburb": "ChamberÃ­",
      "city_district": "ChamberÃ­",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28010",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "FgC3h4uAhQpRtGoAm"
  }, {
    "name": "Buena Vida",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Nice indoor and outdoor"],
    "position": {
      "latitude": "28.46492173",
      "longitude": "-16.24976827"
    },
    "_id": "GCyWkUXAr8d5NI62"
  }, {
    "name": "La Ciudad Invisibile",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4189028,
      "longitude": -3.7082337
    },
    "creation_date": "2015-10-22T15:48:45.245Z",
    "address": {
      "bar": "La GalerÃ­a",
      "house_number": "9",
      "road": "Costanilla de los Ãngeles",
      "residential": "Barrio Palacio",
      "suburb": "Barrio de los Austrias",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "GJPkJSzyEo4EYQHtx"
  }, {
    "name": "Coffe For All",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "45.6432578",
      "longitude": "25.5912656"
    },
    "_id": "GNhX8S7IJrWmNAsB"
  }, {
    "name": "Il Secchio",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["open wifi. Not sure wether power is available or not."],
    "position": {
      "latitude": "41.899513299999995",
      "longitude": "12.4997847"
    },
    "_id": "HAwuA1SdrxZeidQe"
  }, {
    "name": "PALM",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["A private clinic"],
    "position": {
      "latitude": "38.7131073",
      "longitude": "-90.42984009999999"
    },
    "_id": "IIf9etnoe3hLQSpf"
  }, {
    "name": "Loft to work",
    "wiFiQuality": 1,
    "powerAvailable": true,
    "comments": ["Nice venue, Loft to work"],
    "position": {
      "latitude": 40.4053711,
      "longitude": -3.7035515
    },
    "address": {
      "college": "Instituto BilingÃ¼e de Secundaria Cervantes",
      "road": "Ronda de Toledo",
      "residential": "Barrio Embajadores",
      "suburb": "Barrio de LavapiÃ©s",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "JLEYtaxmNzazh6nzz"
  }, {
    "name": "Flynn Park",
    "wiFiQuality": 2,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 38.6535372,
      "longitude": -90.3236192
    },
    "creation_date": "2015-08-30T16:12:05.054Z",
    "address": {
      "park": "Flynn Park",
      "road": "Kingsbury Boulevard",
      "city": "University City",
      "county": "St. Louis County",
      "state": "Missouri",
      "postcode": "63130",
      "country": "Ã‰tats-Unis d'AmÃ©rique",
      "country_code": "us"
    },
    "_id": "JPfiTSwhiS2MLKHCW"
  }, {
    "name": "Kaffi Slippur",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Cosy place on the harbour with a nice view on Esja. They serve good coffee, pastries and light lunch.\n\nhttp://www.kaffislippur.is/"],
    "position": {
      "latitude": "64.1514306",
      "longitude": "-21.9473658"
    },
    "_id": "JQvmnGSnZRoiPJRg"
  }, {
    "name": "Ida Zimsen",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Cofeeshop & bookshop full of nice local people"],
    "position": {
      "latitude": "64.14885939999999",
      "longitude": "-21.9418479"
    },
    "_id": "JeLXTunckHT2luxb"
  }, {
    "name": "HOF Cafe",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Huge and quiet place"],
    "position": {
      "latitude": "45.6417961",
      "longitude": "25.5895279"
    },
    "_id": "K02ybpqDSbgD0BdF"
  }, {
    "name": "La piscine",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["New place in Madrid. Nice concept : coffee/coworking"],
    "position": {
      "latitude": "40.4258702",
      "longitude": "-3.6959634"
    },
    "_id": "K1A8rae1VCCx49IR"
  }, {
    "name": "En ApartÃ©",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["A large terasse is available.\nThe inside is loud though!"],
    "position": {
      "latitude": "41.3897956",
      "longitude": "2.1789658"
    },
    "_id": "KjbsE7C0dcH4F8iU"
  }, {
    "name": "Sciga",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "47.493189956913156",
      "longitude": "19.072585047323788"
    },
    "_id": "LKo3C7Bf8GRExiHU"
  }, {
    "name": "KUNlabori",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.43869230000001,
      "longitude": -3.6722257000000003
    },
    "creation_date": "2015-10-10T11:40:53.411Z",
    "address": {
      "house_number": "7",
      "road": "Calle Eduardo Vicente",
      "suburb": "Salamanca",
      "city_district": "Salamanca",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28028",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "Lh5aKPpHhxha2PuGo"
  }, {
    "name": "Quin cafÃ©",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["nice staff!"],
    "position": {
      "latitude": "41.3825654",
      "longitude": "2.1580749999999997"
    },
    "_id": "M9x8R01EMcZ3pcrW"
  }, {
    "name": "AiÃ²",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4224558,
      "longitude": -3.7039454999999997
    },
    "creation_date": "2015-12-01T15:15:00.095Z",
    "address": {
      "restaurant": "AiÃ²",
      "house_number": "25",
      "road": "Corredera Baja de San Pablo",
      "residential": "Barrio Universidad",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "Mfh2iTfi3Zb6eah8w"
  }, {
    "name": "Bar Galleta",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.422672399999996,
      "longitude": -3.7036957
    },
    "creation_date": "2015-10-09T14:59:26.666Z",
    "address": {
      "restaurant": "Amargo",
      "house_number": "2",
      "road": "Calle del Pez",
      "residential": "Barrio Universidad",
      "suburb": "MalasaÃ±a",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "NEBnNPsQCf6tGn6ms"
  }, {
    "name": "Dulce cafe Argentino",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 28.4836736,
      "longitude": -16.3169594
    },
    "creation_date": "2015-12-20T17:28:09.291Z",
    "address": {
      "bakery": "El Horno de la Avenida",
      "road": "Avenida de La Trinidad",
      "suburb": "San Roque",
      "city": "San CristÃ³bal de La Laguna",
      "county": "Santa Cruz de TÃ©nÃ©rife",
      "state": "Canaries",
      "postcode": "38204",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "NgJwf5JWKpSbarATT"
  }, {
    "name": "La FÃ©e Verte",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 48.8567148,
      "longitude": 2.3778946
    },
    "creation_date": "2015-11-18T21:53:03.015Z",
    "address": {
      "house_number": "55",
      "road": "Rue Basfroi",
      "suburb": "Quartier de la Roquette",
      "city_district": "Paris 11e Arrondissement",
      "city": "Paris",
      "county": "Paris",
      "state": "ÃŽle-de-France",
      "country": "France",
      "postcode": "75011",
      "country_code": "fr"
    },
    "_id": "NmcH9ARiwjPboyZR8"
  }, {
    "name": "La Trini",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Local restaurant with great wifi!"],
    "position": {
      "latitude": "41.4039071",
      "longitude": "2.1567962"
    },
    "_id": "NsLerI8UuqgWKuBU"
  }, {
    "name": "Tutti Frutti",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Frozen Yogurt with patio"],
    "position": {
      "latitude": "38.6594847",
      "longitude": "-90.338049"
    },
    "_id": "NtBRYs2Iwm7VIKTb"
  }, {
    "name": "Cafe Milano",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Beautiful shaded outdoor. One power outlet available in case"],
    "position": {
      "latitude": "38.0880691",
      "longitude": "-6.270227299999999"
    },
    "_id": "OCPy6fN6vcWUFqN5"
  }, {
    "name": "BibilothÃ¨que municipale",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Quiet place in downtown Vesoul.\n\nSite Web : http://www.vesoul.fr/culture-et-loisirs/bibliotheque-louis-garret.html"],
    "position": {
      "latitude": "47.61978800000001",
      "longitude": "6.15428"
    },
    "_id": "OLCQNO0CuHeEsuhI"
  }, {
    "name": "Lemon Pie",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["30Mb/s upload, same for download.\nGreat handmade pies.\nOutdoor available"],
    "position": {
      "latitude": "38.91780681174353",
      "longitude": "-6.34245783233368"
    },
    "_id": "OTHd0oySA9dA96Cw"
  }, {
    "name": "Horchateria Lopez",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "39.4598996",
      "longitude": "-0.3390161"
    },
    "_id": "PkJm397yM0qyRnNK"
  }, {
    "name": "Emilio bar",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Local and typical. Outdoor available."],
    "position": {
      "latitude": "38.68331138583799",
      "longitude": "-6.412832283431287"
    },
    "_id": "PrTX3Y7u4TS1zqsY"
  }, {
    "name": "Oma BistrÃ²",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.385711199999996,
      "longitude": 2.1584871999999997
    },
    "creation_date": "2015-05-01T16:31:10.072Z",
    "address": {
      "house_number": "76",
      "road": "Carrer de Casanova",
      "neighbourhood": "l'Antiga Esquerra de l'Eixample",
      "suburb": "l'Antiga Esquerra de l'Eixample",
      "city_district": "Eixample",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08011",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "PyDcuvG9gv5vYvEHi"
  }, {
    "name": "CafÃ© CamÃ©lia",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.405149800000004,
      "longitude": 2.1554615999999998
    },
    "creation_date": "2015-04-30T18:18:41.159Z",
    "address": {
      "address29": "7Dos",
      "house_number": "72",
      "road": "Carrer de Verdi",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "QbPWg3yPALwcmdFED"
  }, {
    "name": "helenes",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 43.5730636,
      "longitude": 7.0543783
    },
    "creation_date": "2015-08-03T09:40:30.139Z",
    "address": {
      "road": "Chemin du Fournas",
      "neighbourhood": "La ChÃ¨vre d'Or",
      "suburb": "Super Cannes",
      "town": "Vallauris",
      "county": "Alpes-Maritimes",
      "state": "Provence-Alpes-CÃ´te d'Azur",
      "country": "France",
      "postcode": "06220",
      "country_code": "fr"
    },
    "_id": "QdGfzzEweQTM8yLrk"
  }, {
    "name": "Chez David",
    "wiFiQuality": null,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 43.6784634,
      "longitude": 4.6283692
    },
    "creation_date": "2015-05-12T13:16:55.181Z",
    "address": {
      "house_number": "17",
      "road": "Rue des Suisses",
      "suburb": "Pont-de-Crau",
      "town": "Arles",
      "county": "Arles",
      "state": "Provence-Alpes-CÃ´te d'Azur",
      "country": "France",
      "postcode": "13200",
      "country_code": "fr"
    },
    "_id": "QeWdzyyc7hHucvvdG"
  }, {
    "name": "Kex Hostel",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Coffee, beers and burgers in an hipster but cosy place.\n\nhttp://www.kexhostel.is/\nSkÃºlagata 28\n101 ReykjavÃ­k Iceland"],
    "position": {
      "latitude": "64.1456733",
      "longitude": "-21.9193905"
    },
    "_id": "Qn7sjWDk4h0B27aQ"
  }, {
    "name": "El Mini Bar",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.4196259,
      "longitude": -3.7095648999999993
    },
    "creation_date": "2015-10-01T13:26:25.848Z",
    "address": {
      "bar": "La Encantada Reina de Cuba",
      "house_number": "10",
      "road": "Cuesta de Santo Domingo",
      "residential": "Barrio Palacio",
      "suburb": "Barrio de los Austrias",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "RSgDWrHH8cJ7KiLuG"
  }, {
    "name": "Nannou Donuts House",
    "wifiQuality": "0",
    "powerAvailable": "on",
    "comments": ["Cheap local donut shop. Great for getting some work done with a sweet donut."],
    "position": {
      "latitude": "37.0795095",
      "longitude": "25.1468574"
    },
    "_id": "RoukL4jTPVdMjWRv"
  }, {
    "name": "Google Campus",
    "wiFiQuality": 5,
    "powerAvailable": true,
    "comments": ["Nice venue, Google Campus"],
    "position": {
      "latitude": 40.4121601,
      "longitude": -3.7191547
    },
    "address": {
      "road": "Calle de Moreno Nieto",
      "city_district": "Arganzuela",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28005",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "SLYNLkntEWerKCyJn"
  }, {
    "name": "El Horno de Triana",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Nice shaded outdoor"],
    "position": {
      "latitude": "37.38447443809304",
      "longitude": "-6.009091667954997"
    },
    "_id": "STsOsimlpZAh6MwN"
  }, {
    "name": "Antico CaffÃ¨",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.4021573,
      "longitude": 2.1531637
    },
    "creation_date": "2015-05-25T16:09:46.897Z",
    "address": {
      "restaurant": "Luna de Istanbul",
      "house_number": "160",
      "road": "Carrer Gran de GrÃ cia",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "SYCrYNXq2Nux7pAWX"
  }, {
    "name": "Antico CaffÃ¨",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.4021573,
      "longitude": 2.1531637
    },
    "creation_date": "2015-05-25T16:09:44.677Z",
    "address": {
      "restaurant": "Luna de Istanbul",
      "house_number": "160",
      "road": "Carrer Gran de GrÃ cia",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "SoxhLgNL4Dnaahi87"
  }, {
    "name": "Zurbaran",
    "wifiQuality": "1",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "38.24707641472709",
      "longitude": "-6.305401611057073"
    },
    "_id": "U0fLHQ5I2nmLjYra"
  }, {
    "name": "ReykjavÃ­k City Library",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["- Quiet space with books and free coffee. \n- Open 7/7\n- Tryggvagata, 101 ReykjavÃ­k\n- www.borgarbokasafn.is/en\n\n"],
    "position": {
      "latitude": "64.14979",
      "longitude": "-21.940180599999998"
    },
    "_id": "VDzHSKnqkVRkP9Ij"
  }, {
    "name": "Garimbar",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [" Burger place with terrace"],
    "position": {
      "latitude": "28.4594148",
      "longitude": "-16.2653533"
    },
    "_id": "VX9SIZLjper2GP2S"
  }, {
    "name": "La Vieja Bodega Rural",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Authentic Bodega with nice people, good food. Internet and power available."],
    "position": {
      "latitude": "43.537594999999996",
      "longitude": "-5.6691867"
    },
    "_id": "X7ijqcfpDCx9dD86"
  }, {
    "name": "Absenta",
    "wiFiQuality": 2,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3804252,
      "longitude": 2.1700561
    },
    "creation_date": "2015-05-04T11:29:12.493Z",
    "address": {
      "park": "Jardins de RubiÃ³ i Lluch",
      "pedestrian": "Jardins del Doctor Fleming",
      "suburb": "el Raval",
      "city_district": "Ciutat Vella",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08001",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "XFiiCiym2iixvMzsE"
  }, {
    "name": "Amarca",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Terrace over the sea"],
    "position": {
      "latitude": "28.37721128",
      "longitude": "-16.72357627"
    },
    "_id": "Xx821JR0Vq3mFmM5"
  }, {
    "name": "Tetuan Valley",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "comments": ["Nice venue, Tetuan Valley"],
    "position": {
      "latitude": 40.4126139,
      "longitude": -3.7204316
    },
    "address": {
      "pharmacy": "Farmacia - Calle Linneo 15",
      "house_number": "15",
      "road": "Calle Linneo",
      "city_district": "Arganzuela",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28005",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "Y2rYXLyaEniA9hHH6"
  }, {
    "name": "7 Vies",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 28.4892066,
      "longitude": -16.3144989
    },
    "creation_date": "2015-12-19T14:08:58.059Z",
    "address": {
      "house_number": "11",
      "pedestrian": "Calle San AgustÃ­n",
      "suburb": "La Manzanilla",
      "city": "San CristÃ³bal de La Laguna",
      "county": "Santa Cruz de TÃ©nÃ©rife",
      "state": "Canaries",
      "postcode": "38201",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "Yu5urF6WXdgqspoqj"
  }, {
    "name": "Caleta di Gracia",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.402558299999995,
      "longitude": 2.1567559
    },
    "creation_date": "2015-05-21T13:24:48.137Z",
    "address": {
      "bar": "134",
      "road": "Carrer del Torrent de l'Olla",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08012",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "ZJijQgHgyHHZTcpcG"
  }, {
    "name": "Tipografia",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "45.6418448",
      "longitude": "25.590751899999997"
    },
    "_id": "ZeAFBvNSHLZYwXer"
  }, {
    "name": "Cafeteria EspaÃ±a",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["A lot of power outlets are available.\nBar is open all day long (even during siesta time!)."],
    "position": {
      "latitude": "38.4229193",
      "longitude": "-6.4177489"
    },
    "_id": "a64NqbjyvcYDaAr5"
  }, {
    "name": "PALM Health",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["The WiFi connection is 200Mb/s with no port constraint!\nThe access, coffee shop and restautant are however reserved to PALM members and their invites."],
    "position": {
      "latitude": "38.6409269",
      "longitude": "-90.3670647"
    },
    "_id": "aCdOF85FnCUbnQ6H"
  }, {
    "name": "Beer Station ",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.4199967",
      "longitude": "-3.7085549999999996"
    },
    "_id": "ada705c70367331eca6f931a8fd5434c"
  }, {
    "name": "Vanhoutten Coffee",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["avoid at lunch time 'cause noise and bad wifi (11am-2pm), a lot of place but a little bit unpersonal, waiters are very friendly - Wifi Password:  vanhoutte1"],
    "position": {
      "latitude": "45.5125959",
      "longitude": "-73.5611273"
    },
    "_id": "anaRLYsdcRcABq54"
  }, {
    "name": "French Coffeeshop",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Good south Amerian coffees.\nWifi with email."],
    "position": {
      "latitude": "44.8521814",
      "longitude": "0.48437090000000005"
    },
    "address": {
      "restaurant": "La bodega",
      "road": "Rue Paul Bert",
      "neighbourhood": "Le Petit Naillac",
      "suburb": "La Madeleine",
      "town": "Bergerac",
      "county": "Bergerac",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "24100",
      "country_code": "fr"
    },
    "_id": "bb090814240d0dcf92dd8cc2afc3fe83"
  }, {
    "name": "Casa FulÃ©",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["The only spot with decent Internet connection in the area.\nOutdoor on the beach"],
    "position": {
      "latitude": "28.378100399999997",
      "longitude": "-16.723617"
    },
    "_id": "c2KNH7owoXdFpihj"
  }, {
    "name": "La Platea",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "48.8421616",
      "longitude": "2.2927665"
    },
    "address": {
      "house_number": "130",
      "road": "Rue de la Croix Nivert",
      "suburb": "Quartier de Grenelle",
      "city_district": "Paris 15e Arrondissement",
      "city": "Paris",
      "county": "Paris",
      "state": "ÃŽle-de-France",
      "country": "France",
      "postcode": "75015",
      "country_code": "fr"
    },
    "_id": "c7cc1a5b43322cd7622230353e6cd020"
  }, {
    "name": "Equinox",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Restaurant with classic French food."],
    "position": {
      "latitude": "48.8578063",
      "longitude": "2.3580783"
    },
    "address": {
      "address29": "Kusumi",
      "pedestrian": "Rue des Rosiers",
      "suburb": "Quartier Saint-Gervais",
      "city_district": "Paris 4e Arrondissement",
      "city": "Paris",
      "county": "Paris",
      "state": "ÃŽle-de-France",
      "country": "France",
      "postcode": "75004",
      "country_code": "fr"
    },
    "_id": "c83d80f7ed0ebacabf1cac4eaf2d66f6"
  }, {
    "name": "Eruki",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "43.0130852",
      "longitude": "-7.557275400000001"
    },
    "_id": "cYCQN1zzcfJlgCKa"
  }, {
    "name": "Le Trip Zazou",
    "wifiQuality": "1",
    "powerAvailable": "on",
    "comments": ["You must create an account with a valid email or phone number for desktop.\nYou must also download the app if you're using a mobile device."],
    "position": {
      "latitude": "44.8355988",
      "longitude": "-0.5656205"
    },
    "address": {
      "house_number": "24",
      "road": "Rue de la Fusterie",
      "suburb": "Saint-Michel - Nansouty - Saint-GenÃ¨s",
      "city": "Bordeaux",
      "county": "Bordeaux",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "33000;33100;33300;33800",
      "country_code": "fr"
    },
    "_id": "ce184949ac11a9778a787e2f384a8e83"
  }, {
    "name": "Retro Gusto",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["A cover terrasse is present. Nice cosy place with italian people."],
    "position": {
      "latitude": "40.4160223",
      "longitude": "-3.7111511"
    },
    "_id": "ce18997574a23a7ea674dd2c61a3e03a"
  }, {
    "name": "Tostas & Tapas",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.426114399999996",
      "longitude": "-3.6793911"
    },
    "address": {
      "restaurant": "Bar Camorrillo",
      "house_number": "67",
      "road": "Calle de Hermosilla",
      "suburb": "Salamanca",
      "city_district": "Salamanca",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28001",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "d4efe726f0e83347b4c9b279f7ba7f05"
  }, {
    "name": "El huerto de Lucas",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Nice cosy place.\nInternet requires email validation or FB account."],
    "position": {
      "latitude": "40.423826999999996",
      "longitude": "-3.6960507999999996"
    },
    "_id": "dc197e2c7b752cfc5e3fc5721ce95870"
  }, {
    "name": "Coffee Art",
    "wiFiQuality": 0,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 45.461626599999995,
      "longitude": 9.1741111
    },
    "creation_date": "2015-06-29T10:33:03.839Z",
    "address": {
      "house_number": "24",
      "pedestrian": "Piazza Sant'Ambrogio",
      "neighbourhood": "Sant'Ambrogio",
      "suburb": "Zona 1",
      "city": "Milan",
      "county": "Milan",
      "state": "Lombardie",
      "postcode": "20123",
      "country": "Italie",
      "country_code": "it"
    },
    "_id": "dgGNdumN296jgsZXh"
  }, {
    "name": "Los Templarios",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Quiet with outdoor"],
    "position": {
      "latitude": "38.08786233606248",
      "longitude": "-6.271961914311322"
    },
    "_id": "e5vlgjleSnpa0751"
  }, {
    "name": "the Hot Pot",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Healthy and affordable food, smoothies in a human respect\n"],
    "position": {
      "latitude": "48.840648770850386",
      "longitude": "2.2822390124201775"
    },
    "_id": "e6wrgHAgyGTh0efA"
  }, {
    "name": "Panvia",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Large original selection of sweet coffees"],
    "position": {
      "latitude": "28.46649935",
      "longitude": "-16.26054806"
    },
    "_id": "eCpn0cOKh9FMEXhS"
  }, {
    "name": "Le Mitico",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "44.8274804",
      "longitude": "-0.5569839000000001"
    },
    "address": {
      "house_number": "242",
      "road": "Cours de la Marne",
      "suburb": "Bordeaux Sud",
      "city": "Bordeaux",
      "county": "Bordeaux",
      "state": "Aquitaine-Limousin-Poitou-Charentes",
      "country": "France",
      "postcode": "33000;33100;33300;33800",
      "country_code": "fr"
    },
    "_id": "eae8897ec8c4020b19f66c44245ce551"
  }, {
    "name": "La Tia Manuela",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.428666",
      "longitude": "-3.7038209"
    },
    "_id": "f202be6a9b5c0de809724a7f6400f8dd"
  }, {
    "name": "Likitta",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 39.218930799999995,
      "longitude": 9.1214522
    },
    "creation_date": "2015-06-29T12:46:26.498Z",
    "address": {
      "fuel": "Q8",
      "pedestrian": "Piazza Giuseppe Garibaldi",
      "suburb": "Villanova",
      "city": "Cagliari",
      "county": "Cagliari",
      "state": "Sardaigne",
      "postcode": "09121-09131, 09134",
      "country": "Italie",
      "country_code": "it"
    },
    "_id": "f3GZp6ZKZzCbwPunB"
  }, {
    "name": "TEA Tenerife Espacio de las Arte",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Just wow! The library is open 24/7!!\nOpen WiFi, bright rooms, a lotod comfort.\nPerfect spot!"],
    "position": {
      "latitude": "28.4631328",
      "longitude": "-16.25256544"
    },
    "_id": "fXuIJvgddsJyunKS"
  }, {
    "name": "El Limon",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Vegeterian restaurant, fresh juice place, 2 floors and a terrace."],
    "position": {
      "latitude": "28.4164514",
      "longitude": "-16.5480492"
    },
    "_id": "fvufTCGIn8EK1gpV"
  }, {
    "name": "El Abuelo",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Perfect place to work and have a good breakfast"],
    "position": {
      "latitude": "42.7788746",
      "longitude": "-7.4110570000000004"
    },
    "_id": "g96l7YzjbcMy5vsa"
  }, {
    "name": "El Raco del Perill",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3994729,
      "longitude": 2.1614367
    },
    "creation_date": "2015-05-01T11:10:31.108Z",
    "address": {
      "address29": "Centre esportiu municipal Perill",
      "road": "Carrer del Perill",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08009",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "goRPuBEX64JumWLXR"
  }, {
    "name": "Tupinamba",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.398942399999996,
      "longitude": 2.1607335
    },
    "creation_date": "2015-05-19T13:20:59.379Z",
    "address": {
      "sports": "Inter Sport",
      "road": "Carrer de Bonavista",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08008",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "hRhgjpXHWqHSxw93g"
  }, {
    "name": "Casa Carlos",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Very typical local restaurant with an outdoor"],
    "position": {
      "latitude": "37.384369642589746",
      "longitude": "-6.0091014639069975"
    },
    "_id": "hSBS2hKPXWRf9ude"
  }, {
    "name": "Colmado",
    "wifiQuality": "1",
    "powerAvailable": "on",
    "comments": ["Unexpesive light and quality food. Cozy natural-style place."],
    "position": {
      "latitude": "41.4026226",
      "longitude": "2.159877"
    },
    "_id": "iuumVFfJ93C4KEUj"
  }, {
    "name": "Secret Cafe",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Patio, sea view"],
    "position": {
      "latitude": "37.08365603238379",
      "longitude": "25.146648464840702"
    },
    "_id": "jPbWa2hnZopCJmYr"
  }, {
    "name": "Locanda Garden",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Terrace available"],
    "position": {
      "latitude": "31.958453333333335",
      "longitude": "35.92167333333334"
    },
    "_id": "jo4w7DWa8ArNb6IX"
  }, {
    "name": "National and University Library of Iceland",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Very quiet, a lot of free space and a small coffee shop.\nhttps://landsbokasafn.is/index.php/english"],
    "position": {
      "latitude": "64.1431094",
      "longitude": "-21.9511154"
    },
    "_id": "kErSjbVHHAlTbVuW"
  }, {
    "name": "Garbo",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.418898399999996,
      "longitude": -3.7031664999999996
    },
    "creation_date": "2015-10-23T11:43:24.662Z",
    "address": {
      "restaurant": "Garbo ristorante",
      "pedestrian": "Plaza del Carmen",
      "residential": "Barrio Sol",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28080",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "kEy9BtSHPNyPgPu3R"
  }, {
    "name": "Baraka Bar",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Outdoor available.\nSoft music but too loud inside for a call."],
    "position": {
      "latitude": "38.42529717598818",
      "longitude": "-6.419333449636873"
    },
    "_id": "kdlycsQlObjGcx1k"
  }, {
    "name": "Hostel Mostel",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Great friendly hostel with 2 terrasses, good internet"],
    "position": {
      "latitude": "43.0839824",
      "longitude": "25.6382102"
    },
    "_id": "l4IuwRsYo83TYTEY"
  }, {
    "name": "Ideal",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Nice coffee, nice people. Power was not available when i went there. "],
    "position": {
      "latitude": "41.400905699999996",
      "longitude": "2.2038143"
    },
    "_id": "mGzJr0IYdDWzTVsr"
  }, {
    "name": "Knella",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.400554299999996,
      "longitude": 2.1633302999999997
    },
    "creation_date": "2015-05-26T13:55:44.473Z",
    "address": {
      "road": "Carrer de Santa EulÃ lia",
      "suburb": "la Vila de GrÃ cia",
      "city_district": "GrÃ cia",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08037",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "mXcQYJGuCNRWiuARM"
  }, {
    "name": "Milano ",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Beautiful shaded outdoor.\nOne pwer outlet available in case"],
    "position": {
      "latitude": "38.091290699999995",
      "longitude": "-6.2747836999999995"
    },
    "_id": "mwIWX2cCk9Jz1Zwh"
  }, {
    "name": "Del Greco",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 40.419681499999996,
      "longitude": -3.7093211999999998
    },
    "creation_date": "2015-09-30T08:32:04.378Z",
    "address": {
      "common": "Plaza de Santo Domingo",
      "pedestrian": "Plaza de Santo Domingo",
      "residential": "Barrio Palacio",
      "suburb": "Barrio de los Austrias",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28013",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "mxiTbRq7EW62WXfeS"
  }, {
    "name": "Casa Clara",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Outdoor available. Open from morning."],
    "position": {
      "latitude": "37.87359641720941",
      "longitude": "-6.0797098684853035"
    },
    "_id": "nD8IyKGNG4qrSXDy"
  }, {
    "name": "Hillman Hall - Washu",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Large bright space perfect for collaborative work.\nIdeally be here with students."],
    "position": {
      "latitude": "38.6469877",
      "longitude": "-90.3046459"
    },
    "_id": "oTAnQ3Iwm5zJgOhA"
  }, {
    "name": "La FÃ¡brica de cajas",
    "wiFiQuality": 4,
    "powerAvailable": false,
    "comments": ["Nice venue, La FÃ¡brica de cajas"],
    "position": {
      "latitude": 40.4275136,
      "longitude": -3.7013815
    },
    "address": {
      "hairdresser": "Le Salon d'Apodaca",
      "house_number": "1",
      "road": "Calle de Apodaca",
      "residential": "Barrio Justicia",
      "suburb": "Chueca",
      "city_district": "Centro",
      "city": "Madrid",
      "county": "Ãrea metropolitana de Madrid y Corredor del Henares",
      "state": "CommunautÃ© de Madrid",
      "postcode": "28004",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "pAMJrnoM3Wd6RHwZW"
  }, {
    "name": "Rutlla CaffÃ©",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Outdoor terrasse available"],
    "position": {
      "latitude": "41.95521230000001",
      "longitude": "2.6380445"
    },
    "_id": "pyCqgpkl0B1AsEGq"
  }, {
    "name": "Piccione",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Italian desert specialties."],
    "position": {
      "latitude": "38.6553664",
      "longitude": "-90.29971599999999"
    },
    "_id": "qBHlTJSwXUmEGhM3"
  }, {
    "name": "Los Templarios",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Quiet with outdoor.\nOpen WiFi"],
    "position": {
      "latitude": "38.08801967216627",
      "longitude": "-6.270111820603368"
    },
    "_id": "qepZF02WNQHGYaWG"
  }, {
    "name": "Oma BistrÃ²",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.385711199999996,
      "longitude": 2.1584871999999997
    },
    "creation_date": "2015-05-01T16:31:12.854Z",
    "address": {
      "house_number": "76",
      "road": "Carrer de Casanova",
      "neighbourhood": "l'Antiga Esquerra de l'Eixample",
      "suburb": "l'Antiga Esquerra de l'Eixample",
      "city_district": "Eixample",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08011",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "r85BzvMdC48PFyEqL"
  }, {
    "name": "Absenta",
    "wiFiQuality": 2,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3804252,
      "longitude": 2.1700561
    },
    "creation_date": "2015-05-04T11:29:24.413Z",
    "address": {
      "park": "Jardins de RubiÃ³ i Lluch",
      "pedestrian": "Jardins del Doctor Fleming",
      "suburb": "el Raval",
      "city_district": "Ciutat Vella",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08001",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "rhxTptMgADD7HN6qw"
  }, {
    "name": "Gott HÃ´tel/Coffee",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "45.641053299999996",
      "longitude": "25.5897524"
    },
    "_id": "roDjoRZARChBXj7K"
  }, {
    "name": "Italian Bocca",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Terrace"],
    "position": {
      "latitude": "28.3777251",
      "longitude": "-16.7237737"
    },
    "_id": "rqKwWbdKhCWID7P7"
  }, {
    "name": "La Fourmi",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "41.4020121",
      "longitude": "2.1615482999999998"
    },
    "_id": "trbIJM6sMtls5XPn"
  }, {
    "name": "",
    "wiFiQuality": null,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 43.573068,
      "longitude": 7.0544138
    },
    "creation_date": "2015-08-02T16:40:04.198Z",
    "address": {
      "road": "Chemin du Fournas",
      "neighbourhood": "La ChÃ¨vre d'Or",
      "suburb": "Super Cannes",
      "town": "Vallauris",
      "county": "Alpes-Maritimes",
      "state": "Provence-Alpes-CÃ´te d'Azur",
      "country": "France",
      "postcode": "06220",
      "country_code": "fr"
    },
    "_id": "u8hwWd5krsSaiwcW5"
  }, {
    "name": "malqaso",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.3944772,
      "longitude": 2.171536
    },
    "creation_date": "2015-05-26T12:52:52.611Z",
    "address": {
      "library": "Biblioteca Sofia Barat",
      "house_number": "64-68",
      "road": "Carrer de Girona",
      "neighbourhood": "la Dreta de l'Eixample",
      "suburb": "la Dreta de l'Eixample",
      "city_district": "Eixample",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08010",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "uFypsfCuM69odhFKK"
  }, {
    "name": "Daver's Cafe",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Covered terrace."],
    "position": {
      "latitude": "28.4130452",
      "longitude": "-16.5428699"
    },
    "_id": "uwjeeS8xlZnNvlEk"
  }, {
    "name": "BibliothÃ¨que",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["They have an inside patio plus the outdoor terrace.\nNoise ambiance if average."],
    "position": {
      "latitude": "45.6423452",
      "longitude": "25.590800500000004"
    },
    "_id": "v1Z2lDEXHwFfNz2O"
  }, {
    "name": "Galerna",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "43.5631814",
      "longitude": "-6.1454032"
    },
    "_id": "v6pvVt97X5wLXWDC"
  }, {
    "name": "Museum of Hongarian Parliement",
    "wifiQuality": "2",
    "powerAvailable": "on",
    "comments": ["Available from the coffeeshop and the stairs of the entry of the musem.\nThe place is not too loud.\nTechnical detail : some ports are closed."],
    "position": {
      "latitude": "48.8582",
      "longitude": "2.3387"
    },
    "_id": "vHenZUzVarfX4aTP"
  }, {
    "name": "Pomodoro",
    "wifiQuality": "4",
    "powerAvailable": "on",
    "comments": ["Stunning view!"],
    "position": {
      "latitude": "28.41757578",
      "longitude": "-16.54733399"
    },
    "_id": "wPYUJBDtUVtymJH6"
  }, {
    "name": "Faborit",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": [""],
    "position": {
      "latitude": "40.421963999999996",
      "longitude": "-3.707903"
    },
    "_id": "wi7nnKSTtXIZoJtU"
  }, {
    "name": "CafÃ© Em Nazih",
    "wifiQuality": "3",
    "powerAvailable": "on",
    "comments": ["Coupons Wifi for free available for 4 hours. Nice and cheap lebanese food"],
    "position": {
      "latitude": "33.8963404",
      "longitude": "35.5166568"
    },
    "_id": "xade1m1kzG2D9JwA"
  }, {
    "name": "Hendrix",
    "wiFiQuality": 4,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.397613299999996,
      "longitude": 2.152618
    },
    "creation_date": "2015-05-12T11:13:10.101Z",
    "address": {
      "museum": "FundaciÃ³ Foto ColectÃ nia",
      "road": "Carrer de JuliÃ¡n Romea",
      "neighbourhood": "Sant Gervasi",
      "suburb": "Sant Gervasi - Galvany",
      "city_district": "SarriÃ  - Sant Gervasi",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08006",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "xbJ2ZFqYzNRoYypCh"
  }, {
    "name": "Villa de Madrid (Eteneu network)",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.384465299999995,
      "longitude": 2.1720424
    },
    "creation_date": "2015-05-04T14:33:59.811Z",
    "address": {
      "archaeological_site": "Via Sepulcral Romana",
      "pedestrian": "PlaÃ§a de la Vila de Madrid",
      "suburb": "el GÃ²tic",
      "city_district": "Ciutat Vella",
      "city": "Barcelone",
      "county": "Barcelonais",
      "state": "Catalogne",
      "postcode": "08002",
      "country": "Espagne",
      "country_code": "es"
    },
    "_id": "xzCRWbK4mDv8uoDWL"
  }, {
    "name": "Pastarito",
    "wiFiQuality": 3,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 41.8989188,
      "longitude": 12.501072899999999
    },
    "creation_date": "2015-11-11T15:15:32.722Z",
    "address": {
      "fast_food": "Pastarito - Pizzarito",
      "house_number": "25",
      "road": "Via Gioberti",
      "suburb": "Castro Pretorio",
      "city_district": "Municipio Roma I",
      "city": "Rome",
      "county": "RM",
      "state": "Latium",
      "postcode": "00185",
      "country": "Italie",
      "country_code": "it"
    },
    "_id": "zARpYjoZZp5R9d4g7"
  }, {
    "name": "fakey",
    "wiFiQuality": 0,
    "powerAvailable": true,
    "type": "",
    "comments": [],
    "author": "vinyll",
    "position": {
      "latitude": 47.461626599999995,
      "longitude": 10.1741111
    },
    "address": {
      "path": "Sommerweg",
      "village": "Bolsterlang",
      "county": "HÃ¶rnergruppe (VGem)",
      "state_district": "Souabe",
      "state": "BaviÃ¨re",
      "postcode": "87538",
      "country": "Allemagne",
      "country_code": "de"
    },
    "_id": "zWszaJj6WquSfQvHu"
  }, {
    "name": "Starbucks",
    "wifiQuality": "5",
    "powerAvailable": "on",
    "comments": ["Bad point ... it's a Starbucks"],
    "position": {
      "latitude": "45.5356501",
      "longitude": "-73.6167753"
    },
    "_id": "zz3Fgx94c9tE7NzY"
  }
]

ReactDOM.render(
  <App poisBDD={poisBDD} />, document.getElementById('poisCards'))

function filterLngMax(poisBDD) {
  return poisBDD >= 10;
}
function filterLngMin(element) {
  return element >= 10;
}
function filterLatMax(element) {
  return element >= 10;
}
function filterLatM(element) {
  return element >= 10;
}
