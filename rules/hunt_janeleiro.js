const rule = {
    "id": "12595771-e729-4243-b568-80f389303da4",
    "info": {
        "name": "Rules Detect Janeleiro",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2021-07-22 17:22:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Janeleiro",
        "tags": [
            "banker",
            "janeleiro",
            "brazil"
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