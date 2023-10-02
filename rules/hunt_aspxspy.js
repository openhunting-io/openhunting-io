const rule = {
    "id": "028da3d7-015f-47b4-b47b-e557eda7be1c",
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
                        "f543d95c9bf56d23342eacf1837e9e09dca11910ba17076f187bf83d2e26059c",
                        "2d2219ec82eef8522273f5944f693bed989e8c1adef15b680a5abe183a9ea59b",
                        "5cce5f7d9fb1af3ace0712d7d37ffb8c5af2f4150037373c7a683b50085f6a86"
                    ]
                }
            ]
        }
    ]
};