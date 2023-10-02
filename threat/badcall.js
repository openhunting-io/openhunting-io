var threatdata = {
    "name": "BADCALL",
    "alias": "BADCALL",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-04-20",
    "all_data": {
        "tool": "BADCALL",
        "names": [
            {
                "name": "BADCALL"
            }
        ],
        "description": "(US-CERT) This report provides analysis of four (4) malicious executable files. The first three (3) files are 32-bit Windows executables that function as proxy servers and implement a 'Fake TLS' method similar to the behavior described in a previously published NCCIC report, MAR-10135536-B. The fourth file is an Android Package Kit (APK) file designed to run on Android platforms as a fully functioning Remote Access Tool (RAT).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar19-252a"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0245/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.badcall",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.badcall"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BADCALL"
        ],
        "uuid": "d8dc5d70-d4ba-42ab-9637-a4cac3b2bb6b",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "badcall",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2023/04/20/linux-malware-strengthens-links-lazarus-3cx-supply-chain-attack",
            "date": "2023-04-20",
            "organization": "ESET Research",
            "author": "Peter K\u00e1lnai",
            "title": "Linux malware strengthens links between Lazarus and the 3CX supply\u2011chain attack",
            "categories": [
                "BADCALL",
                "3CX Backdoor",
                "BADCALL",
                "IconicStealer"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/04/simple-malware-av-evasion.html",
            "date": "2021-09-04",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 1",
            "categories": [
                "4h_rat",
                "Azorult",
                "BADCALL",
                "BadNews",
                "BazarBackdoor",
                "Cardinal RAT"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/ar19-252a",
            "date": "2019-09-09",
            "organization": "CISA",
            "author": "CISA",
            "title": "Malware Analysis Report (AR19-252A)",
            "categories": [
                "BADCALL",
                "BADCALL"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-B_WHITE.PDF",
            "date": "2017-12-13",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (MAR) - 10135536-B",
            "categories": [
                "BADCALL",
                "Bankshot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "badcall",
            "procedure_code": "s0245",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0245",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "badcall disables the windows firewall before binding to a port.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "badcall modifies the firewall registry key system\\currentcontrolset\\services\\sharedaccess\\parameters\\firewallpolicy\\standardprofilegloballyopenports\\list.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "badcall collects the computer name and host name on the compromised system.[45]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "badcall collects the network adapter information.[30]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/003",
                    "technique_name": "data obfuscation : protocol impersonation",
                    "technique_description": "adversaries may impersonate legitimate protocols or web service traffic to disguise command and control activity and thwart analysis efforts. by impersonating legitimate protocols or web services, adversaries can make their command and control traffic blend in with legitimate network traffic.",
                    "procedure_description": "badcall uses a faketls method during c2.[1]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "badcall encrypts c2 traffic using an xor/add cipher.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "badcall communicates on ports 443 and 8000 with a faketls method.[6]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "badcall functions as a proxy server between the victim and c2 server.[5]"
                }
            ]
        }
    ]
};