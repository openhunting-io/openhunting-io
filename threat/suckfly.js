var threatdata = {
    "name": "Suckfly",
    "alias": "Suckfly",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Suckfly",
        "names": [
            {
                "name": "Suckfly",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "(Symantec) In March 2016, Symantec published a blog on Suckfly, an advanced cyberespionage group that conducted attacks against a number of South Korean organizations to steal digital certificates. Since then we have identified a number of attacks over a two-year period, beginning in April 2014, which we attribute to Suckfly. The attacks targeted high-profile targets, including government and commercial organizations. These attacks occurred in several different countries, but our investigation revealed that the primary targets were individuals and organizations primarily located in India.\n\nWhile there have been several Suckfly campaigns that infected organizations with the group\u2019s custom malware Backdoor.Nidiran, the Indian targets show a greater amount of post-infection activity than targets in other regions. This suggests that these attacks were part of a planned operation against specific targets in India.",
        "observed-sectors": [
            "Entertainment",
            "Financial",
            "Government",
            "Healthcare",
            "Media",
            "Shipping and Logistics",
            "E-commerce, Software development and Video game development"
        ],
        "observed-countries": [
            "India"
        ],
        "tools": [
            "gsecdump",
            "Nidiran",
            "smbscan",
            "Windows Credentials Editor"
        ],
        "operations": [
            {
                "date": "2014-04",
                "activity": "The first known Suckfly campaign began in April of 2014. During our investigation of the campaign, we identified a number of global targets across several industries who were attacked in 2015. Many of the targets we identified were well known commercial organizations located in India.\nhttps://www.symantec.com/connect/blogs/indian-organizations-targeted-suckfly-attacks"
            },
            {
                "date": "2015 Late",
                "activity": "We discovered Suckfly, an advanced threat group, conducting targeted attacks using multiple stolen certificates, as well as hacktools and custom malware. The group had obtained the certificates through pre-attack operations before commencing targeted attacks against a number of government and commercial organizations spread across multiple continents over a two-year period. This type of activity and the malicious use of stolen certificates emphasizes the importance of safeguarding certificates to prevent them from being used maliciously.\nhttps://www.symantec.com/connect/blogs/suckfly-revealing-secret-life-your-code-signing-certificates"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0039/"
        ],
        "uuid": "155b1a73-17ac-449e-bdcd-54a79119b397",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "suckfly",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "suckfly",
            "procedure_code": "g0039",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0039",
            "techniques": [
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
                    "procedure_description": "suckfly used legitimate account credentials that they dumped to navigate the internal victim network as though they were the legitimate account owner.[61]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "several tools used by suckfly have been command-line driven.[319]"
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
                    "procedure_description": "suckfly used legitimate account credentials that they dumped to navigate the internal victim network as though they were the legitimate account owner.[61]"
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
                    "procedure_description": "suckfly used legitimate account credentials that they dumped to navigate the internal victim network as though they were the legitimate account owner.[61]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "suckfly has used stolen certificates to sign its malware.[67]"
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
                    "procedure_description": "suckfly used legitimate account credentials that they dumped to navigate the internal victim network as though they were the legitimate account owner.[61]"
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
                    "procedure_description": "suckfly used a signed credential-dumping tool to obtain victim account credentials.[15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "suckfly the victim's internal network for hosts with ports 8080, 5900, and 40 open.[59]"
                }
            ]
        }
    ]
};