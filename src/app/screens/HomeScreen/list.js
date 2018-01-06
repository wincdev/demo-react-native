const list = [
    {
        name: "MUDr. Ján Novák",
        specialization: "Stomatológ - zubný lekár",
        address: {
            street: "Tatranská 25",
            zip: "04011",
            city: "Košice"
        },
        phone: "0907516614",
        mobil: "0907516614",
        web: null
    },
    {
        name: "MUDr. Jozef Adam PhD.",
        specialization: "Gynekológ a pôrodník",
        address: {
            street: "Tatranská 25",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/622 56 06",
        mobil: null,
        web: "www.gpo.sk"
    },
    {
        name: "MUDr. Alena Adamov",
        specialization: "Všeobecný lekár pre dospelých",
        address: {
            street: "Urbánkova 2",
            zip: "04001",
            city: "Košice"
        },
        phone: null,
        mobil: "0915 579 656",
        web: null
    },
    {
        name: "MUDr. Eva Anné",
        specialization: "Radiológ",
        address: {
            street: "Strojárenská 1",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 720 26 11",
        mobil: "0907 089 972",
        web: "usg.infis.net"
    },
    {
        name: "MUDr. Eva Antónyová",
        specialization: "Všeobecný lekár pre deti a dorast",
        address: {
            street: "M.Koneva 1",
            zip: "04022",
            city: "Košice"
        },
        phone: "055 / 671 84 37",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Boleslav Bakalár",
        specialization: "Ortopéd",
        address: {
            street: "Československej armády č. 18 OC TIP-TOP 1.p.",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 6234 094",
        mobil: null,
        web: "www.ortopedia-tip-top.com"
    },
    {
        name: "MUDr. Veronika Becková",
        specialization: "Dermatovenerológ",
        address: {
            street: "Spišské námestie 4",
            zip: "04012",
            city: "Košice"
        },
        phone: "055/6741244",
        mobil: "0907/935321, 0915/484045",
        web: "www.dermaklinik.sk"
    },
    {
        name: "MUDr. Peter Beňo",
        specialization: "Homeopat",
        address: {
            street: "Kuzmányho 43",
            zip: "04001",
            city: "Košice"
        },
        phone: null,
        mobil: "0903 905 787",
        web: "www.biomedicina.sk,"
    },
    {
        name: "MUDr. Beáta Beňová",
        specialization: "Hematológ",
        address: {
            street: "Brigádnicka 2",
            zip: "04011",
            city: "Košice"
        },
        phone: "055/6404276",
        mobil: "cez sms 0907/132 650",
        web: "www.hebea.sk"
    },
    {
        name: "MUDr.Ing. Oto Brandebur",
        specialization: "Chirurg",
        address: {
            street: "Trieda Slovenského národného povstania 1 FNLP Košice",
            zip: "04001",
            city: "Košice"
        },
        phone: null,
        mobil: "0905 635 359",
        web: null
    },
    {
        name: "MUDr. Júlia Brandeburová",
        specialization: "Gastroenterológ",
        address: {
            street: "Maršala Koneva 1",
            zip: "04022",
            city: "Košice"
        },
        phone: "055 / 6712 743",
        mobil: "0908 256 791",
        web: null
    },
    {
        name: "Prim. MUDr. Jaroslava Capová",
        specialization: "Neonatológ",
        address: {
            street: "Trieda Slovenského národného povstania 1",
            zip: "04011",
            city: "Košice"
        },
        phone: "055 / 640 31 41",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Viktória Cápová",
        specialization: "Endokrinológ",
        address: {
            street: "Rastislavova 43",
            zip: "04253",
            city: "Košice"
        },
        phone: "055 / 611 83 26, 055 / 611 83 35",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Jozef Chlebana",
        specialization: "Všeobecný lekár pre dospelých",
        address: {
            street: "Rastislavova 45",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/ 6234156",
        mobil: "0905 810 669",
        web: null
    },
    {
        name: "MUDr. Marta Chlebanová",
        specialization: "Stomatológ - zubný lekár",
        address: {
            street: "Rastislavova 45",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/ 6221562 kl.123",
        mobil: "0907 915 057",
        web: null
    },
    {
        name: "MUDr. Štefan Chromý",
        specialization: "Dermatovenerológ",
        address: {
            street: "Strojárenská 1099/13",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 682 41 33",
        mobil: "0908 359 999",
        web: null
    },
    {
        name: "MUDr. Štefan Cuľba",
        specialization: "Stomatológ - zubný lekár",
        address: {
            street: "Zlatá 15",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/6780938",
        mobil: "0915/961072",
        web: "www.dentalnecentrum.sk"
    },
    {
        name: "MUDr. Radoslava Cuľbová",
        specialization: "Stomatológ - zubný lekár",
        address: {
            street: "Mudroňova 29",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 677 05 61",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Darina Čechová",
        specialization: "Všeobecný lekár pre dospelých",
        address: {
            street: "Gudernova 3",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/6439234",
        mobil: "0904/492 552",
        web: null
    },
    {
        name: "MUDr. Slavomíra Čellárová",
        specialization: "Akupunkturista",
        address: {
            street: "Letná 45",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/632 0417",
        mobil: "0907 178 664",
        web: "www.cellarova.sk"
    },
    {
        name: "MUDr. Slavomíra Čellárová",
        specialization: "Akupunkturista",
        address: {
            street: "Letná 45",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/632 0417",
        mobil: "0907 178 664",
        web: "www.cellarova.sk"
    },
    {
        name: "PhDr. Daniela Čižmárová",
        specialization: "Psychológ",
        address: {
            street: "Tomášikova 8",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 633 60 82, 055 / 796 89 39",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Adriana Čuhová",
        specialization: "Pediater",
        address: {
            street: "Rastislavova 45",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 622 14 97, 055 / 622 1 562 kl.157",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. František Daboczi",
        specialization: "Oftalmológ - očný lekár",
        address: {
            street: "Toryská 1",
            zip: "04011",
            city: "Košice"
        },
        phone: "05552851721",
        mobil: null,
        web: "www.3f.sk"
    },
    {
        name: "Doc. MUDr. Róbert Dankovčík PhD",
        specialization: "Gynekológ a pôrodník",
        address: {
            street: "Masarykova 17 /A",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 622 10 07",
        mobil: "0905 129 129",
        web: "www.fetalecho.sk"
    },
    {
        name: "MUDr. Dana De Furia",
        specialization: "Gynekológ a pôrodník",
        address: {
            street: "Mäsiarska 27",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 611 66 22",
        mobil: null,
        web: null
    },
    {
        name: "MUDr. Yury Demidov",
        specialization: "Stomatológ - zubný lekár",
        address: {
            street: "Baštová 1",
            zip: "04001",
            city: "Košice"
        },
        phone: "055/6258960",
        mobil: "0915/981 483",
        web: null
    },
    {
        name: "MUDr. Jaroslav Demkov",
        specialization: "Gynekológ a pôrodník",
        address: {
            street: "Komenského 37/A",
            zip: "04001",
            city: "Košice"
        },
        phone: "055 / 796 13 42",
        mobil: "0905 524 193",
        web: null
    },
];

export default list;
