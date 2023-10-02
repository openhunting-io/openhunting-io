var threatdata = {
    "name": "Greenbug, Volatile Kitten",
    "alias": "Greenbug, Volatile Kitten",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Greenbug, Volatile Kitten",
        "names": [
            {
                "name": "Greenbug",
                "name-giver": "Symantec"
            },
            {
                "name": "Volatile Kitten",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "A subgroup of {{OilRig, APT 34, Helix Kitten, Chrysene}}.\n\n(Symantec) Symantec discovered the Greenbug cyberespionage group during its investigation into previous attacks involving W32.Disttrack.B (aka Shamoon). Shamoon (W32.Disttrack) first made headlines in 2012 when it was used in attacks against energy companies in Saudi Arabia. It recently resurfaced in November 2016 (W32.Disttrack.B), again attacking targets in Saudi Arabia. While these attacks were covered extensively in the media, how the attackers stole these credentials and introduced W32.Disttrack on targeted organizations\u2019 networks remains a mystery.\n\nCould Greenbug be responsible for getting Shamoon those stolen credentials?\n\nAlthough there is no definitive link between Greenbug and Shamoon, the group compromised at least one administrator computer within a Shamoon-targeted organization\u2019s network prior to W32.Disttrack.B being deployed on November 17, 2016.",
        "operations": [
            {
                "date": "2016-11",
                "activity": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon\nhttps://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon"
            },
            {
                "date": "2017-05",
                "activity": "Researchers have identified a possible new collaborator in the continued Shamoon attacks against Saudi organizations. Called Greenbug, this group is believed to be instrumental in helping Shamoon steal user credentials of targets ahead of Shamoon\u2019s destructive attacks.\nhttps://threatpost.com/shamoon-collaborator-greenbug-adopts-new-communication-tool/125383/"
            },
            {
                "date": "2017-07",
                "activity": "OilRig Uses ISMDoor Variant; Possibly Linked to Greenbug Threat Group\nIn July 2017, we observed an attack on a Middle Eastern technology organization that was also targeted by the OilRig campaign in August 2016. Initial inspection of this attack suggested this was again the OilRig campaign using their existing toolset, but further examination revealed not only new variants of the delivery document we named Clayslide, but also a different payload embedded inside it.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-uses-ismdoor-variant-possibly-linked-greenbug-threat-group/"
            },
            {
                "date": "2017-10",
                "activity": "Iranian Threat Agent Greenbug has been registering domains similar to those of Israeli High-Tech and Cyber Security Companies.\nOn 15 October 2017 a sample of ISMdoor was submitted to VirusTotal from Iraq.\nhttps://www.clearskysec.com/greenbug/"
            }
        ],
        "uuid": "1839228a-7fb6-4d8b-a7cd-486e728ba9b1",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "greenbug_volatile_kitten",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.clearskysec.com/greenbug/",
            "date": "2017-10-24",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian Threat Agent Greenbug Impersonates Israeli High-Tech and Cyber Security Companies",
            "categories": [
                "Greenbug"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-ismdoor-variant-possibly-linked-greenbug-threat-group/",
            "date": "2017-07-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig Uses ISMDoor Variant; Possibly Linked to Greenbug Threat Group",
            "categories": [
                "Greenbug"
            ]
        },
        {
            "data_url": "https://threatpost.com/shamoon-collaborator-greenbug-adopts-new-communication-tool/125383/",
            "date": "2017-05-02",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "Shamoon Collaborator Greenbug Adopts New Communication Tool",
            "categories": [
                "Greenbug"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20190331181353/https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};