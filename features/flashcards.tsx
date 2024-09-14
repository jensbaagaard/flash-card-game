export interface Flashcard {
  "question-title": string;
  "wrong-answers": string[];
  "right-answer": string[];
  id: number;
}

export const flashcards: Flashcard[] = [
  {
    "question-title": "Hvem har ansvaret for, at bilen er i lovlig stand?",
    "wrong-answers": ["Føreren", "Ingen", "Passageren"],
    "right-answer": ["Ejeren eller den registrerede bruger"],
    id: 0,
  },
  {
    "question-title":
      "Hvem har ansvaret for, at bilen er i sikkerhedsmæssig forsvarlig stand?",
    "wrong-answers": ["Ejeren", "Passageren", "Ingen"],
    "right-answer": ["Føreren"],
    id: 1,
  },
  {
    "question-title":
      "Hvilke dele af bilen skal føreren især være opmærksom på, at de fungerer sikkert og efter lovens krav?",
    "wrong-answers": ["Sæder", "Aircondition", "Radio"],
    "right-answer": [
      "Styreapparat, bremser, lygter og lydsignalapparat (hornet)",
    ],
    id: 2,
  },
  {
    "question-title":
      "Hvad skal føreren af et motordrevet køretøj være opmærksom på, for så vidt angår køretøjets afgivelse af støj, og for så vidt angår forhold ved køretøjets motor og køretøjets forureningsbegrænsende udstyr?",
    "wrong-answers": [
      "At køretøjet er i æstetisk god stand",
      "At køretøjet har en god lyd",
      "At køretøjet har en god brændstoføkonomi",
    ],
    "right-answer": ["At køretøjet er i lovlig stand"],
    id: 3,
  },
  {
    "question-title": "Hvordan skal styreapparatet være indrettet?",
    "wrong-answers": [
      "Så bilen kan styres med svær, usikker og langsom manøvrering",
      "Så bilen kun kan styres af en erfaren chauffør",
      "Så bilen kan styres med besvær og fare",
    ],
    "right-answer": ["Så bilen kan styres let, sikkert og hurtigt"],
    id: 4,
  },
  {
    "question-title":
      "Hvad må ikke forekomme på grund af slid i styreapparatet?",
    "wrong-answers": [
      "Mindre slør i styreapparatet som helhed eller i dets enkelte dele",
      "Moderat slør i styreapparatet som helhed eller i dets enkelte dele",
      "Ingen slør i styreapparatet som helhed eller i dets enkelte dele",
    ],
    "right-answer": [
      "Væsentligt slør i styreapparatet som helhed eller i dets enkelte dele",
    ],
    id: 5,
  },
  {
    "question-title":
      "Hvordan skal rattet kunne drejes ved kørsel med lav hastighed?",
    "wrong-answers": [
      "Rattet skal møde stor modstand",
      "Rattet skal møde moderat modstand",
      "Rattet skal møde minimal modstand",
    ],
    "right-answer": [
      "Rattet skal let kunne drejes fra side til side uden at møde uøvet modstand",
    ],
    id: 6,
  },
  {
    "question-title": "Hvad kan mærkbar eller synlig rykning skyldes?",
    "wrong-answers": [
      "Overflod af væske på servobeholderen",
      "Ny eller korrekt funktion af servostyringen",
      "Fejlfri elektrisk servostyringssystem",
    ],
    "right-answer": [
      "Manglende væske på servobeholderen, slidt eller fejl i driften til servostyringen eller fejl i det elektriske servostyringssystem",
    ],
    id: 7,
  },
  {
    "question-title": "Hvad kan være tegn på slør i styreforbindelser?",
    "wrong-answers": [
      "Hjulene følger straks rettets bevægelser",
      "Hjulene følger aldrig rettets bevægelser",
      "Hjulene følger rettets bevægelser med forsinkelse",
    ],
    "right-answer": ["Såfremt hjulene ikke straks følger rettets bevægelser"],
    id: 8,
  },
  {
    "question-title": "Hvornår skal styreapparatet efterses?",
    "wrong-answers": [
      "Hvis der er for meget væske i servosystemet",
      "Hvis der er ingen ratslør",
      "Hvis der er minimal ratslør",
    ],
    "right-answer": [
      "Hvis der er for lidt væske i servosystemet, eller hvis der er væsentligt ratslør",
    ],
    id: 9,
  },
  {
    "question-title":
      "Hvad indikerer det, hvis bremsepedalen pludselig kan trædes længere ned end sædvanligt?",
    "wrong-answers": [
      "Bilen har brug for mere brændstof",
      "Bilen har brug for en olieskift",
      "Bilen har brug for nye dæk",
    ],
    "right-answer": ["Den ene bremseskræds er defekt"],
    id: 10,
  },
  {
    "question-title":
      "Hvad skal man gøre, hvis kontrollampen for ABS-bremsesystemet ikke slukkes kort efter igangsætningen?",
    "wrong-answers": [
      "Ignorere det, da det er normalt",
      "Slukke bilen og tænde den igen",
      "Køre bilen hurtigt for at genstarte systemet",
    ],
    "right-answer": ["Kun kørsel til nærmeste værksted er tilladt"],
    id: 11,
  },
  {
    "question-title":
      "Hvad indikerer skævtrækning af bilen under let opbremsning på vandret vej?",
    "wrong-answers": [
      "Bilen har brug for en hjuljustering",
      "Bilen har brug for nye dæk",
      "Bilen har brug for mere brændstof",
    ],
    "right-answer": [
      "Fejl i bremsesystemet eller fugt eller snavs på bremsebelægningerne",
    ],
    id: 12,
  },
  {
    "question-title":
      "Hvad skal man gøre, hvis der er for lidt bremsevæske i bremsevæskebeholderen?",
    "wrong-answers": [
      "Fortsæt kørsel, da det ikke er en alvorlig situation",
      "Tilføj mere brændstof i bilen",
      "Kør bilen hurtigt for at genopbygge trykket i bremsesystemet",
    ],
    "right-answer": ["Bremser skal umiddelbart efterses"],
    id: 13,
  },
  {
    "question-title":
      "Hvad indikerer det, hvis ESC-systemets kontrollampe lyser konstant?",
    "wrong-answers": [
      "Bilen har brug for en olieskift",
      "Bilen har brug for nye dæk",
      "Bilen har brug for mere brændstof",
    ],
    "right-answer": [
      "Der kan være fejl i ESC-systemet, og bilfabrikantens anvisninger skal følges",
    ],
    id: 14,
  },
  {
    "question-title": "Hvilke lygter og reflekser er påbudt på en bil?",
    "wrong-answers": [
      "Fire lygter med fjernlys, to lygter med baglys, to blinklygter foran og bag på bilen samt én på hver side af bilen",
      "To lygter med nærlys, én lygte med baglys, tre lygter med stoplys, to blinklygter foran og bag på bilen samt én på hver side af bilen",
      "To lygter med fjernlys, to lygter med nærlys, to lygter med positionslys, én lygte med baglys, to lygter med stoplys, mindst én nummerpladelygte, to blinklygter foran og bag på bilen samt én på hver side af bilen",
    ],
    "right-answer": [
      "To lygter med fjernlys, to lygter med nærlys, to lygter med positionslys, to lygter med baglys, tre lygter med stoplys, mindst én nummerpladelygte, to blinklygter foran og bag på bilen samt én på hver side af bilen",
    ],
    id: 15,
  },
  {
    "question-title": "Hvordan skal de bagudvendende reflekser på en bil være?",
    "wrong-answers": [
      "De skal være trekantede",
      "De skal være blå",
      "Der skal være fire af dem",
    ],
    "right-answer": [
      "Der skal være to røde godkendte og mærkede bagudvendende reflekser, og de må ikke være trekantede",
    ],
    id: 16,
  },
  {
    "question-title": "Hvad er kravet til antallet af stoplygter på en bil?",
    "wrong-answers": [
      "Der skal være fire stoplygter",
      "Der skal være to stoplygter",
      "Der skal være én stoplygte",
    ],
    "right-answer": [
      "Der skal være tre lygter med stoplys, men ældre biler kan nøjes med to stoplygter",
    ],
    id: 17,
  },
  {
    "question-title":
      "Hvor langt skal forlygternes fjernlys kunne oplyse vejen foran bilen?",
    "wrong-answers": ["30 m", "300 m"],
    "right-answer": ["100 m"],
    id: 18,
  },
  {
    "question-title": "Hvad skal alle lygter og reflekser på en bil være?",
    "wrong-answers": ["Beskidte og beskadigede", "Halvt ødelagte og snavsede"],
    "right-answer": ["Hele, rene og ubeskadigede"],
    id: 19,
  },
  {
    "question-title": "Hvilken farve skal forlygternes lys være?",
    "wrong-answers": ["Blåt eller grønt", "Rødt eller lilla"],
    "right-answer": ["Hvidt eller gulligt"],
    id: 20,
  },
  {
    "question-title": "Hvordan skal pærer være monteret?",
    "wrong-answers": ["Skævt", "Løst"],
    "right-answer": ["Korrekt"],
    id: 21,
  },
  {
    "question-title": "Hvilken farve skal baglygternes lys være?",
    "wrong-answers": ["Hvidt", "Gult"],
    "right-answer": ["Rødt"],
    id: 22,
  },
  {
    "question-title":
      "Hvad skal biler, der er længere end 6 m, være forsynet med?",
    "wrong-answers": [
      "Røde sidereflekser og sidemarkeringslygter",
      "Ingen ekstra reflekser eller lygter",
    ],
    "right-answer": [
      "Godkendte og mærkede gule sidereflekser og sidemarkeringslygter",
    ],
    id: 23,
  },
  {
    "question-title":
      "Hvad er tegnet på, at en eller flere blinklygter ikke virker?",
    "wrong-answers": [
      "Blinklygterne blinker langsommere end sædvanligt",
      "Blinklygterne skifter farve",
    ],
    "right-answer": [
      "Blinklygterne blinker væsentligt hurtigere end sædvanligt",
    ],
    id: 24,
  },
  {
    "question-title":
      "Hvordan skal alle lygter og reflekser være, og hvad skal de kunne?",
    "wrong-answers": [
      "Beskidte og ikke kunne lyse",
      "Halvt ødelagte og kun nogle skal kunne lyse",
    ],
    "right-answer": ["Hele og rene, og alle lygter skal kunne lyse"],
    id: 25,
  },
  {
    "question-title": "Hvordan skal hornet lyde?",
    "wrong-answers": ["En skiftende tone", "En svag, ustabil tone"],
    "right-answer": ["En klar, konstant tone"],
    id: 26,
  },
  {
    "question-title":
      "Hvad kan utætheder i udstødningssystemet eller kørsel med åben bagklap medføre?",
    "wrong-answers": [
      "Det kan medføre øget brændstofforbrug",
      "Det kan medføre overophedning af motoren",
    ],
    "right-answer": [
      "Det kan medføre, at kulilte, som er lugtfri og farlig selv i små mængder, trænger ind i bilen",
    ],
    id: 27,
  },
  {
    "question-title":
      "Hvad kan for lidt olie på motoren eller for lidt vand i kølesystemet medføre?",
    "wrong-answers": [
      "Det kan medføre øget brændstofforbrug",
      "Det kan medføre kulilteforgiftning",
    ],
    "right-answer": ["Det kan medføre, at motoren beskadiges"],
    id: 28,
  },
  {
    "question-title": "Hvad tyder sort udstødningsrøg på?",
    "wrong-answers": [
      "Det tyder på, at bilen bruger for meget brændstof",
      "Det tyder på, at bilen har en utæt udstødning",
    ],
    "right-answer": [
      "Sort udstødningsrøg tyder på dårlig forbrænding og er tegn på fejl",
    ],
    id: 29,
  },
  {
    "question-title": "Hvad tyder støj i unormalt omfang ved gasgivning på?",
    "wrong-answers": [
      "Det tyder på, at bilen har for lidt olie",
      "Det tyder på, at bilen har en utæt udstødning",
    ],
    "right-answer": [
      "Støj i unormalt omfang ved gasgivning tyder på fejl i udstødningssystemet",
    ],
    id: 30,
  },
  {
    "question-title":
      "Hvad tyder motoropspænding, uden at hastigheden under kørslen forøges, på?",
    "wrong-answers": [
      "Det tyder på, at bilen har for lidt olie",
      "Det tyder på, at bilen har en utæt udstødning",
    ],
    "right-answer": [
      "Motoropspænding, uden at hastigheden under kørslen forøges, tyder på fejl i kobling",
    ],
    id: 31,
  },
  {
    "question-title":
      "Hvad tyder vanskelig gearskiftning med kraftige mislyde på?",
    "wrong-answers": [
      "Det tyder på, at bilen har for lidt olie",
      "Det tyder på, at bilen har en utæt udstødning",
    ],
    "right-answer": [
      "Vanskelig gearskiftning med kraftige mislyde tyder på fejl i gear eller kobling",
    ],
    id: 32,
  },
  {
    "question-title":
      "Hvad tyder langsom bevægelse af bilen i 1. gear, selv om koblingspedalen er trådt i bund, på?",
    "wrong-answers": [
      "Det tyder på, at bilen har for lidt olie",
      "Det tyder på, at bilen har en utæt udstødning",
    ],
    "right-answer": [
      "Langsom bevægelse af bilen i 1. gear, selv om koblingspedalen er trådt i bund, tyder på fejl i koblingen",
    ],
    id: 33,
  },
  {
    "question-title":
      "Hvad skal føreren af et motordrevet køretøj være opmærksom på?",
    "wrong-answers": [
      "Føreren skal være opmærksom på, at køretøjet har nok brændstof",
      "Føreren skal være opmærksom på, at køretøjet har korrekt dæktryk",
    ],
    "right-answer": [
      "Føreren af et motordrevet køretøj skal til enhver tid være opmærksom på, at køretøjet er i lovlig stand, for så vidt angår køretøjets afgivelser af støj, og for så vidt angår forhold ved køretøjets motor og køretøjets forureningsbegrænsende udstyr, der har betydning for det motordrevne køretøjs udledning af luftforurenende stoffer",
    ],
    id: 34,
  },
  {
    "question-title": "Hvornår bør motoren startes?",
    "wrong-answers": [
      "Motoren bør startes, når du stiger ind i bilen",
      "Motoren bør startes, 5 minutter før du skal køre",
    ],
    "right-answer": [
      "Motoren bør først startes, umiddelbart før man skal køre",
    ],
    id: 35,
  },
  {
    "question-title":
      "Hvad bør man undgå for at mindske luft- og støjforurening?",
    "wrong-answers": [
      "Man bør køre med vinduerne åbne",
      "Man bør køre med høj musik",
    ],
    "right-answer": ["Man bør ikke lade motoren gå i tomgang i længere tid"],
    id: 36,
  },
  {
    "question-title": "Hvad har stor betydning for energiforbruget?",
    "wrong-answers": ["Bilens farve", "Antallet af passagerer i bilen"],
    "right-answer": ["Køremåden"],
    id: 37,
  },
  {
    "question-title": "Hvordan kan energiforbruget reduceres ved standsning?",
    "wrong-answers": [
      "Ved at slukke for bilens lys",
      "Ved at sætte bilen i neutral",
    ],
    "right-answer": [
      "Hvis motoren slukkes automatisk i forbindelse med standsning (fx ved rødt lys mv.)",
    ],
    id: 38,
  },
  {
    "question-title": "Hvad forstås ved energirigtig køreteknik?",
    "wrong-answers": [
      "At køre så hurtigt som muligt",
      "At bruge så meget brændstof som muligt",
    ],
    "right-answer": [
      "At man generelt undlader unødvendige og gentagne hastighedsændringer",
    ],
    id: 39,
  },
  {
    "question-title":
      "Hvordan kan energiforbruget reduceres ved hastighedsnedsættelse?",
    "wrong-answers": ["Ved at bremse hårdt", "Ved at skifte til lavere gear"],
    "right-answer": [
      "Ved at slippe speederen helt og så vidt muligt undgå at koble ud",
    ],
    id: 40,
  },
  {
    "question-title": "Hvad forøger energiforbruget?",
    "wrong-answers": ["Kørsel med tom tank", "Kørsel med åbne vinduer"],
    "right-answer": ["Kørsel med unødig vægt i bilen"],
    id: 41,
  },
  {
    "question-title": "Hvordan påvirker dæktrykket energiforbruget?",
    "wrong-answers": [
      "Ved kørsel med for højt dæktryk stiger energiforbruget",
      "Dæktrykket har ingen indflydelse på energiforbruget",
    ],
    "right-answer": ["Ved kørsel med for lavt dæktryk stiger energiforbruget"],
    id: 42,
  },
  {
    "question-title":
      "Hvordan påvirker brugen af aircondition eller klimaanlæg energiforbruget?",
    "wrong-answers": [
      "Brugen af aircondition eller klimaanlæg reducerer energiforbruget",
      "Brugen af aircondition eller klimaanlæg har ingen indflydelse på energiforbruget",
    ],
    "right-answer": [
      "Ved kørsel med tændt aircondition eller klimaanlæg og andet elforbrugende udstyr stiger energiforbruget",
    ],
    id: 43,
  },
  {
    "question-title": "Hvordan kan energiforbruget reduceres?",
    "wrong-answers": [
      "Ved at køre med høj hastighed",
      "Ved at køre med kraftige accelerationer",
    ],
    "right-answer": ["Hvis man undgår korte og unødvendige køreture"],
    id: 44,
  },
  {
    "question-title": "Hvad skal dæk, fælge og hjuldele være?",
    "wrong-answers": ["Beskadigede", "Forskellige fra hinanden"],
    "right-answer": ["Ubeskadigede"],
    id: 45,
  },
  {
    "question-title":
      "Hvilken type dæk skal en personbil med tilladt totalvægt på højst 3.500 kg og varebil med tilladt totalvægt på højst 3.000 kg være forsynet med?",
    "wrong-answers": ["Dæk af forskellige typer på alle hjul", "Terrændæk"],
    "right-answer": ["Dæk af samme type på alle hjul"],
    id: 46,
  },
  {
    "question-title": "Hvordan opdeles dæk i typer?",
    "wrong-answers": ["Efter mærke", "Efter pris"],
    "right-answer": ["Efter opbygning og anvendelseskategori"],
    id: 47,
  },
  {
    "question-title":
      "Hvad skal dækkets oppumpningstryk være i overensstemmelse med?",
    "wrong-answers": ["Dækfabrikantens anbefalinger", "Bilistens præference"],
    "right-answer": ["Køretøjsfabrikantens foreskrifter"],
    id: 48,
  },
  {
    "question-title": "Hvad tyder ujævnt/skævt slid på dæk på?",
    "wrong-answers": [
      "At dækkene er for gamle",
      "At dækkene er af forkert type",
    ],
    "right-answer": [
      "fejl i dæktryk, hjul eller hjulindstilling, bremser eller støddæmpere.",
    ],
    id: 49,
  },
  {
    "question-title":
      "Hvad kan en unormal tendens til over- eller understyring af bilen tyde på?",
    "wrong-answers": ["At bilens rat er løst", "At bilens tænding er defekt"],
    "right-answer": ["Forkert dæktryk"],
    id: 50,
  },
  {
    "question-title": "Hvad kan knirkende lyde under kørselen tyde på?",
    "wrong-answers": ["Fejl i motoren", "Fejl i udstødningssystemet"],
    "right-answer": ["Fejl i hjulophæng, herunder fjedre eller støddæmpere"],
    id: 51,
  },
  {
    "question-title": "Hvad kan ujævnt/skævt slid på dæk være tegn på?",
    "wrong-answers": [
      "At dækkene er for gamle",
      "At dækkene er af forkert type",
    ],
    "right-answer": ["Forskellige fejl ved køretøjet"],
    id: 52,
  },
  {
    "question-title": "Hvad kan forkert dæktryk vise sig ved?",
    "wrong-answers": [
      "At bilen har svært ved at starte",
      "At bilen bruger for meget brændstof",
    ],
    "right-answer": [
      "Ujævnt/skævt slid på dæk, skævtrækning under let opbremsning eller unormal over- og understyring",
    ],
    id: 53,
  },
  {
    "question-title":
      "Hvilket udstyr skal bilen normalt være forsynet med på alle siddepladser?",
    "wrong-answers": ["Airbags", "Hovedstøtter"],
    "right-answer": ["Sikkerhedsseler"],
    id: 54,
  },
  {
    "question-title": "Hvordan skal sikkerhedsselerne i bilen være?",
    "wrong-answers": ["Med automatisk stramning", "Med dobbelt låsning"],
    "right-answer": ["Uden beskadigelser"],
    id: 55,
  },
  {
    "question-title": "Hvad må bilens påbudte midterspejl ikke?",
    "wrong-answers": ["Være beskidt", "Være beskadiget"],
    "right-answer": ["Fjernes, hvis sidepladsen benyttes"],
    id: 56,
  },
  {
    "question-title": "Hvad skal bilen være forsynet med?",
    "wrong-answers": [
      "Indvendigt bakspejl i højre side",
      "Udvendigt bakspejl i højre side, uanset udsyn",
    ],
    "right-answer": [
      "Indvendigt forspejl og et udvendigt forspejl i venstre side",
    ],
    id: 57,
  },
  {
    "question-title": "Hvordan skal spejlene i bilen være?",
    "wrong-answers": ["Store og runde", "Med anti-blænd funktion"],
    "right-answer": ["Rene og ubeskadigede"],
    id: 58,
  },
  {
    "question-title": "Hvad bør man medbringe under kørsel?",
    "wrong-answers": ["En godkendt brandslukker", "En førstehjælpskasse"],
    "right-answer": ["En godkendt advarselstrekant"],
    id: 59,
  },
  {
    "question-title": "Hvad er et tegn på fejl i visker eller vasker?",
    "wrong-answers": [
      "Sprinklervæsken er opbrugt",
      "Viskerne laver en skurrende lyd",
    ],
    "right-answer": ["Forruden kan ikke holdes ren"],
    id: 60,
  },
  {
    "question-title": "Hvad skal man kunne kontrollere i bilen?",
    "wrong-answers": ["Oliemængden", "Bremsevæsken"],
    "right-answer": ["At sprinklervæske er påfyldt i tilstrækkelig mængde"],
    id: 61,
  },
  {
    "question-title": "Hvad skal viskerne i bilen kunne?",
    "wrong-answers": [
      "Køre på flere hastigheder",
      "Køre automatisk når det regner",
    ],
    "right-answer": ["Holde forruden ren"],
    id: 62,
  },
  {
    "question-title": "Hvad er nødvendigt for at en bil kan anvendes?",
    "wrong-answers": [
      "Den skal have en gyldig parkeringslicens",
      "Den skal være forsikret",
      "Den skal have en gyldig synsrapport",
    ],
    "right-answer": [
      "Den skal være registreret, og der skal være udstedt en registreringsattest",
    ],
    id: 63,
  },
  {
    "question-title": "Hvad fremgår af en registreringsattest?",
    "wrong-answers": [
      "Bilens farve",
      "Bilens brændstoftype",
      "Bilens forsikringsoplysninger",
    ],
    "right-answer": [
      "Bilens egenvægt/køreklar vægt, dens tilladte totalvægt samt vægten af eventuelt påhængskøretøj, der må kobles til den",
    ],
    id: 64,
  },
  {
    "question-title":
      "Hvad kan føreren afgøre på grundlag af registreringsattester?",
    "wrong-answers": [
      "Om bilen er forsikret",
      "Om bilen har været involveret i ulykker",
      "Om bilen har en gyldig synsrapport",
    ],
    "right-answer": ["Om bil og påhængskøretøj må sammenkobles"],
    id: 65,
  },
  {
    "question-title": "Hvad skal medbringes ved kørsel med påhængskøretøj?",
    "wrong-answers": [
      "En gyldig parkeringslicens",
      "En gyldig synsrapport",
      "Bilens forsikringsoplysninger",
    ],
    "right-answer": ["Bilens og påhængskøretøjets registreringsattester"],
    id: 66,
  },
  {
    "question-title": "Hvad skal medbringes ved kørsel i Danmark?",
    "wrong-answers": [
      "De originale attester",
      "En af SKAT udstedt genpart",
      "Bilens forsikringsoplysninger",
    ],
    "right-answer": ["Kopier af registreringsattester kan medbringes"],
    id: 67,
  },
  {
    "question-title": "Hvad afhænger køretøjets styreegenskaber især af?",
    "wrong-answers": ["Motorens størrelse", "Hjulenes størrelse"],
    "right-answer": ["Vægtens fordeling på forhjul og baghjul"],
    id: 68,
  },
  {
    "question-title":
      "Hvordan påvirker størst vægt på baghjulene køretøjets styreegenskaber?",
    "wrong-answers": [
      "Gør køretøjet mere sidevindsfølsomt",
      "Gør køretøjet mindre retningsstabilt",
    ],
    "right-answer": [
      "Gør køretøjet meget styrevilligt (overstyringstendens) og mindre sidevindsfølsomt",
    ],
    id: 69,
  },
  {
    "question-title":
      "Hvordan påvirker størst vægt på forhjulene køretøjets styreegenskaber?",
    "wrong-answers": [
      "Gør køretøjet mere styrevilligt (overstyringstendens)",
      "Gør køretøjet mere sidevindsfølsomt",
    ],
    "right-answer": [
      "Gør køretøjet mindre styrevilligt (understyringstendens) og mindre sidevindsfølsomt og dermed mere retningsstabilt",
    ],
    id: 70,
  },
  {
    "question-title":
      "Hvad sker der med køretøjets styreegenskaber ved belastning?",
    "wrong-answers": ["De påvirkes ikke", "De bliver mindre udtalte"],
    "right-answer": ["Disse tendenser kan forstærkes"],
    id: 71,
  },
  {
    "question-title": "3.1.3 Førerens orienteringsvilkår",
    "wrong-answers": [
      "Anvendelse af briller forbedrer altid muligheden for at orientere sig.",
      "Hovedbeklædning påvirker ikke førerens synsfelt.",
    ],
    "right-answer": [
      "Anvendelse af briller eller uhensigtsmæssig hovedbeklædning, der væsentlig begrænser synsfeltet, nedsætter muligheden for at orientere sig.",
    ],
    id: 72,
  },
  {
    "question-title": "4.1.1 Bilistens vigtigste opgaver",
    "wrong-answers": [
      "Kørselsrigtighed afhænger kun af den rent køretetekniske beherskelse af bilen.",
      "Føreren behøver ikke at opfatte og bedømme færdselsforholdene.",
    ],
    "right-answer": [
      "Kørselsrigtighed afhænger ikke alene af den rent køretetekniske beherskelse af bilen, men i mindst lige så høj grad af måden, hvorpå føreren opfatter og bedømmer færdselsforholdene.",
    ],
    id: 73,
  },
  {
    "question-title": "4.1.1 Bilistens vigtigste opgaver (2)",
    "wrong-answers": [
      "Mangelfuld opmærksomhed, fejlopfattelse og fejldømmelse spiller en lille rolle ved færdselsuheld.",
      "Synsindtryk har ingen indflydelse på opfattelsen af færdselsforholdene.",
    ],
    "right-answer": [
      "Mangelfuld opmærksomhed, fejlopfattelse og fejldømmelse spiller en væsentlig rolle ved de fleste færdselsuheld.",
      "Opfattelsen af færdselsforholdene støtter sig først og fremmest på synsindtrykkene, og føreren må derfor være særlig opmærksom på mulige øjenfejl eller svækkelse af synet.",
    ],
    id: 74,
  },
  {
    "question-title": "Hvad tiltrækker umiddelbart opmærksomheden?",
    "wrong-answers": [
      "Ting eller begivenheder, der er sædvanlige og uinteressante",
      "Ting eller begivenheder, som føreren ikke er interesseret i",
    ],
    "right-answer": [
      "Ting eller begivenheder, der er særlig iøjnefaldende og usædvanlige, eller som føreren er særlig interesseret i",
    ],
    id: 75,
  },
  {
    "question-title":
      "Hvordan kan føreren undertrykke tilbøjeligheden til at lade opmærksomheden fange af uvedkommende ting?",
    "wrong-answers": [
      "Ved at ignorere færdslen",
      "Ved at fokusere på uvedkommende ting",
    ],
    "right-answer": [
      "Ved at udvide sit kendskab til færdslen, især årsager til ulykker, og dermed skærpe interessen for de enkeltheder, færdtøgen og signaler, der har betydning for sikkerheden",
    ],
    id: 76,
  },
  {
    "question-title":
      "Hvordan udvikles en færdelssikker holdning og adfærd bedst?",
    "wrong-answers": [
      "Ved at ignorere egne begrænsninger",
      "Ved at have fuld tillid til pålideligheden af det, man umiddelbart opfatter i færdslen",
    ],
    "right-answer": [
      "Ved viden om egne begrænsninger og en sund skepsis over for pålideligheden af det, man umiddelbart opfatter i færdslen",
    ],
    id: 77,
  },
  {
    "question-title": "Hvordan styrkes en færdelssikker holdning og adfærd?",
    "wrong-answers": [
      "Ved at ignorere egne begrænsninger",
      "Ved at køre uden sikkerhedsmargin under de forskellige manøvrer",
    ],
    "right-answer": [
      "Ved, at man som modvægt mod egne begrænsninger tilegner sig en køremåde, der giver rigelig sikkerhedsmargin under de forskellige manøvrer",
    ],
    id: 78,
  },
  {
    "question-title": "Hvad er tilladt under kørsel?",
    "wrong-answers": [
      "Anvendelse af håndholdt mobiltelefon",
      "At finde ting i handskerummet mens man kører",
      "Betjening af multimediaanlæg (radio/cd/dvd), GPS og smartphones",
    ],
    "right-answer": ["At være opmærksom på trafiksituationen"],
    id: 79,
  },
  {
    "question-title": "Hvad kan forlænge en førers reaktionstid?",
    "wrong-answers": [
      "At være opmærksom på trafiksituationen",
      "At afbryde en telefonsamtale, der går dårligt igennem",
      "At lade en passager betjene udstyr som fx multimediaanlæg (radio/cd/dvd), GPS og smartphones",
    ],
    "right-answer": ["Anvendelse af mobiltelefon (fx samtale eller sms)"],
    id: 80,
  },
  {
    "question-title": "Hvordan kan en fører forhindre stress-situationer?",
    "wrong-answers": [
      "Ved at finde ting i handskerummet",
      "Ved at tale med en passager",
      "Ved at betjene multimediaanlæg (radio/cd/dvd), GPS og smartphones under kørslen",
    ],
    "right-answer": [
      "Ved at være opmærksom på trafiksituationen og undlade at bruge telefonen",
      "Ved at afbryde samtalen, hvis den går dårligt igennem",
    ],
    id: 81,
  },
  {
    "question-title": "Hvad kan aflede en førers opmærksomhed?",
    "wrong-answers": [
      "At være opmærksom på trafiksituationen",
      "At afbryde en telefonsamtale, der går dårligt igennem",
      "At lade en passager betjene udstyr som fx multimediaanlæg (radio/cd/dvd), GPS og smartphones",
    ],
    "right-answer": [
      "Typiske dagligdags aktiviteter som fx at finde ting i handskerummet, læse kort, spise og drikke eller tale med en passager",
      "Telefonsamtaler, særligt hvis samtalen går dårligt igennem, eller hvis budskabet er kompliceret eller ubehageligt",
      "Uligevægtig sindstilstand på grund af stærk ophidselse, sorg, bekymring eller lignende",
    ],
    id: 82,
  },
  {
    "question-title":
      "Hvad er ikke et problem i sig selv under kørslen, men kan blive det, hvis føreren betjener dem?",
    "wrong-answers": [
      "At være opmærksom på trafiksituationen",
      "At afbryde en telefonsamtale, der går dårligt igennem",
      "At lade en passager betjene udstyr som fx multimediaanlæg (radio/cd/dvd), GPS og smartphones",
    ],
    "right-answer": [
      "Tilstedeværelsen af multimediaanlæg (radio/cd/dvd), GPS og smartphones",
    ],
    id: 83,
  },
  {
    "question-title":
      "Hvordan stabiliserer man styringen på længere frie vejstrækninger?",
    "wrong-answers": [
      "Ved at se så kort frem som muligt",
      "Ved at holde blikket fast på midterlinjen",
    ],
    "right-answer": ["Ved at se så langt frem som muligt"],
    id: 84,
  },
  {
    "question-title":
      "Hvordan letter man styringen ved kørsel gennem vejsving uden midterlinje?",
    "wrong-answers": [
      "Ved at holde blikket fast på den yderste vejkant",
      "Ved at se så langt frem som muligt",
    ],
    "right-answer": [
      "Ved at flytte blikket ind i den inderste (og mest krumme) vejkant og flytte blikket fremad gennem hele svinget",
    ],
    id: 85,
  },
  {
    "question-title": "Hvordan skal man orientere sig ved svingning i kryds?",
    "wrong-answers": [
      "Ved at fastholde blikket for længe i retning af andre trafikanter",
      "Ved at se så langt frem som muligt",
    ],
    "right-answer": [
      "Efter endt orientering afkorte blikket søge i den retning, man skal køre",
    ],
    id: 86,
  },
  {
    "question-title": "Hvordan bedømmes afstande under ca. 50 m normalt?",
    "wrong-answers": [
      "De overvurderes ofte, dvs. opfattes længere, end de i virkeligheden er",
      "De undervurderes ofte, dvs. opfattes kortere, end de i virkeligheden er",
    ],
    "right-answer": ["De bedømmes normalt nogenlunde korrekt"],
    id: 87,
  },
  {
    "question-title": "Hvad støtter opfattelsen af afstand sig især på?",
    "wrong-answers": [
      "På det umiddelbare synsindtryk af tingens farve forude",
      "På det umiddelbare synsindtryk af tingens form forude",
    ],
    "right-answer": [
      "På det umiddelbare synsindtryk af tingens størrelse forude og til perspektivet",
    ],
    id: 88,
  },
  {
    "question-title":
      "Hvornår er risikoen for at fejlvurdere afstand til stede?",
    "wrong-answers": [
      "Til store køretøjer, fordi de ser ud til at være tættere på, end de i virkeligheden er",
      "Til alle ting i klart vejr, fordi perspektivlinjerne er tydelige",
    ],
    "right-answer": [
      "Til små køretøjer, fordi de ser ud til at være længere væk, end de i virkeligheden er, og til alle ting i usigtbart vejr, bl.a. fordi perspektivlinjerne udviskes",
    ],
    id: 89,
  },
  {
    "question-title": "Hvad påvirker opfattelsen af ens egen hastighed?",
    "wrong-answers": [
      "Støjniveauet og vibrationerne i bilen samt vejens bredde",
      "Støjniveauet i bilen og antallet af baggrundsholdepunkter",
      "Støjniveauet i bilen og bilens affjedring",
    ],
    "right-answer": [
      "Støjniveauet og vibrationerne i bilen, samt synlige baggrundsholdepunkter ved vejen",
    ],
    id: 90,
  },
  {
    "question-title":
      "Hvornår er der risiko for at undervurdere sin hastighed?",
    "wrong-answers": [
      "Når man kører på en vej med mange baggrundsholdepunkter",
      "Når man kører i en bil med højt støjniveau",
      "Når man kører i en bil med dårlig affjedring",
    ],
    "right-answer": [
      "Når man kører på en vej med få baggrundsholdepunkter, eller hvis man kører i en bil med lavt støjniveau eller god affjedring",
    ],
    id: 91,
  },
  {
    "question-title": "Hvad er fartblindhed?",
    "wrong-answers": [
      "En tilstand hvor man overvurderer sin hastighed efter længere tids kørsel",
      "En tilstand hvor man ikke kan bedømme sin hastighed korrekt",
      "En tilstand hvor man konstant undervurderer sin hastighed",
    ],
    "right-answer": [
      "En udbredt tendens til at undervurdere sin hastighed, når man efter nogen tids kørsel, hvor man har vænnet sig til høj hastighed, kommer ind i et område, hvor hastigheden skal sættes ned",
    ],
    id: 92,
  },
  {
    "question-title": "Hvordan bedømmes hastigheder under og over 50 km/t?",
    "wrong-answers": [
      "Hastigheder under 50 km/t undervurderes ofte, mens hastigheder over 50 km/t bedømmes korrekt",
      "Hastigheder under 50 km/t bedømmes korrekt, mens hastigheder over 50 km/t overvurderes",
      "Hastigheder under og over 50 km/t bedømmes generelt korrekt",
    ],
    "right-answer": [
      "Hastigheder under ca. 50 km/t bedømmes normalt nogenlunde korrekt, mens hastigheder over 50 km/t ofte undervurderes, dvs. opfattes lavere, end de i virkeligheden er",
    ],
    id: 93,
  },
  {
    "question-title":
      "Hvordan er evnen til at bedømme hastigheder på køretøjer, der er mere end 200 m væk?",
    "wrong-answers": [
      "De fleste kan bedømme hastigheder korrekt på køretøjer, der er mere end 200 m væk",
      "De fleste overvurderer hastigheder på køretøjer, der er mere end 200 m væk",
      "De fleste undervurderer hastigheder på køretøjer, der er mere end 200 m væk",
    ],
    "right-answer": [
      "De fleste kan ikke bedømme hastigheder blot nogenlunde korrekt på køretøjer, der er mere end 200 m væk",
    ],
    id: 94,
  },
  {
    "question-title": "Hvad påvirker selv små mængder alkohol?",
    "wrong-answers": ["Ens syn", "Ens hørelse", "Ens smagssans"],
    "right-answer": ["Opfattelses- og reaktionsevne"],
    id: 95,
  },
  {
    "question-title":
      "Hvad bør man gøre, hvis man kører i bil til et sted, hvor der serveres alkohol?",
    "wrong-answers": [
      "Drikke alkoholfri øl",
      "Drikke alkohol, men vente en time før man kører",
      "Drikke så meget man vil, hvis man føler sig i stand til at køre",
    ],
    "right-answer": [
      "Beslutte på forhånd, om man vil køre derfra og undgå at drikke alkohol eller drikke meget lidt",
    ],
    id: 96,
  },
  {
    "question-title":
      "Hvad er grænsen for alkoholkoncentration i blodet, før man straffes for spirituskørsel?",
    "wrong-answers": ["0,30 promille", "0,40 promille", "0,60 promille"],
    "right-answer": ["0,50 promille"],
    id: 97,
  },
  {
    "question-title":
      "Kan man straffes for spirituskørsel, selv om promillen er lavere, hvis man ikke kan køre på en betryggende måde?",
    "wrong-answers": [
      "Nej, man kan kun straffes, hvis promillen er over 0,50",
      "Nej, det er kun en advarsel",
      "Nej, man får kun en bøde",
    ],
    "right-answer": ["Ja"],
    id: 98,
  },
  {
    "question-title":
      "Hvad sker der, hvis promillen er over 0,50 og højst 2,00?",
    "wrong-answers": [
      "Man får en mindre bøde",
      "Man får en advarsel",
      "Man får et klip i kørekortet",
    ],
    "right-answer": [
      "Man straffes første gang med en stor bøde, og ved højere promiller idømmes man desuden fængselsstraf og bilen kan blive konfiskeret",
    ],
    id: 99,
  },
  {
    "question-title":
      "Hvad sker der, hvis promillen er over 0,50 og højst 1,20?",
    "wrong-answers": [
      "Man får en advarsel",
      "Man får et klip i kørekortet",
      "Man får en mindre bøde",
    ],
    "right-answer": [
      "Man frakendes første gang førerretten betinget, og ved højere promiller frakendes man normalt førerretten ubetinget",
    ],
    id: 100,
  },
  {
    "question-title": "Hvad sker der i gentagelsestilfælde af spirituskørsel?",
    "wrong-answers": [
      "Man får en advarsel",
      "Man får et klip i kørekortet",
      "Man får en mindre bøde",
    ],
    "right-answer": ["Sanktionerne skærpes væsentligt"],
    id: 101,
  },
  {
    "question-title":
      "Hvad skal der altid gennemføres i forbindelse med spirituskørsel?",
    "wrong-answers": [
      "Et førstehjælpskursus",
      "Et kørekursus",
      "Et kursus i trafiksikkerhed",
    ],
    "right-answer": ["Et ANT-kursus"],
    id: 102,
  },
  {
    "question-title":
      "Hvad er det forbudt at gøre ift. spirituspåvirkede personer og bilkørsel?",
    "wrong-answers": [
      "At lade dem sidde på passagersædet",
      "At lade dem sidde i bagagerummet",
      "At lade dem sidde i bilen alene",
    ],
    "right-answer": [
      "At overlade bilen til en person, der har drukket så meget spiritus, at den pågældende ikke er i stand til at føre bilen på betryggende måde",
    ],
    id: 103,
  },
  {
    "question-title": "Hvad kan politiet kræve af en bilist til enhver tid?",
    "wrong-answers": [
      "At vise kørekort",
      "At vise bilens registreringsattest",
      "At vise bilens forsikringspapirer",
    ],
    "right-answer": ["Udåndingsprøver"],
    id: 104,
  },
  {
    "question-title":
      "Hvordan påvirker bevidsthedspåvirkende stoffer (narkotika og visse typer medicin) evnen til at køre bil?",
    "wrong-answers": [
      "De forbedrer køreevnen",
      "De har ingen indflydelse på køreevnen",
    ],
    "right-answer": [
      "De påvirker evnen til at køre bil og forøger risikoen for trafikulykker",
    ],
    id: 105,
  },
  {
    "question-title":
      "Hvad sker der, hvis man blander narkotiske stoffer med alkohol?",
    "wrong-answers": [
      "Virkningen er altid den samme",
      "Risikoen for ulykker reduceres",
    ],
    "right-answer": [
      "Virkningen på personen kan være uforudsigelig, men ulykkesrisikoen vil under alle omstændigheder være stærkt forøget",
    ],
    id: 106,
  },
  {
    "question-title":
      "Er det lovligt at køre bil, hvis man har indtaget bevidsthedspåvirkende stoffer?",
    "wrong-answers": [
      "Ja, det er lovligt",
      "Det afhænger af mængden af stoffer, man har indtaget",
    ],
    "right-answer": [
      "Nej, det er ulovligt at køre bil eller blot forsøge det, hvis man har indtaget bevidsthedspåvirkende stoffer, som er farlige for færdelssikkerheden",
    ],
    id: 107,
  },
  {
    "question-title":
      "Hvad er konsekvensen af at køre med bevidsthedspåvirkende stoffer i blodet?",
    "wrong-answers": ["Der er ingen konsekvenser", "Man får en advarsel"],
    "right-answer": [
      "Første gang straffes man med bøde og ubetinget frakendelse af førerretten (svarende til straffen for at køre med en alkoholpromille på 1,21)",
    ],
    id: 108,
  },
  {
    "question-title":
      "Hvad sker der, hvis man gentagne gange kører med bevidsthedspåvirkende stoffer i blodet?",
    "wrong-answers": [
      "Straffen bliver mildere",
      "Straffen forbliver den samme",
    ],
    "right-answer": ["Sanktionerne skærpes væsentligt i gentagelsestilfælde"],
    id: 109,
  },
  {
    "question-title":
      "Er det lovligt at overlade bilen til en person, der har indtaget bevidsthedspåvirkende stoffer?",
    "wrong-answers": [
      "Ja, det er lovligt",
      "Det afhænger af mængden af stoffer, personen har indtaget",
    ],
    "right-answer": [
      "Nej, det er forbudt at overlade bilen til en person, der har indtaget bevidsthedspåvirkende stoffer",
    ],
    id: 110,
  },
  {
    "question-title":
      "Kan politiet kræve at føreren afgiver spyt- eller svedprøver eller lader sine øjne undersøge?",
    "wrong-answers": [
      "Nej, kun hvis der er mistanke om narkotikapåvirkning",
      "Nej, det er kun læger, der kan kræve det",
    ],
    "right-answer": [
      "Ja, politiet kan til enhver tid kræve, at føreren afgiver spyt- eller svedprøver eller lader sine øjne undersøge",
    ],
    id: 111,
  },
  {
    "question-title": "Hvornår må man ikke køre bil?",
    "wrong-answers": [
      "Hvis man er glad og opløftet",
      "Hvis man har drukket kaffe",
      "Hvis man har sovet godt",
    ],
    "right-answer": [
      "Hvis man er syg, træt eller har fået medicin eller er påvirket af opstemmede eller bevidsnedøvende midler",
    ],
    id: 112,
  },
  {
    "question-title": "Hvad kan svække opfattelses- og reaktionsevnen?",
    "wrong-answers": ["At drikke vand", "At spise sundt", "At få frisk luft"],
    "right-answer": [
      "At være syg eller have indtaget nerve- eller sovemedicin, stærke hoste- eller smertestillende midler eller medicin mod allergi, køre- og søsyge eller lignende",
    ],
    id: 113,
  },
  {
    "question-title": "Hvad kan forstærke medicinens sløvende virkning?",
    "wrong-answers": ["At drikke te", "At læse en bog", "At lytte til musik"],
    "right-answer": ["At indtage alkohol"],
    id: 114,
  },
  {
    "question-title":
      "Hvordan er medicin, der kan nedsætte opmærksomheds- og reaktionsevnen, oftest mærket?",
    "wrong-answers": [
      "Med en blå cirkel",
      "Med en grøn firkant",
      "Med en gul stjerne",
    ],
    "right-answer": ["Med en rød trekant"],
    id: 115,
  },
  {
    "question-title": "Hvad påvirker opfattelses- og reaktionsevnen?",
    "wrong-answers": ["At spise chokolade", "At se en film", "At høre radio"],
    "right-answer": [
      "Både legemlig og psykisk træthed (fx stress), og man skal derfor alvorligt overveje at lade bilen stå, hvis man ikke har sovet nok om natten eller skal hjem efter en lang dag med særligt anstrengende arbejde",
    ],
    id: 116,
  },
  {
    "question-title": "Hvad er mange bilister tilbøjelige til at overvurdere?",
    "wrong-answers": [
      "Egne evner til at synge",
      "Egne evner til at lave mad",
      "Egne evner til at danse",
    ],
    "right-answer": [
      "Egne kræfter ved at køre længere strækninger på tidspunkter, hvor man plejer at slappe af, hvile eller sove",
    ],
    id: 117,
  },
  {
    "question-title":
      "Hvad skal en læge gøre, hvis en patient er uegnet til at føre et motorkøretøj?",
    "wrong-answers": [
      "Rådgive patienten om at tage offentlig transport",
      "Rådgive patienten om at købe en cykel",
      "Rådgive patienten om at gå mere",
    ],
    "right-answer": ["Anmelde det til myndighederne"],
    id: 118,
  },
  {
    "question-title": "Hvornår er det forbudt at overlade bilen til en person?",
    "wrong-answers": [
      "Hvis personen har glemt sine briller",
      "Hvis personen ikke kan lide at køre bil",
      "Hvis personen har glemt sin mobiltelefon",
    ],
    "right-answer": [
      "Hvis personen på grund af sygdom, træthed eller indtagelse af medicin eller lignende ikke er i stand til at føre bilen på fuldt betryggende måde",
    ],
    id: 119,
  },
  {
    "question-title":
      "Hvilke forudsætninger mangler småbørn (under 5-6 år) for at færdes sikkert i trafikken?",
    "wrong-answers": [
      "De har ikke de nødvendige fysiske og psykiske forudsætninger for at køre bil.",
      "De har ikke de nødvendige fysiske og psykiske forudsætninger for at cykle på vejene.",
      "De har ikke de nødvendige fysiske og psykiske forudsætninger for at navigere i offentlig transport.",
    ],
    "right-answer": [
      "De har ikke de nødvendige fysiske og psykiske forudsætninger for at færdes sikkert i trafikken.",
    ],
    id: 120,
  },
  {
    "question-title": "Hvordan kan småbørns adfærd i trafikken beskrives?",
    "wrong-answers": [
      "De er altid pålidelige og kan bedømme farer i trafikken.",
      "De er altid sikre i deres bevægelser og snubler eller falder aldrig.",
      "De kan altid beherske pludselige impulser til fx at løbe over kørebanen.",
    ],
    "right-answer": [
      "Småbørn, der tilsyneladende opfører sig forsigtigt, er alligevel upålidelige, fordi de ikke kan beherske pludselige impulser til fx at løbe over kørebanen, fordi de ikke kan bedømme farer i trafikken, og fordi de er usikre i deres bevægelser og derfor let kan snuble eller falde, når de går eller løber.",
    ],
    id: 121,
  },
  {
    "question-title":
      "Hvordan skal man reagere, når man ser et småbarn færdes på egen hånd i trafikken?",
    "wrong-answers": [
      "Man skal accelerere for at passere barnet hurtigt.",
      "Man skal ignorere barnet og fortsætte som normalt.",
      "Man skal bruge hornet for at advare barnet.",
    ],
    "right-answer": [
      "Småbørn, der færdes på egen hånd, må altid opfattes som et klart faretegn, der kræver skærpet opmærksomhed, nedsat hastighed og bremseberedskab.",
    ],
    id: 122,
  },
  {
    "question-title":
      "Hvordan skal man bruge hornet over for småbørn i trafikken?",
    "wrong-answers": [
      "Man skal bruge hornet for at skræmme barnet væk fra vejen.",
      "Man skal bruge hornet for at vække barnets opmærksomhed.",
      "Man skal bruge hornet for at advare andre bilister.",
    ],
    "right-answer": [
      "Brug af horn over for småbørn skal ske med omtanke, fordi det let kan fremkalde panikreaktioner.",
    ],
    id: 123,
  },
  {
    "question-title":
      "Hvad kendetegner mindre skolebørns (6-10-års-alderen) adfærd i trafikken?",
    "wrong-answers": [
      "De har ingen problemer med at passe på sig selv og passe på andre.",
      "De har ingen problemer med at fastholde opmærksomheden på trafikken.",
      "De handler aldrig efter pludselige indskydelser og tilskyndelser.",
    ],
    "right-answer": [
      "Mindre skolebørn (6-10-års-alderen) kender normalt de vigtigste færdselsregler, men har svært ved at passe på sig selv og passe på andre, også hvor andre har pligt til at holde tilbage (fx i fodgængerfelt og ved lyssignal). De har svært ved at fastholde opmærksomheden på trafikken og kan handle efter pludselige indskydelser og tilskyndelser.",
    ],
    id: 124,
  },
  {
    "question-title": "Hvornår begynder de fleste cykeluheld at ramme børn?",
    "wrong-answers": ["1-4-års-alderen", "15-20-års-alderen"],
    "right-answer": ["5-6-års-alderen"],
    id: 125,
  },
  {
    "question-title":
      "Hvad er en af grundene til, at børn ikke får tilstrækkelig undervisning i at cykle sikkert?",
    "wrong-answers": [
      "Fordi underviserne ikke har tid",
      "Fordi børnene ikke er interesserede",
    ],
    "right-answer": ["Fordi underviserne kører bil"],
    id: 126,
  },
  {
    "question-title":
      "Hvad har mange børn problemer med i forhold til at cykle?",
    "wrong-answers": ["At finde vejen", "At låse cyklen"],
    "right-answer": [
      "At beherske cyklen, dvs. holde balancen, styre og bremse",
    ],
    id: 127,
  },
  {
    "question-title": "Hvad bruger børn ofte cyklen til?",
    "wrong-answers": ["At transportere ting", "At køre væddeløb"],
    "right-answer": ["At afprøve egne evner og færdigheder"],
    id: 128,
  },
  {
    "question-title":
      "Hvad har selv større skolebørn svært ved, når de cykler?",
    "wrong-answers": ["At cykle hurtigt", "At cykle på ujævnt terræn"],
    "right-answer": [
      "At styre cyklen, hvis de skal se i en anden retning end kørselsretningen",
    ],
    id: 129,
  },
  {
    "question-title":
      "Hvorfor er unge motorkørende mest udsatte for uheld i trafikken?",
    "wrong-answers": [
      "Fordi de ofte har en negativ holdning til trafikken.",
      "Fordi de altid kører for hurtigt.",
    ],
    "right-answer": [
      "Fordi de mangler erfaring og ofte har holdningsproblemer.",
    ],
    id: 130,
  },
  {
    "question-title":
      "Hvad kan manglende erfaring medføre for unge motorkørende?",
    "wrong-answers": [
      "At de altid kører for langsomt.",
      "At de ikke kan finde vej.",
    ],
    "right-answer": [
      "At de har svært ved at vurdere færdselssituationen og hastigheder korrekt, og bedømme egne og andres manøvrer.",
    ],
    id: 131,
  },
  {
    "question-title":
      "Hvorfor fristes nogle unge til at bruge køretøjet til at afprøve egne evner?",
    "wrong-answers": [
      "Fordi de ønsker at imponere deres forældre.",
      "Fordi de keder sig.",
    ],
    "right-answer": [
      "For at opleve spænding, afreagere skuffelser eller hævde sig.",
    ],
    id: 132,
  },
  {
    "question-title":
      "Hvorfor har unge motorkørende svært ved at omsætte deres positive grundholdning til trafikken i praksis?",
    "wrong-answers": [
      "Fordi de ikke forstår færdselsreglerne.",
      "Fordi de mangler respekt for andre trafikanter.",
    ],
    "right-answer": [
      "Fordi de ofte mangler kendskab til de mange fænomener i trafikken.",
    ],
    id: 133,
  },
  {
    "question-title":
      "Hvad kan bringe unge motorkørendes positive holdning til trafikken i konflikt?",
    "wrong-answers": [
      "Der mangler skilte på vejene.",
      "De får for mange bøder.",
    ],
    "right-answer": ["Andre trafikanters manglende hensyntagen og forståelse."],
    id: 134,
  },
  {
    "question-title": "Hvilken udfordring oplever ældre trafikanter ofte?",
    "wrong-answers": [
      "Ældre trafikanter har ofte forbedret syn og hørelse",
      "Ældre trafikanter reagerer hurtigere",
      "Mange ældre er ikke bange for at falde",
    ],
    "right-answer": [
      "Ældre trafikanter har ofte nedsat syn og hørelse og opfatter og reagerer langsomt",
    ],
    id: 135,
  },
  {
    "question-title": "Hvordan påvirker frygten for at falde mange ældre?",
    "wrong-answers": [
      "De bliver mere opmærksomme på de kørende",
      "De er ikke bange for at træde på kantstenen",
      "De går hurtigere over kørebanen",
    ],
    "right-answer": [
      "Mange ældre er dårligt gående og bange for at falde og er derfor mindre opmærksomme på de kørende, når de træder på kantstenen eller er på vej over kørebanen",
    ],
    id: 136,
  },
  {
    "question-title": "Hvordan opfatter mange ældre fodgængerfelter?",
    "wrong-answers": [
      "Som usikre steder",
      "De ser altid sig for, før de går over",
      "De undlader aldrig at se sig for, før de går over",
    ],
    "right-answer": [
      "Mange ældre opfatter fodgængerfelter som særligt sikre steder og undlader derfor ofte helt at se sig for, før de går over",
    ],
    id: 137,
  },
  {
    "question-title": "Hvordan krydser mange ældre kørebanen ved lysregler?",
    "wrong-answers": [
      "De har ingen tillid til det grønne lys",
      "De ser altid sig for, selv når lyset er grønt",
      "De venter altid på det røde lys",
    ],
    "right-answer": [
      "Mange ældre krydser kørebanen ved lysregler i fuld tillid til det grønne lys og uden at se sig for",
    ],
    id: 138,
  },
  {
    "question-title":
      "Hvordan reagerer mange ældre på hurtigt nærmer sig biler?",
    "wrong-answers": [
      "De bliver ikke forskrækket",
      "De er ikke bange for trafikken",
      "De kan ikke fremkalde farlige paniksituationer",
    ],
    "right-answer": [
      "Mange ældre er bange for trafikken og forskrækkes let af biler, der hastigt nærmer sig, kører tæt forbi eller bremser brat op, hvilket kan fremkalde farlige paniksituationer",
    ],
    id: 139,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig, når andre trafikanter begår fejl i trafikken?",
    "wrong-answers": [
      "Man skal være negativ og uhjælpsom",
      "Man skal ignorere fejlen",
    ],
    "right-answer": ["Man skal være positiv og hjælpsom"],
    id: 140,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig ved passage af vejarbejde?",
    "wrong-answers": [
      "Man skal være uopmærksom og ligeglad",
      "Man skal være irriteret og utålmodig",
    ],
    "right-answer": ["Man skal være særlig hjælpsom og hensynsfuld"],
    id: 141,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig over for køretøjer under udrykning?",
    "wrong-answers": [
      "Man skal være ligeglad og ignorere dem",
      "Man skal være irriteret og utålmodig",
    ],
    "right-answer": ["Man skal være særlig hjælpsom og hensynsfuld"],
    id: 142,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig over for andre trafikanters vanskeligheder i trafikken?",
    "wrong-answers": [
      "Man skal være utålmodig og kritisk",
      "Man skal ignorere deres vanskeligheder",
    ],
    "right-answer": ["Man skal være forstående"],
    id: 143,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig over for andre trafikanters manglende rutine som fører?",
    "wrong-answers": [
      "Man skal være utålmodig og kritisk",
      "Man skal ignorere deres manglende rutine",
    ],
    "right-answer": ["Man skal være forstående"],
    id: 144,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig over for andre trafikanters ønske om at komme hurtigere eller langsommere frem i trafikken end en selv?",
    "wrong-answers": [
      "Man skal være utålmodig og kritisk",
      "Man skal ignorere deres ønske",
    ],
    "right-answer": ["Man skal være forstående"],
    id: 145,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig over for, at andre – især ældre – trafikanter udviser forsigtighed i trafikken?",
    "wrong-answers": [
      "Man skal være utålmodig og kritisk",
      "Man skal ignorere deres forsigtighed",
    ],
    "right-answer": ["Man skal være forstående"],
    id: 146,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig, hvis man bliver påvirket eller ophidset af andres fejl eller letsindigheder?",
    "wrong-answers": [
      "Man skal lade sig påvirke og ophidse",
      "Man skal reagere med vrede eller frustration",
    ],
    "right-answer": ["Man må aldrig lade sig påvirke/op­hidse"],
    id: 147,
  },
  {
    "question-title":
      "Hvordan skal man forholde sig, hvis man føler sig fristet til eller bliver provokeret til at begå uforsvarlige handlinger?",
    "wrong-answers": [
      "Man skal følge fristelsen eller provokationen",
      "Man skal reagere med vrede eller frustration",
    ],
    "right-answer": [
      "Man må aldrig føle sig fristet til eller lade sig provokere til at begå uforsvarlige handlinger",
    ],
    id: 148,
  },
  {
    "question-title": "Hvordan skal man altid være i trafikken?",
    "wrong-answers": [
      "Man skal være uforudseende og risikoubevidst",
      "Man skal være ligeglad og uopmærksom",
    ],
    "right-answer": ["Man skal altid være forudseende og risikobevidst"],
    id: 149,
  },
  {
    "question-title":
      "Hvilke personlige faktorer kan øge risikoen for ulykker?",
    "wrong-answers": [
      "Køretøjets konstruktion og udstyr",
      "Evnen til at forudse og analysere risici",
      "Manglende rutine og tendens til nattetilbud",
    ],
    "right-answer": [
      "Selvkontrol, livsstil, holdninger, køn, alder, selvopfattelse, tilstandsforhold",
    ],
    id: 150,
  },
  {
    "question-title":
      "Hvad kan minimere risikoen for ulykker og skabe større færdselssikkerhed?",
    "wrong-answers": [
      "Køretøjets konstruktion og udstyr",
      "Personlige faktorer som selvkontrol, livsstil, holdninger",
      "Manglende rutine og tendens til nattetilbud",
    ],
    "right-answer": [
      "Evnen til at forudse og analysere risici og de deraf følgende konsekvenser",
    ],
    id: 151,
  },
  {
    "question-title": "Hvilke forhold kræver særlige forholsregler?",
    "wrong-answers": [
      "Køretøjets konstruktion og udstyr",
      "Evnen til at forudse og analysere risici",
      "Personlige faktorer som selvkontrol, livsstil, holdninger",
    ],
    "right-answer": ["Manglende rutine, tendens til nattetilbud"],
    id: 152,
  },
  {
    "question-title":
      "Hvad er vigtigt at vide om eget eller især lånt køretøj?",
    "wrong-answers": [
      "Evnen til at forudse og analysere risici",
      "Manglende rutine, tendens til nattetilbud",
      "Personlige faktorer som selvkontrol, livsstil, holdninger",
    ],
    "right-answer": [
      "Køretøjets konstruktion, udstyr, belastning og vedligeholdelseststand",
    ],
    id: 153,
  },
  {
    "question-title": "Hvad betyder det at være risikoblind i trafikken?",
    "wrong-answers": [
      "At man kun kører med høj hastighed i dårligt vejr",
      "At man altid følger de andre trafikanters hastighedsniveau",
      "At man altid kører for tæt på forankørende",
    ],
    "right-answer": ["At man undervurderer risikoen i konkrete situationer"],
    id: 154,
  },
  {
    "question-title": "Hvordan kan risikoblindhed manifestere sig?",
    "wrong-answers": [
      "At man altid kører med høj hastighed",
      "At man altid følger de andre trafikanters hastighedsniveau",
      "At man altid kører for tæt på forankørende",
    ],
    "right-answer": [
      "At man ikke sætter hastigheden tilstrækkelig langt ned i dårligt vejr eller dårligt føre",
      "At man kører for tæt på forankørende, så man ikke kan undgå påkørsel, hvis den forankørende bremser pludseligt op",
      "At man foretager sig ting i bilen, der ikke har med kørselsopgaven at gøre, og som medfører, at man i for lange tidsrum ikke har den fornødne opmærksomhed rettet mod kørslen",
      "At man overser andre risici, fx at man er for træt eller har kørt for længe til at køre forsvarligt",
    ],
    id: 155,
  },
  {
    "question-title": "Hvad skal man som bilist være kritisk over for?",
    "wrong-answers": [
      "At køre med den minimale tilladte hastighed",
      "At tage hensyn til de aktuelle færdselsforhold",
      "At andre trafikanter aldrig begår fejl",
    ],
    "right-answer": [
      "Tilskyndelsen til at køre med den maksimalt tilladte hastighed på veje med god sikkerhedsstandard uden at tage hensyn til de aktuelle færdselsforhold og til, at andre trafikanter ofte begår uventede eller overraskende fejl",
    ],
    id: 156,
  },
  {
    "question-title": "Hvad skal man ikke overvurdere som bilist?",
    "wrong-answers": [
      "Betydningen af vejens bredde",
      "Betydningen af vejens belægning",
      "Betydningen af vejens belysning",
    ],
    "right-answer": [
      "Betydningen af vejtekniske sikkerhedsforanstaltninger, fordi deres virkning bl.a. afhænger af vejrforholdene og andre trafikanters adfærd, og fordi tekniske indretninger kan svigte",
    ],
    id: 157,
  },
  {
    "question-title": "Hvilken type vej er IKKE en del af vejtyperne?",
    "wrong-answers": ["Motorvej", "Hovedvej", "Cykelgade"],
    "right-answer": ["Fodgængerzone"],
    id: 158,
  },
  {
    "question-title": "Hvad er IKKE et område med fartdæmpning?",
    "wrong-answers": ["Gågade", "Cykelgade", "Opholds- og legeområde"],
    "right-answer": ["Motorvej"],
    id: 159,
  },
  {
    "question-title": "Hvor gælder færdselsreglerne ifølge Færdselsloven?",
    "wrong-answers": [
      "Færdselsreglerne gælder kun på offentlige gader og veje",
      "Færdselsreglerne gælder kun på private ejendomme",
      "Færdselsreglerne gælder kun på steder, hvor der er begrænset færdsel",
    ],
    "right-answer": [
      "Færdselsreglerne gælder på alle gader og veje, cykelstier og fortove, pladser, broer og tunneler, passager, stier og lignende steder, hvor der er almindelig færdsel, hvad enten disse steder er offentlige eller private",
    ],
    id: 160,
  },
  {
    "question-title": "Hvor må biler køre ifølge Færdselsloven?",
    "wrong-answers": [
      "Biler må køre på alle dele af vejen",
      "Biler må køre på cykelstier og fortove",
      "Biler må køre på steder, der ikke er bestemt for motorkøretøjer",
    ],
    "right-answer": [
      "Biler må normalt kun køre på den del af vejen, der er bestemt for biler og motorcykler (motorkøretøjer) samt store knallerter",
    ],
    id: 161,
  },
  {
    "question-title": "Hvad skal man rette sig efter ved kørslen?",
    "wrong-answers": [
      "Kun færdselstavler",
      "Kun politiets anvisninger",
      "Kun vejafmærkninger",
    ],
    "right-answer": [
      "Færdselstavler, kørebane striber, færdselssignaler og politiets anvisninger",
    ],
    id: 162,
  },
  {
    "question-title": "Hvornår bruges gul vejafmærkning?",
    "wrong-answers": [
      "Ved normal kørsel",
      "Ved politiets anvisninger",
      "Ved ensrettet færdsel",
    ],
    "right-answer": ["Til midlertidig regulering fx ved vejarbejde"],
    id: 163,
  },
  {
    "question-title":
      "Hvem skal man rette sig efter, selvom færdselstavler, kørebane striber og færdselssignaler viser noget andet?",
    "wrong-answers": ["Ingen", "Andre bilister", "Færdselstavler"],
    "right-answer": ["Politiet"],
    id: 164,
  },
  {
    "question-title": "Hvad betyder færdselstavlen 'Indkørsel forbudt'?",
    "wrong-answers": [
      "Man må ikke parkere her",
      "Man må kun køre i én retning",
      "Man må køre med farligt gods",
    ],
    "right-answer": ["Indkørsel er forbudt"],
    id: 165,
  },
  {
    "question-title":
      "Hvad betyder færdselstavlen 'Kørsel i begge retninger forbudt'?",
    "wrong-answers": [
      "Man må kun køre i én retning",
      "Indkørsel er forbudt",
      "Man må køre med farligt gods",
    ],
    "right-answer": ["Kørsel i begge retninger er forbudt"],
    id: 166,
  },
  {
    "question-title": "Hvad betyder færdselstavlen 'Ensrettet færdsel'?",
    "wrong-answers": [
      "Man må køre i begge retninger",
      "Indkørsel er forbudt",
      "Kørsel med farligt gods er forbudt",
    ],
    "right-answer": ["Færdsel er kun tilladt i én retning"],
    id: 167,
  },
  {
    "question-title":
      "Hvad betyder færdselstavlen 'Motorkøretøj, traktor, motorredskab og stor knallert forbudt'?",
    "wrong-answers": [
      "Man må køre med disse køretøjer",
      "Indkørsel er forbudt",
      "Kørsel i begge retninger er forbudt",
    ],
    "right-answer": ["Disse køretøjer har ikke tilladelse til at køre her"],
    id: 168,
  },
  {
    "question-title":
      "Hvad betyder færdselstavlen 'Kørsel med farligt gods forbudt'?",
    "wrong-answers": [
      "Man må køre med farligt gods",
      "Indkørsel er forbudt",
      "Kørsel i begge retninger er forbudt",
    ],
    "right-answer": ["Kørsel med farligt gods er forbudt"],
    id: 169,
  },
  {
    "question-title": "Hvordan kan færdselsatver være angivet?",
    "wrong-answers": [
      "Kun på advarselstavler",
      "Kun på oplysningstavler",
      "Kun på forbudstavler",
    ],
    "right-answer": ["På orienteringstavler"],
    id: 170,
  },
  {
    "question-title": "Hvordan kan variable færdselsatver være sammensat?",
    "wrong-answers": [
      "Kun af lyskilder",
      "Kun af lameller",
      "Kun af advarselstavler",
    ],
    "right-answer": ["Af lyskilder eller lameller"],
    id: 171,
  },
  {
    "question-title":
      "Hvordan kan visse advarselstavler og forbudstavler anvendes?",
    "wrong-answers": [
      "Som permanente færdselsatver",
      "Som orienteringstavler",
      "Som undertavler",
    ],
    "right-answer": ["Som variable færdselsatver"],
    id: 172,
  },
  {
    "question-title": "Hvordan opbygges midlertidige færdselsatver?",
    "wrong-answers": [
      "Af den aktuelle undertavle og hovedtavle sat på en blå baggrundsplade med hvid kant",
      "Af den aktuelle hovedtavle og undertavle sat på en rød baggrundsplade med hvid kant",
      "Af den aktuelle hovedtavle og undertavle sat på en grøn baggrundsplade med hvid kant",
    ],
    "right-answer": [
      "Af den aktuelle hovedtavle og evt. undertavle sat på en gul baggrundsplade med sort kant",
    ],
    id: 173,
  },
  {
    "question-title":
      "Hvordan kan visse advarselstavler og oplysningstavler anvendes?",
    "wrong-answers": [
      "Som permanente færdselsatver",
      "Som orienteringstavler",
      "Som hovedtavler",
    ],
    "right-answer": ["Som midlertidige færdselsatver"],
    id: 174,
  },
  {
    "question-title": "Hvad giver kørekortkategori B ret til at føre?",
    "wrong-answers": [
      "Lastbil med en tilladt totalvægt over 3.500 kg.",
      "Busser med mere end 8 passagerer, udover føreren.",
      "Motorcykel med mere end to hjul.",
    ],
    "right-answer": [
      "Personbil og varebil på ikke over 3.500 kg tilladt totalvægt. Personbilen må højst være indrettet til befordring af 8 personer foruden føreren.",
    ],
    id: 175,
  },
  {
    "question-title":
      "Hvilken type påhængskøretøj må man trække med kørekortkategori B?",
    "wrong-answers": [
      "Påhængskøretøj med tilladt totalvægt på over 750 kg, hvis bilen og påhængskøretøjet tilsammen overstiger 3.500 kg tilladt totalvægt.",
      "Påhængskøretøj med tilladt totalvægt på over 3.500 kg.",
      "Påhængskøretøj uanset vægt, så længe det er koblet til en personbil.",
    ],
    "right-answer": [
      "Bil med tilkoblet påhængskøretøj med tilladt totalvægt på ikke over 750 kg.",
    ],
    id: 176,
  },
  {
    "question-title":
      "Hvad giver kørekortkategori B ret til at føre, udover biler?",
    "wrong-answers": [
      "Stor motorcykel.",
      "Lastbil.",
      "Busser med mere end 8 passagerer, udover føreren.",
    ],
    "right-answer": [
      "3-hjulet motorcykel, 3-hjulet bil, ATV, traktor, motorredskab samt lille og stor knallert.",
    ],
    id: 177,
  },
  {
    "question-title": "Hvad er en af grundreglerne for færdslen?",
    "wrong-answers": [
      "Man skal køre så hurtigt som muligt for at undgå at forstyrre trafikken",
      "Man skal ignorere dem, der bor eller opholder sig ved vejen",
      "Man behøver ikke at vise særligt hensyn over for børn, skolepatruljer, ældre mennesker og handicappede",
    ],
    "right-answer": [
      "Man skal altid køre hensynsfuldt og agtpågivende, så der ikke opstår fare eller forvolder skade eller ulempe for andre, og således at færdslen ikke unødigt hindres eller forstyrres",
    ],
    id: 178,
  },
  {
    "question-title":
      "Hvem skal man vise hensyn over for ifølge færdselsloven?",
    "wrong-answers": [
      "Kun over for dem, der kører hurtigere end dig",
      "Kun over for dem, der kører i samme retning som dig",
      "Kun over for dem, der kører i større køretøjer end dig",
    ],
    "right-answer": [
      "Man skal også vise hensyn over for dem, der bor eller opholder sig ved vejen",
    ],
    id: 179,
  },
  {
    "question-title":
      "Hvem skal man vise særligt hensyn over for ifølge færdselsloven?",
    "wrong-answers": [
      "Kun over for dem, der kører i sportsvogne",
      "Kun over for dem, der kører i lastbiler",
      "Kun over for dem, der kører i motorcykler",
    ],
    "right-answer": [
      "Man skal vise særligt hensyn over for børn, skolepatruljer, ældre mennesker og handicappede",
    ],
    id: 180,
  },
  {
    "question-title": "Hvornår skal man gøre opmærksom på en fare?",
    "wrong-answers": [
      "Når man har lyst",
      "Når der er dyr på vejen",
      "Når man kører over for rødt",
    ],
    "right-answer": ["Når det er nødvendigt at advare om en fare"],
    id: 181,
  },
  {
    "question-title": "Hvordan skal man advare om en fare?",
    "wrong-answers": [
      "Ved at råbe ud af vinduet",
      "Ved at vifte med hænderne",
      "Ved at bremse hårdt op",
    ],
    "right-answer": [
      "Ved kortvarigt brug af hornet eller ved at blinke med forlygterne",
    ],
    id: 182,
  },
  {
    "question-title":
      "Hvad skal man bruge i lygteændingstiden til at advare om fare?",
    "wrong-answers": ["Lydsignal", "Håndsignal", "Bremselyset"],
    "right-answer": ["Lyssignal"],
    id: 183,
  },
  {
    "question-title": "Hvornår må man bruge hornet?",
    "wrong-answers": [
      "Når man vil sige hej til en ven",
      "Når man er irriteret på en anden bilist",
      "Når man kører i en tunnel",
    ],
    "right-answer": ["Når det er nødvendigt at advare om en fare"],
    id: 184,
  },
  {
    "question-title":
      "Hvornår skal der gives tegn med blinklys ifølge teorien om tegngivning?",
    "wrong-answers": [
      "Før standsning eller hurtig nedsættelse af hastigheden",
      "Ved ventet kødanelse eller anden umiddelbar fare",
      "Når en manøvre er afsluttet",
    ],
    "right-answer": [
      "Før igangsætning fra kørebanekant, før vending og før svingning",
    ],
    id: 185,
  },
  {
    "question-title": "Hvornår skal man på motorvej altid give tegn?",
    "wrong-answers": [
      "Ved standsning eller hurtig nedsættelse af hastigheden",
      "Når en manøvre er afsluttet",
      "Før igangsætning fra kørebanekant, før vending og før svingning",
    ],
    "right-answer": [
      "Før vognbaneskift og ved anden ikke ubetydelig ændring af bilens placering til siden, herunder ved til- og frakørsel",
    ],
    id: 186,
  },
  {
    "question-title":
      "Hvornår skal der gives tegn med stoplys ifølge teorien om tegngivning?",
    "wrong-answers": [
      "Før vognbaneskift",
      "Ved ventet kødanelse eller anden umiddelbar fare",
      "Før igangsætning fra kørebanekant, før vending og før svingning",
    ],
    "right-answer": ["Ved standsning eller hurtig nedsættelse af hastigheden"],
    id: 187,
  },
  {
    "question-title":
      "Hvornår skal havariblink anvendes ifølge teorien om tegngivning?",
    "wrong-answers": [
      "Før vognbaneskift",
      "Ved standsning eller hurtig nedsættelse af hastigheden",
      "Før igangsætning fra kørebanekant, før vending og før svingning",
    ],
    "right-answer": [
      "Ved ventet kødanelse eller anden umiddelbar fare på motorvej. På andre veje inden for tættere bebygget område kan det også anvendes",
    ],
    id: 188,
  },
  {
    "question-title":
      "Hvornår skal tegngivning ophøre ifølge teorien om tegngivning?",
    "wrong-answers": [
      "Før vognbaneskift",
      "Ved standsning eller hurtig nedsættelse af hastigheden",
      "Før igangsætning fra kørebanekant, før vending og før svingning",
    ],
    "right-answer": ["Når en manøvre er afsluttet"],
    id: 189,
  },
  {
    "question-title": "Hvornår skal man anvende nærlys?",
    "wrong-answers": [
      "Kun når det er mørkt",
      "Kun når det regner",
      "Når det er solopgang",
    ],
    "right-answer": ["Under lygteændingstiden"],
    id: 190,
  },
  {
    "question-title": "Hvad kan anvendes i stedet for nærlys?",
    "wrong-answers": ["Langlys", "Ingen lys", "Blinklys"],
    "right-answer": ["Særligt køretøjets tågeforlys"],
    id: 191,
  },
  {
    "question-title": "Hvem skal man give fri passage?",
    "wrong-answers": [
      "Kun forsvarets og redningsberedskabets kolonner",
      "Kun grupper af børn under opsyn af en leder",
      "Kun ligtog og andre sluttede optog",
    ],
    "right-answer": [
      "Grupper af børn under opsyn af en leder, forsvarets og redningsberedskabets kolonner, ligtog og andre sluttede optog",
    ],
    id: 192,
  },
  {
    "question-title": "Hvad skal man gøre, når køretøjer er under udrykning?",
    "wrong-answers": [
      "Fortsætte med samme hastighed",
      "Køre tættere på dem",
      "Ignorere dem",
    ],
    "right-answer": ["Holde vejen åben og om nødvendigt standse"],
    id: 193,
  },
  {
    "question-title": "Hvad må man ikke gøre ved et uheldssted?",
    "wrong-answers": [
      "Hjælpe til med redningsarbejdet",
      "Ring til nødnummeret",
      "Stoppe og vente på hjælp",
    ],
    "right-answer": [
      "Køre så tæt på et uheldssted, at man er i vejen for redningsarbejdet",
    ],
    id: 194,
  },
  {
    "question-title":
      "Hvad er den maksimale bredde en bil må være med eller uden læs?",
    "wrong-answers": ["2,75 m", "2,45 m"],
    "right-answer": ["2,55 m"],
    id: 195,
  },
  {
    "question-title":
      "Hvad er den maksimale længde en bil må være med eller uden læs?",
    "wrong-answers": ["12,5 m", "11,5 m"],
    "right-answer": ["12 m"],
    id: 196,
  },
  {
    "question-title":
      "Hvad er den maksimale højde en bil må være med eller uden læs?",
    "wrong-answers": ["4,5 m", "3,5 m"],
    "right-answer": ["4 m"],
    id: 197,
  },
  {
    "question-title":
      "Hvem har ansvaret for, at passagerer under 15 år anvender sikkerhedsseler eller andet sikkerhedsudstyr?",
    "wrong-answers": ["Passagererne selv", "Bilens ejer"],
    "right-answer": ["Føreren af bilen"],
    id: 198,
  },
  {
    "question-title":
      "Hvad kan børn fra 3-6 år anvende i stedet for sikkerhedsselen?",
    "wrong-answers": ["En almindelig pude", "En oppustelig vest"],
    "right-answer": [
      "Barnestol eller andet godkendt sikkerhedsudstyr tilpasset barnets højde og vægt",
    ],
    id: 199,
  },
  {
    "question-title":
      "Hvad skal børn under 3 år og under 135 cm anvende i stedet for sikkerhedsselen?",
    "wrong-answers": ["En almindelig pude", "En oppustelig vest"],
    "right-answer": [
      "Barnestol eller andet godkendt sikkerhedsudstyr, tilpasset barnets højde og vægt",
    ],
    id: 200,
  },
  {
    "question-title":
      "Hvad skal nye biler være forsynet med i forhold til barnestole?",
    "wrong-answers": [
      "En manual til montering af barnestol",
      "En særlig holder til barnestol",
    ],
    "right-answer": [
      "Advarselsmærkning mod bagudvendte barnestol ved sæder, bortset fra forsæder, hvor der er monteret airbag, medmindre pågældende airbag automatisk træder ud af funktion, når bagudvendte barnestol monteres",
    ],
    id: 201,
  },
  {
    "question-title": "Hvordan skal nakkestøtten indstilles?",
    "wrong-answers": [
      "Nakkestøtten skal indstilles af bilens producent.",
      "Nakkestøtten skal indstilles af en mekaniker.",
      "Nakkestøtten behøver ikke at blive indstillet.",
    ],
    "right-answer": ["Nakkestøtten skal være afpasset af den enkelte bruger."],
    id: 202,
  },
  {
    "question-title": "Hvordan skal gods være anbragt i bilen?",
    "wrong-answers": [
      "Gods skal være anbragt, så det dækker blinklys, lygter og nummerplade.",
      "Gods skal være anbragt, så det støjer unødigt.",
      "Gods skal være anbragt, så det er til fare for føreren eller andre under kørslen.",
    ],
    "right-answer": [
      "Gods skal være anbragt, så det ikke dækker blinklys, lygter og nummerplade, og så det ikke støjer unødigt. Gods skal være anbragt, så det ikke er til fare for føreren eller andre under kørslen. Gods skal være anbragt, så det ikke hindrer kørslen eller vælte ud.",
    ],
    id: 203,
  },
  {
    "question-title": "Hvordan skal gods sikres i bilen?",
    "wrong-answers": [
      "Gods skal sikres mod fremadskridning ved acceleration.",
      "Gods behøver ikke at blive sikret i bilen.",
      "Gods skal sikres med en særlig godssikringsanordning.",
    ],
    "right-answer": ["Gods skal sikres mod fremadskridning ved opbremsning."],
    id: 204,
  },
  {
    "question-title": "Hvordan skal forskelligt gods placeres i bilen?",
    "wrong-answers": [
      "Ved læsning af forskelligt gods er hovedreglen, at letteste placeres nederst og så langt fremme som muligt.",
      "Ved læsning af forskelligt gods er hovedreglen, at tungeste placeres øverst og så langt bagud som muligt.",
      "Ved læsning af forskelligt gods er hovedreglen, at tungeste placeres nederst og så langt bagud som muligt.",
    ],
    "right-answer": [
      "Ved læsning af forskelligt gods er hovedreglen, at tungeste placeres nederst og så langt fremme som muligt.",
    ],
    id: 205,
  },
  {
    "question-title": "Hvordan skal gods, der rager ud over bilen, afmærkes?",
    "wrong-answers": [
      "Gods, der rager mere end 1 m ud over bilens forreste eller bagerste punkt eller mere end 15 cm ud over siderne, skal afmærkes med en rød cylinder.",
      "Gods, der rager mere end 1 m ud over bilens forreste eller bagerste punkt eller mere end 15 cm ud over siderne, behøver ikke at blive afmærket.",
      "Gods, der rager mere end 1 m ud over bilens forreste eller bagerste punkt eller mere end 15 cm ud over siderne, skal afmærkes med en blå klud.",
    ],
    "right-answer": [
      "Gods, der rager mere end 1 m ud over bilens forreste eller bagerste punkt eller mere end 15 cm ud over siderne, skal afmærkes med en klud eller på anden tydelig måde. Ved erhvervsmæssig transport skal godset dog afmærkes med en hvid cylinder, der er 30 cm høj og med en diameter på 10 cm. Cylinderen skal være forsynet med 2 røde refleksbånd. I lygtetændingstiden skal godset, uanset privat eller erhvervsmæssig transport, afmærkes med nævnte cylinder samt rødt lys bagud og hvidt lys fremad.",
    ],
    id: 206,
  },
  {
    "question-title":
      "Hvad skal man gøre ved motorstop på et sted, hvor parkering er forbudt?",
    "wrong-answers": [
      "Man skal lade bilen stå, indtil man kan få hjælp",
      "Man skal sætte en advarselstrekant op lige ved siden af bilen",
      "Man skal tænde havariblinket og vente på hjælp",
    ],
    "right-answer": ["Man skal snarest muligt flytte bilen væk fra stedet"],
    id: 207,
  },
  {
    "question-title": "Hvad skal man gøre ved uventet kødanelse på motorveje?",
    "wrong-answers": [
      "Man skal tænde forlygterne for at advare andre trafikanter",
      "Man skal sætte en advarselstrekant op",
      "Man skal køre ud i nødsporet og vente",
    ],
    "right-answer": [
      "Man skal anvende havariblink for at henlede andre trafikanters opmærksomhed på faren",
    ],
    id: 208,
  },
  {
    "question-title": "Hvornår er brug af havariblink forbudt?",
    "wrong-answers": [
      "Når man holder stille på en parkeringsplads",
      "Når man holder stille i vejsiden for at afhente passagerer",
      "Når man er i bevægelse",
    ],
    "right-answer": [
      "Brug af havariblink i andre tilfælde end nødsituationer er forbudt",
    ],
    id: 209,
  },
  {
    "question-title":
      "Hvad skal man gøre, hvis man har motorstop på en jernbaneoverkørsel?",
    "wrong-answers": [
      "Man skal straks ringe til politiet",
      "Man skal sætte en advarselstrekant op",
      "Man skal prøve at skubbe bilen over skinnerne",
    ],
    "right-answer": ["Man skal, så godt man kan, advare lokoføreren om faren"],
    id: 210,
  },
  {
    "question-title": "Hvad er reglerne for at slæbe en havareret bil?",
    "wrong-answers": [
      "Man må slæbe bilen med et tov, der er op til 10 m langt",
      "Man må slæbe bilen med en hastighed på op til 50 km/t",
      "Man må slæbe bilen, selvom dens bremser ikke er i forskriftsmæssig stand",
    ],
    "right-answer": [
      "Slæbningen skal ske ved hjælp af et solidt tov, en stangforbindelse eller lignende og således at afstanden mellem køretøjerne højst er 4 m. Hastigheden må højst være 30 km/t",
    ],
    id: 211,
  },
  {
    "question-title": "Hvornår er slæbning forbudt?",
    "wrong-answers": [
      "Hvis det slæbte køretøj er en traktor",
      "Hvis det slæbte køretøj er en motorcykel",
      "Hvis det slæbte køretøj er større end det slæbende køretøj",
    ],
    "right-answer": [
      "Slæbning er forbudt, hvis det slæbte køretøjs bremser eller styreapparat ikke er i forskriftsmæssig stand, og man må da overlade slæbningen til et godkendt bjærgningskøretøj eller lignende. Slæbning på motorvej må kun udføres med et godkendt bjærgningskøretøj",
    ],
    id: 212,
  },
  {
    "question-title":
      "Hvad skal man gøre ved alvorlig personskade i en færdselsulykke?",
    "wrong-answers": [
      "Man skal først og fremmest tage billeder af ulykkesstedet",
      "Man skal ringe til sin forsikringsselskab",
      "Man skal ringe til en advokat",
    ],
    "right-answer": [
      "Man skal foretage opkald til alarmcentralen og oplyse om ulykken og eventuelle farer",
    ],
    id: 213,
  },
  {
    "question-title":
      "Hvad skal man gøre hvis man beskadiger færdselsstavler eller andre færdselsanordninger?",
    "wrong-answers": [
      "Man skal ignorere det og fortsætte sin rejse",
      "Man skal tage billeder og sende dem til sin forsikringsselskab",
      "Man skal købe en ny færdselsstavle og erstatte den beskadigede",
    ],
    "right-answer": [
      "Man skal straks bringe afmærkningen i orden igen, hvis det er muligt. Hvis ikke, skal man underrette politiet",
    ],
    id: 214,
  },
  {
    "question-title":
      "Hvad skal man gøre hvis man bliver indblandet i en færdselsulykke?",
    "wrong-answers": [
      "Man skal hurtigt forlade ulykkesstedet",
      "Man skal vente på politiet før man hjælper de tilskadekomne",
      "Man skal tage billeder af ulykken og sende dem til sin forsikringsselskab",
    ],
    "right-answer": [
      "Man skal straks standse og hjælpe tilskadekomne, og oplyse navn og adresse til andre indblandede",
    ],
    id: 215,
  },
  {
    "question-title":
      "Hvad skal man gøre hvis man har voldt mere end ubetydelig skade på personer i en færdselsulykke?",
    "wrong-answers": [
      "Man skal forsøge at forhandle med den skadede person om kompensation",
      "Man skal ændre på forholdene på ulykkesstedet for at minimere skaden",
      "Man skal fjerne spor på ulykkesstedet",
    ],
    "right-answer": [
      "Man skal melde det til politiet og ikke ændre på forholdene eller fjerne spor på ulykkesstedet",
    ],
    id: 216,
  },
  {
    "question-title":
      "Hvad skal man gøre hvis man har forvoldt skade på en andens ejendom eller ting i en færdselsulykke?",
    "wrong-answers": [
      "Man skal forsøge at reparere skaden selv",
      "Man skal ignorere det og fortsætte sin rejse",
      "Man skal kontakte ejeren og forhandle om kompensation",
    ],
    "right-answer": ["Man skal underrette skadelidte eller politiet herom"],
    id: 217,
  },
  {
    "question-title":
      "Hvem skal kunne dække eventuelle erstatningskrav ved en lovpligtig ansvarsforsikring for et motordrevet køretøj?",
    "wrong-answers": [
      "Den person, der har midlertidig rådighed over køretøjet",
      "Den person, der har designet køretøjet",
    ],
    "right-answer": [
      "Ejeren af køretøjet eller den person (brugeren), der har varig rådighed over køretøjet",
    ],
    id: 218,
  },
  {
    "question-title":
      "Er det tilladt at overlade føringen af et køretøj til personer, der ikke er i besiddelse af et gyldigt kørekort til denne?",
    "wrong-answers": [
      "Ja, det er tilladt i nødsituationer",
      "Ja, det er tilladt, hvis personen har et udløbet kørekort",
    ],
    "right-answer": [
      "Nej, det er forbudt at overlade føringen af et køretøj til personer, der ikke er i besiddelse af et gyldigt kørekort til denne",
    ],
    id: 219,
  },
  {
    "question-title": "Hvad skal man altid gøre ved igangsætning fra vejkant?",
    "wrong-answers": [
      "Man skal altid tænde lyset",
      "Man skal altid tjekke spejlene",
      "Man skal altid sige 'klar' til passagererne",
    ],
    "right-answer": ["Man skal altid give tegn"],
    id: 220,
  },
  {
    "question-title": "Hvad er bremselængden?",
    "wrong-answers": [
      "Det er den tid det tager at bremse bilen helt ned",
      "Det er den afstand bilen kører, fra man ser en forhindring, til man begynder at bremse",
      "Det er den afstand bilen kører, mens man træder på bremsen",
    ],
    "right-answer": [
      "Det er det stykke vej, bilen kører, fra bremsningen påbegyndes, og indtil bilen står stille",
    ],
    id: 221,
  },
  {
    "question-title": "Hvad afhænger bremselængden af?",
    "wrong-answers": ["Bilens vægt", "Bilens hastighed", "Vejen tilstand"],
    "right-answer": [
      "Bilens hastighed samt hvor hårdt man træder på bremsepedalen",
    ],
    id: 222,
  },
  {
    "question-title":
      "Hvad sker der med bremselængden, hvis man fordobler hastigheden?",
    "wrong-answers": ["Den halveres", "Den fordobles", "Den tredobles"],
    "right-answer": ["Den firedobles"],
    id: 223,
  },
  {
    "question-title":
      "Hvordan skal man køre forbi heller, færdselsfyr eller lignende?",
    "wrong-answers": [
      "Man skal altid køre forbi til venstre",
      "Man skal altid køre forbi i midten",
      "Man skal altid køre forbi i den side, der er mest plads",
    ],
    "right-answer": [
      "Man skal køre forbi til højre, medmindre andet er vist ved afmærkning, eller vejen er ensrettet",
    ],
    id: 224,
  },
];
