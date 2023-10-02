var threatdata = {
    "name": "GUNTERS",
    "alias": "GUNTERS",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-05-03",
    "all_data": {
        "tool": "GUNTERS",
        "names": [
            {
                "name": "GUNTERS"
            }
        ],
        "description": "(SentinelLabs) During our analysis of Moshen Dragon\u2019s activities, we came across a passive loader previously discussed by Avast as \u2018GUNTERS\u2019. This backdoor appears to be highly targeted as it performs checks to verify that it is executed on the right machine.\n\nBefore execution, the malware calculates the hash of the machine hostname and compares it to a hardcoded value, suggesting that the threat actor generates a different DLL for each target machine.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.sentinelone.com/labs/moshen-dragons-triad-and-error-approach-abusing-security-software-to-sideload-plugx-and-shadowpad/"
        ],
        "uuid": "7281a8c8-1920-4367-b98b-198cd8f49d3a",
        "last-card-change": "2022-05-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gunters",
    "analysis": null,
    "articles": [],
    "mitre": []
};