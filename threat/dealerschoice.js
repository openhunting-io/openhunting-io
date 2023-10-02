var threatdata = {
    "name": "DealersChoice",
    "alias": "DealersChoice",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "DealersChoice",
        "names": [
            {
                "name": "DealersChoice"
            }
        ],
        "description": "(Palo Alto) Weaponizing documents to exploit known Microsoft Word vulnerabilities is a common tactic deployed by many adversary groups, but in this example, we discovered RTF documents containing embedded OLE Word documents further containing embedded Adobe Flash (.SWF) files, designed to exploit Flash vulnerabilities rather than Microsoft Word. We have named this tool that generates these documents DealersChoice.\n\nIn addition to the discovery of this new tactic, we were able to identify two different variants of the embedded SWF files: the first being a standalone version containing a compressed payload which we have dubbed DealersChoice.A and a second variant being a much more modular version deploying additional anti-analysis techniques which we have dubbed DealersChoice.B. The unearthing of DealersChoice.B suggests a possible code evolution of the initial DealersChoice.A variant. Also, artifacts within DealersChoice suggests that Sofacy created it with the intentions to target both Windows and OSX operating systems, as DealersChoice could potentially be cross-platform due to its use of Adobe Flash files.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-dealerschoice-sofacys-flash-player-exploit-platform/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0243/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DealersChoice"
        ],
        "uuid": "8c0669d9-d7f3-401a-acfa-58e3a502e38e",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dealerschoice",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "dealerschoice",
            "procedure_code": "s0243",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0243",
            "techniques": [
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
                    "procedure_description": "dealerschoice makes modifications to open-source scripts from github and executes them on the victim\u2019s machine.[101]"
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
                    "procedure_description": "dealerschoice leverages vulnerable versions of flash to perform execution.[43]"
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
                    "procedure_description": "dealerschoice uses http for communication with the c2 server.[95]"
                }
            ]
        }
    ]
};