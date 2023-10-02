var threatdata = {
    "name": "Hisoka",
    "alias": "Hisoka",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Hisoka",
        "names": [
            {
                "name": "Hisoka"
            }
        ],
        "description": "(Palo Alto) We analyzed dozens of samples during this analysis, which resulted in the identification of two separate campaigns \u2014 one in mid-to-late 2018 using {{Sakabota}} and the other in mid-2019 using Hisoka. Our analysis of the two campaigns revealed that Sakabota is the predecessor to Hisoka, which was first observed in May 2019.\n\nDuring our analysis, we identified two different versions of Hisoka, specifically v0.8 and v0.9, both installed onto the network of two Kuwait organizations. Both versions contain command sets that allow the actor to control a compromised system. In both versions, the actor can communicate via a command and control (C2) channel that uses either HTTP or DNS tunneling. However, v0.9 also added the ability for an email-based C2 channel as well.\n\nThe email-based C2 communications capability added to Hisoka v0.9 relies on Exchange Web Services (EWS) to use a legitimate account on an Exchange server in order to allow the actor to communicate with Hisoka. The malware attempts to log into an Exchange server using supplied credentials and uses EWS to send and receive emails in order to establish communications between the target and the actor. However, the communications channel does not actually send and receive emails like other email-based C2 channels we have seen in the past. Instead, the channel relies on creating email drafts that the Hisoka malware and the actor will process in order to exchange data back and forth. By using email drafts as well as the same legitimate Exchange account to communicate, no emails will be detected outbound or received inbound.\n\nWithin two hours of gaining access to the system through Hisoka, the actor deployed two additional tools named {{Gon}} and {{EYE}}, whose names were based on the filenames Gon.sys and EYE.exe.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/xhunt-campaign-attacks-on-kuwait-shipping-and-transportation-organizations/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hisoka"
        ],
        "uuid": "f9fd0ba3-a910-4fda-b553-cf0c489d1e8a",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hisoka",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/xhunt-campaign-attacks-on-kuwait-shipping-and-transportation-organizations/",
            "date": "2019-09-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "xHunt Campaign: Attacks on Kuwait Shipping and Transportation Organizations",
            "categories": [
                "Hisoka"
            ]
        }
    ],
    "mitre": []
};