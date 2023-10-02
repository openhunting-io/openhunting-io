var threatdata = {
    "name": "Ebury",
    "alias": "Ebury",
    "category": "Malware",
    "type": "Backdoor, Credential stealer, Botnet",
    "modified": "2021-04-21",
    "all_data": {
        "tool": "Ebury",
        "names": [
            {
                "name": "Ebury"
            }
        ],
        "description": "(ESET) An OpenSSH backdoor used to keep control of the servers and steal credentials.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2014/03/operation_windigo.pdf",
            "https://www.welivesecurity.com/2014/02/21/an-in-depth-analysis-of-linuxebury/",
            "https://www.welivesecurity.com/wp-content/uploads/2018/12/ESET-The_Dark_Side_of_the_ForSSHe.pdf",
            "https://www.welivesecurity.com/2017/10/30/windigo-ebury-update-2/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0377/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.ebury"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Ebury"
        ],
        "uuid": "6e2c66f6-347d-427f-929e-425e298bb480",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ebury",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://csirt.gov.it/data/cms/posts/582/attachments/66ca2e9a-68cd-4df5-81a2-674c31a699c2/download",
            "date": "2021-04-21",
            "organization": "CSIRT Italia",
            "author": "CSIRT Italia",
            "title": "Windigo footprints: an Ebury variant",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://security.web.cern.ch/security/advisories/windigo/windigo.shtml",
            "date": "2019-06-04",
            "organization": "CERN",
            "author": "CERN Computer Security",
            "title": "Advisory: Windigo attacks",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/12/05/dark-side-of-the-forsshe/",
            "date": "2018-12-05",
            "organization": "ESET Research",
            "author": "Marc-Etienne M.L\u00e9veill\u00e9",
            "title": "The Dark Side of the ForSSHe",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/12/ESET-The_Dark_Side_of_the_ForSSHe.pdf",
            "date": "2018-12-01",
            "organization": "ESET Research",
            "author": "Romain Dumont",
            "title": "THE DARK SIDE OF THE FORSSHE: A landscape of OpenSSH backdoors",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/10/30/windigo-ebury-update-2/",
            "date": "2017-10-30",
            "organization": "ESET Research",
            "author": "Fr\u00e9d\u00e9ric Vachon",
            "title": "Windigo Still not Windigone: An Ebury Update",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/russian-citizen-pleads-guilty-involvement-global-botnet-conspiracy",
            "date": "2017-03-28",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Russian Citizen Pleads Guilty for Involvement in Global Botnet Conspiracy",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2014/10/15/operation-windigo-good-job-eset-says-malware-author/",
            "date": "2014-10-15",
            "organization": "ESET Research",
            "author": "Olivier Bilodeau",
            "title": "Operation Windigo: \u201cGood job, ESET!\u201d says malware author",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2014/03/operation_windigo.pdf",
            "date": "2014-03",
            "organization": "ESET Research",
            "author": "Olivier Bilodeau",
            "title": "OPERATION WINDIGO",
            "categories": [
                "Ebury"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2014/02/21/an-in-depth-analysis-of-linuxebury/",
            "date": "2014-02-21",
            "organization": "ESET Research",
            "author": "Marc-Etienne M.L\u00e9veill\u00e9",
            "title": "An In\u2011depth Analysis of Linux/Ebury",
            "categories": [
                "Ebury"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ebury",
            "procedure_code": "s0377",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0377",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "ebury has used python to implement its dga.[19]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1554",
                    "technique_link": "https://attack.mitre.org/techniques/T1554",
                    "technique_name": "compromise client software binary",
                    "technique_description": "adversaries may modify client software binaries to establish persistent access to systems. client software enables users to access services provided by a server. common client software types are ssh clients, ftp clients, email clients, and web browsers.",
                    "procedure_description": "ebury has been embedded into modified openssh binaries to gain persistent access to ssh credential information.[3]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "ebury has injected its dynamic library into descendent processes of sshd via ld_preload.[13]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1556",
                    "technique_link": "https://attack.mitre.org/techniques/T1556",
                    "technique_name": "modify authentication process",
                    "technique_description": "adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts. the authentication process is handled by mechanisms, such as the local security authentication server (lsass) process and the security accounts manager (sam) on windows, pluggable authentication modules (pam) on unix-based systems, and authorization plugins on macos systems, responsible for gathering, storing, and validating credentials. by modifying an authentication process, an adversary may be able to authenticate to a service or system without using valid accounts.",
                    "procedure_description": "ebury can intercept private keys using a trojanized ssh-add function.[1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1556.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/003",
                    "technique_name": "modify authentication process : pluggable authentication modules",
                    "technique_description": "adversaries may modify pluggable authentication modules (pam) to access user credentials or enable otherwise unwarranted access to accounts. pam is a modular system of configuration files, libraries, and executable files which guide authentication for many services. the most common authentication module is pam_unix.so, which retrieves, sets, and verifies account authentication information in /etc/passwd and /etc/shadow.",
                    "procedure_description": "ebury can deactivate pam modules to tamper with the sshd configuration.[6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "ebury has injected its dynamic library into descendent processes of sshd via ld_preload.[13]"
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
                    "procedure_description": "ebury has verified c2 domain ownership by decrypting the txt record using an embedded rsa public key.[80]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/006",
                    "technique_name": "hijack execution flow : dynamic linker hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries. during the execution preparation phase of a program, the dynamic linker loads specified absolute paths of shared libraries from environment variables and files, such as ld_preload on linux or dyld_insert_libraries on macos. libraries specified in environment variables are loaded first, taking precedence over system libraries with the same function name. these variables are often used by developers to debug binaries without needing to recompile, deconflict mapped symbols, and implement custom functions without changing the original library.",
                    "procedure_description": "ebury has injected its dynamic library into descendent processes of sshd via ld_preload.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "ebury can disable selinux role-based access control and deactivate pam modules.[30]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/006",
                    "technique_name": "impair defenses : indicator blocking",
                    "technique_description": "an adversary may attempt to block indicators or events typically captured by sensors from being gathered and analyzed. this could include maliciously redirecting or even disabling host-based sensors, such as event tracing for windows (etw), by tampering settings that control the collection and flow of event telemetry. these settings may be stored on the system in configuration files and/or in the registry as well as being accessible via administrative utilities such as powershell or windows management instrumentation.",
                    "procedure_description": "ebury can hook logging functions so that nothing from the backdoor gets sent to the logging facility.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1556",
                    "technique_link": "https://attack.mitre.org/techniques/T1556",
                    "technique_name": "modify authentication process",
                    "technique_description": "adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts. the authentication process is handled by mechanisms, such as the local security authentication server (lsass) process and the security accounts manager (sam) on windows, pluggable authentication modules (pam) on unix-based systems, and authorization plugins on macos systems, responsible for gathering, storing, and validating credentials. by modifying an authentication process, an adversary may be able to authenticate to a service or system without using valid accounts.",
                    "procedure_description": "ebury can intercept private keys using a trojanized ssh-add function.[1]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1556.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/003",
                    "technique_name": "modify authentication process : pluggable authentication modules",
                    "technique_description": "adversaries may modify pluggable authentication modules (pam) to access user credentials or enable otherwise unwarranted access to accounts. pam is a modular system of configuration files, libraries, and executable files which guide authentication for many services. the most common authentication module is pam_unix.so, which retrieves, sets, and verifies account authentication information in /etc/passwd and /etc/shadow.",
                    "procedure_description": "ebury can deactivate pam modules to tamper with the sshd configuration.[6]"
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
                    "procedure_description": "ebury has obfuscated its strings with a simple xor encryption with a static key.[108]"
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
                    "procedure_description": "ebury has used user mode rootkit techniques to remain hidden on the system.[12]"
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
                    "procedure_description": "ebury has installed a self-signed rpm package mimicking the original system package on rpm based systems.[27]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1556",
                    "technique_link": "https://attack.mitre.org/techniques/T1556",
                    "technique_name": "modify authentication process",
                    "technique_description": "adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts. the authentication process is handled by mechanisms, such as the local security authentication server (lsass) process and the security accounts manager (sam) on windows, pluggable authentication modules (pam) on unix-based systems, and authorization plugins on macos systems, responsible for gathering, storing, and validating credentials. by modifying an authentication process, an adversary may be able to authenticate to a service or system without using valid accounts.",
                    "procedure_description": "ebury can intercept private keys using a trojanized ssh-add function.[1]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1556.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1556/003",
                    "technique_name": "modify authentication process : pluggable authentication modules",
                    "technique_description": "adversaries may modify pluggable authentication modules (pam) to access user credentials or enable otherwise unwarranted access to accounts. pam is a modular system of configuration files, libraries, and executable files which guide authentication for many services. the most common authentication module is pam_unix.so, which retrieves, sets, and verifies account authentication information in /etc/passwd and /etc/shadow.",
                    "procedure_description": "ebury can deactivate pam modules to tamper with the sshd configuration.[6]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/004",
                    "technique_name": "unsecured credentials : private keys",
                    "technique_description": "adversaries may search for private key certificate files on compromised systems for insecurely stored credentials. private cryptographic keys and certificates are used for authentication, encryption/decryption, and digital signatures. common key and certificate file extensions include: .key, .pgp, .gpg, .ppk., .p12, .pem, .pfx, .cer, .p7b, .asc.",
                    "procedure_description": "ebury has intercepted unencrypted private keys as well as private key pass-phrases.[8]"
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
                    "procedure_description": "ebury can list directory entries.[115]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "ebury has used dns requests over udp port 53 for c2.[25]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "ebury has encoded c2 traffic in hexadecimal format.[33]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "ebury has used a dga to generate a domain name for c2.[17][18]"
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
                    "procedure_description": "ebury has encrypted c2 traffic using the client ip address, then encoded it as a hexadecimal string.[42]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "ebury has implemented a fallback mechanism to begin using a dga when the attacker hasn't connected to the infected system for three days.[15]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1020",
                    "technique_link": "https://attack.mitre.org/techniques/T1020",
                    "technique_name": "automated exfiltration",
                    "technique_description": "adversaries may exfiltrate data, such as sensitive documents, through the use of automated processing after being gathered during collection.",
                    "procedure_description": "ebury can automatically exfiltrate gathered ssh credentials.[5]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "ebury can exfiltrate ssh credentials through custom dns queries.[39]"
                }
            ]
        }
    ]
};