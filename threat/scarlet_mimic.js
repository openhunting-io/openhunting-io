var threatdata = {
    "name": "Scarlet Mimic",
    "alias": "Scarlet Mimic",
    "category": "APT",
    "type": "-",
    "modified": "2022-11-18",
    "all_data": {
        "actor": "Scarlet Mimic",
        "names": [
            {
                "name": "Scarlet Mimic",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "Scarlet Mimic is a threat group that has targeted minority rights activists. This group has not been directly linked to a government source, but the group\u2019s motivations appear to overlap with those of the Chinese government. While there is some overlap between IP addresses used by Scarlet Mimic and {{Putter Panda, APT 2}}, it has not been concluded that the groups are the same.\n\n(Palo Alto) The attacks began over four years ago and their targeting pattern suggests that this adversary\u2019s primary mission is to gather information about minority rights activists. We do not have evidence directly linking these attacks to a government source, but the information derived from these activities supports an assessment that a group or groups with motivations similar to the stated position of the Chinese government in relation to these targets is involved.\n\nThe attacks we attribute to Scarlet Mimic have primarily targeted Uyghur and Tibetan activists as well as those who are interested in their causes. Both the Tibetan community and the Uyghurs, a Turkic Muslim minority residing primarily in northwest China, have been targets of multiple sophisticated attacks in the past decade. Both also have history of strained relationships with the government of the People\u2019s Republic of China (PRC), though we do not have evidence that links Scarlet Mimic attacks to the PRC.\n\nScarlet Mimic attacks have also been identified against government organizations in Russia and India, who are responsible for tracking activist and terrorist activities. While we do not know the precise target of each of the Scarlet Mimic attacks, many of them align to the patterns described above.",
        "observed-countries": [
            "Tibetan and Uyghur activists as well as those who are interested in their causes"
        ],
        "tools": [
            "BrutishCommand",
            "CallMe",
            "CrypticConvo",
            "Elirks",
            "FakeFish",
            "FakeHighFive",
            "FakeM",
            "FullThrottle",
            "HTran",
            "MobileOrder",
            "PiggyBack",
            "Psylo",
            "RaidBase",
            "SkiBoot",
            "SubtractThis"
        ],
        "operations": [
            {
                "date": "2022-08",
                "activity": "CPR analyzes A 7-year mobile surveillance campaign targeting largest minority in China\nhttps://blog.checkpoint.com/2022/09/22/cpr-analyzes-a-7-year-mobile-surveillance-campaign-targeting-largest-minority-in-china/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0029/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=scarletmimic"
        ],
        "uuid": "d130ffbe-6498-4559-9b16-58fb88146c45",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "scarlet_mimic",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/golfing-taurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Golfing Taurus",
            "categories": [
                "Scarlet Mimic"
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
            "data_url": "https://attack.mitre.org/groups/G0029/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Scarlet Mimic",
            "categories": [
                "Scarlet Mimic"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/",
            "date": "2016-01-24",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Scarlet Mimic: Years-Long Espionage Campaign Targets Minority Activists",
            "categories": [
                "CrypticConvo",
                "Scarlet Mimic"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "scarlet mimic",
            "procedure_code": "g0029",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0029",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/002",
                    "technique_name": "masquerading : right-to-left override",
                    "technique_description": "adversaries may abuse the right-to-left override (rtlo or rlo) character (u+202e) to disguise a string and/or file name to make it appear benign. rtlo is a non-printing unicode character that causes the text that follows it to be displayed in reverse. for example, a windows screensaver executable named march 25 \\u202excod.scr will display as march 25 rcs.docx. a javascript file named photo_high_re\\u202egnp.js will be displayed as photo_high_resj.png.",
                    "procedure_description": "scarlet mimic has used the left-to-right override character in self-extracting rar archive spearphishing attachment file names.[8]"
                }
            ]
        }
    ]
};