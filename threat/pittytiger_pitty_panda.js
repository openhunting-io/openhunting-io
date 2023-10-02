var threatdata = {
    "name": "PittyTiger, Pitty Panda",
    "alias": "PittyTiger, Pitty Panda",
    "category": "APT",
    "type": "-",
    "modified": "2021-12-26",
    "all_data": {
        "actor": "PittyTiger, Pitty Panda",
        "names": [
            {
                "name": "PittyTiger",
                "name-giver": "FireEye"
            },
            {
                "name": "Pitty Panda",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Airbus) Pitty Tiger is a group of attackers that have been active since at least 2011. They have targeted private companies in several sectors, such as defense and telecommunications, but also at least one government.\n\nWe have been able to track down this group of attackers and can provide detailed information about them. We were able to collect and reveal their \u201cmalware arsenal\u201d. We also analyzed their technical organization.\n\nOur investigations indicate that Pitty Tiger has not used any 0day vulnerability so far, rather they prefer using custom malware, developed for the group\u2019s exclusive usage. Our discoveries indicate that Pitty Tiger is a group of attackers with the ability to stay under the radar, yet still not as mature as other groups of attackers we monitor.\n\nPitty Tiger is probably not a state-sponsored group of attackers. They lack the experience and financial support that one would expect from state-sponsored attackers. We suppose this group is opportunistic and sells its services to probable competitors of their targets in the private sector.\n\nWe have been able to leverage several attackers profiles, showing that the Pitty Tiger group is fairly small compared to other APT groups, which is probably why we saw them work on a very limited amount of targets.\n\nThere is some overlap with {{APT 5, Keyhole Panda}}.",
        "observed-sectors": [
            "Defense",
            "Government",
            "Telecommunications",
            "Web development"
        ],
        "observed-countries": [
            "Taiwan",
            "Europe"
        ],
        "tools": [
            "Enfal",
            "Gh0st RAT",
            "gsecdump",
            "Leo RAT",
            "Mimikatz",
            "Paladin RAT",
            "pgift",
            "Pitty",
            "Poison Ivy"
        ],
        "operations": [
            {
                "date": "2011",
                "activity": "Operation \u201cThe Eye of the Tiger\u201d\nhttps://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2014/2014.07.11.Pitty_Tiger/Pitty_Tiger_Final_Report.pdf"
            },
            {
                "date": "2014-06",
                "activity": "We discovered this malware sample in June 2014, leading to a command & control (c&c) server still in activity.\nOur researches around the malware family revealed the \u201cPitty Tiger\u201d group has been active since 2011, yet we found traces which makes us believe the group is active since 2010.\nhttp://blog.cassidiancybersecurity.com/post/2014/07/The-Eye-of-the-Tiger2"
            },
            {
                "date": "2014-07",
                "activity": "During the last month, McAfee Labs researchers have uncovered targeted attacks carried out via spear phishing email against a French company. We have seen email sent to a large group of individuals in the organization.\nhttps://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/targeted-attacks-on-french-company-exploit-multiple-word-vulnerabilities/"
            },
            {
                "date": "2014",
                "activity": "In a recent attack against a French company, the attackers sent simple, straightforward messages in English and French from free email addresses using names of actual employees of the targeted company.\nhttps://www.fireeye.com/blog/threat-research/2014/07/spy-of-the-tiger.html"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0011/"
        ],
        "uuid": "26627515-afdb-421b-b59e-3a5300210001",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pittytiger_pitty_panda",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "pittytiger",
            "procedure_code": "g0011",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0011",
            "techniques": [
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
                    "procedure_description": "pittytiger has obtained and used tools such as mimikatz and gsecdump.[84]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "pittytiger attempts to obtain legitimate credentials during operations.[52]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "pittytiger attempts to obtain legitimate credentials during operations.[52]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "pittytiger attempts to obtain legitimate credentials during operations.[52]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "pittytiger attempts to obtain legitimate credentials during operations.[52]"
                }
            ]
        }
    ]
};