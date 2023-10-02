var threatdata = {
    "name": "HammerDuke",
    "alias": "HammerDuke, HAMMERTOSS, NetDuke, tDiscoverer",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2023-03-10",
    "all_data": {
        "tool": "HammerDuke",
        "names": [
            {
                "name": "HammerDuke"
            },
            {
                "name": "HAMMERTOSS"
            },
            {
                "name": "NetDuke"
            },
            {
                "name": "tDiscoverer"
            }
        ],
        "description": "(F-Secure) HammerDuke is a simple backdoor that is apparently designed for similar use cases as SeaDuke. Specifically, the only known infection vector for HammerDuke is to be downloaded and executed by CozyDuke onto a victim that has already been compromised by that toolset. This, together with HammerDuke\u2019s simplistic backdoor functionality, suggests that it is primarily used by the Dukes group as a secondary backdoor left on {{CozyDuke}} victims after CozyDuke performed the initial infection and stole any readily available information from them.\n\nHammerDuke is however interesting because it is written in .NET, and even more so because of its occasional use of Twitter as a C&C communication channel. Some HammerDuke variants only contain a hardcoded C&C server address from which they will retrieve commands, but other HammerDuke variants will first use a custom algorithm to generate a Twitter account name based on the current date. If the account exists, HammerDuke will then search for tweets from that account with links to image files that contain embedded commands for the toolset to execute.\n\nHammerDuke\u2019s use of Twitter and crafted image files is reminiscent of other Duke toolsets. Both {{OnionDuke}} and {{MiniDuke}} also use date-based algorithms to generate Twitter account names and then searched for any tweets from those accounts that linked to image files. In contrast however, for OnionDuke and MiniDuke the linked image files contain embedded malware to be downloaded and executed, rather than instructions.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/apt29-hammertoss-stealthy-tactics-define-a.pdf",
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-apt29-hammertoss.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0037/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tdiscoverer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HammerDuke"
        ],
        "uuid": "1e6b6d4a-107d-4162-a46f-364df9138fc0",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hammerduke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://mrtiepolo.medium.com/sophisticated-apt29-campaign-abuses-notion-api-to-target-the-european-commission-200188059f58",
            "date": "2023-03-10",
            "organization": "Mrtiepolo",
            "author": "Gianluca Tiepolo",
            "title": "Sophisticated APT29 Campaign Abuses Notion API to Target the European Commission",
            "categories": [
                "BEATDROP",
                "EnvyScout",
                "GraphicalNeutrino",
                "tDiscoverer",
                "VaporRage"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/hammertoss-what-me-worry/",
            "date": "2015-09-28",
            "organization": "SecurityIntelligence",
            "author": "David Strom",
            "title": "Hammertoss: What, Me Worry?",
            "categories": [
                "tDiscoverer"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=UE9suwyuic8",
            "date": "2015-07-29",
            "organization": "Youtube (FireEye Inc.)",
            "author": "FireEye",
            "title": "HAMMERTOSS: Stealthy Tactics Define a Russian Cyber Threat Group",
            "categories": [
                "tDiscoverer"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/848-DID-242/images/rpt-apt29-hammertoss.pdf",
            "date": "2015-07",
            "organization": "FireEye",
            "author": "FireEye Threat Intelligence",
            "title": "HAMMERTOSS: Stealthy Tactics Define a Russian Cyber Threat Group",
            "categories": [
                "tDiscoverer",
                "APT29"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hammertoss",
            "procedure_code": "s0037",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0037",
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
                    "procedure_description": "hammertoss is known to use powershell.[112]"
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
                    "procedure_description": "hammertoss has used -windowstyle hidden to conceal powershell windows.[19]"
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
                    "procedure_description": "the \"uploader\" variant of hammertoss visits a hard-coded server over http/s to download the images hammertoss uses to receive commands.[152]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/002",
                    "technique_name": "data obfuscation : steganography",
                    "technique_description": "adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. steganographic techniques can be used to hide data in digital messages that are transferred between systems. this hidden information can be used for command and control of compromised systems. in some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control.",
                    "procedure_description": "hammertoss is controlled via commands that are appended to image files.[4]"
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
                    "procedure_description": "before being appended to image files, hammertoss commands are encrypted with a key composed of both a hard-coded value and a string contained on that day's tweet. to decrypt the commands, an investigator would need access to the intended malware sample, the day's tweet, and the image file containing the command.[60]"
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
                    "procedure_description": "the \"tdiscoverer\" variant of hammertoss establishes a c2 channel by downloading resources from web services like twitter and github. hammertoss binaries contain an algorithm that generates a different twitter handle for the malware to check for instructions every day.[2]"
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
                    "procedure_description": "hammertoss exfiltrates data by uploading it to accounts created by the actors on web cloud storage providers for the adversaries to retrieve later.[14]"
                }
            ]
        },
        {
            "procedure_name": "net",
            "procedure_code": "s0039",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0039",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "the net start and net stop commands can be used in net to execute or stop windows services.[36]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "the net user username \\password commands in net can be used to create a local account.[20]"
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
                    "procedure_description": "the net user username \\password \\domain commands in net can be used to create a domain account.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/005",
                    "technique_name": "indicator removal : network share connection removal",
                    "technique_description": "adversaries may remove share connections that are no longer useful in order to clean up traces of their operation. windows shared drive and smb/windows admin shares connections can be removed when no longer needed. net is an example utility that can be used to remove network share connections with the net use \\system\\share /delete command.",
                    "procedure_description": "the net use \\system\\share /delete command can be used in net to remove an established connection to a network share.[1]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "commands under net user can be used in net to gather information about and manipulate user accounts.[27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "net commands used with the /domain flag can be used to gather information about and manipulate user accounts on the current domain.[32]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "the net view \\remotesystem and net share commands in net can be used to find shared drives and directories on remote and local systems respectively.[38]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "the net accounts and net accounts /domain commands with net can be used to obtain password policy information.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "commands such as net group and net localgroup can be used in net to gather information about and manipulate groups.[17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "commands such as net group /domain can be used in net to gather information about and manipulate groups.[21]"
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
                    "procedure_description": "commands such as net view can be used in net to gather information about available remote systems.[62]"
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
                    "procedure_description": "commands such as net use and net session can be used in net to gather information about network connections from a particular host.[56]"
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
                    "procedure_description": "the net start command can be used in net to find information about windows services.[37]"
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
                    "procedure_description": "the net time command can be used in net to determine the local or remote system time.[52]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "lateral movement can be done with net through net use commands to connect to the on remote systems.[37]"
                }
            ]
        }
    ]
};