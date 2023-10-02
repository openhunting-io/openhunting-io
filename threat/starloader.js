var threatdata = {
    "name": "StarLoader",
    "alias": "StarLoader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "StarLoader",
        "names": [
            {
                "name": "StarLoader"
            }
        ],
        "description": "Starloader is a loader component that has been observed loading {{Felismus}} and associated tools.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.zdnet.com/article/this-stealthy-cat-and-mouse-hacking-campaign-aims-to-steal-diplomatic-secrets/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0188/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.starloader"
        ],
        "uuid": "48a30f28-7841-492e-b26f-884f1ba5272a",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "starloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/connect/blogs/sowbug-cyber-espionage-group-targets-south-american-and-southeast-asian-governments",
            "date": "2017-11-07",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Sowbug: Cyber espionage group targets South American and Southeast Asian governments",
            "categories": [
                "Felismus",
                "StarLoader",
                "Sowbug"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "starloader",
            "procedure_code": "s0188",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0188",
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
                    "procedure_description": "starloader decrypts and executes shellcode from a file called stars.jps.[222]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "starloader has masqueraded as legitimate software update packages such as adobe acrobat reader and intel.[156]"
                }
            ]
        }
    ]
};