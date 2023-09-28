var threatdata = {
    "name": "GoldMax",
    "alias": "GoldMax, SUNSHUTTLE",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "GoldMax",
        "names": [
            {
                "name": "GoldMax"
            },
            {
                "name": "SUNSHUTTLE"
            }
        ],
        "description": "(Microsoft) The GoldMax malware was discovered persisting on networks as a scheduled task impersonating systems management software. In the instances it was encountered, the scheduled task was named after software that existed in the environment, and pointed to a subfolder in ProgramData named after that software, with a similar executable name. The executable, however, was the GoldMax implant.\n\nWritten in Go, GoldMax acts as command-and-control backdoor for the actor. It uses several different techniques to obfuscate its actions and evade detection. The malware writes an encrypted configuration file to disk, where the file name and AES-256 cipher keys are unique per implant and based on environmental variables and information about the network where it is running.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/",
            "https://www.fireeye.com/blog/threat-research/2021/03/sunshuttle-second-stage-backdoor-targeting-us-based-entity.html",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-105a",
            "https://x0r19x91.gitlab.io/post/malware-analysis/sunshuttle/",
            "https://www.crowdstrike.com/blog/observations-from-the-stellarparticle-campaign/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0588/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.goldmax"
        ],
        "uuid": "38cc1123-27b7-4e33-ab64-93a5236e01b7",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "goldmax",
    "analysis": null
};