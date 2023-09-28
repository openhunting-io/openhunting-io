var threatdata = {
    "name": "Maze",
    "alias": "Maze, ChaCha",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Maze",
        "names": [
            {
                "name": "Maze"
            },
            {
                "name": "ChaCha"
            }
        ],
        "description": "Maze Ransomware encrypts files and makes them inaccessible while adding a custom extension containing part of the ID of the victim. The ransom note is placed inside a text file and an htm file. There are a few different extensions appended to files which are randomly generated.\n\nActors are known to exfiltrate the data from the network for further extortion. It spreads mainly using email spam and various exploit kits (Spelevo, Fallout).\n\nThe code of Maze ransomware is highly complicated and obfuscated, which helps to evade security solutions using signature-based detections.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/fbi-warns-of-maze-ransomware-focusing-on-us-companies/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ransomware-maze",
            "https://www.kroll.com/en/insights/publications/cyber/latest-maze-ransomware-ttps",
            "https://www.tripwire.com/state-of-security/healthcare/maze-ransomware-targets-hospitals-labs-fighting-coronavirus/",
            "https://www.fireeye.com/blog/threat-research/2020/05/tactics-techniques-procedures-associated-with-maze-ransomware-incidents.html",
            "https://unit42.paloaltonetworks.com/threat-brief-maze-ransomware-activities/",
            "https://blog.malwarebytes.com/threat-spotlight/2020/05/maze-the-ransomware-that-introduced-an-extra-twist/",
            "https://www.bleepingcomputer.com/news/security/maze-ransomware-adds-ragnar-locker-to-its-extortion-cartel/",
            "https://labs.sentinelone.com/enter-the-maze-demystifying-an-affiliate-involved-in-maze-snow/",
            "https://news.sophos.com/en-us/2020/09/17/maze-attackers-adopt-ragnar-locker-virtual-machine-technique/",
            "https://nakedsecurity.sophos.com/2020/09/18/a-real-life-maze-ransomware-attack-if-at-first-you-dont-succeed/",
            "https://securelist.com/maze-ransomware/99137/",
            "https://www.webroot.com/blog/2021/01/13/maze-ransomware-is-dead-or-is-it/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0449/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.maze"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=maze-ransomware",
            "https://www.bleepingcomputer.com/news/security/ransomware-dev-releases-egregor-maze-master-decryption-keys/",
            "https://www.emsisoft.com/ransomware-decryption-tools/maze-sekhmet-egregor"
        ],
        "uuid": "6b19a42e-91bb-4261-a38f-06cd033e2781",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--0f86dccd-29bd-46c6-83fd-e79ba040bf05",
        "pb_file": "maze-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "MAZE RANSOMWARE",
        "industries": [
            "construction",
            "financial-services",
            "healthcare",
            "pharmaceuticals",
            "technology"
        ],
        "regions": [
            "AU",
            "BR",
            "CN",
            "ES",
            "IT",
            "US"
        ],
        "malwares": [
            "Maze"
        ]
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "maze"
};