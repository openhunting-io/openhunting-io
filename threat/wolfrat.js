var threatdata = {
    "name": "WolfRAT",
    "alias": "WolfRAT, W1_RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WolfRAT",
        "names": [
            {
                "name": "WolfRAT"
            },
            {
                "name": "W1_RAT"
            }
        ],
        "description": "(Talos) Cisco Talos has discovered a new Android malware based on a leak of the {{Dendroid}} malware family. We named this malware 'WolfRAT' due to strong links between this malware (and the command and control (C2) infrastructure) and Wolf Research, an infamous organization that developed interception and espionage-based malware and was publicly described by CSIS during Virus Bulletin 2018. We identified infrastructure overlaps and string references to previous Wolf Research work. The organization appears to be shut down, but the threat actors are still very active.\n\nWe identified campaigns targeting Thai users and their devices. Some of the C2 servers are located in Thailand. The panels also contain Thai JavaScript comments and the domain names also contain references to Thai food, a tactic commonly employed to entice users to click/visit these C2 panels without much disruption.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/05/the-wolf-is-back.html",
            "https://www.virusbulletin.com/uploads/pdf/conference_slides/2018/AncelKuprins-VB2018-WolfSheep.pdf",
            "https://www.africacybersecurityconference.com/document/CrowdStrike_GTR_2019.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0489/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.wolf_rat"
        ],
        "uuid": "ee2b0b06-f227-4523-b696-da3c1cae3a7c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "wolfrat",
    "analysis": null
};