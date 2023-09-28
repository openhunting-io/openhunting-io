var threatdata = {
    "name": "ChChes",
    "alias": "ChChes, HAYMAKER, Ham Backdoor, Scorpion",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ChChes",
        "names": [
            {
                "name": "ChChes"
            },
            {
                "name": "HAYMAKER"
            },
            {
                "name": "Ham Backdoor"
            },
            {
                "name": "Scorpion"
            }
        ],
        "description": "(Palo Alto) In addition to using {{PlugX}} and {{Poison Ivy}} (PIVY), both known to be used by the group, they also used a new Trojan called \u201cChChes\u201d by the Japan Computer Emergency Response Team Coordination Center (JPCERT).  In contrast to PlugX and PIVY, which are used by multiple campaigns, ChChes appears to be unique to this group. An analysis of the malware family can be found later in this blog.\n\nInterestingly, the ChChes samples we observed were digitally signed using a certificate originally used by HackingTeam and later part of the data leaked when they were themselves hacked. Wapack labs also observed a similar sample targeting Japan in November. It\u2019s not clear why the attackers chose to use this certificate, as it was old, had been leaked online, and had already been revoked by the time they used it. Digital certificates are typically used because they afford an air of legitimacy, which this one definitely does not.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-menupass-returns-new-malware-new-attacks-japanese-academics-organizations/",
            "https://www.cylance.com/en_us/blog/the-deception-project-a-new-japanese-centric-threat.html",
            "https://www.jpcert.or.jp/magazine/acreport-ChChes_ps1.html",
            "https://www.jpcert.or.jp/magazine/acreport-ChChes.html",
            "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0144/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chches"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:chches"
        ],
        "uuid": "641359e0-3415-45b2-a304-860ecb58ac7d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "chches",
    "analysis": null
};