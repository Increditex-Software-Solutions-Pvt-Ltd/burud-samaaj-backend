// Data for dropdown options (replace with your own data)
const data = {
    "Maharashtra": {
        "Ahmednagar": {
            "Nagar": ["Town1", "Town2", "Town3"],
            "Sangamner": [ "Sangamner","Akalapur",	"Ambhore",	"Ambidumala",	"Ambikhalsa",	"Amlewadi",	"Ashvi Bk",	"Ashvi Kd",	"Aurangpur",	"Bhojdari",	"Birewadi",	"Borban",	"Bota",	"Chandanapuri",	"Chanegoan",	"Chikani",	"Chikhali",	"Chincholi Gurav",	"Chinchpur Kd",	"Darewadi",	"Dawas",	"Devgoan",	"Devkavthe",	"Dhad Khurd",	"Dhandarphal Bk",	"Dhandarphal Kd",	"Digras",	"Dolasne",	"Devpur",	"Ghargon",	"Ghulewadi",	"Gunjalwadi",	"Ganeshwadi",	"Jakhori",	"Jambhul Wadi",	"Jambut Bk",	"Jawale Baleshwar",	"Jawale Kadlag",	"Jorvee",	"Kanjapur",	"Kankapur",	"Kanoli",	"Karjulepathar",	"Karule",	"Kasaradumala",	"Khali",	"Khambe",	"Khandarmalwadi",	"Khandgoan",	"Kharadi",	"Khare",	"Kharshinde",	"Kokangoan",	"Kolhewadi",	"Kolwade",	"Konchi",	"Khed",	"Kothe Bk",	"Kauthe Dhandarphal",	"Kauthe Kamleshwar",	"Kothe Kd",	"Kouthe Malkapur",	"Kuran",	"Kurkundi",	"Kurkutwadi",	"Karule",	"Kakadwadi",	"Lohare",	"Manchi",	"Mahalwadi",	"Maldad",	"Malegoan Haveli",	"Malegoan Pathar",	"Malewadi",	"Malunje",	"Mandve Bk",	"Manglapur",	"Manoli",	"Mendhawan",	"Mhaswandi",	"Mirpur",	"Mirzapur",	"Nanduri Dumala",	"Nandurkhandrmal",	"Nilwande",	"Nimaj",	"Nimble",	"Nimgoan Bhojapur",	"Nimgoan Bk",	"Nimgoan Kd",	"Nimgaon Tembhi",	"Nimgoanjali",	"Nimon",	"Nannaj Dumala",	"Ozer BK",	"Ozer Kd",	"Palaskhede",	"Panodi",	"Paregaon Bk",	"Paregoan Kd",	"Pemgiri",	"Pimpalgaon konzira",	"Pimpalgaon Matha",	"Pimpalgoan Depa",	"Pimpalgaon Khand",	"Pimparne",	"Pimple",	"Pimpri louki Azampur",	"Pokhari Baleshwar",	"Pokhari Haveli",	"Pratappur",	"Rahimpur(Mal)",	"Rahimpur(Khale Gaon)",	"Rajapur",	"Rankhambwadi",	"Rayate",	"Rayatewadi",	"Sadatpur",	"Sakur",	"Samnapur",	"Sangamner Kd",	"Sangvi",	"Sarole Pathar",	"Sawarchol",	"Sawargoan Ghule",	"Sawargoan Tal",	"Saykhindi",	"Shedgoan",	"Shiblapur",	"Shindodi",	"Shirapur",	"Shirasgoan Dhupe",	"Shindewadi",	"Sukewadi",	"Talegoan",	"Tisgoan",	"Tigoan",	"Umbri Balapur",	"Velhale",	"Vadzari",	"Wadgoan Landga",	"Wadgoanpan",	"Wadzari Bk",	"Wadzari Kd",	"Waghapur",	"Wankute",	"Warudi Pathar",	"Warvandi",	"Wadzari Bk",	"Wadgavpan",	"Zarekati",	"Zole"
],
            "Nevasa": ["Nevasa","Amalner",	"Antarwali",	"Babhulkhede",	"Babhulwedhe",	"Bahirwadi",	"Baku Pimpalgaon",	"Barhanpur",	"Belhekarwadi",	"Belpandhari",	"Belpimpalgaon",	"Bhalgaon",	"Bhanashiware",	"Bhende Bk.",	"Bhende Kh.",	"Borgaon",	"Chanda",	"Chilekhanwadi",	"Chinchban",	"Dedgaon",	"Deogaon",	"Deosade",	"Dhamori",	"Dhangarwadi",	"Dhangarwadi",	"Dighi",	"Fattepur",	"Galnimb",	"Ganeshwadi",	"Georai",	"Ghodegaon",	"Ghogargaon",	"Gidegaon",	"Godhegaon",	"Gogalgaon",	"Gomalwadi",	"Gondegaon",	"Gonegaon",	"Gopalpur",	"Goyegavhan",	"Handi Nimgaon",	"Hingoni",	"Imampur",	"Jainpur",	"Jalke Bk.",	"Jalke Kh.",	"Jayagude Akhada",	"Jeur",	"Kangoni",	"Karajgaon",	"Karegaon",	"Kautha",	"Khadke",	"Khalal Pimpri",	"Khamgaon",	"Kharwandi",	"Khedle Kajali",	"Khedle Parmanand",	"Khunegaon",	"Khupti",	"Kukana",	"Landewadi",	"Lekurwali Akhada",	"Loharwadi",	"Lohgaon",	"Madki",	"Mahalaxmi Hivare",	"Maka",	"Maktapur",	"Malewadi Dumala",	"Malewadi Khalsa",	"Malichinchora",	"Mandegavhan",	"Manglapur",	"Mhalapur",	"Mhalas Pimpalgaon",	"Mhasale",	"Morgavhan",	"Moryachinchore",	"Mukindpur",	"Murme",	"Nagapur",	"Najik Chincholi",	"Nandur Shikari",	"Narayanwadi",	"Nevasa Bk.",	"Nevasa Kh.",	"Nimbhari",	"Nipani Nimgaon",	"Pachegaon",	"Pachunde",	"Panaswadi",	"Panegaon",	"Patharwale",	"Pichadgaon",	"Pimpri Shahali",	"Pravara Sangam",	"Punatgaon",	"Rajegaon",	"Ramdoh",	"Ranjangaon",	"Rastapur",	"Salabatpur",	"Shahapur",	"Shinganapur",	"Shingve Tukai",	"Shirasgaon",	"Siregaon",	"Sonai",	"Soundala",	"Sukali Bk.",	"Sukali Kh",	"Sultanpur",	"Suregaon Gangapur",	"Suregaon Turf Dahigaon",	"Tamaswadi",	"Tarwadi",	"Telkudgaon",	"Toka",	"Usthal Dumala",	"Usthal Khalsa",	"Wadula Bahiroba",	"Wadule",	"Wakadi",	"Wanjarwadi",	"Wanjoli",	"Warkhed",	"Washim",	"Watapur",	"Zapwadi"
        ],
            "Rahuri": ["Rahuri","Amalner",	"Ambi",	"Aradgaon",	"Babhulgaon",	"Baragaon Nandur",	"Bodhegaon",	"Bramhangaon Bhand",	"Bramhani",	"Chandakapur",	"Chandegaon",	"Chedgaon",	"Chikhalthan",	"Chinchale",	"Chincholi",	"Chinchvihire",	"Daradgaon Tarf Belapur",	"Daradgaon Thadi",	"Davangaon",	"Deswandi",	"Dhamori Bk.",	"Dhamori Kh.",	"Dhanore",	"Digras",	"Gadadhe Akhada",	"Gadakhwadi",	"Ganegaon",	"Gangapur",	"Ghorpadwadi",	"Guha",	"Gunjale",	"Jambhali",	"Jambhulban",	"Jatap",	"Kanadgaon",	"Kangar Bk.",	"Kangar Kh.",	"Karajgaon",	"Katrad",	"Kendal Bk.",	"Kendal Kh.",	"Kesapur",	"Khadambe Bk.",	"Khadambe Kh.",	"Khudsargaon",	"Kolhar Kh",	"Kolyachiwadi",	"Kondhavad",	"Kopare",	"Kukkadwedhe",	"Kuranwadi",	"Lakh",	"Mahalgaon",	"Mahegaon",	"Malewadi/Dukrewadi",	"Malharwadi",	"Malunje Kh.",	"Manjari",	"Manori",	"Mhaisgaon",	"Mokal Ohal",	"Momin Akhada",	"Morwadi",	"Musalwadi",	"Nimbhere",	"Pathare Kh.",	"Pimpalgaon Fungi",	"Pimpri Avaghad",	"Pimpri Valan",	"Rahuri Kh.",	"Rahuri New",	"Rampur",	"Sade",	"Sankrapur",	"Satral",	"Shenwadgaon",	"Shilegaon",	"Songaon",	"Taharabad",	"Takalimiya",	"Tambhere",	"Tamnar Akhada",	"Tandulner",	"Tandulwadi",	"Tilapur",	"Trimbakpur",	"Tulapur",	"Umbre",	"Vadner",	"Valan",	"Vambori",	"Varshinde",	"Wabalewadi",	"Waghacha Akhada",	"Wanjulpoi",	"Warwandi",	"Wawarath"
        ],
            "Rahta": ["Rahta",	"Adgaon Kh.",	"Astagaon",	"Babhaleshwar Bk.",	"Babhaleshwar Kh.",	"Bhagwatipur",	"Chandrapur",	"Chitali",	"Cholkewadi",	"Dadh Bk.",	"Dahigaon Korhale",	"Dhangarwadi",	"Dorhale",	"Durgapur",	"Ekrukhe",	"Elamwadi",	"Gogalgaon",	"Hanmantgaon",	"Hasanapur",	"Jalgaon",	"Kankuri",	"Kelwad Bk.",	"Kelwad Kh.",	"Khadakewake",	"Kolhar Bk.",	"Korhale",	"Lohgaon",	"Loni Bk.",	"Loni Kh.",	"Mamdapur",	"Morwadi",	"Nandur Bk.",	"Nandur Kh.",	"Nandurkhi Bk.",	"Nandurkhi Kh.",	"Nathu Patalachiwadi",	"Nighoj",	"Nimgaon Korhale",	"Pathare Bk.",	"Pimpalwadi",	"Pimpari Lokai",	"Pimplas",	"Pimpri Nirmal",	"Puntamba",	"Rajuri",	"Rampurwadi",	"Ranjangaon Kh.",	"Ranjankhol",	"Rastapur",	"Rui",	"Sakuri",	"Sawali Vihir Bk.",	"Sawali Vihir Kh.",	"Shingave",	"Tarkaswadi",	"Tisgaon",	"Wakadi",	"Walki"
        ],
            "Shrigonda": ["Shrigonda", "Adhalgaon",	"Adhorewadi",	"Ajnuj",	"Anandwadi",	"Angare",	"Arangaon Dumala",	"Arvi",	"Baburdi",	"Bangarde",	"Banpimpri",	"Belwandi Bk.",	"Belwandi Kothar",	"Bhangaon",	"Bhapkarwadi",	"Bhavadi",	"Bhingan Dumala",	"Bhingan K",	"Bori",	"Chambhurdi",	"Chandgaon",	"Chavarsangavi",	"Chikalthanwadi",	"Chikhali",	"Chimbhale",	"Chorachiwadi",	"Chormalewadi",	"Danewadi",	"Deodaithan",	"Deulgaon",	"Dhawalgaon",	"Dhokraimala",	"Dokewadi",	"Domalewadi",	"Doraje",	"Erandoli",	"Gar",	"Gavhanewadi",	"Gavhanewadi",	"Ghargaon",	"Ghodegaon",	"Ghogargaon",	"Ghotawi",	"Ghugalwadgaon",	"Ghutewadi",	"Hangewadi",	"Hingani Dumala",	"Hiradgaon",	"Jangalewadi",	"Kamathi",	"Kansewadi",	"Kasti",	"Kautha",	"Khandgaon",	"Kharatwadi",	"Khetmalaswadi",	"Kokangaon",	"Kolgaon",	"Kondegavhan",	"Koregaon",	"Koregavhan",	"Kosegavhan",	"Kothul",	"Lagadwadi",	"Limpangaon",	"Loni Vyanknath",	"Madhewadgaon",	"Mahadeowadi",	"Mahadeowadi",	"Mahandulwadi",	"Mandavgan",	"Masalwadi",	"Math",	"Mengalwadi",	"Mhase",	"Mhatar Pimpri",	"Mundhekarwadi",	"Mungusgaon",	"Nimbavi",	"Nimgaon Khalu",	"Pandharewadi",	"Pargaon",	"Parwatwadi",	"Pedgaon",	"Pimpalgaon Pisa",	"Pimpri Kolandar",	"Pisora Bk.",	"Pisore Khand",	"Poliswadi",	"Rajapur",	"Rayagavhan",	"Ruikhed",	"Sangavi Dumala",	"Sarola Somwanshi",	"Shedgaon",	"Shipalkarwadi",	"Shirasgaon Bodkha",	"Suregaon",	"Surodi",	"Takali Lonar",	"Taklikade",	"Tandli Dumala",	"Taradgavhan",	"Thitesangavi",	"Ukhalgaon",	"Ukkadgaon",	"Vadali",	"Vadghul",	"Vangdari",	"Velu",	"Vethekarwadi",	"Visapur",	"Wadgaon Shindodi",	"Yavati",	"Yelapne"
        ],
            "Kopargaon": ["Anchalgaon",	"Anjanapur",	"Apegaon",	"Bahadarbad",	"Bahadarpur",	"Baktarpur",	"Bhojade",	"Bolaki",	"Bramhangaon",	"Chande Kasare",	"Chandgavhan",	"Chas",	"Dahigaon Bolka",	"Dauch Bk.",	"Dauch Kh.",	"Derde Chandwad",	"Derde Korhale",	"Dhamori",	"Dharangaon",	"Dhondewadi",	"Dhotre",	"Ghari",	"Ghoyegaon",	"Godhegaon",	"Handewadi",	"Hingani",	"Javalke",	"Jeur Kumbhari",	"Jeur Patoda",	"Kakadi",	"Kanhegaon",	"Karanji Bk.",	"Karwadi",	"Kasali",	"Khirdi Ganesh",	"Khopadi",	"Kokamthan",	"Kolgaon Thadi",	"Kolpewadi",	"Kopargaon",	"Kumbhari",	"Louki",	"Madhi Bk",	"Madhi Kh.",	"Mahegaon Deshmukh",	"Malegaon Thadi",	"Malharwadi",	"Manegaon",	"Manjur",	"Maygaon Devi",	"Morvis",	"Murshatpur",	"Nategaon",	"Ogadi",	"Padhegaon",	"Pohegaon Bk.",	"Pohegaon Kh.",	"Ranjangaon Deshmukh",	"Rawande",	"Sade",	"Samvatsar",	"Sangvi Bhusar",	"Sawalgaon",	"Shahajapur",	"Shahapur",	"Shirasgaon",	"Singnapur",	"Sonari",	"Sonewadi",	"Soyegaon",	"Suregaon",	"Takali",	"Talegaon Male",	"Tilwani",	"Ukkadgaon",	"Vadgaon",	"Velapur",	"Ves",	"Wari",	"Yesgaon"
        ],
            "Akola": ["Akola", "Agar",	"Akhatwada",	"Akkalkot",	"Akola",	"Akoli Bk.",	"Akoli Kh.",	"Aliyabad",	"Amanatpur",	"Ambikapur",	"Anakwadi",	"Anvi",	"Apatapa",	"Apoti Bk",	"Apoti Kh",	"Babhulgaon",	"Badlapur",	"Bahadarpur",	"Bahirkhed",	"Bakharabad",	"Bhamhapuri",	"Bhaurad",	"Bhod",	"Birsingpur",	"Bondarkhed",	"Bondarkhed",	"Borgaon",	"Borgaon",	"Chachondi",	"Chandur",	"Changefal",	"Chikhalgaon",	"Dabki",	"Dahigaon",	"Dahihanda",	"Dalambi",	"Dapaki",	"Dapura",	"Devali",	"Dhaga",	"Dhamana",	"Dhotardi",	"Dodaki",	"Dongargaon",	"Donwada",	"Dudhala",	"Dudhalam",	"Ekalara",	"Faramardabad",	"Gandhigram",	"Ganori",	"Ghusar",	"Ghusarwadi",	"Gonapur",	"Gondapur",	"Gopalkhed",	"Goregaon Bk",	"Goregaon Kh",	"Gotra",	"Gudadhi",	"Hatla",	"Hingma Tamaswadi",	"Hingna",	"Hingna Barling",	"Hingna Kumbhari",	"Hingna Mhaispur",	"Hingni Bk",	"Jalalabad",	"Jalalpur",	"Kalambeshwar",	"Kanadi",	"Kanchanpur",	"Kanshiwani",	"Kapashi Road",	"Kapashi Talav",	"Kapileshwar",	"Kasali Bk",	"Kasali Kh",	"Kasampur",	"Kati",	"Katyar",	"Kaulkhed",	"Kaulkhed",	"Khadka",	"Khadki Takali",	"Khakadi",	"Khambora",	"Khanapur",	"Kharab Bk",	"Kharab Kh",	"Khobarkhed",	"Kolambi",	"Kothari",	"Kumbhari",	"Kurankhed",	"Lakhanwada",	"Lakhonda Bk",	"Lakhonda Kh",	"Lonagra",	"Loni",	"Mahadalpur",	"Majalapur",	"Mandala",	"Marodi",	"Masa",	"Mazod",	"Mhaisang",	"Mhaispur",	"Mhatodi",	"Mirzapur",	"Mirzapur",	"Morgaon Bhakare",	"Mujare Mohamadpur",	"Mustafapur",	"Naigaon",	"Naothal",	"Nawakheda",	"Nimbhora",	"Nimbi",	"Nipana",	"Nirat",	"Nizampur",	"Pach Pimpal",	"Pailpada",	"Palaso Bk",	"Palaso Kh",	"Palodhi",	"Paritwada",	"Pati",	"Patur Nandapur",	"Rajapur",	"Rambhapur",	"Ramgaon",	"Rohana",	"Sangavi Bk",	"Sangavi Kh",	"Sangavi Mohadi",	"Sanglud Bk",	"Sanglud Kh",	"Shahanwajpur",	"Shahapur",	"Shamabad",	"Shiloda",	"Shivapur",	"Sisa",	"Sisaudegaon",	"Somthana",	"Sonala",	"Sonkhas",	"Sukali",	"Sukapur",	"Sukoda",	"Sultan Ajampur",	"Takali Jalam",	"Takli Pote",	"Takoda",	"Tamsi",	"Tankhed",	"Tapalabad",	"Ugwa",	"Ukli",	"Umerkhed",	"Wadad Bk",	"Wadad Kh",	"Wairat Rajapur",	"Wakapur",	"Waki",	"Walki",	"Wallabh Nagar",	"Wani",	"Warudi",	"Washimba",	"Yawalkhed",	"Yelwan",	"Yeota"
],
            "Shrirampur": ["Ainatpur",	"Belapur Bk.",	"Belapur Kh.",	"Bhairavnathnagar",	"Bhamathan",	"Bherdapur",	"Bhokar",	"Bramhangaon Vetal",	"Dattanagar",	"Dighi",	"Ekalahare",	"Fatyabad",	"Galnimb",	"Ghumandeo",	"Gondegaon",	"Govardhanpur",	"Gurjarwadi",	"Haregaon",	"Jafrabad",	"Kadit Bk.",	"Kadit Kh.",	"Kamalpur",	"Kanhegaon",	"Karegaon",	"Khanapur",	"Khandala",	"Khirdi",	"Khokar",	"Kuranpur",	"Ladgaon",	"Mahankal Wadgaon",	"Malewadi",	"Malunje Bk.",	"Malwadgaon",	"Mandve",	"Matapur",	"Matulthan",	"Muthewadgaon",	"Narsari",	"Naur",	"Naygaon",	"Nimgaon Khairi",	"Nipani Wadgaon",	"Padhegaon",	"Rampur",	"Sarala",	"Shirasgaon",	"Takalibhan",	"Ukkalgaon",	"Umbargaon",	"Undirgaon",	"Wadala Mahadeo",	"Waladgaon",	"Wangi",	"Wangi Kh.",
        ],
            "Parner": ["Akkalwadi",	"Alkuti",	"Apdhup",	"Astagaon",	"Babhulwade",	"Baburdi",	"Bahirobawadi",	"Bhalawani",	"Bhandgaon",	"Bhangadwadi",	"Bhondre",	"Bhoyare Gangarda",	"Chincholi",	"Chombhut",	"Daithane Gunjal",	"Darodi",	"Deswade",	"Devi Bhoyare",	"Dhavalpuri",	"Dhawanwadi",	"Dhoki",	"Dhotre Bk.",	"Dhotre Kh.",	"Diksal",	"Dongarwadi",	"Gadilgaon",	"Gajadipur",	"Ganji Bhoyare",	"Gargundi",	"Garkhindi",	"Gatewadi",	"Ghanegaon",	"Goregaon",	"Gunore",	"Hakigatpur",	"Hanga",	"Hatalkhindi",	"Hivare Korda",	"Jadhavwadi",	"Jamgaon",	"Jategaon",	"Jawala",	"Kadus",	"Kaknewadi",	"Kalamkarwadi",	"Kalas",	"Kalkup",	"Kanhoor",	"Karandi",	"Karjule Harya",	"Kasare",	"Katalwede",	"Khadakwadi",	"Kinhi",	"Kohakadi",	"Koregaon",	"Kurund",	"Loni Haveli",	"Loni Mawala",	"Majampur",	"Malkup",	"Mandave Kh.",	"Mawalewadi",	"Mhase Kh.",	"Mhaskewadi",	"Mhasne",	"Mhasoba Zap",	"Morwadi",	"Mungashi",	"Nandur Pathar",	"Narayan Gavhan",	"Nighoj",	"Pabal",	"Padali Ale",	"Padali Darya",	"Padali Kanhoor",	"Padali Ranjangaon",	"Palashi",	"Palaspur",	"Palwe Bk.",	"Palwe Kh.",	"Panoli",	"Parner",	"Patharwadi",	"Pimpalgaon Rotha",	"Pimpalgaon Turk",	"Pimpalner",	"Pimpri Gawali",	"Pimpri Jalsen",	"Pimpri Pathar",	"Pokhari",	"Punewadi",	"Ralegan Shindhi",	"Ralegaon Tharepal",	"Randhe",	"Ranjangaon",	"Rayatale",	"Renwadi",	"Rui Chhatrapati",	"Sangvi Surya",	"Sarola Advai",	"Sawargaon",	"Shahjapur",	"Sheri Koldara",	"Sherikasari",	"Shirapur",	"Shirsule",	"Siddeshwarwadi",	"Sultanpur",	"Supa",	"Takali Dhokeshwar",	"Tas",	"Tikhol",	"Venkute",	"Wade Gavhan",	"Wadgaon Amli",	"Wadgaon Darya",	"Wadgaon Gund",	"Wadgaon Sawtal",	"Wadner Bk.",	"Wadner Haveli",	"Wadule",	"Wadzire",	"Waghunde Bk.",	"Waghunde Kh.",	"Walwane",	"Waranwadi",	"Wasunde",	"Wesdare",	"Wiroli",	"Yadavwadi"
        ],
            "Pathardi": ["Adgaon",	"Agaskhand",	"Akola",	"Alhanwadi",	"Ambika Nagar",	"Auranjpur",	"Badewadi",	"Bhalgaon",	"Bharajwadi",	"Bhawarwadi",	"Bhilwade",	"Bhose",	"Bhutetakali",	"Bondarwadi",	"Borsewadi",	"Chekewadi",	"Chichondi",	"Chinchpur Ijade",	"Chinchpur Pangul",	"Chitali",	"Chitalwadi",	"Chumbhali",	"Dagadwadi",	"Damalwadi",	"Damalwadi",	"Dangewadi",	"Devrai",	"Dhakanwadi",	"Dhakanwadi",	"Dhamangaon",	"Dhangarwadi",	"Dharwadi",	"Dhawalewadi",	"Dongarwadi",	"Dulechandgaon",	"Ekanathwadi",	"Ghaitadakwadi",	"Ghatshiras",	"Ghumatwadi",	"Gitewadi",	"Hakewadi",	"Hanuman Takali",	"Hatra",	"Jambhali",	"Jatdeole",	"Jawakhede Dumala",	"Jawakhede Khalsa",	"Jawalwadi",	"Jirewadi",	"Jogewadi",	"Joharwadi",	"Kadgaon",	"Kalas Pimpri",	"Kalegaon Fakir",	"Kalewadi",	"Kamat Shingave",	"Karadwadi",	"Karanji",	"Karegaon",	"Karodi",	"Kasalwadi",	"Kasar Pimpalgaon",	"Kasarwadi",	"Kaudgaon",	"Kelwandi",	"Khandgaon",	"Kharwandi",	"Kherde",	"Kolhar",	"Kolsangavi",	"Kopare",	"Koradgaon",	"Kuttarwadi",	"Landakwadi",	"Lohasar",	"Madhi",	"Malegaon",	"Malewadi",	"Malibabhulgaon",	"Mandave",	"Manewadi",	"Manik Daundi",	"Midsangavi",	"Miri",	"Mohari",	"Mohate",	"Mohoj Bk.",	"Mohoj Diodhe",	"Mohoj Kh.",	"Munguswade",	"Nandur-nimba-daitya",	"Nimbodi",	"Nipani Jalgaon",	"Nivadunge",	"Padali",	"Pagori Pimpalgaon",	"Palavewadi",	"Parewadi",	"Pattryacha Tanda",	"Pimpalgaon Tappa",	"Pimpalgavhan",	"Pirewadi",	"Prabhupimpri",	"Raghohivre",	"Ranjani",	"Renukaiwadi",	"Rupnarwadi",	"Saidapur",	"Sakegaon",	"Sangavi Bk.",	"Sangavi Kh.",	"Satwad",	"Shankarwadi",	"Shekate",	"Shindewadi",	"Shingave Keshav",	"Shiral",	"Shirapur",	"Shirasathwadi",	"Somthane Bk.",	"Somthane Kh.",	"Somthane Nalwade",	"Sonoshi",	"Susare",	"Takali Manur",	"Tinkhadi",	"Tisgaon",	"Tondoli",	"Tribhuwanwadi",	"Vaiju Babhulgaon",	"Wadgaon",	"Walunj",	"Wasu",	"Yeli"
        ],
            "Shevgaon": ["Adhodi",	"Akhatwade",	"Akhegaon Titarfa",	"Amarapur",	"Antarwali Bk.",	"Antarwali Kh. Ne.",	"Antarwali Kh.she",	"Antre",	"Apegaon",	"Awhane Bk.",	"Awhane Kh.",	"Badgavhan",	"Baktarpur",	"Balam Takali",	"Barhanpur",	"Belgaon",	"Bhagur",	"Bhatkudgaon",	"Bhavinimgaon",	"Bhaygaon",	"Bodhegaon",	"Bodkhe",	"Chapadgaon",	"Chedechandgaon",	"Dadegaon",	"Dahifal",	"Dahigaon Ne.",	"Dahigaon She",	"Deolane",	"Deotakli",	"Dhor Jalgaon Ne.",	"Dhorhingani",	"Dhorjalgaon She.",	"Dhorsade",	"Diwate",	"Dongar Akhegaon",	"Erandgaon",	"Gadewadi",	"Gaikwad-jalgaon",	"Garudwadi",	"Ghevri",	"Ghotan",	"Golegaon",	"Hasnapur",	"Hatgaon",	"Hingangaon Ne",	"Joharapur",	"Kambi",	"Karhetakali",	"Karjat Kh.",	"Khadke",	"Khamgaon",	"Khampimpri",	"Khanapur",	"Kharadgaon",	"Khuntefal",	"Kolgaon",	"Konoshi",	"Kurudgaon",	"Ladjalgaon",	"Lakhamapuri",	"Lakhefal",	"Lolegaon",	"Madke",	"Majle Shahar",	"Malegaon",	"Malegaon Ne.",	"Malkapur",	"Mangrul Bk.",	"Mangrul Kh.",	"Mungi",	"Murmi",	"Murshatpur",	"Nagalwadi",	"Najik Babhulgaon",	"Nandurvihire",	"Nimbe",	"Pingewadi",	"Prabhuwadgaon",	"Rakshi",	"Ranegaon",	"Ranzani",	"Raotale",	"Salwadgaon",	"Samangaon",	"Shahajapur",	"Shahapur",	"Shahar Takali",	"Shekte Bk.",	"Shekte Kh.",	"Shevgaon",	"Shingori",	"Shobhanagar",	"Sone Sangavi",	"Sonvihir",	"Sukali",	"Sule Pimpalgaon",	"Sultanpur Bk.",	"Sultanpur Kh.",	"Tajnapur",	"Talani",	"Thakur Nimgaon",	"Thakur Pimpalgaon",	"Thate",	"Vijaypur",	"Wadgaon",	"Wadule Bk.",	"Wadule Kh.",	"Wagholi",	"Warkhed",	"Warur Bk.",	"Warur Kh."
        ],
            "Karjat": ["Akhoni",	"Alsunde",	"Ambijalgaon",	"Anandwadi",	"Autewadi",	"Babhulgaon Dumala",	"Babhulgaon khalsa",	"Bahirobawadi",	"Bajrangwadi",	"Balwandi",	"Baradgaon Dagadi",	"Baradgaon Sudrik",	"Bargewadi",	"Belgaon",	"Benwadi",	"Berdi",	"Bhambore",	"Bhandewadi",	"Bhose",	"Bitkewadi",	"Chakhalewadi",	"Chande Bk.",	"Chande Kh.",	"Chapadgaon",	"Chilvadi",	"Chincholi kaldat",	"Chincholi Ramjan",	"Deshmukhwadi",	"Deulwadi",	"Dhalwadi",	"Dhandewadi",	"Dighi",	"Diksal",	"Dombalwadi",	"Dudhodi",	"Durgaon",	"Ganeshwadi",	"Gaykarwadi",	"Ghumari",	"Gondardi",	"Goykarwadi",	"Gurav pimpri",	"Handalwadi",	"Hingangaon",	"Holewadi",	"Jalalpur",	"Jalgaon",	"Jalkewadi",	"Jogeshwarwadi",	"Kalyachiwadi",	"Kangudwadi",	"Kaprewadi",	"Karbhanwadi",	"Karpadi",	"Kaudane",	"Khandale",	"Khandavi",	"Khatgaon",	"Khed",	"Khurangewadi",	"Kokangaon",	"Kolvadi",	"Kombhali",	"Kopardi",	"Koregaon",	"Kuldharan",	"Kumbhefal",	"Lonimasadpur",	"Mahi",	"Malewadi",	"Malthan",	"Mandali",	"Manewadi",	"Mhalangi",	"Mirajgaon",	"Mulewadi",	"Nagalwadi",	"Nagamthan",	"Nagapur",	"Nandgaon",	"Nawsarwadi",	"Netakewadi",	"Nimbe",	"Nimbodi",	"Nimgaon daku",	"Nimgaon Gangarda",	"Paritwadi",	"Pategaon",	"Patewadi",	"Patharwadi",	"Pimpalwadi",	"Rakshaswadi Bk.",	"Rakshaswadi Kh.",	"Rashin",	"Ratanjan",	"Raukalewadi",	"Ravalgaon",	"Rehekuri",	"Ruigavhan",	"Shegud",	"Shimpore",	"Shinde",	"Siddhatek",	"Sitpur",	"Sonalwadi",	"Supe",	"Supekarwadi",	"Taju",	"Takli Khandeshwari",	"Talwadi",	"Taradgaon",	"Thergaon",	"Therwadi",	"Thetewadi",	"Tikhi",	"Torkadwadi",	"Wadgaon Tanpure",	"Walvad",	"Waysewadi",	"Yeswadi"
        ],
            "Jamkhed": ["Aghi",	"Anandwadi",	"Apti",	"Arangaon",	"Balgavhan",	"Bandhkhadak",	"Batewadi",	"Bavi",	"Bhavarwadi",	"Bhutvada",	"Borle",	"Chobhewadi",	"Chondhi",	"Chumbhali",	"Daradwadi",	"Daundachiwadi",	"Deodaithan",	"Dhamangaon",	"Dhanegaon",	"Dhanora",	"Dhond Pargaon",	"Dhotri",	"Dighol",	"Disalewadi",	"Dolewadi",	"Dongaon",	"Fakrabad",	"Ghodegaon",	"Girwali",	"Gurwadi",	"Halgaon",	"Hasnabad",	"Jaibhaywadi",	"Jamadarwadi",	"Jambwadi",	"Jategaon",	"Jawala",	"Jawalke",	"Katewadi",	"Kaudgaon",	"Khamgaon",	"Khandvi",	"Kharda",	"Khurdaithan",	"Kolhewadi",	"Kusadgaon",	"Lehnewadi",	"Loni",	"Maharuli",	"Malewadi",	"Matewadi",	"Moha",	"Mohari",	"Mungewadi",	"Munjewadi",	"Nagobawadi",	"Nahuli",	"Naigaon",	"Nannaj",	"Padali",	"Pandharewadi",	"Parewadi",	"Patoda",	"Pimpalgaon Alwa",	"Pimpalgaon Unda",	"Pimpalwadi",	"Pimparkhed",	"Potewadi",	"Rajewadi",	"Rajuri",	"Ratnapur",	"Sakat",	"Sangvi",	"Saradwadi",	"Sarola",	"Satephal",	"Savargaon",	"Shiur",	"Sonegaon",	"Taradgaon",	"Telangashi",	"Vanjarwadi",	"Vanjarwadi",	"Wagha",	"Waki",	"Zikri"
        ] 
        },
        "Akola": {
            "Akot": ["Town10", "Town11", "Town12"],
            "Balapur": ["Town13", "Town14", "Town15"],
            "Murtijapur": ["Town16", "Town17", "Town18"],
            "Telhara": ["Town16", "Town17", "Town18"],
            "Barshitakli": ["Town16", "Town17", "Town18"],
            "Patur": ["Town16", "Town17", "Town18"]
        },
        "Ahmedabad": {
            "Ahmadabad City": ["Town19", "Town20", "Town21"],
            "Daskroi": ["Town22", "Town23", "Town24"],
            "Dholka": ["Town25", "Town26", "Town27"],
            "Sanand": ["Town25", "Town26", "Town27"],
            "Viramgam": ["Town25", "Town26", "Town27"],
            "Bavla": ["Town25", "Town26", "Town27"],
            "Dhandhuka": ["Town25", "Town26", "Town27"],
            "Ranpur": ["Town25", "Town26", "Town27"],
            "Detroj-Rampura": ["Town25", "Town26", "Town27"],
            "Barwala": ["Town25", "Town26", "Town27"],
            "Mandal": ["Town25", "Town26", "Town27"]
        },
        "sambhajinagar": {
            "sambhajinagar": ["Town28", "Town29", "Town30"],
            "Sillod": ["Town31", "Town32", "Town33"],
            "Gangapur": ["Town34", "Town35", "Town36"],
            "Paithan": ["Town34", "Town35", "Town36"],
            "Kannad": ["Town34", "Town35", "Town36"],
            "Vaijapur": ["Town34", "Town35", "Town36"],
            "Phulambri": ["Town34", "Town35", "Town36"],
            "Khuldabad": ["Town34", "Town35", "Town36"],
            "Gangapur": ["Town34", "Town35", "Town36"],
            "Soegaon": ["Town34", "Town35", "Town36"]
        },
        "Beed": {
            "Bid": ["Town28", "Town29", "Town30"],
            "Georai": ["Town28", "Town29", "Town30"],
            "Parli": ["Town28", "Town29", "Town30"],
            "Ambejogai": ["Town28", "Town29", "Town30"],
            "Manjlegaon": ["Town28", "Town29", "Town30"],
            "Kaij": ["Town28", "Town29", "Town30"],
            "Ashti": ["Town28", "Town29", "Town30"],
            "Shirur (Kasar)": ["Town28", "Town29", "Town30"],
            "Patoda": ["Town28", "Town29", "Town30"],
            "Dharur": ["Town28", "Town29", "Town30"],
            "Wadwani": ["Town28", "Town29", "Town30"]
        },
        "Bhandara": {
            "Bhandara": ["Town28", "Town29", "Town30"],
            "Tumsar": ["Town31", "Town32", "Town33"],
            "Pauni": ["Town34", "Town35", "Town36"],
            "Mohadi": ["Town34", "Town35", "Town36"],
            "Sakoli": ["Town34", "Town35", "Town36"],
            "Lakhani": ["Town34", "Town35", "Town36"],
            "Lakhandur": ["Town34", "Town35", "Town36"]
        },
        "Buldhana": {
            "Khamgaon": ["Town28", "Town29", "Town30"],
            "Buldana": ["Town31", "Town32", "Town33"],
            "Chikhli": ["Town34", "Town35", "Town36"],
            "Mehkar": ["Town34", "Town35", "Town36"],
            "Malkapur": ["Town34", "Town35", "Town36"],
            "Sindkhed Raja": ["Town34", "Town35", "Town36"],
            "Nandura": ["Town34", "Town35", "Town36"],
            "Motala": ["Town34", "Town35", "Town36"],
            "Jalgaon (Jamod)": ["Town34", "Town35", "Town36"],
            "Shegaon": ["Town34", "Town35", "Town36"],
            "Lonar": ["Town34", "Town35", "Town36"],
            "Sangrampur": ["Town34", "Town35", "Town36"],
            "Deolgaon Raja": ["Town34", "Town35", "Town36"]
        },
        "Chandrapur": {
            "Chandrapur": ["Town28", "Town29", "Town30"],
            "Varachha": ["Town31", "Town32", "Town33"],
            "Chimur": ["Town31", "Town32", "Town33"],
            "Brahmapuri": ["Town31", "Town32", "Town33"],
            "Bhadravati": ["Town31", "Town32", "Town33"],
            "Rajura": ["Town31", "Town32", "Town33"],
            "Ballarpur": ["Town31", "Town32", "Town33"],
            "Nagbhir": ["Town31", "Town32", "Town33"],
            "Korpana": ["Town31", "Town32", "Town33"],
            "Mul": ["Town31", "Town32", "Town33"],
            "Sindewahi": ["Town31", "Town32", "Town33"],
            "Sawali": ["Town31", "Town32", "Town33"],
            "Gondpipri": ["Town31", "Town32", "Town33"],
            "Jiwati": ["Town31", "Town32", "Town33"],
            "Pombhurna": ["Town34", "Town35", "Town36"]
        },
        "Dhule": {
            "Dhule": ["Town28", "Town29", "Town30"],
            "Sakri": ["Town31", "Town32", "Town33"],
            "Shirpur": ["Town34", "Town35", "Town36"],
            "Sindkhede": ["Town34", "Town35", "Town36"]
        },
        "Gadchiroli": {
            "Chamorshi": ["Town28", "Town29", "Town30"],
            "Gadchiroli": ["Town31", "Town32", "Town33"],
            "Aheri": ["Town31", "Town32", "Town33"],
            "Armori": ["Town31", "Town32", "Town33"],
            "Kurkheda": ["Town31", "Town32", "Town33"],
            "Desaiganj (Vadasa)": ["Town31", "Town32", "Town33"],
            "Dhanora": ["Town31", "Town32", "Town33"],
            "Etapalli": ["Town31", "Town32", "Town33"],
            "Sironcha": ["Town31", "Town32", "Town33"],
            "Mulchera": ["Town31", "Town32", "Town33"],
            "Korchi": ["Town31", "Town32", "Town33"],
            "Bhamragad": ["Town31", "Town32", "Town33"]
        },
        "Gondia": {
            "Gondiya":	["Town28", "Town29", "Town30"],	
            "Tirora":	["Town28", "Town29", "Town30"],	
            "Arjuni Morgaon":["Town28", "Town29", "Town30"],	
            "Amgaon":["Town28", "Town29", "Town30"],	
            "Goregaon":	["Town28", "Town29", "Town30"],	
            "Sadak-Arjuni":["Town28", "Town29", "Town30"],		
            "Deori":["Town28", "Town29", "Town30"],	
            "Salekasa":["Town28", "Town29", "Town30"]		
            
        },
        "Hingoli": {
            "Hingoli": ["Ambala","Ambheri",	"Amla",	"Andharwadi",	"Atharwadi",	"Balsond",	"Basamba",	"Belura",	"Belwadi",	"Bhandegaon",	"Bhatsawangi",	"Bhatsawangi Tanda",	"Bhingi",	"Bhirda",	"Bhogaon",	"Bodkhi",	"Bondala","Borala",	"Boralwadi",	"Bori Shikari",	"Borja",	"Bramhapuri",	"Chikhalwadi",	"Chinchala",	"Chincholi",	"Chinchpuri",	"Chorjawala",	"Dategaon",	"Deulgaon Rama",	"Devthana",	"Dhanapur",	"Dhotarwadi",	"Dhotra",	"Digras K.",	"Digraswani",	"Durgasawangi",	"Durgdhamni",	"Ekamba",	"Gadibori",	"Ghota",	"Giroli",	"Hanwatkheda",	"Hingni",	"Hiradi",	"Hiwara Bel",	"Idoli",	"Incha",	"Isapur",	"Jaipurwadi",	"Jambharun Andhwadi",	"Jamrun andh",	"Jamrun jahagir",	"Jamthi Kh.",	"Jamwadi",	"Jodtala",	"Kadti",	"Kalamkonda Bk.",	"Kalburga",	"Kalgaon",	"Kalkondi",	"Kanadkheda Bk.",	"Kanadkheda Kh.",	"Kanhergaon naka",	"Kanka",	"Kapurkheda",	"Karanjala",	"Karwadi",	"Kesapur",	"Khadkad Bk",	"Khambala",	"Khanapur",	"Khanapur Chi.",	"Khandala",	"Kharbi", "Khed", "Kherda", "Kherdawadi", "Kothalaj", "Koyali",	"Lasina", "Limbala makta","Limbala pr.washim",	"Limbi", "Lohagaon",	"Lohra",	"Maldhamni","Malhiwara", "Malselu",	"Malwadi",	"Mauja",	"Mop",	"Nandura",	"Nandusa",	"Narsi",	"Navalgavhan",	"Nawkha",	"Paheni",	"Palsona",	"Pangri",	"Parda", "Parola", "Patan", "Patonda",	"Pedgaon",	"Pedgaonwadi", "Phalegaon", "Pimpaldari Tarf Basamba",	"Pimparkhed",	"Pimplekhuta", "Raholi Bk.",	"Raholi Kh.",	"Rajura",	"Sagad",	"Samga", "Sandas Tarf Basamba", "Santuk pimpari", "Sarkali", "Sasewadi", "Satamba", "Sawa",	"Sawad", "Sawar kheda",	"Sawargaon", "Sayala", "Sirsam Bk.",	"Sirsam Kh",	"Takli Tarf Nandapur",	"Tikhadi",	"Umarkhoja", "Umra",	"Vaijapur",	"Wadad",	"Wadhona pr. washim",	"Wanjarwadi",	"Wanzola",	"Waradi",	"Warud Gawali",	"Yehlegaon Hatkar",	"Yeli",],
            "Kalamnuri":["Town28", "Town29", "Town30"],
            "Sengaon":	["Town28", "Town29", "Town30"],
            "Aundha (Nagnath)":	["Town28", "Town29", "Town30"]
        },
        "Jalgaon":{
            "Jalgaon": ["Jalgaon",	"Amode Kh",	"Asoda",	"Avhane",	"Awar",	"Beli",	"Bhadli Bk",	"Bhadli Kh",	"Bhagpur",	"Bhokar",	"Bholane",	"Bilkhede",	"Bilwadi",	"Bornar",	"Chincholi",	"Dapore",	"Deogoan",	"Deulwade",	"Devhari",	"Dhamangaon",	"Dhanore Bk.",	"Dhanore Kh",	"Dhanwad",	"Diksai",	"Domgaon",	"Fesardi",	"Fupanagari",	"Gadhode",	"Ghardi",	"Jalgaon Kh.",	"Jalke",	"Jamod",	"Jawkhede",	"Kadgaon",	"Kanalde",	"Kanaswade",	"Kandari",	"Karanj",	"Kathore",	"Khaparkhede",	"Khedi Kh",	"Khirdi",	"Kinod",	"Kurhadade",	"Kusumbe Kh",	"KuwarKhede",	"Lamanjan P.Bornar",	"Lonwadi Bk",	"Lonwadi Kh",	"Mamurabad",	"Manyar Khede",	"Mhasawad",	"Mohadi",	"Nagziri",	"Nandgaon",	"Nandre Bk",	"Nandre Kh",	"Nashirabad",	"Nimgaon Bk",	"Palsod",	"Pathari",	"Phupani",	"Pilkhede",	"Raipur",	"Ramdeowadi",	"Ridhur",	"Savkhede Bk.",	"Savkhede Kh.",	"Shelgaon",	"Shirsoli P.B.",	"Shirsoli P.N.",	"Subhashwadi",	"Sujde",	"Tarsod",	"Tighre",	"Turkhede",	"Umale",	"Vadali",	"Vadnagari",	"Varad Bk.",	"Varad Kh.",	"Vasantwadi",	"Vidgaon",	"Vitner",	"Wakadi",	"Wavdade",	"Nimgoan Bhojapur",	"Nimgoan Bk",	"Nimgoan Kd",	"Nimgaon Tembhi",	"Nimgoanjali",	"Nimon",	"Nannaj Dumala",	"Ozer BK",	"Ozer Kd",	"Palaskhede",	"Panodi",	"Paregaon Bk",	"Paregoan Kd",	"Pemgiri",	"Pimpalgaon konzira",	"Pimpalgaon Matha",	"Pimpalgoan Depa",	"Pimpalgaon Khand",	"Pimparne",	"Pimple",	"Pimpri louki Azampur",	"Pokhari Baleshwar",	"Pokhari Haveli",	"Pratappur",	"Rahimpur(Mal)",	"Rahimpur(Khale Gaon)",	"Rajapur",	"Rankhambwadi",	"Rayate",	"Rayatewadi",	"Sadatpur",	"Sakur",	"Samnapur",	"Sangamner Kd",	"Sangvi",	"Sarole Pathar",	"Sawarchol",	"Sawargoan Ghule",	"Sawargoan Tal",	"Saykhindi",	"Shedgoan",	"Shiblapur",	"Shindodi",	"Shirapur",	"Shirasgoan Dhupe",	"Shindewadi",	"Sukewadi",	"Talegoan",	"Tisgoan",	"Tigoan",	"Umbri Balapur",	"Velhale",	"Vadzari",	"Wadgoan Landga",	"Wadgoanpan",	"Wadzari Bk",	"Wadzari Kd",	"Waghapur",	"Wankute",	"Warudi Pathar",	"Warvandi",	"Wadzari Bk",	"Wadgavpan",	"Zarekati",	"Zole",
        ],
            "Chalisgaon": ["Town31", "Town32", "Town33"],
            "Bhusawal": ["Town34", "Town35", "Town36"],
            "Jamner": ["Town34", "Town35", "Town36"],
            "Chopda": ["Town34", "Town35", "Town36"],
            "Raver": ["Town34", "Town35", "Town36"],
            "Pachora": ["Town34", "Town35", "Town36"],
            "Amalner": ["Town34", "Town35", "Town36"],
            "Yawal": ["Town34", "Town35", "Town36"],
            "Parola": ["Town34", "Town35", "Town36"],
            "Dharangaon": ["Town34", "Town35", "Town36"],
            "Erandol": ["Town34", "Town35", "Town36"],
            "Muktainagar": ["Town34", "Town35", "Town36"],
            "Bhadgaon": ["Town34", "Town35", "Town36"],
            "Bodvad": ["Town34", "Town35", "Town36"]
        },
        "Jalna":{
            "Jalna": ["Town28", "Town29", "Town30"],
            "Bhokardan": ["Town31", "Town32", "Town33"],
            "Ambad": ["Town34", "Town35", "Town36"],
            "Ghansawangi": ["Town34", "Town35", "Town36"],
            "Partur": ["Town34", "Town35", "Town36"],
            "Mantha": ["Town34", "Town35", "Town36"],
            "Jafferabad": ["Town34", "Town35", "Town36"],
            "Badnapur": ["Town34", "Town35", "Town36"]
        },
        "Kolhapur":{
            "Hatkanangle": ["Town34", "Town35", "Town36"],
            "Shirol": ["Town34", "Town35", "Town36"],
            "Kagal": ["Town34", "Town35", "Town36"],
            "Panhala": ["Town34", "Town35", "Town36"],
            "Gadhinglaj": ["Town34", "Town35", "Town36"],
            "Radhanagari": ["Town34", "Town35", "Town36"],
            "Chandgad": ["Town34", "Town35", "Town36"],
            "Shahuwadi": ["Town34", "Town35", "Town36"],
            "Bhudargad": ["Town34", "Town35", "Town36"],
            "Ajra": ["Town34", "Town35", "Town36"],
            "Bavda": ["Town34", "Town35", "Town36"]
},
        "Latur": {
            "Latur": ["Town28", "Town29", "Town30"],
            "Nilanga": ["Town31", "Town32", "Town33"],
            "Udgir": ["Town34", "Town35", "Town36"],
            "Ausa": ["Town34", "Town35", "Town36"],
            "Ahmadpur": ["Town34", "Town35", "Town36"],
            "Chakur": ["Town34", "Town35", "Town36"],
            "Renapur": ["Town34", "Town35", "Town36"],
            "Deoni": ["Town34", "Town35", "Town36"],
            "Jalkot": ["Town34", "Town35", "Town36"],
            "Shirur-Anantpal": ["Town34", "Town35", "Town36"]   
        },
        "Mumbai City": {
            "Mumbai": ["Town28", "Town29", "Town30"],
        },
       
        "Nagpur": {
            "Nagpur (Rural)": ["Town34", "Town35", "Town36"],
"Hingna": ["Town34", "Town35", "Town36"],
"Kamptee": ["Town34", "Town35", "Town36"],
"Savner": ["Town34", "Town35", "Town36"],
"Katol": ["Town34", "Town35", "Town36"],
"Ramtek": ["Town34", "Town35", "Town36"],
"Umred": ["Town34", "Town35", "Town36"],
"Narkhed": ["Town34", "Town35", "Town36"],
"Parseoni": ["Town34", "Town35", "Town36"],
"Mauda": ["Town34", "Town35", "Town36"],
"Kuhi": ["Town34", "Town35", "Town36"],
"Kalameshwar": ["Town34", "Town35", "Town36"],
"Bhiwapur": ["Town34", "Town35", "Town36"]

        },
        "Nanded": {
            "Nanded": ["Town34", "Town35", "Town36"],
"Mukhed": ["Town34", "Town35", "Town36"],
"Hadgaon": ["Town34", "Town35", "Town36"],
"Kandhar": ["Town34", "Town35", "Town36"],
"Kinwat": ["Town34", "Town35", "Town36"],
"Loha": ["Town34", "Town35", "Town36"],
"Deglur": ["Town34", "Town35", "Town36"],
"Naigaon (Khairgaon)": ["Town34", "Town35", "Town36"],
"Biloli": ["Town34", "Town35", "Town36"],
"Bhokar": ["Town34", "Town35", "Town36"],
"Mudkhed": ["Town34", "Town35", "Town36"],
"Himayatnagar": ["Town34", "Town35", "Town36"],
"Ardhapur": ["Town34", "Town35", "Town36"],
"Mahoor": ["Town34", "Town35", "Town36"],
"Umri": ["Town34", "Town35", "Town36"],
"Dharmabad": ["Town34", "Town35", "Town36"]

        },
        "Nandurbar": {
            "Shahade": ["Town28", "Town29", "Town30"],
            "Nandurbar": ["Town31", "Town32", "Town33"],
            "Nawapur": ["Town34", "Town35", "Town36"],
            "Akkalkuwa": ["Town34", "Town35", "Town36"],
            "Akrani": ["Town34", "Town35", "Town36"],
            "Talode": ["Town34", "Town35", "Town36"]
        },
        "Nashik": {
            "Nashik": [],
            "Malegaon": ["Town31", "Town32", "Town33"],
            "Niphad": ["Town34", "Town35", "Town36"],
            "Baglan": ["Town34", "Town35", "Town36"],
            "Sinnar": ["Town34", "Town35", "Town36"],
            "Dindori": ["Town34", "Town35", "Town36"],
            "Nandgaon": ["Town34", "Town35", "Town36"],
            "Yevla": ["Town34", "Town35", "Town36"],
            "Igatpuri": ["Town34", "Town35", "Town36"],
            "Chandvad": ["Town34", "Town35", "Town36"],
            "Kalwan": ["Town34", "Town35", "Town36"],
            "Surgana": ["Town34", "Town35", "Town36"],
            "Trimbakeshwar": ["Town34", "Town35", "Town36"],
            "Deola": ["Town34", "Town35", "Town36"],
            "Peint": ["Town34", "Town35", "Town36"]
        },
        "Dharashiv": {
            "Osmanabad": ["Town28", "Town29", "Town30"],
            "Tuljapur": ["Town31", "Town32", "Town33"],
            "Umarga": ["Town34", "Town35", "Town36"],
            "Kalamb": ["Town34", "Town35", "Town36"],
            "Paranda": ["Town34", "Town35", "Town36"],
            "Bhum": ["Town34", "Town35", "Town36"],
            "Lohara": ["Town34", "Town35", "Town36"],
            "Washi": ["Town34", "Town35", "Town36"]
        },

        "Parbhani": {
            "Parbhani": ["Town28", "Town29", "Town30"],
            "Jintur": ["Town31", "Town32", "Town33"],
            "Gangakhed": ["Town34", "Town35", "Town36"],
            "Purna": ["Town34", "Town35", "Town36"],
            "Sailu": ["Town34", "Town35", "Town36"],
            "Pathri": ["Town34", "Town35", "Town36"],
            "Manwath": ["Town34", "Town35", "Town36"],
            "Palam": ["Town34", "Town35", "Town36"],
            "Sonpeth": ["Town34", "Town35", "Town36"]
            
        },
        "Pune": {
            "Pune City": ["Town28", "Town29", "Town30"],
            "Haveli": ["Town31", "Town32", "Town33"],
            "Khed": ["Town34", "Town35", "Town36"],
            "Baramati": ["Town34", "Town35", "Town36"],
            "Junnar": ["Town34", "Town35", "Town36"],
            "Shirur": ["Town34", "Town35", "Town36"],
            "Indapur": ["Town34", "Town35", "Town36"],
            "Daund": ["Town34", "Town35", "Town36"],
            "Mawal": ["Town34", "Town35", "Town36"],
            "Ambegaon": ["Town34", "Town35", "Town36"],
            "Purandhar": ["Town34", "Town35", "Town36"],
            "Bhor": ["Town34", "Town35", "Town36"],
            "Mulshi": ["Town34", "Town35", "Town36"],
            "Velhe": ["Town34", "Town35", "Town36"]
        },
        "Raigad": {
            "Panvel": ["Town28", "Town29", "Town30"],
            "Alibag": ["Town31", "Town32", "Town33"],
            "Karjat": ["Town34", "Town35", "Town36"],
            "Khalapur": ["Town34", "Town35", "Town36"],
            "Pen": ["Town34", "Town35", "Town36"],
            "Mahad": ["Town34", "Town35", "Town36"],
            "Roha": ["Town34", "Town35", "Town36"],
            "Uran": ["Town34", "Town35", "Town36"],
            "Mangaon": ["Town34", "Town35", "Town36"],
            "Shrivardhan": ["Town34", "Town35", "Town36"],
            "Murud": ["Town34", "Town35", "Town36"],
            "Sudhagad": ["Town34", "Town35", "Town36"],
            "Mhasla": ["Town34", "Town35", "Town36"],
            "Poladpur": ["Town34", "Town35", "Town36"],
            "Tala": ["Town34", "Town35", "Town36"]
        },
        "Ratnagiri": {
            "Ratnagiri": ["Town28", "Town29", "Town30"],
            "Chiplun": ["Town31", "Town32", "Town33"],
            "Sangameshwar": ["Town34", "Town35", "Town36"],
            "Khed": ["Town34", "Town35", "Town36"],
            "Dapoli": ["Town34", "Town35", "Town36"],
            "Rajapur": ["Town34", "Town35", "Town36"],
            "Guhagar": ["Town34", "Town35", "Town36"],
            "Lanja": ["Town34", "Town35", "Town36"],
            "Mandangad": ["Town34", "Town35", "Town36"],
            "Sangameshwar": ["Town34", "Town35", "Town36"],
            "Sangameshwar": ["Town34", "Town35", "Town36"]
        },
        "Sangli":{
            "Miraj": ["Town34", "Town35", "Town36"],
            "Walwa": ["Town34", "Town35", "Town36"],
            "Jat": ["Town34", "Town35", "Town36"],
            "Tasgaon": ["Town34", "Town35", "Town36"],
            "Khanapur (Vita)": ["Town34", "Town35", "Town36"],
            "Palus": ["Town34", "Town35", "Town36"],
            "Shirala": ["Town34", "Town35", "Town36"],
            "Kavathemahankal": ["Town34","Town35","Town36"],
            "Kadegaon": ["Town34", "Town35", "Town36"],
            "Atpadi": ["Town34", "Town35", "Town36"]     
         },
        "Satara":{
            "Karad": ["Town28", "Town29", "Town30"],
            "Satara": ["Town31", "Town32", "Town33"],
            "Phaltan": ["Town34", "Town35", "Town36"],
            "Patan": ["Town34", "Town35", "Town36"],
            "Khatav": ["Town34", "Town35", "Town36"],
            "Koregaon": ["Town34", "Town35", "Town36"],
            "Man": ["Town34", "Town35", "Town36"],
            "wai": ["Town34", "Town35", "Town36"],
            "Khandala": ["Town34", "Town35", "Town36"],
            "Jaoli": ["Town34", "Town35", "Town36"],
            "Mahabaleshwar": ["Town34", "Town35", "Town36"]
        },
        "Sindhudurg":{
            "Kudal": ["Town28", "Town29", "Town30"],
            "Sawantwadi": ["Town31", "Town32", "Town33"],
            "Kankavli": ["Town34", "Town35", "Town36"],
            "Devgad": ["Town34", "Town35", "Town36"],
            "Malwan": ["Town34", "Town35", "Town36"],
            "Vengurla": ["Town34", "Town35", "Town36"],
            "Dodamarg": ["Town34", "Town35", "Town36"],
            "Vaibhavvadi": ["Town34", "Town35", "Town36"]
            
        },
        "Solapur":{
            "Solapur North": ["Town28", "Town29", "Town30"],
            "Malshiras": ["Town31", "Town32", "Town33"],
            "Pandharpur": ["Town34", "Town35", "Town36"],
            "Barshi": ["Town34", "Town35", "Town36"],
            "Madha": ["Town34", "Town35", "Town36"],
            "Sangole": ["Town34", "Town35", "Town36"],
            "Akkalkot": ["Town34", "Town35", "Town36"],
            "Mohol": ["Town34", "Town35", "Town36"],
            "Solapur South": ["Town34", "Town35", "Town36"],
            "Karmala": ["Town34", "Town35", "Town36"],
            "Mangalvedhe": ["Town34", "Town35", "Town36"]
            
        },
        "Thane":{
            "Thane": ["Town34", "Town35", "Town36"],
"Kalyan": ["Town34", "Town35", "Town36"],
"Vasai": ["Town34", "Town35", "Town36"],
"Bhiwandi": ["Town34", "Town35", "Town36"],
"Ambarnath": ["Town34", "Town35", "Town36"],
"Palghar": ["Town34", "Town35", "Town36"],
"Ulhasnagar": ["Town34", "Town35", "Town36"],
"Dahanu": ["Town34", "Town35", "Town36"],
"Shahapur": ["Town34", "Town35", "Town36"],
"Murbad": ["Town34", "Town35", "Town36"],
"Vada": ["Town34", "Town35", "Town36"],
"Talasari": ["Town34", "Town35", "Town36"],
"Jawhar": ["Town34", "Town35", "Town36"],
"Vikramgad": ["Town34", "Town35", "Town36"],
"Mokhada": ["Town34", "Town35", "Town36"] 
        },
        "Wardha": {
            "Wardha": ["Town34", "Town35", "Town36"],
            "Hinganghat": ["Town34", "Town35", "Town36"],
            "Deoli": ["Town34", "Town35", "Town36"],
            "Arvi": ["Town34", "Town35", "Town36"],
            "Seloo": ["Town34", "Town35", "Town36"],
            "Samudrapur": ["Town34", "Town35", "Town36"],
            "Karanja": ["Town34", "Town35", "Town36"],
            "Ashti": ["Town34", "Town35", "Town36"]
            
        },
        "Washim": {
            "Washim": ["Town34", "Town35", "Town36"],
"Karanja": ["Town34", "Town35", "Town36"],
"Risod": ["Town34", "Town35", "Town36"],
"Malegaon": ["Town34", "Town35", "Town36"],
"Mangrulpir": ["Town34", "Town35", "Town36"],
"Manora": ["Town34", "Town35", "Town36"]
        },
        "Yavatmal": {
            "Yavatmal": ["Town34", "Town35", "Town36"],
            "Pusad": ["Town34", "Town35", "Town36"],
            "Umarkhed": ["Town34", "Town35", "Town36"],
            "Wani": ["Town34", "Town35", "Town36"],
            "Darwha": ["Town34", "Town35", "Town36"],
            "Mahagaon": ["Town34", "Town35", "Town36"],
            "Arni": ["Town34", "Town35", "Town36"],
            "Kelapur": ["Town34", "Town35", "Town36"],
            "Digras": ["Town34", "Town35", "Town36"],
            "Ghatanji": ["Town34", "Town35", "Town36"],
            "Ner": ["Town34", "Town35", "Town36"],
            "Ralegaon": ["Town34", "Town35", "Town36"],
            "Kalamb": ["Town34", "Town35", "Town36"],
            "Babulgaon": ["Town34", "Town35", "Town36"],
            "Zari-Jamani": ["Town34", "Town35", "Town36"],
            "Maregaon": ["Town34", "Town35", "Town36"]         
        }
    }
};

// Function to populate dropdown options based on selected parent dropdown
function populateDropdown(parentDropdown, childDropdown) {
    const parentValue = parentDropdown.value;
    childDropdown.innerHTML = "<option value=''>Select " + childDropdown.id.charAt(0).toUpperCase() + childDropdown.id.slice(1) + "</option>";
    if (parentValue !== "") {
        const options = data[parentDropdown.value];
        if (options !== undefined) {
            for (const key in options) {
                const option = document.createElement("option");
                option.value = key;
                option.text = key;
                childDropdown.appendChild(option);
            }
        }
        else {
            const state = document.getElementById("stateDropdown").value;
            const options = data[state][parentDropdown.value];
            for (const key in options) {
                const option = document.createElement("option");
                option.value = key;
                option.text = key;
                childDropdown.appendChild(option);
            }
        }

    }
}

// Function to populate towns based on selected taluka
function populateTowns() {
    const state = document.getElementById("stateDropdown").value;
    const district = document.getElementById("districtDropdown").value;
    const taluka = document.getElementById("talukaDropdown").value;
    const towns = document.getElementById("townDropdown");
    towns.innerHTML = "<option value=''>Select Town</option>";
    if (state !== "" && district !== "" && taluka !== "") {
        const townList = data[state][district][taluka];
        for (const town of townList) {
            const option = document.createElement("option");
            option.value = town;
            option.text = town;
            towns.appendChild(option);
        }
    }
}

// Populate state dropdown initially
const stateDropdown = document.getElementById("stateDropdown");
for (const state in data) {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateDropdown.appendChild(option);
}

// Event listeners for state, district, and taluka dropdowns
stateDropdown.addEventListener("change", function () {
    populateDropdown(this, document.getElementById("districtDropdown"));
    document.getElementById("talukaDropdown").innerHTML = "<option value=''>Select District First</option>"; // Reset taluka dropdown
    // document.getElementById("townDropdown").innerHTML = "<option value=''>Select Town</option>"; // Reset town dropdown
});

document.getElementById("districtDropdown").addEventListener("change", function () {
    populateDropdown(this, document.getElementById("talukaDropdown"));
    document.getElementById("townDropdown").innerHTML = "<option value=''>Select Taluka First</option>"; // Reset town dropdown
});

document.getElementById("talukaDropdown").addEventListener("change", populateTowns);


// form validation
const form = document.getElementById("registration-form")

async function formDataValidation(event) {
    event.preventDefault()

    const inputs = document.querySelectorAll("input,select")

    let userObj = {

    }

    inputs.forEach((input) => {
        if (input.value !== "") {
            console.log(input.name);
            userObj[input.name] = input.value
        }
    })

    if (validateNumber && validationPass && validateEmail) {
        console.log(userObj);
        await $.ajax({
            type: 'POST',
            url: '/sendOtp', // Update the URL with your server endpoint
            data: userObj,
            success: function (response) {
                // Handle success response
                sessionStorage.setItem("signupObj", JSON.stringify(response.userData))
                window.location.href = "/otpform"
            },
            error: function (xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }
}

function validateEmail() {
    let mail = document.getElementById("email");
    let flag = true
    if (mail.value.length) {
        if (!mail.value.includes("@gmail.com")) {
            let validMail = document.getElementById("validMail")
            validMail.classList = "text-danger"
            flag = false
        }
        else {
            let validMail = document.getElementById("validMail")
            validMail.classList = "text-danger d-none"
            flag = true
        }
    }
    else {
        let validMail = document.getElementById("validMail")
        validMail.classList = "text-danger d-none"
        flag = false
    }
    return flag
}

function validateNumber() {
    let number = document.getElementById("tel");
    let flag = true
    if (number.value.length) {
        if (number.value.length < 10 || number.value.length > 10) {
            let error = document.getElementById("validNum")
            error.classList = "text-danger"
            flag = false
        }
        else {
            let error = document.getElementById("validNum")
            error.classList = "text-danger d-none"
            flag = true
        }
    }
    else {
        let error = document.getElementById("validNum")
        error.classList = "text-danger d-none"
        flag = false
    }
    return flag
}

function validationPass() {
    let pass = document.getElementById("pass")
    let passc = document.getElementById("pass2")
    // console.log(pass.value === passc.value, pass.value, passc.value, pass.value.length);
    let flag = true

    if (pass.value.length < 8) {
        let errors = document.getElementById("errorL")
        errors.classList = "error text-danger"
        errors.style.display = "block"
        flag = false
    }
    if (pass.value.length >= 8) {
        let errors = document.getElementById("errorL")
        errors.classList = "text-danger d-none"
        errors.style.display = "none"
        flag = true

        if (pass.value !== passc.value) {
            let errors = document.querySelectorAll(".error")
            errors.forEach((err) => {
                err.classList = "error text-danger"
                err.style.display = "block"
            })
            flag = false
        }
        else if (pass.value === passc.value) {
            let errors = document.querySelectorAll(".error")
            errors.forEach((err) => {
                err.classList = "error text-danger d-none"
                err.style.display = "none"
            })
            flag = true
        }
    }
    return flag
}

let passInputs = document.querySelectorAll("#pass,#pass2")
passInputs.forEach((inp) => {
    [
        inp.addEventListener("keyup", validationPass)
    ]
})

let number = document.getElementById("tel");
number.addEventListener("keyup", validateNumber)

let mail = document.getElementById("email");
mail.addEventListener("keyup", validateEmail)