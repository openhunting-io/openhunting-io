const rule = {
    "id": "02ed3c99-eac0-4fdd-9ad3-7b0b3c45be92",
    "info": {
        "name": "Rules Detect HyperBro",
        "author": "Openhunting",
        "date": "2023-07-18",
        "modified": "2023-06-16 11:35:45",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for HyperBro",
        "tags": [],
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
                        "bc259ab9cca395620b1466771d8b9c45",
                        "08710b30b89f6c2eee2c250132acd9a39571f93a26736ddf4dbb4e23041f74f2"
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
                        "154.38.118.188",
                        "89.35.178.105",
                        "138.124.180.108",
                        "45.77.250.141",
                        "80.92.206.158",
                        "8.218.77.161",
                        "138.124.180.56",
                        "103.79.76.232",
                        "104.168.211.246",
                        "103.79.78.48",
                        "85.204.74.143",
                        "45.77.32.139"
                    ]
                }
            ]
        }
    ]
};