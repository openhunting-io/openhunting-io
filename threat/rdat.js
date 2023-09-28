var threatdata = {
    "name": "RDAT",
    "alias": "RDAT, GREYSTUFF",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RDAT",
        "names": [
            {
                "name": "RDAT"
            },
            {
                "name": "GREYSTUFF"
            }
        ],
        "description": "(Palo Alto) The adversaries compiled the RDAT payloads used in the attacks on the Middle Eastern telecommunications organization on March 1, 2020, and configured it to use a domain provided on the command line or the hardcoded domain rsshay[.]com as its C2 server. Unlike previous RDAT samples, this particular sample only uses DNS tunneling for its C2 communications with no HTTP fallback channel. This RDAT sample can only use TXT queries in its DNS tunnel.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/oilrig-novel-c2-channel-steganography/",
            "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020OverWatchNowheretoHide.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0495/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rdat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:rdat"
        ],
        "uuid": "52268b11-5917-4022-a87a-3cb14973ccb0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RDAT",
            "malware_alias": "GREYSTUFF",
            "malware": "win.rdat",
            "last_update": "2021-09-19 03:28:36",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "d5e4e7bdd4dea654740d7c60503452fd",
                        "timestamp": "2021-09-19 03:28:36"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-19 03:28:36",
    "mitre": [],
    "file_name": "rdat",
    "analysis": null
};