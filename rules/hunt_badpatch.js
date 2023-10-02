const rule = {
    "id": "edc5f622-5069-4c0d-9477-6dd470b0f6e5",
    "info": {
        "name": "Rules Detect BadPatch",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2022-07-09 23:31:58",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BadPatch",
        "tags": [
            "apk",
            "android",
            "malware"
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
                        "db91896ffe5405cae62a07c61153fb7aa3eb4e159dc4889a1d636e7f403c979f",
                        "675770c13f59d6d0e72ed0ed81c7193f3c0975518b96b08155d268ec7cc39826",
                        "127cdf77d9ed7e1ff41ab1a5184775647996182a4c24575692206641470d6f5d"
                    ]
                }
            ]
        }
    ]
};