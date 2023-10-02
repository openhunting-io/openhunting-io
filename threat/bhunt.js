var threatdata = {
    "name": "BHUNT",
    "alias": "BHUNT",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "BHUNT",
        "names": [
            {
                "name": "BHUNT"
            }
        ],
        "description": "(Bitdefender) Bitdefender researchers are constantly monitoring crypto wallet stealers. This is how we spotted a dropper with a hidden file that ran from the\u202f\\Windows\\System32\\\u202ffolder. The dropper always wrote the same file,\u202fmscrlib.exet to the disk. Our analysis determined t a new cryptocurrency stealer, but its execution flow seems different from what we\u2019re used to seeing in the wild. We named the stealer BHUNT after the main assembly's name. BHUNT is a modular stealer written in .NET, capable of exfiltrating wallet (Exodus, Electrum, Atomic, Jaxx, Ethereum, Bitcoin, Litecoin wallets) contents, passwords stored in the browser, and passphrases captured from the clipboard.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.bitdefender.com/files/News/CaseStudies/study/411/Bitdefender-PR-Whitepaper-CyberWallet-creat5874-en-EN.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bhunt"
        ],
        "uuid": "838793bc-4f18-4648-a590-3e6d3504b26d",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bhunt",
    "analysis": null,
    "articles": [],
    "mitre": []
};