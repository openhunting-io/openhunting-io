var threatdata = {
    "name": "APT 3, Gothic Panda, Buckeye",
    "alias": "APT 3, Gothic Panda, Buckeye, TG-0110, Bronze Mayfair, UPS Team, Group 6, Red Sylvan",
    "category": "APT",
    "type": "-",
    "modified": "2022-09-12",
    "all_data": {
        "actor": "APT 3, Gothic Panda, Buckeye",
        "names": [
            {
                "name": "APT 3",
                "name-giver": "Mandiant"
            },
            {
                "name": "Gothic Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Buckeye",
                "name-giver": "Symantec"
            },
            {
                "name": "TG-0110",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Mayfair",
                "name-giver": "SecureWorks"
            },
            {
                "name": "UPS Team",
                "name-giver": "Symantec"
            },
            {
                "name": "Group 6",
                "name-giver": "Talos"
            },
            {
                "name": "Red Sylvan",
                "name-giver": "PWC"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, Ministry of State Security and Internet security firm Guangzhou Bo Yu Information Technology Company Limited (\u201cBoyusec\u201d)",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2007",
        "description": "(Recorded Future) APT3 (also known as UPS, Gothic Panda, and TG-0110) is a sophisticated threat group that has been active since at least 2010. APT3 utilizes a broad range of tools and techniques including spear-phishing attacks, zero-day exploits, and numerous unique and publicly available remote access tools (RAT). Victims of APT3 intrusions include companies in the defense, telecommunications, transportation, and advanced technology sectors \u2014 as well as government departments and bureaus in Hong Kong, the U.S., and several other countries.",
        "observed-sectors": [
            "Aerospace",
            "Construction",
            "Defense",
            "High-Tech",
            "Manufacturing",
            "Technology",
            "Telecommunications",
            "Transportation"
        ],
        "observed-countries": [
            "Belgium",
            "Hong Kong",
            "Italy",
            "Luxembourg",
            "Philippines",
            "Sweden",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "APT3 Keylogger",
            "Bemstour",
            "DoublePulsar",
            "EternalBlue",
            "HTran",
            "Hupigon",
            "LaZagne",
            "OSInfo",
            "Pirpi",
            "PlugX",
            "RemoteCMD",
            "shareip",
            "TTCalc",
            "w32times",
            "several 0-days for IE, Firefox and Flash"
        ],
        "operations": [
            {
                "date": "2007",
                "activity": "Hupigon and Pirpi Backdoors\nhttps://www.fireeye.com/blog/threat-research/2010/11/ie-0-day-hupigon-joins-the-party.html"
            },
            {
                "date": "2014-04",
                "activity": "Operation \u201cClandestine Fox\u201d\nFireEye Research Labs identified a new Internet Explorer (IE) zero-day exploit used in targeted attacks.  The vulnerability affects IE6 through IE11, but the attack is targeting IE9 through IE11.  This zero-day bypasses both ASLR and DEP. Microsoft has assigned CVE-2014-1776 to the vulnerability and released security advisory to track this issue.\nhttps://www.fireeye.com/blog/threat-research/2014/04/new-zero-day-exploit-targeting-internet-explorer-versions-9-through-11-identified-in-targeted-attacks.html"
            },
            {
                "date": "2014-06",
                "activity": "Operation \u201cClandestine Fox\u201d, Part Deux\nWhile Microsoft quickly released a patch to help close the door on future compromises, we have now observed the threat actors behind \u201cOperation Clandestine Fox\u201d shifting their point of attack and using a new vector to target their victims: social networking.\nhttps://www.fireeye.com/blog/threat-research/2014/06/clandestine-fox-part-deux.html"
            },
            {
                "date": "2014-11",
                "activity": "Operation \u201cDouble Tap\u201d\nThis actor initiated their most recent campaign on November 19, 2014 targeting multiple organizations. The attacker leveraged multiple exploits, targeting both CVE-2014-6332 and CVE-2014-4113.\nhttps://www.fireeye.com/blog/threat-research/2014/11/operation_doubletap.html"
            },
            {
                "date": "2015-06",
                "activity": "Operation \u201cClandestine Wolf\u201d\nIn the last several weeks, APT3 actors launched a large-scale phishing campaign against organizations in the following industries: Aerospace and Defense, Construction and Engineering, High Tech, Telecommunications and Transportation.\nhttps://www.fireeye.com/blog/threat-research/2015/06/operation-clandestine-wolf-adobe-flash-zero-day.html"
            },
            {
                "date": "2016-03",
                "activity": "Variant of the DoublePulsar Backdoor\nBeginning in March 2016, Buckeye began using a variant of DoublePulsar (Backdoor.Doublepulsar), a backdoor that was subsequently released by the Shadow Brokers in 2017. DoublePulsar was delivered to victims using a custom exploit tool (Trojan.Bemstour) that was specifically designed to install DoublePulsar.\nhttps://www.symantec.com/blogs/threat-intelligence/buckeye-windows-zero-day-exploit\nhttps://research.checkpoint.com/upsynergy/"
            },
            {
                "date": "2016-03",
                "activity": "Buckeye cyberespionage group shifts gaze from US to Hong Kong\nhttps://www.symantec.com/connect/blogs/buckeye-cyberespionage-group-shifts-gaze-us-hong-kong"
            }
        ],
        "counter-operations": [
            {
                "date": "2017-11",
                "activity": "DOJ reveals indictment against Chinese cyber spies that stole U.S. business secrets\nhttps://www.cyberscoop.com/boyusec-china-doj-indictment/"
            },
            {
                "date": "2017-11",
                "activity": "U.S. Charges Three Chinese Hackers Who Work at Internet Security Firm for Hacking Three Corporations for Commercial Advantage\nhttps://www.justice.gov/opa/pr/us-charges-three-chinese-hackers-who-work-internet-security-firm-hacking-three-corporations"
            }
        ],
        "information": [
            "https://intrusiontruth.wordpress.com/2017/05/09/apt3-is-boyusec-a-chinese-intelligence-contractor/",
            "https://www.recordedfuture.com/chinese-mss-behind-apt3/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0022/"
        ],
        "uuid": "92ced576-2522-4b79-8645-baa5e84ffee3",
        "last-card-change": "2022-09-12",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_3_gothic_panda_buckeye",
    "analysis": null,
    "articles": [],
    "mitre": []
};