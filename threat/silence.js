var threatdata = {
    "name": "Silence",
    "alias": "Silence, Silence.Downloader, TrueBot",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2023-07-06",
    "all_data": {
        "tool": "Silence",
        "names": [
            {
                "name": "Silence"
            },
            {
                "name": "Silence.Downloader"
            },
            {
                "name": "TrueBot"
            }
        ],
        "description": "(Group-IB) Silence is a framework for attacks on infrastructure.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.group-ib.com/resources/threat-research/silence_moving-into-the-darkside.pdf",
            "https://www.group-ib.com/resources/threat-research/silence.html",
            "http://www.intezer.com/silenceofthemoles/",
            "https://securelist.com/the-silence/83009/",
            "https://reaqta.com/2019/01/silence-group-targeting-russian-banks/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.silence"
        ],
        "uuid": "1bbb3b49-056e-4e46-b9fa-c8da3c39a027",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Silence",
            "malware_alias": "TrueBot",
            "malware": "win.silence",
            "last_update": "2023-09-11 07:20:20",
            "tags": [
                "Silence",
                "TrueBot",
                "truebot"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "files-gate.com",
                        "timestamp": "2023-09-11 07:20:20"
                    },
                    {
                        "value": "nitutdra.com",
                        "timestamp": "2023-06-13 16:58:13"
                    },
                    {
                        "value": "dragonetzone.com",
                        "timestamp": "2023-06-06 09:50:10"
                    },
                    {
                        "value": "midnigthwaall.com",
                        "timestamp": "2023-06-05 06:56:55"
                    },
                    {
                        "value": "romidonionhhgtt.com",
                        "timestamp": "2023-06-01 11:55:41"
                    },
                    {
                        "value": "revisionnumeer.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "rprotecruuio.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "blocksdeer.com",
                        "timestamp": "2023-06-01 11:55:17"
                    },
                    {
                        "value": "essadonio.com",
                        "timestamp": "2023-05-20 17:39:46"
                    },
                    {
                        "value": "listofword.com",
                        "timestamp": "2023-05-18 13:54:06"
                    },
                    {
                        "value": "cdn-backdl.com",
                        "timestamp": "2023-05-18 13:42:57"
                    },
                    {
                        "value": "nomoresense.com",
                        "timestamp": "2023-05-18 09:13:50"
                    },
                    {
                        "value": "ronoliffuion.com",
                        "timestamp": "2023-05-12 17:51:47"
                    },
                    {
                        "value": "bluespiredice.com",
                        "timestamp": "2023-05-12 17:51:02"
                    },
                    {
                        "value": "dremmfyttrred.com",
                        "timestamp": "2023-05-06 05:42:00"
                    },
                    {
                        "value": "ber6vjyb.com",
                        "timestamp": "2023-04-13 18:12:11"
                    },
                    {
                        "value": "droogggdhfhf.com",
                        "timestamp": "2023-04-08 15:40:30"
                    }
                ],
                "ip:port": [
                    {
                        "value": "46.161.40.128:80",
                        "timestamp": "2023-06-03 18:15:33"
                    },
                    {
                        "value": "45.182.189.71:80",
                        "timestamp": "2023-05-20 17:39:18"
                    },
                    {
                        "value": "46.161.40.92:80",
                        "timestamp": "2023-05-18 13:43:26"
                    },
                    {
                        "value": "45.182.189.118:80",
                        "timestamp": "2023-05-18 13:42:20"
                    },
                    {
                        "value": "45.182.189.91:80",
                        "timestamp": "2023-05-18 09:12:32"
                    },
                    {
                        "value": "45.182.189.120:80",
                        "timestamp": "2023-05-12 17:51:26"
                    },
                    {
                        "value": "45.182.189.119:80",
                        "timestamp": "2023-05-12 17:50:41"
                    },
                    {
                        "value": "92.118.36.210:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.200:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "193.29.13.157:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "88.214.27.100:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "179.60.150.120:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.103:80",
                        "timestamp": "2023-05-06 10:18:31"
                    },
                    {
                        "value": "45.182.189.103:443",
                        "timestamp": "2023-05-06 05:40:46"
                    },
                    {
                        "value": "92.118.36.252:80",
                        "timestamp": "2023-04-13 18:11:36"
                    }
                ],
                "url": [
                    {
                        "value": "https://dremmfyttrred.com/dns.php",
                        "timestamp": "2023-05-06 05:45:16"
                    },
                    {
                        "value": "http://ber6vjyb.com/dns.php",
                        "timestamp": "2023-04-13 18:12:59"
                    },
                    {
                        "value": "http://62.204.41.69/ldn.dll",
                        "timestamp": "2023-04-08 13:02:20"
                    },
                    {
                        "value": "http://62.204.41.69/ldn.png",
                        "timestamp": "2023-04-08 12:58:23"
                    },
                    {
                        "value": "http://62.204.41.69/dll.png",
                        "timestamp": "2023-04-08 12:56:43"
                    },
                    {
                        "value": "http://nefosferta.comhttp://nefosferta.com/gate.php",
                        "timestamp": "2022-10-12 10:41:01"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "c0f8aeeb2d11c6e751ee87c40ee609aceb1c1036706a5af0d3d78738b6cc4125",
                        "timestamp": "2023-04-13 18:13:29"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "f52363b6cf282669e5fcc5537b5c3451",
                        "timestamp": "2023-04-08 13:05:34"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-11 07:20:20",
    "file_name": "silence",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-187a",
            "date": "2023-07-06",
            "organization": "CISA",
            "author": "CISA",
            "title": "Increased Truebot Activity Infects U.S. and Canada Based Networks",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2023/06/12/a-truly-graceful-wipe-out/",
            "date": "2023-06-12",
            "organization": "The DFIR Report",
            "author": "Maxime Thiebaut",
            "title": "A Truly Graceful Wipe Out",
            "categories": [
                "FlawedGrace",
                "Silence"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2023/06/carbon-blacks-truebot-detection.html",
            "date": "2023-06-01",
            "organization": "vmware",
            "author": "Fae Carlisle",
            "title": "Carbon Black\u2019s TrueBot Detection",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://research.loginsoft.com/threat-research/taming-the-storm-understanding-and-mitigating-the-consequences-of-cve-2023-27350/",
            "date": "2023-05-23",
            "organization": "loginsoft",
            "author": "Saharsh Agrawal",
            "title": "Taming the Storm: Understanding and Mitigating the Consequences of CVE-2023-27350",
            "categories": [
                "Clop",
                "LockBit",
                "Silence"
            ]
        },
        {
            "data_url": "https://malware.love/malware_analysis/reverse_engineering/2023/03/31/analyzing-truebot-capabilities.html",
            "date": "2023-03-31",
            "organization": "malware.love",
            "author": "Robert Giczewski",
            "title": "TrueBot Analysis Part III - Capabilities",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/x-force-prevents-zero-day-from-going-anywhere",
            "date": "2023-03-30",
            "organization": "IBM",
            "author": "John Dwyer",
            "title": "X-Force Prevents Zero Day from Going Anywhere",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/RIG___TLP_CLEAR-1.pdf",
            "date": "2023-02-27",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "RIG Exploit Kit: In-Depth Analysis",
            "categories": [
                "Dridex",
                "IcedID",
                "ISFB",
                "PureCrypter",
                "Raccoon",
                "RecordBreaker",
                "RedLine Stealer",
                "Royal Ransom",
                "Silence",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://malware.love/malware_analysis/reverse_engineering/2023/02/18/analyzing-truebot-static-unpacking.html",
            "date": "2023-02-18",
            "organization": "malware.love",
            "author": "Robert Giczewski",
            "title": "TrueBot Analysis Part II - Static unpacker",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://malware.love/malware_analysis/reverse_engineering/2023/02/12/analyzing-truebot-packer.html",
            "date": "2023-02-12",
            "organization": "malware.love",
            "author": "Robert Giczewski",
            "title": "TrueBot Analysis Part I - A short glimpse into packed TrueBot samples",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://www.huntress.com/blog/investigating-intrusions-from-intriguing-exploits",
            "date": "2023-02-08",
            "organization": "Huntress Labs",
            "author": "Joe Slowik",
            "title": "Investigating Intrusions From Intriguing Exploits",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/",
            "date": "2022-12-08",
            "organization": "Cisco Talos",
            "author": "Tiago Pereira",
            "title": "Breaking the silence - Recent Truebot activity",
            "categories": [
                "Clop",
                "Cobalt Strike",
                "FlawedGrace",
                "Raspberry Robin",
                "Silence",
                "Teleport"
            ]
        },
        {
            "data_url": "https://outpost24.com/blog/using-qiling-framework-to-unpack-ta505-packed-samples/",
            "date": "2020-12-14",
            "organization": "Blueliv",
            "author": "Alberto Mar\u00edn",
            "title": "Using Qiling Framework to Unpack TA505 packed samples",
            "categories": [
                "AndroMut",
                "Azorult",
                "Silence",
                "TinyMet"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=FttiysUZmDw",
            "date": "2020-07-21",
            "organization": "YouTube ( OPCDE with Matt Suiche)",
            "author": "Mohamad Mokbel",
            "title": "vOPCDE #9 - A Journey into Malware HTTP Communication Channels Spectacles (Mohamad Mokbel)",
            "categories": [
                "Alureon",
                "Aytoke",
                "Cobra Carbon System",
                "CROSSWALK",
                "danbot",
                "ProtonBot",
                "Silence"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-004.pdf",
            "date": "2020-04-23",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "LE GROUPE CYBERCRIMINEL SILENCE",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-s-box-of-chocolate-597672",
            "date": "2020-03-26",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505's Box of Chocolate - On Hidden Gems packed with the TA505 Packer",
            "categories": [
                "Amadey",
                "Azorult",
                "Clop",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "Silence",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://github.com/Tera0017/TAFOF-Unpacker",
            "date": "2020-01-13",
            "organization": "Github (Tera0017)",
            "author": "Tera0017",
            "title": "TAFOF Unpacker",
            "categories": [
                "Clop",
                "Get2",
                "Silence"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/resources/threat-research/silence_2.0.going_global.pdf",
            "date": "2019-08",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "Silence 2.0 - Going Global",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/resources/threat-research/silence.html",
            "date": "2019-08",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "Attacks by Silence",
            "categories": [
                "Silence DDoS",
                "Kikothac",
                "Silence"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/how-the-silence-downloader-has-evolved-over-time/",
            "date": "2019-02-11",
            "organization": "One Night in Norfolk",
            "author": "Kevin Perlow",
            "title": "How the Silence Downloader Has Evolved Over Time",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/some-notes-on-the-silence-proxy/",
            "date": "2019-02-06",
            "organization": "One Night in Norfolk",
            "author": "Kevin Perlow",
            "title": "Some Notes on the Silence Proxy",
            "categories": [
                "Silence"
            ]
        },
        {
            "data_url": "https://reaqta.com/2019/01/silence-group-targeting-russian-banks/",
            "date": "2019-01-24",
            "organization": "Reaqta",
            "author": "Reaqta",
            "title": "Silence group targeting Russian Banks via Malicious CHM",
            "categories": [
                "Silence",
                "Silence group"
            ]
        },
        {
            "data_url": "https://securelist.com/the-silence/83009/",
            "date": "2017-11-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Silence \u2013 a new Trojan attacking financial organizations",
            "categories": [
                "Silence",
                "Silence group"
            ]
        },
        {
            "data_url": "http://www.intezer.com/silenceofthemoles/",
            "date": "2017-11-01",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "Silence of the Moles",
            "categories": [
                "Silence"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "silence",
            "procedure_code": "g0091",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0091",
            "techniques": [
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
                    "procedure_description": "silence has obtained and modified versions of publicly-available tools like empire and psexec.[87] [88]"
                },
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
                    "procedure_description": "silence has sent emails with malicious docx, chm, lnk and zip attachments. [207][208][209]"
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
                    "procedure_description": "silence has used compromised credentials to log on to other systems and escalate privileges.[56]"
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
                    "procedure_description": "silence has used powershell to download and execute payloads.[208][209]"
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
                    "procedure_description": "silence has used windows command-line to run commands.[304][305][306]"
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
                    "procedure_description": "silence has used vbs scripts.[144]"
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
                    "procedure_description": "silence has used js scripts.[61]"
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
                    "procedure_description": "silence has leveraged the windows api, including using createprocess() or shellexecute(), to perform a variety of tasks.[156][157]"
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
                    "procedure_description": "silence has used scheduled tasks to stage its operation.[160]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "silence has used radmin, a remote software tool used to remotely control workstations and atms.[4]"
                },
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
                    "procedure_description": "silence has used winexe to install a service on the remote system.[54][55]"
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
                    "procedure_description": "silence attempts to get users to launch malicious attachments delivered via spearphishing emails.[216][217][218]"
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
                    "procedure_description": "silence has used hkcu\\software\\microsoft\\windows\\currentversion\\run, hklm\\software\\microsoft\\windows\\currentversion\\run, and the startup folder to establish persistence.[244]"
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
                    "procedure_description": "silence has used scheduled tasks to stage its operation.[160]"
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
                    "procedure_description": "silence has used compromised credentials to log on to other systems and escalate privileges.[56]"
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
                    "procedure_description": "silence has used hkcu\\software\\microsoft\\windows\\currentversion\\run, hklm\\software\\microsoft\\windows\\currentversion\\run, and the startup folder to establish persistence.[244]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "silence has injected a dll library containing a trojan into the fwmain32.exe process.[56]"
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
                    "procedure_description": "silence has used scheduled tasks to stage its operation.[160]"
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
                    "procedure_description": "silence has used compromised credentials to log on to other systems and escalate privileges.[56]"
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
                    "procedure_description": "silence has deleted artifacts, including scheduled tasks, communicates files from the c2 and other logs.[217][218]"
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
                    "procedure_description": "silence has named its backdoor \"winword.exe\".[150]"
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
                    "procedure_description": "silence can create, delete, or modify a specified registry key or value.[147]"
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
                    "procedure_description": "silence has used environment variable string substitution for obfuscation.[80]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "silence has injected a dll library containing a trojan into the fwmain32.exe process.[56]"
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
                    "procedure_description": "silence has used a valid certificate to sign their primary loader silence.downloader (aka truebot).[63]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/001",
                    "technique_name": "system binary proxy execution : compiled html file",
                    "technique_description": "adversaries may abuse compiled html files (.chm) to conceal malicious code. chm files are commonly distributed as part of the microsoft html help system. chm files are compressed compilations of various content such as html documents, images, and scripting/web related programming languages such vba, jscript, java, and activex.  chm content is displayed using underlying components of the internet explorer browser  loaded by the html help executable program (hh.exe).",
                    "procedure_description": "silence has weaponized chm files in their phishing campaigns.[11][12][13][14]"
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
                    "procedure_description": "silence has used compromised credentials to log on to other systems and escalate privileges.[56]"
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
                    "procedure_description": "silence has used the farse6.1 utility (based on mimikatz) to extract credentials from lsass.exe.[81]"
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
                    "procedure_description": "silence has used nmap to scan the corporate network, build a network topology, and identify vulnerable hosts.[80]"
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
                    "procedure_description": "silence has used rdp for lateral movement.[51]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1072",
                    "technique_link": "https://attack.mitre.org/techniques/T1072",
                    "technique_name": "software deployment tools",
                    "technique_description": "adversaries may gain access to and use third-party software suites installed within an enterprise network, such as administration, monitoring, and deployment systems, to move laterally through the network. third-party applications and software deployment systems may be in use in the network environment for administration purposes (e.g., sccm, hbss, altiris, etc.).",
                    "procedure_description": "silence has used radmin, a remote software tool used to remotely control workstations and atms.[4]"
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
                    "procedure_description": "silence can capture victim screen activity.[154][155]"
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
                    "procedure_description": "silence has been observed making videos of victims to observe bank employees day to day activities.[43][44]"
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
                    "procedure_description": "silence has downloaded additional modules and malware to victim\u2019s machines.[411]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "silence has used port 444 when sending data about the system from the client to the server.[35]"
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
                    "procedure_description": "silence has used proxybot, which allows the attacker to redirect traffic from the current node to the backconnect server via sock4\\socks5.[24]"
                }
            ]
        }
    ]
};