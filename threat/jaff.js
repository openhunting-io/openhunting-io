var threatdata = {
    "name": "Jaff",
    "alias": "Jaff, Rakhni",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2023-02-14",
    "all_data": {
        "tool": "Jaff",
        "names": [
            {
                "name": "Jaff"
            },
            {
                "name": "Rakhni"
            }
        ],
        "description": "(Fortinet) Like many ransomware variants, Jaff ransomware commonly arrives as a pdf attachment. Once you open the attachment, it displays a one-line document along with a pop-up message asking whether you want to open an embedded.\n\nAfter downloading the binary file, Jaff ransomware starts decrypting part of the malware code. It uses a simple code redirection routine as an anti-analysis trick to stretch the time it requires to analyze the actual malicious code. In between code execution, it uses garbage code that is not relevant to the malware execution.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/looking-into-jaff-ransomware.html",
            "http://malware-traffic-analysis.net/2017/05/16/index.html",
            "https://www.proofpoint.com/us/threat-insight/post/jaff-new-ransomware-from-actors-behind-distribution-of-dridex-locky-bart",
            "http://blog.talosintelligence.com/2017/05/jaff-ransomware.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jaff"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:jaff"
        ],
        "playbook": [
            "https://www.nomoreransom.org/uploads/RakhniDecryptor_how-to_guide.pdf"
        ],
        "uuid": "7e7db440-de10-4fa9-89f2-60aba7351ac4",
        "last-card-change": "2021-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jaff",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://clairelevin.github.io/malware/2023/02/14/jaff.html",
            "date": "2023-02-14",
            "organization": "Github (clairelevin)",
            "author": "Claire Levin",
            "title": "Writing a decryptor for Jaff ransomware",
            "categories": [
                "Jaff"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/a-brief-history-of-ta505",
            "date": "2020-05-21",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "A brief history of TA505",
            "categories": [
                "AndroMut",
                "Bart",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Kegotip",
                "Locky",
                "Necurs",
                "Philadephia Ransom",
                "Pony",
                "QuantLoader",
                "Rockloader",
                "SDBbot",
                "ServHelper",
                "Shifu",
                "Snatch",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://securelist.com/to-crypt-or-to-mine-that-is-the-question/86307/",
            "date": "2018-07-05",
            "organization": "Kaspersky Labs",
            "author": "Egor Vasilenko",
            "title": "To crypt, or to mine \u2013 that is the question",
            "categories": [
                "Rakhni"
            ]
        },
        {
            "data_url": "http://malware-traffic-analysis.net/2017/05/16/index.html",
            "date": "2017-05-16",
            "organization": "Malware Traffic Analysis",
            "author": "Brad Duncan",
            "title": "2017-05-16 - MORE EXAMPLES OF MALSPAM PUSHING JAFF RANSOMWARE",
            "categories": [
                "Jaff"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/jaff-new-ransomware-from-actors-behind-distribution-of-dridex-locky-bart",
            "date": "2017-05-11",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Jaff - New Ransomware From the Actors Behind the Distribution of Dridex, Locky, and Bart",
            "categories": [
                "Jaff"
            ]
        }
    ],
    "mitre": []
};