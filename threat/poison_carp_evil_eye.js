var threatdata = {
    "name": "Poison Carp, Evil Eye",
    "alias": "Poison Carp, Evil Eye, Earth Empusa, Red Dev 16",
    "category": "APT",
    "type": "-",
    "modified": "2022-11-19",
    "all_data": {
        "actor": "Poison Carp, Evil Eye",
        "names": [
            {
                "name": "Poison Carp",
                "name-giver": "Citizen Lab"
            },
            {
                "name": "Evil Eye",
                "name-giver": "Volexity"
            },
            {
                "name": "Earth Empusa",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Red Dev 16",
                "name-giver": "PWC"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Citizen Lab)\n\u2022 Between November 2018 and May 2019, senior members of Tibetan groups received malicious links in individually tailored WhatsApp text exchanges with operators posing as NGO workers, journalists, and other fake personas. The links led to code designed to exploit web browser vulnerabilities to install spyware on iOS and Android devices, and in some cases to OAuth phishing pages. This campaign was carried out by what appears to be a single operator that we call POISON CARP.\n\u2022 We observed POISON CARP employing a total of eight Android browser exploits and one Android spyware kit, as well as one iOS exploit chain and iOS spyware. None of the exploits that we observed were zero days. POISON CARP overlaps with two recently reported campaigns against the Uyghur community. The iOS exploit and spyware we observed was used in watering hole attacks reported by Google Project Zero, and a website used to serve exploits by POISON CARP was also observed in a campaign called \u201cEvil Eye\u201d reported by Volexity. The Android malware used in the campaign is a fully featured spyware kit that has not been previously documented.\n\u2022 POISON CARP appears to have used Android browser exploits from a variety of sources. In one case, POISON CARP used a working exploit publicly released by Exodus Intelligence for a Google Chrome bug that was fixed in source, but whose patch had not yet been distributed to Chrome users. In other cases, POISON CARP used lightly modified versions of Chrome exploit code published on the personal GitHub pages of a member of Qihoo 360\u2019s Vulcan Team, a member of Tencent\u2019s Xuanwu Lab, and by a Google Project Zero member on the Chrome Bug Tracker.\n\u2022 This campaign is the first documented case of one-click mobile exploits used to target Tibetan groups, and reflects an escalation in the sophistication of digital espionage threats targeting the community.",
        "observed-sectors": [
            "Tibetan and Uyghur activists as well as those who are interested in their causes"
        ],
        "observed-countries": [
            "Australia",
            "Canada",
            "China",
            "Kazakhstan",
            "Syria",
            "Turkey",
            "USA"
        ],
        "tools": [
            "ActionSpy",
            "BadBazaar",
            "Bourbon",
            "IceCube",
            "IRONSQUIRREL",
            "MOONSHINE",
            "PoisonCarp",
            "Scotch",
            "Whisky",
            "several exploits in iOS, Android and Google Chrome"
        ],
        "operations": [
            {
                "date": "2018",
                "activity": "Digital Crackdown: Large-Scale Surveillance and Exploitation of Uyghurs\nhttps://www.volexity.com/blog/2019/09/02/digital-crackdown-large-scale-surveillance-and-exploitation-of-uyghurs/"
            },
            {
                "date": "2020-01",
                "activity": "Immediately after the publications from Google and Volexity, the Evil Eye threat actor went fairly quiet. They removed their malicious code from compromised websites, command and control (C2) servers were taken down, and various hostnames stopped resolving. This largely remained the case until early January 2020, when Volexity observed a series of new activity across multiple previously compromised Uyghur websites.\nhttps://www.volexity.com/blog/2020/04/21/evil-eye-threat-actor-resurfaces-with-ios-exploit-and-updated-implant/"
            },
            {
                "date": "2020 Early",
                "activity": "While tracking Earth Empura, also known as POISON CARP/Evil Eye, we identified an undocumented Android spyware we have named ActionSpy.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/new-android-spyware-actionspy-revealed-via-phishing-attacks-from-earth-empusa/"
            },
            {
                "date": "2022",
                "activity": "Lookout Discovers Long-running Surveillance Campaigns Targeting Uyghurs\nhttps://www.lookout.com/blog/uyghur-surveillance-campaign-badbazaar-moonshine"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-03",
                "activity": "Taking Action Against Hackers in China\nhttps://about.fb.com/news/2021/03/taking-action-against-hackers-in-china/"
            }
        ],
        "information": [
            "https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/",
            "https://www.volexity.com/blog/2019/09/02/digital-crackdown-large-scale-surveillance-and-exploitation-of-uyghurs/",
            "https://googleprojectzero.blogspot.com/2019/08/a-very-deep-dive-into-ios-exploit.html"
        ],
        "uuid": "c542e618-93f6-4990-b109-c267835d0762",
        "last-card-change": "2022-11-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poison_carp_evil_eye",
    "analysis": null,
    "articles": [],
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