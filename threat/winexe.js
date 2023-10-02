var threatdata = {
    "name": "Winexe",
    "alias": "Winexe",
    "category": "Tools",
    "type": "Remote command",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Winexe",
        "names": [
            {
                "name": "Winexe"
            }
        ],
        "description": "Winexe is a lightweight, open source tool similar to {{PsExec}} designed to allow system administrators to execute commands on remote servers. Winexe is unique in that it is a GNU/Linux based client.",
        "category": "Tools",
        "type": [
            "Remote command"
        ],
        "information": [
            "https://github.com/skalkoto/winexe/",
            "https://netzpolitik.org/2015/digital-attack-on-german-parliament-investigative-report-on-the-hack-of-the-left-party-infrastructure-in-bundestag/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0191/"
        ],
        "uuid": "ac51ad41-80d8-4d30-b162-763f68df1fe1",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winexe",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "winexe",
            "procedure_code": "s0191",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0191",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "winexe installs a service on the remote system, executes the command, then uninstalls the service.[63]"
                }
            ]
        }
    ]
};