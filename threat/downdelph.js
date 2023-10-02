var threatdata = {
    "name": "Downdelph",
    "alias": "Downdelph, Delphacy",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-19",
    "all_data": {
        "tool": "Downdelph",
        "names": [
            {
                "name": "Downdelph"
            },
            {
                "name": "Delphacy"
            }
        ],
        "description": "(ESET) Downdelph is a first-stage component deployed only in very rare cases by the Sednit operators. Over the past two years this low-profile approach has been combined with advanced persistence methods \u2014 a bootkit and a rootkit \u2014 probably in order to spy on special targets for long periods of time. Downdelph was used to deploy {{X-Agent}} and {{Sedreco}} on infected machines.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part3.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0134/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.downdelph"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DOWNDELPH"
        ],
        "uuid": "d262019e-e4a6-467a-9cb7-1c52e4bb426c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "downdelph",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://labs.sentinelone.com/a-deep-dive-into-zebrocys-dropper-docs/",
            "date": "2021-04-19",
            "organization": "Sentinel LABS",
            "author": "Marco Figueroa",
            "title": "A Deep Dive into Zebrocy\u2019s Dropper Docs",
            "categories": [
                "Downdelph"
            ]
        },
        {
            "data_url": "https://www.picussecurity.com/blog/picus-10-critical-mitre-attck-techniques-t1055-process-injection",
            "date": "2020-05-21",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "T1055 Process Injection",
            "categories": [
                "BlackEnergy",
                "Cardinal RAT",
                "Downdelph",
                "Emotet",
                "Kazuar",
                "RokRAT",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "date": "2017-02-20",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Part I. Russian APT - APT28 collection of samples including OSX XAgent",
            "categories": [
                "X-Agent",
                "Komplex",
                "Coreshell",
                "Downdelph",
                "HideDRV",
                "SEADADDY",
                "Sedreco",
                "Seduploader",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part3.pdf",
            "date": "2016-09-11",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "En Route with Sednit - Part 3: A Mysterious Downloader",
            "categories": [
                "Downdelph"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "downdelph",
            "procedure_code": "s0134",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0134",
            "techniques": [
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
                    "procedure_description": "downdelph uses search order hijacking of the windows executable sysprep.exe to escalate privileges.[17]"
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
                    "procedure_description": "downdelph bypasses uac to escalate privileges by using a custom \"redirectexe\" shim database.[27]"
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
                    "procedure_description": "downdelph uses search order hijacking of the windows executable sysprep.exe to escalate privileges.[17]"
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
                    "procedure_description": "downdelph bypasses uac to escalate privileges by using a custom \"redirectexe\" shim database.[27]"
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
                    "procedure_description": "downdelph uses search order hijacking of the windows executable sysprep.exe to escalate privileges.[17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "downdelph inserts pseudo-random characters between each original character during encoding of c2 network requests, making it difficult to write signatures on them.[3]"
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
                    "procedure_description": "downdelph uses rc4 to encrypt c2 responses.[39]"
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
                    "procedure_description": "after downloading its main config file, downdelph downloads multiple payloads from c2 servers.[150]"
                }
            ]
        }
    ]
};