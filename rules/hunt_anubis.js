const rule = {
    "id": "fca6d150-6bf9-4c1f-8b4f-776ba79f97da",
    "info": {
        "name": "Rules Detect Anubis",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2023-03-29 06:03:40",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Anubis",
        "tags": [
            "BankBot",
            "Anubis"
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
                        "cf3e16d6328d572cdf4476809e25c52790d77bec8ac1a52a7129485c55a7c6a7"
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
                        "47.89.185.156",
                        "zektarmunoza.shop",
                        "monitorarbitcoin.org"
                    ]
                }
            ]
        }
    ]
};