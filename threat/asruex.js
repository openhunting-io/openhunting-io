var threatdata = {
    "name": "Asruex",
    "alias": "Asruex",
    "category": "Malware",
    "type": "Backdoor, Worm",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Asruex",
        "names": [
            {
                "name": "Asruex"
            }
        ],
        "description": "(Trend Micro) Since it first emerged in 2015, Asruex has been known for its backdoor capabilities and connection to the spyware DarkHotel. However, when we encountered Asruex in a PDF file, we found that a variant of the malware can also act as an infector particularly through the use of old vulnerabilities CVE-2012-0158 and CVE-2010-2883, which inject code in Word and PDF files respectively.\n\nThe use of old, patched vulnerabilities could hint that the variant was devised knowing that it can affect targets who have been using older versions of Adobe Reader (versions 9.x up to before 9.4) and Acrobat (versions 8.x up to before 8.2.5) on Windows and Mac OS X.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Worm"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/asruex-backdoor-variant-infects-word-documents-and-pdfs-through-old-ms-office-and-adobe-vulnerabilities/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.asruex"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Asruex"
        ],
        "uuid": "39c65a96-a0e8-42fa-80d5-5d36c0be61c3",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "asruex",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.bushidotoken.net/2020/06/deep-dive-darkhotel-apt.html",
            "date": "2020-06-14",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Deep-dive: The DarkHotel APT",
            "categories": [
                "Asruex",
                "Ghost RAT",
                "Ramsay",
                "Retro",
                "Unidentified 076 (Higaisa LNK to Shellcode)"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/asruex-backdoor-variant-infects-word-documents-and-pdfs-through-old-ms-office-and-adobe-vulnerabilities/",
            "date": "2019-08-22",
            "organization": "Trend Micro",
            "author": "Ian Mercado",
            "title": "Asruex Backdoor Variant Infects Word Documents and PDFs Through Old MS Office and Adobe Vulnerabilities",
            "categories": [
                "Asruex"
            ]
        }
    ],
    "mitre": []
};