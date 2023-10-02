var threatdata = {
    "name": "TidePool",
    "alias": "TidePool",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "TidePool",
        "names": [
            {
                "name": "TidePool"
            }
        ],
        "description": "(Palo Alto) TidePool contains many capabilities common to most RATs. It allows the attacker to read, write and delete files and folders, and run commands over named pipes. TidePool gathers information about the victim\u2019s computer, base64 encodes the data, and sends it to the Command and Control (C2) server via HTTP, which matches capabilities of the {{BS2005}} malware family used by the Ke3chang actor.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/operation-ke3chang-resurfaces-with-new-tidepool-malware/",
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-ke3chang.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tidepool"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TidePool"
        ],
        "uuid": "7994d89d-4fcc-4e67-9597-602777f57a17",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tidepool",
    "analysis": null,
    "articles": [],
    "mitre": []
};