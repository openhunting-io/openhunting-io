var threatdata = {
    "name": "Axiom, Group 72",
    "alias": "Axiom, Group 72",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-29",
    "all_data": {
        "actor": "Axiom, Group 72",
        "names": [
            {
                "name": "Axiom",
                "name-giver": "Novetta"
            },
            {
                "name": "Group 72",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2008",
        "description": "(Talos) Group 72 is a long standing threat actor group involved in Operation SMN, named Axiom by Novetta. The group is sophisticated, well funded, and possesses an established, defined software development methodology. The group targets high profile organizations with high value intellectual property in the manufacturing, industrial, aerospace, defense, media sectors. Geographically, the group almost exclusively targets organizations based in United States, Japan, Taiwan, and Korea. The preferred tactics of the group include watering-hole attacks, spear-phishing, and other web-based tactics.\n\nThe tools and infrastructure used by the attackers are common to a number of other threat actor groups which may indicate some degree of overlap. We have seen similar patterns used in domain registration for malicious domains, and the same tactics used in other threat actor groups leading us to believe that this group may be part of a larger organization that comprises many separate teams, or that different groups share tactics, code and personnel from time to time.\n\nThough both this group and {{Winnti Group, Blackfly, Wicked Panda}} use the malware Winnti, the two groups appear to be distinct based on differences in reporting on the groups\u2019 TTPs and targeting.\n\nCould be related to {{APT 17, Deputy Dog, Elderwood, Sneaky Panda}} and/or {{APT 20, Violin Panda}}.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Industrial",
            "Manufacturing",
            "Media"
        ],
        "observed-countries": [
            "Japan",
            "South Korea",
            "Taiwan",
            "USA"
        ],
        "tools": [
            "9002 RAT",
            "BlackCoffee",
            "DeputyDog",
            "Derusbi",
            "Gh0st RAT",
            "HiKit",
            "PlugX",
            "Poison Ivy",
            "Winnti",
            "ZoxRPC",
            "ZXShell"
        ],
        "operations": [
            {
                "date": "2008/2014",
                "activity": "Operation \u201cSMN\u201d\nAxiom is responsible for directing highly sophisticated cyberespionage against numerous Fortune 500 companies, journalists, environmental groups, pro-democracy groups, software companies, academic institutions and government agencies worldwide for at least the last six years. In our coordinated effort, we performed the first ever-private sponsored interdiction against a sophisticated state sponsored advanced threat group. Our efforts detected and cleaned 43,000 separate installations of Axiom tools, including 180 of their top tier implants.\nhttp://www.novetta.com/wp-content/uploads/2014/11/Executive_Summary-Final_1.pdf"
            }
        ],
        "information": [
            "https://blogs.cisco.com/security/talos/threat-spotlight-group-72",
            "http://www.novetta.com/wp-content/uploads/2015/04/novetta_winntianalysis.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0001/"
        ],
        "uuid": "6fa5b25b-276e-4f24-a54a-86e6c05fb27f",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "axiom_group_72",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "axiom",
            "procedure_code": "g0001",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0001",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/002",
                    "technique_name": "acquire infrastructure : dns server",
                    "technique_description": "adversaries may set up their own domain name system (dns) servers that can be used during targeting. during post-compromise activity, adversaries may utilize dns traffic for various tasks, including for command and control (ex: application layer protocol). instead of hijacking existing dns servers, adversaries may opt to configure and run their own dns servers in support of operations.",
                    "procedure_description": "axiom has acquired dynamic dns services for use in the targeting of intended victims.[2]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/003",
                    "technique_name": "acquire infrastructure : virtual private server",
                    "technique_description": "adversaries may rent virtual private servers (vpss)\u00a0that can be used during targeting. there exist a variety of cloud service providers that will sell virtual machines/containers as a service. by utilizing a vps, adversaries can make it difficult to physically tie back operations to them. the use of cloud infrastructure can also make it easier for adversaries to rapidly provision, modify, and shut down their infrastructure.",
                    "procedure_description": "axiom has used vps hosting providers in targeting of intended victims.[2]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/005",
                    "technique_name": "compromise infrastructure : botnet",
                    "technique_description": "adversaries may compromise numerous third-party systems to form a botnet\u00a0that can be used during targeting. a botnet is a network of compromised systems that can be instructed to perform coordinated tasks. instead of purchasing/renting a botnet from a booter/stresser service, adversaries may build their own botnet by compromising numerous third-party systems. adversaries may also conduct a takeover of an existing botnet, such as redirecting bots to adversary-controlled c2 servers. with a botnet at their disposal, adversaries may perform follow-on activity such as large-scale phishing or distributed denial of service (ddos).",
                    "procedure_description": "axiom has used large groups of compromised machines for use as proxy nodes.[4]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "axiom has used watering hole attacks to gain access.[14]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "axiom has been observed using sql injection to gain access to systems.[16][17]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566",
                    "technique_link": "https://attack.mitre.org/techniques/T1566",
                    "technique_name": "phishing",
                    "technique_description": "adversaries may send phishing messages to gain access to victim systems. all forms of phishing are electronically delivered social engineering. phishing can be targeted, known as spearphishing. in spearphishing, a specific individual, company, or industry will be targeted by the adversary. more generally, adversaries can conduct non-targeted phishing, such as in mass malware spam campaigns.",
                    "procedure_description": "axiom has used spear phishing to initially compromise victims.[8][9]"
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
                    "procedure_description": "axiom has used previously compromised administrative accounts to escalate privileges.[15]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "axiom has used exploits for multiple vulnerabilities including cve-2014-0322, cve-2012-4792, cve-2012-1889, and cve-2013-3893.[23]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/008",
                    "technique_name": "event triggered execution : accessibility features",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features. windows contains accessibility features that may be launched with a key combination before a user has logged in (ex: when the user is on the windows logon screen). an adversary can modify the way these programs are launched to get a command prompt or backdoor without logging in to the system.",
                    "procedure_description": "axiom actors have been known to use the sticky keys replacement within rdp sessions to obtain persistence.[9]"
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
                    "procedure_description": "axiom has used previously compromised administrative accounts to escalate privileges.[15]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/008",
                    "technique_name": "event triggered execution : accessibility features",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features. windows contains accessibility features that may be launched with a key combination before a user has logged in (ex: when the user is on the windows logon screen). an adversary can modify the way these programs are launched to get a command prompt or backdoor without logging in to the system.",
                    "procedure_description": "axiom actors have been known to use the sticky keys replacement within rdp sessions to obtain persistence.[9]"
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
                    "procedure_description": "axiom has used previously compromised administrative accounts to escalate privileges.[15]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553",
                    "technique_link": "https://attack.mitre.org/techniques/T1553",
                    "technique_name": "subvert trust controls",
                    "technique_description": "adversaries may undermine security controls that will either warn users of untrusted activity or prevent execution of untrusted programs. operating systems and security products may contain mechanisms to identify programs or websites as possessing some level of trust. examples of such features would include a program being allowed to run because it is signed by a valid code signing certificate, a program prompting the user with a warning because it has an attribute set from being downloaded from the internet, or getting an indication that you are about to connect to an untrusted site.",
                    "procedure_description": "axiom has used digital certificates to deliver malware.[4]"
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
                    "procedure_description": "axiom has used previously compromised administrative accounts to escalate privileges.[15]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "axiom has been known to dump credentials.[7]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1563.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1563/002",
                    "technique_name": "remote service session hijacking : rdp hijacking",
                    "technique_description": "adversaries may hijack a legitimate user\u2019s remote desktop session to move laterally within an environment. remote desktop is a common feature in operating systems. it allows a user to log into an interactive session with a system desktop graphical user interface on a remote system. microsoft refers to its implementation of the remote desktop protocol (rdp) as remote desktop services (rds).",
                    "procedure_description": "axiom has targeted victims with remote administration tools including rdp.[5]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "axiom has used rdp during operations.[10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "axiom has compressed and encrypted data prior to exfiltration.[7]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "axiom has collected data from a compromised network.[18]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/002",
                    "technique_name": "data obfuscation : steganography",
                    "technique_description": "adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. steganographic techniques can be used to hide data in digital messages that are transferred between systems. this hidden information can be used for command and control of compromised systems. in some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control.",
                    "procedure_description": "axiom has used steganography to hide its c2 communications.[1]"
                }
            ]
        }
    ]
};