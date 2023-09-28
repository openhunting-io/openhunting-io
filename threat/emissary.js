var threatdata = {
    "name": "Emissary",
    "alias": "Emissary",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Emissary",
        "names": [
            {
                "name": "Emissary"
            }
        ],
        "description": "(Palo Alto) This Trojan is related to the {{Elise}} backdoor described in the Operation Lotus Blossom report. Both Emissary and Elise are part of a malware group referred to as \u201cLStudio\u201d, which is based on the following debug strings found in Emissary and Elise samples.\n\nThere is code overlap between Emissary and Elise, specifically in the use of a common function to log debug messages to a file and a custom algorithm to decrypt the configuration file. The custom algorithm used by Emissary and Elise to decrypt their configurations use the \u201csrand\u201d function to set a seed value for the \u201crand\u201d function, which the algorithm uses to generate a key. While the \u201crand\u201d function is meant to generate random numbers, the malware author uses the \u201csrand\u201d function to seed the \u201crand\u201d function with a static value. The static seed value causes the \u201crand\u201d function to create the same values each time it is called and results in a static key to decrypt the configuration. The seed value is where the Emissary and Elise differ in their use of this algorithm, as Emissary uses a seed value of 1024 and Elise uses the seed value of 2012.\n\nWhile these two Trojans share code, we consider Emissary and Elise separate tools since their configuration structure, command handler and C2 communications channel differ. The Emissary Trojan delivered in this attack contains the components listed in Table 1. At a high level, Emissary has an initial loader DLL that extracts a configuration file and a second DLL containing Emissary\u2019s functional code that it injects into Internet Explorer.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/attack-on-french-diplomat-linked-to-operation-lotus-blossom/",
            "https://unit42.paloaltonetworks.com/emissary-trojan-changelog-did-operation-lotus-blossom-cause-it-to-evolve/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0082/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.emissary"
        ],
        "uuid": "ff940eeb-a58a-41f6-93ca-8f61eb3abe46",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "emissary",
    "analysis": null
};