var threatdata = {
    "name": "Evilnum",
    "alias": "Evilnum, EVILNUM, Marvel",
    "category": "Malware",
    "type": "Loader, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Evilnum",
        "names": [
            {
                "name": "Evilnum"
            },
            {
                "name": "EVILNUM"
            },
            {
                "name": "Marvel"
            }
        ],
        "description": "(ESET) This component communicates with a C&C server and acts as a backdoor without the need for any additional program. However, in most attacks that we have seen, the attackers deployed additional components as they saw fit and used the JS malware only as a first stage.\n\nThe first known mention of this JavaScript malware was in May 2018 in this pwncode article.",
        "category": "Malware",
        "type": [
            "Loader",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/",
            "http://www.pwncode.io/2018/05/javascript-based-bot-using-github-c.html",
            "https://blog.prevailion.com/2020/05/phantom-in-command-shell5.html",
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0568/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.evilnum",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.evilnum"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:evilnum"
        ],
        "uuid": "57ac4c19-94d8-4e6e-9240-f10c0e2e3940",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "EVILNUM",
            "malware_alias": null,
            "malware": "js.evilnum",
            "last_update": "2022-08-01 20:06:39",
            "tags": [
                "EvilNum",
                "EVILNUM"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "cec06262d1d35f8ea013670c540e30e8",
                        "timestamp": "2022-08-01 20:06:39"
                    },
                    {
                        "value": "4b357bdd7d34050f85b7ef1d497a87dc",
                        "timestamp": "2022-08-01 20:06:39"
                    }
                ],
                "domain": [
                    {
                        "value": "kalpoipolpmi.net",
                        "timestamp": "2022-06-03 21:07:57"
                    },
                    {
                        "value": "8as1s2.com",
                        "timestamp": "2022-06-03 21:07:56"
                    },
                    {
                        "value": "cspapop110.com",
                        "timestamp": "2022-06-03 21:07:54"
                    },
                    {
                        "value": "forme539.ddns.net",
                        "timestamp": "2022-06-03 20:14:52"
                    }
                ],
                "ip:port": [
                    {
                        "value": "5.206.227.72:2222",
                        "timestamp": "2022-06-03 20:14:53"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-01 20:06:39",
    "mitre": [
        {
            "procedure_name": "evilnum",
            "procedure_code": "g0120",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0120",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "evilnum has sent spearphishing emails containing a link to a zip file hosted on google drive.[48]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "evilnum has used malicious javascript files on the victim's machine.[33]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "evilnum has sent spearphishing emails designed to trick the recipient into opening malicious shortcut links which downloads a .lnk file.[33]"
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
                    "procedure_description": "evilnum has used the windows management instrumentation (wmi) tool to enumerate infected machines.[42]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "evilnum can achieve persistence through the registry run key.[86][87]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "evilnum has used the malware variant, terratv, to load a malicious dll placed in the teamviewer directory, instead of the original windows dll located in a system folder.[19]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "evilnum has used powershell to bypass uac.[30]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "evilnum can achieve persistence through the registry run key.[86][87]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "evilnum has used the malware variant, terratv, to load a malicious dll placed in the teamviewer directory, instead of the original windows dll located in a system folder.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "evilnum has used powershell to bypass uac.[30]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "evilnum has used the malware variant, terratv, to load a malicious dll placed in the teamviewer directory, instead of the original windows dll located in a system folder.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070",
                    "technique_link": "https://attack.mitre.org/techniques/T1070",
                    "technique_name": "indicator removal",
                    "technique_description": "adversaries may delete or modify artifacts generated within systems to remove evidence of their presence or hinder defenses. various artifacts may be created by an adversary or something that can be attributed to an adversary\u2019s actions. typically these artifacts are used as defensive indicators related to monitored events, such as strings from downloaded files, logs that are generated from user actions, and other data analyzed by defenders. location, format, and type of artifact (such as command or login history) are often specific to each platform.",
                    "procedure_description": "evilnum has a function called \"deleteleftovers\" to remove certain artifacts of the attack.[6]"
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
                    "procedure_description": "evilnum has deleted files used during infection.[65]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "evilnum has changed the creation date of files.[24]"
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
                    "procedure_description": "evilnum can make modifications to the regsitry for persistence.[54]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "evilnum can run a remote scriptlet that drops a file and executes it via regsvr32.exe.[19]"
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
                    "procedure_description": "evilnum can execute commands and scripts through rundll32.[42]"
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
                    "procedure_description": "evilnum has used a component called terraloader to check certain hardware and file information to detect sandboxed environments. [19]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "evilnum can collect email credentials from victims.[8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1539",
                    "technique_link": "https://attack.mitre.org/techniques/T1539",
                    "technique_name": "steal web session cookie",
                    "technique_description": "an adversary may steal web application or service session cookies and use them to gain access to web applications or internet services as an authenticated user without needing credentials. web applications and services often use session cookies as an authentication token after a user has authenticated to a website.",
                    "procedure_description": "evilnum can harvest cookies and upload them to the c2 server.[9]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1539",
                    "technique_link": "https://attack.mitre.org/techniques/T1539",
                    "technique_name": "steal web session cookie",
                    "technique_description": "an adversary may steal web application or service session cookies and use them to gain access to web applications or internet services as an authenticated user without needing credentials. web applications and services often use session cookies as an authentication token after a user has authenticated to a website.",
                    "procedure_description": "evilnum can steal cookies and session information from browsers.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "evilnum can search for anti-virus products on the system.[35]"
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
                    "procedure_description": "evilnum can obtain the computer name from the victim's system.[128]"
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
                    "procedure_description": "evilnum can obtain the username from the victim's machine.[59]"
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
                    "procedure_description": "evilnum has used a component called terraloader to check certain hardware and file information to detect sandboxed environments. [19]"
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
                    "procedure_description": "evilnum can download and upload files to the victim's computer.[169][170]"
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
                    "procedure_description": "evilnum can deploy additional components or tools as needed.[169]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1219",
                    "technique_link": "https://attack.mitre.org/techniques/T1219",
                    "technique_name": "remote access software",
                    "technique_description": "an adversary may use legitimate desktop support and remote access software, such as team viewer, anydesk, go2assist, logmein, ammyyadmin, etc, to establish an interactive command and control channel to target systems within networks. these services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment. remote access tools like vnc, ammyy, and teamviewer are used frequently when compared with other legitimate software commonly used by adversaries.",
                    "procedure_description": "evilnum has used the malware variant, terratv, to run a legitimate teamviewer application to connect to compromrised machines.[15]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/003",
                    "technique_name": "web service : one-way communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to a compromised system without receiving return output over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems may opt to send the output from those commands back over a different c2 channel, including to another distinct web service. alternatively, compromised systems may return no output at all in cases where adversaries want to send instructions to systems and do not want a response.",
                    "procedure_description": "evilnum has used a one-way communication method via gitlab and digital point to perform c2.[1]"
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
                    "procedure_description": "evilnum can upload files over the c2 channel from the infected host.[43]"
                }
            ]
        }
    ],
    "file_name": "evilnum",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/buy-sell-steal-evilnum-targets-cryptocurrency-forex-commodities",
            "date": "2022-07-21",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "Buy, Sell, Steal, EvilNum Targets Cryptocurrency, Forex, Commodities",
            "categories": [
                "EVILNUM"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/return-evilnum-apt-updated-ttps-and-new-targets",
            "date": "2022-06-27",
            "organization": "Zscaler",
            "author": "Sudeep Singh",
            "title": "Return of the Evilnum APT with updated TTPs and new targets",
            "categories": [
                "EVILNUM",
                "EVILNUM"
            ]
        },
        {
            "data_url": "https://docs.broadcom.com/doc/ransom-and-malware-attacks-on-financial-services-institutions",
            "date": "2021-10-26",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "Ransom and Malware Attacks on  Financial Services Institutions",
            "categories": [
                "EVILNUM"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/lryl3a65uIz1AwZcfuzp1A",
            "date": "2021-06-16",
            "organization": "Microstep Online Research Response Center",
            "author": "Ring-1",
            "title": "Evilnum organizes recent attacks against European financial companies",
            "categories": [
                "EVILNUM"
            ]
        },
        {
            "data_url": "http://blog.nsfocus.net/agentvxapt-evilnum/",
            "date": "2021-01-04",
            "organization": "NSFOCUS",
            "author": "NSFOCUS",
            "title": "Steganography, Little Fire Dragon and AGENTVX: A Detailed Analysis of APT Organization EVILNUM's New Attack Activities",
            "categories": [
                "EVILNUM"
            ]
        },
        {
            "data_url": "https://securelist.com/what-did-deathstalker-hide-between-two-ferns/99616/",
            "date": "2020-12-03",
            "organization": "Kaspersky Labs",
            "author": "Pierre Delcher",
            "title": "What did DeathStalker hide between two ferns?",
            "categories": [
                "PowerPepper",
                "Evilnum"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://securelist.com/deathstalker-mercenary-triumvirate/98177/",
            "date": "2020-08-24",
            "organization": "Kaspersky Labs",
            "author": "Ivan Kwiatkowski",
            "title": "Lifting the veil on DeathStalker, a mercenary triumvirate",
            "categories": [
                "EVILNUM",
                "Janicab",
                "Evilnum"
            ]
        },
        {
            "data_url": "https://github.com/eset/malware-ioc/tree/master/evilnum",
            "date": "2020-07-10",
            "organization": "Github (eset)",
            "author": "Mat\u00edas Porolli",
            "title": "Evilnum\u2009\u2014\u2009Indicators of Compromise",
            "categories": [
                "EVILNUM",
                "More_eggs",
                "EVILNUM",
                "TerraStealer"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/",
            "date": "2020-07-09",
            "organization": "ESET Research",
            "author": "Mat\u00edas Porolli",
            "title": "More evil: A deep look at Evilnum and its toolset",
            "categories": [
                "EVILNUM",
                "More_eggs",
                "EVILNUM",
                "TerraPreter",
                "TerraStealer",
                "TerraTV",
                "Evilnum"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/REXBtbnI2zXj4H3u6ofMMw",
            "date": "2020-06-04",
            "organization": "",
            "author": "Chianxin Virus Response Center",
            "title": "\u811a\u672c\u7cfb\u8d3c\u5bc7\u4e4b\u98ce\u5174\u8d77\uff0c\u4e70\u5356\u4f53\u7cfb\u582a\u6bd4\u52d2\u7d22\u8f6f\u4ef6",
            "categories": [
                "EVILNUM",
                "More_eggs"
            ]
        },
        {
            "data_url": "https://blog.prevailion.com/2020/05/phantom-in-command-shell5.html",
            "date": "2020-05-06",
            "organization": "Prevailion",
            "author": "Danny Adamitis",
            "title": "Phantom in the Command Shell",
            "categories": [
                "EVILNUM"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2019/08/ClearSky-2019-H1-Cyber-Events-Summary-Report.pdf",
            "date": "2019-08",
            "organization": "ClearSky",
            "author": "ClearSky Cyber Security",
            "title": "2019 H1 Cyber Events Summary Report",
            "categories": [
                "EVILNUM",
                "Cardinal RAT",
                "SappyCache"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/cardinal-rat-sins-again-targets-israeli-fin-tech-firms/",
            "date": "2019-03-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Cardinal RAT Sins Again, Targets Israeli Fin-Tech Firms",
            "categories": [
                "EVILNUM",
                "Cardinal RAT",
                "EVILNUM"
            ]
        },
        {
            "data_url": "http://www.pwncode.io/2018/05/javascript-based-bot-using-github-c.html",
            "date": "2018-05-24",
            "organization": "pwncode.io blog",
            "author": "c0d3inj3cT",
            "title": "JavaScript based Bot using Github C&C",
            "categories": [
                "EVILNUM"
            ]
        }
    ]
};