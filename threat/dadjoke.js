var threatdata = {
    "name": "DADJOKE",
    "alias": "DADJOKE",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "DADJOKE",
        "names": [
            {
                "name": "DADJOKE"
            }
        ],
        "description": "DADJOKE was discovered as being distributed via email, targeting a South-East Asian Ministry of Defense. It is delivered as an embedded EXE file in a Word document using remote templates and a unique macro using multiple GET requests. The payload is deployed using load-order hijacking with a benign Windows Defender executable. Stage 1 has only beacon+download functionality, made to look like a PNG file. Additional analysis by Kaspersky found 8 campaigns over 2019 and no activity prior to January 2019, DADJOKE is attributed with medium confidence to APT40.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.mycert.org.my/portal/advisory?id=MA-770.022020"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dadjoke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DADJOKE"
        ],
        "uuid": "bfad0282-84d5-4135-84f1-24687684f5e5",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dadjoke",
    "analysis": null
};