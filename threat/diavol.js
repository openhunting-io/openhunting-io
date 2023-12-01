var threatdata = {
    "name": "Diavol",
    "alias": "Diavol",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Diavol",
        "names": [
            {
                "name": "Diavol"
            }
        ],
        "description": "(Fortinet) As part of a rather unique encryption procedure, Diavol operates using user-mode Asynchronous Procedure Calls (APCs) without a symmetric encryption algorithm. Usually, ransomware authors aim to complete the encryption operation in the shortest amount of time. Asymmetric encryption algorithms are not the obvious choice as they significantly slower than symmetric algorithms.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/diavol-new-ransomware-used-by-wizard-spider",
            "https://www.speartip.com/resources/speartip-finds-new-diavol-ransomware-does-steal-data/",
            "https://securityintelligence.com/posts/analysis-of-diavol-ransomware-link-trickbot-gang/",
            "https://www.binarydefense.com/threat_watch/new-ransomware-diavol-being-dropped-by-trickbot/",
            "http://www.ic3.gov/Media/News/2022/220120.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0659/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.diavol"
        ],
        "playbook": [
            "https://www.bleepingcomputer.com/news/security/free-decryptor-released-for-trickbot-gangs-diavol-ransomware/"
        ],
        "uuid": "f25de7f3-032f-491e-90a0-4f1c5bcc7738",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Diavol",
            "malware_alias": null,
            "malware": "win.diavol",
            "last_update": "2021-12-29 05:59:45",
            "tags": [
                "Ransomware",
                "Diavol"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "e0c0e663bf44c9820b049f73f2910843ede20fd3e6cd0c9a22cbd2a48e1a228a",
                        "timestamp": "2021-12-29 05:59:45"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-29 05:59:45",
    "file_name": "diavol",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/walmartglobaltech/diavol-resurfaces-91dd93c7d922",
            "date": "2022-09-30",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Diavol resurfaces",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://arcticwolf.com/resources/blog/karakurt-web",
            "date": "2022-04-15",
            "organization": "Arctic Wolf",
            "author": "Arctic Wolf",
            "title": "The Karakurt Web: Threat Intel and Blockchain Analysis Reveals Extension of Conti Business Model",
            "categories": [
                "Conti",
                "Diavol",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/diavol-the-enigma-of-ransomware-1fd78ffda648",
            "date": "2022-03-10",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Diavol the Enigma of Ransomware",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.scythe.io/library/adversary-emulation-diavol-ransomware-threatthursday",
            "date": "2022-01-27",
            "organization": "SCYTHE",
            "author": "Nathali Cano",
            "title": "Adversary Emulation Diavol Ransomware #ThreatThursday",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fbi-links-diavol-ransomware-to-the-trickbot-cybercrime-group/",
            "date": "2022-01-20",
            "organization": "BleepingComputer",
            "author": "Lawrence Abrams",
            "title": "FBI links Diavol ransomware to the TrickBot cybercrime group",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2022/220120.pdf",
            "date": "2022-01-19",
            "organization": "FBI",
            "author": "FBI",
            "title": "CU-000161-MW: Indicators of Compromise Associated with Diavol Ransomware",
            "categories": [
                "Diavol",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://chuongdong.com/reverse%20engineering/2021/12/17/DiavolRansomware/",
            "date": "2021-12-17",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "Diavol Ransomware",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/12/13/diavol-ransomware/",
            "date": "2021-12-13",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Diavol Ransomware",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/trickbot-gang-developer-arrested-when-trying-to-leave-korea/",
            "date": "2021-09-06",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "TrickBot gang developer arrested when trying to leave Korea",
            "categories": [
                "Diavol",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/diavol-ransomware-sample-shows-stronger-connection-to-trickbot-gang/",
            "date": "2021-08-18",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Diavol ransomware sample shows stronger connection to TrickBot gang",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/analysis-of-diavol-ransomware-link-trickbot-gang/",
            "date": "2021-08-17",
            "organization": "IBM X-Force Exchange",
            "author": "Charlotte Hammond",
            "title": "Analysis of Diavol Ransomware Reveals Possible Link to TrickBot Gang",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://heimdalsecurity.com/blog/is-diavol-ransomware-connected-to-wizard-spider/",
            "date": "2021-07-06",
            "organization": "Heimdal Security",
            "author": "Dora Tudor",
            "title": "Is Diavol Ransomware Connected to Wizard Spider?",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.binarydefense.com/threat_watch/new-ransomware-diavol-being-dropped-by-trickbot/",
            "date": "2021-07-02",
            "organization": "Binary Defense",
            "author": "Garrett Thompson",
            "title": "New Ransomware \u201cDiavol\u201d Being Dropped by Trickbot",
            "categories": [
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/diavol-new-ransomware-used-by-wizard-spider",
            "date": "2021-07-01",
            "organization": "Fortinet",
            "author": "Dor Neemani",
            "title": "Diavol - A New Ransomware Used By Wizard Spider?",
            "categories": [
                "Conti",
                "Diavol"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "diavol",
            "procedure_code": "s0659",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0659",
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
                    "procedure_description": "diavol has used several api calls like getlogicaldrivestrings, sleepex, systemparametersinfoapi, cryptencrypt, and others to execute parts of its attack.[69]"
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
                    "procedure_description": "diavol can attempt to stop security software.[28]"
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
                    "procedure_description": "diavol has base64 encoded the rsa public key used for encrypting files.[100]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "diavol has obfuscated its main code routines within bitmap images as part of its anti-analysis techniques.[9]"
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
                    "procedure_description": "diavol has a command to traverse the files and directories in a given path.[104]"
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
                    "procedure_description": "diavol has a enmdsks command to enumerates available network shares.[29]"
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
                    "procedure_description": "diavol has used createtoolhelp32snapshot, process32first, and process32next api calls to enumerate the running processes in the system.[78]"
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
                    "procedure_description": "diavol can use the arp table to find remote hosts to scan.[32]"
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
                    "procedure_description": "diavol can collect the computer name and os version from the system.[113]"
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
                    "procedure_description": "diavol can enumerate victims' local and external ips when registering with c2.[70]"
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
                    "procedure_description": "diavol can collect the username from a compromised host.[49]"
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
                    "procedure_description": "diavol can spread throughout a network via smb prior to encryption.[24]"
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
                    "procedure_description": "diavol has used http get and post requests for c2.[97]"
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
                    "procedure_description": "diavol can receive configuration updates and additional payloads including wscpy.exe from c2.[144]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "diavol can delete specified files from a targeted system.[14]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "diavol has encrypted files using an rsa key though the cryptencrypt api and has appended filenames with \".lock64\". [42]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1491.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1491/001",
                    "technique_name": "defacement : internal defacement",
                    "technique_description": "an adversary may deface systems internal to an organization in an attempt to intimidate or mislead users, thus discrediting the integrity of the systems. this may take the form of modifications to internal websites, or directly to user systems with the replacement of the desktop wallpaper. disturbing or offensive images may be used as a part of internal defacement in order to cause user discomfort, or to pressure compliance with accompanying messages. since internally defacing systems exposes an adversary's presence, it often takes place after other intrusion goals have been accomplished.",
                    "procedure_description": "after encryption, diavol will capture the desktop background window, set the background color to black, and change the desktop wallpaper to a newly created bitmap image with the text \"all your files are encrypted! for more information see \"readme-for-decrypt.txt\".[14]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "diavol can delete shadow copies using the ivssbackupcomponents com object to call the deletesnapshots method.[27]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "diavol will terminate services using the service control manager (scm) api.[15]"
                }
            ]
        }
    ]
};