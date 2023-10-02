var threatdata = {
    "name": "certutil",
    "alias": "certutil, certutil.exe",
    "category": "Tools",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "certutil",
        "names": [
            {
                "name": "certutil"
            },
            {
                "name": "certutil.exe"
            }
        ],
        "description": "certutil is a command-line utility that can be used to obtain certificate authority information and configure Certificate Services.",
        "category": "Tools",
        "information": [
            "https://www.bleepingcomputer.com/news/security/certutilexe-could-allow-attackers-to-download-malware-while-bypassing-av/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0160/"
        ],
        "uuid": "4542b4a3-4a50-43b5-a4a6-0fda43f306ae",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "certutil",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "certutil",
            "procedure_code": "s0160",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0160",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "certutil has been used to decode binaries hidden inside certificate files as base64 information.[1]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/004",
                    "technique_name": "subvert trust controls : install root certificate",
                    "technique_description": "adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. root certificates are used in public key cryptography to identify a root certificate authority (ca). when a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate. certificates are commonly used for establishing secure tls/ssl communications within a web browser. when a user attempts to browse a website that presents a certificate that is not trusted an error message will be displayed to warn the user of the security risk. depending on the security settings, the browser may not allow the user to establish a connection to the website.",
                    "procedure_description": "certutil can be used to install browser root certificates as a precursor to performing adversary-in-the-middle between connections to banking websites. example command: certutil -addstore -f -user root programdata\\cert512121.der.[6]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "certutil may be used to base64 encode collected data.[18][19]"
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
                    "procedure_description": "certutil can be used to download files from a given url.[99][100]"
                }
            ]
        }
    ]
};