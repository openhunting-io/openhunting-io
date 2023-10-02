var threatdata = {
    "name": "pngdowner",
    "alias": "pngdowner",
    "category": "Malware",
    "type": "Backdoor, Credential stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "pngdowner",
        "names": [
            {
                "name": "pngdowner"
            }
        ],
        "description": "(CrowdStrike) he pngdowner malware is a simple tool constructed using Microsoft Visual studio and implemented via single C++ source code file.\n\nInitially, the malware will perform a connectivity check to a hard-coded URL (http://www.microsoft.com), using a constant user agent Mozilla/4.0 (Compatible; MsIE 6.0;). If this request fails, the malware will attempt to extract proxy details and credentials from Windows Protected storage, and from the IE Credentials store using publicly known methods, using the proxy credentials for subsequent requests if they enable outbound HTTP access. An initial request is then made to the hard-coded C2 server and initial URI \u2013 forming a URL of the form (in this sample) http://login.stream-media.net/files/xx11/index.asp?95027775, where the numerical parameter represents a random integer. A hard-coded user agent of myagent is used for this request, and subsequent communication with the C2 server.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://cdn0.vox-cdn.com/assets/4589853/crowdstrike-intelligence-report-putter-panda.original.pdf",
            "https://www.iocbucket.com/iocs/7f7999ab7f223409ea9ea10cff82b064ce2a1a31"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0067/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pngdowner"
        ],
        "uuid": "37964559-63c8-4384-ad64-fdb22fd4796d",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pngdowner",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0024",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Putter Panda",
            "categories": [
                "4h_rat",
                "pngdowner",
                "APT2"
            ]
        },
        {
            "data_url": "https://www.iocbucket.com/iocs/7f7999ab7f223409ea9ea10cff82b064ce2a1a31",
            "date": "2014-03-30",
            "organization": "IOC Bucket",
            "author": "IOC Bucket",
            "title": "IOC Bucket for Putter Panda",
            "categories": [
                "pngdowner"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "pngdowner",
            "procedure_code": "s0067",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0067",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "pngdowner deletes content from c2 communications that was saved to the user's temporary directory.[177]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "if an initial connectivity check fails, pngdowner attempts to extract proxy details and credentials from windows protected storage and from the ie credentials store. this allows the adversary to use the proxy credentials for subsequent requests if they enable outbound http access.[27]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "pngdowner uses http for command and control.[1]"
                }
            ]
        }
    ]
};