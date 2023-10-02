var threatdata = {
    "name": "PoisonCarp",
    "alias": "PoisonCarp, INSOMNIA",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "PoisonCarp",
        "names": [
            {
                "name": "PoisonCarp"
            },
            {
                "name": "INSOMNIA"
            }
        ],
        "description": "(Citizen Lab) We observed POISON CARP employing a total of eight Android browser exploits and one Android spyware kit, as well as one iOS exploit chain and iOS spyware. None of the exploits that we observed were zero days. POISON CARP overlaps with two recently reported campaigns against the Uyghur community. The iOS exploit and spyware we observed was used in watering hole attacks reported by Google Project Zero, and a website used to serve exploits by POISON CARP was also observed in a campaign called \u201cEvil Eye\u201d reported by Volexity. The Android malware used in the campaign is a fully featured spyware kit that has not been previously documented.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/",
            "https://www.volexity.com/blog/2020/04/21/evil-eye-threat-actor-resurfaces-with-ios-exploit-and-updated-implant/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ios.poisoncarp"
        ],
        "uuid": "bdbce19d-0720-408e-99b9-d56d5df7c1e3",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poisoncarp",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-android-spyware-actionspy-revealed-via-phishing-attacks-from-earth-empusa/",
            "date": "2020-06-11",
            "organization": "Trend Micro",
            "author": "Ecular Xu",
            "title": "New Android Spyware ActionSpy Revealed via Phishing Attacks from Earth Empusa",
            "categories": [
                "ActionSpy",
                "PoisonCarp"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/",
            "date": "2019-09-24",
            "organization": "The Citizen Lab",
            "author": "Bill Marczak",
            "title": "Missing Link Tibetan Groups Targeted with 1-Click Mobile Exploits",
            "categories": [
                "PoisonCarp",
                "POISON CARP"
            ]
        },
        {
            "data_url": "https://googleprojectzero.blogspot.com/2019/08/implant-teardown.html",
            "date": "2019-08-29",
            "organization": "Google",
            "author": "Ian Beer",
            "title": "Implant Teardown",
            "categories": [
                "PoisonCarp"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "arp",
            "procedure_code": "s0099",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0099",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "arp can be used to display a host's arp cache, which may include address resolutions for remote systems.[14][15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "arp can be used to display arp configuration information on the host.[22]"
                }
            ]
        }
    ]
};