var threatdata = {
    "name": "Chafer, APT 39",
    "alias": "Chafer, APT 39, Remix Kitten, Cobalt Hickman, TA454, ITG07",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-02",
    "all_data": {
        "actor": "Chafer, APT 39",
        "names": [
            {
                "name": "Chafer",
                "name-giver": "Symantec"
            },
            {
                "name": "APT 39",
                "name-giver": "Mandiant"
            },
            {
                "name": "Remix Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Cobalt Hickman",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TA454",
                "name-giver": "Proofpoint"
            },
            {
                "name": "ITG07",
                "name-giver": "IBM"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored, Rana Intelligence Computing Company",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "(FireEye) APT39 was created to bring together previous activities and methods used by this actor, and its activities largely align with a group publicly referred to as \u201cChafer.\u201d However, there are differences in what has been publicly reported due to the variances in how organizations track activity. APT39 primarily leverages the SEAWEED and CACHEMONEY backdoors along with a specific variant of the POWBAT backdoor. While APT39\u2019s targeting scope is global, its activities are concentrated in the Middle East. APT39 has prioritized the telecommunications sector, with additional targeting of the travel industry and IT firms that support it and the high-tech industry.\n\nAPT39\u2019s focus on the telecommunications and travel industries suggests intent to perform monitoring, tracking, or surveillance operations against specific individuals, collect proprietary or customer data for commercial or operational purposes that serve strategic requirements related to national priorities, or create additional accesses and vectors to facilitate future campaigns. Government entities targeting suggests a potential secondary intent to collect geopolitical data that may benefit nation-state decision making. Targeting data supports the belief that APT39\u2019s key mission is to track or monitor targets of interest, collect personal information, including travel itineraries, and gather customer data from telecommunications firms.",
        "observed-sectors": [
            "Aviation",
            "Engineering",
            "Government",
            "High-Tech",
            "IT",
            "Shipping and Logistics",
            "Telecommunications",
            "Transportation"
        ],
        "observed-countries": [
            "Israel",
            "Jordan",
            "Kuwait",
            "Saudi Arabia",
            "Spain",
            "Turkey",
            "UAE",
            "USA",
            "Middle East"
        ],
        "tools": [
            "Antak",
            "ASPXSpy",
            "EternalBlue",
            "HTTPTunnel",
            "MechaFlounder",
            "Metasploit",
            "Mimikatz",
            "nbtscan",
            "Non-sucking Service Manager",
            "OilRig",
            "Plink",
            "POWBAT",
            "pwdump",
            "Rana",
            "Remcom",
            "Remexi",
            "SafetyKatz",
            "SEAWEED",
            "UltraVNC",
            "Windows Credentials Editor",
            "Living off the Land",
            "SMB hacking tools"
        ],
        "operations": [
            {
                "date": "2017",
                "activity": "Chafer appears to have been undeterred by its exposure in 2015 and continued to be very active during 2017, using seven new tools, rolling out new infrastructure, and attacking nine new target organizations in the region. The group hit organizations in Israel, Jordan, the United Arab Emirates, Saudi Arabia, and Turkey.\nSectors targeted included airlines; aircraft services; software and IT services companies serving the air and sea transport sectors; telecoms services; payroll services; engineering consultancies; and document management software.</br />Outside of the Middle East, Symantec has also found evidence of attacks against one African airline and attempts to compromise an international travel reservations firm.\nhttps://www.symantec.com/blogs/threat-intelligence/chafer-latest-attacks-reveal-heightened-ambitions"
            },
            {
                "date": "2018-02",
                "activity": "Turkish Government Targeting\nThis new secondary payload is Python-based and compiled into executable form using the PyInstaller utility. This is the first instance where Unit 42 has identified a Python-based payload used by these operators. We\u2019ve also identified code overlap with OilRig\u2019s Clayside VBScript but at this time track Chafer and OilRig as separate threat groups. We have named this payload MechaFlounder for tracking purposes.\nhttps://unit42.paloaltonetworks.com/new-python-based-payload-mechaflounder-used-by-chafer/"
            },
            {
                "date": "2018 Autumn",
                "activity": "Spying on Iran-based foreign diplomatic entities\nThroughout the autumn of 2018 we analyzed a long-standing (and still active at that time) cyberespionage campaign that was primarily targeting foreign diplomatic entities based in Iran. The attackers were using an improved version of Remexi in what the victimology suggests might be a domestic cyberespionage operation.\nhttps://securelist.com/chafer-used-remexi-malware/89538/"
            },
            {
                "date": "2018",
                "activity": "Bitdefender researchers have found attacks conducted by this actor in the Middle East region, dating back to 2018. The campaigns were based on several tools, including \u201cliving off the land\u201d tools, which makes attribution difficult, as well as different hacking tools and a custom built backdoor.\nhttps://www.bitdefender.com/files/News/CaseStudies/study/332/Bitdefender-Whitepaper-Chafer-creat4491-en-EN-interactive.pdf"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-09",
                "activity": "Treasury Sanctions Cyber Actors Backed by Iranian Intelligence Ministry\nhttps://home.treasury.gov/news/press-releases/sm1127"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/01/apt39-iranian-cyber-espionage-group-focused-on-personal-information.html",
            "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "https://securityintelligence.com/posts/observations-of-itg07-cyber-operations/",
            "https://www.ic3.gov/Media/News/2020/200917-2.pdf",
            "https://www.bitdefender.com/files/News/CaseStudies/study/332/Bitdefender-Whitepaper-Chafer-creat4491-en-EN-interactive.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0087/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=chafer"
        ],
        "uuid": "d7f937b7-b50b-4022-bca1-9e403ffefe45",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "chafer_apt_39",
    "analysis": null,
    "articles": [],
    "mitre": []
};