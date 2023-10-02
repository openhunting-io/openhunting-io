var threatdata = {
    "name": "DragonOK",
    "alias": "DragonOK, Bronze Overbrook",
    "category": "APT",
    "type": "-",
    "modified": "2022-07-18",
    "all_data": {
        "actor": "DragonOK",
        "names": [
            {
                "name": "DragonOK",
                "name-giver": "FireEye"
            },
            {
                "name": "Bronze Overbrook",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "DragonOK is a threat group that has targeted Japanese organizations with phishing emails. Due to overlapping TTPs, including similar custom tools, DragonOK is thought to have a direct or indirect relationship with the threat group {{Moafee}}. It is known to use a variety of malware, including Sysget/HelloBridge, PlugX, Poison Ivy, FormerFirstRat, NFlog, and NewCT.\n\nKaspersky also found relations between this group and {{Rancor}}.",
        "observed-sectors": [
            "High-Tech",
            "Manufacturing"
        ],
        "observed-countries": [
            "Cambodia",
            "Japan",
            "Russia",
            "Taiwan",
            "Tibet"
        ],
        "tools": [
            "FormerFirstRAT",
            "HTran",
            "IsSpace",
            "KHRAT",
            "Mongall",
            "NewCT",
            "NFlog",
            "PlugX",
            "Poison Ivy",
            "Rambo",
            "SysGet",
            "TidePool"
        ],
        "operations": [
            {
                "date": "2015-01",
                "activity": "This campaign involved five separate phishing attacks, each carrying a different variant of Sysget malware, also known as HelloBridge. The malware was included as an attachment intended to trick the user into opening the malware.\nAll five phishing campaigns targeted a Japanese manufacturing firm over the course of two months, but the final campaign also targeted a separate Japanese high-tech organization.\nhttps://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/"
            },
            {
                "date": "2016",
                "activity": "In recent months, Unit 42 has observed a number of attacks that we attribute to this group. Multiple new variants of the previously discussed sysget malware family have been observed in use by DragonOK. Sysget malware was delivered both directly via phishing emails, as well as in Rich Text Format (RTF) documents exploiting the CVE-2015-1641 vulnerability that in turn leveraged a very unique shellcode.\nhttps://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/"
            },
            {
                "date": "2017-01",
                "activity": "Cybersecurity expert Niklas Femerstrand in an email yesterday pointed out that while servers in several different countries appear to be the origin the attack, it has been linked to the DragonOK campaign.\n\u201cThe DragonOK campaign has previously [in 2014] targeted organizations in Taiwan, Japan, Tibet and Russia, and political organizations in Cambodia since at least January, 2017,\u201d he wrote, adding that there are \u201cstrong indications\u201d the campaign is \u201can operation funded by China\u201d.\nhttps://www.phnompenhpost.com/national/kingdom-targeted-new-malware"
            }
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0017/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=dragonok"
        ],
        "uuid": "6823d807-dfa8-42f3-84d5-986a7ef60c56",
        "last-card-change": "2021-01-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dragonok",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/wiki/Groups",
            "date": "2021",
            "organization": "",
            "author": "MITRE",
            "title": "Groups Overview of MITRE",
            "categories": [
                "DragonOK",
                "Poseidon Group",
                "Scarlet Mimic"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-overbrook",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OVERBROOK",
            "categories": [
                "Aveo",
                "DDKONG",
                "IsSpace",
                "PLAINTEE",
                "PlugX",
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=T5wPwvLrBYU",
            "date": "2019-05-20",
            "organization": "Youtube (Kaspersky)",
            "author": "Costin Raiu",
            "title": "Operation ShadowHammer: Costin Raiu and Vitaly Kamlyuk at #TheSAS2019",
            "categories": [
                "DragonOK",
                "Poseidon Group",
                "Scarlet Mimic"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0002/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Moafee",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/moafee",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Moafee",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0017/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: DragonOK",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.phnompenhpost.com/national/kingdom-targeted-new-malware",
            "date": "2017-09-05",
            "organization": "Phnom Penh Post",
            "author": "Alessandro Marazzi Sassoon",
            "title": "Kingdom targeted by new malware",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.forcepoint.com/de/blog/x-labs/trojanized-adobe-installer-used-install-dragonok-s-new-custom-backdoor",
            "date": "2017-03-29",
            "organization": "Forcepoint",
            "author": "Roland Dela Paz",
            "title": "Trojanized Adobe installer used to install DragonOK\u2019s new custom backdoor",
            "categories": [
                "KHRAT",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://github.com/m0n0ph1/APT_CyberCriminal_Campagin_Collections-1/blob/master/2017/2017.02.15.deep-dive-dragonok-rambo-backdoor/Deep%20Dive%20on%20the%20DragonOK%20Rambo%20Backdoor%20_%20Morphick%20Cyber%20Security.pdf",
            "date": "2017-02-15",
            "organization": "Morphick",
            "author": "Nick Hoffman",
            "title": "Deep Dive on the DragonOK Rambo Backdoor",
            "categories": [
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/",
            "date": "2017-01-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "DragonOK Updates Toolset and Targets Multiple Geographic Regions",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/",
            "date": "2015-04-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Unit 42 Identifies New DragonOK Backdoor Malware Deployed Against Japanese Targets",
            "categories": [
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf",
            "date": "2014-09-30",
            "organization": "FireEye",
            "author": "Thoufique Haq",
            "title": "OPERATION QUANTUM ENTANGLEMENT",
            "categories": [
                "NewCT",
                "DragonOK"
            ]
        }
    ],
    "mitre": []
};