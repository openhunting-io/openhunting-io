var threatdata = {
    "name": "Comment Crew, APT 1",
    "alias": "Comment Crew, Comment Panda, TG-8223, APT 1, BrownFox, Group 3, Byzantine Hades, Byzantine Candor, Shanghai Group, GIF89a",
    "category": "APT",
    "type": "-",
    "modified": "2021-05-21",
    "all_data": {
        "actor": "Comment Crew, APT 1",
        "names": [
            {
                "name": "Comment Crew",
                "name-giver": "Symantec"
            },
            {
                "name": "Comment Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TG-8223",
                "name-giver": "SecureWorks"
            },
            {
                "name": "APT 1",
                "name-giver": "Mandiant"
            },
            {
                "name": "BrownFox",
                "name-giver": "Symantec"
            },
            {
                "name": "Group 3",
                "name-giver": "Talos"
            },
            {
                "name": "Byzantine Hades",
                "name-giver": "US State Department"
            },
            {
                "name": "Byzantine Candor",
                "name-giver": "US State Department"
            },
            {
                "name": "Shanghai Group",
                "name-giver": "SecureWorks"
            },
            {
                "name": "GIF89a",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, 2nd Bureau of the People\u2019s Liberation Army (PLA) General Staff Department\u2019s (GSD) 3rd Department, commonly known by its Military Unit Cover Designator (MUCD) as Unit 61398",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2006",
        "description": "Also known as APT1, Comment Crew is an advanced persistent threat (APT) group with links to the Chinese military. The threat actors, which were active from roughly 2006 to 2010, managed to strike over 140 US companies in the quest for sensitive corporate and intellectual property data.\n\nThe group earned their name through their use of HTML comments to hide communication to the command-and-control servers. The usual attack vector was via spear-phishing campaigns utilizing emails which contained documents with names tailored for the potential victims, such as \u201cArmyPlansConferenceOnNewGCVSolicitation.pdf,\u201d or \u201cChinese Oil Executive Learning From Experience.doc.\u201d\n\nThis group may also be responsible for the {{Siesta}} campaign.",
        "observed-sectors": [
            "Aerospace",
            "Chemical",
            "Construction",
            "Defense",
            "Education",
            "Energy",
            "Engineering",
            "Entertainment",
            "Financial",
            "Food and Agriculture",
            "Government",
            "Healthcare",
            "High-Tech",
            "IT",
            "Manufacturing",
            "Media",
            "Mining",
            "Non-profit organizations",
            "Research",
            "Satellites",
            "Telecommunications",
            "Transportation",
            "Navigation and lawyers"
        ],
        "observed-countries": [
            "Belgium",
            "Canada",
            "France",
            "India",
            "Israel",
            "Japan",
            "Luxembourg",
            "Norway",
            "Singapore",
            "South Africa",
            "South Korea",
            "Switzerland",
            "Taiwan",
            "UAE",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Auriga",
            "bangat",
            "BISCUIT",
            "Bouncer",
            "Cachedump",
            "CALENDAR",
            "Combos",
            "CookieBag",
            "Dairy",
            "GDOCUPLOAD",
            "GetMail",
            "GLASSES",
            "GLOOXMAIL",
            "GOGGLES",
            "GREENCAT",
            "gsecdump",
            "Hackfase",
            "Helauto",
            "Kurton",
            "LIGHTBOLT",
            "LIGHTDART",
            "LONGRUN",
            "Lslsass",
            "ManItsMe",
            "MAPIget",
            "Mimikatz",
            "MiniASP",
            "NewsReels",
            "Oceansalt",
            "Pass-The-Hash Toolkit",
            "Poison Ivy",
            "ProcDump",
            "pwdump",
            "Seasalt",
            "ShadyRAT",
            "StarsyPound",
            "Sword",
            "TabMsgSQL",
            "Tarsip",
            "WARP",
            "WebC2",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2006/2010",
                "activity": "Operation \u201cSeasalt\u201d\nTarget: 140 US companies in the quest for sensitive corporate and intellectual property data.\nMethod: Spear-phishing with malicious documents."
            },
            {
                "date": "2011-03",
                "activity": "Breach of RSA\nThey breached security systems designed to keep out intruders by creating duplicates to \u201cSecurID\u201d electronic keys from EMC Corp\u2019s EMC.N RSA security division, said the person who was not authorized to publicly discuss the matter.\nhttps://www.reuters.com/article/us-usa-defense-hackers/exclusive-hackers-breached-u-s-defense-contractors-idUSTRE74Q6VY20110527\nhttps://www.wired.com/story/the-full-story-of-the-stunning-rsa-hack-can-finally-be-told/"
            },
            {
                "date": "2011/2012",
                "activity": "Hackers Plundered Israeli Defense Firms that Built \u2018Iron Dome\u2019 Missile Defense System\nhttps://krebsonsecurity.com/2014/07/hackers-plundered-israeli-defense-firms-that-built-iron-dome-missile-defense-system/"
            },
            {
                "date": "2014-02",
                "activity": "Operation \u201cSiesta\u201d\nFireEye recently looked deeper into the activity discussed in TrendMicro\u2019s blog and dubbed the \u201cSiesta\u201d campaign. The tools, modus operandi, and infrastructure used in the campaign present two possibilities: either the Chinese cyberespionage unit APT 1 is perpetrating this activity, or another group is using the same tactics and tools as the legacy APT 1.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/the-siesta-campaign-a-new-targeted-attack-awakens/\nhttps://www.fireeye.com/blog/threat-research/2014/03/a-detailed-examination-of-the-siesta-campaign.html"
            },
            {
                "date": "2018-05",
                "activity": "Operation \u201cOceansalt\u201d\nTarget: Oceansalt appears to have been part of an operation targeting South Korea, United States, and Canada in a well-focused attack. A variation of this malware has been distributed from two compromised sites in South Korea.\nMethod: Oceansalt appears to be the first stage of an advanced persistent threat. The malware can send system data to a control server and execute commands on infected machines, but we do not yet know its ultimate purpose.\nNote: It is possible that this operation was not performed by the actual Comment Crew group (as they are supposedly in jail).\nhttps://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/operation-oceansalt-delivers-wave-after-wave/\nhttps://www.mcafee.com/enterprise/en-us/assets/reports/rp-operation-oceansalt.pdf"
            }
        ],
        "counter-operations": [
            {
                "date": "2014-05",
                "activity": "5 in China Army Face U.S. Charges of Cyberattacks\nhttps://www.nytimes.com/2014/05/20/us/us-to-charge-chinese-workers-with-cyberspying.html"
            }
        ],
        "information": [
            "https://www.symantec.com/connect/blogs/apt1-qa-attacks-comment-crew",
            "https://en.wikipedia.org/wiki/PLA_Unit_61398"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0006/"
        ],
        "uuid": "b99367ed-e483-40a3-98d0-8d3a2102a4ab",
        "last-card-change": "2021-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "comment_crew_apt_1",
    "analysis": null,
    "articles": [],
    "mitre": []
};