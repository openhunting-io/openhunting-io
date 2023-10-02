var threatdata = {
    "name": "HIDEDRV",
    "alias": "HIDEDRV",
    "category": "Malware",
    "type": "Rootkit, Loader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "HIDEDRV",
        "names": [
            {
                "name": "HIDEDRV"
            }
        ],
        "description": "(ESET) The rootkit is configured to hide {{Downdelph}} and itself from the user, and also to inject Downdelph into explorer.exe. We are now going to describe how those two operations are implemented.",
        "category": "Malware",
        "type": [
            "Rootkit",
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part3.pdf",
            "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "http://www.sekoia.fr/blog/wp-content/uploads/2016/10/Rootkit-analysis-Use-case-on-HIDEDRV-v1.6.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0135/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hidedrv"
        ],
        "uuid": "bc3d715a-2e5c-42ae-8450-f01e7f729af1",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hidedrv",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "hidedrv",
            "procedure_code": "s0135",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0135",
            "techniques": [
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "hidedrv injects a dll for downdelph into the explorer.exe process.[35]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "hidedrv injects a dll for downdelph into the explorer.exe process.[35]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "hidedrv is a rootkit that hides certain operating system artifacts.[15]"
                }
            ]
        }
    ]
};