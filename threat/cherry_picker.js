var threatdata = {
    "name": "Cherry Picker",
    "alias": "Cherry Picker, Cherry Picker POS, CherryPicker POS, cherrypickerpos, cherrypicker, cherry_picker",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Cherry Picker",
        "names": [
            {
                "name": "Cherry Picker"
            },
            {
                "name": "Cherry Picker POS"
            },
            {
                "name": "CherryPicker POS"
            },
            {
                "name": "cherrypickerpos"
            },
            {
                "name": "cherrypicker"
            },
            {
                "name": "cherry_picker"
            }
        ],
        "description": "(Trustwave) For the last five years Trustwave has been monitoring a threat across a number of forensic cases that we have dubbed 'Cherry Picker'. This targeted Point of Sale (PoS) memory scraper has enjoyed a very low detection rate in the wild for quite some time. Cherry Picker uses a new memory scraping algorithm, a file infector for persistence, and cleaner malware that removes all traces of the infection from target systems. This sophisticated functionality and highly targeted victims have helped the malware remain under the radar of many AV and security companies. This post will expose the functionality of Cherry Picker and hopefully help organizations provide protection from this threat.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/shining-the-spotlight-on-cherry-picker-pos-malware/",
            "https://www.trustwave.com/Resources/SpiderLabs-Blog/New-Memory-Scraping-Technique-in-Cherry-Picker-PoS-Malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0107/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cherry_picker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cherry%20picker"
        ],
        "uuid": "617bd0a3-821e-43b4-9619-a6fd084d1439",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cherry_picker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/05/16/malware-pers-5.html",
            "date": "2022-05-16",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 6. Windows netsh helper DLL. Simple C++ example.",
            "categories": [
                "CherryPicker POS",
                "Ramsay"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/New-Memory-Scraping-Technique-in-Cherry-Picker-PoS-Malware/",
            "date": "2015-11-17",
            "organization": "SpiderLabs Blog",
            "author": "Eric Merritt",
            "title": "New Memory Scraping Technique in Cherry Picker PoS Malware",
            "categories": [
                "CherryPicker POS"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/Shining-the-Spotlight-on-Cherry-Picker-PoS-Malware/",
            "date": "2015-11-16",
            "organization": "SpiderLabs Blog",
            "author": "Eric Merritt",
            "title": "Shining the Spotlight on Cherry Picker PoS Malware",
            "categories": [
                "CherryPicker POS"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "cherry picker",
            "procedure_code": "s0107",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0107",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/010",
                    "technique_name": "event triggered execution : appinit dlls",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by appinit dlls loaded into processes. dynamic-link libraries (dlls) that are specified in the appinit_dlls value in the registry keys hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\windows or hkey_local_machine\\software\\wow6432node\\microsoft\\windows nt\\currentversion\\windows are loaded by user32.dll into every process that loads user32.dll. in practice this is nearly every program, since user32.dll is a very common library.",
                    "procedure_description": "some variants of cherry picker use appinit_dlls to achieve persistence by creating the following registry key: hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\windows \"appinit_dlls\"=\"pserver32.dll\"[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/010",
                    "technique_name": "event triggered execution : appinit dlls",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by appinit dlls loaded into processes. dynamic-link libraries (dlls) that are specified in the appinit_dlls value in the registry keys hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\windows or hkey_local_machine\\software\\wow6432node\\microsoft\\windows nt\\currentversion\\windows are loaded by user32.dll into every process that loads user32.dll. in practice this is nearly every program, since user32.dll is a very common library.",
                    "procedure_description": "some variants of cherry picker use appinit_dlls to achieve persistence by creating the following registry key: hkey_local_machine\\software\\microsoft\\windows nt\\currentversion\\windows \"appinit_dlls\"=\"pserver32.dll\"[5]"
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
                    "procedure_description": "recent versions of cherry picker delete files and registry keys created by the malware.[41]"
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
                    "procedure_description": "cherry picker exfiltrates files over ftp.[13]"
                }
            ]
        }
    ]
};