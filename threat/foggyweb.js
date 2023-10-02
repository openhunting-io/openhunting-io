var threatdata = {
    "name": "FoggyWeb",
    "alias": "FoggyWeb",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "FoggyWeb",
        "names": [
            {
                "name": "FoggyWeb"
            }
        ],
        "description": "(Microsoft) FoggyWeb is a passive and highly targeted backdoor capable of remotely exfiltrating sensitive information from a compromised AD FS server. It can also receive additional malicious components from a command-and-control (C2) server and execute them on the compromised server.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/09/27/foggyweb-targeted-nobelium-malware-leads-to-persistent-backdoor/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0661/"
        ],
        "uuid": "3ed49155-5353-44ac-aadc-f29df4e720c2",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "foggyweb",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "foggyweb",
            "procedure_code": "s0661",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0661",
            "techniques": [
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
                    "procedure_description": "foggyweb's loader can use api functions to load the foggyweb backdoor into the same application domain within which the legitimate ad fs managed code is executed.[79]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1129",
                    "technique_link": "https://attack.mitre.org/techniques/T1129",
                    "technique_name": "shared modules",
                    "technique_description": "adversaries may execute malicious payloads via loading shared modules. the windows module loader can be instructed to load dlls from arbitrary local paths and arbitrary universal naming convention (unc) network paths. this functionality resides in ntdll.dll and is part of the windows native api which is called from functions like createprocess, loadlibrary, etc. of the win32 api.",
                    "procedure_description": "foggyweb's loader can call the load() function to load the foggyweb dll into an application domain on a compromised ad fs server.[9]"
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
                    "procedure_description": "foggyweb's loader has used dll search order hijacking to load malicious code instead of the legitimate version.dll during the microsoft.identityserver.servicehost.exe execution process.[22]"
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
                    "procedure_description": "foggyweb's loader has used dll search order hijacking to load malicious code instead of the legitimate version.dll during the microsoft.identityserver.servicehost.exe execution process.[22]"
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
                    "procedure_description": "foggyweb can be decrypted in memory using a lightweight encryption algorithm (lea)-128 key and decoded using a xor key.[93]"
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
                    "procedure_description": "foggyweb's loader has used dll search order hijacking to load malicious code instead of the legitimate version.dll during the microsoft.identityserver.servicehost.exe execution process.[22]"
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
                    "procedure_description": "foggyweb can masquerade the output of c2 commands as a fake, but legitimately formatted webp file.[16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "foggyweb can be disguised as a visual studio file such as windows.data.timezones.zh-ph.pri to evade detection. also, foggyweb's loader can mimic a genuine dll file that carries out the same import functions as the legitimate windows version.dll file.[59]"
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
                    "procedure_description": "foggyweb has been xor-encoded.[130]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/004",
                    "technique_name": "obfuscated files or information : compile after delivery",
                    "technique_description": "adversaries may attempt to make payloads difficult to discover and analyze by delivering files to victims as uncompiled code. text-based source code files may subvert analysis and scrutiny from protections targeting executables/binaries. these payloads will need to be compiled before execution; typically via native utilities such as csc.exe or gcc/mingw.",
                    "procedure_description": "foggyweb can compile and execute source code sent to the compromised ad fs server via a specific http post.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1620",
                    "technique_link": "https://attack.mitre.org/techniques/T1620",
                    "technique_name": "reflective code loading",
                    "technique_description": "adversaries may reflectively load code into a process in order to conceal the execution of malicious payloads. reflective loading involves allocating then executing payloads directly within the memory of the process, vice creating a thread or process backed by a file path on disk. reflectively loaded payloads may be compiled binaries, anonymous files (only present in ram), or just snubs of fileless executable code (ex: position-independent shellcode).",
                    "procedure_description": "foggyweb's loader has reflectively loaded .net-based assembly/payloads into memory.[12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550",
                    "technique_link": "https://attack.mitre.org/techniques/T1550",
                    "technique_name": "use alternate authentication material",
                    "technique_description": "adversaries may use alternate authentication material, such as password hashes, kerberos tickets, and application access tokens, in order to move laterally within an environment and bypass normal system access controls.",
                    "procedure_description": "foggyweb can allow abuse of a compromised ad fs server's saml token.[3]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "foggyweb can configure custom listeners to passively monitor all incoming http get and post requests sent to the ad fs server from the intranet/internet and intercept http requests that match the custom uri patterns defined by the actor.[15]"
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
                    "procedure_description": "foggyweb can retrieve token signing certificates and token decryption certificates from a compromised ad fs server.[10]"
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
                    "procedure_description": "foggyweb's loader can check for the foggyweb backdoor .pri file on a compromised ad fs server.[128]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "foggyweb can configure custom listeners to passively monitor all incoming http get and post requests sent to the ad fs server from the intranet/internet and intercept http requests that match the custom uri patterns defined by the actor.[15]"
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
                    "procedure_description": "foggyweb's loader can enumerate all common language runtimes (clrs) and running application domains in the compromised ad fs server's microsoft.identityserver.servicehost.exe process.[105]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550",
                    "technique_link": "https://attack.mitre.org/techniques/T1550",
                    "technique_name": "use alternate authentication material",
                    "technique_description": "adversaries may use alternate authentication material, such as password hashes, kerberos tickets, and application access tokens, in order to move laterally within an environment and bypass normal system access controls.",
                    "procedure_description": "foggyweb can allow abuse of a compromised ad fs server's saml token.[3]"
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
                    "procedure_description": "foggyweb can invoke the common.compress method to compress data with the c# gzipstream compression class.[9]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "foggyweb can use a dynamic xor key and a custom xor methodology to encode data before exfiltration. also, foggyweb can encode c2 command output within a legitimate webp file.[11]"
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
                    "procedure_description": "foggyweb can retrieve configuration data from a compromised ad fs server.[74]"
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
                    "procedure_description": "foggyweb has the ability to communicate with c2 servers over http get/post requests.[130]"
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
                    "procedure_description": "foggyweb has used a dynamic xor key and custom xor methodology for c2 communications.[52]"
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
                    "procedure_description": "foggyweb can receive additional malicious components from an actor controlled c2 server and execute them on a compromised ad fs server.[183]"
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
                    "procedure_description": "foggyweb can remotely exfiltrate sensitive information from a compromised ad fs server.[46]"
                }
            ]
        }
    ]
};