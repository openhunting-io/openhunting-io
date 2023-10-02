var threatdata = {
    "name": "WindTail",
    "alias": "WindTail",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WindTail",
        "names": [
            {
                "name": "WindTail"
            }
        ],
        "description": "(Carbon Black) One of the custom macOS backdoors employed by this group has been named WindTail and is typically delivered via email in a zip file containing an application masquerading as an Office document.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.carbonblack.com/2019/01/18/tau-threat-intelligence-notification-windtail-osx/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0466/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.windtail"
        ],
        "uuid": "f81b4f3d-e2db-4fb6-847c-a5fae410e157",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "windtail",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/04/vb2019-paper-cyber-espionage-middle-east-unravelling-osxwindtail/",
            "date": "2019-12-12",
            "organization": "Virus Bulletin",
            "author": "Patrick Wardle",
            "title": "Cyber espionage in the Middle East: unravelling OSX.WindTail",
            "categories": [
                "WindTail"
            ]
        },
        {
            "data_url": "https://posts.specterops.io/introducing-venator-a-macos-tool-for-proactive-detection-34055a017e56",
            "date": "2019-04-24",
            "organization": "SpecterOps",
            "author": "Richie Cyrus",
            "title": "Introducing Venator: A macOS tool for proactive detection",
            "categories": [
                "AppleJeus",
                "WindTail"
            ]
        },
        {
            "data_url": "https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1554718868.pdf",
            "date": "2019-04-08",
            "organization": "SANS Cyber Security Summit",
            "author": "Taha Karim",
            "title": "Trails of WindShift",
            "categories": [
                "WindTail",
                "ZhMimikatz"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x3D.html",
            "date": "2019-01-15",
            "organization": "Obective See",
            "author": "Patrick Wardle",
            "title": "Middle East Cyber-Espionage: analyzing WindShift's implant: OSX.WindTail (part 2)",
            "categories": [
                "WindTail"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x3B.html",
            "date": "2018-12-20",
            "organization": "Objective-See",
            "author": "Patrick Wardle",
            "title": "Middle East Cyber-Espionage: analyzing WindShift's implant: OSX.WindTail (part 1)",
            "categories": [
                "WindTail"
            ]
        },
        {
            "data_url": "https://www.forbes.com/sites/thomasbrewster/2018/08/30/apple-mac-loophole-breached-in-middle-east-hacks/",
            "date": "2018-08-30",
            "organization": "Forbes",
            "author": "Thomas Brewster",
            "title": "Hackers Are Exposing An Apple Mac Weakness In Middle East Espionage",
            "categories": [
                "WindTail"
            ]
        },
        {
            "data_url": "https://gsec.hitb.org/materials/sg2018/D1%20COMMSEC%20-%20In%20the%20Trails%20of%20WINDSHIFT%20APT%20-%20Taha%20Karim.pdf",
            "date": "2018",
            "organization": "DarkMatter",
            "author": "Taha K.",
            "title": "IN THE TRAILS OF WINDSHIFTAPT",
            "categories": [
                "WindTail",
                "WindShift"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "windtail",
            "procedure_code": "s0466",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0466",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/004",
                    "technique_name": "command and scripting interpreter : unix shell",
                    "technique_description": "adversaries may abuse unix shell commands and scripts for execution. unix shells are the primary command prompt on linux and macos systems, though many variations of the unix shell exist (e.g. sh, bash, zsh, etc.) depending on the specific os or distribution. unix shells can control every aspect of a system, with certain commands requiring elevated privileges.",
                    "procedure_description": "windtail can use the open command to execute an application.[43]"
                },
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
                    "procedure_description": "windtail can invoke apple apis contentsofdirectoryatpath, pathextension, and (string) compare.[185]"
                },
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
                    "procedure_description": "windtail has the ability to decrypt strings using hard-coded aes keys.[256]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "windtail can instruct the os to execute an application without a dock icon or menu.[39]"
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
                    "procedure_description": "windtail has the ability to receive and execute a self-delete command.[252]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "windtail has used icons mimicking ms office files to mask payloads.[45]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/001",
                    "technique_name": "masquerading : invalid code signature",
                    "technique_description": "adversaries may attempt to mimic features of valid code signatures to increase the chance of deceiving a user, analyst, or tool. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with. adversaries can copy the metadata and signature information from a signed program, then use it as a template for an unsigned program. files with invalid code signatures will fail digital signature validation checks, but they may appear more legitimate to users and security tools may improperly handle these files.",
                    "procedure_description": "windtail has been incompletely signed with revoked certificates.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "windtail can be delivered as a compressed, encrypted, and encoded payload.[356]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "windtail has the ability to enumerate the users home directory and the path to its own application bundle.[325][326]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "windtail has the ability to generate the current date and time.[81]"
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
                    "procedure_description": "windtail has the ability to use the macos built-in zip utility to archive files.[72]"
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
                    "procedure_description": "windtail can identify and add files that possess specific file extensions to an array for archiving.[51]"
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
                    "procedure_description": "windtail has the ability to use http for c2 communications.[367]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "windtail has the ability to automatically exfiltrate files using the macos built-in utility /usr/bin/curl.[31]"
                }
            ]
        }
    ]
};