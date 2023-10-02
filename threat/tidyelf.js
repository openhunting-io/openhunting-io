var threatdata = {
    "name": "TIDYELF",
    "alias": "TIDYELF",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "TIDYELF",
        "names": [
            {
                "name": "TIDYELF"
            }
        ],
        "description": "(FireEye) TIDYELF is a dropper for the {{WINTERLOVE}} backdoor. WINTERLOVE has been observed embedded within a resource within TIDYELF. TIDYELF will load the main WINTERLOVE component by injecting it into the iexplore.exe process. It will then create a registry key named HKLM\\SOFTWARE\\RAT to store configuration data for WINTERLOVE components to use.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://paper.bobylive.com/Security/APT_Report/APT-41.pdf"
        ],
        "uuid": "9a6d78d8-957d-4bfb-a6a2-2b8998b00b19",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tidyelf",
    "analysis": null,
    "articles": [],
    "mitre": []
};