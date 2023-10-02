var threatdata = {
    "name": "GreyEnergy",
    "alias": "GreyEnergy",
    "category": "Malware",
    "type": "ICS malware, Backdoor, Downloader, Tunneling",
    "modified": "2022-02-24",
    "all_data": {
        "tool": "GreyEnergy",
        "names": [
            {
                "name": "GreyEnergy"
            }
        ],
        "description": "(ESET) This malware requires administrator privileges, which must already have been obtained before this stage is reached. According to our research, the GreyEnergy actors deploy this backdoor mainly on two types of endpoints: servers with high uptime, and workstations used to control ICS environments.\n\nTo make communication with command and control (C&C) servers stealthier, the malicious actors may deploy additional software on internal servers in the compromised network, so each server would act as a proxy. Such a proxy C&C redirects requests from infected nodes inside the network to an external C&C server on the internet. This way, it might be less suspicious to a defender who notices that multiple computers are \u201ctalking\u201d to an internal server, rather than to a remote server. This technique can be also used by attackers to control the malware in different segments of a compromised network. A similar technique using internal servers as C&C proxies was used by the Duqu 2.0 APT.\n\nIf an affected organization has public-facing web servers connected to an internal network, the attackers may deploy \u201cbackup\u201d backdoors onto these servers. These backdoors are used to regain access to the network in the event that the main backdoors are detected and removed.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Backdoor",
            "Downloader",
            "Tunneling"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/10/ESET_GreyEnergy.pdf",
            "https://www.eset.com/int/greyenergy-exposed/",
            "https://www.nozominetworks.com/2019/02/12/blog/greyenergy-malware-research-paper-maldoc-to-backdoor/",
            "https://securelist.com/greyenergys-overlap-with-zebrocy/89506/",
            "https://github.com/NozomiNetworks/greyenergy-unpacker"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0342/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grey_energy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:greyenergy"
        ],
        "uuid": "a0fb90eb-ee97-4be7-a141-64b5d0a2d223",
        "last-card-change": "2020-06-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "greyenergy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.nviso.eu/2022/02/24/threat-update-ukraine-russia-tensions/",
            "date": "2022-02-24",
            "organization": "nviso",
            "author": "Michel Coene",
            "title": "Threat Update \u2013 Ukraine & Russia conflict",
            "categories": [
                "EternalPetya",
                "GreyEnergy",
                "HermeticWiper",
                "Industroyer",
                "KillDisk",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-viking",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON VIKING",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "GreyEnergy",
                "Industroyer",
                "KillDisk",
                "TeleBot",
                "TeleDoor"
            ]
        },
        {
            "data_url": "https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf",
            "date": "2019-05-08",
            "organization": "Verizon Communications Inc.",
            "author": "Verizon Communications Inc.",
            "title": "2019 Data Breach Investigations Report",
            "categories": [
                "BlackEnergy",
                "Cobalt Strike",
                "DanaBot",
                "Gandcrab",
                "GreyEnergy",
                "Mirai",
                "Olympic Destroyer",
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.nozominetworks.com/2019/02/12/blog/greyenergy-malware-research-paper-maldoc-to-backdoor/",
            "date": "2019-02-12",
            "organization": "Nozomi Networks",
            "author": "Alessandro Di Pinto",
            "title": "GreyEnergy Malware Research Paper: Maldoc to Backdoor",
            "categories": [
                "GreyEnergy"
            ]
        },
        {
            "data_url": "https://github.com/NozomiNetworks/greyenergy-unpacker",
            "date": "2019-01-25",
            "organization": "Github (NozomiNetworks)",
            "author": "NozomiNetworks",
            "title": "Toolkit collection developed to help malware analysts dissecting and detecting the packer used by GreyEnergy samples.",
            "categories": [
                "GreyEnergy"
            ]
        },
        {
            "data_url": "https://securelist.com/greyenergys-overlap-with-zebrocy/89506/",
            "date": "2019-01-24",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "GreyEnergy\u2019s overlap with Zebrocy",
            "categories": [
                "GreyEnergy",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/10/ESET_GreyEnergy.pdf",
            "date": "2018-10-18",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "GREYENERGY: A successor to BlackEnergy",
            "categories": [
                "Felixroot",
                "GreyEnergy"
            ]
        },
        {
            "data_url": "https://www.eset.com/int/greyenergy-exposed/",
            "date": "2018-10-17",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "ESET unmasks \u2018GREYENERGY\u2019 cyber-espionage group",
            "categories": [
                "GreyEnergy",
                "GreyEnergy"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/10/17/greyenergy-updated-arsenal-dangerous-threat-actors/",
            "date": "2018-10-17",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "GreyEnergy: Updated arsenal of one of the most dangerous threat actors",
            "categories": [
                "GreyEnergy"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0034",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Sandworm Team",
            "categories": [
                "CyclopsBlink",
                "Exaramel",
                "BlackEnergy",
                "EternalPetya",
                "Exaramel",
                "GreyEnergy",
                "KillDisk",
                "MimiKatz",
                "Olympic Destroyer",
                "Sandworm"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "greyenergy",
            "procedure_code": "s0342",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0342",
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
                    "procedure_description": "greyenergy uses cmd.exe to execute itself in-memory.[121]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "greyenergy chooses a service, drops a dll file, and writes it to that servicedll registry key.[60]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "greyenergy chooses a service, drops a dll file, and writes it to that servicedll registry key.[60]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "greyenergy has a module to inject a pe binary into a remote process.[4]"
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
                    "procedure_description": "greyenergy can securely delete a file by hooking into the deletefilea and deletefilew functions in the windows api.[91]"
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
                    "procedure_description": "greyenergy modifies conditions in the registry and adds keys.[66]"
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
                    "procedure_description": "greyenergy encrypts its configuration files with aes-256 and also encrypts its strings.[122]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "greyenergy is packed for obfuscation.[46]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "greyenergy has a module to inject a pe binary into a remote process.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "greyenergy digitally signs the malware with a code-signing certificate.[37]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "greyenergy uses psexec locally in order to execute rundll32.exe at the highest privileges (ntauthority\\system).[45]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "greyenergy has a module to harvest pressed keystrokes.[75]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "greyenergy has a module for mimikatz to collect windows credentials from the victim\u2019s machine.[35]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "greyenergy enumerates all windows services.[22]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "greyenergy has a module to harvest pressed keystrokes.[75]"
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
                    "procedure_description": "greyenergy uses http and https for c2 communications.[123]"
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
                    "procedure_description": "greyenergy encrypts communications using aes256.[57]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "greyenergy encrypts communications using rsa-2048.[25]"
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
                    "procedure_description": "greyenergy can download additional modules and payloads.[176]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "greyenergy has used tor relays for command and control servers.[11]"
                }
            ]
        }
    ]
};