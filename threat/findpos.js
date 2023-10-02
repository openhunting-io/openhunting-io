var threatdata = {
    "name": "FindPOS",
    "alias": "FindPOS, PoSeidon",
    "category": "Malware",
    "type": "POS malware, Backdoor, Keylogger, Credential stealer",
    "modified": "2021-09-03",
    "all_data": {
        "tool": "FindPOS",
        "names": [
            {
                "name": "FindPOS"
            },
            {
                "name": "PoSeidon"
            }
        ],
        "description": "(Palo Alto) The malware in question has the ability to scrape memory for track data, exfiltrate any discovered data via HTTP POST requests, and in some instances log keystrokes. While the malware family uses many common techniques witnessed in previous malware families targeting POS devices, the prevalence and continued development of this malware demonstrates a threat to those running Windows-based point of sale terminals.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Keylogger",
            "Credential stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/findpos-new-pos-malware-family-discovered/",
            "https://blogs.cisco.com/security/talos/poseidon"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.findpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FindPOS"
        ],
        "uuid": "dd153319-8f25-4ba9-995a-659a2676e81e",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "findpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blogs.cisco.com/security/talos/poseidon",
            "date": "2015-03-20",
            "organization": "Cisco Talos",
            "author": "Andrea Allievi",
            "title": "Threat Spotlight: PoSeidon, A Deep Dive Into Point of Sale Malware",
            "categories": [
                "FindPOS"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2015/03/findpos-new-pos-malware-family-discovered/",
            "date": "2015-03-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "FindPOS: New POS Malware Family Discovered",
            "categories": [
                "FindPOS"
            ]
        }
    ],
    "mitre": []
};