var threatdata = {
    "name": "Bart",
    "alias": "Bart",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2021-04-25",
    "all_data": {
        "tool": "Bart",
        "names": [
            {
                "name": "Bart"
            }
        ],
        "description": "(Proofpoint) Bart ransomware appeared for exactly one day on June 24, 2016. It was a secondary payload downloaded by {{RockLoader}}, the initial payload in a large email campaign using zipped JavaScript attachments. The Bart ransom screen was visually similar to {{Locky}}\u2019s but Bart had one important distinction: it could encrypt files without contacting a command and control server. However, we have not seen Bart since, suggesting that this was either an experiment or that the ransomware did not function as expected for TA505.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta505-dridex-globeimposter"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bart"
        ],
        "playbook": [
            "https://labs.bitdefender.com/2017/04/bart-ransomware-decryption-tool-released-works-for-all-known-samples/",
            "https://www.nomoreransom.org/uploads/Avast_how-to-guide.pdf"
        ],
        "uuid": "6b83a611-9d11-4f1c-b4b5-a6854cb17df7",
        "last-card-change": "2021-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bart",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-009.pdf",
            "date": "2020-08-20",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "Development of the Activity of the TA505 Cybercriminal Group",
            "categories": [
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Locky",
                "Marap",
                "QuantLoader",
                "SDBbot",
                "ServHelper",
                "tRat",
                "TrickBot"
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
        }
    ],
    "mitre": []
};