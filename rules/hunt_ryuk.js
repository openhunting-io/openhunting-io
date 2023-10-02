const rule = {
    "id": "5b6c6a7b-1824-4e77-86f1-68db4ea65e43",
    "info": {
        "name": "Rules Detect Ryuk",
        "author": "Openhunting",
        "date": "2023-09-12",
        "modified": "2021-04-03 06:08:28",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Ryuk",
        "tags": [
            "Ryuk",
            "Ransomware",
            "UNC1878"
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
                        "88b1b4966650de59cef20c340b28739c52dc9ead91d9959a338a8e531ad38335",
                        "6cad2f7dc809b9353a31753a438aef4e"
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
                        "microsoftestore.top",
                        "microsoftltdcorp.com.pl",
                        "microsofttop.wiki",
                        "microsoftupdate.work",
                        "mirosoftplaymarket.top",
                        "microsoftestore.top",
                        "microsoftltdcorp.com.pl",
                        "microsofttop.wiki",
                        "mirosoftplaymarket.top",
                        "microsoftupdate.work",
                        "8.208.103.182"
                    ]
                }
            ]
        }
    ]
};