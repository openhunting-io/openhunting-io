var threatdata = {
    "name": "TA459",
    "alias": "TA459",
    "category": "APT",
    "type": "-",
    "modified": "2022-07-20",
    "all_data": {
        "actor": "TA459",
        "names": [
            {
                "name": "TA459",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Proofpoint) On April 20 [2017], Proofpoint observed a targeted campaign focused on financial analysts working at top global financial firms operating in Russia and neighboring countries. These analysts were linked by their coverage of the telecommunications industry, making this targeting very similar to, and likely a continuation of, activity described in our \u201cIn Pursuit of Optical Fibers and Troop Intel\u201d blog. This time, however, attackers opportunistically used spear-phishing emails with a Microsoft Word attachment exploiting the recently patched CVE-2017-0199 to deploy the ZeroT Trojan, which in turn downloaded the PlugX Remote Access Trojan (RAT).\n\nProofpoint is tracking this attacker, believed to operate out of China, as TA459. The actor typically targets Central Asian countries, Russia, Belarus, Mongolia, and others. TA549 possesses a diverse malware arsenal including PlugX, NetTraveler, and ZeroT.",
        "observed-sectors": [
            "Financial",
            "Telecommunications",
            "journalists"
        ],
        "observed-countries": [
            "Belarus",
            "Mongolia",
            "Russia",
            "Central Asia others"
        ],
        "tools": [
            "Gh0st RAT",
            "NetTraveler",
            "PlugX",
            "ZeroT"
        ],
        "operations": [
            {
                "date": "2022-04",
                "activity": "Tracing State-Aligned Activity Targeting Journalists, Media\nhttps://www.proofpoint.com/us/blog/threat-insight/above-fold-and-your-inbox-tracing-state-aligned-activity-targeting-journalists"
            }
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/apt-targets-financial-analysts"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0062/"
        ],
        "uuid": "da14ab64-16ed-4d61-93a7-69cf3f06115d",
        "last-card-change": "2022-07-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta459",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0062/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: TA459",
            "categories": [
                "TA459"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/apt-targets-financial-analysts",
            "date": "2017-04-27",
            "organization": "Proofpoint",
            "author": "Axel F",
            "title": "APT Targets Financial Analysts with CVE-2017-0199",
            "categories": [
                "TA459"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ta459",
            "procedure_code": "g0062",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0062",
            "techniques": [
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
                    "procedure_description": "ta459 has targeted victims using spearphishing emails with malicious microsoft word attachments.[212]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "ta459 has used powershell for execution of a payload.[220]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "ta459 has a vbscript for execution.[153]"
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
                    "procedure_description": "ta459 has exploited microsoft word vulnerability cve-2017-0199 for execution.[81]"
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
                    "procedure_description": "ta459 has attempted to get victims to open malicious microsoft word attachment sent via spearphishing.[225]"
                }
            ]
        }
    ]
};