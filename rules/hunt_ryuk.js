const rule = {
    "id": "71c28057-bcfa-417c-8ef2-332f980552d4",
    "info": {
        "name": "Rules Detect Ryuk",
        "author": "Openhunting",
        "date": "2023-09-12",
        "modified": "2021-04-03 06:08:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Ryuk",
        "tags": [
            "Ransomware",
            "UNC1878",
            "Ryuk"
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
                        "6cad2f7dc809b9353a31753a438aef4e",
                        "88b1b4966650de59cef20c340b28739c52dc9ead91d9959a338a8e531ad38335"
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
                        "microsoftltdcorp.com.pl",
                        "8.208.103.182",
                        "microsofttop.wiki",
                        "microsoftestore.top",
                        "mirosoftplaymarket.top",
                        "microsoftupdate.work"
                    ]
                }
            ]
        }
    ]
};