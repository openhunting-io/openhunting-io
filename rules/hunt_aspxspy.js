const rule = {
    "id": "4d389e9f-ac1b-474f-847e-552fcb41bac6",
    "info": {
        "name": "Rules Detect ASPXSpy",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-10-27 21:48:47",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ASPXSpy",
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
                        "2d2219ec82eef8522273f5944f693bed989e8c1adef15b680a5abe183a9ea59b",
                        "f543d95c9bf56d23342eacf1837e9e09dca11910ba17076f187bf83d2e26059c",
                        "5cce5f7d9fb1af3ace0712d7d37ffb8c5af2f4150037373c7a683b50085f6a86"
                    ]
                }
            ]
        }
    ]
};