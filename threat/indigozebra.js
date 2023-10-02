var threatdata = {
    "name": "IndigoZebra",
    "alias": "IndigoZebra",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "IndigoZebra",
        "names": [
            {
                "name": "IndigoZebra",
                "name-giver": "Check Point"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "(Check Point) Check Point Research (CPR) has observed an ongoing cyber espionage operation targeting the Afghan government. Believed to be the Chinese-speaking hacker group known as \u201cIndigoZebra\u201d, the threat actors behind the espionage leveraged Dropbox, the popular cloud storage service, to infiltrate the Afghan National Security Council (NSC). Further investigation by CPR revealed that this is the latest in longer-running activity targeting other Central Asian countries, Kyrgyzstan and Uzbekistan, since at least 2014.",
        "observed-countries": [
            "Afghanistan",
            "Kyrgyzstan",
            "Uzbekistan"
        ],
        "tools": [
            "Dropbox"
        ],
        "information": [
            "https://blog.checkpoint.com/2021/07/01/cyber-espionage-on-afghanistan-kyrgyzstan-and-uzbekistan-by-chinese-speaking-hacker-group/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0136/"
        ],
        "uuid": "b4571e18-c0c8-42fb-9c03-aa7b5b29b2b7",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "indigozebra",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "indigozebra",
            "procedure_code": "g0136",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0136",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "indigozebra has established domains, some of which were designed to look like official government domains, for their operations.[33]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "indigozebra created dropbox accounts for their operations.[9][10]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1586.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1586/002",
                    "technique_name": "compromise accounts : email accounts",
                    "technique_description": "adversaries may compromise email accounts that can be used during targeting. adversaries can use compromised email accounts to further their operations, such as leveraging them to conduct phishing for information, phishing, or large-scale spam email campaigns. utilizing an existing persona with a compromised email account may engender a level of trust in a potential victim if they have a relationship with, or knowledge of, the compromised persona. compromised email accounts can also be used in the acquisition of infrastructure (ex: domains).",
                    "procedure_description": "indigozebra has compromised legitimate email accounts to use in their spearphishing operations.[7]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "indigozebra has acquired open source tools such as nbtscan and meterpreter for their operations.[59][60]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "indigozebra sent spearphishing emails containing malicious password-protected rar attachments.[119][120]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "indigozebra sent spearphishing emails containing malicious attachments that urged recipients to review modifications in the file which would trigger the attack.[115]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "indigozebra has downloaded additional files and tools from its c2 server.[75]"
                }
            ]
        }
    ]
};