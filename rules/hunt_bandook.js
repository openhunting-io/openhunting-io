const rule = {
    "id": "1ce401f2-6ab6-4e4c-8a51-8dcf33720cd9",
    "info": {
        "name": "Rules Detect Bandook",
        "author": "Openhunting",
        "date": "2023-02-10",
        "modified": "2023-08-02 06:09:14",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for Bandook",
        "tags": [
            "APT",
            "Bandook",
            "DarkCaracal"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "cb30e5ba39200df4ed1934b0a29c9c44",
                        "e69e20bd1e9a855e180cff9fa66cc050",
                        "b4487540e638679b9bc290c706add379"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "idcmht.com",
                        "s1.megawoc.com",
                        "p2020.xyz",
                        "193.200.16.175",
                        "r1.panjo.club",
                        "185.10.68.52",
                        "185.243.114.89",
                        "deapproved.ru",
                        "91.193.18.203",
                        "jtoolbox.org",
                        "htname.info",
                        "91.238.50.105",
                        "vrunabo.su",
                        "mxtms.com",
                        "45.142.214.31",
                        "nopejohn.com",
                        "83.97.20.153",
                        "194.87.48.126",
                        "cumumberpro.org",
                        "olex.live",
                        "humut.su",
                        "d2.ngobmc.com",
                        "megawoc.com",
                        "ngobmc.com",
                        "pdafact.com",
                        "185.106.122.71",
                        "194.5.250.103",
                        "branchesv.com",
                        "d1.ngobmc.com",
                        "panjo.club",
                        "ewsdocs.com",
                        "ladvsa.club",
                        "bomes.ru",
                        "raysdoor.com",
                        "mainsrv.top",
                        "5.34.182.29",
                        "gombos.ru",
                        "ercuc.com",
                        "styleco.me",
                        "80.233.134.242",
                        "2ndprog.monster",
                        "horizongb.com",
                        "vsimperial.com",
                        "tancredis.com",
                        "iamgood.blogdns.net",
                        "ntsclouds.com",
                        "vdscloud.net",
                        "pronews.icu"
                    ]
                }
            ]
        }
    ]
};