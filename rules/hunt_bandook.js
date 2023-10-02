const rule = {
    "id": "ca4266a1-b883-44ea-8e07-17200597461e",
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
                        "b4487540e638679b9bc290c706add379",
                        "e69e20bd1e9a855e180cff9fa66cc050",
                        "cb30e5ba39200df4ed1934b0a29c9c44"
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
                        "2ndprog.monster",
                        "bomes.ru",
                        "branchesv.com",
                        "cumumberpro.org",
                        "d1.ngobmc.com",
                        "d2.ngobmc.com",
                        "deapproved.ru",
                        "ercuc.com",
                        "ewsdocs.com",
                        "horizongb.com",
                        "htname.info",
                        "idcmht.com",
                        "iamgood.blogdns.net",
                        "jtoolbox.org",
                        "ladvsa.club",
                        "mainsrv.top",
                        "megawoc.com",
                        "mxtms.com",
                        "ngobmc.com",
                        "nopejohn.com",
                        "ntsclouds.com",
                        "olex.live",
                        "p2020.xyz",
                        "panjo.club",
                        "pdafact.com",
                        "pronews.icu",
                        "r1.panjo.club",
                        "raysdoor.com",
                        "s1.megawoc.com",
                        "styleco.me",
                        "tancredis.com",
                        "vdscloud.net",
                        "vrunabo.su",
                        "vsimperial.com",
                        "gombos.ru",
                        "humut.su",
                        "194.87.48.126",
                        "45.142.214.31",
                        "5.34.182.29",
                        "80.233.134.242",
                        "80.233.134.242",
                        "83.97.20.153",
                        "83.97.20.153",
                        "83.97.20.153",
                        "83.97.20.153",
                        "91.193.18.203",
                        "91.193.18.203",
                        "91.238.50.105",
                        "193.200.16.175",
                        "193.200.16.175",
                        "194.5.250.103",
                        "185.243.114.89",
                        "185.10.68.52",
                        "185.10.68.52",
                        "185.106.122.71",
                        "185.10.68.52"
                    ]
                }
            ]
        }
    ]
};