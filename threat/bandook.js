var threatdata = {
    "name": "Bandook",
    "alias": "Bandook, Bandok",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-02-10",
    "all_data": {
        "tool": "Bandook",
        "names": [
            {
                "name": "Bandook"
            },
            {
                "name": "Bandok"
            }
        ],
        "description": "Bandook is a commercially available RAT, written in Delphi, which has been available since roughly 2007.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.eff.org/files/2016/08/03/i-got-a-letter-from-the-government.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0234/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bandook"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Bandook"
        ],
        "uuid": "2dd98bbc-2ce7-4c49-ac87-3eededb8a713",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bandook",
            "malware_alias": "Bandok",
            "malware": "win.bandook",
            "last_update": "2023-08-02 06:09:14",
            "tags": [
                "APT",
                "Bandook",
                "DarkCaracal"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "194.87.48.126:7893",
                        "timestamp": "2023-08-02 06:09:14"
                    },
                    {
                        "value": "45.142.214.31:7892",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "5.34.182.29:4443",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "80.233.134.242:9991",
                        "timestamp": "2023-08-02 06:09:13"
                    },
                    {
                        "value": "80.233.134.242:9995",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5081",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5082",
                        "timestamp": "2023-08-02 06:09:12"
                    },
                    {
                        "value": "83.97.20.153:5083",
                        "timestamp": "2023-08-02 06:09:11"
                    },
                    {
                        "value": "83.97.20.153:5085",
                        "timestamp": "2023-08-02 06:09:11"
                    },
                    {
                        "value": "91.193.18.203:9991",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "91.193.18.203:9995",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "91.238.50.105:4441",
                        "timestamp": "2023-08-02 06:09:10"
                    },
                    {
                        "value": "193.200.16.175:9991",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "193.200.16.175:9995",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "194.5.250.103:7891",
                        "timestamp": "2023-08-02 06:08:34"
                    },
                    {
                        "value": "185.243.114.89:7891",
                        "timestamp": "2023-08-02 06:08:33"
                    },
                    {
                        "value": "185.10.68.52:6592",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.10.68.52:6593",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.106.122.71:7891",
                        "timestamp": "2023-08-02 06:08:32"
                    },
                    {
                        "value": "185.10.68.52:6591",
                        "timestamp": "2023-08-02 06:08:31"
                    }
                ],
                "domain": [
                    {
                        "value": "2ndprog.monster",
                        "timestamp": "2023-08-02 06:09:09"
                    },
                    {
                        "value": "bomes.ru",
                        "timestamp": "2023-08-02 06:09:08"
                    },
                    {
                        "value": "branchesv.com",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "cumumberpro.org",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "d1.ngobmc.com",
                        "timestamp": "2023-08-02 06:09:07"
                    },
                    {
                        "value": "d2.ngobmc.com",
                        "timestamp": "2023-08-02 06:09:06"
                    },
                    {
                        "value": "deapproved.ru",
                        "timestamp": "2023-08-02 06:09:06"
                    },
                    {
                        "value": "ercuc.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "ewsdocs.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "horizongb.com",
                        "timestamp": "2023-08-02 06:09:05"
                    },
                    {
                        "value": "htname.info",
                        "timestamp": "2023-08-02 06:09:04"
                    },
                    {
                        "value": "idcmht.com",
                        "timestamp": "2023-08-02 06:09:04"
                    },
                    {
                        "value": "iamgood.blogdns.net",
                        "timestamp": "2023-08-02 06:08:55"
                    },
                    {
                        "value": "jtoolbox.org",
                        "timestamp": "2023-08-02 06:08:54"
                    },
                    {
                        "value": "ladvsa.club",
                        "timestamp": "2023-08-02 06:08:54"
                    },
                    {
                        "value": "mainsrv.top",
                        "timestamp": "2023-08-02 06:08:53"
                    },
                    {
                        "value": "megawoc.com",
                        "timestamp": "2023-08-02 06:08:53"
                    },
                    {
                        "value": "mxtms.com",
                        "timestamp": "2023-08-02 06:08:52"
                    },
                    {
                        "value": "ngobmc.com",
                        "timestamp": "2023-08-02 06:08:52"
                    },
                    {
                        "value": "nopejohn.com",
                        "timestamp": "2023-08-02 06:08:51"
                    },
                    {
                        "value": "ntsclouds.com",
                        "timestamp": "2023-08-02 06:08:51"
                    },
                    {
                        "value": "olex.live",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "p2020.xyz",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "panjo.club",
                        "timestamp": "2023-08-02 06:08:50"
                    },
                    {
                        "value": "pdafact.com",
                        "timestamp": "2023-08-02 06:08:49"
                    },
                    {
                        "value": "pronews.icu",
                        "timestamp": "2023-08-02 06:08:47"
                    },
                    {
                        "value": "r1.panjo.club",
                        "timestamp": "2023-08-02 06:08:46"
                    },
                    {
                        "value": "raysdoor.com",
                        "timestamp": "2023-08-02 06:08:46"
                    },
                    {
                        "value": "s1.megawoc.com",
                        "timestamp": "2023-08-02 06:08:45"
                    },
                    {
                        "value": "styleco.me",
                        "timestamp": "2023-08-02 06:08:45"
                    },
                    {
                        "value": "tancredis.com",
                        "timestamp": "2023-08-02 06:08:41"
                    },
                    {
                        "value": "vdscloud.net",
                        "timestamp": "2023-08-02 06:08:40"
                    },
                    {
                        "value": "vrunabo.su",
                        "timestamp": "2023-08-02 06:08:40"
                    },
                    {
                        "value": "vsimperial.com",
                        "timestamp": "2023-08-02 06:08:39"
                    },
                    {
                        "value": "gombos.ru",
                        "timestamp": "2023-08-01 21:42:03"
                    },
                    {
                        "value": "humut.su",
                        "timestamp": "2023-08-01 21:42:03"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "b4487540e638679b9bc290c706add379",
                        "timestamp": "2022-09-14 15:51:42"
                    },
                    {
                        "value": "e69e20bd1e9a855e180cff9fa66cc050",
                        "timestamp": "2022-09-14 15:51:42"
                    },
                    {
                        "value": "cb30e5ba39200df4ed1934b0a29c9c44",
                        "timestamp": "2022-01-07 11:00:56"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-08-02 06:09:14",
    "file_name": "bandook",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.eff.org/deeplinks/2023/02/uncle-sow-dark-caracal-latin-america",
            "date": "2023-02-10",
            "organization": "Electronic Frontier Foundation",
            "author": "Cooper Quintin",
            "title": "Uncle Sow: Dark Caracal in Latin America",
            "categories": [
                "Bandook"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/new-threat-actor-uses-spanish-language-lures-distribute-seldom-observed-bandook",
            "date": "2021-07-19",
            "organization": "Proofpoint",
            "author": "Joe Wise",
            "title": "New Threat Actor Uses Spanish Language Lures to Distribute Seldom Observed Bandook Malware",
            "categories": [
                "Bandook"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/07/07/bandidos-at-large-spying-campaign-latin-america/",
            "date": "2021-07-07",
            "organization": "ESET Research",
            "author": "Fernando Tavella",
            "title": "Bandidos at large: A spying campaign in Latin America",
            "categories": [
                "Bandook"
            ]
        },
        {
            "data_url": "https://www.eff.org/deeplinks/2020/12/dark-caracal-you-missed-spot",
            "date": "2020-12-10",
            "organization": "Electronic Frontier Foundation",
            "author": "Cooper Quintin",
            "title": "Dark Caracal: You Missed a Spot",
            "categories": [
                "Bandook"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/bandook-signed-delivered",
            "date": "2020-11-26",
            "organization": "Check Point",
            "author": "Checkpoint Research",
            "title": "Bandook: Signed & Delivered",
            "categories": [
                "Bandook",
                "Dark Caracal"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/bandook-signed-delivered/",
            "date": "2020-11-26",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Bandook: Signed & Delivered",
            "categories": [
                "Bandook"
            ]
        },
        {
            "data_url": "https://info.lookout.com/rs/051-ESQ-475/images/Lookout_Dark-Caracal_srr_20180118_us_v.1.0.pdf",
            "date": "2018-01-18",
            "organization": "Lookout",
            "author": "Andrew Blaich",
            "title": "Dark Caracal: Cyber-espionage at a Global Scal",
            "categories": [
                "CrossRAT",
                "Bandook",
                "Dark Caracal"
            ]
        },
        {
            "data_url": "https://www.eff.org/files/2018/01/29/operation-manul.pdf",
            "date": "2016-08",
            "organization": "Electronic Frontier Foundation",
            "author": "Eva Galperin",
            "title": "Operation Manul",
            "categories": [
                "jRAT",
                "Bandook"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bandook",
            "procedure_code": "s0234",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0234",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "bandook is delivered via a malicious word document inside a zip file.[41]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "bandook can support commands to execute java-based payloads.[9]"
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
                    "procedure_description": "bandook has used powershell loaders as part of execution.[30]"
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
                    "procedure_description": "bandook is capable of spawning a windows command shell.[37][38]"
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
                    "procedure_description": "bandook has used malicious vba code against the target system.[17]"
                },
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
                    "procedure_description": "bandook can support commands to execute python-based payloads.[5]"
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
                    "procedure_description": "bandook has used the shellexecutew() function call.[31]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "bandook has used lure documents to convince the user to enable macros.[36]"
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
                    "procedure_description": "bandook has been launched by starting iexplore.exe and replacing it with bandook's payload.[9][10][11]"
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
                    "procedure_description": "bandook has decoded its powershell script.[27]"
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
                    "procedure_description": "bandook has a command to delete a file.[23]"
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
                    "procedure_description": "bandook has used .png images within a zip file to build the executable. [8]"
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
                    "procedure_description": "bandook has been launched by starting iexplore.exe and replacing it with bandook's payload.[9][10][11]"
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
                    "procedure_description": "bandook was signed with valid certum certificates.[10]"
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
                    "procedure_description": "bandook contains keylogging capabilities.[29]"
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
                    "procedure_description": "bandook has a command to list files on a system.[38]"
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
                    "procedure_description": "bandook can detect usb devices.[10]"
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
                    "procedure_description": "bandook can collect information about the drives available on the system.[48]"
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
                    "procedure_description": "bandook has a command to get the public ip address from a system.[32]"
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
                    "procedure_description": "bandook has modules that are capable of capturing audio.[3]"
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
                    "procedure_description": "bandook can collect local files from the system .[23]"
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
                    "procedure_description": "bandook contains keylogging capabilities.[29]"
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
                    "procedure_description": "bandook is capable of taking an image of and uploading the current desktop.[22][23]"
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
                    "procedure_description": "bandook has modules that are capable of capturing video from a victim's webcam.[4]"
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
                    "procedure_description": "bandook has used aes encryption for c2 communication.[11]"
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
                    "procedure_description": "bandook can download files to the system.[56]"
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
                    "procedure_description": "bandook has a command built in to use a raw tcp socket.[9]"
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
                    "procedure_description": "bandook can upload files from a victim's machine over the c2 channel.[12]"
                }
            ]
        },
        {
            "procedure_name": "dok",
            "procedure_code": "s0281",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0281",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/002",
                    "technique_name": "command and scripting interpreter : applescript",
                    "technique_description": "adversaries may abuse applescript for execution. applescript is a macos scripting language designed to control applications and parts of the os via inter-application messages called appleevents. these appleevent messages can be sent independently or easily scripted with applescript. these events can locate open windows, send keystrokes, and interact with almost any open application locally or remotely.",
                    "procedure_description": "dok uses applescript to create a login item for persistence.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/015",
                    "technique_name": "boot or logon autostart execution : login items",
                    "technique_description": "adversaries may add login items to execute upon user login to gain persistence or escalate privileges. login items are applications, documents, folders, or server connections that are automatically launched when a user logs in. login items can be added via a shared file list or service management framework. shared file list login items can be set using scripting languages such as applescript, whereas the service management framework uses the api call smloginitemsetenabled.",
                    "procedure_description": "dok uses applescript to install a login item by sending apple events to the system events process.[8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "dok installs two launchagents to redirect all network traffic with a randomly generated name for each plist file maintaining the format com.random.name.plist.[16][17]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/003",
                    "technique_name": "abuse elevation control mechanism : sudo and sudo caching",
                    "technique_description": "adversaries may perform sudo caching and/or use the sudoers file to elevate privileges. adversaries may do this to execute commands as other users or spawn processes with higher privileges.",
                    "procedure_description": "dok adds admin  all=(all) nopasswd: all to the /etc/sudoers file.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.015",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/015",
                    "technique_name": "boot or logon autostart execution : login items",
                    "technique_description": "adversaries may add login items to execute upon user login to gain persistence or escalate privileges. login items are applications, documents, folders, or server connections that are automatically launched when a user logs in. login items can be added via a shared file list or service management framework. shared file list login items can be set using scripting languages such as applescript, whereas the service management framework uses the api call smloginitemsetenabled.",
                    "procedure_description": "dok uses applescript to install a login item by sending apple events to the system events process.[8]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/001",
                    "technique_name": "create or modify system process : launch agent",
                    "technique_description": "adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. when a user logs in, a per-user launchd process is started which loads the parameters for each launch-on-demand user agent from the property list (.plist) file found in /system/library/launchagents, /library/launchagents, and ~/library/launchagents.  property list files use the label, programarguments , and runatload keys to identify the launch agent's name, executable location, and execution time. launch agents are often installed to perform updates to programs, launch user specified programs at login, or to conduct other developer tasks.",
                    "procedure_description": "dok installs two launchagents to redirect all network traffic with a randomly generated name for each plist file maintaining the format com.random.name.plist.[16][17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/003",
                    "technique_name": "abuse elevation control mechanism : sudo and sudo caching",
                    "technique_description": "adversaries may perform sudo caching and/or use the sudoers file to elevate privileges. adversaries may do this to execute commands as other users or spawn processes with higher privileges.",
                    "procedure_description": "dok adds admin  all=(all) nopasswd: all to the /etc/sudoers file.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/002",
                    "technique_name": "file and directory permissions modification : linux and mac file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "dok gives all users execute permissions for the application using the command chmod +x /users/shared/appstore.app.[6]"
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
                    "procedure_description": "dok is packed with an upx executable packer.[31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/004",
                    "technique_name": "subvert trust controls : install root certificate",
                    "technique_description": "adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. root certificates are used in public key cryptography to identify a root certificate authority (ca). when a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate. certificates are commonly used for establishing secure tls/ssl communications within a web browser. when a user attempts to browse a website that presents a certificate that is not trusted an error message will be displayed to warn the user of the security risk. depending on the security settings, the browser may not allow the user to establish a connection to the website.",
                    "procedure_description": "dok installs a root certificate to aid in adversary-in-the-middle actions using the command add-trusted-cert -d -r trustroot -k /library/keychains/system.keychain /tmp/filename.[7][8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557",
                    "technique_link": "https://attack.mitre.org/techniques/T1557",
                    "technique_name": "adversary-in-the-middle",
                    "technique_description": "adversaries may attempt to position themselves between two or more networked devices using an adversary-in-the-middle (aitm) technique to support follow-on behaviors such as network sniffing or transmitted data manipulation. by abusing features of common networking protocols that can determine the flow of network traffic (e.g. arp, dns, llmnr, etc.), adversaries may force a device to communicate through an adversary controlled system so they can collect information or perform additional actions.",
                    "procedure_description": "dok proxies web traffic to potentially monitor and alter victim http(s) traffic.[9][10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "dok prompts the user for credentials.[8]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557",
                    "technique_link": "https://attack.mitre.org/techniques/T1557",
                    "technique_name": "adversary-in-the-middle",
                    "technique_description": "adversaries may attempt to position themselves between two or more networked devices using an adversary-in-the-middle (aitm) technique to support follow-on behaviors such as network sniffing or transmitted data manipulation. by abusing features of common networking protocols that can determine the flow of network traffic (e.g. arp, dns, llmnr, etc.), adversaries may force a device to communicate through an adversary controlled system so they can collect information or perform additional actions.",
                    "procedure_description": "dok proxies web traffic to potentially monitor and alter victim http(s) traffic.[9][10]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "dok prompts the user for credentials.[8]"
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
                    "procedure_description": "dok downloads and installs tor via homebrew.[8]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "dok exfiltrates logs of its execution stored in the /tmp folder over ftp using the curl command.[17]"
                }
            ]
        }
    ]
};