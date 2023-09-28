var threatdata = {
    "name": "BadHatch",
    "alias": "BadHatch",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "BadHatch",
        "names": [
            {
                "name": "BadHatch"
            }
        ],
        "description": "(Trend Micro) Security researchers found threat group FIN8 reappearing after two years with a new point-of-sale (PoS) malware named Badhatch, which is designed to steal credit card information. Researchers from Gigamon analyzed the sample and found similarities with {{PunchBuggy}}, but Badhatch features new capabilities that allow it to scan for victim networks, provide attackers with remote access, install a backdoor, and deliver other modified malware payloads such as {{PoSlurp}} and PunchBuggy, among other features.\n\nBadhatch begins infection much like its predecessor PowerSniff, by sending a customized phishing email via a weaponized Word document. Once the victim enables the macros, it executes PowerShells and shellcode scripts for PowerSniff, installing a backdoor in the process. Its network scan capability makes it different from PowerSniff; it is unable to check if the systems infected is in the education or healthcare sector. The researchers also noted that it lacks the sandbox detection and anti-virus analysis evasion features, as well as the long-term persistence tools that its predecessor had. However, they note that this also serves as an advantage as the attackers can execute the routine after infection and have greater control on how the malware can be used, thereby avoiding automated sandboxing features.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/fin8-reemerges-with-new-pos-malware-badhatch",
            "ttps://www.bitdefender.com/files/News/CaseStudies/study/394/Bitdefender-PR-Whitepaper-BADHATCH-creat5237-en-EN.pdf",
            "https://team-cymru.com/blog/2021/03/15/fin8-badhatch-threat-indicator-enrichment/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.badhatch"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BADHATCH"
        ],
        "uuid": "360e808f-3592-4d9f-a9f5-26302044f37f",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "badhatch",
    "analysis": null
};