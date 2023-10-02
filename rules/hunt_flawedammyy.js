const rule = {
    "id": "2ac4d093-515a-4df1-ad69-b64df3cf8330",
    "info": {
        "name": "Rules Detect FlawedAmmyy",
        "author": "Openhunting",
        "date": "2021-06-16",
        "modified": "2021-06-24 03:00:24",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for FlawedAmmyy",
        "tags": [
            "flawedammyy"
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
                        "128e754f15fdb00d218fb23431bf0fbdc65d64eef294d72535b0c07eb5472136",
                        "9c711abf56181897762b131d27e7beae405cc199f69018eb5df4e343e74b78d9",
                        "133af1615fbbccaa23539b369ef23dfed375626746f212533ff975ec1165f2c5",
                        "9a7c58bd98d70631aa1473f7b57b426db367d72429a5455b433a05ee251f3236",
                        "1831806fc27d496f0f9dcfd8402724189deaeb5f8bcf0118f3d6484d0bdee9ed",
                        "be82341a12ea83d9efadc9ac35cf16d327f8499c99107dcde88dd0f5df84523c",
                        "d39c8e33fb70f415fa396022faa3fb5cea2a20d932546ea59f3b151ae6953c3e",
                        "2fcfdbfc9ecd109d69dcac7d4392c38850ab01be9f16eb0d642cd032cf5e4df3"
                    ]
                }
            ]
        }
    ]
};