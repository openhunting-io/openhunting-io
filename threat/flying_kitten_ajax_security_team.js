var threatdata = {
    "name": "Flying Kitten, Ajax Security Team",
    "alias": "Flying Kitten, Ajax Security Team, Group 26",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "Flying Kitten, Ajax Security Team",
        "names": [
            {
                "name": "Flying Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Ajax Security Team",
                "name-giver": "FireEye"
            },
            {
                "name": "Group 26",
                "name-giver": "Talos"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "(FireEye) Members of this group have accounts on popular Iranian hacker forums such as ashiyane[.]org and shabgard[.]org, and they have engaged in website defacements under the group name \u201cAjaxTM\u201d since 2010. By 2014, the Ajax Security Team had transitioned from performing defacements (their last defacement was in December 2013) to malware-based espionage, using a methodology consistent with other advanced persistent threat actors in this region.\n\n(Crowdstrike) CrowdStrike Intelligence has also been tracking and reporting internally on this threat group since mid-January 2014 under the name FLYING KITTEN, and since that time has seen targeting of multiple U.S.-based defense contractors as well as political dissidents.",
        "observed-sectors": [
            "Defense",
            "dissidents"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "Stealer"
        ],
        "operations": [
            {
                "date": "2013",
                "activity": "Operation \u201cSaffron Rose\u201d\nhttps://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-operation-saffron-rose.pdf"
            }
        ],
        "information": [
            "https://www.crowdstrike.com/blog/cat-scratch-fever-crowdstrike-tracks-newly-reported-iranian-actor-flying-kitten/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0130/"
        ],
        "uuid": "9d17cae3-0777-428b-b9b7-fcbdf52af5ba",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flying_kitten_ajax_security_team",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/saffron-rose",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Saffron Rose",
            "categories": [
                "Flying Kitten"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-operation-saffron-rose.pdf",
            "date": "2014-08-13",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "OPERATION SAFFRON ROSE",
            "categories": [
                "Flying Kitten"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/cat-scratch-fever-crowdstrike-tracks-newly-reported-iranian-actor-flying-kitten/",
            "date": "2014-05-13",
            "organization": "CrowdStrike",
            "author": "Matt Dahl",
            "title": "Cat Scratch Fever: CrowdStrike Tracks Newly Reported Iranian Actor as FLYING KITTEN",
            "categories": [
                "Flying Kitten"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ajax security team",
            "procedure_code": "g0130",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0130",
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
                    "procedure_description": "ajax security team has used personalized spearphishing attachments.[3]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/003",
                    "technique_name": "phishing : spearphishing via service",
                    "technique_description": "adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems. spearphishing via service is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of third party services rather than directly via enterprise email channels.",
                    "procedure_description": "ajax security team has used various social media channels to spearphish victims.[1]"
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
                    "procedure_description": "ajax security team has lured victims into executing malicious files.[4]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "ajax security team has used firemalv custom-developed malware, which collected passwords from the firefox browser storage.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "ajax security team has used cwoolger and mpk, custom-developed malware, which recorded all keystrokes on an infected system.[10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "ajax security team has used cwoolger and mpk, custom-developed malware, which recorded all keystrokes on an infected system.[10]"
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
                    "procedure_description": "ajax security team has used wrapper/gholee, custom-developed malware, which downloaded additional malware to the infected system.[8]"
                }
            ]
        }
    ]
};