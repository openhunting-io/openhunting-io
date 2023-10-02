var threatdata = {
    "name": "JRat",
    "alias": "JRat, Jacksbot",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "JRat",
        "names": [
            {
                "name": "JRat"
            },
            {
                "name": "Jacksbot"
            }
        ],
        "description": "(Electronic Frontier Foundation) One of the common malware samples used over the course of Operation Manul is known as JRat or Jacksbot. JRat is a commercially available remote access tool (RAT), written in Java. JRat is currently available for purchase at jrat[.]io for the price of $40USD. JRat has been continuously developed for the last four years, seemingly by a single developer who goes by the name \u201credp0ison\u201d. While JRat itself is closed source, many modules and helpful utilities are open source and are available on github.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.eff.org/files/2016/08/03/i-got-a-letter-from-the-government.pdf",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/jacksbot-has-some-dirty-tricks-up-its-sleeves/",
            "https://maskop9.wordpress.com/2019/02/06/analysis-of-jacksbot-backdoor/",
            "https://research.checkpoint.com/malware-against-the-c-monoculture/",
            "https://www.intego.com/mac-security-blog/new-multiplatform-backdoor-jacksbot-discovered"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/jar.jrat"
        ],
        "uuid": "c9a2dfe0-4dca-44f4-a310-08d7efe3e726",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jrat",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "jrat",
            "procedure_code": "s0283",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0283",
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
                    "procedure_description": "jrat has command line access.[169]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "jrat has been distributed as hta files with vbscript.[70]"
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
                    "procedure_description": "jrat has been distributed as hta files with jscript.[43]"
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
                    "procedure_description": "jrat uses wmic to identify anti-virus products installed on the victim\u2019s machine and to obtain firewall details.[62]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1037.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/005",
                    "technique_name": "boot or logon initialization scripts : startup items",
                    "technique_description": "adversaries may use startup items automatically executed at boot initialization to establish persistence. startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.",
                    "procedure_description": "jrat can list and manage startup entries.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1037.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1037/005",
                    "technique_name": "boot or logon initialization scripts : startup items",
                    "technique_description": "adversaries may use startup items automatically executed at boot initialization to establish persistence. startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.",
                    "procedure_description": "jrat can list and manage startup entries.[3]"
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
                    "procedure_description": "jrat has a function to delete files from the victim\u2019s machine.[117]"
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
                    "procedure_description": "jrat\u2019s java payload is encrypted with aes.[175] additionally, backdoor files are encrypted using des as a stream cipher. later variants of jrat also incorporated av evasion methods such as java bytecode obfuscation via the commercial allatori obfuscation tool.[176]"
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
                    "procedure_description": "jrat payloads have been packed.[52]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "jrat can capture passwords from common web browsers such as internet explorer, google chrome, and firefox.[35]"
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
                    "procedure_description": "jrat has the capability to log keystrokes from the victim\u2019s machine, both offline and online.[84][85]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "jrat can capture passwords from common chat applications such as msn messenger, aol, instant messenger, and and google talk.[18]"
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
                    "procedure_description": "jrat can steal keys for vpns and cryptocurrency wallets.[12]"
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
                    "procedure_description": "jrat can browse file systems.[156][157]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "jrat can map upnp ports.[25]"
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
                    "procedure_description": "jrat can query and kill system processes.[139]"
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
                    "procedure_description": "jrat can list security software, such as by using wmic to identify anti-virus products installed on the victim\u2019s machine and to obtain firewall details.[52][53]"
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
                    "procedure_description": "jrat collects information about the os (version, build type, install date) as well as system up-time upon receiving a connection from a backdoor.[180]"
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
                    "procedure_description": "jrat can gather victim internal and external ips.[114]"
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
                    "procedure_description": "jrat can list network connections.[40]"
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
                    "procedure_description": "jrat can list local services.[32]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "jrat can support rdp control.[30]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "jrat can capture microphone recordings.[20]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "jrat can capture clipboard data.[27]"
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
                    "procedure_description": "jrat has the capability to log keystrokes from the victim\u2019s machine, both offline and online.[84][85]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "jrat has the capability to take screenshots of the victim\u2019s machine.[82][83]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "jrat has the capability to capture video from a webcam.[22][23]"
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
                    "procedure_description": "jrat can download and execute files.[233][234][235]"
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
                    "procedure_description": "jrat can serve as a socks proxy server.[24]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1029",
                    "technique_link": "https://attack.mitre.org/techniques/T1029",
                    "technique_name": "scheduled transfer",
                    "technique_description": "adversaries may schedule data exfiltration to be performed only at certain times of day or at certain intervals. this could be done to blend traffic patterns with normal activity or availability.",
                    "procedure_description": "jrat can be configured to reconnect at certain intervals.[8]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};