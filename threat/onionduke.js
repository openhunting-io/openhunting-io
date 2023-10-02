var threatdata = {
    "name": "OnionDuke",
    "alias": "OnionDuke",
    "category": "Malware",
    "type": "Dropper, Loader, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "OnionDuke",
        "names": [
            {
                "name": "OnionDuke"
            }
        ],
        "description": "(F-Secure) The OnionDuke toolset includes at least a dropper, a loader, an information stealer trojan and multiple modular variants with associated modules.\n\nOnionDuke first caught our attention because it was being spread via a malicious Tor exit node. The Tor node would intercept any unencrypted executable files being downloaded and modify those executables by adding a malicious wrapper contained an embedded OnionDuke. Once the victim finished downloading the file and executed it, the wrapper would infect the victim\u2019s computer with OnionDuke before executing the original legitimate executable.\n\nThe same wrapper has also been used to wrap legitimate executable files, which were then made available for users to download from torrent sites. Again, if a victim downloaded a torrent containing a wrapped executable, they would get infected with OnionDuke.\n\nFinally, we have also observed victims being infected with OnionDuke after they were already infected with {{CozyDuke}}. In these cases, CozyDuke was instructed by its C&C server to download and execute OnionDuke toolset.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Loader",
            "Info stealer"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "http://contagiodump.blogspot.com/2014/11/onionduke-samples.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0052/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.onionduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:onionduke"
        ],
        "uuid": "4b23da0a-7140-4fc2-b9fa-cc896215964e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "onionduke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.f-secure.com/podcast-dukes-apt29/",
            "date": "2020-05-06",
            "organization": "F-Secure Labs",
            "author": "Melissa Michael",
            "title": "039| Deconstructing the Dukes: A Researcher\u2019s Retrospective of APT29",
            "categories": [
                "OnionDuke"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2020/03/26/the-dukes-of-moscow/",
            "date": "2020-03-26",
            "organization": "VMWare Carbon Black",
            "author": "Scott Knight",
            "title": "The Dukes of Moscow",
            "categories": [
                "Cobalt Strike",
                "LiteDuke",
                "MiniDuke",
                "OnionDuke",
                "PolyglotDuke",
                "PowerDuke"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-hemlock",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON HEMLOCK",
            "categories": [
                "FatDuke",
                "MiniDuke",
                "OnionDuke",
                "PolyglotDuke",
                "APT29"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2014/11/onionduke-samples.html",
            "date": "2014-11-15",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "OnionDuke samples",
            "categories": [
                "OnionDuke"
            ]
        },
        {
            "data_url": "https://www.f-secure.com/weblog/archives/00002764.html",
            "date": "2014-11-14",
            "organization": "F-Secure",
            "author": "F-Secure Labs",
            "title": "OnionDuke: APT Attacks Via the Tor Network",
            "categories": [
                "OnionDuke"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "onionduke",
            "procedure_code": "s0052",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0052",
            "techniques": [
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
                    "procedure_description": "onionduke can use a custom decryption algorithm to decrypt strings.[86]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003",
                    "technique_name": "os credential dumping",
                    "technique_description": "adversaries may attempt to dump credentials to obtain account login and credential material, normally in the form of a hash or a clear text password, from the operating system and software. credentials can then be used to perform lateral movement and access restricted information.",
                    "procedure_description": "onionduke steals credentials from its victims.[11]"
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
                    "procedure_description": "onionduke uses http and https for c2.[66]"
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
                    "procedure_description": "onionduke uses twitter as a backup c2.[7]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1499",
                    "technique_link": "https://attack.mitre.org/techniques/T1499",
                    "technique_name": "endpoint denial of service",
                    "technique_description": "adversaries may perform endpoint denial of service (dos) attacks to degrade or block the availability of services to users. endpoint dos can be performed by exhausting the system resources those services are hosted on or exploiting the system to cause a persistent crash condition. example services include websites, email services, dns, and web-based applications. adversaries have been observed conducting dos attacks for political purposes and to support other malicious activities, including distraction, hacktivism, and extortion.",
                    "procedure_description": "onionduke has the capability to use a denial of service module.[6]"
                }
            ]
        }
    ]
};