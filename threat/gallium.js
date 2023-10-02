var threatdata = {
    "name": "Gallium",
    "alias": "Gallium, Phantom Panda, Granite Typhoon, Alloy Taurus",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Gallium",
        "names": [
            {
                "name": "Gallium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Phantom Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Granite Typhoon",
                "name-giver": "Microsoft"
            },
            {
                "name": "Alloy Taurus",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Microsoft) To compromise targeted networks, GALLIUM target unpatched internet-facing services using publicly available exploits and have been known to target vulnerabilities in WildFly/JBoss. Once persistence is established in a network, GALLIUM uses common techniques and tools like Mimikatz to obtain credentials that allows for lateral movement across the target network. Within compromised networks, GALLIUM makes no attempt to obfuscate their intent and are known to use common versions of malware and publicly available toolkits with small modifications. The operators rely on low cost and easy to replace infrastructure that consists of dynamic-DNS domains and regularly reused hop points.\n\nThis activity from GALLIUM has been identified predominantly through 2018 to mid-2019. GALLIUM is still active; however, activity levels have dropped when compared to what was previously observed.",
        "observed-sectors": [
            "Financial",
            "Government",
            "Telecommunications"
        ],
        "tools": [
            "BlackMould",
            "China Chopper",
            "HTran",
            "nbtscan",
            "netcat",
            "Mimikatz",
            "PingPull",
            "Poison Ivy",
            "PsExec",
            "QuarkBandit",
            "SoftEther VPN",
            "Sword2033",
            "Windows Credentials Editor",
            "WinRAR"
        ],
        "operations": [
            {
                "date": "2021-09",
                "activity": "Chinese Alloy Taurus Updates PingPull Malware\nhttps://unit42.paloaltonetworks.com/alloy-taurus/"
            },
            {
                "date": "2022-06",
                "activity": "GALLIUM Expands Targeting Across Telecommunications, Government and Finance Sectors With New PingPull Tool\nhttps://unit42.paloaltonetworks.com/pingpull-gallium/"
            }
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2019/12/12/gallium-targeting-global-telecom/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0093/"
        ],
        "uuid": "8dd3c489-96f1-412f-9eec-60f96a674571",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gallium",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "gallium",
            "procedure_code": "g0093",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0093",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/004",
                    "technique_name": "acquire infrastructure : server",
                    "technique_description": "adversaries may buy, lease, or rent physical servers\u00a0that can be used during targeting. use of servers allows an adversary to stage, launch, and execute an operation. during post-compromise activity, adversaries may utilize servers for various tasks, including for command and control. adversaries may use web servers to support support watering hole operations, as in drive-by compromise, or email servers to support phishing operations. instead of compromising a third-party server or renting a virtual private server, adversaries may opt to configure and run their own servers in support of operations.",
                    "procedure_description": "gallium has used taiwan-based servers that appear to be exclusive to gallium.[3]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "gallium has used a variety of widely-available tools, which in some cases they modified to add functionality and/or subvert antimalware solutions.[53]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "gallium exploited a publicly-facing servers including wildfly/jboss servers to gain access to the network.[30][31]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "gallium has used vpn services, including softether vpn, to access and maintain persistence in victim environments.[19][20]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "gallium leveraged valid accounts to maintain access to a victim network.[35]"
                },
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
                    "procedure_description": "gallium used powershell for execution to assist in lateral movement as well as for dumping credentials stored on compromised machines.[104]"
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
                    "procedure_description": "gallium used the windows command shell to execute commands.[133]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "gallium established persistence for poisonivy by created a scheduled task.[67]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "gallium used wmi for execution to assist in lateral movement as well as for installing tools across multiple assets.[53]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/002",
                    "technique_name": "create account : domain account",
                    "technique_description": "adversaries may create a domain account to maintain access to victim systems. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover user, administrator, and service accounts. with a sufficient level of access, the net user /add /domain command can be used to create a domain account.",
                    "procedure_description": "gallium created high-privileged domain user accounts to maintain access to victim networks.[3][4]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "gallium has used vpn services, including softether vpn, to access and maintain persistence in victim environments.[19][20]"
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
                    "procedure_description": "gallium used dll side-loading to covertly load poisonivy into memory on the victim machine.[24]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "gallium established persistence for poisonivy by created a scheduled task.[67]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "gallium used web shells to persist in victim environments and assist in execution and exfiltration.[15][16]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "gallium leveraged valid accounts to maintain access to a victim network.[35]"
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
                    "procedure_description": "gallium used dll side-loading to covertly load poisonivy into memory on the victim machine.[24]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "gallium established persistence for poisonivy by created a scheduled task.[67]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "gallium leveraged valid accounts to maintain access to a victim network.[35]"
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
                    "procedure_description": "gallium used dll side-loading to covertly load poisonivy into memory on the victim machine.[24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/003",
                    "technique_name": "masquerading : rename system utilities",
                    "technique_description": "adversaries may rename legitimate system utilities to try to evade security mechanisms concerning the usage of those utilities. security monitoring and control mechanisms may be in place for system utilities adversaries are capable of abusing.  it may be possible to bypass those security mechanisms by renaming the utility prior to utilization (ex: rename rundll32.exe).  an alternative case occurs when a legitimate utility is copied or moved to a different directory and renamed to avoid detections based on system utilities executing from non-standard paths.",
                    "procedure_description": "gallium used a renamed cmd.exe file to evade detection.[5]"
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
                    "procedure_description": "gallium used a modified version of htran in which they obfuscated strings such as debug messages in an apparent attempt to evade detection.[133]"
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
                    "procedure_description": "gallium packed some payloads using different types of packers, both known and custom.[44]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/005",
                    "technique_name": "obfuscated files or information : indicator removal from tools",
                    "technique_description": "adversaries may remove indicators from tools if they believe their malicious tool was detected, quarantined, or otherwise curtailed. they can modify the tool by removing the indicator and using the updated version that is no longer detected by the target's defensive systems or subsequent targets that may use similar systems.",
                    "procedure_description": "gallium ensured each payload had a unique hash, including by using different types of packers.[6]"
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
                    "procedure_description": "gallium has used stolen certificates to sign its tools including those from whizzimo llc.[34]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "gallium used dumped hashes to authenticate to other machines via pass the hash.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "gallium leveraged valid accounts to maintain access to a victim network.[35]"
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
                    "procedure_description": "gallium used a modified version of mimikatz along with a powershell-based mimikatz to dump credentials on the victim machines.[33][34]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "gallium used reg commands to dump specific hives from the windows registry, such as the sam hive, and obtain password hashes.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "gallium used a modified version of nbtscan to identify available netbios name servers over the network as well as ping to identify remote systems.[45]"
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
                    "procedure_description": "gallium used ipconfig /all to obtain information about the victim network configuration. the group also ran a modified version of nbtscan to identify available netbios name servers.[91]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "gallium used netstat -oan to obtain information about the victim network connections.[37]"
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
                    "procedure_description": "gallium used whoami and query user to obtain information about the victim user.[70]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "gallium has used psexec to move laterally between hosts in the target network.[18]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "gallium used dumped hashes to authenticate to other machines via pass the hash.[9]"
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
                    "procedure_description": "gallium used winrar to compress and encrypt stolen data prior to exfiltration.[30][31]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "gallium collected data from the victim's local system, including password hashes from the sam hive in the registry.[79]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "gallium compressed and staged files in multi-part archives in the recycle bin prior to exfiltration.[37]"
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
                    "procedure_description": "gallium dropped additional tools to victims during their operation, including portqry.exe, a renamed cmd.exe file, winrar, and htran.[189][70]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "gallium used a modified version of htran to redirect connections between networks.[8]"
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
                    "procedure_description": "gallium used web shells and htran for c2 and to exfiltrate data.[48]"
                }
            ]
        }
    ]
};