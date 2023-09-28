var threatdata = {
    "name": "Gold Dragon",
    "alias": "Gold Dragon, GoldDragon, Lovexxx",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Gold Dragon",
        "names": [
            {
                "name": "Gold Dragon"
            },
            {
                "name": "GoldDragon"
            },
            {
                "name": "Lovexxx"
            }
        ],
        "description": "(McAfee) On December 24, 2017, our analysts observed the Korean-language implant Gold Dragon. We now believe this implant is the second-stage payload in the Olympics attack that ATR discovered January 6, 2018. The PowerShell implant used in the Olympics campaign was a stager based on the PowerShell Empire framework that created an encrypted channel to the attacker\u2019s server. However, this implant required additional modules to be executed to be a fully capable backdoor. In addition, the PowerShell implant did not contain a mechanism to persist beyond a simple scheduled task. Gold Dragon has a much more robust persistence mechanism than the initial PowerShell implant and enables the attacker to do much more to the target system. Gold Dragon reappeared the same day that the Olympics campaign began.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/gold-dragon-widens-olympics-malware-attacks-gains-permanent-presence-on-victims-systems/",
            "https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0249/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gold_dragon"
        ],
        "uuid": "c4fec38c-34c1-4910-af7e-ce2b1184782e",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gold_dragon",
    "analysis": null
};