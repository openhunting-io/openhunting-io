var threatdata = {
    "name": "Hafnium",
    "alias": "Hafnium, Silk Typhoon",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Hafnium",
        "names": [
            {
                "name": "Hafnium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Silk Typhoon",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, Ministry of State Security",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(Microsoft) HAFNIUM primarily targets entities in the United States across a number of industry sectors, including infectious disease researchers, law firms, higher education institutions, defense contractors, policy think tanks, and NGOs.\n\nHAFNIUM has previously compromised victims by exploiting vulnerabilities in internet-facing servers, and has used legitimate open-source frameworks, like Covenant, for command and control. Once they\u2019ve gained access to a victim network, HAFNIUM typically exfiltrates data to file sharing sites like MEGA.\n\nIn campaigns unrelated to these vulnerabilities, Microsoft has observed HAFNIUM interacting with victim Office 365 tenants. While they are often unsuccessful in compromising customer accounts, this reconnaissance activity helps the adversary identify more details about their targets\u2019 environments.\n\nHAFNIUM operates primarily from leased virtual private servers (VPS) in the United States.\n\n(Recorded Future) Coalition officials pinned the attacks on groups tracked as {{APT 31, Judgment Panda, Zirconium}} and {{Leviathan, APT 40, TEMP.Periscope}} by cybersecurity experts, according to a press release from the UK National Cyber Security Centre. Supporting statements were also issued by NATO, the UK government, the European Union Council, Australia, Japan, Canada, Latvia, Lithuania, Estonia, Slovenia, Finland, and Denmark.",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "4 MS Exchange 0-days"
        ],
        "operations": [
            {
                "date": "2021-12",
                "activity": "Log4Shell attacks expand to nation-state groups from China, Iran, North Korea, and Turkey\nhttps://therecord.media/log4shell-attacks-expand-to-nation-state-groups-from-china-iran-north-korea-and-turkey/"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-07",
                "activity": "The United States, Joined by Allies and Partners, Attributes Malicious Cyber Activity and Irresponsible State Behavior to the People\u2019s Republic of China\nhttps://www.whitehouse.gov/briefing-room/statements-releases/2021/07/19/the-united-states-joined-by-allies-and-partners-attributes-malicious-cyber-activity-and-irresponsible-state-behavior-to-the-peoples-republic-of-china/"
            }
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/",
            "https://therecord.media/white-house-formally-blames-chinas-ministry-of-state-security-for-microsoft-exchange-hack/",
            "https://www.dropbox.com/s/dwiygk49pos4vqx/Whitepaper%204%20MS%20Exchange%200-days.pdf?dl=0"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0125/"
        ],
        "uuid": "7c88c982-c383-4552-90b4-cbb67ec5240f",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hafnium",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "hafnium",
            "procedure_code": "g0125",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0125",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1592.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1592/004",
                    "technique_name": "gather victim host information : client configurations",
                    "technique_description": "adversaries may gather information about the victim's client configurations that can be used during targeting. information about client configurations may include a variety of details and settings, including operating system/version, virtualization, architecture (ex: 32 or 64 bit), language, and/or time zone.",
                    "procedure_description": "hafnium has interacted with office 365 tenants to gather details regarding target's environments.[2]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1589.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1589/002",
                    "technique_name": "gather victim identity information : email addresses",
                    "technique_description": "adversaries may gather email addresses that can be used during targeting. even if internal instances exist, organizations may have public-facing email infrastructure and addresses for employees.",
                    "procedure_description": "hafnium has collected e-mail addresses for users they intended to target.[10]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1590",
                    "technique_link": "https://attack.mitre.org/techniques/T1590",
                    "technique_name": "gather victim network information",
                    "technique_description": "adversaries may gather information about the victim's networks that can be used during targeting. information about networks may include a variety of details, including administrative data (ex: ip ranges, domain names, etc.) as well as specifics regarding its topology and operations.",
                    "procedure_description": "hafnium gathered the fully qualified domain names (fqdns) for targeted exchange servers in the victim's environment.[4]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1590.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1590/005",
                    "technique_name": "gather victim network information : ip addresses",
                    "technique_description": "adversaries may gather the victim's ip addresses that can be used during targeting. public ip addresses may be allocated to organizations by block, or a range of sequential addresses. information about assigned ip addresses may include a variety of details, such as which ip addresses are in use. ip addresses may also enable an adversary to derive other details about a victim, such as organizational size, physical location(s), internet service provider, and or where/how their publicly-facing infrastructure is hosted.",
                    "procedure_description": "hafnium has obtained ip addresses for publicly-accessible exchange servers.[5]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/003",
                    "technique_name": "acquire infrastructure : virtual private server",
                    "technique_description": "adversaries may rent virtual private servers (vpss)\u00a0that can be used during targeting. there exist a variety of cloud service providers that will sell virtual machines/containers as a service. by utilizing a vps, adversaries can make it difficult to physically tie back operations to them. the use of cloud infrastructure can also make it easier for adversaries to rapidly provision, modify, and shut down their infrastructure.",
                    "procedure_description": "hafnium has operated from leased virtual private servers (vps) in the united states.[4]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "hafnium has acquired web services for use in c2 and exfiltration.[8]"
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
                    "procedure_description": "hafnium has exploited cve-2021-26855, cve-2021-26857, cve-2021-26858, and cve-2021-27065  to compromise on-premises versions of microsoft exchange server, enabling access to email accounts and installation of additional malware.[33][34][35][36]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "hafnium has used the nt authority\\system account to create files on exchange servers.[6]"
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
                    "procedure_description": "hafnium has used the exchange power shell module set-oabvirtualdirectorypowershell to export mailbox data.[110][111]"
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
                    "procedure_description": "hafnium has used cmd.exe to execute commands on the victim's machine.[147]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "hafnium has granted privileges to domain accounts.[6]"
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
                    "procedure_description": "hafnium has created domain accounts.[5]"
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
                    "procedure_description": "hafnium has deployed multiple web shells on compromised servers including simpleseesharp, sportsball, china chopper, and aspxspy.[17][18][19][20][21]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "hafnium has used the nt authority\\system account to create files on exchange servers.[6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "hafnium has used the nt authority\\system account to create files on exchange servers.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "hafnium has hidden files on a compromised host.[21]"
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
                    "procedure_description": "hafnium has used rundll32 to load malicious dlls.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "hafnium has used the nt authority\\system account to create files on exchange servers.[6]"
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
                    "procedure_description": "hafnium has used procdump to dump the lsass process memory.[36][1][37]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/003",
                    "technique_name": "os credential dumping : ntds",
                    "technique_description": "adversaries may attempt to access or create a copy of the active directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. by default, the ntds file (ntds.dit) is located in %systemroot%\\ntds\\ntds.dit of a domain controller.",
                    "procedure_description": "hafnium has stolen copies of the active directory database (ntds.dit).[14]"
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
                    "procedure_description": "hafnium has searched file contents on a compromised host.[75]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "hafnium has used tasklist to enumerate processes.[119]"
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
                    "procedure_description": "hafnium has enumerated domain controllers using net group \"domain computers\" and nltest /dclist.[46]"
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
                    "procedure_description": "hafnium has collected ip information via ipinfo.[99]"
                },
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
                    "procedure_description": "hafnium has checked for network connectivity from a compromised host using ping, including attempts to contact google[.]com.[4]"
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
                    "procedure_description": "hafnium has used whoami to gather user information.[78]"
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
                    "procedure_description": "hafnium has used 7-zip and winrar to compress stolen files for exfiltration.[33][34]"
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
                    "procedure_description": "hafnium has collected data and files from a compromised machine.[42]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/002",
                    "technique_name": "email collection : remote email collection",
                    "technique_description": "adversaries may target an exchange server, office 365, or google workspace to collect sensitive information. adversaries may leverage a user's credentials and interact directly with the exchange server to acquire information from within a network. adversaries may also access externally facing exchange services, office 365, or google workspace to access email using credentials or access tokens. tools such as mailsniper can be used to automate searches for specific keywords.",
                    "procedure_description": "hafnium has used web shells to export mailbox data.[9][10]"
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
                    "procedure_description": "hafnium has used open-source c2 frameworks, including covenant.[151]"
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
                    "procedure_description": "hafnium has used ascii encoding for c2 traffic.[40]"
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
                    "procedure_description": "hafnium has downloaded malware and tools--including nishang and powercat--onto a compromised host.[208][110]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "hafnium has used tcp for c2.[29]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "hafnium has exfiltrated data to file sharing sites, including mega.[13]"
                }
            ]
        }
    ]
};