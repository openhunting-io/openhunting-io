var threatdata = {
    "name": "RDFSNIFFER",
    "alias": "RDFSNIFFER",
    "category": "Malware",
    "type": "ATM malware, Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "RDFSNIFFER",
        "names": [
            {
                "name": "RDFSNIFFER"
            }
        ],
        "description": "(FireEye) RDFSNIFFER, a payload of {{Boostwrite}}, appears to have been developed to tamper with NCR Corporation's \u201cAloha Command Center\u201d client. NCR Aloha Command Center is a remote administration toolset designed to manage and troubleshoot systems within payment card processing sectors running the Command Center Agent. The malware loads into the same process as the Command Center process by abusing the DLL load order of the legitimate Aloha utility. Mandiant provided this information to NCR.",
        "category": "Malware",
        "type": [
            "ATM malware",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/10/mahalo-fin7-responding-to-new-tools-and-techniques.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0416/"
        ],
        "uuid": "d23c84b9-1a28-4c39-a9ab-3d9e9292030d",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rdfsniffer",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rdfsniffer",
            "procedure_code": "s0416",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0416",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "rdfsniffer has used several win32 api functions to interact with the victim machine.[144]"
                },
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
                    "procedure_description": "rdfsniffer has the capability of deleting local files.[195]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "rdfsniffer hooks several win32 api functions to hijack elements of the remote system management user-interface.[12]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "rdfsniffer hooks several win32 api functions to hijack elements of the remote system management user-interface.[12]"
                }
            ]
        }
    ]
};