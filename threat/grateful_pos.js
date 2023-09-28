var threatdata = {
    "name": "Grateful POS",
    "alias": "Grateful POS, TRINITY",
    "category": "Malware",
    "type": "POS malware, Info stealer",
    "modified": "2020-05-22",
    "all_data": {
        "tool": "Grateful POS",
        "names": [
            {
                "name": "Grateful POS"
            },
            {
                "name": "TRINITY"
            }
        ],
        "description": "POS malware targets systems that run physical point-of-sale device and operates by inspecting the process memory for data that matches the structure of credit card data (Track1 and Track2 data), such as the account number, expiration date, and other information stored on a card\u2019s magnetic stripe. After the cards are first scanned, the personal account number (PAN) and accompanying data sit in the point-of-sale system\u2019s memory unencrypted while the system determines where to send it for authorization.\nMasked as the LogMein software, the GratefulPOS malware appears to have emerged during the fall 2017 shopping season with low detection ratio according to some of the earliest detections displayed on VirusTotal. The first sample was upload in November 2017. Additionally, this malware appears to be related to the {{BlackPOS}} malware, which was linked to some of the high-profile merchant breaches in the past.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf",
            "https://www.vkremez.com/2017/12/lets-learn-reversing-grateful-point-of.html",
            "https://community.rsa.com/community/products/netwitness/blog/2017/12/08/gratefulpos-credit-card-stealing-malware-just-in-time-for-the-shopping-season"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grateful_pos"
        ],
        "uuid": "5fd2dd27-ea9b-4c29-b6fd-b64ee1a5c0bb",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "grateful_pos",
    "analysis": null
};