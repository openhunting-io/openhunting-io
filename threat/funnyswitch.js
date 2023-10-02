var threatdata = {
    "name": "FunnySwitch",
    "alias": "FunnySwitch, RouterGod",
    "category": "Malware",
    "type": "Loader, Backdoor",
    "modified": "2023-08-07",
    "all_data": {
        "tool": "FunnySwitch",
        "names": [
            {
                "name": "FunnySwitch"
            },
            {
                "name": "RouterGod"
            }
        ],
        "description": "(Trend Micro) FunnySwitch is a .NET Framework backdoor that usually starts with the \u201cMITRE \u2013 Hijack Execution Flow: DLL Search Order Hijacking\u201d technique and executes inside a legal process that was mentioned and analyzed by Positive Technologies in 2020.",
        "category": "Malware",
        "type": [
            "Loader",
            "Backdoor"
        ],
        "information": [
            "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf",
            "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.funnyswitch"
        ],
        "uuid": "21b1dd5b-e372-44eb-a8c9-e9d6626d8ced",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "funnyswitch",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0808.pdf",
            "date": "2023-08-07",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "RedHotel: A Prolific, Chinese State-Sponsored Group Operating at a Global Scale",
            "categories": [
                "Winnti",
                "Brute Ratel C4",
                "Cobalt Strike",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/Asia-22/Thursday-Materials/AS-22-LeonSilvia-NextGenPlugXShadowPad.pdf",
            "date": "2022-05-12",
            "organization": "TEAMT5",
            "author": "Leon Chang",
            "title": "The Next Gen PlugX/ShadowPad? A Dive into the Emerging China-Nexus Modular Trojan, Pangolin8RAT (slides)",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "SLIME29",
                "TianWu"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf",
            "date": "2022-01-17",
            "organization": "Trend Micro",
            "author": "Joseph Chen",
            "title": "Delving Deep: An Analysis of Earth Lusca\u2019s Operations",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "FunnySwitch",
                "JuicyPotato",
                "ShadowPad",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://speakerdeck.com/aragorntseng/winnti-is-coming-evolution-after-prosecution-at-hitcon2021",
            "date": "2021-12-16",
            "organization": "TEAMT5",
            "author": "Charles Li",
            "title": "Winnti is Coming - Evolution after Prosecution",
            "categories": [
                "Cobalt Strike",
                "FishMaster",
                "FunnySwitch",
                "HIGHNOON",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/",
            "date": "2021-01-14",
            "organization": "PTSecurity",
            "author": "PT ESC Threat Intelligence",
            "title": "Higaisa or Winnti? APT41 backdoors, old and new",
            "categories": [
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/#id5-2",
            "date": "2021-01-14",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "Higaisa or Winnti? APT41 backdoors, old and new",
            "categories": [
                "FunnySwitch"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "route",
            "procedure_code": "s0103",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0103",
            "techniques": [
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
                    "procedure_description": "route can be used to discover routing configuration information."
                }
            ]
        }
    ]
};