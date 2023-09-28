var threatdata = {
    "name": "SUPERNOVA",
    "alias": "SUPERNOVA",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SUPERNOVA",
        "names": [
            {
                "name": "SUPERNOVA"
            }
        ],
        "description": "(Palo Alto) In the analysis of the trojanized Orion artifacts, the .NET .dll app_web_logoimagehandler.ashx.b6031896.dll was dubbed SUPERNOVA, but little detail of its operation has been publicly explored. NOTE: The SUPERNOVA webshell\u2019s association with the SolarStorm actors is now questionable due to the aforementioned .dll not being digitally signed, unlike the SUNBURST .dll. This may indicate that the webshell was not implanted early in SolarWinds\u2019 software development pipeline as was SUNBURST, and was instead dropped by a third party. Additionally, Guidepoint Security conducted their own research into SUPERNOVA, with similar conclusions.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/solarstorm-supernova/",
            "https://www.guidepointsecurity.com/supernova-solarwinds-net-webshell-analysis/",
            "https://labs.sentinelone.com/solarwinds-understanding-detecting-the-supernova-webshell-trojan/",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-027a",
            "https://www.secureworks.com/blog/supernova-web-shell-deployment-linked-to-spiral-threat-group",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-112"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0578/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.supernova"
        ],
        "uuid": "d066195c-0a56-41bc-9f4b-b2e8eeda540b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "supernova",
    "analysis": null
};