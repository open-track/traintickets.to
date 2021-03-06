
/**
 * Three character CRS code
 */
export type CRS = string;

/**
 * Location (mostly physical stations, some logical group stations)
 */
export interface Location {
  name: string;
  code: CRS;
  lat: number;
  lon: number;
}

export const locations: Location[] = [
  {
    "code": "1072",
    "name": "London",
    "lat": 51.512345,
    "lon": -0.109863
  },
  {
    "code": "0410",
    "name": "Bedford Stations",
    "lat": 52.135973,
    "lon": -0.466655
  },
  {
    "code": "0418",
    "name": "Birmingham",
    "lat": 52.486243,
    "lon": -1.890401
  },
  {
    "code": "1780",
    "name": "Bootle (Merseyside)",
    "lat": 53.443255,
    "lon": -2.998895
  },
  {
    "code": "0424",
    "name": "Bradford (West Yorkshire)",
    "lat": 53.795984,
    "lon": -1.759398
  },
  {
    "code": "0428",
    "name": "Canterbury",
    "lat": 51.280233,
    "lon": 1.078909
  },
  {
    "code": "0258",
    "name": "Catford Stations",
    "lat": 51.444641,
    "lon": -0.020106
  },
  {
    "code": "0254",
    "name": "Colchester Stations",
    "lat": 51.895927,
    "lon": 0.891874
  },
  {
    "code": "0449",
    "name": "Croydon",
    "lat": 51.376165,
    "lon": -0.098234
  },
  {
    "code": "0429",
    "name": "Dorchester",
    "lat": 50.711164,
    "lon": -2.441181
  },
  {
    "code": "0416",
    "name": "Dorking Stations",
    "lat": 51.232202,
    "lon": -0.332378
  },
  {
    "code": "0259",
    "name": "Edenbridge Stations",
    "lat": 51.196259,
    "lon": 0.065451
  },
  {
    "code": "0263",
    "name": "Enfield",
    "lat": 51.652299,
    "lon": -0.080712
  },
  {
    "code": "0431",
    "name": "Falkirk",
    "lat": 56.001878,
    "lon": -3.783913
  },
  {
    "code": "0260",
    "name": "Farnborough",
    "lat": 51.0000,
    "lon": 0.0000
  },
  {
    "code": "0432",
    "name": "Folkestone",
    "lat": 51.286894,
    "lon": -0.752615
  },
  {
    "code": "0433",
    "name": "Glasgow",
    "lat": 55.864237,
    "lon": -4.251806
  },
  {
    "code": "0404",
    "name": "Helensburgh",
    "lat": 56.002318,
    "lon": -4.734014
  },
  {
    "code": "0413",
    "name": "Hertford",
    "lat": 51.795756,
    "lon": -0.081157
  },
  {
    "code": "0435",
    "name": "Liverpool",
    "lat": 53.408371,
    "lon": -2.991573
  },
  {
    "code": "0437",
    "name": "Maidstone",
    "lat": 51.270363,
    "lon": 0.522699
  },
  {
    "code": "0438",
    "name": "Manchester",
    "lat": 53.480759,
    "lon": -2.242631
  },
  {
    "code": "0441",
    "name": "Newark",
    "lat": 53.070039,
    "lon": -0.806570
  },
  {
    "code": "0262",
    "name": "Penge",
    "lat": 51.413876,
    "lon": -0.051703
  },
  {
    "code": "0268",
    "name": "Pontefract",
    "lat": 53.691688,
    "lon": -1.308648
  },
  {
    "code": "0440",
    "name": "Portsmouth",
    "lat": 50.819767,
    "lon": -1.087977
  },
  {
    "code": "0403",
    "name": "Reading Stations",
    "lat": 51.454265,
    "lon": -0.978130
  },
  {
    "code": "0411",
    "name": "Southend",
    "lat": 51.545927,
    "lon": 0.707712
  },
  {
    "code": "0271",
    "name": "Thorne",
    "lat": 53.610421,
    "lon": -0.961440
  },
  {
    "code": "7468",
    "name": "Tilbury",
    "lat": 51.463024,
    "lon": 0.360498
  },
  {
    "code": "0443",
    "name": "Tyndrum",
    "lat": 56.436070,
    "lon": -4.711762
  },
  {
    "code": "0265",
    "name": "West Hampstead",
    "lat": 51.547358,
    "lon": -0.190436
  },
  {
    "code": "0444",
    "name": "Wakefield",
    "lat": 53.683298,
    "lon": -1.505924
  },
  {
    "code": "0445",
    "name": "Warrington",
    "lat": 53.390044,
    "lon": -2.596950
  },
  {
    "code": "0446",
    "name": "Wigan",
    "lat": 53.545065,
    "lon": -2.632507
  },
  {
    "code": "0447",
    "name": "Worcester",
    "lat": 52.193636,
    "lon": -2.221575
  },

  { "code": "0782", "name": "Heathrow Underground", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0785", "name": "London Underground Zone 1", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0786", "name": "London Underground and DLR Zones 1-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0790", "name": "London Underground and DLR Zones 1-2", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0791", "name": "London Underground and DLR Zones 1-3", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0792", "name": "London Underground and DLR Zones 1-4", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0793", "name": "London Underground and DLR Zone 2", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0797", "name": "London Underground and DLR Zones 2-3", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0825", "name": "London Underground and DLR Zones 2-4", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0829", "name": "London Underground and DLR Zones 2-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0830", "name": "London Underground and DLR Zone 3", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0835", "name": "London Underground and DLR Zones 3-4", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0839", "name": "London Underground and DLR Zones 3-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0841", "name": "London Underground Zone 4", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0844", "name": "London Underground and DLR Zones 4-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0847", "name": "London Underground Zones 5-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "4452", "name": "London Thameslink", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0035", "name": "London Travelcard Zones 1-6", "lat": 51.52814, "lon": -0.13392 },
  { "code": "0034", "name": "London Travelcard Zones 1-4", "lat": 51.52814, "lon": -0.13392 },

  {
    "name": "Alexandra Palace",
    "code": "AAP",
    "lat": 51.59793,
    "lon": -0.12023
  },
  {
    "name": "Achanalt",
    "code": "AAT",
    "lat": 57.60958,
    "lon": -4.91386
  },
  {
    "name": "Aberdare",
    "code": "ABA",
    "lat": 51.71506,
    "lon": -3.4431
  },
  {
    "name": "Altnabreac",
    "code": "ABC",
    "lat": 58.38813,
    "lon": -3.70629
  },
  {
    "name": "Aberdeen",
    "code": "ABD",
    "lat": 57.14369,
    "lon": -2.09869
  },
  {
    "name": "Aber",
    "code": "ABE",
    "lat": 51.57496,
    "lon": -3.22984
  },
  {
    "name": "Ashurst (Kent) - Bald Faced Stag PH",
    "code": "ABF",
    "lat": 51.1307,
    "lon": 0.15847
  },
  {
    "name": "Abererch",
    "code": "ABH",
    "lat": 52.8986,
    "lon": -4.3742
  },
  {
    "name": "Abbey Wood (London)",
    "code": "ABW",
    "lat": 51.49107,
    "lon": 0.12141
  },
  {
    "name": "Ashburys",
    "code": "ABY",
    "lat": 53.47166,
    "lon": -2.19444
  },
  {
    "name": "Acton Bridge",
    "code": "ACB",
    "lat": 53.26652,
    "lon": -2.60312
  },
  {
    "name": "Acton Central",
    "code": "ACC",
    "lat": 51.50872,
    "lon": -0.26297
  },
  {
    "name": "Acocks Green",
    "code": "ACG",
    "lat": 52.44933,
    "lon": -1.81898
  },
  {
    "name": "Achnashellach",
    "code": "ACH",
    "lat": 57.48205,
    "lon": -5.33306
  },
  {
    "name": "Acklington",
    "code": "ACK",
    "lat": 55.3071,
    "lon": -1.65184
  },
  {
    "name": "Acle",
    "code": "ACL",
    "lat": 52.63471,
    "lon": 1.54393
  },
  {
    "name": "Achnasheen",
    "code": "ACN",
    "lat": 57.57927,
    "lon": -5.07233
  },
  {
    "name": "Accrington",
    "code": "ACR",
    "lat": 53.75298,
    "lon": -2.36955
  },
  {
    "name": "Ascot",
    "code": "ACT",
    "lat": 51.40625,
    "lon": -0.67583
  },
  {
    "name": "Abercynon",
    "code": "ACY",
    "lat": 51.64345,
    "lon": -3.32858
  },
  {
    "name": "Adlington (Cheshire)",
    "code": "ADC",
    "lat": 53.31957,
    "lon": -2.13356
  },
  {
    "name": "Adderley Park",
    "code": "ADD",
    "lat": 52.48309,
    "lon": -1.85594
  },
  {
    "name": "Ardwick",
    "code": "ADK",
    "lat": 53.47157,
    "lon": -2.21432
  },
  {
    "name": "Adlington (Lancs)",
    "code": "ADL",
    "lat": 53.61326,
    "lon": -2.60307
  },
  {
    "name": "Adisham",
    "code": "ADM",
    "lat": 51.2412,
    "lon": 1.1991
  },
  {
    "name": "Ardrossan Town",
    "code": "ADN",
    "lat": 55.6397,
    "lon": -4.81267
  },
  {
    "name": "Airdrie",
    "code": "ADR",
    "lat": 55.86397,
    "lon": -3.9829
  },
  {
    "name": "Ardrossan Harbour",
    "code": "ADS",
    "lat": 55.63986,
    "lon": -4.82111
  },
  {
    "name": "Andover",
    "code": "ADV",
    "lat": 51.21155,
    "lon": -1.49224
  },
  {
    "name": "Addiewell",
    "code": "ADW",
    "lat": 55.8434,
    "lon": -3.60652
  },
  {
    "name": "Ashford International",
    "code": "AFK",
    "lat": 51.14371,
    "lon": 0.87621
  },
  {
    "name": "Ashford (Surrey)",
    "code": "AFS",
    "lat": 51.43651,
    "lon": -0.46806
  },
  {
    "name": "Ansdell & Fairhaven",
    "code": "AFV",
    "lat": 53.74147,
    "lon": -2.99304
  },
  {
    "name": "Abergele & Pensarn",
    "code": "AGL",
    "lat": 53.29459,
    "lon": -3.58263
  },
  {
    "name": "Angel Road",
    "code": "AGR",
    "lat": 51.61241,
    "lon": -0.04878
  },
  {
    "name": "Argyle Street",
    "code": "AGS",
    "lat": 55.85729,
    "lon": -4.25069
  },
  {
    "name": "Aldrington",
    "code": "AGT",
    "lat": 50.83638,
    "lon": -0.18382
  },
  {
    "name": "Abergavenny",
    "code": "AGV",
    "lat": 51.81669,
    "lon": -3.00966
  },
  {
    "name": "Ashtead",
    "code": "AHD",
    "lat": 51.31787,
    "lon": -0.30757
  },
  {
    "name": "Ashton-under-Lyne",
    "code": "AHN",
    "lat": 53.49128,
    "lon": -2.09431
  },
  {
    "name": "Ashurst (Kent)",
    "code": "AHS",
    "lat": 51.12866,
    "lon": 0.15266
  },
  {
    "name": "Aldershot",
    "code": "AHT",
    "lat": 51.24642,
    "lon": -0.75986
  },
  {
    "name": "Ash Vale",
    "code": "AHV",
    "lat": 51.27225,
    "lon": -0.72165
  },
  {
    "name": "Aigburth",
    "code": "AIG",
    "lat": 53.36458,
    "lon": -2.92716
  },
  {
    "name": "Aintree",
    "code": "AIN",
    "lat": 53.47392,
    "lon": -2.95629
  },
  {
    "name": "Airbles",
    "code": "AIR",
    "lat": 55.78282,
    "lon": -3.99418
  },
  {
    "name": "Albrighton",
    "code": "ALB",
    "lat": 52.63796,
    "lon": -2.26891
  },
  {
    "name": "Alderley Edge",
    "code": "ALD",
    "lat": 53.3038,
    "lon": -2.2368
  },
  {
    "name": "Alfreton",
    "code": "ALF",
    "lat": 53.10046,
    "lon": -1.36969
  },
  {
    "name": "Aslockton",
    "code": "ALK",
    "lat": 52.95157,
    "lon": -0.89809
  },
  {
    "name": "Alnmouth",
    "code": "ALM",
    "lat": 55.39277,
    "lon": -1.63664
  },
  {
    "name": "Althorne",
    "code": "ALN",
    "lat": 51.64788,
    "lon": 0.7525
  },
  {
    "name": "Alloa",
    "code": "ALO",
    "lat": 56.11778,
    "lon": -3.79005
  },
  {
    "name": "Althorpe",
    "code": "ALP",
    "lat": 53.58552,
    "lon": -0.73318
  },
  {
    "name": "Alresford (Essex)",
    "code": "ALR",
    "lat": 51.85401,
    "lon": 0.99745
  },
  {
    "name": "Altrincham",
    "code": "ALT",
    "lat": 53.38773,
    "lon": -2.34689
  },
  {
    "name": "Alvechurch",
    "code": "ALV",
    "lat": 52.34608,
    "lon": -1.96766
  },
  {
    "name": "Allens West",
    "code": "ALW",
    "lat": 54.52463,
    "lon": -1.36112
  },
  {
    "name": "Alexandria",
    "code": "ALX",
    "lat": 55.98507,
    "lon": -4.57747
  },
  {
    "name": "Ambergate",
    "code": "AMB",
    "lat": 53.06054,
    "lon": -1.48069
  },
  {
    "name": "Ammanford",
    "code": "AMF",
    "lat": 51.79598,
    "lon": -3.99677
  },
  {
    "name": "Acton Main Line",
    "code": "AML",
    "lat": 51.51719,
    "lon": -0.26676
  },
  {
    "name": "Amersham",
    "code": "AMR",
    "lat": 51.67421,
    "lon": -0.60759
  },
  {
    "name": "Aldermaston",
    "code": "AMT",
    "lat": 51.40196,
    "lon": -1.13742
  },
  {
    "name": "Amberley",
    "code": "AMY",
    "lat": 50.89667,
    "lon": -0.54199
  },
  {
    "name": "Ancaster",
    "code": "ANC",
    "lat": 52.98771,
    "lon": -0.53562
  },
  {
    "name": "Anderston",
    "code": "AND",
    "lat": 55.85988,
    "lon": -4.27097
  },
  {
    "name": "Ashurst New Forest",
    "code": "ANF",
    "lat": 50.88984,
    "lon": -1.52664
  },
  {
    "name": "Angmering",
    "code": "ANG",
    "lat": 50.81657,
    "lon": -0.48939
  },
  {
    "name": "Anniesland",
    "code": "ANL",
    "lat": 55.88934,
    "lon": -4.32195
  },
  {
    "name": "Annan",
    "code": "ANN",
    "lat": 54.98384,
    "lon": -3.26258
  },
  {
    "name": "Ainsdale",
    "code": "ANS",
    "lat": 53.60205,
    "lon": -3.04266
  },
  {
    "name": "Anerley",
    "code": "ANZ",
    "lat": 51.41215,
    "lon": -0.06588
  },
  {
    "name": "Alton",
    "code": "AON",
    "lat": 51.15196,
    "lon": -0.96692
  },
  {
    "name": "Appley Bridge",
    "code": "APB",
    "lat": 53.57869,
    "lon": -2.71925
  },
  {
    "name": "Appledore (Kent)",
    "code": "APD",
    "lat": 51.03324,
    "lon": 0.81636
  },
  {
    "name": "Appleford",
    "code": "APF",
    "lat": 51.63964,
    "lon": -1.24214
  },
  {
    "name": "Aspley Guise",
    "code": "APG",
    "lat": 52.02125,
    "lon": -0.63233
  },
  {
    "name": "Newcastle Airport Metro Station",
    "code": "APN",
    "lat": 55.03595,
    "lon": -1.71105
  },
  {
    "name": "Appleby",
    "code": "APP",
    "lat": 54.58035,
    "lon": -2.48669
  },
  {
    "name": "Apsley",
    "code": "APS",
    "lat": 51.73252,
    "lon": -0.46292
  },
  {
    "name": "Apperley Bridge",
    "code": "APY",
    "lat": 53.84176,
    "lon": -1.70583
  },
  {
    "name": "Arbroath",
    "code": "ARB",
    "lat": 56.55957,
    "lon": -2.58894
  },
  {
    "name": "Ardgay",
    "code": "ARD",
    "lat": 57.88143,
    "lon": -4.3621
  },
  {
    "name": "Arisaig",
    "code": "ARG",
    "lat": 56.91252,
    "lon": -5.83907
  },
  {
    "name": "Arlesey",
    "code": "ARL",
    "lat": 52.02604,
    "lon": -0.26632
  },
  {
    "name": "Armadale (W Lothian)",
    "code": "ARM",
    "lat": 55.8857,
    "lon": -3.69541
  },
  {
    "name": "Arnside",
    "code": "ARN",
    "lat": 54.20273,
    "lon": -2.82824
  },
  {
    "name": "Arram",
    "code": "ARR",
    "lat": 53.88435,
    "lon": -0.42656
  },
  {
    "name": "Arrochar & Tarbet",
    "code": "ART",
    "lat": 56.20396,
    "lon": -4.72276
  },
  {
    "name": "Arundel",
    "code": "ARU",
    "lat": 50.8482,
    "lon": -0.54617
  },
  {
    "name": "Ardrossan South Beach",
    "code": "ASB",
    "lat": 55.64141,
    "lon": -4.80121
  },
  {
    "name": "Ashchurch for Tewkesbury",
    "code": "ASC",
    "lat": 51.99891,
    "lon": -2.10877
  },
  {
    "name": "Ashfield",
    "code": "ASF",
    "lat": 55.88891,
    "lon": -4.24921
  },
  {
    "name": "Alsager",
    "code": "ASG",
    "lat": 53.09302,
    "lon": -2.29906
  },
  {
    "name": "Ash",
    "code": "ASH",
    "lat": 51.2496,
    "lon": -0.7128
  },
  {
    "name": "Askam",
    "code": "ASK",
    "lat": 54.18894,
    "lon": -3.20452
  },
  {
    "name": "Addlestone",
    "code": "ASN",
    "lat": 51.37305,
    "lon": -0.48445
  },
  {
    "name": "Aspatria",
    "code": "ASP",
    "lat": 54.75896,
    "lon": -3.33188
  },
  {
    "name": "Alness",
    "code": "ASS",
    "lat": 57.69438,
    "lon": -4.24973
  },
  {
    "name": "Aston",
    "code": "AST",
    "lat": 52.50424,
    "lon": -1.87193
  },
  {
    "name": "Ashley",
    "code": "ASY",
    "lat": 53.35574,
    "lon": -2.34146
  },
  {
    "name": "Attenborough",
    "code": "ATB",
    "lat": 52.90623,
    "lon": -1.23142
  },
  {
    "name": "Atherstone",
    "code": "ATH",
    "lat": 52.57898,
    "lon": -1.55281
  },
  {
    "name": "Attleborough",
    "code": "ATL",
    "lat": 52.51457,
    "lon": 1.02236
  },
  {
    "name": "Atherton",
    "code": "ATN",
    "lat": 53.52916,
    "lon": -2.47898
  },
  {
    "name": "Attadale",
    "code": "ATT",
    "lat": 57.39502,
    "lon": -5.45557
  },
  {
    "name": "Audley End",
    "code": "AUD",
    "lat": 52.00445,
    "lon": 0.20731
  },
  {
    "name": "Aughton Park",
    "code": "AUG",
    "lat": 53.55426,
    "lon": -2.89522
  },
  {
    "name": "Ardlui",
    "code": "AUI",
    "lat": 56.30195,
    "lon": -4.72164
  },
  {
    "name": "Auchinleck",
    "code": "AUK",
    "lat": 55.47027,
    "lon": -4.29535
  },
  {
    "name": "Aberdour",
    "code": "AUR",
    "lat": 56.05458,
    "lon": -3.30056
  },
  {
    "name": "Ascott-under-Wychwood",
    "code": "AUW",
    "lat": 51.86734,
    "lon": -1.56406
  },
  {
    "name": "Avoncliff",
    "code": "AVF",
    "lat": 51.33965,
    "lon": -2.28134
  },
  {
    "name": "Aviemore",
    "code": "AVM",
    "lat": 57.1885,
    "lon": -3.82887
  },
  {
    "name": "Avonmouth",
    "code": "AVN",
    "lat": 51.50035,
    "lon": -2.69948
  },
  {
    "name": "Aylesbury Vale Parkway",
    "code": "AVP",
    "lat": 51.83117,
    "lon": -0.86018
  },
  {
    "name": "Aberdovey",
    "code": "AVY",
    "lat": 52.54397,
    "lon": -4.05708
  },
  {
    "name": "Adwick",
    "code": "AWK",
    "lat": 53.57234,
    "lon": -1.18036
  },
  {
    "name": "Ashwell & Morden",
    "code": "AWM",
    "lat": 52.03078,
    "lon": -0.10978
  },
  {
    "name": "Armathwaite",
    "code": "AWT",
    "lat": 54.80947,
    "lon": -2.77208
  },
  {
    "name": "Axminster",
    "code": "AXM",
    "lat": 50.77926,
    "lon": -3.00475
  },
  {
    "name": "Alexandra Parade",
    "code": "AXP",
    "lat": 55.86316,
    "lon": -4.21064
  },
  {
    "name": "Aylesham",
    "code": "AYH",
    "lat": 51.22726,
    "lon": 1.20946
  },
  {
    "name": "Aylesford",
    "code": "AYL",
    "lat": 51.30132,
    "lon": 0.46618
  },
  {
    "name": "Albany Park",
    "code": "AYP",
    "lat": 51.43545,
    "lon": 0.12575
  },
  {
    "name": "Ayr",
    "code": "AYR",
    "lat": 55.45813,
    "lon": -4.62587
  },
  {
    "name": "Aylesbury",
    "code": "AYS",
    "lat": 51.8139,
    "lon": -0.81509
  },
  {
    "name": "Aberystwyth",
    "code": "AYW",
    "lat": 52.41406,
    "lon": -4.08191
  },
  {
    "name": "Barnham",
    "code": "BAA",
    "lat": 50.83089,
    "lon": -0.63968
  },
  {
    "name": "Balcombe",
    "code": "BAB",
    "lat": 51.05551,
    "lon": -0.13693
  },
  {
    "name": "Bache",
    "code": "BAC",
    "lat": 53.2088,
    "lon": -2.89168
  },
  {
    "name": "Banstead",
    "code": "BAD",
    "lat": 51.32935,
    "lon": -0.21316
  },
  {
    "name": "Bagshot",
    "code": "BAG",
    "lat": 51.36437,
    "lon": -0.68866
  },
  {
    "name": "Bank Hall",
    "code": "BAH",
    "lat": 53.4375,
    "lon": -2.98752
  },
  {
    "name": "Blairhill",
    "code": "BAI",
    "lat": 55.86644,
    "lon": -4.04328
  },
  {
    "name": "Baglan",
    "code": "BAJ",
    "lat": 51.61554,
    "lon": -3.81116
  },
  {
    "name": "Battersea Park",
    "code": "BAK",
    "lat": 51.47696,
    "lon": -0.14753
  },
  {
    "name": "Balham",
    "code": "BAL",
    "lat": 51.44323,
    "lon": -0.15242
  },
  {
    "name": "Bamford",
    "code": "BAM",
    "lat": 53.33901,
    "lon": -1.68908
  },
  {
    "name": "Banbury",
    "code": "BAN",
    "lat": 52.06031,
    "lon": -1.32813
  },
  {
    "name": "Bare Lane",
    "code": "BAR",
    "lat": 54.07455,
    "lon": -2.83533
  },
  {
    "name": "Bere Alston",
    "code": "BAS",
    "lat": 50.48559,
    "lon": -4.2004
  },
  {
    "name": "Battle",
    "code": "BAT",
    "lat": 50.91291,
    "lon": 0.49471
  },
  {
    "name": "Barton-on-Humber",
    "code": "BAU",
    "lat": 53.68893,
    "lon": -0.44343
  },
  {
    "name": "Barrow Haven",
    "code": "BAV",
    "lat": 53.69743,
    "lon": -0.39295
  },
  {
    "name": "Blackwater",
    "code": "BAW",
    "lat": 51.33158,
    "lon": -0.77674
  },
  {
    "name": "Bayford",
    "code": "BAY",
    "lat": 51.75772,
    "lon": -0.0956
  },
  {
    "name": "Bishopbriggs",
    "code": "BBG",
    "lat": 55.90386,
    "lon": -4.22491
  },
  {
    "name": "Bilbrook",
    "code": "BBK",
    "lat": 52.62373,
    "lon": -2.18609
  },
  {
    "name": "Bat & Ball",
    "code": "BBL",
    "lat": 51.28976,
    "lon": 0.19424
  },
  {
    "name": "Blackburn",
    "code": "BBN",
    "lat": 53.74653,
    "lon": -2.47913
  },
  {
    "name": "Bordesley",
    "code": "BBS",
    "lat": 52.47188,
    "lon": -1.87776
  },
  {
    "name": "Berry Brow",
    "code": "BBW",
    "lat": 53.62105,
    "lon": -1.79343
  },
  {
    "name": "Burscough Bridge",
    "code": "BCB",
    "lat": 53.60527,
    "lon": -2.84088
  },
  {
    "name": "Beccles",
    "code": "BCC",
    "lat": 52.45854,
    "lon": 1.56951
  },
  {
    "name": "Bracknell",
    "code": "BCE",
    "lat": 51.41309,
    "lon": -0.7517
  },
  {
    "name": "Beaconsfield",
    "code": "BCF",
    "lat": 51.61129,
    "lon": -0.64382
  },
  {
    "name": "Birchgrove",
    "code": "BCG",
    "lat": 51.52156,
    "lon": -3.20186
  },
  {
    "name": "Birchington-on-Sea",
    "code": "BCH",
    "lat": 51.3775,
    "lon": 1.30142
  },
  {
    "name": "Burscough Junction",
    "code": "BCJ",
    "lat": 53.59754,
    "lon": -2.84061
  },
  {
    "name": "Buckley",
    "code": "BCK",
    "lat": 53.16305,
    "lon": -3.05594
  },
  {
    "name": "Branchton",
    "code": "BCN",
    "lat": 55.94058,
    "lon": -4.80354
  },
  {
    "name": "Bicester North",
    "code": "BCS",
    "lat": 51.90349,
    "lon": -1.15038
  },
  {
    "name": "Brockenhurst",
    "code": "BCU",
    "lat": 50.81683,
    "lon": -1.57354
  },
  {
    "name": "Bruce Grove",
    "code": "BCV",
    "lat": 51.59397,
    "lon": -0.06986
  },
  {
    "name": "Brockley",
    "code": "BCY",
    "lat": 51.46465,
    "lon": -0.03753
  },
  {
    "name": "Brundall",
    "code": "BDA",
    "lat": 52.61951,
    "lon": 1.43931
  },
  {
    "name": "Broadbottom",
    "code": "BDB",
    "lat": 53.44099,
    "lon": -2.01651
  },
  {
    "name": "Bridgeton",
    "code": "BDG",
    "lat": 55.84895,
    "lon": -4.22605
  },
  {
    "name": "Bedhampton",
    "code": "BDH",
    "lat": 50.85394,
    "lon": -0.99582
  },
  {
    "name": "Bradford Interchange",
    "code": "BDI",
    "lat": 53.79109,
    "lon": -1.7496
  },
  {
    "name": "Baldock",
    "code": "BDK",
    "lat": 51.99288,
    "lon": -0.18756
  },
  {
    "name": "Birkdale",
    "code": "BDL",
    "lat": 53.63407,
    "lon": -3.01446
  },
  {
    "name": "Bedford",
    "code": "BDM",
    "lat": 52.1362,
    "lon": -0.47944
  },
  {
    "name": "Brading",
    "code": "BDN",
    "lat": 50.67836,
    "lon": -1.13872
  },
  {
    "name": "Bradford Forster Square",
    "code": "BDQ",
    "lat": 53.79693,
    "lon": -1.75296
  },
  {
    "name": "Bridlington",
    "code": "BDT",
    "lat": 54.08415,
    "lon": -0.19872
  },
  {
    "name": "Bedwyn",
    "code": "BDW",
    "lat": 51.37963,
    "lon": -1.5988
  },
  {
    "name": "Bredbury",
    "code": "BDY",
    "lat": 53.42317,
    "lon": -2.11049
  },
  {
    "name": "Bridge of Allan",
    "code": "BEA",
    "lat": 56.15662,
    "lon": -3.95723
  },
  {
    "name": "Bebington",
    "code": "BEB",
    "lat": 53.35767,
    "lon": -3.00364
  },
  {
    "name": "Beckenham Hill",
    "code": "BEC",
    "lat": 51.42458,
    "lon": -0.01594
  },
  {
    "name": "Beeston",
    "code": "BEE",
    "lat": 52.92077,
    "lon": -1.20766
  },
  {
    "name": "Benfleet",
    "code": "BEF",
    "lat": 51.54395,
    "lon": 0.56172
  },
  {
    "name": "Beltring",
    "code": "BEG",
    "lat": 51.2047,
    "lon": 0.4035
  },
  {
    "name": "Bedworth",
    "code": "BEH",
    "lat": 52.47931,
    "lon": -1.46739
  },
  {
    "name": "Beauly",
    "code": "BEL",
    "lat": 57.47827,
    "lon": -4.46987
  },
  {
    "name": "Bempton",
    "code": "BEM",
    "lat": 54.12767,
    "lon": -0.18046
  },
  {
    "name": "Bentham",
    "code": "BEN",
    "lat": 54.11553,
    "lon": -2.51068
  },
  {
    "name": "Bearley",
    "code": "BER",
    "lat": 52.24442,
    "lon": -1.75026
  },
  {
    "name": "Bescar Lane",
    "code": "BES",
    "lat": 53.62387,
    "lon": -2.91461
  },
  {
    "name": "Bethnal Green",
    "code": "BET",
    "lat": 51.52392,
    "lon": -0.05956
  },
  {
    "name": "Beaulieu Road",
    "code": "BEU",
    "lat": 50.85504,
    "lon": -1.50476
  },
  {
    "name": "Beverley",
    "code": "BEV",
    "lat": 53.84229,
    "lon": -0.42297
  },
  {
    "name": "Bexhill",
    "code": "BEX",
    "lat": 50.84104,
    "lon": 0.47703
  },
  {
    "name": "Ben Rhydding",
    "code": "BEY",
    "lat": 53.92573,
    "lon": -1.79743
  },
  {
    "name": "Brentford",
    "code": "BFD",
    "lat": 51.48755,
    "lon": -0.30965
  },
  {
    "name": "Bere Ferrers",
    "code": "BFE",
    "lat": 50.45127,
    "lon": -4.18148
  },
  {
    "name": "Blaenau Ffestiniog",
    "code": "BFF",
    "lat": 52.99457,
    "lon": -3.9386
  },
  {
    "name": "Byfleet & New Haw",
    "code": "BFN",
    "lat": 51.3498,
    "lon": -0.48138
  },
  {
    "name": "London Blackfriars",
    "code": "BFR",
    "lat": 51.51181,
    "lon": -0.10333
  },
  {
    "name": "Brundall Gardens",
    "code": "BGA",
    "lat": 52.62347,
    "lon": 1.41843
  },
  {
    "name": "Bargoed",
    "code": "BGD",
    "lat": 51.69231,
    "lon": -3.22969
  },
  {
    "name": "Broad Green",
    "code": "BGE",
    "lat": 53.40651,
    "lon": -2.89349
  },
  {
    "name": "Brigg",
    "code": "BGG",
    "lat": 53.54916,
    "lon": -0.48612
  },
  {
    "name": "Brighouse",
    "code": "BGH",
    "lat": 53.69821,
    "lon": -1.77944
  },
  {
    "name": "Bargeddie",
    "code": "BGI",
    "lat": 55.85129,
    "lon": -4.0738
  },
  {
    "name": "Bugle",
    "code": "BGL",
    "lat": 50.40034,
    "lon": -4.79215
  },
  {
    "name": "Bellingham",
    "code": "BGM",
    "lat": 51.43292,
    "lon": -0.01932
  },
  {
    "name": "Bridgend",
    "code": "BGN",
    "lat": 51.50698,
    "lon": -3.5753
  },
  {
    "name": "Bogston",
    "code": "BGS",
    "lat": 55.93703,
    "lon": -4.71139
  },
  {
    "name": "Balloch",
    "code": "BHC",
    "lat": 56.00292,
    "lon": -4.58347
  },
  {
    "name": "Brithdir",
    "code": "BHD",
    "lat": 51.7103,
    "lon": -3.22873
  },
  {
    "name": "Bathgate",
    "code": "BHG",
    "lat": 55.89715,
    "lon": -3.63609
  },
  {
    "name": "Birmingham International",
    "code": "BHI",
    "lat": 52.45081,
    "lon": -1.72586
  },
  {
    "name": "Bush Hill Park",
    "code": "BHK",
    "lat": 51.64153,
    "lon": -0.06921
  },
  {
    "name": "Birmingham New Street",
    "code": "BHM",
    "lat": 52.47783,
    "lon": -1.9002
  },
  {
    "name": "Blackhorse Road",
    "code": "BHO",
    "lat": 51.58661,
    "lon": -0.04123
  },
  {
    "name": "Builth Road",
    "code": "BHR",
    "lat": 52.16933,
    "lon": -3.42705
  },
  {
    "name": "Brockholes",
    "code": "BHS",
    "lat": 53.59699,
    "lon": -1.76969
  },
  {
    "name": "Bishop Auckland",
    "code": "BIA",
    "lat": 54.6572,
    "lon": -1.67772
  },
  {
    "name": "Billericay",
    "code": "BIC",
    "lat": 51.62889,
    "lon": 0.41864
  },
  {
    "name": "Bidston",
    "code": "BID",
    "lat": 53.40915,
    "lon": -3.07857
  },
  {
    "name": "Barrow-in-Furness",
    "code": "BIF",
    "lat": 54.119,
    "lon": -3.22613
  },
  {
    "name": "Billingshurst",
    "code": "BIG",
    "lat": 51.0152,
    "lon": -0.4503
  },
  {
    "name": "Birkbeck",
    "code": "BIK",
    "lat": 51.40389,
    "lon": -0.05573
  },
  {
    "name": "Billingham",
    "code": "BIL",
    "lat": 54.60561,
    "lon": -1.27972
  },
  {
    "name": "Bingham",
    "code": "BIN",
    "lat": 52.95421,
    "lon": -0.95154
  },
  {
    "name": "Baillieston",
    "code": "BIO",
    "lat": 55.84449,
    "lon": -4.11369
  },
  {
    "name": "Bishopstone",
    "code": "BIP",
    "lat": 50.78014,
    "lon": 0.08276
  },
  {
    "name": "Bishopstone - Hill Rise",
    "code": "BIR",
    "lat": 50.78231,
    "lon": 0.08442
  },
  {
    "name": "Bishops Stortford",
    "code": "BIS",
    "lat": 51.8667,
    "lon": 0.16491
  },
  {
    "name": "Bicester Village",
    "code": "BIT",
    "lat": 51.89303,
    "lon": -1.14876
  },
  {
    "name": "Biggleswade",
    "code": "BIW",
    "lat": 52.08469,
    "lon": -0.26118
  },
  {
    "name": "Bingley",
    "code": "BIY",
    "lat": 53.84863,
    "lon": -1.83732
  },
  {
    "name": "Bookham",
    "code": "BKA",
    "lat": 51.28874,
    "lon": -0.38401
  },
  {
    "name": "Birkenhead Central",
    "code": "BKC",
    "lat": 53.38833,
    "lon": -3.02083
  },
  {
    "name": "Blakedown",
    "code": "BKD",
    "lat": 52.40641,
    "lon": -2.17687
  },
  {
    "name": "Barking",
    "code": "BKG",
    "lat": 51.5395,
    "lon": 0.08091
  },
  {
    "name": "Blackheath",
    "code": "BKH",
    "lat": 51.4658,
    "lon": 0.00888
  },
  {
    "name": "Beckenham Junction",
    "code": "BKJ",
    "lat": 51.41104,
    "lon": -0.02581
  },
  {
    "name": "Bickley",
    "code": "BKL",
    "lat": 51.40011,
    "lon": 0.04525
  },
  {
    "name": "Berkhamsted",
    "code": "BKM",
    "lat": 51.76314,
    "lon": -0.56201
  },
  {
    "name": "Birkenhead North",
    "code": "BKN",
    "lat": 53.40445,
    "lon": -3.05754
  },
  {
    "name": "Brookwood",
    "code": "BKO",
    "lat": 51.30376,
    "lon": -0.63574
  },
  {
    "name": "Birkenhead Park",
    "code": "BKP",
    "lat": 53.39742,
    "lon": -3.03911
  },
  {
    "name": "Birkenhead Hamilton Square",
    "code": "BKQ",
    "lat": 53.39471,
    "lon": -3.01369
  },
  {
    "name": "Blackridge",
    "code": "BKR",
    "lat": 55.88425,
    "lon": -3.75079
  },
  {
    "name": "Bekesbourne",
    "code": "BKS",
    "lat": 51.26136,
    "lon": 1.13672
  },
  {
    "name": "Blake Street",
    "code": "BKT",
    "lat": 52.6049,
    "lon": -1.84491
  },
  {
    "name": "Berkswell",
    "code": "BKW",
    "lat": 52.3959,
    "lon": -1.64284
  },
  {
    "name": "Blair Atholl",
    "code": "BLA",
    "lat": 56.76553,
    "lon": -3.85022
  },
  {
    "name": "Battlesbridge",
    "code": "BLB",
    "lat": 51.62483,
    "lon": 0.5653
  },
  {
    "name": "Baildon",
    "code": "BLD",
    "lat": 53.85024,
    "lon": -1.75364
  },
  {
    "name": "Bramley (West Yorks)",
    "code": "BLE",
    "lat": 53.80536,
    "lon": -1.6372
  },
  {
    "name": "Bellgrove",
    "code": "BLG",
    "lat": 55.85669,
    "lon": -4.22437
  },
  {
    "name": "Bellshill",
    "code": "BLH",
    "lat": 55.81706,
    "lon": -4.02449
  },
  {
    "name": "Blackrod",
    "code": "BLK",
    "lat": 53.59154,
    "lon": -2.56953
  },
  {
    "name": "Bardon Mill",
    "code": "BLL",
    "lat": 54.97449,
    "lon": -2.3465
  },
  {
    "name": "Belmont",
    "code": "BLM",
    "lat": 51.34381,
    "lon": -0.19885
  },
  {
    "name": "Blundellsands & Crosby",
    "code": "BLN",
    "lat": 53.4877,
    "lon": -3.03987
  },
  {
    "name": "Blaydon",
    "code": "BLO",
    "lat": 54.96579,
    "lon": -1.71259
  },
  {
    "name": "Belper",
    "code": "BLP",
    "lat": 53.02378,
    "lon": -1.48251
  },
  {
    "name": "Blantyre",
    "code": "BLT",
    "lat": 55.79732,
    "lon": -4.08696
  },
  {
    "name": "Belle Vue",
    "code": "BLV",
    "lat": 53.46239,
    "lon": -2.18051
  },
  {
    "name": "Bulwell",
    "code": "BLW",
    "lat": 52.99972,
    "lon": -1.19623
  },
  {
    "name": "Bloxwich",
    "code": "BLX",
    "lat": 52.61821,
    "lon": -2.01148
  },
  {
    "name": "Bletchley",
    "code": "BLY",
    "lat": 51.99534,
    "lon": -0.73632
  },
  {
    "name": "Bamber Bridge",
    "code": "BMB",
    "lat": 53.72688,
    "lon": -2.66077
  },
  {
    "name": "Bromley Cross",
    "code": "BMC",
    "lat": 53.61406,
    "lon": -2.4109
  },
  {
    "name": "Brimsdown",
    "code": "BMD",
    "lat": 51.65559,
    "lon": -0.03081
  },
  {
    "name": "Broome",
    "code": "BME",
    "lat": 52.42278,
    "lon": -2.88522
  },
  {
    "name": "Broomfleet",
    "code": "BMF",
    "lat": 53.74022,
    "lon": -0.67183
  },
  {
    "name": "Barming",
    "code": "BMG",
    "lat": 51.28489,
    "lon": 0.47896
  },
  {
    "name": "Bournemouth",
    "code": "BMH",
    "lat": 50.72726,
    "lon": -1.86451
  },
  {
    "name": "Bramhall",
    "code": "BML",
    "lat": 53.36063,
    "lon": -2.16359
  },
  {
    "name": "Bromley North",
    "code": "BMN",
    "lat": 51.40833,
    "lon": 0.017
  },
  {
    "name": "Birmingham Moor Street",
    "code": "BMO",
    "lat": 52.47909,
    "lon": -1.89247
  },
  {
    "name": "Brampton (Cumbria)",
    "code": "BMP",
    "lat": 54.93239,
    "lon": -2.70295
  },
  {
    "name": "Bromborough Rake",
    "code": "BMR",
    "lat": 53.32992,
    "lon": -2.98948
  },
  {
    "name": "Bromley South",
    "code": "BMS",
    "lat": 51.39998,
    "lon": 0.01735
  },
  {
    "name": "Bedminster",
    "code": "BMT",
    "lat": 51.44009,
    "lon": -2.59416
  },
  {
    "name": "Bromsgrove",
    "code": "BMV",
    "lat": 52.3223,
    "lon": -2.04735
  },
  {
    "name": "Bramley (Hants)",
    "code": "BMY",
    "lat": 51.33029,
    "lon": -1.061
  },
  {
    "name": "Burnage",
    "code": "BNA",
    "lat": 53.42119,
    "lon": -2.21568
  },
  {
    "name": "Burnley Central",
    "code": "BNC",
    "lat": 53.79352,
    "lon": -2.24497
  },
  {
    "name": "Brandon",
    "code": "BND",
    "lat": 52.45403,
    "lon": 0.62473
  },
  {
    "name": "Bourne End",
    "code": "BNE",
    "lat": 51.57712,
    "lon": -0.71047
  },
  {
    "name": "Briton Ferry",
    "code": "BNF",
    "lat": 51.63789,
    "lon": -3.81928
  },
  {
    "name": "Bangor (Gwynedd)",
    "code": "BNG",
    "lat": 53.2223,
    "lon": -4.13589
  },
  {
    "name": "Barnehurst",
    "code": "BNH",
    "lat": 51.46496,
    "lon": 0.15966
  },
  {
    "name": "Barnes Bridge",
    "code": "BNI",
    "lat": 51.47201,
    "lon": -0.25263
  },
  {
    "name": "Barnhill",
    "code": "BNL",
    "lat": 55.87748,
    "lon": -4.223
  },
  {
    "name": "Burnham (Berks)",
    "code": "BNM",
    "lat": 51.5235,
    "lon": -0.64637
  },
  {
    "name": "Barnstaple",
    "code": "BNP",
    "lat": 51.07396,
    "lon": -4.06315
  },
  {
    "name": "Brockley Whins",
    "code": "BNR",
    "lat": 54.95954,
    "lon": -1.46135
  },
  {
    "name": "Barnes",
    "code": "BNS",
    "lat": 51.46709,
    "lon": -0.24216
  },
  {
    "name": "Brinnington",
    "code": "BNT",
    "lat": 53.43213,
    "lon": -2.13512
  },
  {
    "name": "Banavie",
    "code": "BNV",
    "lat": 56.84329,
    "lon": -5.09542
  },
  {
    "name": "Bootle New Strand",
    "code": "BNW",
    "lat": 53.4534,
    "lon": -2.99475
  },
  {
    "name": "Barnsley",
    "code": "BNY",
    "lat": 53.55432,
    "lon": -1.47716
  },
  {
    "name": "Bradford-on-Avon",
    "code": "BOA",
    "lat": 51.34491,
    "lon": -2.25234
  },
  {
    "name": "Bootle (Cumbria)",
    "code": "BOC",
    "lat": 54.29131,
    "lon": -3.39386
  },
  {
    "name": "Bodmin Parkway",
    "code": "BOD",
    "lat": 50.44586,
    "lon": -4.66297
  },
  {
    "name": "Botley",
    "code": "BOE",
    "lat": 50.91644,
    "lon": -1.25924
  },
  {
    "name": "Bognor Regis",
    "code": "BOG",
    "lat": 50.78655,
    "lon": -0.67618
  },
  {
    "name": "Bosham",
    "code": "BOH",
    "lat": 50.84273,
    "lon": -0.84744
  },
  {
    "name": "Bromborough",
    "code": "BOM",
    "lat": 53.32186,
    "lon": -2.9869
  },
  {
    "name": "Bolton",
    "code": "BON",
    "lat": 53.57416,
    "lon": -2.42583
  },
  {
    "name": "Bowes Park",
    "code": "BOP",
    "lat": 51.60702,
    "lon": -0.12058
  },
  {
    "name": "Bodorgan",
    "code": "BOR",
    "lat": 53.20432,
    "lon": -4.41802
  },
  {
    "name": "Bootle Oriel Road",
    "code": "BOT",
    "lat": 53.44663,
    "lon": -2.99574
  },
  {
    "name": "Blackpool Pleasure Beach",
    "code": "BPB",
    "lat": 53.78797,
    "lon": -3.05388
  },
  {
    "name": "Brookmans Park",
    "code": "BPK",
    "lat": 51.72106,
    "lon": -0.20455
  },
  {
    "name": "Barlaston Orchard Place",
    "code": "BPL",
    "lat": 52.94187,
    "lon": -2.17159
  },
  {
    "name": "Blackpool North",
    "code": "BPN",
    "lat": 53.82193,
    "lon": -3.04928
  },
  {
    "name": "Blackpool South",
    "code": "BPS",
    "lat": 53.79871,
    "lon": -3.04894
  },
  {
    "name": "Bishopton",
    "code": "BPT",
    "lat": 55.90225,
    "lon": -4.50047
  },
  {
    "name": "Bristol Parkway",
    "code": "BPW",
    "lat": 51.5138,
    "lon": -2.54217
  },
  {
    "name": "Brora",
    "code": "BRA",
    "lat": 58.01293,
    "lon": -3.8523
  },
  {
    "name": "Breich",
    "code": "BRC",
    "lat": 55.8273,
    "lon": -3.66812
  },
  {
    "name": "Brentwood",
    "code": "BRE",
    "lat": 51.61361,
    "lon": 0.29959
  },
  {
    "name": "Brierfield",
    "code": "BRF",
    "lat": 53.82399,
    "lon": -2.23649
  },
  {
    "name": "Borough Green & Wrotham",
    "code": "BRG",
    "lat": 51.29322,
    "lon": 0.30626
  },
  {
    "name": "Borth",
    "code": "BRH",
    "lat": 52.49104,
    "lon": -4.05019
  },
  {
    "name": "Bristol Temple Meads",
    "code": "BRI",
    "lat": 51.44914,
    "lon": -2.58132
  },
  {
    "name": "Berwick (Sussex)",
    "code": "BRK",
    "lat": 50.84037,
    "lon": 0.16603
  },
  {
    "name": "Barrhill",
    "code": "BRL",
    "lat": 55.097,
    "lon": -4.78178
  },
  {
    "name": "Barmouth",
    "code": "BRM",
    "lat": 52.72291,
    "lon": -4.05661
  },
  {
    "name": "Bearsden",
    "code": "BRN",
    "lat": 55.91712,
    "lon": -4.33201
  },
  {
    "name": "Bridge of Orchy",
    "code": "BRO",
    "lat": 56.51585,
    "lon": -4.76298
  },
  {
    "name": "Brampton (Suffolk)",
    "code": "BRP",
    "lat": 52.39545,
    "lon": 1.54382
  },
  {
    "name": "Barrhead",
    "code": "BRR",
    "lat": 55.80374,
    "lon": -4.39728
  },
  {
    "name": "Berrylands",
    "code": "BRS",
    "lat": 51.39905,
    "lon": -0.28071
  },
  {
    "name": "Bruton",
    "code": "BRU",
    "lat": 51.11163,
    "lon": -2.44708
  },
  {
    "name": "Bournville",
    "code": "BRV",
    "lat": 52.42697,
    "lon": -1.92642
  },
  {
    "name": "Brunswick",
    "code": "BRW",
    "lat": 53.38326,
    "lon": -2.97608
  },
  {
    "name": "Brixton",
    "code": "BRX",
    "lat": 51.4633,
    "lon": -0.11418
  },
  {
    "name": "Barry",
    "code": "BRY",
    "lat": 51.39678,
    "lon": -3.285
  },
  {
    "name": "Bleasby",
    "code": "BSB",
    "lat": 53.04139,
    "lon": -0.94368
  },
  {
    "name": "Bescot Stadium",
    "code": "BSC",
    "lat": 52.5631,
    "lon": -1.9911
  },
  {
    "name": "Bearsted",
    "code": "BSD",
    "lat": 51.27582,
    "lon": 0.57759
  },
  {
    "name": "Bury St Edmunds",
    "code": "BSE",
    "lat": 52.25378,
    "lon": 0.71331
  },
  {
    "name": "Bushey",
    "code": "BSH",
    "lat": 51.64558,
    "lon": -0.38475
  },
  {
    "name": "Balmossie",
    "code": "BSI",
    "lat": 56.47456,
    "lon": -2.83895
  },
  {
    "name": "Bedford St Johns",
    "code": "BSJ",
    "lat": 52.12949,
    "lon": -0.4675
  },
  {
    "name": "Basingstoke",
    "code": "BSK",
    "lat": 51.26836,
    "lon": -1.08726
  },
  {
    "name": "Beasdale",
    "code": "BSL",
    "lat": 56.89953,
    "lon": -5.76379
  },
  {
    "name": "Branksome",
    "code": "BSM",
    "lat": 50.72695,
    "lon": -1.91977
  },
  {
    "name": "Boston",
    "code": "BSN",
    "lat": 52.97812,
    "lon": -0.031
  },
  {
    "name": "Basildon",
    "code": "BSO",
    "lat": 51.56811,
    "lon": 0.4568
  },
  {
    "name": "Brondesbury Park",
    "code": "BSP",
    "lat": 51.5407,
    "lon": -0.21013
  },
  {
    "name": "Broadstairs",
    "code": "BSR",
    "lat": 51.36068,
    "lon": 1.43358
  },
  {
    "name": "Barassie",
    "code": "BSS",
    "lat": 55.56105,
    "lon": -4.65113
  },
  {
    "name": "Brunstane",
    "code": "BSU",
    "lat": 55.9425,
    "lon": -3.10098
  },
  {
    "name": "Buckshaw Parkway",
    "code": "BSV",
    "lat": 53.67335,
    "lon": -2.66083
  },
  {
    "name": "Birmingham Snow Hill",
    "code": "BSW",
    "lat": 52.48336,
    "lon": -1.89909
  },
  {
    "name": "Brondesbury",
    "code": "BSY",
    "lat": 51.54517,
    "lon": -0.20231
  },
  {
    "name": "Barnetby",
    "code": "BTB",
    "lat": 53.57514,
    "lon": -0.40967
  },
  {
    "name": "Bolton-Upon-Dearne",
    "code": "BTD",
    "lat": 53.51897,
    "lon": -1.31155
  },
  {
    "name": "Bitterne",
    "code": "BTE",
    "lat": 50.91821,
    "lon": -1.377
  },
  {
    "name": "Bottesford",
    "code": "BTF",
    "lat": 52.94463,
    "lon": -0.79483
  },
  {
    "name": "Barnt Green",
    "code": "BTG",
    "lat": 52.36109,
    "lon": -1.99247
  },
  {
    "name": "Bath Spa",
    "code": "BTH",
    "lat": 51.37768,
    "lon": -2.35703
  },
  {
    "name": "Batley",
    "code": "BTL",
    "lat": 53.70996,
    "lon": -1.62295
  },
  {
    "name": "Brighton",
    "code": "BTN",
    "lat": 50.829,
    "lon": -0.14128
  },
  {
    "name": "Betchworth",
    "code": "BTO",
    "lat": 51.24819,
    "lon": -0.26697
  },
  {
    "name": "Braintree Freeport",
    "code": "BTP",
    "lat": 51.86943,
    "lon": 0.56845
  },
  {
    "name": "Braintree",
    "code": "BTR",
    "lat": 51.87541,
    "lon": 0.5567
  },
  {
    "name": "Burntisland",
    "code": "BTS",
    "lat": 56.05707,
    "lon": -3.23319
  },
  {
    "name": "Battersby",
    "code": "BTT",
    "lat": 54.45769,
    "lon": -1.09298
  },
  {
    "name": "Bentley (Hants)",
    "code": "BTY",
    "lat": 51.18123,
    "lon": -0.86813
  },
  {
    "name": "Burnley Barracks",
    "code": "BUB",
    "lat": 53.79089,
    "lon": -2.25808
  },
  {
    "name": "Buckenham",
    "code": "BUC",
    "lat": 52.59776,
    "lon": 1.47034
  },
  {
    "name": "Burneside (Cumbria)",
    "code": "BUD",
    "lat": 54.35499,
    "lon": -2.76667
  },
  {
    "name": "Bures",
    "code": "BUE",
    "lat": 51.97117,
    "lon": 0.76916
  },
  {
    "name": "Burgess Hill",
    "code": "BUG",
    "lat": 50.95365,
    "lon": -0.12741
  },
  {
    "name": "Brough",
    "code": "BUH",
    "lat": 53.72698,
    "lon": -0.57872
  },
  {
    "name": "Burnside (Strathclyde)",
    "code": "BUI",
    "lat": 55.81692,
    "lon": -4.20238
  },
  {
    "name": "Burton Joyce",
    "code": "BUJ",
    "lat": 52.98346,
    "lon": -1.04088
  },
  {
    "name": "Bucknell",
    "code": "BUK",
    "lat": 52.35739,
    "lon": -2.94739
  },
  {
    "name": "Butlers Lane",
    "code": "BUL",
    "lat": 52.59248,
    "lon": -1.83801
  },
  {
    "name": "Bursledon",
    "code": "BUO",
    "lat": 50.88368,
    "lon": -1.30504
  },
  {
    "name": "Busby",
    "code": "BUS",
    "lat": 55.78033,
    "lon": -4.26219
  },
  {
    "name": "Burton-on-Trent",
    "code": "BUT",
    "lat": 52.80583,
    "lon": -1.64246
  },
  {
    "name": "Burnham-on-Crouch",
    "code": "BUU",
    "lat": 51.63366,
    "lon": 0.81405
  },
  {
    "name": "Burley-in-Wharfedale",
    "code": "BUW",
    "lat": 53.90816,
    "lon": -1.75337
  },
  {
    "name": "Buxton",
    "code": "BUX",
    "lat": 53.26074,
    "lon": -1.91287
  },
  {
    "name": "Burley Park",
    "code": "BUY",
    "lat": 53.81204,
    "lon": -1.57776
  },
  {
    "name": "Belvedere",
    "code": "BVD",
    "lat": 51.49212,
    "lon": 0.1523
  },
  {
    "name": "Bow Brickhill",
    "code": "BWB",
    "lat": 52.00431,
    "lon": -0.69607
  },
  {
    "name": "Birchwood",
    "code": "BWD",
    "lat": 53.41274,
    "lon": -2.52532
  },
  {
    "name": "Bowling",
    "code": "BWG",
    "lat": 55.93107,
    "lon": -4.49382
  },
  {
    "name": "Berwick-upon-Tweed",
    "code": "BWK",
    "lat": 55.77433,
    "lon": -2.01097
  },
  {
    "name": "Bloxwich North",
    "code": "BWN",
    "lat": 52.62545,
    "lon": -2.01768
  },
  {
    "name": "Bricket Wood",
    "code": "BWO",
    "lat": 51.70543,
    "lon": -0.35912
  },
  {
    "name": "Barrow upon Soar",
    "code": "BWS",
    "lat": 52.74935,
    "lon": -1.14485
  },
  {
    "name": "Bridgwater",
    "code": "BWT",
    "lat": 51.12785,
    "lon": -2.99043
  },
  {
    "name": "Broxbourne",
    "code": "BXB",
    "lat": 51.74691,
    "lon": -0.01108
  },
  {
    "name": "Buxted",
    "code": "BXD",
    "lat": 50.99001,
    "lon": 0.13145
  },
  {
    "name": "Bexleyheath",
    "code": "BXH",
    "lat": 51.4635,
    "lon": 0.13375
  },
  {
    "name": "Box Hill & Westhumble",
    "code": "BXW",
    "lat": 51.25401,
    "lon": -0.32848
  },
  {
    "name": "Boxhill - Burford Bridge Hotel",
    "code": "BXX",
    "lat": 51.25416,
    "lon": -0.32297
  },
  {
    "name": "Bexley",
    "code": "BXY",
    "lat": 51.44022,
    "lon": 0.14791
  },
  {
    "name": "Berney Arms",
    "code": "BYA",
    "lat": 52.58981,
    "lon": 1.63039
  },
  {
    "name": "Blythe Bridge",
    "code": "BYB",
    "lat": 52.96817,
    "lon": -2.06696
  },
  {
    "name": "Betws-y-Coed",
    "code": "BYC",
    "lat": 53.09209,
    "lon": -3.80088
  },
  {
    "name": "Barry Docks",
    "code": "BYD",
    "lat": 51.40244,
    "lon": -3.26072
  },
  {
    "name": "Bynea",
    "code": "BYE",
    "lat": 51.67203,
    "lon": -4.0989
  },
  {
    "name": "Broughty Ferry",
    "code": "BYF",
    "lat": 56.46715,
    "lon": -2.87315
  },
  {
    "name": "Barry Island",
    "code": "BYI",
    "lat": 51.39241,
    "lon": -3.27338
  },
  {
    "name": "Bentley (S Yorks)",
    "code": "BYK",
    "lat": 53.54396,
    "lon": -1.15095
  },
  {
    "name": "Barry Links",
    "code": "BYL",
    "lat": 56.49314,
    "lon": -2.74544
  },
  {
    "name": "Burnley Manchester Road",
    "code": "BYM",
    "lat": 53.78498,
    "lon": -2.24887
  },
  {
    "name": "Bryn",
    "code": "BYN",
    "lat": 53.49988,
    "lon": -2.64721
  },
  {
    "name": "Braystones",
    "code": "BYS",
    "lat": 54.43937,
    "lon": -3.54183
  },
  {
    "name": "Coventry Arena",
    "code": "CAA",
    "lat": 52.44775,
    "lon": -1.49412
  },
  {
    "name": "Caldercruix",
    "code": "CAC",
    "lat": 55.88793,
    "lon": -3.88771
  },
  {
    "name": "Cadoxton",
    "code": "CAD",
    "lat": 51.41228,
    "lon": -3.24891
  },
  {
    "name": "Carrbridge",
    "code": "CAG",
    "lat": 57.27949,
    "lon": -3.8282
  },
  {
    "name": "Cark",
    "code": "CAK",
    "lat": 54.17796,
    "lon": -2.97407
  },
  {
    "name": "Camberley",
    "code": "CAM",
    "lat": 51.33633,
    "lon": -0.74427
  },
  {
    "name": "Carnoustie",
    "code": "CAN",
    "lat": 56.50055,
    "lon": -2.70659
  },
  {
    "name": "Cannock",
    "code": "CAO",
    "lat": 52.68618,
    "lon": -2.02215
  },
  {
    "name": "Carlisle",
    "code": "CAR",
    "lat": 54.89065,
    "lon": -2.93319
  },
  {
    "name": "Castleton (Manchester)",
    "code": "CAS",
    "lat": 53.59186,
    "lon": -2.17823
  },
  {
    "name": "Caterham",
    "code": "CAT",
    "lat": 51.28214,
    "lon": -0.0783
  },
  {
    "name": "Causeland",
    "code": "CAU",
    "lat": 50.40568,
    "lon": -4.46649
  },
  {
    "name": "Carntyne",
    "code": "CAY",
    "lat": 55.85486,
    "lon": -4.17856
  },
  {
    "name": "Carbis Bay",
    "code": "CBB",
    "lat": 50.19704,
    "lon": -5.46333
  },
  {
    "name": "Coatbridge Central",
    "code": "CBC",
    "lat": 55.8625,
    "lon": -4.03188
  },
  {
    "name": "Conon Bridge",
    "code": "CBD",
    "lat": 57.56173,
    "lon": -4.4404
  },
  {
    "name": "Canterbury East",
    "code": "CBE",
    "lat": 51.27427,
    "lon": 1.07598
  },
  {
    "name": "Cambridge",
    "code": "CBG",
    "lat": 52.19408,
    "lon": 0.13746
  },
  {
    "name": "Cambridge Heath (London)",
    "code": "CBH",
    "lat": 51.53198,
    "lon": -0.05727
  },
  {
    "name": "Cranbrook",
    "code": "CBK",
    "lat": 50.75008,
    "lon": -3.42044
  },
  {
    "name": "Cambuslang",
    "code": "CBL",
    "lat": 55.8196,
    "lon": -4.173
  },
  {
    "name": "Camborne",
    "code": "CBN",
    "lat": 50.21042,
    "lon": -5.29747
  },
  {
    "name": "Castle Bar Park",
    "code": "CBP",
    "lat": 51.52294,
    "lon": -0.33155
  },
  {
    "name": "Cooksbridge",
    "code": "CBR",
    "lat": 50.90375,
    "lon": -0.0092
  },
  {
    "name": "Coatbridge Sunnyside",
    "code": "CBS",
    "lat": 55.86682,
    "lon": -4.02827
  },
  {
    "name": "Canterbury West",
    "code": "CBW",
    "lat": 51.28427,
    "lon": 1.07531
  },
  {
    "name": "Charlbury",
    "code": "CBY",
    "lat": 51.87244,
    "lon": -1.4897
  },
  {
    "name": "Criccieth",
    "code": "CCC",
    "lat": 52.91843,
    "lon": -4.23753
  },
  {
    "name": "Chichester",
    "code": "CCH",
    "lat": 50.83204,
    "lon": -0.78175
  },
  {
    "name": "Cathcart",
    "code": "CCT",
    "lat": 55.81766,
    "lon": -4.26053
  },
  {
    "name": "Cardiff Bay",
    "code": "CDB",
    "lat": 51.46711,
    "lon": -3.16643
  },
  {
    "name": "Cardenden",
    "code": "CDD",
    "lat": 56.14125,
    "lon": -3.26164
  },
  {
    "name": "Cardiff Central",
    "code": "CDF",
    "lat": 51.47603,
    "lon": -3.17931
  },
  {
    "name": "Crediton",
    "code": "CDI",
    "lat": 50.78329,
    "lon": -3.6468
  },
  {
    "name": "Coulsdon Town",
    "code": "CDN",
    "lat": 51.32204,
    "lon": -0.13446
  },
  {
    "name": "Cardonald",
    "code": "CDO",
    "lat": 55.85255,
    "lon": -4.34069
  },
  {
    "name": "Cardiff Queen Street",
    "code": "CDQ",
    "lat": 51.48196,
    "lon": -3.1702
  },
  {
    "name": "Cardross",
    "code": "CDR",
    "lat": 55.96037,
    "lon": -4.65306
  },
  {
    "name": "Coulsdon South",
    "code": "CDS",
    "lat": 51.31584,
    "lon": -0.13788
  },
  {
    "name": "Caldicot",
    "code": "CDT",
    "lat": 51.58478,
    "lon": -2.76059
  },
  {
    "name": "Cam & Dursley",
    "code": "CDU",
    "lat": 51.71762,
    "lon": -2.3591
  },
  {
    "name": "Cartsdyke",
    "code": "CDY",
    "lat": 55.9422,
    "lon": -4.73158
  },
  {
    "name": "Cleland",
    "code": "CEA",
    "lat": 55.80464,
    "lon": -3.91024
  },
  {
    "name": "Cheddington",
    "code": "CED",
    "lat": 51.85792,
    "lon": -0.66215
  },
  {
    "name": "Chapel-en-le-Frith",
    "code": "CEF",
    "lat": 53.31225,
    "lon": -1.91877
  },
  {
    "name": "Coleshill Parkway",
    "code": "CEH",
    "lat": 52.51654,
    "lon": -1.70818
  },
  {
    "name": "Chelford",
    "code": "CEL",
    "lat": 53.27032,
    "lon": -2.28058
  },
  {
    "name": "Cressing",
    "code": "CES",
    "lat": 51.85235,
    "lon": 0.57797
  },
  {
    "name": "Colchester Town",
    "code": "CET",
    "lat": 51.88647,
    "lon": 0.90477
  },
  {
    "name": "Cononley",
    "code": "CEY",
    "lat": 53.91758,
    "lon": -2.01207
  },
  {
    "name": "Catford Bridge",
    "code": "CFB",
    "lat": 51.44474,
    "lon": -0.02478
  },
  {
    "name": "Castleford",
    "code": "CFD",
    "lat": 53.72409,
    "lon": -1.35466
  },
  {
    "name": "Croftfoot",
    "code": "CFF",
    "lat": 55.81825,
    "lon": -4.22832
  },
  {
    "name": "Chafford Hundred",
    "code": "CFH",
    "lat": 51.48556,
    "lon": 0.28746
  },
  {
    "name": "Crossflatts",
    "code": "CFL",
    "lat": 53.85848,
    "lon": -1.84489
  },
  {
    "name": "Clifton Down",
    "code": "CFN",
    "lat": 51.46454,
    "lon": -2.61175
  },
  {
    "name": "Chalfont & Latimer",
    "code": "CFO",
    "lat": 51.66811,
    "lon": -0.56052
  },
  {
    "name": "Chandlers Ford",
    "code": "CFR",
    "lat": 50.98368,
    "lon": -1.38518
  },
  {
    "name": "Crofton Park",
    "code": "CFT",
    "lat": 51.45519,
    "lon": -0.0365
  },
  {
    "name": "Craigendoran",
    "code": "CGD",
    "lat": 55.99478,
    "lon": -4.71123
  },
  {
    "name": "Cottingham",
    "code": "CGM",
    "lat": 53.78166,
    "lon": -0.40643
  },
  {
    "name": "Cogan",
    "code": "CGN",
    "lat": 51.44599,
    "lon": -3.1891
  },
  {
    "name": "Caergwrle",
    "code": "CGW",
    "lat": 53.10788,
    "lon": -3.03292
  },
  {
    "name": "Charing Cross (Glasgow)",
    "code": "CHC",
    "lat": 55.86467,
    "lon": -4.26981
  },
  {
    "name": "Chesterfield",
    "code": "CHD",
    "lat": 53.23824,
    "lon": -1.42011
  },
  {
    "name": "Cheam",
    "code": "CHE",
    "lat": 51.35548,
    "lon": -0.21417
  },
  {
    "name": "Church Fenton",
    "code": "CHF",
    "lat": 53.82661,
    "lon": -1.22759
  },
  {
    "name": "Charing (Kent)",
    "code": "CHG",
    "lat": 51.2081,
    "lon": 0.79035
  },
  {
    "name": "Christs Hospital",
    "code": "CHH",
    "lat": 51.05068,
    "lon": -0.36355
  },
  {
    "name": "Chingford",
    "code": "CHI",
    "lat": 51.63309,
    "lon": 0.00991
  },
  {
    "name": "Chiswick",
    "code": "CHK",
    "lat": 51.48114,
    "lon": -0.26783
  },
  {
    "name": "Chilworth",
    "code": "CHL",
    "lat": 51.21521,
    "lon": -0.52482
  },
  {
    "name": "Chelmsford",
    "code": "CHM",
    "lat": 51.73638,
    "lon": 0.46858
  },
  {
    "name": "Cheshunt",
    "code": "CHN",
    "lat": 51.70288,
    "lon": -0.02395
  },
  {
    "name": "Cholsey",
    "code": "CHO",
    "lat": 51.5702,
    "lon": -1.15802
  },
  {
    "name": "Chipstead",
    "code": "CHP",
    "lat": 51.30928,
    "lon": -0.1695
  },
  {
    "name": "Christchurch",
    "code": "CHR",
    "lat": 50.7382,
    "lon": -1.78455
  },
  {
    "name": "Chathill",
    "code": "CHT",
    "lat": 55.53673,
    "lon": -1.70638
  },
  {
    "name": "Cheadle Hulme",
    "code": "CHU",
    "lat": 53.37595,
    "lon": -2.1883
  },
  {
    "name": "Chalkwell",
    "code": "CHW",
    "lat": 51.53872,
    "lon": 0.67061
  },
  {
    "name": "London Charing Cross",
    "code": "CHX",
    "lat": 51.50803,
    "lon": -0.1248
  },
  {
    "name": "Chertsey",
    "code": "CHY",
    "lat": 51.38707,
    "lon": -0.50931
  },
  {
    "name": "Chilham",
    "code": "CIL",
    "lat": 51.24461,
    "lon": 0.97592
  },
  {
    "name": "Cilmeri",
    "code": "CIM",
    "lat": 52.15053,
    "lon": -3.45655
  },
  {
    "name": "Caledonian Road & Barnsbury",
    "code": "CIR",
    "lat": 51.54305,
    "lon": -0.11672
  },
  {
    "name": "Chislehurst",
    "code": "CIT",
    "lat": 51.40556,
    "lon": 0.05743
  },
  {
    "name": "Corkerhill",
    "code": "CKH",
    "lat": 55.83749,
    "lon": -4.33429
  },
  {
    "name": "Corkickle",
    "code": "CKL",
    "lat": 54.54168,
    "lon": -3.58216
  },
  {
    "name": "Crewkerne",
    "code": "CKN",
    "lat": 50.87352,
    "lon": -2.77851
  },
  {
    "name": "Clarkston",
    "code": "CKS",
    "lat": 55.78934,
    "lon": -4.27564
  },
  {
    "name": "Crookston",
    "code": "CKT",
    "lat": 55.8423,
    "lon": -4.36467
  },
  {
    "name": "Crosskeys",
    "code": "CKY",
    "lat": 51.6209,
    "lon": -3.12619
  },
  {
    "name": "Clandon",
    "code": "CLA",
    "lat": 51.264,
    "lon": -0.50276
  },
  {
    "name": "Castle Cary",
    "code": "CLC",
    "lat": 51.0998,
    "lon": -2.5228
  },
  {
    "name": "Chelsfield",
    "code": "CLD",
    "lat": 51.35626,
    "lon": 0.10908
  },
  {
    "name": "Cleethorpes",
    "code": "CLE",
    "lat": 53.56192,
    "lon": -0.02922
  },
  {
    "name": "Claygate",
    "code": "CLG",
    "lat": 51.36121,
    "lon": -0.34824
  },
  {
    "name": "Clitheroe",
    "code": "CLH",
    "lat": 53.87348,
    "lon": -2.39434
  },
  {
    "name": "Clifton (Manchester)",
    "code": "CLI",
    "lat": 53.5225,
    "lon": -2.31475
  },
  {
    "name": "Clapham Junction",
    "code": "CLJ",
    "lat": 51.46419,
    "lon": -0.17028
  },
  {
    "name": "Clock House",
    "code": "CLK",
    "lat": 51.40859,
    "lon": -0.04065
  },
  {
    "name": "Collington",
    "code": "CLL",
    "lat": 50.83928,
    "lon": 0.45788
  },
  {
    "name": "Collingham",
    "code": "CLM",
    "lat": 53.14411,
    "lon": -0.75038
  },
  {
    "name": "Chapeltown",
    "code": "CLN",
    "lat": 53.46235,
    "lon": -1.46627
  },
  {
    "name": "Clapham High Street",
    "code": "CLP",
    "lat": 51.46548,
    "lon": -0.13252
  },
  {
    "name": "Clarbeston Road",
    "code": "CLR",
    "lat": 51.85167,
    "lon": -4.88357
  },
  {
    "name": "Chester-le-Street",
    "code": "CLS",
    "lat": 54.8546,
    "lon": -1.57802
  },
  {
    "name": "Clacton-on-Sea",
    "code": "CLT",
    "lat": 51.79401,
    "lon": 1.15411
  },
  {
    "name": "Carluke",
    "code": "CLU",
    "lat": 55.73125,
    "lon": -3.84892
  },
  {
    "name": "Claverdon",
    "code": "CLV",
    "lat": 52.2771,
    "lon": -1.69657
  },
  {
    "name": "Chorleywood",
    "code": "CLW",
    "lat": 51.65425,
    "lon": -0.51831
  },
  {
    "name": "Chinley",
    "code": "CLY",
    "lat": 53.34031,
    "lon": -1.94395
  },
  {
    "name": "Camden Road",
    "code": "CMD",
    "lat": 51.5418,
    "lon": -0.1387
  },
  {
    "name": "Combe (Oxon)",
    "code": "CME",
    "lat": 51.8326,
    "lon": -1.39407
  },
  {
    "name": "Cromford",
    "code": "CMF",
    "lat": 53.11295,
    "lon": -1.54916
  },
  {
    "name": "Cwmbach",
    "code": "CMH",
    "lat": 51.70193,
    "lon": -3.41374
  },
  {
    "name": "Carmyle",
    "code": "CML",
    "lat": 55.83433,
    "lon": -4.15817
  },
  {
    "name": "Carmarthen",
    "code": "CMN",
    "lat": 51.85336,
    "lon": -4.30599
  },
  {
    "name": "Camelon",
    "code": "CMO",
    "lat": 56.00608,
    "lon": -3.8176
  },
  {
    "name": "Cromer",
    "code": "CMR",
    "lat": 52.93011,
    "lon": 1.29283
  },
  {
    "name": "Crossmyloof",
    "code": "CMY",
    "lat": 55.83393,
    "lon": -4.28431
  },
  {
    "name": "Colne",
    "code": "CNE",
    "lat": 53.85476,
    "lon": -2.18186
  },
  {
    "name": "Carnforth",
    "code": "CNF",
    "lat": 54.12969,
    "lon": -2.77123
  },
  {
    "name": "Congleton",
    "code": "CNG",
    "lat": 53.15787,
    "lon": -2.19258
  },
  {
    "name": "Canley",
    "code": "CNL",
    "lat": 52.39926,
    "lon": -1.54758
  },
  {
    "name": "Cheltenham Spa",
    "code": "CNM",
    "lat": 51.8974,
    "lon": -2.09963
  },
  {
    "name": "Canonbury",
    "code": "CNN",
    "lat": 51.54874,
    "lon": -0.09219
  },
  {
    "name": "Chetnole",
    "code": "CNO",
    "lat": 50.86635,
    "lon": -2.57294
  },
  {
    "name": "Conway Park",
    "code": "CNP",
    "lat": 53.39338,
    "lon": -3.02268
  },
  {
    "name": "Crianlarich",
    "code": "CNR",
    "lat": 56.39046,
    "lon": -4.61842
  },
  {
    "name": "Conisbrough",
    "code": "CNS",
    "lat": 53.48933,
    "lon": -1.23433
  },
  {
    "name": "Conwy",
    "code": "CNW",
    "lat": 53.28012,
    "lon": -3.83054
  },
  {
    "name": "Cantley",
    "code": "CNY",
    "lat": 52.57877,
    "lon": 1.51343
  },
  {
    "name": "Coatdyke",
    "code": "COA",
    "lat": 55.86433,
    "lon": -4.00497
  },
  {
    "name": "Cooden Beach",
    "code": "COB",
    "lat": 50.83337,
    "lon": 0.42687
  },
  {
    "name": "Coombe Junction Halt (Rail Station)",
    "code": "COE",
    "lat": 50.44591,
    "lon": -4.48189
  },
  {
    "name": "Crowborough",
    "code": "COH",
    "lat": 51.04638,
    "lon": 0.18802
  },
  {
    "name": "Crosshill",
    "code": "COI",
    "lat": 55.83327,
    "lon": -4.2568
  },
  {
    "name": "Colchester",
    "code": "COL",
    "lat": 51.90073,
    "lon": 0.8926
  },
  {
    "name": "Commondale",
    "code": "COM",
    "lat": 54.48128,
    "lon": -0.97515
  },
  {
    "name": "Connel Ferry",
    "code": "CON",
    "lat": 56.45233,
    "lon": -5.38543
  },
  {
    "name": "Cookham",
    "code": "COO",
    "lat": 51.55746,
    "lon": -0.72208
  },
  {
    "name": "Copplestone",
    "code": "COP",
    "lat": 50.81446,
    "lon": -3.7516
  },
  {
    "name": "Corby",
    "code": "COR",
    "lat": 52.48887,
    "lon": -0.68833
  },
  {
    "name": "Cosford",
    "code": "COS",
    "lat": 52.64485,
    "lon": -2.30028
  },
  {
    "name": "Cottingley",
    "code": "COT",
    "lat": 53.76783,
    "lon": -1.5877
  },
  {
    "name": "Coventry",
    "code": "COV",
    "lat": 52.40083,
    "lon": -1.51346
  },
  {
    "name": "Cowdenbeath",
    "code": "COW",
    "lat": 56.11208,
    "lon": -3.34318
  },
  {
    "name": "Coryton",
    "code": "COY",
    "lat": 51.52044,
    "lon": -3.23183
  },
  {
    "name": "Corpach",
    "code": "CPA",
    "lat": 56.84281,
    "lon": -5.12195
  },
  {
    "name": "Caerphilly",
    "code": "CPH",
    "lat": 51.57157,
    "lon": -3.21849
  },
  {
    "name": "Carpenders Park",
    "code": "CPK",
    "lat": 51.62835,
    "lon": -0.38594
  },
  {
    "name": "Chippenham",
    "code": "CPM",
    "lat": 51.46249,
    "lon": -2.1154
  },
  {
    "name": "Chapelton (Devon)",
    "code": "CPN",
    "lat": 51.01653,
    "lon": -4.02476
  },
  {
    "name": "Clapton",
    "code": "CPT",
    "lat": 51.56165,
    "lon": -0.05702
  },
  {
    "name": "Capenhurst",
    "code": "CPU",
    "lat": 53.26019,
    "lon": -2.94229
  },
  {
    "name": "Chepstow",
    "code": "CPW",
    "lat": 51.64017,
    "lon": -2.67191
  },
  {
    "name": "Clapham (N Yorks)",
    "code": "CPY",
    "lat": 54.1054,
    "lon": -2.41038
  },
  {
    "name": "Cradley Heath",
    "code": "CRA",
    "lat": 52.46966,
    "lon": -2.09049
  },
  {
    "name": "Corbridge",
    "code": "CRB",
    "lat": 54.96626,
    "lon": -2.0184
  },
  {
    "name": "Chester Road",
    "code": "CRD",
    "lat": 52.53566,
    "lon": -1.83247
  },
  {
    "name": "Crewe",
    "code": "CRE",
    "lat": 53.08964,
    "lon": -2.43298
  },
  {
    "name": "Carfin",
    "code": "CRF",
    "lat": 55.80733,
    "lon": -3.95625
  },
  {
    "name": "Cross Gates",
    "code": "CRG",
    "lat": 53.80492,
    "lon": -1.45159
  },
  {
    "name": "Crouch Hill",
    "code": "CRH",
    "lat": 51.57131,
    "lon": -0.11714
  },
  {
    "name": "Cricklewood",
    "code": "CRI",
    "lat": 51.55846,
    "lon": -0.21267
  },
  {
    "name": "Chirk",
    "code": "CRK",
    "lat": 52.9331,
    "lon": -3.06566
  },
  {
    "name": "Chorley",
    "code": "CRL",
    "lat": 53.65255,
    "lon": -2.62684
  },
  {
    "name": "Cramlington",
    "code": "CRM",
    "lat": 55.08777,
    "lon": -1.5986
  },
  {
    "name": "Crowthorne",
    "code": "CRN",
    "lat": 51.36673,
    "lon": -0.81927
  },
  {
    "name": "Croy",
    "code": "CRO",
    "lat": 55.95567,
    "lon": -4.03596
  },
  {
    "name": "Corrour",
    "code": "CRR",
    "lat": 56.7602,
    "lon": -4.6906
  },
  {
    "name": "Carstairs",
    "code": "CRS",
    "lat": 55.69103,
    "lon": -3.66847
  },
  {
    "name": "Chartham",
    "code": "CRT",
    "lat": 51.25727,
    "lon": 1.01806
  },
  {
    "name": "Craven Arms",
    "code": "CRV",
    "lat": 52.44255,
    "lon": -2.83743
  },
  {
    "name": "Crawley",
    "code": "CRW",
    "lat": 51.11221,
    "lon": -0.18667
  },
  {
    "name": "Crayford",
    "code": "CRY",
    "lat": 51.44828,
    "lon": 0.17895
  },
  {
    "name": "Cosham",
    "code": "CSA",
    "lat": 50.84191,
    "lon": -1.06733
  },
  {
    "name": "Carshalton Beeches",
    "code": "CSB",
    "lat": 51.35741,
    "lon": -0.16979
  },
  {
    "name": "Cobham & Stoke d'Abernon",
    "code": "CSD",
    "lat": 51.3181,
    "lon": -0.38934
  },
  {
    "name": "Cressington",
    "code": "CSG",
    "lat": 53.35877,
    "lon": -2.91201
  },
  {
    "name": "Carshalton",
    "code": "CSH",
    "lat": 51.36845,
    "lon": -0.16637
  },
  {
    "name": "Calstock",
    "code": "CSK",
    "lat": 50.49779,
    "lon": -4.20903
  },
  {
    "name": "Codsall",
    "code": "CSL",
    "lat": 52.6273,
    "lon": -2.20177
  },
  {
    "name": "Castleton Moor",
    "code": "CSM",
    "lat": 54.46715,
    "lon": -0.94665
  },
  {
    "name": "Chessington North",
    "code": "CSN",
    "lat": 51.36404,
    "lon": -0.3007
  },
  {
    "name": "Croston",
    "code": "CSO",
    "lat": 53.66757,
    "lon": -2.77775
  },
  {
    "name": "Chassen Road",
    "code": "CSR",
    "lat": 53.44618,
    "lon": -2.36824
  },
  {
    "name": "Chessington South",
    "code": "CSS",
    "lat": 51.35655,
    "lon": -0.30816
  },
  {
    "name": "London Cannon Street",
    "code": "CST",
    "lat": 51.51139,
    "lon": -0.09029
  },
  {
    "name": "Chestfield & Swalecliffe",
    "code": "CSW",
    "lat": 51.36024,
    "lon": 1.06694
  },
  {
    "name": "Coseley",
    "code": "CSY",
    "lat": 52.54509,
    "lon": -2.08578
  },
  {
    "name": "Chatelherault",
    "code": "CTE",
    "lat": 55.76521,
    "lon": -4.00466
  },
  {
    "name": "Catford",
    "code": "CTF",
    "lat": 51.44441,
    "lon": -0.02631
  },
  {
    "name": "Chadwell Heath",
    "code": "CTH",
    "lat": 51.56804,
    "lon": 0.12897
  },
  {
    "name": "City Thameslink",
    "code": "CTK",
    "lat": 51.51394,
    "lon": -0.10358
  },
  {
    "name": "Cattal",
    "code": "CTL",
    "lat": 53.99746,
    "lon": -1.32054
  },
  {
    "name": "Chatham",
    "code": "CTM",
    "lat": 51.38038,
    "lon": 0.52116
  },
  {
    "name": "Charlton",
    "code": "CTN",
    "lat": 51.48682,
    "lon": 0.03127
  },
  {
    "name": "Carlton",
    "code": "CTO",
    "lat": 52.96511,
    "lon": -1.07865
  },
  {
    "name": "Chester",
    "code": "CTR",
    "lat": 53.19671,
    "lon": -2.8796
  },
  {
    "name": "Church Stretton",
    "code": "CTT",
    "lat": 52.53743,
    "lon": -2.8037
  },
  {
    "name": "Church & Oswaldtwistle",
    "code": "CTW",
    "lat": 53.75053,
    "lon": -2.39121
  },
  {
    "name": "Culrain",
    "code": "CUA",
    "lat": 57.91949,
    "lon": -4.40428
  },
  {
    "name": "Cumbernauld",
    "code": "CUB",
    "lat": 55.94201,
    "lon": -3.98032
  },
  {
    "name": "Cuddington",
    "code": "CUD",
    "lat": 53.23993,
    "lon": -2.5993
  },
  {
    "name": "Cuffley",
    "code": "CUF",
    "lat": 51.70872,
    "lon": -0.10978
  },
  {
    "name": "Curriehill",
    "code": "CUH",
    "lat": 55.90056,
    "lon": -3.31875
  },
  {
    "name": "Culham",
    "code": "CUM",
    "lat": 51.6538,
    "lon": -1.23651
  },
  {
    "name": "Cupar",
    "code": "CUP",
    "lat": 56.31697,
    "lon": -3.00876
  },
  {
    "name": "Clunderwen",
    "code": "CUW",
    "lat": 51.84055,
    "lon": -4.73188
  },
  {
    "name": "Cuxton",
    "code": "CUX",
    "lat": 51.37393,
    "lon": 0.46171
  },
  {
    "name": "Colwyn Bay",
    "code": "CWB",
    "lat": 53.29638,
    "lon": -3.72543
  },
  {
    "name": "Chappel & Wakes Colne",
    "code": "CWC",
    "lat": 51.92592,
    "lon": 0.75852
  },
  {
    "name": "Creswell (Derbys)",
    "code": "CWD",
    "lat": 53.26413,
    "lon": -1.2164
  },
  {
    "name": "Crowle",
    "code": "CWE",
    "lat": 53.58975,
    "lon": -0.81736
  },
  {
    "name": "Crews Hill",
    "code": "CWH",
    "lat": 51.68449,
    "lon": -0.10688
  },
  {
    "name": "Colwall",
    "code": "CWL",
    "lat": 52.07988,
    "lon": -2.35696
  },
  {
    "name": "Cwmbran",
    "code": "CWM",
    "lat": 51.65658,
    "lon": -3.01622
  },
  {
    "name": "Cowden",
    "code": "CWN",
    "lat": 51.15563,
    "lon": 0.11004
  },
  {
    "name": "Caersws",
    "code": "CWS",
    "lat": 52.51614,
    "lon": -3.43251
  },
  {
    "name": "Crowhurst",
    "code": "CWU",
    "lat": 50.88857,
    "lon": 0.50135
  },
  {
    "name": "Cefn-y-Bedd",
    "code": "CYB",
    "lat": 53.09882,
    "lon": -3.03106
  },
  {
    "name": "Clydebank",
    "code": "CYK",
    "lat": 55.90068,
    "lon": -4.40441
  },
  {
    "name": "Cynghordy",
    "code": "CYN",
    "lat": 52.05151,
    "lon": -3.74823
  },
  {
    "name": "Crystal Palace",
    "code": "CYP",
    "lat": 51.41811,
    "lon": -0.0726
  },
  {
    "name": "Cathays",
    "code": "CYS",
    "lat": 51.4889,
    "lon": -3.17869
  },
  {
    "name": "Cherry Tree",
    "code": "CYT",
    "lat": 53.73288,
    "lon": -2.51839
  },
  {
    "name": "Dalgety Bay",
    "code": "DAG",
    "lat": 56.04208,
    "lon": -3.36772
  },
  {
    "name": "Dalmarnock",
    "code": "DAK",
    "lat": 55.84207,
    "lon": -4.2177
  },
  {
    "name": "Dalmally",
    "code": "DAL",
    "lat": 56.40117,
    "lon": -4.98354
  },
  {
    "name": "Dalmeny",
    "code": "DAM",
    "lat": 55.98631,
    "lon": -3.38162
  },
  {
    "name": "Darnall",
    "code": "DAN",
    "lat": 53.3846,
    "lon": -1.41256
  },
  {
    "name": "Darlington",
    "code": "DAR",
    "lat": 54.52045,
    "lon": -1.54733
  },
  {
    "name": "Datchet",
    "code": "DAT",
    "lat": 51.48308,
    "lon": -0.57942
  },
  {
    "name": "Dumbarton Central",
    "code": "DBC",
    "lat": 55.94664,
    "lon": -4.56691
  },
  {
    "name": "Denby Dale",
    "code": "DBD",
    "lat": 53.57264,
    "lon": -1.66321
  },
  {
    "name": "Dumbarton East",
    "code": "DBE",
    "lat": 55.94224,
    "lon": -4.55412
  },
  {
    "name": "Mottisfont & Dunbridge",
    "code": "DBG",
    "lat": 51.03392,
    "lon": -1.54709
  },
  {
    "name": "Dunblane",
    "code": "DBL",
    "lat": 56.18587,
    "lon": -3.96548
  },
  {
    "name": "Derby Road (Ipswich)",
    "code": "DBR",
    "lat": 52.05057,
    "lon": 1.18266
  },
  {
    "name": "Derby",
    "code": "DBY",
    "lat": 52.91657,
    "lon": -1.46335
  },
  {
    "name": "Duncraig",
    "code": "DCG",
    "lat": 57.33698,
    "lon": -5.63713
  },
  {
    "name": "Dorchester South",
    "code": "DCH",
    "lat": 50.70928,
    "lon": -2.43725
  },
  {
    "name": "Danescourt",
    "code": "DCT",
    "lat": 51.50051,
    "lon": -3.23393
  },
  {
    "name": "Dorchester West",
    "code": "DCW",
    "lat": 50.71094,
    "lon": -2.44255
  },
  {
    "name": "Dorridge",
    "code": "DDG",
    "lat": 52.37208,
    "lon": -1.75291
  },
  {
    "name": "Dagenham Dock",
    "code": "DDK",
    "lat": 51.52609,
    "lon": 0.14612
  },
  {
    "name": "Dudley Port",
    "code": "DDP",
    "lat": 52.52466,
    "lon": -2.04948
  },
  {
    "name": "Deal",
    "code": "DEA",
    "lat": 51.22305,
    "lon": 1.39886
  },
  {
    "name": "Dundee",
    "code": "DEE",
    "lat": 56.45648,
    "lon": -2.9712
  },
  {
    "name": "Dean",
    "code": "DEN",
    "lat": 51.04246,
    "lon": -1.63488
  },
  {
    "name": "Deptford",
    "code": "DEP",
    "lat": 51.47885,
    "lon": -0.02626
  },
  {
    "name": "Dewsbury",
    "code": "DEW",
    "lat": 53.69215,
    "lon": -1.6331
  },
  {
    "name": "Dartford",
    "code": "DFD",
    "lat": 51.44737,
    "lon": 0.21926
  },
  {
    "name": "Dunfermline Town",
    "code": "DFE",
    "lat": 56.06818,
    "lon": -3.45253
  },
  {
    "name": "Duffield",
    "code": "DFI",
    "lat": 52.98842,
    "lon": -1.48597
  },
  {
    "name": "Dunfermline Queen Margaret",
    "code": "DFL",
    "lat": 56.08056,
    "lon": -3.42147
  },
  {
    "name": "Drumfrochar",
    "code": "DFR",
    "lat": 55.94124,
    "lon": -4.77476
  },
  {
    "name": "Denham Golf Club",
    "code": "DGC",
    "lat": 51.5806,
    "lon": -0.51778
  },
  {
    "name": "Dingle Road",
    "code": "DGL",
    "lat": 51.44005,
    "lon": -3.18061
  },
  {
    "name": "Deansgate",
    "code": "DGT",
    "lat": 53.47419,
    "lon": -2.25105
  },
  {
    "name": "Deganwy",
    "code": "DGY",
    "lat": 53.29477,
    "lon": -3.8334
  },
  {
    "name": "Durham",
    "code": "DHM",
    "lat": 54.77939,
    "lon": -1.58176
  },
  {
    "name": "Deighton",
    "code": "DHN",
    "lat": 53.6685,
    "lon": -1.7519
  },
  {
    "name": "Didcot Parkway",
    "code": "DID",
    "lat": 51.61096,
    "lon": -1.24289
  },
  {
    "name": "Digby & Sowton",
    "code": "DIG",
    "lat": 50.71398,
    "lon": -3.47358
  },
  {
    "name": "Dingwall",
    "code": "DIN",
    "lat": 57.59422,
    "lon": -4.4222
  },
  {
    "name": "Diss",
    "code": "DIS",
    "lat": 52.37368,
    "lon": 1.12371
  },
  {
    "name": "Dunkeld & Birnam",
    "code": "DKD",
    "lat": 56.55704,
    "lon": -3.5784
  },
  {
    "name": "Dorking",
    "code": "DKG",
    "lat": 51.24093,
    "lon": -0.32424
  },
  {
    "name": "Dorking West",
    "code": "DKT",
    "lat": 51.23622,
    "lon": -0.33997
  },
  {
    "name": "Dolgarrog",
    "code": "DLG",
    "lat": 53.18636,
    "lon": -3.82265
  },
  {
    "name": "Doleham",
    "code": "DLH",
    "lat": 50.91858,
    "lon": 0.60998
  },
  {
    "name": "Dalston Junction",
    "code": "DLJ",
    "lat": 51.54612,
    "lon": -0.07513
  },
  {
    "name": "Dalston Kingsland",
    "code": "DLK",
    "lat": 51.54815,
    "lon": -0.07569
  },
  {
    "name": "Delamere",
    "code": "DLM",
    "lat": 53.22879,
    "lon": -2.66656
  },
  {
    "name": "Dalreoch",
    "code": "DLR",
    "lat": 55.9474,
    "lon": -4.57785
  },
  {
    "name": "Dalston (Cumbria)",
    "code": "DLS",
    "lat": 54.84617,
    "lon": -2.98885
  },
  {
    "name": "Dalton",
    "code": "DLT",
    "lat": 54.15424,
    "lon": -3.17901
  },
  {
    "name": "Dalwhinnie",
    "code": "DLW",
    "lat": 56.93516,
    "lon": -4.2462
  },
  {
    "name": "Dalry",
    "code": "DLY",
    "lat": 55.70621,
    "lon": -4.71107
  },
  {
    "name": "Drumchapel",
    "code": "DMC",
    "lat": 55.9048,
    "lon": -4.36287
  },
  {
    "name": "Dumfries",
    "code": "DMF",
    "lat": 55.07255,
    "lon": -3.6043
  },
  {
    "name": "Dinas (Rhondda)",
    "code": "DMG",
    "lat": 51.61783,
    "lon": -3.43756
  },
  {
    "name": "Dilton Marsh",
    "code": "DMH",
    "lat": 51.24898,
    "lon": -2.20793
  },
  {
    "name": "Denmark Hill",
    "code": "DMK",
    "lat": 51.46821,
    "lon": -0.08936
  },
  {
    "name": "Dumpton Park",
    "code": "DMP",
    "lat": 51.34571,
    "lon": 1.42584
  },
  {
    "name": "Dalmuir",
    "code": "DMR",
    "lat": 55.91192,
    "lon": -4.42668
  },
  {
    "name": "Dormans",
    "code": "DMS",
    "lat": 51.15579,
    "lon": -0.0043
  },
  {
    "name": "Drumry",
    "code": "DMY",
    "lat": 55.90458,
    "lon": -4.38547
  },
  {
    "name": "Dinsdale",
    "code": "DND",
    "lat": 54.51473,
    "lon": -1.46707
  },
  {
    "name": "Dunton Green",
    "code": "DNG",
    "lat": 51.29649,
    "lon": 0.17095
  },
  {
    "name": "Dunlop",
    "code": "DNL",
    "lat": 55.71187,
    "lon": -4.53237
  },
  {
    "name": "Denham",
    "code": "DNM",
    "lat": 51.57884,
    "lon": -0.49743
  },
  {
    "name": "Dunrobin Castle",
    "code": "DNO",
    "lat": 57.98552,
    "lon": -3.94894
  },
  {
    "name": "Dinas Powys",
    "code": "DNS",
    "lat": 51.43166,
    "lon": -3.21836
  },
  {
    "name": "Dent",
    "code": "DNT",
    "lat": 54.28242,
    "lon": -2.3636
  },
  {
    "name": "Danby",
    "code": "DNY",
    "lat": 54.46616,
    "lon": -0.91096
  },
  {
    "name": "Dockyard (Plymouth)",
    "code": "DOC",
    "lat": 50.38216,
    "lon": -4.17594
  },
  {
    "name": "Dodworth",
    "code": "DOD",
    "lat": 53.54435,
    "lon": -1.53169
  },
  {
    "name": "Dolau",
    "code": "DOL",
    "lat": 52.29536,
    "lon": -3.26363
  },
  {
    "name": "Doncaster",
    "code": "DON",
    "lat": 53.52217,
    "lon": -1.13984
  },
  {
    "name": "Dore & Totley",
    "code": "DOR",
    "lat": 53.32765,
    "lon": -1.51529
  },
  {
    "name": "Dunston",
    "code": "DOT",
    "lat": 54.95005,
    "lon": -1.64205
  },
  {
    "name": "Downham Market",
    "code": "DOW",
    "lat": 52.60413,
    "lon": 0.36569
  },
  {
    "name": "Dorking Deepdene",
    "code": "DPD",
    "lat": 51.2388,
    "lon": -0.32463
  },
  {
    "name": "Devonport",
    "code": "DPT",
    "lat": 50.37852,
    "lon": -4.17075
  },
  {
    "name": "Driffield",
    "code": "DRF",
    "lat": 54.00154,
    "lon": -0.43467
  },
  {
    "name": "Drayton Green",
    "code": "DRG",
    "lat": 51.51662,
    "lon": -0.3302
  },
  {
    "name": "Drigg",
    "code": "DRI",
    "lat": 54.37696,
    "lon": -3.44341
  },
  {
    "name": "Drem",
    "code": "DRM",
    "lat": 56.00512,
    "lon": -2.78605
  },
  {
    "name": "Duirinish",
    "code": "DRN",
    "lat": 57.31995,
    "lon": -5.69132
  },
  {
    "name": "Dronfield",
    "code": "DRO",
    "lat": 53.30139,
    "lon": -1.46877
  },
  {
    "name": "Darton",
    "code": "DRT",
    "lat": 53.58838,
    "lon": -1.53165
  },
  {
    "name": "Drumgelloch",
    "code": "DRU",
    "lat": 55.86735,
    "lon": -3.94888
  },
  {
    "name": "Disley",
    "code": "DSL",
    "lat": 53.3582,
    "lon": -2.04248
  },
  {
    "name": "Darsham",
    "code": "DSM",
    "lat": 52.27301,
    "lon": 1.52348
  },
  {
    "name": "Duke Street",
    "code": "DST",
    "lat": 55.85842,
    "lon": -4.21304
  },
  {
    "name": "Daisy Hill",
    "code": "DSY",
    "lat": 53.53947,
    "lon": -2.51587
  },
  {
    "name": "Dinting",
    "code": "DTG",
    "lat": 53.44935,
    "lon": -1.97031
  },
  {
    "name": "Denton",
    "code": "DTN",
    "lat": 53.45688,
    "lon": -2.13166
  },
  {
    "name": "Droitwich Spa",
    "code": "DTW",
    "lat": 52.26822,
    "lon": -2.15837
  },
  {
    "name": "Duddeston",
    "code": "DUD",
    "lat": 52.48837,
    "lon": -1.87139
  },
  {
    "name": "Dullingham",
    "code": "DUL",
    "lat": 52.20167,
    "lon": 0.36667
  },
  {
    "name": "Dumbreck",
    "code": "DUM",
    "lat": 55.84463,
    "lon": -4.30123
  },
  {
    "name": "Dunbar",
    "code": "DUN",
    "lat": 55.99829,
    "lon": -2.51335
  },
  {
    "name": "Durrington-on-Sea",
    "code": "DUR",
    "lat": 50.81752,
    "lon": -0.41146
  },
  {
    "name": "Dovercourt",
    "code": "DVC",
    "lat": 51.93875,
    "lon": 1.28063
  },
  {
    "name": "Dove Holes",
    "code": "DVH",
    "lat": 53.30004,
    "lon": -1.88976
  },
  {
    "name": "Davenport",
    "code": "DVN",
    "lat": 53.39092,
    "lon": -2.15296
  },
  {
    "name": "Dover Priory",
    "code": "DVP",
    "lat": 51.1257,
    "lon": 1.30531
  },
  {
    "name": "Dovey Junction",
    "code": "DVY",
    "lat": 52.56437,
    "lon": -3.92391
  },
  {
    "name": "Dolwyddelan",
    "code": "DWD",
    "lat": 53.05203,
    "lon": -3.88514
  },
  {
    "name": "Dawlish",
    "code": "DWL",
    "lat": 50.58081,
    "lon": -3.46465
  },
  {
    "name": "Darwen",
    "code": "DWN",
    "lat": 53.69804,
    "lon": -2.46495
  },
  {
    "name": "Dawlish Warren",
    "code": "DWW",
    "lat": 50.5987,
    "lon": -3.44358
  },
  {
    "name": "Dyce",
    "code": "DYC",
    "lat": 57.20564,
    "lon": -2.19233
  },
  {
    "name": "Dyffryn Ardudwy",
    "code": "DYF",
    "lat": 52.78887,
    "lon": -4.10466
  },
  {
    "name": "Drayton Park",
    "code": "DYP",
    "lat": 51.55278,
    "lon": -0.1055
  },
  {
    "name": "Danzey",
    "code": "DZY",
    "lat": 52.32483,
    "lon": -1.82087
  },
  {
    "name": "Earlsfield",
    "code": "EAD",
    "lat": 51.44234,
    "lon": -0.18771
  },
  {
    "name": "Eaglescliffe",
    "code": "EAG",
    "lat": 54.52943,
    "lon": -1.34944
  },
  {
    "name": "Ealing Broadway",
    "code": "EAL",
    "lat": 51.51485,
    "lon": -0.30175
  },
  {
    "name": "Earley",
    "code": "EAR",
    "lat": 51.4411,
    "lon": -0.91799
  },
  {
    "name": "Euxton Balshaw Lane",
    "code": "EBA",
    "lat": 53.66049,
    "lon": -2.67202
  },
  {
    "name": "Ebbw Vale Town",
    "code": "EBB",
    "lat": 51.77669,
    "lon": -3.20259
  },
  {
    "name": "Ebbsfleet International",
    "code": "EBD",
    "lat": 51.44297,
    "lon": 0.32092
  },
  {
    "name": "Eastbrook",
    "code": "EBK",
    "lat": 51.43764,
    "lon": -3.20615
  },
  {
    "name": "East Boldon",
    "code": "EBL",
    "lat": 54.94641,
    "lon": -1.42031
  },
  {
    "name": "Eastbourne",
    "code": "EBN",
    "lat": 50.76937,
    "lon": 0.28126
  },
  {
    "name": "Edenbridge",
    "code": "EBR",
    "lat": 51.20843,
    "lon": 0.06065
  },
  {
    "name": "Edenbridge Town",
    "code": "EBT",
    "lat": 51.20008,
    "lon": 0.06718
  },
  {
    "name": "Ebbw Vale Parkway",
    "code": "EBV",
    "lat": 51.75714,
    "lon": -3.19611
  },
  {
    "name": "Eccles",
    "code": "ECC",
    "lat": 53.48537,
    "lon": -2.33452
  },
  {
    "name": "Eccleston Park",
    "code": "ECL",
    "lat": 53.4308,
    "lon": -2.78004
  },
  {
    "name": "Energlyn & Churchill Park",
    "code": "ECP",
    "lat": 51.58321,
    "lon": -3.22881
  },
  {
    "name": "East Croydon",
    "code": "ECR",
    "lat": 51.37545,
    "lon": -0.09278
  },
  {
    "name": "Eccles Road",
    "code": "ECS",
    "lat": 52.4709,
    "lon": 0.96993
  },
  {
    "name": "Edinburgh",
    "code": "EDB",
    "lat": 55.95239,
    "lon": -3.18822
  },
  {
    "name": "Edge Hill",
    "code": "EDG",
    "lat": 53.40263,
    "lon": -2.94649
  },
  {
    "name": "Edale",
    "code": "EDL",
    "lat": 53.36499,
    "lon": -1.81663
  },
  {
    "name": "Eden Park",
    "code": "EDN",
    "lat": 51.39009,
    "lon": -0.02635
  },
  {
    "name": "Edinburgh Park",
    "code": "EDP",
    "lat": 55.92754,
    "lon": -3.30766
  },
  {
    "name": "Edmonton Green",
    "code": "EDR",
    "lat": 51.62494,
    "lon": -0.06111
  },
  {
    "name": "East Dulwich",
    "code": "EDW",
    "lat": 51.4615,
    "lon": -0.08057
  },
  {
    "name": "East Didsbury",
    "code": "EDY",
    "lat": 53.40933,
    "lon": -2.222
  },
  {
    "name": "Effingham Junction",
    "code": "EFF",
    "lat": 51.29149,
    "lon": -0.41996
  },
  {
    "name": "East Farleigh",
    "code": "EFL",
    "lat": 51.25523,
    "lon": 0.48473
  },
  {
    "name": "East Garforth",
    "code": "EGF",
    "lat": 53.792,
    "lon": -1.37054
  },
  {
    "name": "Eggesford",
    "code": "EGG",
    "lat": 50.88773,
    "lon": -3.87478
  },
  {
    "name": "Egham",
    "code": "EGH",
    "lat": 51.42965,
    "lon": -0.54651
  },
  {
    "name": "Eastrington",
    "code": "EGN",
    "lat": 53.75518,
    "lon": -0.78763
  },
  {
    "name": "East Grinstead",
    "code": "EGR",
    "lat": 51.12627,
    "lon": -0.0179
  },
  {
    "name": "Egton",
    "code": "EGT",
    "lat": 54.43749,
    "lon": -0.76146
  },
  {
    "name": "Eskbank",
    "code": "EKB",
    "lat": 55.88179,
    "lon": -3.08306
  },
  {
    "name": "East Kilbride",
    "code": "EKL",
    "lat": 55.76599,
    "lon": -4.18022
  },
  {
    "name": "Earlswood (Surrey)",
    "code": "ELD",
    "lat": 51.22733,
    "lon": -0.17082
  },
  {
    "name": "Elmers End",
    "code": "ELE",
    "lat": 51.39849,
    "lon": -0.04956
  },
  {
    "name": "Elgin",
    "code": "ELG",
    "lat": 57.6429,
    "lon": -3.31125
  },
  {
    "name": "Elton & Orston",
    "code": "ELO",
    "lat": 52.95216,
    "lon": -0.85551
  },
  {
    "name": "Ellesmere Port",
    "code": "ELP",
    "lat": 53.28221,
    "lon": -2.89643
  },
  {
    "name": "Elsecar",
    "code": "ELR",
    "lat": 53.49868,
    "lon": -1.42742
  },
  {
    "name": "Elstree & Borehamwood",
    "code": "ELS",
    "lat": 51.65307,
    "lon": -0.28008
  },
  {
    "name": "Eltham",
    "code": "ELW",
    "lat": 51.45565,
    "lon": 0.05248
  },
  {
    "name": "Ely",
    "code": "ELY",
    "lat": 52.39125,
    "lon": 0.26683
  },
  {
    "name": "East Midlands Parkway",
    "code": "EMD",
    "lat": 52.86252,
    "lon": -1.26324
  },
  {
    "name": "East Malling",
    "code": "EML",
    "lat": 51.28581,
    "lon": 0.43928
  },
  {
    "name": "Emerson Park",
    "code": "EMP",
    "lat": 51.56865,
    "lon": 0.22013
  },
  {
    "name": "Emsworth",
    "code": "EMS",
    "lat": 50.8516,
    "lon": -0.93842
  },
  {
    "name": "Enfield Chase",
    "code": "ENC",
    "lat": 51.65326,
    "lon": -0.09069
  },
  {
    "name": "Enfield Town",
    "code": "ENF",
    "lat": 51.65203,
    "lon": -0.07932
  },
  {
    "name": "Enfield Lock",
    "code": "ENL",
    "lat": 51.67093,
    "lon": -0.02852
  },
  {
    "name": "Entwistle",
    "code": "ENT",
    "lat": 53.65599,
    "lon": -2.41455
  },
  {
    "name": "Epsom Downs",
    "code": "EPD",
    "lat": 51.32369,
    "lon": -0.23895
  },
  {
    "name": "Elephant & Castle",
    "code": "EPH",
    "lat": 51.49403,
    "lon": -0.09872
  },
  {
    "name": "Epsom",
    "code": "EPS",
    "lat": 51.33439,
    "lon": -0.26878
  },
  {
    "name": "Eastham Rake",
    "code": "ERA",
    "lat": 53.30756,
    "lon": -2.98114
  },
  {
    "name": "Eridge - A26",
    "code": "ERB",
    "lat": 51.08771,
    "lon": 0.2013
  },
  {
    "name": "Erdington",
    "code": "ERD",
    "lat": 52.52829,
    "lon": -1.8395
  },
  {
    "name": "Erith",
    "code": "ERH",
    "lat": 51.48167,
    "lon": 0.17507
  },
  {
    "name": "Eridge",
    "code": "ERI",
    "lat": 51.08896,
    "lon": 0.20144
  },
  {
    "name": "Earlestown",
    "code": "ERL",
    "lat": 53.45115,
    "lon": -2.63766
  },
  {
    "name": "Elmstead Woods",
    "code": "ESD",
    "lat": 51.41712,
    "lon": 0.04428
  },
  {
    "name": "Esher",
    "code": "ESH",
    "lat": 51.37989,
    "lon": -0.35333
  },
  {
    "name": "Eastleigh",
    "code": "ESL",
    "lat": 50.96924,
    "lon": -1.35009
  },
  {
    "name": "Elsenham",
    "code": "ESM",
    "lat": 51.92055,
    "lon": 0.22807
  },
  {
    "name": "Easterhouse",
    "code": "EST",
    "lat": 55.85974,
    "lon": -4.10716
  },
  {
    "name": "Elmswell",
    "code": "ESW",
    "lat": 52.23805,
    "lon": 0.9126
  },
  {
    "name": "Etchingham",
    "code": "ETC",
    "lat": 51.01054,
    "lon": 0.44237
  },
  {
    "name": "East Tilbury",
    "code": "ETL",
    "lat": 51.48483,
    "lon": 0.41293
  },
  {
    "name": "London Euston",
    "code": "EUS",
    "lat": 51.52814,
    "lon": -0.13392
  },
  {
    "name": "Evesham",
    "code": "EVE",
    "lat": 52.0984,
    "lon": -1.94731
  },
  {
    "name": "Earlswood (West Midlands)",
    "code": "EWD",
    "lat": 52.3666,
    "lon": -1.86117
  },
  {
    "name": "Ewell East",
    "code": "EWE",
    "lat": 51.3453,
    "lon": -0.24153
  },
  {
    "name": "East Worthing",
    "code": "EWR",
    "lat": 50.82164,
    "lon": -0.35489
  },
  {
    "name": "Ewell West",
    "code": "EWW",
    "lat": 51.35005,
    "lon": -0.25699
  },
  {
    "name": "Exeter Central",
    "code": "EXC",
    "lat": 50.72647,
    "lon": -3.5333
  },
  {
    "name": "Exeter St Davids",
    "code": "EXD",
    "lat": 50.72926,
    "lon": -3.54331
  },
  {
    "name": "Exhibition Centre (Glasgow)",
    "code": "EXG",
    "lat": 55.86154,
    "lon": -4.28358
  },
  {
    "name": "Exmouth",
    "code": "EXM",
    "lat": 50.62162,
    "lon": -3.41499
  },
  {
    "name": "Exton",
    "code": "EXN",
    "lat": 50.66829,
    "lon": -3.44412
  },
  {
    "name": "Essex Road",
    "code": "EXR",
    "lat": 51.54071,
    "lon": -0.09627
  },
  {
    "name": "Exeter St Thomas",
    "code": "EXT",
    "lat": 50.71714,
    "lon": -3.53886
  },
  {
    "name": "Eynsford",
    "code": "EYN",
    "lat": 51.36272,
    "lon": 0.20441
  },
  {
    "name": "Falmouth Docks",
    "code": "FAL",
    "lat": 50.15069,
    "lon": -5.05608
  },
  {
    "name": "Faversham",
    "code": "FAV",
    "lat": 51.31171,
    "lon": 0.89106
  },
  {
    "name": "Fazakerley",
    "code": "FAZ",
    "lat": 53.4691,
    "lon": -2.93673
  },
  {
    "name": "Formby",
    "code": "FBY",
    "lat": 53.55349,
    "lon": -3.07092
  },
  {
    "name": "Falconwood",
    "code": "FCN",
    "lat": 51.45916,
    "lon": 0.07931
  },
  {
    "name": "Featherstone",
    "code": "FEA",
    "lat": 53.67908,
    "lon": -1.35845
  },
  {
    "name": "Feltham",
    "code": "FEL",
    "lat": 51.4479,
    "lon": -0.40983
  },
  {
    "name": "Fenny Stratford",
    "code": "FEN",
    "lat": 52.00008,
    "lon": -0.71599
  },
  {
    "name": "Fernhill",
    "code": "FER",
    "lat": 51.68649,
    "lon": -3.3959
  },
  {
    "name": "Ffairfach",
    "code": "FFA",
    "lat": 51.87248,
    "lon": -3.99289
  },
  {
    "name": "Freshford",
    "code": "FFD",
    "lat": 51.34203,
    "lon": -2.30102
  },
  {
    "name": "Fishguard Harbour",
    "code": "FGH",
    "lat": 52.01155,
    "lon": -4.98567
  },
  {
    "name": "Faygate",
    "code": "FGT",
    "lat": 51.09588,
    "lon": -0.26302
  },
  {
    "name": "Fishguard & Goodwick",
    "code": "FGW",
    "lat": 52.00413,
    "lon": -4.99487
  },
  {
    "name": "Filey",
    "code": "FIL",
    "lat": 54.20987,
    "lon": -0.29385
  },
  {
    "name": "Finstock",
    "code": "FIN",
    "lat": 51.85279,
    "lon": -1.46935
  },
  {
    "name": "Filton Abbey Wood",
    "code": "FIT",
    "lat": 51.50494,
    "lon": -2.56244
  },
  {
    "name": "Folkestone Central",
    "code": "FKC",
    "lat": 51.08289,
    "lon": 1.16949
  },
  {
    "name": "Falkirk Grahamston",
    "code": "FKG",
    "lat": 56.0026,
    "lon": -3.78504
  },
  {
    "name": "Falkirk High",
    "code": "FKK",
    "lat": 55.9918,
    "lon": -3.79224
  },
  {
    "name": "Folkestone West",
    "code": "FKW",
    "lat": 51.08459,
    "lon": 1.15391
  },
  {
    "name": "Fauldhouse",
    "code": "FLD",
    "lat": 55.82247,
    "lon": -3.71931
  },
  {
    "name": "Fleet",
    "code": "FLE",
    "lat": 51.29063,
    "lon": -0.83081
  },
  {
    "name": "Flowery Field",
    "code": "FLF",
    "lat": 53.46187,
    "lon": -2.08105
  },
  {
    "name": "Flixton",
    "code": "FLI",
    "lat": 53.44383,
    "lon": -2.38425
  },
  {
    "name": "Flimby",
    "code": "FLM",
    "lat": 54.68969,
    "lon": -3.52074
  },
  {
    "name": "Flint",
    "code": "FLN",
    "lat": 53.24954,
    "lon": -3.13301
  },
  {
    "name": "Flitwick",
    "code": "FLT",
    "lat": 52.00365,
    "lon": -0.49526
  },
  {
    "name": "Fulwell",
    "code": "FLW",
    "lat": 51.43394,
    "lon": -0.34947
  },
  {
    "name": "Felixstowe",
    "code": "FLX",
    "lat": 51.96709,
    "lon": 1.35046
  },
  {
    "name": "Frimley",
    "code": "FML",
    "lat": 51.31186,
    "lon": -0.74699
  },
  {
    "name": "Falmer",
    "code": "FMR",
    "lat": 50.86212,
    "lon": -0.08738
  },
  {
    "name": "Falmouth Town",
    "code": "FMT",
    "lat": 50.14833,
    "lon": -5.06499
  },
  {
    "name": "Farnborough (Main)",
    "code": "FNB",
    "lat": 51.29669,
    "lon": -0.75544
  },
  {
    "name": "Farncombe",
    "code": "FNC",
    "lat": 51.19715,
    "lon": -0.60455
  },
  {
    "name": "Farnham",
    "code": "FNH",
    "lat": 51.2119,
    "lon": -0.79243
  },
  {
    "name": "Farnborough North",
    "code": "FNN",
    "lat": 51.30204,
    "lon": -0.74303
  },
  {
    "name": "Farningham Road",
    "code": "FNR",
    "lat": 51.40167,
    "lon": 0.23547
  },
  {
    "name": "Feniton",
    "code": "FNT",
    "lat": 50.78667,
    "lon": -3.28543
  },
  {
    "name": "Furness Vale",
    "code": "FNV",
    "lat": 53.34877,
    "lon": -1.98884
  },
  {
    "name": "Farnworth",
    "code": "FNW",
    "lat": 53.55002,
    "lon": -2.38785
  },
  {
    "name": "Finchley Road & Frognal",
    "code": "FNY",
    "lat": 51.55027,
    "lon": -0.18314
  },
  {
    "name": "Falls of Cruachan",
    "code": "FOC",
    "lat": 56.39387,
    "lon": -5.11246
  },
  {
    "name": "Ford",
    "code": "FOD",
    "lat": 50.82938,
    "lon": -0.57841
  },
  {
    "name": "Forest Gate",
    "code": "FOG",
    "lat": 51.54944,
    "lon": 0.02436
  },
  {
    "name": "Forest Hill",
    "code": "FOH",
    "lat": 51.43928,
    "lon": -0.05315
  },
  {
    "name": "Four Oaks",
    "code": "FOK",
    "lat": 52.57979,
    "lon": -1.82804
  },
  {
    "name": "Forres",
    "code": "FOR",
    "lat": 57.60978,
    "lon": -3.62596
  },
  {
    "name": "Foxfield",
    "code": "FOX",
    "lat": 54.25868,
    "lon": -3.21607
  },
  {
    "name": "Finsbury Park",
    "code": "FPK",
    "lat": 51.56431,
    "lon": -0.10628
  },
  {
    "name": "Fairbourne",
    "code": "FRB",
    "lat": 52.69606,
    "lon": -4.04943
  },
  {
    "name": "Frodsham",
    "code": "FRD",
    "lat": 53.29583,
    "lon": -2.72357
  },
  {
    "name": "Freshfield",
    "code": "FRE",
    "lat": 53.56607,
    "lon": -3.07184
  },
  {
    "name": "Fairfield",
    "code": "FRF",
    "lat": 53.47131,
    "lon": -2.14577
  },
  {
    "name": "Frinton-on-Sea",
    "code": "FRI",
    "lat": 51.83769,
    "lon": 1.24319
  },
  {
    "name": "Fairlie",
    "code": "FRL",
    "lat": 55.75193,
    "lon": -4.85326
  },
  {
    "name": "Fareham",
    "code": "FRM",
    "lat": 50.85302,
    "lon": -1.19204
  },
  {
    "name": "Fearn",
    "code": "FRN",
    "lat": 57.77813,
    "lon": -3.99394
  },
  {
    "name": "Frome",
    "code": "FRO",
    "lat": 51.22726,
    "lon": -2.31001
  },
  {
    "name": "Forsinard",
    "code": "FRS",
    "lat": 58.35688,
    "lon": -3.89689
  },
  {
    "name": "Frant",
    "code": "FRT",
    "lat": 51.10402,
    "lon": 0.29456
  },
  {
    "name": "Fairwater",
    "code": "FRW",
    "lat": 51.49391,
    "lon": -3.23385
  },
  {
    "name": "Ferriby",
    "code": "FRY",
    "lat": 53.71717,
    "lon": -0.50782
  },
  {
    "name": "Fishbourne",
    "code": "FSB",
    "lat": 50.83904,
    "lon": -0.81509
  },
  {
    "name": "Fishersgate",
    "code": "FSG",
    "lat": 50.83423,
    "lon": -0.21941
  },
  {
    "name": "Fiskerton",
    "code": "FSK",
    "lat": 53.0603,
    "lon": -0.91218
  },
  {
    "name": "London Fenchurch Street",
    "code": "FST",
    "lat": 51.51165,
    "lon": -0.07889
  },
  {
    "name": "Fort Matilda",
    "code": "FTM",
    "lat": 55.95902,
    "lon": -4.79526
  },
  {
    "name": "Fratton",
    "code": "FTN",
    "lat": 50.79633,
    "lon": -1.07398
  },
  {
    "name": "Fort William",
    "code": "FTW",
    "lat": 56.82042,
    "lon": -5.10613
  },
  {
    "name": "Five Ways",
    "code": "FWY",
    "lat": 52.4711,
    "lon": -1.91295
  },
  {
    "name": "Foxton",
    "code": "FXN",
    "lat": 52.11923,
    "lon": 0.05632
  },
  {
    "name": "Ferryside",
    "code": "FYS",
    "lat": 51.76837,
    "lon": -4.36949
  },
  {
    "name": "Frizinghall",
    "code": "FZH",
    "lat": 53.82038,
    "lon": -1.769
  },
  {
    "name": "Furze Platt",
    "code": "FZP",
    "lat": 51.53302,
    "lon": -0.72847
  },
  {
    "name": "Fitzwilliam",
    "code": "FZW",
    "lat": 53.63251,
    "lon": -1.37428
  },
  {
    "name": "Galashiels",
    "code": "GAL",
    "lat": 55.61789,
    "lon": -2.80596
  },
  {
    "name": "Garrowhill",
    "code": "GAR",
    "lat": 55.85522,
    "lon": -4.12945
  },
  {
    "name": "Gilberdyke",
    "code": "GBD",
    "lat": 53.74798,
    "lon": -0.73224
  },
  {
    "name": "Gorebridge",
    "code": "GBG",
    "lat": 55.84026,
    "lon": -3.04651
  },
  {
    "name": "Greenbank",
    "code": "GBK",
    "lat": 53.25148,
    "lon": -2.53427
  },
  {
    "name": "Gainsborough Lea Road",
    "code": "GBL",
    "lat": 53.38611,
    "lon": -0.76858
  },
  {
    "name": "Goring-by-Sea",
    "code": "GBS",
    "lat": 50.81772,
    "lon": -0.43308
  },
  {
    "name": "Garelochhead",
    "code": "GCH",
    "lat": 56.07985,
    "lon": -4.82571
  },
  {
    "name": "Gloucester",
    "code": "GCR",
    "lat": 51.86556,
    "lon": -2.2385
  },
  {
    "name": "Great Coates",
    "code": "GCT",
    "lat": 53.57577,
    "lon": -0.13023
  },
  {
    "name": "Glan Conwy",
    "code": "GCW",
    "lat": 53.26744,
    "lon": -3.79774
  },
  {
    "name": "Gordon Hill",
    "code": "GDH",
    "lat": 51.66334,
    "lon": -0.0946
  },
  {
    "name": "Godley",
    "code": "GDL",
    "lat": 53.45172,
    "lon": -2.05477
  },
  {
    "name": "Godstone",
    "code": "GDN",
    "lat": 51.21815,
    "lon": -0.05008
  },
  {
    "name": "Gidea Park",
    "code": "GDP",
    "lat": 51.58191,
    "lon": 0.20598
  },
  {
    "name": "Gretna Green",
    "code": "GEA",
    "lat": 55.00105,
    "lon": -3.0652
  },
  {
    "name": "Gerrards Cross",
    "code": "GER",
    "lat": 51.58902,
    "lon": -0.55527
  },
  {
    "name": "Greenford",
    "code": "GFD",
    "lat": 51.54234,
    "lon": -0.34584
  },
  {
    "name": "Gilfach Fargoed",
    "code": "GFF",
    "lat": 51.68425,
    "lon": -3.22658
  },
  {
    "name": "Giffnock",
    "code": "GFN",
    "lat": 55.80398,
    "lon": -4.29301
  },
  {
    "name": "Georgemas Junction",
    "code": "GGJ",
    "lat": 58.51361,
    "lon": -3.45213
  },
  {
    "name": "Gargrave",
    "code": "GGV",
    "lat": 53.97842,
    "lon": -2.10516
  },
  {
    "name": "Giggleswick",
    "code": "GIG",
    "lat": 54.06181,
    "lon": -2.30285
  },
  {
    "name": "Gillingham (Dorset)",
    "code": "GIL",
    "lat": 51.03402,
    "lon": -2.27264
  },
  {
    "name": "Gipsy Hill",
    "code": "GIP",
    "lat": 51.42446,
    "lon": -0.08383
  },
  {
    "name": "Girvan",
    "code": "GIR",
    "lat": 55.24631,
    "lon": -4.84838
  },
  {
    "name": "Greenock Central",
    "code": "GKC",
    "lat": 55.94533,
    "lon": -4.75262
  },
  {
    "name": "Greenock West",
    "code": "GKW",
    "lat": 55.94733,
    "lon": -4.76782
  },
  {
    "name": "Glasgow Central",
    "code": "GLC",
    "lat": 55.85974,
    "lon": -4.25764
  },
  {
    "name": "Guildford",
    "code": "GLD",
    "lat": 51.23697,
    "lon": -0.58042
  },
  {
    "name": "Gleneagles",
    "code": "GLE",
    "lat": 56.27484,
    "lon": -3.73116
  },
  {
    "name": "Glenfinnan",
    "code": "GLF",
    "lat": 56.87238,
    "lon": -5.44962
  },
  {
    "name": "Glengarnock",
    "code": "GLG",
    "lat": 55.73888,
    "lon": -4.67449
  },
  {
    "name": "Glasshoughton",
    "code": "GLH",
    "lat": 53.70906,
    "lon": -1.34201
  },
  {
    "name": "Gillingham (Kent)",
    "code": "GLM",
    "lat": 51.38657,
    "lon": 0.54986
  },
  {
    "name": "Glossop",
    "code": "GLO",
    "lat": 53.44449,
    "lon": -1.94908
  },
  {
    "name": "Glasgow Queen Street",
    "code": "GLQ",
    "lat": 55.86217,
    "lon": -4.25145
  },
  {
    "name": "Glaisdale",
    "code": "GLS",
    "lat": 54.43939,
    "lon": -0.79379
  },
  {
    "name": "Glenrothes with Thornton",
    "code": "GLT",
    "lat": 56.16235,
    "lon": -3.14301
  },
  {
    "name": "Glynde",
    "code": "GLY",
    "lat": 50.85917,
    "lon": 0.07008
  },
  {
    "name": "Glazebrook",
    "code": "GLZ",
    "lat": 53.42838,
    "lon": -2.45966
  },
  {
    "name": "Grimsby Town",
    "code": "GMB",
    "lat": 53.56345,
    "lon": -0.08698
  },
  {
    "name": "Grimsby Docks",
    "code": "GMD",
    "lat": 53.57434,
    "lon": -0.07562
  },
  {
    "name": "Garth (Bridgend)",
    "code": "GMG",
    "lat": 51.59645,
    "lon": -3.64147
  },
  {
    "name": "Great Missenden",
    "code": "GMN",
    "lat": 51.70352,
    "lon": -0.70914
  },
  {
    "name": "Grosmont",
    "code": "GMT",
    "lat": 54.43612,
    "lon": -0.72496
  },
  {
    "name": "Great Malvern",
    "code": "GMV",
    "lat": 52.10921,
    "lon": -2.31828
  },
  {
    "name": "Goodmayes",
    "code": "GMY",
    "lat": 51.56558,
    "lon": 0.11082
  },
  {
    "name": "Gainsborough Central",
    "code": "GNB",
    "lat": 53.39961,
    "lon": -0.7697
  },
  {
    "name": "Greenfield",
    "code": "GNF",
    "lat": 53.53887,
    "lon": -2.01384
  },
  {
    "name": "Greenhithe for Bluewater",
    "code": "GNH",
    "lat": 51.45037,
    "lon": 0.28031
  },
  {
    "name": "Green Lane",
    "code": "GNL",
    "lat": 53.38327,
    "lon": -3.01642
  },
  {
    "name": "Green Road",
    "code": "GNR",
    "lat": 54.24453,
    "lon": -3.24558
  },
  {
    "name": "Gunton",
    "code": "GNT",
    "lat": 52.86638,
    "lon": 1.34913
  },
  {
    "name": "Greenwich",
    "code": "GNW",
    "lat": 51.47814,
    "lon": -0.01333
  },
  {
    "name": "Gobowen",
    "code": "GOB",
    "lat": 52.89353,
    "lon": -3.03718
  },
  {
    "name": "Godalming",
    "code": "GOD",
    "lat": 51.18658,
    "lon": -0.61886
  },
  {
    "name": "Goldthorpe",
    "code": "GOE",
    "lat": 53.53421,
    "lon": -1.31281
  },
  {
    "name": "Golf Street",
    "code": "GOF",
    "lat": 56.49778,
    "lon": -2.71954
  },
  {
    "name": "Golspie",
    "code": "GOL",
    "lat": 57.97145,
    "lon": -3.98721
  },
  {
    "name": "Gomshall",
    "code": "GOM",
    "lat": 51.2194,
    "lon": -0.44184
  },
  {
    "name": "Goole",
    "code": "GOO",
    "lat": 53.70493,
    "lon": -0.87422
  },
  {
    "name": "Goring & Streatley",
    "code": "GOR",
    "lat": 51.52149,
    "lon": -1.13304
  },
  {
    "name": "Grange-over-Sands",
    "code": "GOS",
    "lat": 54.19573,
    "lon": -2.90275
  },
  {
    "name": "Goxhill",
    "code": "GOX",
    "lat": 53.67672,
    "lon": -0.33713
  },
  {
    "name": "Grange Park",
    "code": "GPK",
    "lat": 51.64262,
    "lon": -0.09735
  },
  {
    "name": "Gospel Oak",
    "code": "GPO",
    "lat": 51.55534,
    "lon": -0.15077
  },
  {
    "name": "Grantham",
    "code": "GRA",
    "lat": 52.90649,
    "lon": -0.64245
  },
  {
    "name": "Great Bentley",
    "code": "GRB",
    "lat": 51.85177,
    "lon": 1.06516
  },
  {
    "name": "Great Chesterford",
    "code": "GRC",
    "lat": 52.05982,
    "lon": 0.19352
  },
  {
    "name": "Garforth",
    "code": "GRF",
    "lat": 53.79659,
    "lon": -1.38231
  },
  {
    "name": "Gartcosh",
    "code": "GRH",
    "lat": 55.88565,
    "lon": -4.07948
  },
  {
    "name": "Gourock",
    "code": "GRK",
    "lat": 55.9623,
    "lon": -4.81665
  },
  {
    "name": "Greenfaulds",
    "code": "GRL",
    "lat": 55.93522,
    "lon": -3.99308
  },
  {
    "name": "Grindleford",
    "code": "GRN",
    "lat": 53.30558,
    "lon": -1.6263
  },
  {
    "name": "Grove Park",
    "code": "GRP",
    "lat": 51.43087,
    "lon": 0.02173
  },
  {
    "name": "Garscadden",
    "code": "GRS",
    "lat": 55.88768,
    "lon": -4.365
  },
  {
    "name": "Grateley",
    "code": "GRT",
    "lat": 51.17006,
    "lon": -1.62078
  },
  {
    "name": "Gravesend",
    "code": "GRV",
    "lat": 51.44135,
    "lon": 0.36665
  },
  {
    "name": "Grays",
    "code": "GRY",
    "lat": 51.47625,
    "lon": 0.32183
  },
  {
    "name": "Gilshochill",
    "code": "GSC",
    "lat": 55.89732,
    "lon": -4.28268
  },
  {
    "name": "Garsdale",
    "code": "GSD",
    "lat": 54.32144,
    "lon": -2.32635
  },
  {
    "name": "Gunnislake",
    "code": "GSL",
    "lat": 50.51607,
    "lon": -4.21945
  },
  {
    "name": "Garston (Herts)",
    "code": "GSN",
    "lat": 51.68662,
    "lon": -0.38174
  },
  {
    "name": "Gathurst",
    "code": "GST",
    "lat": 53.55942,
    "lon": -2.69439
  },
  {
    "name": "Garswood",
    "code": "GSW",
    "lat": 53.48853,
    "lon": -2.67213
  },
  {
    "name": "Guiseley",
    "code": "GSY",
    "lat": 53.87595,
    "lon": -1.71508
  },
  {
    "name": "Great Ayton",
    "code": "GTA",
    "lat": 54.48958,
    "lon": -1.11535
  },
  {
    "name": "Garth (Powys)",
    "code": "GTH",
    "lat": 52.13325,
    "lon": -3.52992
  },
  {
    "name": "Grangetown (Cardiff)",
    "code": "GTN",
    "lat": 51.46761,
    "lon": -3.18973
  },
  {
    "name": "Gorton",
    "code": "GTO",
    "lat": 53.46909,
    "lon": -2.16621
  },
  {
    "name": "Goostrey",
    "code": "GTR",
    "lat": 53.22257,
    "lon": -2.32647
  },
  {
    "name": "Gatwick Airport",
    "code": "GTW",
    "lat": 51.15649,
    "lon": -0.16104
  },
  {
    "name": "Gatley",
    "code": "GTY",
    "lat": 53.39292,
    "lon": -2.23123
  },
  {
    "name": "Guide Bridge",
    "code": "GUI",
    "lat": 53.47465,
    "lon": -2.11371
  },
  {
    "name": "Gunnersbury",
    "code": "GUN",
    "lat": 51.49168,
    "lon": -0.27529
  },
  {
    "name": "Garve",
    "code": "GVE",
    "lat": 57.61302,
    "lon": -4.6884
  },
  {
    "name": "Gravelly Hill",
    "code": "GVH",
    "lat": 52.51501,
    "lon": -1.85259
  },
  {
    "name": "Gwersyllt",
    "code": "GWE",
    "lat": 53.07259,
    "lon": -3.0179
  },
  {
    "name": "Gowerton",
    "code": "GWN",
    "lat": 51.64872,
    "lon": -4.03597
  },
  {
    "name": "Great Yarmouth",
    "code": "GYM",
    "lat": 52.61218,
    "lon": 1.72091
  },
  {
    "name": "Gypsy Lane",
    "code": "GYP",
    "lat": 54.53289,
    "lon": -1.17939
  },
  {
    "name": "Habrough",
    "code": "HAB",
    "lat": 53.6061,
    "lon": -0.26946
  },
  {
    "name": "Hackney Downs",
    "code": "HAC",
    "lat": 51.54876,
    "lon": -0.06081
  },
  {
    "name": "Haddiscoe",
    "code": "HAD",
    "lat": 52.52881,
    "lon": 1.62302
  },
  {
    "name": "Heathrow Terminal 4",
    "code": "HAF",
    "lat": 51.45827,
    "lon": -0.44545
  },
  {
    "name": "Hagley",
    "code": "HAG",
    "lat": 52.4225,
    "lon": -2.14642
  },
  {
    "name": "Halling",
    "code": "HAI",
    "lat": 51.35248,
    "lon": 0.44494
  },
  {
    "name": "Hale",
    "code": "HAL",
    "lat": 53.37874,
    "lon": -2.34736
  },
  {
    "name": "Hamworthy",
    "code": "HAM",
    "lat": 50.72518,
    "lon": -2.01937
  },
  {
    "name": "Hanwell",
    "code": "HAN",
    "lat": 51.51184,
    "lon": -0.33859
  },
  {
    "name": "Hatfield Peverel",
    "code": "HAP",
    "lat": 51.77988,
    "lon": 0.59214
  },
  {
    "name": "Halesworth",
    "code": "HAS",
    "lat": 52.34683,
    "lon": 1.50568
  },
  {
    "name": "Hatfield (Herts)",
    "code": "HAT",
    "lat": 51.76388,
    "lon": -0.21559
  },
  {
    "name": "Havant",
    "code": "HAV",
    "lat": 50.85441,
    "lon": -0.98161
  },
  {
    "name": "Hayes & Harlington",
    "code": "HAY",
    "lat": 51.5031,
    "lon": -0.42067
  },
  {
    "name": "Hazel Grove",
    "code": "HAZ",
    "lat": 53.37756,
    "lon": -2.12202
  },
  {
    "name": "Hubberts Bridge",
    "code": "HBB",
    "lat": 52.97538,
    "lon": -0.11053
  },
  {
    "name": "Hebden Bridge",
    "code": "HBD",
    "lat": 53.7376,
    "lon": -2.00907
  },
  {
    "name": "Hollingbourne",
    "code": "HBN",
    "lat": 51.26517,
    "lon": 0.62786
  },
  {
    "name": "Hornbeam Park",
    "code": "HBP",
    "lat": 53.97988,
    "lon": -1.52683
  },
  {
    "name": "Hartlebury",
    "code": "HBY",
    "lat": 52.3345,
    "lon": -2.22113
  },
  {
    "name": "Hackbridge",
    "code": "HCB",
    "lat": 51.37787,
    "lon": -0.1539
  },
  {
    "name": "Holmes Chapel",
    "code": "HCH",
    "lat": 53.19895,
    "lon": -2.35115
  },
  {
    "name": "Headcorn",
    "code": "HCN",
    "lat": 51.16572,
    "lon": 0.62749
  },
  {
    "name": "Huncoat",
    "code": "HCT",
    "lat": 53.77179,
    "lon": -2.34756
  },
  {
    "name": "Haydon Bridge",
    "code": "HDB",
    "lat": 54.97518,
    "lon": -2.24759
  },
  {
    "name": "Hedge End",
    "code": "HDE",
    "lat": 50.93231,
    "lon": -1.29451
  },
  {
    "name": "Hadfield",
    "code": "HDF",
    "lat": 53.46076,
    "lon": -1.96533
  },
  {
    "name": "Heald Green",
    "code": "HDG",
    "lat": 53.36943,
    "lon": -2.23667
  },
  {
    "name": "Hampstead Heath",
    "code": "HDH",
    "lat": 51.55522,
    "lon": -0.1657
  },
  {
    "name": "Headstone Lane",
    "code": "HDL",
    "lat": 51.60265,
    "lon": -0.35722
  },
  {
    "name": "Haddenham & Thame Parkway",
    "code": "HDM",
    "lat": 51.77086,
    "lon": -0.94214
  },
  {
    "name": "Harlesden",
    "code": "HDN",
    "lat": 51.53629,
    "lon": -0.25767
  },
  {
    "name": "Hadley Wood",
    "code": "HDW",
    "lat": 51.6685,
    "lon": -0.17617
  },
  {
    "name": "Headingley",
    "code": "HDY",
    "lat": 53.81798,
    "lon": -1.59418
  },
  {
    "name": "Heckington",
    "code": "HEC",
    "lat": 52.97734,
    "lon": -0.29394
  },
  {
    "name": "Halewood",
    "code": "HED",
    "lat": 53.3645,
    "lon": -2.83014
  },
  {
    "name": "Heighington",
    "code": "HEI",
    "lat": 54.59697,
    "lon": -1.58177
  },
  {
    "name": "Hensall",
    "code": "HEL",
    "lat": 53.69856,
    "lon": -1.11452
  },
  {
    "name": "Hendon",
    "code": "HEN",
    "lat": 51.58007,
    "lon": -0.23867
  },
  {
    "name": "Hersham",
    "code": "HER",
    "lat": 51.37681,
    "lon": -0.38995
  },
  {
    "name": "Hessle",
    "code": "HES",
    "lat": 53.71745,
    "lon": -0.44182
  },
  {
    "name": "Hever",
    "code": "HEV",
    "lat": 51.18141,
    "lon": 0.09508
  },
  {
    "name": "Heworth",
    "code": "HEW",
    "lat": 54.95157,
    "lon": -1.55577
  },
  {
    "name": "Hexham",
    "code": "HEX",
    "lat": 54.97346,
    "lon": -2.0948
  },
  {
    "name": "Hereford",
    "code": "HFD",
    "lat": 52.06117,
    "lon": -2.70822
  },
  {
    "name": "Hertford East",
    "code": "HFE",
    "lat": 51.79904,
    "lon": -0.07293
  },
  {
    "name": "Hertford North",
    "code": "HFN",
    "lat": 51.79886,
    "lon": -0.09178
  },
  {
    "name": "Hatfield & Stainforth",
    "code": "HFS",
    "lat": 53.58874,
    "lon": -1.02337
  },
  {
    "name": "Halifax",
    "code": "HFX",
    "lat": 53.72098,
    "lon": -1.85358
  },
  {
    "name": "Hungerford",
    "code": "HGD",
    "lat": 51.41491,
    "lon": -1.51229
  },
  {
    "name": "Hag Fold",
    "code": "HGF",
    "lat": 53.53387,
    "lon": -2.49483
  },
  {
    "name": "Haggerston",
    "code": "HGG",
    "lat": 51.53871,
    "lon": -0.07566
  },
  {
    "name": "Higham",
    "code": "HGM",
    "lat": 51.42656,
    "lon": 0.46628
  },
  {
    "name": "Hough Green",
    "code": "HGN",
    "lat": 53.37241,
    "lon": -2.77507
  },
  {
    "name": "Hither Green",
    "code": "HGR",
    "lat": 51.45203,
    "lon": -0.00094
  },
  {
    "name": "Hastings",
    "code": "HGS",
    "lat": 50.85789,
    "lon": 0.57675
  },
  {
    "name": "Harrogate",
    "code": "HGT",
    "lat": 53.99319,
    "lon": -1.53762
  },
  {
    "name": "Harringay",
    "code": "HGY",
    "lat": 51.57736,
    "lon": -0.10513
  },
  {
    "name": "Holyhead",
    "code": "HHD",
    "lat": 53.3077,
    "lon": -4.63101
  },
  {
    "name": "Haywards Heath",
    "code": "HHE",
    "lat": 51.00567,
    "lon": -0.10508
  },
  {
    "name": "Heath High Level",
    "code": "HHL",
    "lat": 51.51643,
    "lon": -3.18155
  },
  {
    "name": "Highbury & Islington",
    "code": "HHY",
    "lat": 51.54609,
    "lon": -0.10376
  },
  {
    "name": "Hampton-in-Arden",
    "code": "HIA",
    "lat": 52.42905,
    "lon": -1.69994
  },
  {
    "name": "High Brooms",
    "code": "HIB",
    "lat": 51.1494,
    "lon": 0.27735
  },
  {
    "name": "Hall i' th' Wood",
    "code": "HID",
    "lat": 53.59744,
    "lon": -2.41311
  },
  {
    "name": "Highbridge & Burnham-on-Sea",
    "code": "HIG",
    "lat": 51.21815,
    "lon": -2.97217
  },
  {
    "name": "Hillside",
    "code": "HIL",
    "lat": 53.62212,
    "lon": -3.02472
  },
  {
    "name": "Hindley",
    "code": "HIN",
    "lat": 53.54225,
    "lon": -2.5755
  },
  {
    "name": "Highams Park",
    "code": "HIP",
    "lat": 51.60836,
    "lon": -0.00021
  },
  {
    "name": "Horton-in-Ribblesdale",
    "code": "HIR",
    "lat": 54.1494,
    "lon": -2.30203
  },
  {
    "name": "Hitchin",
    "code": "HIT",
    "lat": 51.95329,
    "lon": -0.26348
  },
  {
    "name": "Hackney Central",
    "code": "HKC",
    "lat": 51.54711,
    "lon": -0.05605
  },
  {
    "name": "Hawkhead",
    "code": "HKH",
    "lat": 55.84218,
    "lon": -4.39885
  },
  {
    "name": "Hykeham",
    "code": "HKM",
    "lat": 53.19503,
    "lon": -0.6002
  },
  {
    "name": "Hucknall",
    "code": "HKN",
    "lat": 53.03831,
    "lon": -1.19581
  },
  {
    "name": "Hackney Wick",
    "code": "HKW",
    "lat": 51.54342,
    "lon": -0.02491
  },
  {
    "name": "Hildenborough",
    "code": "HLB",
    "lat": 51.21448,
    "lon": 0.2276
  },
  {
    "name": "Helensburgh Central",
    "code": "HLC",
    "lat": 56.00419,
    "lon": -4.73275
  },
  {
    "name": "Hellifield",
    "code": "HLD",
    "lat": 54.01087,
    "lon": -2.22784
  },
  {
    "name": "Hillington East",
    "code": "HLE",
    "lat": 55.85417,
    "lon": -4.35501
  },
  {
    "name": "Hillfoot",
    "code": "HLF",
    "lat": 55.92008,
    "lon": -4.32027
  },
  {
    "name": "Hall Green",
    "code": "HLG",
    "lat": 52.43692,
    "lon": -1.84565
  },
  {
    "name": "Healing",
    "code": "HLI",
    "lat": 53.58182,
    "lon": -0.16063
  },
  {
    "name": "Heath Low Level",
    "code": "HLL",
    "lat": 51.51566,
    "lon": -3.18198
  },
  {
    "name": "Holmwood",
    "code": "HLM",
    "lat": 51.18119,
    "lon": -0.3208
  },
  {
    "name": "Harlington (Beds)",
    "code": "HLN",
    "lat": 51.96207,
    "lon": -0.49568
  },
  {
    "name": "Hall Road",
    "code": "HLR",
    "lat": 53.4975,
    "lon": -3.04964
  },
  {
    "name": "Hilsea",
    "code": "HLS",
    "lat": 50.82826,
    "lon": -1.05879
  },
  {
    "name": "Helensburgh Upper",
    "code": "HLU",
    "lat": 56.01235,
    "lon": -4.72979
  },
  {
    "name": "Hillington West",
    "code": "HLW",
    "lat": 55.85601,
    "lon": -4.37158
  },
  {
    "name": "Holytown",
    "code": "HLY",
    "lat": 55.81289,
    "lon": -3.97391
  },
  {
    "name": "Hampton Court",
    "code": "HMC",
    "lat": 51.40256,
    "lon": -0.34275
  },
  {
    "name": "Hampden Park (Sussex)",
    "code": "HMD",
    "lat": 50.7964,
    "lon": 0.27937
  },
  {
    "name": "Hamble",
    "code": "HME",
    "lat": 50.87136,
    "lon": -1.32917
  },
  {
    "name": "Hemel Hempstead",
    "code": "HML",
    "lat": 51.74234,
    "lon": -0.49076
  },
  {
    "name": "Hammerton",
    "code": "HMM",
    "lat": 53.99634,
    "lon": -1.2841
  },
  {
    "name": "Homerton",
    "code": "HMN",
    "lat": 51.54702,
    "lon": -0.04235
  },
  {
    "name": "Hampton (London)",
    "code": "HMP",
    "lat": 51.41594,
    "lon": -0.37211
  },
  {
    "name": "Helmsdale",
    "code": "HMS",
    "lat": 58.11742,
    "lon": -3.65869
  },
  {
    "name": "Ham Street",
    "code": "HMT",
    "lat": 51.06838,
    "lon": 0.85452
  },
  {
    "name": "Hampton Wick",
    "code": "HMW",
    "lat": 51.41453,
    "lon": -0.31249
  },
  {
    "name": "Hairmyres",
    "code": "HMY",
    "lat": 55.76196,
    "lon": -4.22
  },
  {
    "name": "Hinton Admiral",
    "code": "HNA",
    "lat": 50.75263,
    "lon": -1.71413
  },
  {
    "name": "Herne Bay",
    "code": "HNB",
    "lat": 51.36459,
    "lon": 1.11774
  },
  {
    "name": "Hamilton Central",
    "code": "HNC",
    "lat": 55.77318,
    "lon": -4.03887
  },
  {
    "name": "Hanborough",
    "code": "HND",
    "lat": 51.82517,
    "lon": -1.37353
  },
  {
    "name": "Hednesford",
    "code": "HNF",
    "lat": 52.71013,
    "lon": -2.00178
  },
  {
    "name": "Hengoed",
    "code": "HNG",
    "lat": 51.64741,
    "lon": -3.22414
  },
  {
    "name": "Herne Hill",
    "code": "HNH",
    "lat": 51.45331,
    "lon": -0.10228
  },
  {
    "name": "Hinckley",
    "code": "HNK",
    "lat": 52.53502,
    "lon": -1.37192
  },
  {
    "name": "Henley-in-Arden",
    "code": "HNL",
    "lat": 52.2915,
    "lon": -1.784
  },
  {
    "name": "Huntly",
    "code": "HNT",
    "lat": 57.44448,
    "lon": -2.77574
  },
  {
    "name": "Hamilton West",
    "code": "HNW",
    "lat": 55.77885,
    "lon": -4.0548
  },
  {
    "name": "Hunts Cross",
    "code": "HNX",
    "lat": 53.36073,
    "lon": -2.85586
  },
  {
    "name": "Hockley",
    "code": "HOC",
    "lat": 51.60356,
    "lon": 0.65901
  },
  {
    "name": "Harrow-on-the-Hill",
    "code": "HOH",
    "lat": 51.57919,
    "lon": -0.33723
  },
  {
    "name": "Hook",
    "code": "HOK",
    "lat": 51.28,
    "lon": -0.96164
  },
  {
    "name": "Holton Heath",
    "code": "HOL",
    "lat": 50.71139,
    "lon": -2.07786
  },
  {
    "name": "Honiton",
    "code": "HON",
    "lat": 50.79657,
    "lon": -3.18675
  },
  {
    "name": "Hooton",
    "code": "HOO",
    "lat": 53.29722,
    "lon": -2.97702
  },
  {
    "name": "Hope (Derbyshire)",
    "code": "HOP",
    "lat": 53.34613,
    "lon": -1.72989
  },
  {
    "name": "Horley",
    "code": "HOR",
    "lat": 51.16877,
    "lon": -0.16105
  },
  {
    "name": "Henley-on-Thames",
    "code": "HOT",
    "lat": 51.53418,
    "lon": -0.90022
  },
  {
    "name": "Hounslow",
    "code": "HOU",
    "lat": 51.46195,
    "lon": -0.36228
  },
  {
    "name": "Hove",
    "code": "HOV",
    "lat": 50.83521,
    "lon": -0.17069
  },
  {
    "name": "Howden",
    "code": "HOW",
    "lat": 53.76473,
    "lon": -0.86047
  },
  {
    "name": "Hoxton",
    "code": "HOX",
    "lat": 51.53152,
    "lon": -0.07568
  },
  {
    "name": "Honley",
    "code": "HOY",
    "lat": 53.60824,
    "lon": -1.78097
  },
  {
    "name": "Howwood (Renfrewshire)",
    "code": "HOZ",
    "lat": 55.81055,
    "lon": -4.56304
  },
  {
    "name": "Honor Oak Park",
    "code": "HPA",
    "lat": 51.44999,
    "lon": -0.0455
  },
  {
    "name": "Harpenden",
    "code": "HPD",
    "lat": 51.81465,
    "lon": -0.35148
  },
  {
    "name": "Hope (Flintshire)",
    "code": "HPE",
    "lat": 53.11738,
    "lon": -3.03689
  },
  {
    "name": "Hartlepool",
    "code": "HPL",
    "lat": 54.68676,
    "lon": -1.20731
  },
  {
    "name": "Hapton",
    "code": "HPN",
    "lat": 53.78163,
    "lon": -2.31691
  },
  {
    "name": "Harwich International",
    "code": "HPQ",
    "lat": 51.9473,
    "lon": 1.25514
  },
  {
    "name": "Hopton Heath",
    "code": "HPT",
    "lat": 52.39142,
    "lon": -2.91207
  },
  {
    "name": "Harling Road",
    "code": "HRD",
    "lat": 52.45371,
    "lon": 0.90915
  },
  {
    "name": "Horsham",
    "code": "HRH",
    "lat": 51.06606,
    "lon": -0.31926
  },
  {
    "name": "Harlech",
    "code": "HRL",
    "lat": 52.86134,
    "lon": -4.1092
  },
  {
    "name": "Harrietsham",
    "code": "HRM",
    "lat": 51.24483,
    "lon": 0.67241
  },
  {
    "name": "Hornsey",
    "code": "HRN",
    "lat": 51.58647,
    "lon": -0.11197
  },
  {
    "name": "Harold Wood",
    "code": "HRO",
    "lat": 51.59277,
    "lon": 0.23314
  },
  {
    "name": "Harrington",
    "code": "HRR",
    "lat": 54.61349,
    "lon": -3.56551
  },
  {
    "name": "Horsforth",
    "code": "HRS",
    "lat": 53.84772,
    "lon": -1.63022
  },
  {
    "name": "Harrow & Wealdstone",
    "code": "HRW",
    "lat": 51.59217,
    "lon": -0.33457
  },
  {
    "name": "Harringay Green Lanes",
    "code": "HRY",
    "lat": 51.57719,
    "lon": -0.09814
  },
  {
    "name": "Helsby",
    "code": "HSB",
    "lat": 53.27522,
    "lon": -2.77121
  },
  {
    "name": "Hoscar",
    "code": "HSC",
    "lat": 53.59778,
    "lon": -2.80442
  },
  {
    "name": "Hamstead (Birmingham)",
    "code": "HSD",
    "lat": 52.53108,
    "lon": -1.92898
  },
  {
    "name": "Hathersage",
    "code": "HSG",
    "lat": 53.32579,
    "lon": -1.65172
  },
  {
    "name": "Hassocks",
    "code": "HSK",
    "lat": 50.92461,
    "lon": -0.14595
  },
  {
    "name": "Haslemere",
    "code": "HSL",
    "lat": 51.08864,
    "lon": -0.71916
  },
  {
    "name": "High Street (Glasgow)",
    "code": "HST",
    "lat": 55.85955,
    "lon": -4.24011
  },
  {
    "name": "Heswall",
    "code": "HSW",
    "lat": 53.32973,
    "lon": -3.07371
  },
  {
    "name": "Horsley",
    "code": "HSY",
    "lat": 51.27935,
    "lon": -0.4354
  },
  {
    "name": "Heaton Chapel",
    "code": "HTC",
    "lat": 53.42558,
    "lon": -2.17904
  },
  {
    "name": "Hatch End",
    "code": "HTE",
    "lat": 51.60942,
    "lon": -0.3686
  },
  {
    "name": "Hartford",
    "code": "HTF",
    "lat": 53.24177,
    "lon": -2.55363
  },
  {
    "name": "Handforth",
    "code": "HTH",
    "lat": 53.34651,
    "lon": -2.21363
  },
  {
    "name": "Hatton (Warks)",
    "code": "HTN",
    "lat": 52.29529,
    "lon": -1.67298
  },
  {
    "name": "Hightown",
    "code": "HTO",
    "lat": 53.52512,
    "lon": -3.05708
  },
  {
    "name": "Heathrow Central Bus Stn (Rail-Air)",
    "code": "HTR",
    "lat": 51.4711,
    "lon": -0.4533
  },
  {
    "name": "Hartwood",
    "code": "HTW",
    "lat": 55.81147,
    "lon": -3.83932
  },
  {
    "name": "Hattersley",
    "code": "HTY",
    "lat": 53.4453,
    "lon": -2.04031
  },
  {
    "name": "Hunmanby",
    "code": "HUB",
    "lat": 54.17393,
    "lon": -0.31456
  },
  {
    "name": "Huddersfield",
    "code": "HUD",
    "lat": 53.64852,
    "lon": -1.78469
  },
  {
    "name": "Hull",
    "code": "HUL",
    "lat": 53.74417,
    "lon": -0.34568
  },
  {
    "name": "Huntingdon",
    "code": "HUN",
    "lat": 52.32866,
    "lon": -0.19206
  },
  {
    "name": "Humphrey Park",
    "code": "HUP",
    "lat": 53.45225,
    "lon": -2.32754
  },
  {
    "name": "Hurst Green",
    "code": "HUR",
    "lat": 51.24443,
    "lon": 0.00395
  },
  {
    "name": "Hutton Cranswick",
    "code": "HUT",
    "lat": 53.95587,
    "lon": -0.43385
  },
  {
    "name": "Huyton",
    "code": "HUY",
    "lat": 53.40969,
    "lon": -2.84299
  },
  {
    "name": "Haverfordwest",
    "code": "HVF",
    "lat": 51.80264,
    "lon": -4.96023
  },
  {
    "name": "Havenhouse",
    "code": "HVN",
    "lat": 53.11449,
    "lon": 0.27318
  },
  {
    "name": "Hawarden Bridge",
    "code": "HWB",
    "lat": 53.21809,
    "lon": -3.03273
  },
  {
    "name": "Harwich Town",
    "code": "HWC",
    "lat": 51.94416,
    "lon": 1.2867
  },
  {
    "name": "Hawarden",
    "code": "HWD",
    "lat": 53.18537,
    "lon": -3.03209
  },
  {
    "name": "Haltwhistle",
    "code": "HWH",
    "lat": 54.96785,
    "lon": -2.46356
  },
  {
    "name": "Horwich Parkway",
    "code": "HWI",
    "lat": 53.57812,
    "lon": -2.53967
  },
  {
    "name": "Harlow Mill",
    "code": "HWM",
    "lat": 51.79037,
    "lon": 0.13232
  },
  {
    "name": "Harlow Town",
    "code": "HWN",
    "lat": 51.78107,
    "lon": 0.09514
  },
  {
    "name": "Heathrow Terminal 5",
    "code": "HWV",
    "lat": 51.47006,
    "lon": -0.49058
  },
  {
    "name": "How Wood (Herts)",
    "code": "HWW",
    "lat": 51.71774,
    "lon": -0.34467
  },
  {
    "name": "Heathrow Terminal 5",
    "code": "HWX",
    "lat": 51.47125,
    "lon": -0.48936
  },
  {
    "name": "High Wycombe",
    "code": "HWY",
    "lat": 51.62959,
    "lon": -0.74541
  },
  {
    "name": "Hoveton & Wroxham",
    "code": "HXM",
    "lat": 52.7156,
    "lon": 1.40801
  },
  {
    "name": "Heathrow Terminals 1-3",
    "code": "HXX",
    "lat": 51.47186,
    "lon": -0.45409
  },
  {
    "name": "Honeybourne",
    "code": "HYB",
    "lat": 52.10161,
    "lon": -1.83374
  },
  {
    "name": "Hyde Central",
    "code": "HYC",
    "lat": 53.4519,
    "lon": -2.08525
  },
  {
    "name": "Heyford",
    "code": "HYD",
    "lat": 51.9192,
    "lon": -1.29927
  },
  {
    "name": "Hythe (Essex)",
    "code": "HYH",
    "lat": 51.88565,
    "lon": 0.92754
  },
  {
    "name": "Hoylake",
    "code": "HYK",
    "lat": 53.39023,
    "lon": -3.17884
  },
  {
    "name": "Hayle",
    "code": "HYL",
    "lat": 50.18555,
    "lon": -5.4199
  },
  {
    "name": "Haymarket",
    "code": "HYM",
    "lat": 55.9458,
    "lon": -3.21844
  },
  {
    "name": "Hyndland",
    "code": "HYN",
    "lat": 55.87974,
    "lon": -4.31466
  },
  {
    "name": "Haydons Road",
    "code": "HYR",
    "lat": 51.42545,
    "lon": -0.18881
  },
  {
    "name": "Hayes (Kent)",
    "code": "HYS",
    "lat": 51.37633,
    "lon": 0.01056
  },
  {
    "name": "Hyde North",
    "code": "HYT",
    "lat": 53.46482,
    "lon": -2.08545
  },
  {
    "name": "Hinchley Wood",
    "code": "HYW",
    "lat": 51.375,
    "lon": -0.34053
  },
  {
    "name": "IBM (Greenock)",
    "code": "IBM",
    "lat": 55.92944,
    "lon": -4.82723
  },
  {
    "name": "Ilford",
    "code": "IFD",
    "lat": 51.55912,
    "lon": 0.06969
  },
  {
    "name": "Ifield",
    "code": "IFI",
    "lat": 51.11562,
    "lon": -0.21477
  },
  {
    "name": "Invergordon",
    "code": "IGD",
    "lat": 57.689,
    "lon": -4.17485
  },
  {
    "name": "Ilkley",
    "code": "ILK",
    "lat": 53.92478,
    "lon": -1.82203
  },
  {
    "name": "Ilkeston",
    "code": "ILN",
    "lat": 52.97961,
    "lon": -1.29492
  },
  {
    "name": "Imperial Wharf",
    "code": "IMW",
    "lat": 51.47495,
    "lon": -0.18282
  },
  {
    "name": "Ince (Manchester)",
    "code": "INC",
    "lat": 53.53893,
    "lon": -2.61152
  },
  {
    "name": "Ince & Elton",
    "code": "INE",
    "lat": 53.27662,
    "lon": -2.81653
  },
  {
    "name": "Invergowrie",
    "code": "ING",
    "lat": 56.45646,
    "lon": -3.0574
  },
  {
    "name": "Invershin",
    "code": "INH",
    "lat": 57.92485,
    "lon": -4.39949
  },
  {
    "name": "Inverkeithing",
    "code": "INK",
    "lat": 56.03467,
    "lon": -3.39619
  },
  {
    "name": "Inverkip",
    "code": "INP",
    "lat": 55.90609,
    "lon": -4.87258
  },
  {
    "name": "Inverurie",
    "code": "INR",
    "lat": 57.28626,
    "lon": -2.37355
  },
  {
    "name": "Insch",
    "code": "INS",
    "lat": 57.33749,
    "lon": -2.61711
  },
  {
    "name": "Ingatestone",
    "code": "INT",
    "lat": 51.66705,
    "lon": 0.38425
  },
  {
    "name": "Inverness",
    "code": "INV",
    "lat": 57.47986,
    "lon": -4.22337
  },
  {
    "name": "Ipswich",
    "code": "IPS",
    "lat": 52.05061,
    "lon": 1.14444
  },
  {
    "name": "Irlam",
    "code": "IRL",
    "lat": 53.43433,
    "lon": -2.43324
  },
  {
    "name": "Irvine",
    "code": "IRV",
    "lat": 55.61086,
    "lon": -4.67514
  },
  {
    "name": "Isleworth",
    "code": "ISL",
    "lat": 51.47477,
    "lon": -0.33691
  },
  {
    "name": "Islip",
    "code": "ISP",
    "lat": 51.82576,
    "lon": -1.23818
  },
  {
    "name": "Iver",
    "code": "IVR",
    "lat": 51.50851,
    "lon": -0.50672
  },
  {
    "name": "Ivybridge",
    "code": "IVY",
    "lat": 50.3934,
    "lon": -3.90424
  },
  {
    "name": "James Cook",
    "code": "JCH",
    "lat": 54.55203,
    "lon": -1.20856
  },
  {
    "name": "Jewellery Quarter",
    "code": "JEQ",
    "lat": 52.48944,
    "lon": -1.91321
  },
  {
    "name": "Johnstone",
    "code": "JHN",
    "lat": 55.83469,
    "lon": -4.50362
  },
  {
    "name": "Johnston (Pembrokeshire)",
    "code": "JOH",
    "lat": 51.75675,
    "lon": -4.99636
  },
  {
    "name": "Jordanhill",
    "code": "JOR",
    "lat": 55.88269,
    "lon": -4.32491
  },
  {
    "name": "Kinbrace",
    "code": "KBC",
    "lat": 58.2583,
    "lon": -3.94122
  },
  {
    "name": "Kirkby-in-Furness",
    "code": "KBF",
    "lat": 54.23272,
    "lon": -3.18738
  },
  {
    "name": "Kents Bank",
    "code": "KBK",
    "lat": 54.17291,
    "lon": -2.92523
  },
  {
    "name": "Kilburn High Road",
    "code": "KBN",
    "lat": 51.53728,
    "lon": -0.19223
  },
  {
    "name": "Knebworth",
    "code": "KBW",
    "lat": 51.86686,
    "lon": -0.18728
  },
  {
    "name": "Kirby Cross",
    "code": "KBX",
    "lat": 51.84141,
    "lon": 1.21501
  },
  {
    "name": "Knockholt",
    "code": "KCK",
    "lat": 51.34579,
    "lon": 0.13086
  },
  {
    "name": "Kidbrooke",
    "code": "KDB",
    "lat": 51.46212,
    "lon": 0.02751
  },
  {
    "name": "Kidsgrove",
    "code": "KDG",
    "lat": 53.08658,
    "lon": -2.24482
  },
  {
    "name": "Kirkcaldy",
    "code": "KDY",
    "lat": 56.11205,
    "lon": -3.16702
  },
  {
    "name": "Kenley - Kenley Hotel",
    "code": "KEB",
    "lat": 51.32561,
    "lon": -0.1001
  },
  {
    "name": "Keith",
    "code": "KEH",
    "lat": 57.55089,
    "lon": -2.95408
  },
  {
    "name": "Keighley",
    "code": "KEI",
    "lat": 53.86798,
    "lon": -1.90165
  },
  {
    "name": "Kelvedon",
    "code": "KEL",
    "lat": 51.84071,
    "lon": 0.7024
  },
  {
    "name": "Kemble",
    "code": "KEM",
    "lat": 51.677,
    "lon": -2.02282
  },
  {
    "name": "Kendal",
    "code": "KEN",
    "lat": 54.33211,
    "lon": -2.73964
  },
  {
    "name": "Kettering",
    "code": "KET",
    "lat": 52.39357,
    "lon": -0.73156
  },
  {
    "name": "Keyham",
    "code": "KEY",
    "lat": 50.38987,
    "lon": -4.17964
  },
  {
    "name": "Kingsknowe",
    "code": "KGE",
    "lat": 55.91881,
    "lon": -3.26496
  },
  {
    "name": "Kinghorn",
    "code": "KGH",
    "lat": 56.06933,
    "lon": -3.17415
  },
  {
    "name": "Kings Langley",
    "code": "KGL",
    "lat": 51.70636,
    "lon": -0.43841
  },
  {
    "name": "Kingham",
    "code": "KGM",
    "lat": 51.90225,
    "lon": -1.62879
  },
  {
    "name": "Kings Nympton",
    "code": "KGN",
    "lat": 50.93607,
    "lon": -3.90544
  },
  {
    "name": "Kings Park",
    "code": "KGP",
    "lat": 55.81954,
    "lon": -4.24651
  },
  {
    "name": "Kings Sutton",
    "code": "KGS",
    "lat": 52.02135,
    "lon": -1.28093
  },
  {
    "name": "Kilgetty",
    "code": "KGT",
    "lat": 51.73211,
    "lon": -4.71519
  },
  {
    "name": "London Kings Cross",
    "code": "KGX",
    "lat": 51.53089,
    "lon": -0.12292
  },
  {
    "name": "Kidderminster",
    "code": "KID",
    "lat": 52.38449,
    "lon": -2.23848
  },
  {
    "name": "Kildonan",
    "code": "KIL",
    "lat": 58.1708,
    "lon": -3.86912
  },
  {
    "name": "Kingussie",
    "code": "KIN",
    "lat": 57.07777,
    "lon": -4.05218
  },
  {
    "name": "Kirkby",
    "code": "KIR",
    "lat": 53.4862,
    "lon": -2.90283
  },
  {
    "name": "Kintbury",
    "code": "KIT",
    "lat": 51.40252,
    "lon": -1.44599
  },
  {
    "name": "Kiveton Bridge",
    "code": "KIV",
    "lat": 53.34098,
    "lon": -1.26718
  },
  {
    "name": "Kirkby in Ashfield",
    "code": "KKB",
    "lat": 53.10012,
    "lon": -1.25306
  },
  {
    "name": "Kirkdale",
    "code": "KKD",
    "lat": 53.44091,
    "lon": -2.98112
  },
  {
    "name": "Kirkhill",
    "code": "KKH",
    "lat": 55.81391,
    "lon": -4.1671
  },
  {
    "name": "Kirkham & Wesham",
    "code": "KKM",
    "lat": 53.78693,
    "lon": -2.88294
  },
  {
    "name": "Kirknewton",
    "code": "KKN",
    "lat": 55.88868,
    "lon": -3.43251
  },
  {
    "name": "Kirk Sandall",
    "code": "KKS",
    "lat": 53.5639,
    "lon": -1.07406
  },
  {
    "name": "Kildale",
    "code": "KLD",
    "lat": 54.47777,
    "lon": -1.06815
  },
  {
    "name": "Kilmaurs",
    "code": "KLM",
    "lat": 55.6372,
    "lon": -4.53048
  },
  {
    "name": "Kings Lynn",
    "code": "KLN",
    "lat": 52.75394,
    "lon": 0.40346
  },
  {
    "name": "Kenley",
    "code": "KLY",
    "lat": 51.32478,
    "lon": -0.10092
  },
  {
    "name": "Kempston Hardwick",
    "code": "KMH",
    "lat": 52.09223,
    "lon": -0.50392
  },
  {
    "name": "Kilmarnock",
    "code": "KMK",
    "lat": 55.61211,
    "lon": -4.49867
  },
  {
    "name": "Kemsley",
    "code": "KML",
    "lat": 51.36244,
    "lon": 0.73537
  },
  {
    "name": "Kempton Park",
    "code": "KMP",
    "lat": 51.42099,
    "lon": -0.40974
  },
  {
    "name": "Kemsing",
    "code": "KMS",
    "lat": 51.29718,
    "lon": 0.24744
  },
  {
    "name": "Knaresborough",
    "code": "KNA",
    "lat": 54.00904,
    "lon": -1.47042
  },
  {
    "name": "Kingswood",
    "code": "KND",
    "lat": 51.29472,
    "lon": -0.21125
  },
  {
    "name": "Kennett",
    "code": "KNE",
    "lat": 52.27728,
    "lon": 0.49048
  },
  {
    "name": "Knutsford",
    "code": "KNF",
    "lat": 53.30181,
    "lon": -2.3718
  },
  {
    "name": "Kingston",
    "code": "KNG",
    "lat": 51.41275,
    "lon": -0.30117
  },
  {
    "name": "Knighton",
    "code": "KNI",
    "lat": 52.34508,
    "lon": -3.04221
  },
  {
    "name": "Kensal Green",
    "code": "KNL",
    "lat": 51.53055,
    "lon": -0.22509
  },
  {
    "name": "Kings Norton",
    "code": "KNN",
    "lat": 52.4143,
    "lon": -1.93232
  },
  {
    "name": "Knottingley",
    "code": "KNO",
    "lat": 53.70655,
    "lon": -1.25918
  },
  {
    "name": "Kensal Rise",
    "code": "KNR",
    "lat": 51.53456,
    "lon": -0.21996
  },
  {
    "name": "Kennishead",
    "code": "KNS",
    "lat": 55.81331,
    "lon": -4.32524
  },
  {
    "name": "Kenton",
    "code": "KNT",
    "lat": 51.58181,
    "lon": -0.31698
  },
  {
    "name": "Knucklas",
    "code": "KNU",
    "lat": 52.35987,
    "lon": -3.09689
  },
  {
    "name": "Kensington (Olympia)",
    "code": "KPA",
    "lat": 51.4979,
    "lon": -0.21036
  },
  {
    "name": "Kilpatrick",
    "code": "KPT",
    "lat": 55.92469,
    "lon": -4.45339
  },
  {
    "name": "Kirkconnel",
    "code": "KRK",
    "lat": 55.3883,
    "lon": -3.99849
  },
  {
    "name": "Kearsley",
    "code": "KSL",
    "lat": 53.54415,
    "lon": -2.37512
  },
  {
    "name": "Kearsney",
    "code": "KSN",
    "lat": 51.14938,
    "lon": 1.27207
  },
  {
    "name": "Kirkby Stephen",
    "code": "KSW",
    "lat": 54.45486,
    "lon": -2.36859
  },
  {
    "name": "Kent House",
    "code": "KTH",
    "lat": 51.41222,
    "lon": -0.04524
  },
  {
    "name": "Kirton Lindsey",
    "code": "KTL",
    "lat": 53.48486,
    "lon": -0.59391
  },
  {
    "name": "Kentish Town",
    "code": "KTN",
    "lat": 51.5505,
    "lon": -0.14036
  },
  {
    "name": "Kentish Town West",
    "code": "KTW",
    "lat": 51.54655,
    "lon": -0.14665
  },
  {
    "name": "Kelvindale",
    "code": "KVD",
    "lat": 55.89354,
    "lon": -4.30957
  },
  {
    "name": "Kiveton Park",
    "code": "KVP",
    "lat": 53.33674,
    "lon": -1.23985
  },
  {
    "name": "Kew Bridge",
    "code": "KWB",
    "lat": 51.48952,
    "lon": -0.28711
  },
  {
    "name": "Kirkwood",
    "code": "KWD",
    "lat": 55.85418,
    "lon": -4.04839
  },
  {
    "name": "Kew Gardens",
    "code": "KWG",
    "lat": 51.47708,
    "lon": -0.28505
  },
  {
    "name": "Kidwelly",
    "code": "KWL",
    "lat": 51.73434,
    "lon": -4.31701
  },
  {
    "name": "Kilwinning",
    "code": "KWN",
    "lat": 55.65594,
    "lon": -4.71001
  },
  {
    "name": "Kyle of Lochalsh",
    "code": "KYL",
    "lat": 57.27975,
    "lon": -5.71382
  },
  {
    "name": "Keynsham",
    "code": "KYN",
    "lat": 51.41797,
    "lon": -2.49563
  },
  {
    "name": "Lancing",
    "code": "LAC",
    "lat": 50.82708,
    "lon": -0.3231
  },
  {
    "name": "Ladywell",
    "code": "LAD",
    "lat": 51.45625,
    "lon": -0.01903
  },
  {
    "name": "Langwith - Whaley Thorns",
    "code": "LAG",
    "lat": 53.2324,
    "lon": -1.20926
  },
  {
    "name": "Laindon",
    "code": "LAI",
    "lat": 51.56753,
    "lon": 0.42429
  },
  {
    "name": "Lakenheath",
    "code": "LAK",
    "lat": 52.44742,
    "lon": 0.53521
  },
  {
    "name": "Lamphey",
    "code": "LAM",
    "lat": 51.6672,
    "lon": -4.8733
  },
  {
    "name": "Lancaster",
    "code": "LAN",
    "lat": 54.04874,
    "lon": -2.80746
  },
  {
    "name": "Lapford",
    "code": "LAP",
    "lat": 50.857,
    "lon": -3.81067
  },
  {
    "name": "Largs",
    "code": "LAR",
    "lat": 55.79273,
    "lon": -4.86719
  },
  {
    "name": "Llansamlet",
    "code": "LAS",
    "lat": 51.6615,
    "lon": -3.88471
  },
  {
    "name": "Laurencekirk",
    "code": "LAU",
    "lat": 56.83634,
    "lon": -2.46593
  },
  {
    "name": "Landywood",
    "code": "LAW",
    "lat": 52.65655,
    "lon": -2.02073
  },
  {
    "name": "Layton (Lancs)",
    "code": "LAY",
    "lat": 53.83528,
    "lon": -3.03
  },
  {
    "name": "London Bridge",
    "code": "LBG",
    "lat": 51.50511,
    "lon": -0.08608
  },
  {
    "name": "Long Buckby",
    "code": "LBK",
    "lat": 52.29473,
    "lon": -1.08647
  },
  {
    "name": "Loughborough (Leics)",
    "code": "LBO",
    "lat": 52.77897,
    "lon": -1.19593
  },
  {
    "name": "Llanbedr",
    "code": "LBR",
    "lat": 52.82087,
    "lon": -4.11021
  },
  {
    "name": "Larbert",
    "code": "LBT",
    "lat": 56.02269,
    "lon": -3.83058
  },
  {
    "name": "Leighton Buzzard",
    "code": "LBZ",
    "lat": 51.91631,
    "lon": -0.677
  },
  {
    "name": "Lochluichart",
    "code": "LCC",
    "lat": 57.62174,
    "lon": -4.80906
  },
  {
    "name": "Lochgelly",
    "code": "LCG",
    "lat": 56.13532,
    "lon": -3.31294
  },
  {
    "name": "Lockwood",
    "code": "LCK",
    "lat": 53.63475,
    "lon": -1.80079
  },
  {
    "name": "Lochailort",
    "code": "LCL",
    "lat": 56.88095,
    "lon": -5.66338
  },
  {
    "name": "Lincoln Central",
    "code": "LCN",
    "lat": 53.22611,
    "lon": -0.53992
  },
  {
    "name": "Locheilside",
    "code": "LCS",
    "lat": 56.85539,
    "lon": -5.29003
  },
  {
    "name": "Llandanwg",
    "code": "LDN",
    "lat": 52.83618,
    "lon": -4.12387
  },
  {
    "name": "Leeds",
    "code": "LDS",
    "lat": 53.79564,
    "lon": -1.54802
  },
  {
    "name": "Ladybank",
    "code": "LDY",
    "lat": 56.27378,
    "lon": -3.12227
  },
  {
    "name": "Leagrave",
    "code": "LEA",
    "lat": 51.90517,
    "lon": -0.45851
  },
  {
    "name": "Lea Bridge",
    "code": "LEB",
    "lat": 51.56655,
    "lon": -0.03667
  },
  {
    "name": "Ledbury",
    "code": "LED",
    "lat": 52.04526,
    "lon": -2.42586
  },
  {
    "name": "Lee",
    "code": "LEE",
    "lat": 51.44976,
    "lon": 0.0135
  },
  {
    "name": "Lea Green",
    "code": "LEG",
    "lat": 53.42682,
    "lon": -2.72498
  },
  {
    "name": "Lea Hall",
    "code": "LEH",
    "lat": 52.48065,
    "lon": -1.78602
  },
  {
    "name": "Leicester",
    "code": "LEI",
    "lat": 52.63145,
    "lon": -1.12528
  },
  {
    "name": "Lelant",
    "code": "LEL",
    "lat": 50.18411,
    "lon": -5.43661
  },
  {
    "name": "Leyton Midland Road",
    "code": "LEM",
    "lat": 51.56973,
    "lon": -0.00804
  },
  {
    "name": "Lenham",
    "code": "LEN",
    "lat": 51.23448,
    "lon": 0.70777
  },
  {
    "name": "Leominster",
    "code": "LEO",
    "lat": 52.22569,
    "lon": -2.73035
  },
  {
    "name": "Leytonstone High Road",
    "code": "LER",
    "lat": 51.56356,
    "lon": 0.00842
  },
  {
    "name": "Leigh-on-Sea",
    "code": "LES",
    "lat": 51.54128,
    "lon": 0.64042
  },
  {
    "name": "Letchworth",
    "code": "LET",
    "lat": 51.97997,
    "lon": -0.22926
  },
  {
    "name": "Leuchars",
    "code": "LEU",
    "lat": 56.37509,
    "lon": -2.89371
  },
  {
    "name": "Lewisham",
    "code": "LEW",
    "lat": 51.46569,
    "lon": -0.01402
  },
  {
    "name": "Leyland",
    "code": "LEY",
    "lat": 53.69886,
    "lon": -2.68714
  },
  {
    "name": "Lingfield",
    "code": "LFD",
    "lat": 51.17645,
    "lon": -0.00716
  },
  {
    "name": "Leigh (Kent) - Fleur de Lis PH",
    "code": "LFL",
    "lat": 51.19594,
    "lon": 0.21189
  },
  {
    "name": "Langbank",
    "code": "LGB",
    "lat": 55.92451,
    "lon": -4.58526
  },
  {
    "name": "Lingwood",
    "code": "LGD",
    "lat": 52.62213,
    "lon": 1.48996
  },
  {
    "name": "Long Eaton",
    "code": "LGE",
    "lat": 52.88501,
    "lon": -1.28751
  },
  {
    "name": "Longfield",
    "code": "LGF",
    "lat": 51.39616,
    "lon": 0.30038
  },
  {
    "name": "Langley Green",
    "code": "LGG",
    "lat": 52.49388,
    "lon": -2.00496
  },
  {
    "name": "Loughborough Junction",
    "code": "LGJ",
    "lat": 51.4663,
    "lon": -0.10218
  },
  {
    "name": "Longbeck",
    "code": "LGK",
    "lat": 54.58922,
    "lon": -1.03048
  },
  {
    "name": "Langley Mill",
    "code": "LGM",
    "lat": 53.01808,
    "lon": -1.33124
  },
  {
    "name": "Longton",
    "code": "LGN",
    "lat": 52.98997,
    "lon": -2.13701
  },
  {
    "name": "Llangynllo",
    "code": "LGO",
    "lat": 52.34963,
    "lon": -3.16137
  },
  {
    "name": "Langside",
    "code": "LGS",
    "lat": 55.82113,
    "lon": -4.27733
  },
  {
    "name": "Langwathby",
    "code": "LGW",
    "lat": 54.69436,
    "lon": -2.66369
  },
  {
    "name": "Loch Awe",
    "code": "LHA",
    "lat": 56.402,
    "lon": -5.04197
  },
  {
    "name": "Leatherhead",
    "code": "LHD",
    "lat": 51.29882,
    "lon": -0.33322
  },
  {
    "name": "Loch Eil Outward Bound",
    "code": "LHE",
    "lat": 56.85525,
    "lon": -5.19157
  },
  {
    "name": "Lealholm",
    "code": "LHM",
    "lat": 54.4606,
    "lon": -0.82571
  },
  {
    "name": "Langho",
    "code": "LHO",
    "lat": 53.80484,
    "lon": -2.44866
  },
  {
    "name": "Limehouse",
    "code": "LHS",
    "lat": 51.51254,
    "lon": -0.0398
  },
  {
    "name": "Lochwinnoch",
    "code": "LHW",
    "lat": 55.78714,
    "lon": -4.61606
  },
  {
    "name": "Lichfield City",
    "code": "LIC",
    "lat": 52.68016,
    "lon": -1.82543
  },
  {
    "name": "Lidlington",
    "code": "LID",
    "lat": 52.04155,
    "lon": -0.55892
  },
  {
    "name": "Leigh (Kent)",
    "code": "LIH",
    "lat": 51.1939,
    "lon": 0.21051
  },
  {
    "name": "Linlithgow",
    "code": "LIN",
    "lat": 55.97644,
    "lon": -3.59584
  },
  {
    "name": "Liphook",
    "code": "LIP",
    "lat": 51.07131,
    "lon": -0.80023
  },
  {
    "name": "Liss",
    "code": "LIS",
    "lat": 51.04356,
    "lon": -0.89287
  },
  {
    "name": "Littlehampton",
    "code": "LIT",
    "lat": 50.8101,
    "lon": -0.54599
  },
  {
    "name": "Liverpool Lime Street",
    "code": "LIV",
    "lat": 53.40732,
    "lon": -2.97773
  },
  {
    "name": "Lake (Isle of Wight)",
    "code": "LKE",
    "lat": 50.64647,
    "lon": -1.16635
  },
  {
    "name": "Llanaber",
    "code": "LLA",
    "lat": 52.74152,
    "lon": -4.07719
  },
  {
    "name": "Llandecwyn",
    "code": "LLC",
    "lat": 52.9207,
    "lon": -4.05705
  },
  {
    "name": "Llandudno",
    "code": "LLD",
    "lat": 53.32094,
    "lon": -3.82702
  },
  {
    "name": "Llanelli",
    "code": "LLE",
    "lat": 51.67387,
    "lon": -4.16133
  },
  {
    "name": "Llanfairfechan",
    "code": "LLF",
    "lat": 53.25731,
    "lon": -3.98321
  },
  {
    "name": "Llangadog",
    "code": "LLG",
    "lat": 51.94022,
    "lon": -3.89317
  },
  {
    "name": "Llangennech",
    "code": "LLH",
    "lat": 51.69114,
    "lon": -4.07895
  },
  {
    "name": "Llandybie",
    "code": "LLI",
    "lat": 51.82104,
    "lon": -4.00368
  },
  {
    "name": "Llandudno Junction",
    "code": "LLJ",
    "lat": 53.28396,
    "lon": -3.80912
  },
  {
    "name": "Llandeilo",
    "code": "LLL",
    "lat": 51.88535,
    "lon": -3.98692
  },
  {
    "name": "Llangammarch",
    "code": "LLM",
    "lat": 52.11431,
    "lon": -3.55483
  },
  {
    "name": "Llandaf",
    "code": "LLN",
    "lat": 51.50844,
    "lon": -3.22862
  },
  {
    "name": "Llandrindod",
    "code": "LLO",
    "lat": 52.24237,
    "lon": -3.37915
  },
  {
    "name": "Llanharan",
    "code": "LLR",
    "lat": 51.53759,
    "lon": -3.4408
  },
  {
    "name": "Llanishen",
    "code": "LLS",
    "lat": 51.53274,
    "lon": -3.18199
  },
  {
    "name": "Llanbister Road",
    "code": "LLT",
    "lat": 52.33643,
    "lon": -3.21343
  },
  {
    "name": "Llandovery",
    "code": "LLV",
    "lat": 51.99532,
    "lon": -3.80285
  },
  {
    "name": "Llwyngwril",
    "code": "LLW",
    "lat": 52.6668,
    "lon": -4.08769
  },
  {
    "name": "Llwynypia",
    "code": "LLY",
    "lat": 51.634,
    "lon": -3.45353
  },
  {
    "name": "Leamington Spa",
    "code": "LMS",
    "lat": 52.2845,
    "lon": -1.53621
  },
  {
    "name": "Llanbradach",
    "code": "LNB",
    "lat": 51.60325,
    "lon": -3.23306
  },
  {
    "name": "Longniddry",
    "code": "LND",
    "lat": 55.97648,
    "lon": -2.88834
  },
  {
    "name": "Longcross",
    "code": "LNG",
    "lat": 51.38517,
    "lon": -0.59457
  },
  {
    "name": "Lanark",
    "code": "LNK",
    "lat": 55.6736,
    "lon": -3.77329
  },
  {
    "name": "Llanwrda",
    "code": "LNR",
    "lat": 51.96259,
    "lon": -3.8717
  },
  {
    "name": "Llanwrtyd",
    "code": "LNW",
    "lat": 52.10472,
    "lon": -3.63218
  },
  {
    "name": "Langley (Berks)",
    "code": "LNY",
    "lat": 51.50807,
    "lon": -0.54175
  },
  {
    "name": "Lenzie",
    "code": "LNZ",
    "lat": 55.92131,
    "lon": -4.15388
  },
  {
    "name": "Longbridge",
    "code": "LOB",
    "lat": 52.39642,
    "lon": -1.98129
  },
  {
    "name": "Lockerbie",
    "code": "LOC",
    "lat": 55.12305,
    "lon": -3.35354
  },
  {
    "name": "London Fields",
    "code": "LOF",
    "lat": 51.54116,
    "lon": -0.05775
  },
  {
    "name": "Lostock Hall",
    "code": "LOH",
    "lat": 53.72425,
    "lon": -2.68748
  },
  {
    "name": "Looe",
    "code": "LOO",
    "lat": 50.35922,
    "lon": -4.4562
  },
  {
    "name": "Lostwithiel",
    "code": "LOS",
    "lat": 50.40717,
    "lon": -4.66601
  },
  {
    "name": "Lostock",
    "code": "LOT",
    "lat": 53.57294,
    "lon": -2.49427
  },
  {
    "name": "Lowdham",
    "code": "LOW",
    "lat": 53.00631,
    "lon": -0.99842
  },
  {
    "name": "Llanfairpwll",
    "code": "LPG",
    "lat": 53.22096,
    "lon": -4.20923
  },
  {
    "name": "Long Preston",
    "code": "LPR",
    "lat": 54.01685,
    "lon": -2.25559
  },
  {
    "name": "Longport",
    "code": "LPT",
    "lat": 53.0419,
    "lon": -2.21645
  },
  {
    "name": "Lapworth",
    "code": "LPW",
    "lat": 52.34226,
    "lon": -1.7257
  },
  {
    "name": "Liverpool South Parkway",
    "code": "LPY",
    "lat": 53.35776,
    "lon": -2.88915
  },
  {
    "name": "London Road (Brighton)",
    "code": "LRB",
    "lat": 50.83666,
    "lon": -0.1365
  },
  {
    "name": "London Road (Guildford)",
    "code": "LRD",
    "lat": 51.24065,
    "lon": -0.56506
  },
  {
    "name": "Lairg",
    "code": "LRG",
    "lat": 58.00181,
    "lon": -4.3999
  },
  {
    "name": "Larkhall",
    "code": "LRH",
    "lat": 55.73859,
    "lon": -3.9755
  },
  {
    "name": "London Road Brighton - Ditchling Rise",
    "code": "LRR",
    "lat": 50.83615,
    "lon": -0.13631
  },
  {
    "name": "Liskeard",
    "code": "LSK",
    "lat": 50.44686,
    "lon": -4.46961
  },
  {
    "name": "Livingston North",
    "code": "LSN",
    "lat": 55.90138,
    "lon": -3.54434
  },
  {
    "name": "London Liverpool Street",
    "code": "LST",
    "lat": 51.518,
    "lon": -0.08142
  },
  {
    "name": "Leasowe",
    "code": "LSW",
    "lat": 53.40806,
    "lon": -3.0996
  },
  {
    "name": "Lower Sydenham",
    "code": "LSY",
    "lat": 51.42483,
    "lon": -0.03334
  },
  {
    "name": "Lostock Gralam",
    "code": "LTG",
    "lat": 53.26768,
    "lon": -2.46521
  },
  {
    "name": "Llanhilleth",
    "code": "LTH",
    "lat": 51.7003,
    "lon": -3.13521
  },
  {
    "name": "Little Kimble",
    "code": "LTK",
    "lat": 51.75224,
    "lon": -0.80845
  },
  {
    "name": "Littleborough",
    "code": "LTL",
    "lat": 53.64301,
    "lon": -2.09465
  },
  {
    "name": "Lytham",
    "code": "LTM",
    "lat": 53.73929,
    "lon": -2.96404
  },
  {
    "name": "Luton Airport Parkway",
    "code": "LTN",
    "lat": 51.87244,
    "lon": -0.39588
  },
  {
    "name": "Littleport",
    "code": "LTP",
    "lat": 52.4624,
    "lon": 0.31657
  },
  {
    "name": "Lelant Saltings",
    "code": "LTS",
    "lat": 50.17876,
    "lon": -5.44099
  },
  {
    "name": "Little Sutton",
    "code": "LTT",
    "lat": 53.28553,
    "lon": -2.9433
  },
  {
    "name": "Lichfield Trent Valley",
    "code": "LTV",
    "lat": 52.68691,
    "lon": -1.80024
  },
  {
    "name": "Ludlow",
    "code": "LUD",
    "lat": 52.37129,
    "lon": -2.71622
  },
  {
    "name": "Luton",
    "code": "LUT",
    "lat": 51.88231,
    "lon": -0.41404
  },
  {
    "code": "LUA",
    "name": "Luton Airport",
    "lat": 51.872404,
    "lon": -0.390015
  },
  {
    "name": "Luxulyan",
    "code": "LUX",
    "lat": 50.39003,
    "lon": -4.74743
  },
  {
    "name": "Liverpool Central",
    "code": "LVC",
    "lat": 53.40461,
    "lon": -2.97917
  },
  {
    "name": "Livingston South",
    "code": "LVG",
    "lat": 55.87169,
    "lon": -3.50156
  },
  {
    "name": "Liverpool James Street",
    "code": "LVJ",
    "lat": 53.40477,
    "lon": -2.99196
  },
  {
    "name": "Levenshulme",
    "code": "LVM",
    "lat": 53.44418,
    "lon": -2.19267
  },
  {
    "name": "Littlehaven",
    "code": "LVN",
    "lat": 51.07974,
    "lon": -0.30797
  },
  {
    "name": "Lisvane & Thornhill",
    "code": "LVT",
    "lat": 51.54457,
    "lon": -3.18561
  },
  {
    "name": "Lawrence Hill",
    "code": "LWH",
    "lat": 51.45801,
    "lon": -2.56444
  },
  {
    "name": "Llantwit Major",
    "code": "LWM",
    "lat": 51.40975,
    "lon": -3.48164
  },
  {
    "name": "Llanrwst",
    "code": "LWR",
    "lat": 53.13887,
    "lon": -3.79442
  },
  {
    "name": "Lewes",
    "code": "LWS",
    "lat": 50.87063,
    "lon": 0.01134
  },
  {
    "name": "Lowestoft",
    "code": "LWT",
    "lat": 52.47446,
    "lon": 1.74973
  },
  {
    "name": "Lympstone Commando",
    "code": "LYC",
    "lat": 50.66223,
    "lon": -3.44086
  },
  {
    "name": "Lydney",
    "code": "LYD",
    "lat": 51.71413,
    "lon": -2.53087
  },
  {
    "name": "Lye (West Midlands)",
    "code": "LYE",
    "lat": 52.45993,
    "lon": -2.11593
  },
  {
    "name": "Lympstone Village",
    "code": "LYM",
    "lat": 50.64828,
    "lon": -3.43103
  },
  {
    "name": "Lymington Pier",
    "code": "LYP",
    "lat": 50.75829,
    "lon": -1.52946
  },
  {
    "name": "Lymington Town",
    "code": "LYT",
    "lat": 50.7609,
    "lon": -1.53717
  },
  {
    "name": "Lazonby & Kirkoswald",
    "code": "LZB",
    "lat": 54.75044,
    "lon": -2.70321
  },
  {
    "name": "Macclesfield",
    "code": "MAC",
    "lat": 53.25936,
    "lon": -2.12198
  },
  {
    "name": "Maghull",
    "code": "MAG",
    "lat": 53.50648,
    "lon": -2.93086
  },
  {
    "name": "Maidenhead",
    "code": "MAI",
    "lat": 51.51867,
    "lon": -0.72266
  },
  {
    "name": "Malden Manor",
    "code": "MAL",
    "lat": 51.38473,
    "lon": -0.26127
  },
  {
    "name": "Manchester Piccadilly",
    "code": "MAN",
    "lat": 53.47737,
    "lon": -2.23091
  },
  {
    "name": "Martins Heron",
    "code": "MAO",
    "lat": 51.40741,
    "lon": -0.7244
  },
  {
    "name": "Margate",
    "code": "MAR",
    "lat": 51.38544,
    "lon": 1.37202
  },
  {
    "name": "Manors",
    "code": "MAS",
    "lat": 54.97276,
    "lon": -1.60474
  },
  {
    "name": "Matlock",
    "code": "MAT",
    "lat": 53.13843,
    "lon": -1.55891
  },
  {
    "name": "Mauldeth Road",
    "code": "MAU",
    "lat": 53.43308,
    "lon": -2.20925
  },
  {
    "name": "Maxwell Park",
    "code": "MAX",
    "lat": 55.83771,
    "lon": -4.28869
  },
  {
    "name": "Maybole",
    "code": "MAY",
    "lat": 55.35473,
    "lon": -4.68528
  },
  {
    "name": "Millbrook (Hants)",
    "code": "MBK",
    "lat": 50.91149,
    "lon": -1.43385
  },
  {
    "name": "Middlesbrough",
    "code": "MBR",
    "lat": 54.57911,
    "lon": -1.23471
  },
  {
    "name": "Moulsecoomb",
    "code": "MCB",
    "lat": 50.84672,
    "lon": -0.11884
  },
  {
    "name": "Metrocentre",
    "code": "MCE",
    "lat": 54.95875,
    "lon": -1.66563
  },
  {
    "name": "March",
    "code": "MCH",
    "lat": 52.55991,
    "lon": 0.0912
  },
  {
    "name": "Morecambe",
    "code": "MCM",
    "lat": 54.07033,
    "lon": -2.86931
  },
  {
    "name": "Machynlleth",
    "code": "MCN",
    "lat": 52.59515,
    "lon": -3.85455
  },
  {
    "name": "Manchester Oxford Road",
    "code": "MCO",
    "lat": 53.47404,
    "lon": -2.242
  },
  {
    "name": "Manchester Victoria",
    "code": "MCV",
    "lat": 53.48748,
    "lon": -2.2426
  },
  {
    "name": "Maidstone Barracks",
    "code": "MDB",
    "lat": 51.27717,
    "lon": 0.51397
  },
  {
    "name": "Maidstone East",
    "code": "MDE",
    "lat": 51.27783,
    "lon": 0.5213
  },
  {
    "name": "Midgham",
    "code": "MDG",
    "lat": 51.39597,
    "lon": -1.17771
  },
  {
    "name": "Middlewood",
    "code": "MDL",
    "lat": 53.35998,
    "lon": -2.08335
  },
  {
    "name": "Maiden Newton",
    "code": "MDN",
    "lat": 50.78,
    "lon": -2.56944
  },
  {
    "name": "Morden South",
    "code": "MDS",
    "lat": 51.39612,
    "lon": -0.19946
  },
  {
    "name": "Maidstone West",
    "code": "MDW",
    "lat": 51.27046,
    "lon": 0.51578
  },
  {
    "name": "Meols Cop",
    "code": "MEC",
    "lat": 53.64628,
    "lon": -2.97581
  },
  {
    "name": "Meldreth",
    "code": "MEL",
    "lat": 52.09073,
    "lon": 0.00895
  },
  {
    "name": "Menheniot",
    "code": "MEN",
    "lat": 50.42622,
    "lon": -4.40926
  },
  {
    "name": "Meols",
    "code": "MEO",
    "lat": 53.39945,
    "lon": -3.15428
  },
  {
    "name": "Meopham",
    "code": "MEP",
    "lat": 51.38642,
    "lon": 0.35695
  },
  {
    "name": "Merthyr Tydfil",
    "code": "MER",
    "lat": 51.74462,
    "lon": -3.37726
  },
  {
    "name": "Melton (Suffolk)",
    "code": "MES",
    "lat": 52.10446,
    "lon": 1.33826
  },
  {
    "name": "Merthyr Vale",
    "code": "MEV",
    "lat": 51.68664,
    "lon": -3.33659
  },
  {
    "name": "Maesteg (Ewenny Road)",
    "code": "MEW",
    "lat": 51.60534,
    "lon": -3.64901
  },
  {
    "name": "Mexborough",
    "code": "MEX",
    "lat": 53.49101,
    "lon": -1.28856
  },
  {
    "name": "Merryton",
    "code": "MEY",
    "lat": 55.7487,
    "lon": -3.97824
  },
  {
    "name": "Morfa Mawddach",
    "code": "MFA",
    "lat": 52.70715,
    "lon": -4.03218
  },
  {
    "name": "Minffordd",
    "code": "MFF",
    "lat": 52.92615,
    "lon": -4.08498
  },
  {
    "name": "Milford Haven",
    "code": "MFH",
    "lat": 51.71498,
    "lon": -5.041
  },
  {
    "name": "Mount Florida",
    "code": "MFL",
    "lat": 55.82654,
    "lon": -4.26112
  },
  {
    "name": "Mansfield",
    "code": "MFT",
    "lat": 53.14212,
    "lon": -1.19844
  },
  {
    "name": "Metheringham",
    "code": "MGM",
    "lat": 53.1389,
    "lon": -0.39145
  },
  {
    "name": "Marston Green",
    "code": "MGN",
    "lat": 52.4672,
    "lon": -1.75561
  },
  {
    "name": "Merstham",
    "code": "MHM",
    "lat": 51.26415,
    "lon": -0.15022
  },
  {
    "name": "Market Harborough",
    "code": "MHR",
    "lat": 52.47974,
    "lon": -0.90933
  },
  {
    "name": "Meadowhall",
    "code": "MHS",
    "lat": 53.41748,
    "lon": -1.41284
  },
  {
    "name": "Manchester Airport",
    "code": "MIA",
    "lat": 53.36506,
    "lon": -2.27298
  },
  {
    "name": "Micheldever",
    "code": "MIC",
    "lat": 51.18239,
    "lon": -1.26068
  },
  {
    "name": "Mills Hill (Manchester)",
    "code": "MIH",
    "lat": 53.55132,
    "lon": -2.17151
  },
  {
    "name": "Mitcham Junction",
    "code": "MIJ",
    "lat": 51.39295,
    "lon": -0.15775
  },
  {
    "name": "Micklefield",
    "code": "MIK",
    "lat": 53.78885,
    "lon": -1.3268
  },
  {
    "name": "Mill Hill Broadway",
    "code": "MIL",
    "lat": 51.6131,
    "lon": -0.24924
  },
  {
    "name": "Moreton-in-Marsh",
    "code": "MIM",
    "lat": 51.99228,
    "lon": -1.70039
  },
  {
    "name": "Milliken Park",
    "code": "MIN",
    "lat": 55.8251,
    "lon": -4.53334
  },
  {
    "name": "Mirfield",
    "code": "MIR",
    "lat": 53.67142,
    "lon": -1.69254
  },
  {
    "name": "Mistley",
    "code": "MIS",
    "lat": 51.94365,
    "lon": 1.08141
  },
  {
    "name": "Milton Keynes Central",
    "code": "MKC",
    "lat": 52.0343,
    "lon": -0.77414
  },
  {
    "name": "Melksham",
    "code": "MKM",
    "lat": 51.37982,
    "lon": -2.14451
  },
  {
    "name": "Market Rasen",
    "code": "MKR",
    "lat": 53.38394,
    "lon": -0.33689
  },
  {
    "name": "Marks Tey",
    "code": "MKT",
    "lat": 51.88095,
    "lon": 0.78335
  },
  {
    "name": "Millbrook (Beds)",
    "code": "MLB",
    "lat": 52.05385,
    "lon": -0.53269
  },
  {
    "name": "Mouldsworth",
    "code": "MLD",
    "lat": 53.23182,
    "lon": -2.73223
  },
  {
    "name": "Milford (Surrey)",
    "code": "MLF",
    "lat": 51.16331,
    "lon": -0.63695
  },
  {
    "name": "Mallaig",
    "code": "MLG",
    "lat": 57.00597,
    "lon": -5.82959
  },
  {
    "name": "Mill Hill (Lancs)",
    "code": "MLH",
    "lat": 53.73547,
    "lon": -2.50174
  },
  {
    "name": "Millom",
    "code": "MLM",
    "lat": 54.21083,
    "lon": -3.27109
  },
  {
    "name": "Milngavie",
    "code": "MLN",
    "lat": 55.94135,
    "lon": -4.31457
  },
  {
    "name": "Malton",
    "code": "MLT",
    "lat": 54.13208,
    "lon": -0.79722
  },
  {
    "name": "Marlow",
    "code": "MLW",
    "lat": 51.57099,
    "lon": -0.76643
  },
  {
    "name": "Morley",
    "code": "MLY",
    "lat": 53.74994,
    "lon": -1.59097
  },
  {
    "name": "Melton Mowbray",
    "code": "MMO",
    "lat": 52.76105,
    "lon": -0.88586
  },
  {
    "name": "Markinch",
    "code": "MNC",
    "lat": 56.20101,
    "lon": -3.13078
  },
  {
    "name": "Manea",
    "code": "MNE",
    "lat": 52.49785,
    "lon": 0.1777
  },
  {
    "name": "Manningtree",
    "code": "MNG",
    "lat": 51.94907,
    "lon": 1.04525
  },
  {
    "name": "Menston",
    "code": "MNN",
    "lat": 53.89235,
    "lon": -1.73551
  },
  {
    "name": "Manor Park",
    "code": "MNP",
    "lat": 51.55248,
    "lon": 0.04635
  },
  {
    "name": "Manor Road",
    "code": "MNR",
    "lat": 53.3948,
    "lon": -3.17145
  },
  {
    "name": "Mobberley",
    "code": "MOB",
    "lat": 53.32916,
    "lon": -2.33367
  },
  {
    "name": "Moorgate",
    "code": "MOG",
    "lat": 51.5185,
    "lon": -0.08894
  },
  {
    "name": "Monifieth",
    "code": "MON",
    "lat": 56.4801,
    "lon": -2.81824
  },
  {
    "name": "Muir of Ord",
    "code": "MOO",
    "lat": 57.51783,
    "lon": -4.46023
  },
  {
    "name": "Mortimer",
    "code": "MOR",
    "lat": 51.37207,
    "lon": -1.0355
  },
  {
    "name": "Moss Side",
    "code": "MOS",
    "lat": 53.76499,
    "lon": -2.94294
  },
  {
    "name": "Motspur Park",
    "code": "MOT",
    "lat": 51.3952,
    "lon": -0.23953
  },
  {
    "name": "Mosspark",
    "code": "MPK",
    "lat": 55.84081,
    "lon": -4.34829
  },
  {
    "name": "Marple",
    "code": "MPL",
    "lat": 53.40071,
    "lon": -2.05726
  },
  {
    "name": "Morpeth",
    "code": "MPT",
    "lat": 55.16237,
    "lon": -1.68308
  },
  {
    "name": "Manorbier",
    "code": "MRB",
    "lat": 51.66017,
    "lon": -4.79187
  },
  {
    "name": "Morchard Road",
    "code": "MRD",
    "lat": 50.83189,
    "lon": -3.7764
  },
  {
    "name": "Moorfields",
    "code": "MRF",
    "lat": 53.40857,
    "lon": -2.98919
  },
  {
    "name": "Marden",
    "code": "MRN",
    "lat": 51.17517,
    "lon": 0.49317
  },
  {
    "name": "Moorthorpe",
    "code": "MRP",
    "lat": 53.59501,
    "lon": -1.30495
  },
  {
    "name": "Morar",
    "code": "MRR",
    "lat": 56.9697,
    "lon": -5.82191
  },
  {
    "name": "Monks Risborough",
    "code": "MRS",
    "lat": 51.73577,
    "lon": -0.82933
  },
  {
    "name": "Moreton (Merseyside)",
    "code": "MRT",
    "lat": 53.40722,
    "lon": -3.11351
  },
  {
    "name": "Maryport",
    "code": "MRY",
    "lat": 54.71132,
    "lon": -3.49407
  },
  {
    "name": "Moorside",
    "code": "MSD",
    "lat": 53.51629,
    "lon": -2.3518
  },
  {
    "name": "Mossley Hill",
    "code": "MSH",
    "lat": 53.37906,
    "lon": -2.91545
  },
  {
    "name": "Marske",
    "code": "MSK",
    "lat": 54.58742,
    "lon": -1.01891
  },
  {
    "name": "Mossley (Manchester)",
    "code": "MSL",
    "lat": 53.51499,
    "lon": -2.04128
  },
  {
    "name": "Marsden",
    "code": "MSN",
    "lat": 53.6032,
    "lon": -1.93076
  },
  {
    "name": "Moston",
    "code": "MSO",
    "lat": 53.52343,
    "lon": -2.17102
  },
  {
    "name": "Minster",
    "code": "MSR",
    "lat": 51.32918,
    "lon": 1.31723
  },
  {
    "name": "Moses Gate",
    "code": "MSS",
    "lat": 53.556,
    "lon": -2.40119
  },
  {
    "name": "Maesteg",
    "code": "MST",
    "lat": 51.60994,
    "lon": -3.65467
  },
  {
    "name": "Mansfield Woodhouse",
    "code": "MSW",
    "lat": 53.16358,
    "lon": -1.20185
  },
  {
    "name": "Mountain Ash",
    "code": "MTA",
    "lat": 51.68133,
    "lon": -3.37636
  },
  {
    "name": "Matlock Bath",
    "code": "MTB",
    "lat": 53.12237,
    "lon": -1.55676
  },
  {
    "name": "Mitcham Eastfields",
    "code": "MTC",
    "lat": 51.40774,
    "lon": -0.15464
  },
  {
    "name": "Mottingham",
    "code": "MTG",
    "lat": 51.44022,
    "lon": 0.05006
  },
  {
    "name": "Motherwell",
    "code": "MTH",
    "lat": 55.79167,
    "lon": -3.99431
  },
  {
    "name": "Mortlake",
    "code": "MTL",
    "lat": 51.46809,
    "lon": -0.26711
  },
  {
    "name": "Martin Mill",
    "code": "MTM",
    "lat": 51.17068,
    "lon": 1.34823
  },
  {
    "name": "Moreton (Dorset)",
    "code": "MTN",
    "lat": 50.70102,
    "lon": -2.31347
  },
  {
    "name": "Marton",
    "code": "MTO",
    "lat": 54.54435,
    "lon": -1.19848
  },
  {
    "name": "Montpelier",
    "code": "MTP",
    "lat": 51.46835,
    "lon": -2.58869
  },
  {
    "name": "Montrose",
    "code": "MTS",
    "lat": 56.71279,
    "lon": -2.47207
  },
  {
    "name": "Mount Vernon",
    "code": "MTV",
    "lat": 55.8402,
    "lon": -4.13366
  },
  {
    "name": "Musselburgh",
    "code": "MUB",
    "lat": 55.93358,
    "lon": -3.07319
  },
  {
    "name": "Manchester United FC",
    "code": "MUF",
    "lat": 53.46221,
    "lon": -2.29065
  },
  {
    "name": "Muirend",
    "code": "MUI",
    "lat": 55.80945,
    "lon": -4.27439
  },
  {
    "name": "Malvern Link",
    "code": "MVL",
    "lat": 52.12548,
    "lon": -2.31952
  },
  {
    "name": "London Marylebone",
    "code": "MYB",
    "lat": 51.52253,
    "lon": -0.16291
  },
  {
    "name": "Maryhill",
    "code": "MYH",
    "lat": 55.89762,
    "lon": -4.30074
  },
  {
    "name": "Maryland",
    "code": "MYL",
    "lat": 51.54609,
    "lon": 0.00582
  },
  {
    "name": "Mytholmroyd",
    "code": "MYT",
    "lat": 53.72902,
    "lon": -1.98143
  },
  {
    "name": "Maze Hill",
    "code": "MZH",
    "lat": 51.48263,
    "lon": 0.00292
  },
  {
    "name": "Nantwich",
    "code": "NAN",
    "lat": 53.06359,
    "lon": -2.51896
  },
  {
    "name": "Narberth",
    "code": "NAR",
    "lat": 51.79937,
    "lon": -4.72721
  },
  {
    "name": "Newton Aycliffe",
    "code": "NAY",
    "lat": 54.61371,
    "lon": -1.58965
  },
  {
    "name": "New Barnet",
    "code": "NBA",
    "lat": 51.64857,
    "lon": -0.17299
  },
  {
    "name": "New Beckenham",
    "code": "NBC",
    "lat": 51.41677,
    "lon": -0.03527
  },
  {
    "name": "Newbridge",
    "code": "NBE",
    "lat": 51.66581,
    "lon": -3.14291
  },
  {
    "name": "New Brighton",
    "code": "NBN",
    "lat": 53.43741,
    "lon": -3.04797
  },
  {
    "name": "Narborough",
    "code": "NBR",
    "lat": 52.57131,
    "lon": -1.20335
  },
  {
    "name": "Norton Bridge Station Drive",
    "code": "NBS",
    "lat": 52.86682,
    "lon": -2.19197
  },
  {
    "name": "Norbiton",
    "code": "NBT",
    "lat": 51.41236,
    "lon": -0.28403
  },
  {
    "name": "North Berwick",
    "code": "NBW",
    "lat": 56.05703,
    "lon": -2.73074
  },
  {
    "name": "Newbury",
    "code": "NBY",
    "lat": 51.39764,
    "lon": -1.32286
  },
  {
    "name": "New Clee",
    "code": "NCE",
    "lat": 53.5744,
    "lon": -0.06081
  },
  {
    "name": "New Cumnock",
    "code": "NCK",
    "lat": 55.40204,
    "lon": -4.18261
  },
  {
    "name": "Newcastle",
    "code": "NCL",
    "lat": 54.9684,
    "lon": -1.61728
  },
  {
    "name": "North Camp",
    "code": "NCM",
    "lat": 51.27579,
    "lon": -0.7312
  },
  {
    "name": "Newcourt",
    "code": "NCO",
    "lat": 50.70503,
    "lon": -3.47281
  },
  {
    "name": "Newark Castle",
    "code": "NCT",
    "lat": 53.08003,
    "lon": -0.81315
  },
  {
    "name": "North Dulwich",
    "code": "NDL",
    "lat": 51.45451,
    "lon": -0.08791
  },
  {
    "name": "Newtongrange",
    "code": "NEG",
    "lat": 55.86699,
    "lon": -3.06936
  },
  {
    "name": "New Eltham",
    "code": "NEH",
    "lat": 51.43806,
    "lon": 0.07054
  },
  {
    "name": "Neilston",
    "code": "NEI",
    "lat": 55.78303,
    "lon": -4.42695
  },
  {
    "name": "Nelson",
    "code": "NEL",
    "lat": 53.83502,
    "lon": -2.21376
  },
  {
    "name": "New Malden",
    "code": "NEM",
    "lat": 51.40408,
    "lon": -0.25594
  },
  {
    "name": "Neston",
    "code": "NES",
    "lat": 53.29187,
    "lon": -3.06309
  },
  {
    "name": "Netherfield",
    "code": "NET",
    "lat": 52.96143,
    "lon": -1.07985
  },
  {
    "name": "Newcraighall",
    "code": "NEW",
    "lat": 55.93311,
    "lon": -3.09083
  },
  {
    "name": "North Fambridge",
    "code": "NFA",
    "lat": 51.64859,
    "lon": 0.68167
  },
  {
    "name": "Northfield",
    "code": "NFD",
    "lat": 52.4082,
    "lon": -1.96585
  },
  {
    "name": "Northfleet",
    "code": "NFL",
    "lat": 51.44585,
    "lon": 0.32434
  },
  {
    "name": "Nafferton",
    "code": "NFN",
    "lat": 54.01124,
    "lon": -0.38608
  },
  {
    "name": "Newington",
    "code": "NGT",
    "lat": 51.35334,
    "lon": 0.66858
  },
  {
    "name": "Nunhead",
    "code": "NHD",
    "lat": 51.46683,
    "lon": -0.05227
  },
  {
    "name": "New Hythe",
    "code": "NHE",
    "lat": 51.313,
    "lon": 0.45493
  },
  {
    "name": "New Holland",
    "code": "NHL",
    "lat": 53.70193,
    "lon": -0.3602
  },
  {
    "name": "Nitshill",
    "code": "NIT",
    "lat": 55.81192,
    "lon": -4.35995
  },
  {
    "name": "New Lane",
    "code": "NLN",
    "lat": 53.61168,
    "lon": -2.86772
  },
  {
    "name": "North Llanrwst",
    "code": "NLR",
    "lat": 53.14384,
    "lon": -3.80274
  },
  {
    "name": "Nailsea & Backwell",
    "code": "NLS",
    "lat": 51.41941,
    "lon": -2.75065
  },
  {
    "name": "Northolt Park",
    "code": "NLT",
    "lat": 51.55755,
    "lon": -0.35947
  },
  {
    "name": "Newton-le-Willows",
    "code": "NLW",
    "lat": 53.45307,
    "lon": -2.61359
  },
  {
    "name": "New Mills Central",
    "code": "NMC",
    "lat": 53.36486,
    "lon": -2.00567
  },
  {
    "name": "Newmarket",
    "code": "NMK",
    "lat": 52.23796,
    "lon": 0.40622
  },
  {
    "name": "New Mills Newtown",
    "code": "NMN",
    "lat": 53.35964,
    "lon": -2.00852
  },
  {
    "name": "Northampton",
    "code": "NMP",
    "lat": 52.23751,
    "lon": -0.90665
  },
  {
    "name": "Needham Market",
    "code": "NMT",
    "lat": 52.1526,
    "lon": 1.05527
  },
  {
    "name": "Newark North Gate",
    "code": "NNG",
    "lat": 53.08178,
    "lon": -0.79985
  },
  {
    "name": "Ninian Park",
    "code": "NNP",
    "lat": 51.47662,
    "lon": -3.2017
  },
  {
    "name": "Nunthorpe",
    "code": "NNT",
    "lat": 54.52788,
    "lon": -1.16944
  },
  {
    "name": "Newton-on-Ayr",
    "code": "NOA",
    "lat": 55.47405,
    "lon": -4.62582
  },
  {
    "name": "Normanton",
    "code": "NOR",
    "lat": 53.70053,
    "lon": -1.42341
  },
  {
    "name": "Nottingham",
    "code": "NOT",
    "lat": 52.94709,
    "lon": -1.14638
  },
  {
    "name": "New Pudsey",
    "code": "NPD",
    "lat": 53.80449,
    "lon": -1.68079
  },
  {
    "name": "North Queensferry",
    "code": "NQU",
    "lat": 56.01249,
    "lon": -3.39458
  },
  {
    "name": "Newquay",
    "code": "NQY",
    "lat": 50.41509,
    "lon": -5.07571
  },
  {
    "name": "Norbury",
    "code": "NRB",
    "lat": 51.41145,
    "lon": -0.12192
  },
  {
    "name": "Newbury Racecourse",
    "code": "NRC",
    "lat": 51.39846,
    "lon": -1.3078
  },
  {
    "name": "North Road",
    "code": "NRD",
    "lat": 54.5362,
    "lon": -1.55395
  },
  {
    "name": "Nairn",
    "code": "NRN",
    "lat": 57.58023,
    "lon": -3.872
  },
  {
    "name": "Nethertown",
    "code": "NRT",
    "lat": 54.45642,
    "lon": -3.56584
  },
  {
    "name": "Norwich",
    "code": "NRW",
    "lat": 52.62718,
    "lon": 1.30683
  },
  {
    "name": "Normans Bay",
    "code": "NSB",
    "lat": 50.8261,
    "lon": 0.38948
  },
  {
    "name": "Newstead",
    "code": "NSD",
    "lat": 53.07001,
    "lon": -1.22179
  },
  {
    "name": "New Southgate",
    "code": "NSG",
    "lat": 51.61412,
    "lon": -0.14303
  },
  {
    "name": "North Sheen",
    "code": "NSH",
    "lat": 51.46516,
    "lon": -0.28788
  },
  {
    "name": "Newton Abbot",
    "code": "NTA",
    "lat": 50.52957,
    "lon": -3.59919
  },
  {
    "name": "Newton St Cyres",
    "code": "NTC",
    "lat": 50.77892,
    "lon": -3.58941
  },
  {
    "name": "Neath",
    "code": "NTH",
    "lat": 51.66236,
    "lon": -3.80725
  },
  {
    "name": "Netley",
    "code": "NTL",
    "lat": 50.8749,
    "lon": -1.34191
  },
  {
    "name": "Newton (S Lanarks)",
    "code": "NTN",
    "lat": 55.81877,
    "lon": -4.13304
  },
  {
    "name": "Northallerton",
    "code": "NTR",
    "lat": 54.33308,
    "lon": -1.44128
  },
  {
    "name": "Nutfield",
    "code": "NUF",
    "lat": 51.22681,
    "lon": -0.13253
  },
  {
    "name": "Northumberland Park",
    "code": "NUM",
    "lat": 51.60198,
    "lon": -0.05392
  },
  {
    "name": "Nuneaton",
    "code": "NUN",
    "lat": 52.52639,
    "lon": -1.46387
  },
  {
    "name": "Nutbourne",
    "code": "NUT",
    "lat": 50.84606,
    "lon": -0.88295
  },
  {
    "name": "Newhaven Harbour",
    "code": "NVH",
    "lat": 50.78978,
    "lon": 0.055
  },
  {
    "name": "Newhaven Town",
    "code": "NVN",
    "lat": 50.79485,
    "lon": 0.05495
  },
  {
    "name": "Navigation Road",
    "code": "NVR",
    "lat": 53.39539,
    "lon": -2.34342
  },
  {
    "name": "North Walsham",
    "code": "NWA",
    "lat": 52.81692,
    "lon": 1.38447
  },
  {
    "name": "North Wembley",
    "code": "NWB",
    "lat": 51.5626,
    "lon": -0.30398
  },
  {
    "name": "Norwood Junction",
    "code": "NWD",
    "lat": 51.39702,
    "lon": -0.07522
  },
  {
    "name": "Newport (Essex)",
    "code": "NWE",
    "lat": 51.97988,
    "lon": 0.21514
  },
  {
    "name": "Northwich",
    "code": "NWI",
    "lat": 53.26147,
    "lon": -2.49693
  },
  {
    "name": "New Milton",
    "code": "NWM",
    "lat": 50.75574,
    "lon": -1.65781
  },
  {
    "name": "Newton for Hyde",
    "code": "NWN",
    "lat": 53.4564,
    "lon": -2.06714
  },
  {
    "name": "Newport (S Wales)",
    "code": "NWP",
    "lat": 51.58878,
    "lon": -3.00056
  },
  {
    "name": "Newtonmore",
    "code": "NWR",
    "lat": 57.05913,
    "lon": -4.1191
  },
  {
    "name": "Newtown (Powys)",
    "code": "NWT",
    "lat": 52.51233,
    "lon": -3.3114
  },
  {
    "name": "New Cross",
    "code": "NWX",
    "lat": 51.47635,
    "lon": -0.03242
  },
  {
    "name": "New Cross Gate",
    "code": "NXG",
    "lat": 51.47513,
    "lon": -0.04039
  },
  {
    "name": "Oban",
    "code": "OBN",
    "lat": 56.41246,
    "lon": -5.47392
  },
  {
    "name": "Ockendon",
    "code": "OCK",
    "lat": 51.522,
    "lon": 0.29047
  },
  {
    "name": "Old Hill",
    "code": "OHL",
    "lat": 52.47094,
    "lon": -2.05619
  },
  {
    "name": "Okehampton",
    "code": "OKE",
    "lat": 50.73237,
    "lon": -3.99625
  },
  {
    "name": "Oakleigh Park",
    "code": "OKL",
    "lat": 51.63769,
    "lon": -0.16621
  },
  {
    "name": "Oakham",
    "code": "OKM",
    "lat": 52.67224,
    "lon": -0.73416
  },
  {
    "name": "Oakengates",
    "code": "OKN",
    "lat": 52.69341,
    "lon": -2.45019
  },
  {
    "name": "Old Street",
    "code": "OLD",
    "lat": 51.52584,
    "lon": -0.08853
  },
  {
    "name": "Oldfield Park",
    "code": "OLF",
    "lat": 51.37923,
    "lon": -2.38051
  },
  {
    "name": "Olton",
    "code": "OLT",
    "lat": 52.43852,
    "lon": -1.80432
  },
  {
    "name": "Ockley",
    "code": "OLY",
    "lat": 51.15151,
    "lon": -0.336
  },
  {
    "name": "Ormskirk",
    "code": "OMS",
    "lat": 53.56929,
    "lon": -2.8812
  },
  {
    "name": "Orrell Park",
    "code": "OPK",
    "lat": 53.46191,
    "lon": -2.96332
  },
  {
    "name": "Ore",
    "code": "ORE",
    "lat": 50.86694,
    "lon": 0.59157
  },
  {
    "name": "Old Roan",
    "code": "ORN",
    "lat": 53.48691,
    "lon": -2.95108
  },
  {
    "name": "Orpington",
    "code": "ORP",
    "lat": 51.3733,
    "lon": 0.0891
  },
  {
    "name": "Orrell",
    "code": "ORR",
    "lat": 53.53033,
    "lon": -2.70884
  },
  {
    "name": "Otford",
    "code": "OTF",
    "lat": 51.31316,
    "lon": 0.19679
  },
  {
    "name": "Oulton Broad North",
    "code": "OUN",
    "lat": 52.47778,
    "lon": 1.71573
  },
  {
    "name": "Oulton Broad South",
    "code": "OUS",
    "lat": 52.46962,
    "lon": 1.70768
  },
  {
    "name": "Outwood",
    "code": "OUT",
    "lat": 53.7153,
    "lon": -1.51039
  },
  {
    "name": "Overpool",
    "code": "OVE",
    "lat": 53.28406,
    "lon": -2.92407
  },
  {
    "name": "Overton",
    "code": "OVR",
    "lat": 51.25429,
    "lon": -1.25927
  },
  {
    "name": "Oxford",
    "code": "OXF",
    "lat": 51.7535,
    "lon": -1.27015
  },
  {
    "name": "Oxenholme Lake District",
    "code": "OXN",
    "lat": 54.30494,
    "lon": -2.72186
  },
  {
    "name": "Oxford Parkway",
    "code": "OXP",
    "lat": 51.80408,
    "lon": -1.27448
  },
  {
    "name": "Oxshott",
    "code": "OXS",
    "lat": 51.3364,
    "lon": -0.36241
  },
  {
    "name": "Oxted",
    "code": "OXT",
    "lat": 51.25791,
    "lon": -0.00483
  },
  {
    "name": "London Paddington",
    "code": "PAD",
    "lat": 51.516,
    "lon": -0.17617
  },
  {
    "name": "Palmers Green",
    "code": "PAL",
    "lat": 51.61832,
    "lon": -0.11043
  },
  {
    "name": "Pangbourne",
    "code": "PAN",
    "lat": 51.4854,
    "lon": -1.09046
  },
  {
    "name": "Par",
    "code": "PAR",
    "lat": 50.35532,
    "lon": -4.70472
  },
  {
    "name": "Patricroft",
    "code": "PAT",
    "lat": 53.48479,
    "lon": -2.35825
  },
  {
    "name": "Parbold",
    "code": "PBL",
    "lat": 53.59077,
    "lon": -2.77075
  },
  {
    "name": "Peterborough",
    "code": "PBO",
    "lat": 52.57499,
    "lon": -0.24983
  },
  {
    "name": "Potters Bar",
    "code": "PBR",
    "lat": 51.69707,
    "lon": -0.1926
  },
  {
    "name": "Pembrey & Burry Port",
    "code": "PBY",
    "lat": 51.68353,
    "lon": -4.24787
  },
  {
    "name": "Pencoed",
    "code": "PCD",
    "lat": 51.52461,
    "lon": -3.5005
  },
  {
    "name": "Paisley Canal",
    "code": "PCN",
    "lat": 55.84006,
    "lon": -4.42411
  },
  {
    "name": "Padgate",
    "code": "PDG",
    "lat": 53.40581,
    "lon": -2.55681
  },
  {
    "name": "Paddock Wood",
    "code": "PDW",
    "lat": 51.18226,
    "lon": 0.38917
  },
  {
    "name": "Peartree",
    "code": "PEA",
    "lat": 52.89701,
    "lon": -1.47321
  },
  {
    "name": "Pevensey Bay",
    "code": "PEB",
    "lat": 50.81745,
    "lon": 0.34292
  },
  {
    "name": "Pegswood",
    "code": "PEG",
    "lat": 55.17812,
    "lon": -1.64417
  },
  {
    "name": "Pemberton",
    "code": "PEM",
    "lat": 53.53042,
    "lon": -2.67035
  },
  {
    "name": "Penarth",
    "code": "PEN",
    "lat": 51.43589,
    "lon": -3.17447
  },
  {
    "name": "Penrhiwceiber",
    "code": "PER",
    "lat": 51.66992,
    "lon": -3.35996
  },
  {
    "name": "Pensarn (Gwynedd)",
    "code": "PES",
    "lat": 52.83072,
    "lon": -4.11217
  },
  {
    "name": "Petts Wood",
    "code": "PET",
    "lat": 51.38862,
    "lon": 0.07449
  },
  {
    "name": "Pevensey & Westham",
    "code": "PEV",
    "lat": 50.81579,
    "lon": 0.32482
  },
  {
    "name": "Pewsey",
    "code": "PEW",
    "lat": 51.34219,
    "lon": -1.77068
  },
  {
    "name": "Purfleet",
    "code": "PFL",
    "lat": 51.48102,
    "lon": 0.23678
  },
  {
    "name": "Pontefract Monkhill",
    "code": "PFM",
    "lat": 53.699,
    "lon": -1.30369
  },
  {
    "name": "Pontefract Baghill",
    "code": "PFR",
    "lat": 53.6919,
    "lon": -1.30336
  },
  {
    "name": "Poulton-le-Fylde",
    "code": "PFY",
    "lat": 53.84844,
    "lon": -2.99063
  },
  {
    "name": "Pengam",
    "code": "PGM",
    "lat": 51.67045,
    "lon": -3.23011
  },
  {
    "name": "Paignton",
    "code": "PGN",
    "lat": 50.4347,
    "lon": -3.5649
  },
  {
    "name": "Penhelig",
    "code": "PHG",
    "lat": 52.5457,
    "lon": -4.03504
  },
  {
    "name": "Penshurst",
    "code": "PHR",
    "lat": 51.19733,
    "lon": 0.17348
  },
  {
    "name": "Pilning",
    "code": "PIL",
    "lat": 51.55662,
    "lon": -2.62712
  },
  {
    "name": "Pinhoe",
    "code": "PIN",
    "lat": 50.73777,
    "lon": -3.46935
  },
  {
    "name": "Pitlochry",
    "code": "PIT",
    "lat": 56.70249,
    "lon": -3.73557
  },
  {
    "name": "Penkridge",
    "code": "PKG",
    "lat": 52.72352,
    "lon": -2.1193
  },
  {
    "name": "Parkstone (Dorset)",
    "code": "PKS",
    "lat": 50.72296,
    "lon": -1.94796
  },
  {
    "name": "Park Street",
    "code": "PKT",
    "lat": 51.72546,
    "lon": -0.34028
  },
  {
    "name": "Pluckley",
    "code": "PLC",
    "lat": 51.15647,
    "lon": 0.74741
  },
  {
    "name": "Portslade",
    "code": "PLD",
    "lat": 50.83568,
    "lon": -0.20532
  },
  {
    "name": "Pollokshields East",
    "code": "PLE",
    "lat": 55.84105,
    "lon": -4.2686
  },
  {
    "name": "Polegate",
    "code": "PLG",
    "lat": 50.82124,
    "lon": 0.24515
  },
  {
    "name": "Plockton",
    "code": "PLK",
    "lat": 57.33354,
    "lon": -5.666
  },
  {
    "name": "Plumley",
    "code": "PLM",
    "lat": 53.27469,
    "lon": -2.41967
  },
  {
    "name": "Portlethen",
    "code": "PLN",
    "lat": 57.06136,
    "lon": -2.12662
  },
  {
    "name": "Pleasington",
    "code": "PLS",
    "lat": 53.73097,
    "lon": -2.54413
  },
  {
    "name": "Pontlottyn",
    "code": "PLT",
    "lat": 51.74663,
    "lon": -3.27897
  },
  {
    "name": "Plumstead",
    "code": "PLU",
    "lat": 51.4898,
    "lon": 0.08427
  },
  {
    "name": "Pollokshields West",
    "code": "PLW",
    "lat": 55.83768,
    "lon": -4.27575
  },
  {
    "name": "Plymouth",
    "code": "PLY",
    "lat": 50.37782,
    "lon": -4.14336
  },
  {
    "name": "Portsmouth Arms",
    "code": "PMA",
    "lat": 50.957,
    "lon": -3.95061
  },
  {
    "name": "Pembroke",
    "code": "PMB",
    "lat": 51.67295,
    "lon": -4.90607
  },
  {
    "name": "Pembroke Dock",
    "code": "PMD",
    "lat": 51.69392,
    "lon": -4.93808
  },
  {
    "name": "Portsmouth Harbour",
    "code": "PMH",
    "lat": 50.79695,
    "lon": -1.10784
  },
  {
    "name": "Plumpton",
    "code": "PMP",
    "lat": 50.92866,
    "lon": -0.06018
  },
  {
    "name": "Peckham Rye",
    "code": "PMR",
    "lat": 51.47004,
    "lon": -0.06941
  },
  {
    "name": "Portsmouth & Southsea",
    "code": "PMS",
    "lat": 50.79848,
    "lon": -1.09091
  },
  {
    "name": "Polmont",
    "code": "PMT",
    "lat": 55.98472,
    "lon": -3.71497
  },
  {
    "name": "Penmaenmawr",
    "code": "PMW",
    "lat": 53.27048,
    "lon": -3.92352
  },
  {
    "name": "Penally",
    "code": "PNA",
    "lat": 51.65892,
    "lon": -4.72209
  },
  {
    "name": "Penychain",
    "code": "PNC",
    "lat": 52.9029,
    "lon": -4.33874
  },
  {
    "name": "Penge East",
    "code": "PNE",
    "lat": 51.41934,
    "lon": -0.05421
  },
  {
    "name": "Penyffordd",
    "code": "PNF",
    "lat": 53.14311,
    "lon": -3.05485
  },
  {
    "name": "Pannal",
    "code": "PNL",
    "lat": 53.95834,
    "lon": -1.53346
  },
  {
    "name": "Penmere",
    "code": "PNM",
    "lat": 50.15032,
    "lon": -5.08325
  },
  {
    "name": "Penrith North Lakes",
    "code": "PNR",
    "lat": 54.66181,
    "lon": -2.75889
  },
  {
    "name": "Penistone",
    "code": "PNS",
    "lat": 53.52557,
    "lon": -1.62278
  },
  {
    "name": "Penge West",
    "code": "PNW",
    "lat": 51.41756,
    "lon": -0.06083
  },
  {
    "name": "Pen-y-Bont",
    "code": "PNY",
    "lat": 52.27395,
    "lon": -3.32194
  },
  {
    "name": "Penzance",
    "code": "PNZ",
    "lat": 50.12167,
    "lon": -5.53263
  },
  {
    "name": "Pokesdown",
    "code": "POK",
    "lat": 50.73107,
    "lon": -1.82511
  },
  {
    "name": "Polsloe Bridge",
    "code": "POL",
    "lat": 50.73127,
    "lon": -3.50197
  },
  {
    "name": "Ponders End",
    "code": "PON",
    "lat": 51.64226,
    "lon": -0.03507
  },
  {
    "name": "Poole",
    "code": "POO",
    "lat": 50.71941,
    "lon": -1.98333
  },
  {
    "name": "Poppleton",
    "code": "POP",
    "lat": 53.97591,
    "lon": -1.14859
  },
  {
    "name": "Porth",
    "code": "POR",
    "lat": 51.61253,
    "lon": -3.4072
  },
  {
    "name": "Pontefract Tanshelf",
    "code": "POT",
    "lat": 53.69414,
    "lon": -1.31892
  },
  {
    "name": "Pontypridd",
    "code": "PPD",
    "lat": 51.59937,
    "lon": -3.34139
  },
  {
    "name": "Possilpark & Parkhouse",
    "code": "PPK",
    "lat": 55.89013,
    "lon": -4.25851
  },
  {
    "name": "Pontypool & New Inn",
    "code": "PPL",
    "lat": 51.69796,
    "lon": -3.01425
  },
  {
    "name": "Preston Park - London Road",
    "code": "PPR",
    "lat": 50.84585,
    "lon": -0.15155
  },
  {
    "name": "Prestwick Intl Airport",
    "code": "PRA",
    "lat": 55.50903,
    "lon": -4.61416
  },
  {
    "name": "Prestbury",
    "code": "PRB",
    "lat": 53.2934,
    "lon": -2.14548
  },
  {
    "name": "Preston",
    "code": "PRE",
    "lat": 53.75687,
    "lon": -2.70812
  },
  {
    "name": "Penrhyndeudraeth",
    "code": "PRH",
    "lat": 52.92884,
    "lon": -4.06457
  },
  {
    "name": "Prittlewell",
    "code": "PRL",
    "lat": 51.55069,
    "lon": 0.71069
  },
  {
    "name": "Parton",
    "code": "PRN",
    "lat": 54.57037,
    "lon": -3.5808
  },
  {
    "name": "Preston Park",
    "code": "PRP",
    "lat": 50.84594,
    "lon": -0.15517
  },
  {
    "name": "Princes Risborough",
    "code": "PRR",
    "lat": 51.71786,
    "lon": -0.84388
  },
  {
    "name": "Prees",
    "code": "PRS",
    "lat": 52.89932,
    "lon": -2.68966
  },
  {
    "name": "Prestatyn",
    "code": "PRT",
    "lat": 53.33652,
    "lon": -3.40714
  },
  {
    "name": "Prudhoe",
    "code": "PRU",
    "lat": 54.96583,
    "lon": -1.86486
  },
  {
    "name": "Perranwell",
    "code": "PRW",
    "lat": 50.21657,
    "lon": -5.11213
  },
  {
    "name": "Perry Barr",
    "code": "PRY",
    "lat": 52.5165,
    "lon": -1.90196
  },
  {
    "name": "Prescot",
    "code": "PSC",
    "lat": 53.42357,
    "lon": -2.79917
  },
  {
    "name": "Pitsea",
    "code": "PSE",
    "lat": 51.56036,
    "lon": 0.5063
  },
  {
    "name": "Pershore",
    "code": "PSH",
    "lat": 52.13056,
    "lon": -2.07154
  },
  {
    "name": "Port Sunlight",
    "code": "PSL",
    "lat": 53.34927,
    "lon": -2.99804
  },
  {
    "name": "Parson Street",
    "code": "PSN",
    "lat": 51.43332,
    "lon": -2.60775
  },
  {
    "name": "Prestonpans",
    "code": "PST",
    "lat": 55.95309,
    "lon": -2.97477
  },
  {
    "name": "Polesworth",
    "code": "PSW",
    "lat": 52.62584,
    "lon": -1.61054
  },
  {
    "name": "Port Talbot Parkway",
    "code": "PTA",
    "lat": 51.59171,
    "lon": -3.78134
  },
  {
    "name": "Pentre-Bach",
    "code": "PTB",
    "lat": 51.72501,
    "lon": -3.36233
  },
  {
    "name": "Portchester",
    "code": "PTC",
    "lat": 50.84874,
    "lon": -1.12424
  },
  {
    "name": "Pontarddulais",
    "code": "PTD",
    "lat": 51.71762,
    "lon": -4.04558
  },
  {
    "name": "Pantyffynnon",
    "code": "PTF",
    "lat": 51.77888,
    "lon": -3.99746
  },
  {
    "name": "Port Glasgow",
    "code": "PTG",
    "lat": 55.9335,
    "lon": -4.68981
  },
  {
    "name": "Perth",
    "code": "PTH",
    "lat": 56.39208,
    "lon": -3.4397
  },
  {
    "name": "Partick",
    "code": "PTK",
    "lat": 55.86987,
    "lon": -4.3088
  },
  {
    "name": "Priesthill & Darnley",
    "code": "PTL",
    "lat": 55.81216,
    "lon": -4.34289
  },
  {
    "name": "Porthmadog",
    "code": "PTM",
    "lat": 52.93093,
    "lon": -4.13446
  },
  {
    "name": "Petersfield",
    "code": "PTR",
    "lat": 51.00672,
    "lon": -0.94114
  },
  {
    "name": "Patterton",
    "code": "PTT",
    "lat": 55.7906,
    "lon": -4.33529
  },
  {
    "name": "Prestwick",
    "code": "PTW",
    "lat": 55.50169,
    "lon": -4.61515
  },
  {
    "name": "Pulborough",
    "code": "PUL",
    "lat": 50.95735,
    "lon": -0.51655
  },
  {
    "name": "Purley Oaks",
    "code": "PUO",
    "lat": 51.34705,
    "lon": -0.09885
  },
  {
    "name": "Purley",
    "code": "PUR",
    "lat": 51.33758,
    "lon": -0.11403
  },
  {
    "name": "Putney",
    "code": "PUT",
    "lat": 51.46131,
    "lon": -0.21647
  },
  {
    "name": "Pollokshaws East",
    "code": "PWE",
    "lat": 55.82463,
    "lon": -4.28688
  },
  {
    "name": "Pwllheli",
    "code": "PWL",
    "lat": 52.88785,
    "lon": -4.41672
  },
  {
    "name": "Pollokshaws West",
    "code": "PWW",
    "lat": 55.82381,
    "lon": -4.3016
  },
  {
    "name": "Patchway",
    "code": "PWY",
    "lat": 51.52593,
    "lon": -2.5627
  },
  {
    "name": "Pontyclun",
    "code": "PYC",
    "lat": 51.52377,
    "lon": -3.39293
  },
  {
    "name": "Pye Corner",
    "code": "PYE",
    "lat": 51.58147,
    "lon": -3.04123
  },
  {
    "name": "Paisley Gilmour Street",
    "code": "PYG",
    "lat": 55.84734,
    "lon": -4.4245
  },
  {
    "name": "Paisley St James",
    "code": "PYJ",
    "lat": 55.8521,
    "lon": -4.44244
  },
  {
    "name": "Pyle",
    "code": "PYL",
    "lat": 51.52574,
    "lon": -3.69808
  },
  {
    "name": "Penryn",
    "code": "PYN",
    "lat": 50.1707,
    "lon": -5.11166
  },
  {
    "name": "Pont-y-Pant",
    "code": "PYP",
    "lat": 53.06515,
    "lon": -3.86274
  },
  {
    "name": "Poynton",
    "code": "PYT",
    "lat": 53.3504,
    "lon": -2.13441
  },
  {
    "name": "Queenborough",
    "code": "QBR",
    "lat": 51.41564,
    "lon": 0.74968
  },
  {
    "name": "Queens Park (Glasgow)",
    "code": "QPK",
    "lat": 55.83529,
    "lon": -4.26674
  },
  {
    "name": "Queens Park (London)",
    "code": "QPW",
    "lat": 51.53397,
    "lon": -0.20498
  },
  {
    "name": "Queenstown Road (Battersea)",
    "code": "QRB",
    "lat": 51.47497,
    "lon": -0.14667
  },
  {
    "name": "Queens Road Peckham",
    "code": "QRP",
    "lat": 51.47357,
    "lon": -0.05731
  },
  {
    "name": "Quintrell Downs",
    "code": "QUI",
    "lat": 50.40405,
    "lon": -5.02854
  },
  {
    "name": "Quakers Yard",
    "code": "QYD",
    "lat": 51.66072,
    "lon": -3.32281
  },
  {
    "name": "Radley",
    "code": "RAD",
    "lat": 51.68621,
    "lon": -1.24048
  },
  {
    "name": "Rainham (Kent)",
    "code": "RAI",
    "lat": 51.3663,
    "lon": 0.61135
  },
  {
    "name": "Ramsgate",
    "code": "RAM",
    "lat": 51.34081,
    "lon": 1.40649
  },
  {
    "name": "Rannoch",
    "code": "RAN",
    "lat": 56.68603,
    "lon": -4.57686
  },
  {
    "name": "Rauceby",
    "code": "RAU",
    "lat": 52.98522,
    "lon": -0.4566
  },
  {
    "name": "Ravenglass",
    "code": "RAV",
    "lat": 54.35571,
    "lon": -3.40881
  },
  {
    "name": "Raynes Park",
    "code": "RAY",
    "lat": 51.40918,
    "lon": -0.23015
  },
  {
    "name": "Robertsbridge",
    "code": "RBR",
    "lat": 50.98493,
    "lon": 0.46879
  },
  {
    "name": "British Steel Redcar",
    "code": "RBS",
    "lat": 54.60989,
    "lon": -1.11267
  },
  {
    "name": "Reading - buses",
    "code": "RBU",
    "lat": 51.45814,
    "lon": -0.97167
  },
  {
    "name": "Risca & Pontymister",
    "code": "RCA",
    "lat": 51.60584,
    "lon": -3.09223
  },
  {
    "name": "Redcar Central",
    "code": "RCC",
    "lat": 54.61623,
    "lon": -1.07087
  },
  {
    "name": "Rochdale",
    "code": "RCD",
    "lat": 53.61032,
    "lon": -2.15352
  },
  {
    "name": "Redcar East",
    "code": "RCE",
    "lat": 54.60926,
    "lon": -1.0523
  },
  {
    "name": "Redland",
    "code": "RDA",
    "lat": 51.46839,
    "lon": -2.59913
  },
  {
    "name": "Redbridge (Hants)",
    "code": "RDB",
    "lat": 50.91993,
    "lon": -1.47017
  },
  {
    "name": "Redditch",
    "code": "RDC",
    "lat": 52.30629,
    "lon": -1.94554
  },
  {
    "name": "Riddlesdown",
    "code": "RDD",
    "lat": 51.33249,
    "lon": -0.09938
  },
  {
    "name": "Radcliffe (Notts)",
    "code": "RDF",
    "lat": 52.94881,
    "lon": -1.03733
  },
  {
    "name": "Reading",
    "code": "RDG",
    "lat": 51.45878,
    "lon": -0.97185
  },
  {
    "name": "Redhill",
    "code": "RDH",
    "lat": 51.2402,
    "lon": -0.1659
  },
  {
    "name": "Riding Mill",
    "code": "RDM",
    "lat": 54.94873,
    "lon": -1.97155
  },
  {
    "name": "Reddish North",
    "code": "RDN",
    "lat": 53.44943,
    "lon": -2.15625
  },
  {
    "name": "Radyr",
    "code": "RDR",
    "lat": 51.51633,
    "lon": -3.24836
  },
  {
    "name": "Reddish South",
    "code": "RDS",
    "lat": 53.43594,
    "lon": -2.15876
  },
  {
    "name": "Radlett",
    "code": "RDT",
    "lat": 51.68519,
    "lon": -0.31724
  },
  {
    "name": "Reading West",
    "code": "RDW",
    "lat": 51.4555,
    "lon": -0.99014
  },
  {
    "name": "Rectory Road",
    "code": "REC",
    "lat": 51.55851,
    "lon": -0.06826
  },
  {
    "name": "Redruth",
    "code": "RED",
    "lat": 50.23324,
    "lon": -5.22597
  },
  {
    "name": "Reedham (Norfolk)",
    "code": "REE",
    "lat": 52.56453,
    "lon": 1.55967
  },
  {
    "name": "Reigate",
    "code": "REI",
    "lat": 51.24196,
    "lon": -0.20382
  },
  {
    "name": "Retford",
    "code": "RET",
    "lat": 53.31518,
    "lon": -0.94788
  },
  {
    "name": "Rochford",
    "code": "RFD",
    "lat": 51.58173,
    "lon": 0.70232
  },
  {
    "name": "Rock Ferry",
    "code": "RFY",
    "lat": 53.37267,
    "lon": -3.01083
  },
  {
    "name": "Rugeley Trent Valley",
    "code": "RGL",
    "lat": 52.76967,
    "lon": -1.92985
  },
  {
    "name": "Rugeley Town",
    "code": "RGT",
    "lat": 52.75439,
    "lon": -1.93684
  },
  {
    "name": "Ramsgreave & Wilpshire",
    "code": "RGW",
    "lat": 53.77979,
    "lon": -2.47814
  },
  {
    "name": "Ribblehead",
    "code": "RHD",
    "lat": 54.20585,
    "lon": -2.36085
  },
  {
    "name": "Rhiwbina",
    "code": "RHI",
    "lat": 51.52118,
    "lon": -3.21398
  },
  {
    "name": "Rhyl",
    "code": "RHL",
    "lat": 53.31844,
    "lon": -3.48911
  },
  {
    "name": "Reedham (Surrey)",
    "code": "RHM",
    "lat": 51.33112,
    "lon": -0.12341
  },
  {
    "name": "Rhosneigr",
    "code": "RHO",
    "lat": 53.23486,
    "lon": -4.50666
  },
  {
    "name": "Rhymney",
    "code": "RHY",
    "lat": 51.75884,
    "lon": -3.28931
  },
  {
    "name": "Rhoose",
    "code": "RIA",
    "lat": 51.38707,
    "lon": -3.3494
  },
  {
    "name": "Rickmansworth",
    "code": "RIC",
    "lat": 51.64025,
    "lon": -0.47327
  },
  {
    "name": "Ridgmont",
    "code": "RID",
    "lat": 52.02641,
    "lon": -0.59455
  },
  {
    "name": "Rice Lane",
    "code": "RIL",
    "lat": 53.45778,
    "lon": -2.96232
  },
  {
    "name": "Rishton",
    "code": "RIS",
    "lat": 53.76383,
    "lon": -2.42016
  },
  {
    "name": "Ruskington",
    "code": "RKT",
    "lat": 53.04148,
    "lon": -0.38076
  },
  {
    "name": "Rayleigh",
    "code": "RLG",
    "lat": 51.5893,
    "lon": 0.59999
  },
  {
    "name": "Rowlands Castle",
    "code": "RLN",
    "lat": 50.89216,
    "lon": -0.95746
  },
  {
    "name": "Roman Bridge",
    "code": "RMB",
    "lat": 53.04444,
    "lon": -3.92165
  },
  {
    "name": "Rotherham Central",
    "code": "RMC",
    "lat": 53.43227,
    "lon": -1.36044
  },
  {
    "name": "Richmond (London)",
    "code": "RMD",
    "lat": 51.46306,
    "lon": -0.30156
  },
  {
    "name": "Romford",
    "code": "RMF",
    "lat": 51.57483,
    "lon": 0.18325
  },
  {
    "name": "Romiley",
    "code": "RML",
    "lat": 53.41403,
    "lon": -2.08932
  },
  {
    "name": "Rainford",
    "code": "RNF",
    "lat": 53.51712,
    "lon": -2.78947
  },
  {
    "name": "Rainhill",
    "code": "RNH",
    "lat": 53.41713,
    "lon": -2.7664
  },
  {
    "name": "Rainham (London)",
    "code": "RNM",
    "lat": 51.51673,
    "lon": 0.19065
  },
  {
    "name": "Roughton Road",
    "code": "RNR",
    "lat": 52.91804,
    "lon": 1.2998
  },
  {
    "name": "Roby",
    "code": "ROB",
    "lat": 53.41005,
    "lon": -2.85594
  },
  {
    "name": "Roche",
    "code": "ROC",
    "lat": 50.41853,
    "lon": -4.83025
  },
  {
    "name": "Rotherhithe",
    "code": "ROE",
    "lat": 51.50082,
    "lon": -0.05204
  },
  {
    "name": "Rogart",
    "code": "ROG",
    "lat": 57.9887,
    "lon": -4.15819
  },
  {
    "name": "Rolleston",
    "code": "ROL",
    "lat": 53.06531,
    "lon": -0.89967
  },
  {
    "name": "Romsey",
    "code": "ROM",
    "lat": 50.99252,
    "lon": -1.49315
  },
  {
    "name": "Roose",
    "code": "ROO",
    "lat": 54.11517,
    "lon": -3.19458
  },
  {
    "name": "Rogerstone",
    "code": "ROR",
    "lat": 51.59561,
    "lon": -3.06663
  },
  {
    "name": "Rosyth",
    "code": "ROS",
    "lat": 56.04551,
    "lon": -3.42731
  },
  {
    "name": "Rowley Regis",
    "code": "ROW",
    "lat": 52.47733,
    "lon": -2.03088
  },
  {
    "name": "Ryder Brow",
    "code": "RRB",
    "lat": 53.4566,
    "lon": -2.17309
  },
  {
    "name": "Rose Grove",
    "code": "RSG",
    "lat": 53.7862,
    "lon": -2.2828
  },
  {
    "name": "Rose Hill Marple",
    "code": "RSH",
    "lat": 53.39624,
    "lon": -2.07652
  },
  {
    "name": "Renton",
    "code": "RTN",
    "lat": 55.97042,
    "lon": -4.58611
  },
  {
    "name": "Rochester",
    "code": "RTR",
    "lat": 51.38555,
    "lon": 0.51029
  },
  {
    "name": "Ruabon",
    "code": "RUA",
    "lat": 52.98715,
    "lon": -3.04315
  },
  {
    "name": "Runcorn East",
    "code": "RUE",
    "lat": 53.32759,
    "lon": -2.6657
  },
  {
    "name": "Rufford",
    "code": "RUF",
    "lat": 53.63448,
    "lon": -2.80784
  },
  {
    "name": "Rugby",
    "code": "RUG",
    "lat": 52.37911,
    "lon": -1.25048
  },
  {
    "name": "Runcorn",
    "code": "RUN",
    "lat": 53.33871,
    "lon": -2.73925
  },
  {
    "name": "Ruswarp",
    "code": "RUS",
    "lat": 54.4702,
    "lon": -0.62777
  },
  {
    "name": "Rutherglen",
    "code": "RUT",
    "lat": 55.83059,
    "lon": -4.2121
  },
  {
    "name": "Ravensbourne",
    "code": "RVB",
    "lat": 51.41419,
    "lon": -0.00755
  },
  {
    "name": "Ravensthorpe",
    "code": "RVN",
    "lat": 53.67554,
    "lon": -1.65558
  },
  {
    "name": "Rawcliffe",
    "code": "RWC",
    "lat": 53.68906,
    "lon": -0.96086
  },
  {
    "name": "Roy Bridge",
    "code": "RYB",
    "lat": 56.88834,
    "lon": -4.83724
  },
  {
    "name": "Ryde Esplanade",
    "code": "RYD",
    "lat": 50.73285,
    "lon": -1.15962
  },
  {
    "name": "Ryde Hoverport",
    "code": "XRD",
    "lat": 50.732844,
    "lon": -1.158323
  },
  {
    "name": "Rye",
    "code": "RYE",
    "lat": 50.95237,
    "lon": 0.73071
  },
  {
    "name": "Rye House",
    "code": "RYH",
    "lat": 51.76942,
    "lon": 0.00564
  },
  {
    "name": "Roydon",
    "code": "RYN",
    "lat": 51.77549,
    "lon": 0.03626
  },
  {
    "name": "Ryde Pier Head",
    "code": "RYP",
    "lat": 50.73917,
    "lon": -1.16013
  },
  {
    "name": "Ryde St Johns Road",
    "code": "RYR",
    "lat": 50.72435,
    "lon": -1.15657
  },
  {
    "name": "Royston",
    "code": "RYS",
    "lat": 52.05309,
    "lon": -0.02691
  },
  {
    "name": "St Albans Abbey",
    "code": "SAA",
    "lat": 51.74474,
    "lon": -0.34257
  },
  {
    "name": "Smallbrook Junction",
    "code": "SAB",
    "lat": 50.71109,
    "lon": -1.1542
  },
  {
    "name": "St Albans City",
    "code": "SAC",
    "lat": 51.75048,
    "lon": -0.32754
  },
  {
    "name": "Sandwell & Dudley",
    "code": "SAD",
    "lat": 52.50867,
    "lon": -2.0116
  },
  {
    "name": "Saltaire",
    "code": "SAE",
    "lat": 53.8385,
    "lon": -1.79048
  },
  {
    "name": "Salfords (Surrey)",
    "code": "SAF",
    "lat": 51.20174,
    "lon": -0.16249
  },
  {
    "name": "Salhouse",
    "code": "SAH",
    "lat": 52.6756,
    "lon": 1.39143
  },
  {
    "name": "St Johns (London)",
    "code": "SAJ",
    "lat": 51.46939,
    "lon": -0.02271
  },
  {
    "name": "Salisbury",
    "code": "SAL",
    "lat": 51.07054,
    "lon": -1.80639
  },
  {
    "name": "Saltmarshe",
    "code": "SAM",
    "lat": 53.72194,
    "lon": -0.80949
  },
  {
    "name": "Sandown",
    "code": "SAN",
    "lat": 50.65685,
    "lon": -1.16239
  },
  {
    "name": "St Andrews Road",
    "code": "SAR",
    "lat": 51.51276,
    "lon": -2.69632
  },
  {
    "name": "St Annes-on-the-Sea",
    "code": "SAS",
    "lat": 53.75304,
    "lon": -3.02911
  },
  {
    "name": "South Acton",
    "code": "SAT",
    "lat": 51.4997,
    "lon": -0.27016
  },
  {
    "name": "St Austell",
    "code": "SAU",
    "lat": 50.33951,
    "lon": -4.78941
  },
  {
    "name": "Stratford-upon-Avon",
    "code": "SAV",
    "lat": 52.19426,
    "lon": -1.7163
  },
  {
    "name": "Sawbridgeworth",
    "code": "SAW",
    "lat": 51.81435,
    "lon": 0.16043
  },
  {
    "name": "Saxmundham",
    "code": "SAX",
    "lat": 52.21492,
    "lon": 1.49018
  },
  {
    "name": "Swanley",
    "code": "SAY",
    "lat": 51.39339,
    "lon": 0.16924
  },
  {
    "name": "Starbeck",
    "code": "SBE",
    "lat": 53.99901,
    "lon": -1.50114
  },
  {
    "name": "St Budeaux Ferry Road",
    "code": "SBF",
    "lat": 50.40138,
    "lon": -4.18686
  },
  {
    "name": "Stourbridge Junction",
    "code": "SBJ",
    "lat": 52.4476,
    "lon": -2.13385
  },
  {
    "name": "South Bank",
    "code": "SBK",
    "lat": 54.58383,
    "lon": -1.17666
  },
  {
    "name": "South Bermondsey",
    "code": "SBM",
    "lat": 51.48814,
    "lon": -0.05467
  },
  {
    "name": "Stonebridge Park",
    "code": "SBP",
    "lat": 51.54412,
    "lon": -0.27583
  },
  {
    "name": "Spean Bridge",
    "code": "SBR",
    "lat": 56.88999,
    "lon": -4.92161
  },
  {
    "name": "St Bees",
    "code": "SBS",
    "lat": 54.49254,
    "lon": -3.59115
  },
  {
    "name": "Stourbridge Town",
    "code": "SBT",
    "lat": 52.45559,
    "lon": -2.14182
  },
  {
    "name": "Southbury",
    "code": "SBU",
    "lat": 51.64871,
    "lon": -0.05243
  },
  {
    "name": "St Budeaux Victoria Road",
    "code": "SBV",
    "lat": 50.402,
    "lon": -4.18745
  },
  {
    "name": "Selby",
    "code": "SBY",
    "lat": 53.7828,
    "lon": -1.06378
  },
  {
    "name": "Scarborough",
    "code": "SCA",
    "lat": 54.2798,
    "lon": -0.40571
  },
  {
    "name": "Stechford",
    "code": "SCF",
    "lat": 52.48483,
    "lon": -1.81103
  },
  {
    "name": "Stone Crossing",
    "code": "SCG",
    "lat": 51.45133,
    "lon": 0.26379
  },
  {
    "name": "Scotstounhill",
    "code": "SCH",
    "lat": 55.88513,
    "lon": -4.35288
  },
  {
    "name": "St Columb Road",
    "code": "SCR",
    "lat": 50.3987,
    "lon": -4.94081
  },
  {
    "name": "Starcross",
    "code": "SCS",
    "lat": 50.62778,
    "lon": -3.44773
  },
  {
    "name": "Scotscalder",
    "code": "SCT",
    "lat": 58.48298,
    "lon": -3.55207
  },
  {
    "name": "Scunthorpe",
    "code": "SCU",
    "lat": 53.5862,
    "lon": -0.65098
  },
  {
    "name": "South Croydon",
    "code": "SCY",
    "lat": 51.36297,
    "lon": -0.09345
  },
  {
    "name": "Snodland",
    "code": "SDA",
    "lat": 51.33023,
    "lon": 0.44825
  },
  {
    "name": "Sandbach",
    "code": "SDB",
    "lat": 53.15019,
    "lon": -2.39351
  },
  {
    "name": "Shoreditch High Street",
    "code": "SDC",
    "lat": 51.52338,
    "lon": -0.07524
  },
  {
    "name": "Shadwell",
    "code": "SDE",
    "lat": 51.51129,
    "lon": -0.05693
  },
  {
    "name": "Saundersfoot",
    "code": "SDF",
    "lat": 51.72209,
    "lon": -4.71662
  },
  {
    "name": "Sandling",
    "code": "SDG",
    "lat": 51.09037,
    "lon": 1.06606
  },
  {
    "name": "Sudbury Hill Harrow",
    "code": "SDH",
    "lat": 51.55847,
    "lon": -0.3358
  },
  {
    "name": "Sandhills",
    "code": "SDL",
    "lat": 53.42995,
    "lon": -2.9915
  },
  {
    "name": "Shieldmuir",
    "code": "SDM",
    "lat": 55.77748,
    "lon": -3.95699
  },
  {
    "name": "St Denys",
    "code": "SDN",
    "lat": 50.92218,
    "lon": -1.38776
  },
  {
    "name": "Sandplace",
    "code": "SDP",
    "lat": 50.38674,
    "lon": -4.46452
  },
  {
    "name": "Saunderton",
    "code": "SDR",
    "lat": 51.6759,
    "lon": -0.82547
  },
  {
    "name": "Sandwich",
    "code": "SDW",
    "lat": 51.26991,
    "lon": 1.34258
  },
  {
    "name": "Sandy",
    "code": "SDY",
    "lat": 52.12475,
    "lon": -0.28119
  },
  {
    "name": "Seaham",
    "code": "SEA",
    "lat": 54.83906,
    "lon": -1.34633
  },
  {
    "name": "Seaburn",
    "code": "SEB",
    "lat": 54.92954,
    "lon": -1.38669
  },
  {
    "name": "Seaton Carew",
    "code": "SEC",
    "lat": 54.65832,
    "lon": -1.20042
  },
  {
    "name": "Shelford (Cambs)",
    "code": "SED",
    "lat": 52.14884,
    "lon": 0.13998
  },
  {
    "name": "Southease",
    "code": "SEE",
    "lat": 50.83126,
    "lon": 0.03065
  },
  {
    "name": "Seaford",
    "code": "SEF",
    "lat": 50.77284,
    "lon": 0.10014
  },
  {
    "name": "Selling",
    "code": "SEG",
    "lat": 51.27736,
    "lon": 0.94089
  },
  {
    "name": "Shoreham (Kent)",
    "code": "SEH",
    "lat": 51.33222,
    "lon": 0.1889
  },
  {
    "name": "Sellafield",
    "code": "SEL",
    "lat": 54.41659,
    "lon": -3.51046
  },
  {
    "name": "Seamer",
    "code": "SEM",
    "lat": 54.24076,
    "lon": -0.41703
  },
  {
    "name": "Shenstone",
    "code": "SEN",
    "lat": 52.63937,
    "lon": -1.8442
  },
  {
    "name": "St Erth",
    "code": "SER",
    "lat": 50.17048,
    "lon": -5.44432
  },
  {
    "name": "South Elmsall",
    "code": "SES",
    "lat": 53.59462,
    "lon": -1.28486
  },
  {
    "name": "Settle",
    "code": "SET",
    "lat": 54.06692,
    "lon": -2.28071
  },
  {
    "name": "Sevenoaks",
    "code": "SEV",
    "lat": 51.27686,
    "lon": 0.18168
  },
  {
    "name": "Southease - Church",
    "code": "SEZ",
    "lat": 50.82975,
    "lon": 0.01922
  },
  {
    "name": "Stratford International",
    "code": "SFA",
    "lat": 51.54483,
    "lon": -0.00877
  },
  {
    "name": "Salford Central",
    "code": "SFD",
    "lat": 53.48309,
    "lon": -2.25484
  },
  {
    "name": "Shawfair",
    "code": "SFI",
    "lat": 55.91993,
    "lon": -3.0787
  },
  {
    "name": "Seaforth & Litherland",
    "code": "SFL",
    "lat": 53.46628,
    "lon": -3.00563
  },
  {
    "name": "Shifnal",
    "code": "SFN",
    "lat": 52.66609,
    "lon": -2.37185
  },
  {
    "name": "Stanford-le-Hope",
    "code": "SFO",
    "lat": 51.51437,
    "lon": 0.42304
  },
  {
    "name": "Shalford (Surrey)",
    "code": "SFR",
    "lat": 51.21432,
    "lon": -0.5668
  },
  {
    "name": "Smethwick Galton Bridge",
    "code": "SGB",
    "lat": 52.50179,
    "lon": -1.98051
  },
  {
    "name": "South Gyle",
    "code": "SGL",
    "lat": 55.93635,
    "lon": -3.29947
  },
  {
    "name": "St Germans",
    "code": "SGM",
    "lat": 50.39427,
    "lon": -4.30845
  },
  {
    "name": "South Greenford",
    "code": "SGN",
    "lat": 51.53376,
    "lon": -0.33671
  },
  {
    "name": "Stone Granville Square",
    "code": "SGQ",
    "lat": 52.90343,
    "lon": -2.1483
  },
  {
    "name": "Slade Green",
    "code": "SGR",
    "lat": 51.46779,
    "lon": 0.1905
  },
  {
    "name": "Shirebrook",
    "code": "SHB",
    "lat": 53.20426,
    "lon": -1.20244
  },
  {
    "name": "Streethouse",
    "code": "SHC",
    "lat": 53.67617,
    "lon": -1.40012
  },
  {
    "name": "Shildon",
    "code": "SHD",
    "lat": 54.62617,
    "lon": -1.63661
  },
  {
    "name": "Sherborne",
    "code": "SHE",
    "lat": 50.94401,
    "lon": -2.51308
  },
  {
    "name": "Sheffield",
    "code": "SHF",
    "lat": 53.37824,
    "lon": -1.4621
  },
  {
    "name": "Shirehampton",
    "code": "SHH",
    "lat": 51.48435,
    "lon": -2.67929
  },
  {
    "name": "Shiplake",
    "code": "SHI",
    "lat": 51.51146,
    "lon": -0.8826
  },
  {
    "name": "St Helens Junction",
    "code": "SHJ",
    "lat": 53.43374,
    "lon": -2.70026
  },
  {
    "name": "Shawlands",
    "code": "SHL",
    "lat": 55.8292,
    "lon": -4.29234
  },
  {
    "name": "Sheringham",
    "code": "SHM",
    "lat": 52.94145,
    "lon": 1.21033
  },
  {
    "name": "Shanklin",
    "code": "SHN",
    "lat": 50.6339,
    "lon": -1.17984
  },
  {
    "name": "Sholing",
    "code": "SHO",
    "lat": 50.89674,
    "lon": -1.36492
  },
  {
    "name": "Shepperton",
    "code": "SHP",
    "lat": 51.39681,
    "lon": -0.44678
  },
  {
    "name": "Shrewsbury",
    "code": "SHR",
    "lat": 52.71195,
    "lon": -2.74977
  },
  {
    "name": "Shotts",
    "code": "SHS",
    "lat": 55.81864,
    "lon": -3.79832
  },
  {
    "name": "Shotton",
    "code": "SHT",
    "lat": 53.21256,
    "lon": -3.03843
  },
  {
    "name": "Stonehouse",
    "code": "SHU",
    "lat": 51.74589,
    "lon": -2.27951
  },
  {
    "name": "Shawford",
    "code": "SHW",
    "lat": 51.02212,
    "lon": -1.32778
  },
  {
    "name": "Shipley",
    "code": "SHY",
    "lat": 53.83306,
    "lon": -1.77349
  },
  {
    "name": "Southend Airport",
    "code": "SIA",
    "lat": 51.56867,
    "lon": 0.70506
  },
  {
    "name": "Silecroft",
    "code": "SIC",
    "lat": 54.22597,
    "lon": -3.33444
  },
  {
    "name": "Sidcup",
    "code": "SID",
    "lat": 51.43387,
    "lon": 0.1038
  },
  {
    "name": "Sherburn-in-Elmet",
    "code": "SIE",
    "lat": 53.79717,
    "lon": -1.23268
  },
  {
    "name": "St Helier (London)",
    "code": "SIH",
    "lat": 51.3899,
    "lon": -0.19877
  },
  {
    "name": "Sileby",
    "code": "SIL",
    "lat": 52.73161,
    "lon": -1.10999
  },
  {
    "name": "Singer",
    "code": "SIN",
    "lat": 55.90766,
    "lon": -4.40548
  },
  {
    "name": "Shipton",
    "code": "SIP",
    "lat": 51.86565,
    "lon": -1.5927
  },
  {
    "name": "Sittingbourne",
    "code": "SIT",
    "lat": 51.34197,
    "lon": 0.7347
  },
  {
    "name": "St Ives (Cornwall)",
    "code": "SIV",
    "lat": 50.20903,
    "lon": -5.47798
  },
  {
    "name": "St James Park (Devon)",
    "code": "SJP",
    "lat": 50.73115,
    "lon": -3.52202
  },
  {
    "name": "St James Street (London)",
    "code": "SJS",
    "lat": 51.58099,
    "lon": -0.03291
  },
  {
    "name": "Skewen",
    "code": "SKE",
    "lat": 51.66139,
    "lon": -3.84654
  },
  {
    "name": "Skegness",
    "code": "SKG",
    "lat": 53.1432,
    "lon": 0.33436
  },
  {
    "name": "Skipton",
    "code": "SKI",
    "lat": 53.9587,
    "lon": -2.02588
  },
  {
    "name": "Stoke Mandeville",
    "code": "SKM",
    "lat": 51.7878,
    "lon": -0.78408
  },
  {
    "name": "St Keyne Wishing Well Halt (Rail Station)",
    "code": "SKN",
    "lat": 50.42303,
    "lon": -4.46356
  },
  {
    "name": "Stocksfield",
    "code": "SKS",
    "lat": 54.94705,
    "lon": -1.91676
  },
  {
    "name": "Stoke Newington",
    "code": "SKW",
    "lat": 51.56524,
    "lon": -0.07288
  },
  {
    "name": "Slateford",
    "code": "SLA",
    "lat": 55.92668,
    "lon": -3.24345
  },
  {
    "name": "Saltburn",
    "code": "SLB",
    "lat": 54.58346,
    "lon": -0.97414
  },
  {
    "name": "Salford Crescent",
    "code": "SLD",
    "lat": 53.4866,
    "lon": -2.27575
  },
  {
    "name": "Sleights",
    "code": "SLH",
    "lat": 54.46106,
    "lon": -0.66248
  },
  {
    "name": "Silkstone Common",
    "code": "SLK",
    "lat": 53.53494,
    "lon": -1.56347
  },
  {
    "name": "Stallingborough",
    "code": "SLL",
    "lat": 53.58711,
    "lon": -0.18367
  },
  {
    "name": "Slough",
    "code": "SLO",
    "lat": 51.51188,
    "lon": -0.5915
  },
  {
    "name": "St Leonards Warrior Square",
    "code": "SLQ",
    "lat": 50.85569,
    "lon": 0.56029
  },
  {
    "name": "Sleaford",
    "code": "SLR",
    "lat": 52.99549,
    "lon": -0.41034
  },
  {
    "name": "Shettleston",
    "code": "SLS",
    "lat": 55.85352,
    "lon": -4.16003
  },
  {
    "name": "Saltcoats",
    "code": "SLT",
    "lat": 55.63387,
    "lon": -4.78428
  },
  {
    "name": "Silver Street",
    "code": "SLV",
    "lat": 51.6147,
    "lon": -0.06723
  },
  {
    "name": "Salwick",
    "code": "SLW",
    "lat": 53.78155,
    "lon": -2.81704
  },
  {
    "name": "Selly Oak",
    "code": "SLY",
    "lat": 52.44199,
    "lon": -1.93581
  },
  {
    "name": "Small Heath",
    "code": "SMA",
    "lat": 52.46377,
    "lon": -1.85939
  },
  {
    "name": "Smithy Bridge",
    "code": "SMB",
    "lat": 53.63327,
    "lon": -2.1135
  },
  {
    "name": "Sampford Courtenay",
    "code": "SMC",
    "lat": 50.77009,
    "lon": -3.94893
  },
  {
    "name": "Stamford",
    "code": "SMD",
    "lat": 52.64785,
    "lon": -0.48011
  },
  {
    "name": "St Margarets (London)",
    "code": "SMG",
    "lat": 51.45524,
    "lon": -0.3202
  },
  {
    "name": "Stamford Hill",
    "code": "SMH",
    "lat": 51.57447,
    "lon": -0.07668
  },
  {
    "name": "Stowmarket",
    "code": "SMK",
    "lat": 52.18973,
    "lon": 1.00002
  },
  {
    "name": "Sea Mills",
    "code": "SML",
    "lat": 51.47999,
    "lon": -2.64996
  },
  {
    "name": "Southminster",
    "code": "SMN",
    "lat": 51.66063,
    "lon": 0.83521
  },
  {
    "name": "South Merton",
    "code": "SMO",
    "lat": 51.40299,
    "lon": -0.20516
  },
  {
    "name": "Smethwick Rolfe Street",
    "code": "SMR",
    "lat": 52.49639,
    "lon": -1.97064
  },
  {
    "name": "St Margarets (Herts)",
    "code": "SMT",
    "lat": 51.78784,
    "lon": 0.00128
  },
  {
    "name": "St Mary Cray",
    "code": "SMY",
    "lat": 51.39475,
    "lon": 0.10639
  },
  {
    "name": "Sandal & Agbrigg",
    "code": "SNA",
    "lat": 53.66309,
    "lon": -1.48141
  },
  {
    "name": "Sandhurst",
    "code": "SND",
    "lat": 51.34693,
    "lon": -0.80459
  },
  {
    "name": "Stone",
    "code": "SNE",
    "lat": 52.90835,
    "lon": -2.15504
  },
  {
    "name": "Shenfield",
    "code": "SNF",
    "lat": 51.63088,
    "lon": 0.32985
  },
  {
    "name": "Sunningdale",
    "code": "SNG",
    "lat": 51.39194,
    "lon": -0.63304
  },
  {
    "name": "St Helens Central",
    "code": "SNH",
    "lat": 53.45313,
    "lon": -2.7303
  },
  {
    "name": "Snaith",
    "code": "SNI",
    "lat": 53.69313,
    "lon": -1.02845
  },
  {
    "name": "Sankey for Penketh",
    "code": "SNK",
    "lat": 53.39248,
    "lon": -2.65047
  },
  {
    "name": "Stoneleigh",
    "code": "SNL",
    "lat": 51.3634,
    "lon": -0.24867
  },
  {
    "name": "Swinton (Manchester)",
    "code": "SNN",
    "lat": 53.51484,
    "lon": -2.33746
  },
  {
    "name": "St Neots",
    "code": "SNO",
    "lat": 52.23158,
    "lon": -0.24741
  },
  {
    "name": "Sanderstead",
    "code": "SNR",
    "lat": 51.34828,
    "lon": -0.09367
  },
  {
    "name": "Staines",
    "code": "SNS",
    "lat": 51.43246,
    "lon": -0.50316
  },
  {
    "name": "Stanlow & Thornton",
    "code": "SNT",
    "lat": 53.27838,
    "lon": -2.84206
  },
  {
    "name": "Swanwick",
    "code": "SNW",
    "lat": 50.87566,
    "lon": -1.26586
  },
  {
    "name": "Sunnymeads",
    "code": "SNY",
    "lat": 51.47029,
    "lon": -0.55937
  },
  {
    "name": "Southampton Airport Parkway",
    "code": "SOA",
    "lat": 50.95081,
    "lon": -1.3631
  },
  {
    "name": "Southbourne",
    "code": "SOB",
    "lat": 50.84826,
    "lon": -0.90811
  },
  {
    "name": "Southend Central",
    "code": "SOC",
    "lat": 51.53707,
    "lon": 0.71174
  },
  {
    "name": "Southend East",
    "code": "SOE",
    "lat": 51.53898,
    "lon": 0.73183
  },
  {
    "name": "South Woodham Ferrers",
    "code": "SOF",
    "lat": 51.64947,
    "lon": 0.60652
  },
  {
    "name": "Stonegate",
    "code": "SOG",
    "lat": 51.01997,
    "lon": 0.36388
  },
  {
    "name": "South Hampstead",
    "code": "SOH",
    "lat": 51.54144,
    "lon": -0.17887
  },
  {
    "name": "Stow",
    "code": "SOI",
    "lat": 55.69231,
    "lon": -2.86689
  },
  {
    "name": "South Kenton",
    "code": "SOK",
    "lat": 51.57022,
    "lon": -0.30846
  },
  {
    "name": "Solihull",
    "code": "SOL",
    "lat": 52.41441,
    "lon": -1.7884
  },
  {
    "name": "South Milford",
    "code": "SOM",
    "lat": 53.78234,
    "lon": -1.25053
  },
  {
    "name": "Steeton & Silsden",
    "code": "SON",
    "lat": 53.90005,
    "lon": -1.94472
  },
  {
    "name": "Strood",
    "code": "SOO",
    "lat": 51.39655,
    "lon": 0.50019
  },
  {
    "name": "Southport",
    "code": "SOP",
    "lat": 53.64653,
    "lon": -3.00244
  },
  {
    "name": "Sole Street",
    "code": "SOR",
    "lat": 51.38315,
    "lon": 0.3781
  },
  {
    "name": "Stoke-on-Trent",
    "code": "SOT",
    "lat": 53.008,
    "lon": -2.18099
  },
  {
    "name": "Southampton Central",
    "code": "SOU",
    "lat": 50.90744,
    "lon": -1.4136
  },
  {
    "name": "Southend Victoria",
    "code": "SOV",
    "lat": 51.54152,
    "lon": 0.71151
  },
  {
    "name": "Sowerby Bridge",
    "code": "SOW",
    "lat": 53.70786,
    "lon": -1.90703
  },
  {
    "name": "Spalding",
    "code": "SPA",
    "lat": 52.78883,
    "lon": -0.15687
  },
  {
    "name": "Shepherds Bush",
    "code": "SPB",
    "lat": 51.50529,
    "lon": -0.21765
  },
  {
    "name": "Springfield",
    "code": "SPF",
    "lat": 56.29496,
    "lon": -3.05245
  },
  {
    "name": "Shepherds Well",
    "code": "SPH",
    "lat": 51.1884,
    "lon": 1.22992
  },
  {
    "name": "Spital",
    "code": "SPI",
    "lat": 53.33995,
    "lon": -2.99391
  },
  {
    "name": "Sutton Parkway",
    "code": "SPK",
    "lat": 53.11412,
    "lon": -1.24557
  },
  {
    "name": "Spooner Row",
    "code": "SPN",
    "lat": 52.53502,
    "lon": 1.08649
  },
  {
    "name": "Spondon",
    "code": "SPO",
    "lat": 52.91224,
    "lon": -1.41109
  },
  {
    "name": "Shippea Hill",
    "code": "SPP",
    "lat": 52.43023,
    "lon": 0.41336
  },
  {
    "name": "Springburn",
    "code": "SPR",
    "lat": 55.88192,
    "lon": -4.23053
  },
  {
    "name": "Stepps",
    "code": "SPS",
    "lat": 55.89012,
    "lon": -4.1408
  },
  {
    "name": "Stockport",
    "code": "SPT",
    "lat": 53.40556,
    "lon": -2.16301
  },
  {
    "name": "Staplehurst",
    "code": "SPU",
    "lat": 51.17147,
    "lon": 0.55045
  },
  {
    "name": "Shepley",
    "code": "SPY",
    "lat": 53.58875,
    "lon": -1.70493
  },
  {
    "name": "Surrey Quays",
    "code": "SQE",
    "lat": 51.4932,
    "lon": -0.04751
  },
  {
    "name": "Sanquhar",
    "code": "SQH",
    "lat": 55.37016,
    "lon": -3.92452
  },
  {
    "name": "Squires Gate",
    "code": "SQU",
    "lat": 53.77734,
    "lon": -3.05031
  },
  {
    "name": "Stratford (London)",
    "code": "SRA",
    "lat": 51.5419,
    "lon": -0.00339
  },
  {
    "name": "Streatham Common",
    "code": "SRC",
    "lat": 51.41873,
    "lon": -0.13601
  },
  {
    "name": "Stapleton Road",
    "code": "SRD",
    "lat": 51.46751,
    "lon": -2.56622
  },
  {
    "name": "Seer Green",
    "code": "SRG",
    "lat": 51.60984,
    "lon": -0.60781
  },
  {
    "name": "Streatham Hill",
    "code": "SRH",
    "lat": 51.4382,
    "lon": -0.12716
  },
  {
    "name": "Spring Road",
    "code": "SRI",
    "lat": 52.44342,
    "lon": -1.83738
  },
  {
    "name": "Shirley",
    "code": "SRL",
    "lat": 52.40344,
    "lon": -1.84518
  },
  {
    "name": "Strines",
    "code": "SRN",
    "lat": 53.37506,
    "lon": -2.03391
  },
  {
    "name": "Shireoaks",
    "code": "SRO",
    "lat": 53.3248,
    "lon": -1.16799
  },
  {
    "name": "Sarn",
    "code": "SRR",
    "lat": 51.53872,
    "lon": -3.58993
  },
  {
    "name": "Selhurst",
    "code": "SRS",
    "lat": 51.39193,
    "lon": -0.0883
  },
  {
    "name": "Shortlands",
    "code": "SRT",
    "lat": 51.4058,
    "lon": 0.00179
  },
  {
    "name": "South Ruislip",
    "code": "SRU",
    "lat": 51.55693,
    "lon": -0.39925
  },
  {
    "name": "Shoeburyness",
    "code": "SRY",
    "lat": 51.53098,
    "lon": 0.79536
  },
  {
    "name": "Seascale",
    "code": "SSC",
    "lat": 54.39588,
    "lon": -3.48451
  },
  {
    "name": "Stansted Airport",
    "code": "SSD",
    "lat": 51.8886,
    "lon": 0.26082
  },
  {
    "name": "Shoreham-by-Sea (Sussex)",
    "code": "SSE",
    "lat": 50.83442,
    "lon": -0.27171
  },
  {
    "name": "Stocksmoor",
    "code": "SSM",
    "lat": 53.5941,
    "lon": -1.72325
  },
  {
    "name": "Sheerness-on-Sea",
    "code": "SSS",
    "lat": 51.44106,
    "lon": 0.75855
  },
  {
    "name": "Stansted Mountfitchet",
    "code": "SST",
    "lat": 51.90144,
    "lon": 0.19978
  },
  {
    "name": "Stafford",
    "code": "STA",
    "lat": 52.80391,
    "lon": -2.12204
  },
  {
    "name": "Strathcarron",
    "code": "STC",
    "lat": 57.42271,
    "lon": -5.42862
  },
  {
    "name": "Stroud (Glos)",
    "code": "STD",
    "lat": 51.74462,
    "lon": -2.21939
  },
  {
    "name": "Streatham",
    "code": "STE",
    "lat": 51.42581,
    "lon": -0.13155
  },
  {
    "name": "Stromeferry",
    "code": "STF",
    "lat": 57.35228,
    "lon": -5.55116
  },
  {
    "name": "Stirling",
    "code": "STG",
    "lat": 56.1198,
    "lon": -3.93562
  },
  {
    "name": "Shepreth",
    "code": "STH",
    "lat": 52.11417,
    "lon": 0.03133
  },
  {
    "name": "Severn Tunnel Junction",
    "code": "STJ",
    "lat": 51.58467,
    "lon": -2.7779
  },
  {
    "name": "Stockton",
    "code": "STK",
    "lat": 54.56963,
    "lon": -1.31854
  },
  {
    "name": "Southall",
    "code": "STL",
    "lat": 51.50596,
    "lon": -0.37861
  },
  {
    "name": "St Michaels",
    "code": "STM",
    "lat": 53.37562,
    "lon": -2.9528
  },
  {
    "name": "Stonehaven",
    "code": "STN",
    "lat": 56.96682,
    "lon": -2.22531
  },
  {
    "name": "South Tottenham",
    "code": "STO",
    "lat": 51.58038,
    "lon": -0.0721
  },
  {
    "name": "London St Pancras International",
    "code": "STP",
    "lat": 51.5324,
    "lon": -0.12718
  },
  {
    "name": "Stranraer",
    "code": "STR",
    "lat": 54.9096,
    "lon": -5.02473
  },
  {
    "name": "Saltash",
    "code": "STS",
    "lat": 50.40735,
    "lon": -4.20916
  },
  {
    "name": "Stewarton",
    "code": "STT",
    "lat": 55.68214,
    "lon": -4.51804
  },
  {
    "name": "Sturry",
    "code": "STU",
    "lat": 51.30107,
    "lon": 1.12227
  },
  {
    "name": "Stevenston",
    "code": "STV",
    "lat": 55.63427,
    "lon": -4.75078
  },
  {
    "name": "Strawberry Hill",
    "code": "STW",
    "lat": 51.43897,
    "lon": -0.33936
  },
  {
    "name": "Stratford-upon-Avon Parkway",
    "code": "STY",
    "lat": 52.20679,
    "lon": -1.73085
  },
  {
    "name": "St Peters",
    "code": "STZ",
    "lat": 54.91145,
    "lon": -1.3838
  },
  {
    "name": "Sutton Common",
    "code": "SUC",
    "lat": 51.37489,
    "lon": -0.19634
  },
  {
    "name": "Sudbury & Harrow Road",
    "code": "SUD",
    "lat": 51.5544,
    "lon": -0.31547
  },
  {
    "name": "Sugar Loaf",
    "code": "SUG",
    "lat": 52.08228,
    "lon": -3.68697
  },
  {
    "name": "Summerston",
    "code": "SUM",
    "lat": 55.89882,
    "lon": -4.29153
  },
  {
    "name": "Sunderland",
    "code": "SUN",
    "lat": 54.90534,
    "lon": -1.3823
  },
  {
    "name": "Sutton (London)",
    "code": "SUO",
    "lat": 51.35953,
    "lon": -0.19121
  },
  {
    "name": "Sundridge Park",
    "code": "SUP",
    "lat": 51.41378,
    "lon": 0.02145
  },
  {
    "name": "Surbiton",
    "code": "SUR",
    "lat": 51.39246,
    "lon": -0.30396
  },
  {
    "name": "Sutton Coldfield",
    "code": "SUT",
    "lat": 52.56495,
    "lon": -1.82485
  },
  {
    "name": "Sunbury",
    "code": "SUU",
    "lat": 51.41832,
    "lon": -0.41777
  },
  {
    "name": "Sudbury (Suffolk)",
    "code": "SUY",
    "lat": 52.03629,
    "lon": 0.73546
  },
  {
    "name": "Severn Beach",
    "code": "SVB",
    "lat": 51.56002,
    "lon": -2.66449
  },
  {
    "name": "Stevenage",
    "code": "SVG",
    "lat": 51.90169,
    "lon": -0.20711
  },
  {
    "name": "Seven Kings",
    "code": "SVK",
    "lat": 51.56403,
    "lon": 0.09711
  },
  {
    "name": "Staveley",
    "code": "SVL",
    "lat": 54.37553,
    "lon": -2.81886
  },
  {
    "name": "Silverdale",
    "code": "SVR",
    "lat": 54.16991,
    "lon": -2.80384
  },
  {
    "name": "Seven Sisters",
    "code": "SVS",
    "lat": 51.58227,
    "lon": -0.07526
  },
  {
    "name": "Swansea",
    "code": "SWA",
    "lat": 51.62514,
    "lon": -3.94158
  },
  {
    "name": "Swinderby",
    "code": "SWD",
    "lat": 53.16958,
    "lon": -0.70268
  },
  {
    "name": "Swineshead",
    "code": "SWE",
    "lat": 52.96983,
    "lon": -0.18716
  },
  {
    "name": "Swaythling",
    "code": "SWG",
    "lat": 50.94114,
    "lon": -1.37641
  },
  {
    "name": "Swindon",
    "code": "SWI",
    "lat": 51.56547,
    "lon": -1.78551
  },
  {
    "name": "Southwick",
    "code": "SWK",
    "lat": 50.83251,
    "lon": -0.23595
  },
  {
    "name": "Swale",
    "code": "SWL",
    "lat": 51.38924,
    "lon": 0.74715
  },
  {
    "name": "Swanscombe",
    "code": "SWM",
    "lat": 51.44907,
    "lon": 0.30955
  },
  {
    "name": "Swinton (South Yorks)",
    "code": "SWN",
    "lat": 53.48626,
    "lon": -1.30582
  },
  {
    "name": "Snowdown",
    "code": "SWO",
    "lat": 51.2153,
    "lon": 1.21372
  },
  {
    "name": "Stewartby",
    "code": "SWR",
    "lat": 52.06909,
    "lon": -0.52068
  },
  {
    "name": "South Wigston",
    "code": "SWS",
    "lat": 52.58224,
    "lon": -1.13408
  },
  {
    "name": "Slaithwaite",
    "code": "SWT",
    "lat": 53.62384,
    "lon": -1.88158
  },
  {
    "name": "Sway",
    "code": "SWY",
    "lat": 50.78469,
    "lon": -1.61001
  },
  {
    "name": "Saxilby",
    "code": "SXY",
    "lat": 53.26722,
    "lon": -0.66404
  },
  {
    "name": "Styal",
    "code": "SYA",
    "lat": 53.34835,
    "lon": -2.24046
  },
  {
    "name": "Stalybridge",
    "code": "SYB",
    "lat": 53.4846,
    "lon": -2.06274
  },
  {
    "name": "Sydenham",
    "code": "SYD",
    "lat": 51.42725,
    "lon": -0.05424
  },
  {
    "name": "Sydenham Hill",
    "code": "SYH",
    "lat": 51.43272,
    "lon": -0.08033
  },
  {
    "name": "Syon Lane",
    "code": "SYL",
    "lat": 51.48179,
    "lon": -0.32484
  },
  {
    "name": "Syston",
    "code": "SYS",
    "lat": 52.69422,
    "lon": -1.0824
  },
  {
    "name": "Somerleyton",
    "code": "SYT",
    "lat": 52.51025,
    "lon": 1.65228
  },
  {
    "name": "Tame Bridge Parkway",
    "code": "TAB",
    "lat": 52.55294,
    "lon": -1.97621
  },
  {
    "name": "Tackley",
    "code": "TAC",
    "lat": 51.88125,
    "lon": -1.29753
  },
  {
    "name": "Tadworth",
    "code": "TAD",
    "lat": 51.29164,
    "lon": -0.23596
  },
  {
    "name": "Taffs Well",
    "code": "TAF",
    "lat": 51.5408,
    "lon": -3.26295
  },
  {
    "name": "Tain",
    "code": "TAI",
    "lat": 57.81441,
    "lon": -4.05205
  },
  {
    "name": "Talsarnau",
    "code": "TAL",
    "lat": 52.90433,
    "lon": -4.06817
  },
  {
    "name": "Tamworth",
    "code": "TAM",
    "lat": 52.63749,
    "lon": -1.68647
  },
  {
    "name": "Taplow",
    "code": "TAP",
    "lat": 51.52356,
    "lon": -0.68137
  },
  {
    "name": "Tattenham Corner",
    "code": "TAT",
    "lat": 51.30918,
    "lon": -0.24261
  },
  {
    "name": "Taunton",
    "code": "TAU",
    "lat": 51.02329,
    "lon": -3.10277
  },
  {
    "name": "Taynuilt",
    "code": "TAY",
    "lat": 56.43079,
    "lon": -5.23959
  },
  {
    "name": "Three Bridges",
    "code": "TBD",
    "lat": 51.11692,
    "lon": -0.16118
  },
  {
    "name": "Tunbridge Wells",
    "code": "TBW",
    "lat": 51.13023,
    "lon": 0.26282
  },
  {
    "name": "Thornaby",
    "code": "TBY",
    "lat": 54.55927,
    "lon": -1.30141
  },
  {
    "name": "Tondu",
    "code": "TDU",
    "lat": 51.54737,
    "lon": -3.59557
  },
  {
    "name": "Tees-side Airport",
    "code": "TEA",
    "lat": 54.51814,
    "lon": -1.42531
  },
  {
    "name": "Teddington",
    "code": "TED",
    "lat": 51.42448,
    "lon": -0.33271
  },
  {
    "name": "Tenby",
    "code": "TEN",
    "lat": 51.67295,
    "lon": -4.70673
  },
  {
    "name": "Theobalds Grove",
    "code": "TEO",
    "lat": 51.69246,
    "lon": -0.03482
  },
  {
    "name": "Teynham",
    "code": "TEY",
    "lat": 51.33339,
    "lon": 0.80744
  },
  {
    "name": "Telford Central",
    "code": "TFC",
    "lat": 52.68112,
    "lon": -2.44098
  },
  {
    "name": "Teignmouth",
    "code": "TGM",
    "lat": 50.54805,
    "lon": -3.49469
  },
  {
    "name": "Ty Glas",
    "code": "TGS",
    "lat": 51.52154,
    "lon": -3.19654
  },
  {
    "name": "Thatcham",
    "code": "THA",
    "lat": 51.39384,
    "lon": -1.24319
  },
  {
    "name": "Thornliebank",
    "code": "THB",
    "lat": 55.81109,
    "lon": -4.3117
  },
  {
    "name": "Thurnscoe",
    "code": "THC",
    "lat": 53.54506,
    "lon": -1.30879
  },
  {
    "name": "Thames Ditton",
    "code": "THD",
    "lat": 51.3891,
    "lon": -0.33915
  },
  {
    "name": "Theale",
    "code": "THE",
    "lat": 51.43345,
    "lon": -1.07497
  },
  {
    "name": "Thatto Heath",
    "code": "THH",
    "lat": 53.43659,
    "lon": -2.75937
  },
  {
    "name": "Thirsk",
    "code": "THI",
    "lat": 54.22822,
    "lon": -1.37259
  },
  {
    "name": "Tile Hill",
    "code": "THL",
    "lat": 52.39512,
    "lon": -1.59685
  },
  {
    "name": "Thornford",
    "code": "THO",
    "lat": 50.91056,
    "lon": -2.579
  },
  {
    "name": "Thurso",
    "code": "THS",
    "lat": 58.59017,
    "lon": -3.52756
  },
  {
    "name": "Thorntonhall",
    "code": "THT",
    "lat": 55.76867,
    "lon": -4.25116
  },
  {
    "name": "Thurgarton",
    "code": "THU",
    "lat": 53.02897,
    "lon": -0.96225
  },
  {
    "name": "The Hawthorns",
    "code": "THW",
    "lat": 52.50538,
    "lon": -1.96401
  },
  {
    "name": "Tilbury Town",
    "code": "TIL",
    "lat": 51.46236,
    "lon": 0.35404
  },
  {
    "name": "Tipton",
    "code": "TIP",
    "lat": 52.53045,
    "lon": -2.0657
  },
  {
    "name": "Tir-phil",
    "code": "TIR",
    "lat": 51.72091,
    "lon": -3.24639
  },
  {
    "name": "Tisbury",
    "code": "TIS",
    "lat": 51.06084,
    "lon": -2.07901
  },
  {
    "name": "Talybont",
    "code": "TLB",
    "lat": 52.77264,
    "lon": -4.09661
  },
  {
    "name": "Tal-y-Cafn",
    "code": "TLC",
    "lat": 53.22838,
    "lon": -3.81828
  },
  {
    "name": "Tilehurst",
    "code": "TLH",
    "lat": 51.47151,
    "lon": -1.02982
  },
  {
    "name": "The Lakes",
    "code": "TLK",
    "lat": 52.35916,
    "lon": -1.84467
  },
  {
    "name": "Thorpe-le-Soken",
    "code": "TLS",
    "lat": 51.84765,
    "lon": 1.16141
  },
  {
    "name": "Templecombe",
    "code": "TMC",
    "lat": 51.00149,
    "lon": -2.41773
  },
  {
    "name": "Thornton Abbey",
    "code": "TNA",
    "lat": 53.65432,
    "lon": -0.32303
  },
  {
    "name": "Tonfanau",
    "code": "TNF",
    "lat": 52.61356,
    "lon": -4.12371
  },
  {
    "name": "Thorne North",
    "code": "TNN",
    "lat": 53.61608,
    "lon": -0.97232
  },
  {
    "name": "Tonypandy",
    "code": "TNP",
    "lat": 51.61976,
    "lon": -3.44889
  },
  {
    "name": "Thorne South",
    "code": "TNS",
    "lat": 53.60335,
    "lon": -0.9551
  },
  {
    "name": "Todmorden",
    "code": "TOD",
    "lat": 53.71384,
    "lon": -2.09965
  },
  {
    "name": "Three Oaks",
    "code": "TOK",
    "lat": 50.90111,
    "lon": 0.61306
  },
  {
    "name": "Tolworth",
    "code": "TOL",
    "lat": 51.37686,
    "lon": -0.27946
  },
  {
    "name": "Tottenham Hale",
    "code": "TOM",
    "lat": 51.58832,
    "lon": -0.05992
  },
  {
    "name": "Tonbridge",
    "code": "TON",
    "lat": 51.19141,
    "lon": 0.27099
  },
  {
    "name": "Tooting",
    "code": "TOO",
    "lat": 51.41985,
    "lon": -0.16127
  },
  {
    "name": "Topsham",
    "code": "TOP",
    "lat": 50.6862,
    "lon": -3.46444
  },
  {
    "name": "Totnes",
    "code": "TOT",
    "lat": 50.43585,
    "lon": -3.68872
  },
  {
    "name": "Thorpe Bay",
    "code": "TPB",
    "lat": 51.53757,
    "lon": 0.76174
  },
  {
    "name": "Thorpe Culvert",
    "code": "TPC",
    "lat": 53.12311,
    "lon": 0.19942
  },
  {
    "name": "Ton Pentre",
    "code": "TPN",
    "lat": 51.6478,
    "lon": -3.4862
  },
  {
    "name": "Torquay",
    "code": "TQY",
    "lat": 50.46112,
    "lon": -3.5433
  },
  {
    "name": "Trafford Park",
    "code": "TRA",
    "lat": 53.45484,
    "lon": -2.31063
  },
  {
    "name": "Treherbert",
    "code": "TRB",
    "lat": 51.67224,
    "lon": -3.53632
  },
  {
    "name": "Troed-y-Rhiw",
    "code": "TRD",
    "lat": 51.71242,
    "lon": -3.34676
  },
  {
    "name": "Trefforest Estate",
    "code": "TRE",
    "lat": 51.56829,
    "lon": -3.29026
  },
  {
    "name": "Trefforest",
    "code": "TRF",
    "lat": 51.59146,
    "lon": -3.32513
  },
  {
    "name": "Trehafod",
    "code": "TRH",
    "lat": 51.61015,
    "lon": -3.38099
  },
  {
    "name": "Tring",
    "code": "TRI",
    "lat": 51.80075,
    "lon": -0.62243
  },
  {
    "name": "Trimley",
    "code": "TRM",
    "lat": 51.97654,
    "lon": 1.31956
  },
  {
    "name": "Troon",
    "code": "TRN",
    "lat": 55.5428,
    "lon": -4.65529
  },
  {
    "name": "Trowbridge",
    "code": "TRO",
    "lat": 51.31983,
    "lon": -2.21435
  },
  {
    "name": "Torre",
    "code": "TRR",
    "lat": 50.47317,
    "lon": -3.54644
  },
  {
    "name": "Thurston",
    "code": "TRS",
    "lat": 52.25002,
    "lon": 0.80866
  },
  {
    "name": "Truro",
    "code": "TRU",
    "lat": 50.26383,
    "lon": -5.06487
  },
  {
    "name": "Treorchy",
    "code": "TRY",
    "lat": 51.65753,
    "lon": -3.50575
  },
  {
    "name": "Tadworth - The Avenue",
    "code": "TTA",
    "lat": 51.29101,
    "lon": -0.23599
  },
  {
    "name": "Thetford",
    "code": "TTF",
    "lat": 52.41915,
    "lon": 0.74508
  },
  {
    "name": "Thornton Heath",
    "code": "TTH",
    "lat": 51.39878,
    "lon": -0.1003
  },
  {
    "name": "Totton",
    "code": "TTN",
    "lat": 50.91787,
    "lon": -1.48243
  },
  {
    "name": "Tulse Hill",
    "code": "TUH",
    "lat": 51.43986,
    "lon": -0.10507
  },
  {
    "name": "Tulloch",
    "code": "TUL",
    "lat": 56.88426,
    "lon": -4.70132
  },
  {
    "name": "Turkey Street",
    "code": "TUR",
    "lat": 51.67264,
    "lon": -0.04721
  },
  {
    "name": "Tutbury & Hatton",
    "code": "TUT",
    "lat": 52.86415,
    "lon": -1.68224
  },
  {
    "name": "Tiverton Parkway",
    "code": "TVP",
    "lat": 50.91717,
    "lon": -3.35966
  },
  {
    "name": "Tweedbank",
    "code": "TWB",
    "lat": 55.60544,
    "lon": -2.75761
  },
  {
    "name": "Twickenham",
    "code": "TWI",
    "lat": 51.45003,
    "lon": -0.3304
  },
  {
    "name": "Town Green",
    "code": "TWN",
    "lat": 53.54282,
    "lon": -2.90449
  },
  {
    "name": "Twyford",
    "code": "TWY",
    "lat": 51.47553,
    "lon": -0.86329
  },
  {
    "name": "Ty Croes",
    "code": "TYC",
    "lat": 53.22258,
    "lon": -4.47475
  },
  {
    "name": "Tygwyn",
    "code": "TYG",
    "lat": 52.8938,
    "lon": -4.07867
  },
  {
    "name": "Tyndrum Lower",
    "code": "TYL",
    "lat": 56.43333,
    "lon": -4.71481
  },
  {
    "name": "Tyseley",
    "code": "TYS",
    "lat": 52.45412,
    "lon": -1.83911
  },
  {
    "name": "Tywyn",
    "code": "TYW",
    "lat": 52.58559,
    "lon": -4.09357
  },
  {
    "name": "Uckfield",
    "code": "UCK",
    "lat": 50.96874,
    "lon": 0.09639
  },
  {
    "name": "Uddingston",
    "code": "UDD",
    "lat": 55.82352,
    "lon": -4.08669
  },
  {
    "name": "Uphall",
    "code": "UHA",
    "lat": 55.91904,
    "lon": -3.50211
  },
  {
    "name": "Upper Holloway",
    "code": "UHL",
    "lat": 51.56364,
    "lon": -0.12951
  },
  {
    "name": "Ulceby",
    "code": "ULC",
    "lat": 53.61922,
    "lon": -0.30083
  },
  {
    "name": "Ulleskelf",
    "code": "ULL",
    "lat": 53.85362,
    "lon": -1.21397
  },
  {
    "name": "Ulverston",
    "code": "ULV",
    "lat": 54.19159,
    "lon": -3.09792
  },
  {
    "name": "Umberleigh",
    "code": "UMB",
    "lat": 50.99675,
    "lon": -3.98292
  },
  {
    "name": "University",
    "code": "UNI",
    "lat": 52.45125,
    "lon": -1.93668
  },
  {
    "name": "Upper Halliford",
    "code": "UPH",
    "lat": 51.41307,
    "lon": -0.4309
  },
  {
    "name": "Upholland",
    "code": "UPL",
    "lat": 53.52839,
    "lon": -2.7414
  },
  {
    "name": "Upminster",
    "code": "UPM",
    "lat": 51.55902,
    "lon": 0.25089
  },
  {
    "name": "Upton",
    "code": "UPT",
    "lat": 53.38651,
    "lon": -3.08416
  },
  {
    "name": "Upwey",
    "code": "UPW",
    "lat": 50.64826,
    "lon": -2.46615
  },
  {
    "name": "Urmston",
    "code": "URM",
    "lat": 53.44829,
    "lon": -2.3538
  },
  {
    "name": "Uttoxeter",
    "code": "UTT",
    "lat": 52.89681,
    "lon": -1.85726
  },
  {
    "name": "Upper Tyndrum",
    "code": "UTY",
    "lat": 56.43465,
    "lon": -4.70371
  },
  {
    "name": "Upper Warlingham",
    "code": "UWL",
    "lat": 51.30851,
    "lon": -0.07795
  },
  {
    "name": "Valley",
    "code": "VAL",
    "lat": 53.2813,
    "lon": -4.56339
  },
  {
    "name": "London Victoria",
    "code": "VIC",
    "lat": 51.49526,
    "lon": -0.14454
  },
  {
    "name": "Virginia Water",
    "code": "VIR",
    "lat": 51.4018,
    "lon": -0.56217
  },
  {
    "name": "Vauxhall",
    "code": "VXH",
    "lat": 51.48619,
    "lon": -0.12289
  },
  {
    "name": "Warrington Central",
    "code": "WAC",
    "lat": 53.39183,
    "lon": -2.59316
  },
  {
    "name": "Wadhurst",
    "code": "WAD",
    "lat": 51.07346,
    "lon": 0.31319
  },
  {
    "name": "London Waterloo East",
    "code": "WAE",
    "lat": 51.50408,
    "lon": -0.10889
  },
  {
    "name": "Wallyford",
    "code": "WAF",
    "lat": 55.94028,
    "lon": -3.01494
  },
  {
    "name": "Walton-on-Thames",
    "code": "WAL",
    "lat": 51.37293,
    "lon": -0.41463
  },
  {
    "name": "Walmer",
    "code": "WAM",
    "lat": 51.20332,
    "lon": 1.38289
  },
  {
    "name": "Wanborough",
    "code": "WAN",
    "lat": 51.24452,
    "lon": -0.66759
  },
  {
    "name": "Walton (Merseyside)",
    "code": "WAO",
    "lat": 53.45623,
    "lon": -2.96575
  },
  {
    "name": "Ware",
    "code": "WAR",
    "lat": 51.80796,
    "lon": -0.02877
  },
  {
    "name": "Watton-at-Stone",
    "code": "WAS",
    "lat": 51.85644,
    "lon": -0.11942
  },
  {
    "name": "London Waterloo",
    "code": "WAT",
    "lat": 51.5033,
    "lon": -0.1131
  },
  {
    "name": "Wavertree Technology Park",
    "code": "WAV",
    "lat": 53.4052,
    "lon": -2.92291
  },
  {
    "name": "Waterbeach",
    "code": "WBC",
    "lat": 52.26232,
    "lon": 0.19679
  },
  {
    "name": "Whitley Bridge",
    "code": "WBD",
    "lat": 53.69914,
    "lon": -1.15828
  },
  {
    "name": "Warblington",
    "code": "WBL",
    "lat": 50.85343,
    "lon": -0.96715
  },
  {
    "name": "Wimbledon Chase",
    "code": "WBO",
    "lat": 51.40956,
    "lon": -0.21403
  },
  {
    "name": "West Brompton",
    "code": "WBP",
    "lat": 51.48707,
    "lon": -0.19559
  },
  {
    "name": "Warrington Bank Quay",
    "code": "WBQ",
    "lat": 53.38603,
    "lon": -2.60236
  },
  {
    "name": "Whaley Bridge",
    "code": "WBR",
    "lat": 53.33025,
    "lon": -1.98464
  },
  {
    "name": "West Byfleet",
    "code": "WBY",
    "lat": 51.33923,
    "lon": -0.50548
  },
  {
    "name": "Westcombe Park",
    "code": "WCB",
    "lat": 51.48421,
    "lon": 0.0184
  },
  {
    "name": "Westcliff-on-Sea",
    "code": "WCF",
    "lat": 51.53734,
    "lon": 0.69148
  },
  {
    "name": "Whitchurch (Hants)",
    "code": "WCH",
    "lat": 51.23754,
    "lon": -1.33775
  },
  {
    "name": "Wick",
    "code": "WCK",
    "lat": 58.44156,
    "lon": -3.09686
  },
  {
    "name": "West Calder",
    "code": "WCL",
    "lat": 55.8538,
    "lon": -3.56701
  },
  {
    "name": "Wickham Market",
    "code": "WCM",
    "lat": 52.15112,
    "lon": 1.39869
  },
  {
    "name": "Worcester Park",
    "code": "WCP",
    "lat": 51.38125,
    "lon": -0.24517
  },
  {
    "name": "Whitecraigs",
    "code": "WCR",
    "lat": 55.79031,
    "lon": -4.31015
  },
  {
    "name": "Wembley Stadium",
    "code": "WCX",
    "lat": 51.55442,
    "lon": -0.28561
  },
  {
    "name": "West Croydon",
    "code": "WCY",
    "lat": 51.37843,
    "lon": -0.10258
  },
  {
    "name": "Woodbridge",
    "code": "WDB",
    "lat": 52.09046,
    "lon": 1.31779
  },
  {
    "name": "Widdrington",
    "code": "WDD",
    "lat": 55.2413,
    "lon": -1.61648
  },
  {
    "name": "Wood End",
    "code": "WDE",
    "lat": 52.34369,
    "lon": -1.84421
  },
  {
    "name": "Woodhouse",
    "code": "WDH",
    "lat": 53.36376,
    "lon": -1.35756
  },
  {
    "name": "Woodhall",
    "code": "WDL",
    "lat": 55.93119,
    "lon": -4.65539
  },
  {
    "name": "Windermere",
    "code": "WDM",
    "lat": 54.37961,
    "lon": -2.90339
  },
  {
    "name": "Walsden",
    "code": "WDN",
    "lat": 53.69628,
    "lon": -2.10446
  },
  {
    "name": "Waddon",
    "code": "WDO",
    "lat": 51.3674,
    "lon": -0.11733
  },
  {
    "name": "Woodlesford",
    "code": "WDS",
    "lat": 53.7568,
    "lon": -1.44289
  },
  {
    "name": "West Drayton",
    "code": "WDT",
    "lat": 51.51006,
    "lon": -0.47223
  },
  {
    "name": "West Dulwich",
    "code": "WDU",
    "lat": 51.44072,
    "lon": -0.09137
  },
  {
    "name": "West Ealing",
    "code": "WEA",
    "lat": 51.51351,
    "lon": -0.32013
  },
  {
    "name": "Weeley",
    "code": "WEE",
    "lat": 51.85311,
    "lon": 1.11549
  },
  {
    "name": "West Ham",
    "code": "WEH",
    "lat": 51.52849,
    "lon": 0.00544
  },
  {
    "name": "Wellingborough",
    "code": "WEL",
    "lat": 52.30379,
    "lon": -0.67664
  },
  {
    "name": "Wem",
    "code": "WEM",
    "lat": 52.85642,
    "lon": -2.71802
  },
  {
    "name": "Wedgwood Lane",
    "code": "WER",
    "lat": 52.95427,
    "lon": -2.1587
  },
  {
    "name": "Westerton",
    "code": "WES",
    "lat": 55.90479,
    "lon": -4.33487
  },
  {
    "name": "Weeton",
    "code": "WET",
    "lat": 53.92319,
    "lon": -1.58121
  },
  {
    "name": "Weymouth",
    "code": "WEY",
    "lat": 50.6153,
    "lon": -2.45423
  },
  {
    "name": "Whifflet",
    "code": "WFF",
    "lat": 55.85369,
    "lon": -4.01864
  },
  {
    "name": "Watford High Street",
    "code": "WFH",
    "lat": 51.65266,
    "lon": -0.39171
  },
  {
    "name": "Westerfield",
    "code": "WFI",
    "lat": 52.081,
    "lon": 1.16592
  },
  {
    "name": "Watford Junction",
    "code": "WFJ",
    "lat": 51.66391,
    "lon": -0.39593
  },
  {
    "name": "Wainfleet",
    "code": "WFL",
    "lat": 53.10515,
    "lon": 0.23474
  },
  {
    "name": "Watford North",
    "code": "WFN",
    "lat": 51.6757,
    "lon": -0.38993
  },
  {
    "name": "Westgate-on-Sea",
    "code": "WGA",
    "lat": 51.38145,
    "lon": 1.33838
  },
  {
    "name": "Welwyn Garden City",
    "code": "WGC",
    "lat": 51.80105,
    "lon": -0.20407
  },
  {
    "name": "Wigan North Western",
    "code": "WGN",
    "lat": 53.54368,
    "lon": -2.63327
  },
  {
    "name": "Woodgrange Park",
    "code": "WGR",
    "lat": 51.54927,
    "lon": 0.04443
  },
  {
    "name": "Wigton",
    "code": "WGT",
    "lat": 54.82912,
    "lon": -3.16434
  },
  {
    "name": "Wargrave",
    "code": "WGV",
    "lat": 51.49816,
    "lon": -0.87652
  },
  {
    "name": "Wigan Wallgate",
    "code": "WGW",
    "lat": 53.54484,
    "lon": -2.63318
  },
  {
    "name": "Westenhanger",
    "code": "WHA",
    "lat": 51.09496,
    "lon": 1.03807
  },
  {
    "name": "Walthamstow Central",
    "code": "WHC",
    "lat": 51.58293,
    "lon": -0.01981
  },
  {
    "name": "West Hampstead",
    "code": "WHD",
    "lat": 51.54747,
    "lon": -0.19118
  },
  {
    "name": "Whalley",
    "code": "WHE",
    "lat": 53.82403,
    "lon": -2.41226
  },
  {
    "name": "Westhoughton",
    "code": "WHG",
    "lat": 53.55568,
    "lon": -2.52373
  },
  {
    "name": "Whitstable",
    "code": "WHI",
    "lat": 51.35758,
    "lon": 1.0333
  },
  {
    "name": "White Hart Lane",
    "code": "WHL",
    "lat": 51.60504,
    "lon": -0.07091
  },
  {
    "name": "Whimple",
    "code": "WHM",
    "lat": 50.76802,
    "lon": -3.35434
  },
  {
    "name": "Whiston",
    "code": "WHN",
    "lat": 53.41388,
    "lon": -2.79643
  },
  {
    "name": "West Hampstead Thameslink",
    "code": "WHP",
    "lat": 51.54848,
    "lon": -0.19183
  },
  {
    "name": "West Horndon",
    "code": "WHR",
    "lat": 51.56795,
    "lon": 0.34065
  },
  {
    "name": "Whyteleafe South",
    "code": "WHS",
    "lat": 51.30339,
    "lon": -0.07691
  },
  {
    "name": "Whitchurch (Cardiff)",
    "code": "WHT",
    "lat": 51.52075,
    "lon": -3.22326
  },
  {
    "name": "Whyteleafe",
    "code": "WHY",
    "lat": 51.30996,
    "lon": -0.08114
  },
  {
    "name": "Wickford",
    "code": "WIC",
    "lat": 51.61503,
    "lon": 0.51919
  },
  {
    "name": "Widnes",
    "code": "WID",
    "lat": 53.37851,
    "lon": -2.73354
  },
  {
    "name": "Winchmore Hill",
    "code": "WIH",
    "lat": 51.63395,
    "lon": -0.10089
  },
  {
    "name": "Willesden Junction",
    "code": "WIJ",
    "lat": 51.5325,
    "lon": -0.24455
  },
  {
    "name": "Willington",
    "code": "WIL",
    "lat": 52.85366,
    "lon": -1.56336
  },
  {
    "name": "Wimbledon",
    "code": "WIM",
    "lat": 51.42122,
    "lon": -0.20637
  },
  {
    "name": "Winchester",
    "code": "WIN",
    "lat": 51.06721,
    "lon": -1.3197
  },
  {
    "name": "Wivenhoe",
    "code": "WIV",
    "lat": 51.85654,
    "lon": 0.95615
  },
  {
    "name": "West Kilbride",
    "code": "WKB",
    "lat": 55.69615,
    "lon": -4.85174
  },
  {
    "name": "Walkden",
    "code": "WKD",
    "lat": 53.51979,
    "lon": -2.39633
  },
  {
    "name": "Wakefield Westgate",
    "code": "WKF",
    "lat": 53.68309,
    "lon": -1.5061
  },
  {
    "name": "Workington",
    "code": "WKG",
    "lat": 54.6451,
    "lon": -3.5585
  },
  {
    "name": "West Kirby",
    "code": "WKI",
    "lat": 53.37319,
    "lon": -3.18377
  },
  {
    "name": "Wakefield Kirkgate",
    "code": "WKK",
    "lat": 53.67867,
    "lon": -1.48856
  },
  {
    "name": "Wokingham",
    "code": "WKM",
    "lat": 51.41122,
    "lon": -0.84255
  },
  {
    "name": "Waltham Cross",
    "code": "WLC",
    "lat": 51.68507,
    "lon": -0.02655
  },
  {
    "name": "West St Leonards",
    "code": "WLD",
    "lat": 50.85315,
    "lon": 0.53994
  },
  {
    "name": "Whittlesea",
    "code": "WLE",
    "lat": 52.54955,
    "lon": -0.11898
  },
  {
    "name": "Whittlesford Parkway",
    "code": "WLF",
    "lat": 52.1036,
    "lon": 0.16562
  },
  {
    "name": "Wallasey Grove Road",
    "code": "WLG",
    "lat": 53.42801,
    "lon": -3.06972
  },
  {
    "name": "Welling",
    "code": "WLI",
    "lat": 51.4648,
    "lon": 0.1017
  },
  {
    "name": "Williamwood",
    "code": "WLM",
    "lat": 55.79368,
    "lon": -4.29033
  },
  {
    "name": "Wellington (Shropshire)",
    "code": "WLN",
    "lat": 52.70132,
    "lon": -2.51716
  },
  {
    "name": "Waterloo (Merseyside)",
    "code": "WLO",
    "lat": 53.47497,
    "lon": -3.02554
  },
  {
    "name": "Welshpool",
    "code": "WLP",
    "lat": 52.65751,
    "lon": -3.13987
  },
  {
    "name": "Woolston",
    "code": "WLS",
    "lat": 50.89891,
    "lon": -1.37706
  },
  {
    "name": "Wallington",
    "code": "WLT",
    "lat": 51.36039,
    "lon": -0.15083
  },
  {
    "name": "Wallasey Village",
    "code": "WLV",
    "lat": 53.4229,
    "lon": -3.06914
  },
  {
    "name": "Welwyn North",
    "code": "WLW",
    "lat": 51.8235,
    "lon": -0.19209
  },
  {
    "name": "Woodley",
    "code": "WLY",
    "lat": 53.42927,
    "lon": -2.09327
  },
  {
    "name": "West Malling",
    "code": "WMA",
    "lat": 51.29202,
    "lon": 0.41866
  },
  {
    "name": "Wembley Central",
    "code": "WMB",
    "lat": 51.55233,
    "lon": -0.29643
  },
  {
    "name": "Wilmcote",
    "code": "WMC",
    "lat": 52.22301,
    "lon": -1.75602
  },
  {
    "name": "Wymondham",
    "code": "WMD",
    "lat": 52.56544,
    "lon": 1.11804
  },
  {
    "name": "Woodmansterne",
    "code": "WME",
    "lat": 51.31902,
    "lon": -0.15426
  },
  {
    "name": "Welham Green",
    "code": "WMG",
    "lat": 51.73635,
    "lon": -0.21069
  },
  {
    "name": "Wildmill",
    "code": "WMI",
    "lat": 51.52087,
    "lon": -3.57965
  },
  {
    "name": "Wilmslow",
    "code": "WML",
    "lat": 53.32686,
    "lon": -2.22633
  },
  {
    "name": "Warminster",
    "code": "WMN",
    "lat": 51.20677,
    "lon": -2.17675
  },
  {
    "name": "Widney Manor",
    "code": "WMR",
    "lat": 52.39595,
    "lon": -1.77438
  },
  {
    "name": "Wemyss Bay",
    "code": "WMS",
    "lat": 55.87613,
    "lon": -4.88907
  },
  {
    "name": "Walthamstow Queens Road",
    "code": "WMW",
    "lat": 51.58151,
    "lon": -0.02384
  },
  {
    "name": "Windsor & Eton Central",
    "code": "WNC",
    "lat": 51.48327,
    "lon": -0.61037
  },
  {
    "name": "Wendover",
    "code": "WND",
    "lat": 51.76176,
    "lon": -0.74737
  },
  {
    "name": "Wilnecote (Staffs)",
    "code": "WNE",
    "lat": 52.61072,
    "lon": -1.67972
  },
  {
    "name": "Winchfield",
    "code": "WNF",
    "lat": 51.28495,
    "lon": -0.90698
  },
  {
    "name": "Waun-gron Park",
    "code": "WNG",
    "lat": 51.4882,
    "lon": -3.22966
  },
  {
    "name": "Warnham",
    "code": "WNH",
    "lat": 51.0929,
    "lon": -0.32945
  },
  {
    "name": "Winchelsea - New Inn",
    "code": "WNI",
    "lat": 50.92585,
    "lon": 0.71343
  },
  {
    "name": "Whinhill",
    "code": "WNL",
    "lat": 55.93836,
    "lon": -4.74668
  },
  {
    "name": "Weston Milton",
    "code": "WNM",
    "lat": 51.34847,
    "lon": -2.9424
  },
  {
    "name": "Wennington",
    "code": "WNN",
    "lat": 54.12372,
    "lon": -2.58752
  },
  {
    "name": "Wanstead Park",
    "code": "WNP",
    "lat": 51.5517,
    "lon": 0.02622
  },
  {
    "name": "Windsor & Eton Riverside",
    "code": "WNR",
    "lat": 51.48565,
    "lon": -0.60653
  },
  {
    "name": "Winnersh",
    "code": "WNS",
    "lat": 51.43028,
    "lon": -0.87686
  },
  {
    "name": "Wandsworth Town",
    "code": "WNT",
    "lat": 51.46105,
    "lon": -0.18812
  },
  {
    "name": "West Norwood",
    "code": "WNW",
    "lat": 51.43175,
    "lon": -0.10383
  },
  {
    "name": "White Notley",
    "code": "WNY",
    "lat": 51.83892,
    "lon": 0.59588
  },
  {
    "name": "Woburn Sands",
    "code": "WOB",
    "lat": 52.01816,
    "lon": -0.65408
  },
  {
    "name": "Worcester Foregate Street",
    "code": "WOF",
    "lat": 52.19515,
    "lon": -2.2216
  },
  {
    "name": "Woldingham",
    "code": "WOH",
    "lat": 51.29016,
    "lon": -0.05186
  },
  {
    "name": "Woking",
    "code": "WOK",
    "lat": 51.31847,
    "lon": -0.55695
  },
  {
    "name": "Wolverton",
    "code": "WOL",
    "lat": 52.06589,
    "lon": -0.80426
  },
  {
    "name": "Wombwell",
    "code": "WOM",
    "lat": 53.51737,
    "lon": -1.41617
  },
  {
    "name": "Walton-on-the-Naze",
    "code": "WON",
    "lat": 51.84618,
    "lon": 1.26769
  },
  {
    "name": "Wool",
    "code": "WOO",
    "lat": 50.68162,
    "lon": -2.22148
  },
  {
    "name": "Worle",
    "code": "WOR",
    "lat": 51.35803,
    "lon": -2.90964
  },
  {
    "name": "Worcester Shrub Hill",
    "code": "WOS",
    "lat": 52.19474,
    "lon": -2.20942
  },
  {
    "name": "Wapping",
    "code": "WPE",
    "lat": 51.50439,
    "lon": -0.05592
  },
  {
    "name": "Worplesdon",
    "code": "WPL",
    "lat": 51.28902,
    "lon": -0.58257
  },
  {
    "name": "Wrabness",
    "code": "WRB",
    "lat": 51.93952,
    "lon": 1.17151
  },
  {
    "name": "Wrenbury",
    "code": "WRE",
    "lat": 53.01941,
    "lon": -2.59594
  },
  {
    "name": "Worthing",
    "code": "WRH",
    "lat": 50.81849,
    "lon": -0.37616
  },
  {
    "name": "Worksop",
    "code": "WRK",
    "lat": 53.31153,
    "lon": -1.12277
  },
  {
    "name": "Wetheral",
    "code": "WRL",
    "lat": 54.88384,
    "lon": -2.83171
  },
  {
    "name": "Wareham",
    "code": "WRM",
    "lat": 50.69287,
    "lon": -2.11526
  },
  {
    "name": "West Runton",
    "code": "WRN",
    "lat": 52.93555,
    "lon": 1.24547
  },
  {
    "name": "Warwick Parkway",
    "code": "WRP",
    "lat": 52.28611,
    "lon": -1.61206
  },
  {
    "name": "Wressle",
    "code": "WRS",
    "lat": 53.77294,
    "lon": -0.92436
  },
  {
    "name": "Worstead",
    "code": "WRT",
    "lat": 52.77745,
    "lon": 1.40409
  },
  {
    "name": "West Ruislip",
    "code": "WRU",
    "lat": 51.56976,
    "lon": -0.43776
  },
  {
    "name": "Warwick",
    "code": "WRW",
    "lat": 52.28655,
    "lon": -1.58186
  },
  {
    "name": "Wrexham General",
    "code": "WRX",
    "lat": 53.05025,
    "lon": -3.00245
  },
  {
    "name": "Wraysbury",
    "code": "WRY",
    "lat": 51.45771,
    "lon": -0.54192
  },
  {
    "name": "West Allerton",
    "code": "WSA",
    "lat": 53.36914,
    "lon": -2.90697
  },
  {
    "name": "Westbury (Wilts)",
    "code": "WSB",
    "lat": 51.26698,
    "lon": -2.19919
  },
  {
    "name": "Winchelsea",
    "code": "WSE",
    "lat": 50.93376,
    "lon": 0.70227
  },
  {
    "name": "Winsford",
    "code": "WSF",
    "lat": 53.19053,
    "lon": -2.49459
  },
  {
    "name": "Wishaw",
    "code": "WSH",
    "lat": 55.77203,
    "lon": -3.92643
  },
  {
    "name": "Walsall",
    "code": "WSL",
    "lat": 52.58441,
    "lon": -1.98475
  },
  {
    "name": "Weston-super-Mare",
    "code": "WSM",
    "lat": 51.34432,
    "lon": -2.97168
  },
  {
    "name": "Woodsmoor",
    "code": "WSR",
    "lat": 53.38649,
    "lon": -2.14208
  },
  {
    "name": "Wood Street",
    "code": "WST",
    "lat": 51.58659,
    "lon": -0.0024
  },
  {
    "name": "West Sutton",
    "code": "WSU",
    "lat": 51.36585,
    "lon": -0.20517
  },
  {
    "name": "Wandsworth Common",
    "code": "WSW",
    "lat": 51.44619,
    "lon": -0.16338
  },
  {
    "name": "Wester Hailes",
    "code": "WTA",
    "lat": 55.91431,
    "lon": -3.28434
  },
  {
    "name": "Whitby",
    "code": "WTB",
    "lat": 54.48462,
    "lon": -0.6154
  },
  {
    "name": "Whitchurch (Shrops)",
    "code": "WTC",
    "lat": 52.96808,
    "lon": -2.6717
  },
  {
    "name": "Whitlocks End",
    "code": "WTE",
    "lat": 52.39185,
    "lon": -1.85153
  },
  {
    "name": "Watlington",
    "code": "WTG",
    "lat": 52.67319,
    "lon": 0.38333
  },
  {
    "name": "Whitehaven",
    "code": "WTH",
    "lat": 54.55303,
    "lon": -3.58693
  },
  {
    "name": "Winnersh Triangle",
    "code": "WTI",
    "lat": 51.43674,
    "lon": -0.89134
  },
  {
    "name": "Whitland",
    "code": "WTL",
    "lat": 51.81804,
    "lon": -4.61442
  },
  {
    "name": "Witham (Essex)",
    "code": "WTM",
    "lat": 51.80598,
    "lon": 0.63914
  },
  {
    "name": "Whitton",
    "code": "WTN",
    "lat": 51.44961,
    "lon": -0.35768
  },
  {
    "name": "Water Orton",
    "code": "WTO",
    "lat": 52.51859,
    "lon": -1.7431
  },
  {
    "name": "Wateringbury",
    "code": "WTR",
    "lat": 51.24973,
    "lon": 0.42247
  },
  {
    "name": "Whatstandwell",
    "code": "WTS",
    "lat": 53.08334,
    "lon": -1.50408
  },
  {
    "name": "Witton (West Midlands)",
    "code": "WTT",
    "lat": 52.51239,
    "lon": -1.88443
  },
  {
    "name": "Witley",
    "code": "WTY",
    "lat": 51.13316,
    "lon": -0.64578
  },
  {
    "name": "Wivelsfield",
    "code": "WVF",
    "lat": 50.96429,
    "lon": -0.12079
  },
  {
    "name": "Wolverhampton",
    "code": "WVH",
    "lat": 52.58786,
    "lon": -2.11952
  },
  {
    "name": "Woolwich Arsenal",
    "code": "WWA",
    "lat": 51.48991,
    "lon": 0.0692
  },
  {
    "name": "Woolwich Dockyard",
    "code": "WWD",
    "lat": 51.49113,
    "lon": 0.05465
  },
  {
    "name": "West Wickham",
    "code": "WWI",
    "lat": 51.3813,
    "lon": -0.01443
  },
  {
    "name": "Whitwell (Derbys)",
    "code": "WWL",
    "lat": 53.27998,
    "lon": -1.20021
  },
  {
    "name": "West Worthing",
    "code": "WWO",
    "lat": 50.81835,
    "lon": -0.39298
  },
  {
    "name": "Wandsworth Road",
    "code": "WWR",
    "lat": 51.47022,
    "lon": -0.13852
  },
  {
    "name": "Wootton Wawen",
    "code": "WWW",
    "lat": 52.26691,
    "lon": -1.78471
  },
  {
    "name": "Wrexham Central",
    "code": "WXC",
    "lat": 53.04621,
    "lon": -2.99906
  },
  {
    "name": "Weybridge",
    "code": "WYB",
    "lat": 51.36177,
    "lon": -0.45773
  },
  {
    "name": "Wye",
    "code": "WYE",
    "lat": 51.18501,
    "lon": 0.92932
  },
  {
    "name": "Wylde Green",
    "code": "WYL",
    "lat": 52.54572,
    "lon": -1.8314
  },
  {
    "name": "Wylam",
    "code": "WYM",
    "lat": 54.97497,
    "lon": -1.81406
  },
  {
    "name": "Wythall",
    "code": "WYT",
    "lat": 52.37995,
    "lon": -1.86553
  },
  {
    "name": "Yate",
    "code": "YAE",
    "lat": 51.5406,
    "lon": -2.43252
  },
  {
    "name": "Yalding",
    "code": "YAL",
    "lat": 51.22648,
    "lon": 0.41217
  },
  {
    "name": "Yatton",
    "code": "YAT",
    "lat": 51.39101,
    "lon": -2.82779
  },
  {
    "name": "Yeoford",
    "code": "YEO",
    "lat": 50.77692,
    "lon": -3.72715
  },
  {
    "name": "Yetminster",
    "code": "YET",
    "lat": 50.89575,
    "lon": -2.57377
  },
  {
    "name": "Ynyswen",
    "code": "YNW",
    "lat": 51.66497,
    "lon": -3.52161
  },
  {
    "name": "Yoker",
    "code": "YOK",
    "lat": 55.89257,
    "lon": -4.38628
  },
  {
    "name": "Yardley Wood",
    "code": "YRD",
    "lat": 52.42151,
    "lon": -1.85438
  },
  {
    "name": "York",
    "code": "YRK",
    "lat": 53.95798,
    "lon": -1.09318
  },
  {
    "name": "Yarm",
    "code": "YRM",
    "lat": 54.4939,
    "lon": -1.35154
  },
  {
    "name": "Yorton",
    "code": "YRT",
    "lat": 52.80897,
    "lon": -2.73646
  },
  {
    "name": "Ystrad Mynach",
    "code": "YSM",
    "lat": 51.64093,
    "lon": -3.24131
  },
  {
    "name": "Ystrad Rhondda",
    "code": "YSR",
    "lat": 51.64364,
    "lon": -3.4667
  },
  {
    "name": "Yeovil Junction",
    "code": "YVJ",
    "lat": 50.92473,
    "lon": -2.61247
  },
  {
    "name": "Yeovil Pen Mill",
    "code": "YVP",
    "lat": 50.94451,
    "lon": -2.61344
  },
  {
    "name": "Canada Water",
    "code": "ZCW",
    "lat": 51.49799,
    "lon": -0.04971
  },
  {
    "name": "Farringdon",
    "code": "ZFD",
    "lat": 51.52017,
    "lon": -0.1052
  },
  {
    "name": "Whitechapel",
    "code": "ZLW",
    "lat": 51.51947,
    "lon": -0.05975
  },
  {
    "name": "Newbury Park Station",
    "code": "ZNP",
    "lat": 51.57505,
    "lon": 0.08969
  },
  {
    "code": "NTB",
    "name": "Norton Bridge",
    "lat": 52.866,
    "lon": -2.19011595
  },
  {
    "code": "TBR",
    "name": "Tilbury Riverside",
    "lat": 51.46236000,
    "lon": 0.35404000
  },
  {
    "code": "GFY",
    "name": "Gravesend Piers",
    "lat": 51.44135000,
    "lon": 0.36664000
  },
  {
    "code": "CMB",
    "name": "Cambridge North",
    "lat": 52.224480,
    "lon": 0.158480
  },
  {
    "code": "EGY",
    "name": "Edinburgh Gateway",
    "lat": 55.940940,
    "lon": -3.320250
  },
  {
    "code": "MNS",
    "name": "Maghull North",
    "lat": 53.5168,
    "lon": -2.9409
  },
  {
    "code": "LMR",
    "name": "Low Moor",
    "lat": 53.749930,
    "lon": -1.753400
  },
];

export const locationByCode: LocationIndex = locations.reduce((index: LocationIndex, location: Location) => {
  index[location.code] = location;

  return index;
}, {});

export function getLocation(code: string) {
  if (!locationByCode[code.replace("/station/", "")]) {
    console.error(code);
    return { code, name: code };
  }

  return locationByCode[code.replace("/station/", "")];
}

export interface LocationIndex {
  [code: string]: Location;
}
