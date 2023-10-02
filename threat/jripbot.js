var threatdata = {
    "name": "JripBot",
    "alias": "JripBot, Jiripbot",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Credential stealer, Info stealer, Loader, Dropper",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "JripBot",
        "names": [
            {
                "name": "JripBot"
            },
            {
                "name": "Jiripbot"
            }
        ],
        "description": "(Kaspersky) The malware set used by the Wild Neutron threat actor has several component groups, including:\n\n\u2022 A main backdoor module that initiates the first communication with C&C server\n\u2022 Several information gathering modules\n\u2022 Exploitation tools\n\u2022 SSH-based exfiltration tools\n\u2022 Intermediate loaders and droppers that decrypt and run the payloads\n\nAlthough customized, some of the modules seem to be heavily based on open source tools (e.g. the password dumper resembles the code of {{Mimikatz}} and {{Pass-The-Hash Toolkit}}) and commercial malware (HTTPS proxy module is practically identical to the one that is used by {{HesperBot}}).",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Credential stealer",
            "Info stealer",
            "Loader",
            "Dropper"
        ],
        "information": [
            "https://securelist.com/wild-neutron-economic-espionage-threat-actor-returns-with-new-tricks/71275/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jripbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Jripbot"
        ],
        "uuid": "742c30fb-2172-4d2a-89db-2112e2bf6971",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "jripbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2017/10/20114955/Bartholomew-GuerreroSaade-VB2016.pdf",
            "date": "2016-09-07",
            "organization": "Virus Bulletin",
            "author": "Brian Bartholomew",
            "title": "Wave Your False Flags! Deception Tactics Muddying Attribution in Targeted Attacks",
            "categories": [
                "DuQu",
                "JripBot",
                "Sinowal",
                "Stuxnet",
                "Wipbot"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/research/71275/wild-neutron-economic-espionage-threat-actor-returns-with-new-tricks/",
            "date": "2015-07-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Wild Neutron \u2013 Economic espionage threat actor returns with new tricks",
            "categories": [
                "JripBot"
            ]
        }
    ],
    "mitre": []
};