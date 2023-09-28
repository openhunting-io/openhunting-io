var threatdata = {
    "name": "SodomMain",
    "alias": "SodomMain, SodomMain RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SodomMain",
        "names": [
            {
                "name": "SodomMain"
            },
            {
                "name": "SodomMain RAT"
            }
        ],
        "description": "(Proofpoint) The\u202fSodomMain\u202fmodule is\u202fLookBack\u202fmalware\u2019s remote access Trojan module that can send and receive numerous commands indicative of its function as a RAT. The malware is delivered within the encoded data\u202fthat is received by the\u202f{{SodomNormal}}\u202fmodule as part of its initial beacon response. It then runs within the\u202fSodomNormal\u202fmodule and\u202fuses its\u202f\u201csend_data\u201d\u202ffunction for C&C communications.\u202fThe data\u202fis ultimately relayed to the {{GUP Proxy Tool}} and the C&C IP.\n\nNoteworthy malware commands include:\n\n\u2022 Get process listing\n\u2022 Kill process\n\u2022 Executes cmd[.] exe command\n\u2022 Gets drive type\n\u2022 Find files\n\u2022 Read files\n\u2022 Delete files\n\u2022 Write to files\n\u2022 Execute files\n\u2022 Enumerate services\n\u2022 Starts services\n\u2022 Delete services\n\u2022 Takes a screenshot of desktop\n\u2022 Move/Click Mouse and\u202ftake a\u202fscreenshot\n\u2022 Exit\n\u2022 Removes self (libcurl[.] dll)\n\u2022 Shutdown\n\u2022 Reboot",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/lookback-malware-targets-united-states-utilities-sector-phishing-attacks"
        ],
        "uuid": "05cfbccf-adae-47a8-ad09-da2ee0f7516a",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sodommain",
    "analysis": null
};