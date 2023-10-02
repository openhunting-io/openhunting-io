const rule = {
    "id": "d7e2a387-95ad-45fe-a538-d3378253aaa3",
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
                        "08710b30b89f6c2eee2c250132acd9a39571f93a26736ddf4dbb4e23041f74f2",
                        "bc259ab9cca395620b1466771d8b9c45"
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
                        "138.124.180.56",
                        "103.79.78.48",
                        "138.124.180.108",
                        "85.204.74.143",
                        "104.168.211.246",
                        "80.92.206.158",
                        "89.35.178.105",
                        "103.79.76.232",
                        "45.77.32.139",
                        "45.77.250.141",
                        "154.38.118.188",
                        "8.218.77.161"
                    ]
                }
            ]
        }
    ]
};