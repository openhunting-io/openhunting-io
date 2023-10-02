var threatdata = {
    "name": "GoldFinder",
    "alias": "GoldFinder",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "GoldFinder",
        "names": [
            {
                "name": "GoldFinder"
            }
        ],
        "description": "(Microsoft) Another tool written in Go, GoldFinder was most likely used as a custom HTTP tracer tool that logs the route or hops that a packet takes to reach a hardcoded C2 server. When launched, the malware issues an HTTP request for a hardcoded IP address (e.g., hxxps://185[.]225[.]69[.]69/) and logs the HTTP response to a plaintext log file (e.g., loglog.txt created in the present working directory).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0597/"
        ],
        "uuid": "6cb4acd2-9c86-4cf4-a037-4107feac5704",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "goldfinder",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "goldfinder",
            "procedure_code": "s0597",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0597",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1016/001",
                    "technique_name": "system network configuration discovery : internet connection discovery",
                    "technique_description": "adversaries may check for internet connectivity on compromised systems. this may be performed during automated discovery and can be accomplished in numerous ways such as using ping, tracert, and get requests to websites.",
                    "procedure_description": "goldfinder performed http get requests to check internet connectivity and identify http proxy servers and other redirectors that an http request traveled through.[3]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "goldfinder logged and stored information related to the route or hops a packet took from a compromised machine to a hardcoded c2 server, including the target c2 url, http response/status code, http response headers and values, and data received from the c2 node.[17]"
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
                    "procedure_description": "goldfinder has used http for c2.[143]"
                }
            ]
        }
    ]
};