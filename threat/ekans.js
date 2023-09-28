var threatdata = {
    "name": "EKANS",
    "alias": "EKANS, Snake, SNAKEHOSE",
    "category": "Malware",
    "type": "ICS malware, Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "EKANS",
        "names": [
            {
                "name": "EKANS"
            },
            {
                "name": "Snake"
            },
            {
                "name": "SNAKEHOSE"
            }
        ],
        "description": "(Dragos) EKANS ransomware emerged in mid-December 2019, and Dragos published a private report to Dragos WorldView Threat Intelligence customers early January 2020. While relatively straightforward as a ransomware sample in terms of encrypting files and displaying a ransom note, EKANS featured additional functionality to forcibly stop a number of processes, including multiple items related to ICS operations. While all indications at present show a relatively primitive attack mechanism on control system networks, the specificity of processes listed in a static \u201ckill list\u201d shows a level of intentionality previously absent from ransomware targeting the industrial space. ICS asset owners and operators are therefore strongly encouraged to review their attack surface and determine mechanisms to deliver and distribute disruptive malware, such as ransomware, with ICS-specific characteristics.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.dragos.com/blog/industry-news/ekans-ransomware-and-ics-operations/",
            "https://blog.malwarebytes.com/threat-analysis/2020/06/honda-and-enel-impacted-by-cyber-attack-suspected-to-be-ransomware/",
            "https://unit42.paloaltonetworks.com/threat-assessment-ekans-ransomware/",
            "https://www.deepinstinct.com/2020/06/29/the-snake-attacks-holding-the-industrial-sector-ransom/",
            "https://www.fortinet.com/blog/threat-research/ekans-ransomware-targeting-ot-ics-systems"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0605/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.snake"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ekans"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=ekans-ransomware"
        ],
        "uuid": "8236a50f-f937-4e6e-b935-8dea58971dfa",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--def4456e-1b28-4686-a3e7-128d06b99895",
        "pb_file": "ekans-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "EKANS RANSOMWARE",
        "industries": [
            "automotive",
            "energy",
            "healthcare"
        ],
        "regions": [],
        "malwares": [
            "EKANS"
        ]
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "ekans"
};