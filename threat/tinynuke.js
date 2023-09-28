var threatdata = {
    "name": "TinyNuke",
    "alias": "TinyNuke, NukeBot, Nuclear Bot, MicroBankingTrojan, Xbot",
    "category": "Malware",
    "type": "Reconnaissance, Banking trojan, Backdoor, Credential stealer, Tunneling, Botnet",
    "modified": "2021-12-27",
    "all_data": {
        "tool": "TinyNuke",
        "names": [
            {
                "name": "TinyNuke"
            },
            {
                "name": "NukeBot"
            },
            {
                "name": "Nuclear Bot"
            },
            {
                "name": "MicroBankingTrojan"
            },
            {
                "name": "Xbot"
            }
        ],
        "description": "(Bitsight) Tinynuke, or Nukebot malware, is a trojan able to perform man in the browser attacks against modern web browsers and equipped with the most common features needed by a bank trojan (e.g. Webinjects, Socks proxy, VNC, Remote command execution). This malware was in the spotlight in 2017 after the complete bot source code was leaked in March by someone claiming to be the author of the malware.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Banking trojan",
            "Backdoor",
            "Credential stealer",
            "Tunneling",
            "Botnet"
        ],
        "information": [
            "https://www.bitsight.com/blog/break-out-of-the-tinynuke-botnet",
            "https://www.netscout.com/blog/asert/dismantling-nuclear-bot",
            "https://krebsonsecurity.com/tag/nuclear-bot/",
            "https://securelist.com/the-nukebot-banking-trojan-from-rough-drafts-to-real-threats/78957/",
            "https://securityintelligence.com/the-nukebot-trojan-a-bruised-ego-and-a-surprising-source-code-leak/",
            "https://www.proofpoint.com/us/blog/threat-insight/tinynuke-banking-malware-targets-french-entities"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tinynuke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TinyNuke"
        ],
        "uuid": "e8441890-a53f-4eb0-8cf9-4bfbd68ab527",
        "last-card-change": "2021-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "TinyNuke",
            "malware_alias": "NukeBot,Nuclear Bot,MicroBankingTrojan,Xbot",
            "malware": "win.tinynuke",
            "last_update": "2023-06-19 12:29:34",
            "tags": [
                "TinyNuke"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "77.105.147.140:14333",
                        "timestamp": "2023-06-19 12:29:34"
                    }
                ],
                "domain": [
                    {
                        "value": "market.contradecapital.com",
                        "timestamp": "2022-09-29 09:32:55"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-19 12:29:34",
    "mitre": [],
    "file_name": "tinynuke",
    "analysis": null
};