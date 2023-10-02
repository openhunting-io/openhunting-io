var threatdata = {
    "name": "Sweed",
    "alias": "Sweed",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Sweed",
        "names": [
            {
                "name": "Sweed",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Talos) Cisco Talos recently identified a large number of ongoing malware distribution campaigns linked to a threat actor we\u2019re calling \u201cSWEED,\u201d including such notable malware as Formbook, Lokibot and Agent Tesla. Based on our research, SWEED \u2014 which has been operating since at least 2017 \u2014 primarily targets their victims with stealers and remote access trojans.\n\nSWEED remains consistent across most of their campaigns in their use of spear-phishing emails with malicious attachments. While these campaigns have featured a myriad of different types of malicious documents, the actor primarily tries to infect its victims with a packed version of Agent Tesla \u2014 an information stealer that\u2019s been around since at least 2014. The version of Agent Tesla that SWEED is using differs slightly from what we\u2019ve seen in the past in the way that it is packed, as well as how it infects the system. In this post, we\u2019ll run down each campaign we\u2019re able to connect to SWEED, and talk about some of the actor\u2019s tactics, techniques and procedures (TTPs).",
        "observed-sectors": [
            "Defense",
            "Energy",
            "Financial",
            "Shipping and Logistics",
            "Manufacturing",
            "Human Resources"
        ],
        "observed-countries": [
            "Bosnia and Herzegovina",
            "Canada",
            "China",
            "Djibouti",
            "France",
            "Germany",
            "Hong Kong",
            "India",
            "Italy",
            "Monaco",
            "Russia",
            "Qatar",
            "Singapore",
            "South Africa",
            "South Korea",
            "Switzerland",
            "Taiwan",
            "Turkey",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "Agent Tesla",
            "Formbook",
            "LokiBot",
            "RDP"
        ],
        "operations": [
            {
                "date": "2017",
                "activity": "Steganography\nOne of the earliest SWEED campaigns Talos identified dates back to 2017. In this attack, the actors placed droppers inside of ZIP archives, and then attached those ZIPs to emails. The attachments usually had file names similar to \u201cJava_Updater.zip\u201d or \u201cP-O of Jun2017.zip\u201d."
            },
            {
                "date": "2018-01",
                "activity": "In early 2018, we observed that SWEED began leveraging Java-based droppers. Similar to previous campaigns, the JAR was directly attached to emails and used file names such as \u201cOrder_2018.jar\u201d. The purpose of the JAR was to obtain information about the infected system and facilitate the download of a packed version of Agent Tesla."
            },
            {
                "date": "2018-04",
                "activity": "In April 2018, SWEED began making use of a previously disclosed Office exploit. One of the documents featured in these email campaigns was notable because it was a PowerPoint document (PPXS). Code contained inside one of the slides triggers an exploit for CVE-2017-8759, a remote code execution vulnerability in Microsoft .NET framework."
            },
            {
                "date": "2018-05",
                "activity": "In May 2018, campaigns being conducted by SWEED began leveraging another vulnerability in Microsoft Office: CVE-2017-11882, a remote code execution bug in Microsoft Office that is commonly observed being leveraged in malicious documents used in commodity malware distribution."
            },
            {
                "date": "2019",
                "activity": "Beginning in 2019, the campaigns associated with SWEED began leveraging malicious Office macros. As with previous attacks, they are leveraging spear-phishing emails and malicious attachments to initiate the infection process.\nhttps://blog.talosintelligence.com/2019/07/sweed-agent-tesla.html"
            }
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/07/sweed-agent-tesla.html"
        ],
        "uuid": "ad9624e1-ffa9-42ca-abba-59c371e1ed53",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sweed",
    "analysis": null,
    "articles": [],
    "mitre": []
};