var threatdata = {
    "name": "SOUNDBITE",
    "alias": "SOUNDBITE, Denis",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Tunneling, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "SOUNDBITE",
        "names": [
            {
                "name": "SOUNDBITE"
            },
            {
                "name": "Denis"
            }
        ],
        "description": "(FireEye)\n\u2022 C2 communications via DNS\n\u2022 Process creation\n\u2022 File upload\n\u2022 Shell command execution\n\u2022 File and directory enumeration/manipulation\n\u2022 Window enumeration\n\u2022 Registry manipulation\n\u2022 System information gathering",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Tunneling",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "https://securelist.com/use-of-dns-tunneling-for-cc-communications/78203/",
            "https://ruxcon.org.au/assets/2017/slides/bart-RuxCon-Presentation.pptx",
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0354/",
            "https://attack.mitre.org/software/S0157/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.soundbite"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SOUNDBITE"
        ],
        "uuid": "771e976f-81e0-4775-a542-9cdbd531713d",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "soundbite",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-1110.pdf",
            "date": "2020-11-10",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "New APT32 Malware Campaign Targets Cambodian Government",
            "categories": [
                "KerrDown",
                "METALJACK",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://blog.viettelcybersecurity.com/apt32-deobfuscation-arsenal-deobfuscating-mot-vai-loai-obfucation-toolkit-cua-apt32-phan-1/",
            "date": "2020-09-02",
            "organization": "Viettel Cybersecurity",
            "author": "vuonglvm",
            "title": "APT32 deobfuscation arsenal: Deobfuscating m\u1ed9t v\u00e0i lo\u1ea1i Obfucation Toolkit c\u1ee7a APT32 (Ph\u1ea7n 1)",
            "categories": [
                "METALJACK",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://www.picussecurity.com/blog/picus-10-critical-mitre-attck-techniques-t1055-process-injection",
            "date": "2020-05-21",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "T1055 Process Injection",
            "categories": [
                "BlackEnergy",
                "Cardinal RAT",
                "Downdelph",
                "Emotet",
                "Kazuar",
                "RokRAT",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/tin-woodlawn",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "TIN WOODLAWN",
            "categories": [
                "Cobalt Strike",
                "KerrDown",
                "MimiKatz",
                "PHOREAL",
                "RatSnif",
                "Remy",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/xPsEXp2J5IE7wNSMEVC24A",
            "date": "2019-04-24",
            "organization": "Weixin",
            "author": "Tencent",
            "title": "\"Sea Lotus\" APT organization's attack techniques against China in the first quarter of 2019 revealed",
            "categories": [
                "Cobalt Strike",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/wiki/Software/S0157",
            "date": "2017-12-14",
            "organization": "MITRE ATT&CK",
            "author": "Various",
            "title": "SOUNDBITE",
            "categories": [
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "date": "2017-05-14",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "Cyber Espionage is Alive and Well: APT32 and the Threat to Global Corporations",
            "categories": [
                "OceanLotus",
                "Cuegoe",
                "KOMPROGO",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "https://securelist.com/use-of-dns-tunneling-for-cc-communications/78203/",
            "date": "2017-04-28",
            "organization": "Kaspersky Labs",
            "author": "Alexey Shulmin",
            "title": "Use of DNS Tunneling for C&C Communications",
            "categories": [
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://ruxcon.org.au/assets/2017/slides/bart-RuxCon-Presentation.pptx",
            "date": "2017",
            "organization": "FireEye",
            "author": "Bart Inglot",
            "title": "ATTACKER ANTICS: Illustrations of Ingenuity",
            "categories": [
                "KOMPROGO",
                "SOUNDBITE"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "denis",
            "procedure_code": "s0354",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0354",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "denis has a version written in powershell.[20]"
                },
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
                    "procedure_description": "denis can launch a remote shell to execute arbitrary commands on the victim\u2019s machine.[102][21]"
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
                    "procedure_description": "denis used the isdebuggerpresent, outputdebugstring, and setlasterror apis to avoid debugging. denis used getprocaddress and loadlibrary to dynamically resolve apis. denis also used the wow64setthreadcontext api as part of a process hollowing process.[68]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574",
                    "technique_link": "https://attack.mitre.org/techniques/T1574",
                    "technique_name": "hijack execution flow",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the way operating systems run programs. hijacking execution flow can be for the purposes of persistence, since this hijacked execution may reoccur over time. adversaries may also use these mechanisms to elevate privileges or evade defenses, such as application control or other restrictions on execution.",
                    "procedure_description": "denis replaces the nonexistent windows dll \"msfte.dll\" with its own malicious version, which is loaded by the searchindexer.exe and searchprotocolhost.exe.[2]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "denis exploits a security vulnerability to load a fake dll and execute its code.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574",
                    "technique_link": "https://attack.mitre.org/techniques/T1574",
                    "technique_name": "hijack execution flow",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the way operating systems run programs. hijacking execution flow can be for the purposes of persistence, since this hijacked execution may reoccur over time. adversaries may also use these mechanisms to elevate privileges or evade defenses, such as application control or other restrictions on execution.",
                    "procedure_description": "denis replaces the nonexistent windows dll \"msfte.dll\" with its own malicious version, which is loaded by the searchindexer.exe and searchprotocolhost.exe.[2]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "denis exploits a security vulnerability to load a fake dll and execute its code.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "denis performed process hollowing through the api calls createremotethread, resumethread, and wow64setthreadcontext.[18]"
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
                    "procedure_description": "denis will decrypt important strings used for c&c communication.[73]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574",
                    "technique_link": "https://attack.mitre.org/techniques/T1574",
                    "technique_name": "hijack execution flow",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the way operating systems run programs. hijacking execution flow can be for the purposes of persistence, since this hijacked execution may reoccur over time. adversaries may also use these mechanisms to elevate privileges or evade defenses, such as application control or other restrictions on execution.",
                    "procedure_description": "denis replaces the nonexistent windows dll \"msfte.dll\" with its own malicious version, which is loaded by the searchindexer.exe and searchprotocolhost.exe.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "denis exploits a security vulnerability to load a fake dll and execute its code.[5]"
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
                    "procedure_description": "denis has a command to delete files from the victim\u2019s machine.[53][54]"
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
                    "procedure_description": "denis obfuscates its code and encrypts the api names.[29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "denis has encoded its powershell commands in base64.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "denis performed process hollowing through the api calls createremotethread, resumethread, and wow64setthreadcontext.[18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "denis ran multiple system checks, looking for processor and register characteristics, to evade emulation and analysis.[15]"
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
                    "procedure_description": "denis has several commands to search directories for files.[101][102]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "denis queries the registry for keys and values.[32]"
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
                    "procedure_description": "denis collects os information and the computer name from the victim\u2019s machine.[110][111]"
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
                    "procedure_description": "denis uses ipconfig to gather the ip address from the system.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "denis enumerates and collects the username from the victim\u2019s machine.[47][13]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "denis ran multiple system checks, looking for processor and register characteristics, to evade emulation and analysis.[15]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/002",
                    "technique_name": "archive collected data : archive via library",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using 3rd party libraries. many libraries exist that can archive data, including python rarfile , libzip , and zlib . most libraries include functionality to encrypt and/or compress data.",
                    "procedure_description": "denis compressed collected data using zlib.[7]"
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
                    "procedure_description": "denis has used dns tunneling for c2 communications.[21][22][23]"
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
                    "procedure_description": "denis encodes the data sent to the server in base64.[29]"
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
                    "procedure_description": "denis deploys additional backdoors and hacking tools to the system.[143]"
                }
            ]
        },
        {
            "procedure_name": "soundbite",
            "procedure_code": "s0157",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0157",
            "techniques": [
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
                    "procedure_description": "soundbite is capable of modifying the registry.[114]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "soundbite is capable of enumerating application windows.[31]"
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
                    "procedure_description": "soundbite is capable of enumerating and manipulating files and directories.[284]"
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
                    "procedure_description": "soundbite is capable of gathering system information.[196]"
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
                    "procedure_description": "soundbite communicates via dns for c2.[65]"
                }
            ]
        }
    ]
};