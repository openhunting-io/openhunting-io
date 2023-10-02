var threatdata = {
    "name": "BELLHOP",
    "alias": "BELLHOP",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "BELLHOP",
        "names": [
            {
                "name": "BELLHOP"
            }
        ],
        "description": "BELLHOP is a JavaScript backdoor interpreted using the native Windows Scripting Host (WSH).\nAfter performing some basic host information gathering, the BELLHOP dropper downloads a base64-encoded blob of JavaScript to disk and sets up persistence in three ways:\n\u2022 Creating a Run key in the Registry\n\u2022 Creating a RunOnce key in the Registry\n\u2022 Creating a persistent named scheduled task\n\u2022 BELLHOP communicates using HTTP and HTTPS with primarily benign sites such as Google Docs and PasteBin.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.bellhop"
        ],
        "uuid": "d4b98d7f-6fe7-4cee-9e84-dc702c41bab5",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bellhop",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "date": "2018-08-01",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "On the Hunt for FIN7: Pursuing an Enigmatic and Evasive Global Criminal Operation",
            "categories": [
                "BELLHOP",
                "POWERPIPE",
                "BABYMETAL",
                "SocksBot",
                "FIN7"
            ]
        }
    ],
    "mitre": []
};