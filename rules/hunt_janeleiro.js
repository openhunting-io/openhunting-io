const rule = {
    "id": "c1e71005-4166-4e3f-ac3c-2b53ba117f6e",
    "info": {
        "name": "Rules Detect Janeleiro",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2021-07-22 17:22:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Janeleiro",
        "tags": [
            "brazil",
            "janeleiro",
            "banker"
        ],
        "references": []
    },
    "method": [
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "trackermid.us-east-1.elasticbeanstalk.com"
                    ]
                }
            ]
        }
    ]
};