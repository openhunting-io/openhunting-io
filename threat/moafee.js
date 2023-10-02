var threatdata = {
    "name": "Moafee",
    "alias": "Moafee",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Moafee",
        "names": [
            {
                "name": "Moafee",
                "name-giver": "FireEye"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "Moafee is a threat group that appears to operate from the Guandong Province of China. Due to overlapping TTPs, including similar custom tools, Moafee is thought to have a direct or indirect relationship with the threat group {{DragonOK}}.\n\n(FireEye) The attack group \u201cMoafee\u201d (named after their command and control infrastructure) appears to operate out of the Guangdong province in China and is known to target the governments and military organizations of countries with national interests in the South China Sea. The seas in this region have multiple claims of sovereignty and hold high significance, as it is the second busiest sea-lane in the world and are known to be rich in resources such as rare earth metals, crude oil, and natural gas. We have also observed the Moafee group target organizations within the US defense industrial base.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "USA",
            "\u201ccountries with national interests in the South China Sea\u201d"
        ],
        "tools": [
            "HTran",
            "Mongall",
            "NewCT2",
            "NFlog",
            "Poison Ivy"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0002/"
        ],
        "uuid": "a89dfb9b-f899-4d5e-b835-1fbb37295660",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "moafee",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "moafee",
            "procedure_code": "g0002",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0002",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "moafee has been known to employ binary padding.[28]"
                }
            ]
        }
    ]
};