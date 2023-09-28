var threatdata = {
    "name": "Mimikatz",
    "alias": "Mimikatz",
    "category": "Tools",
    "type": "Credential stealer, Keylogger",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Mimikatz",
        "names": [
            {
                "name": "Mimikatz"
            }
        ],
        "description": "(SANS) Mimikatz provides a wealth of tools for collecting and making use of Windows credentials on target systems, including retrieval of cleartext passwords, Lan Manager hashes, and NTLM hashes, certificates, and Kerberos tickets. The tools run with varying success on all versions of Windows from XP forward, with functionality somewhat limited in Windows 8.1 and later.",
        "category": "Tools",
        "type": [
            "Credential stealer",
            "Keylogger"
        ],
        "information": [
            "https://github.com/gentilkiwi/mimikatz",
            "https://www.sans.org/reading-room/whitepapers/intrusion/mimikatz-overview-defenses-detection-36780",
            "https://www.wired.com/story/how-mimikatz-became-go-to-hacker-tool/",
            "https://www.crowdstrike.com/blog/credential-theft-mimikatz-techniques/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0002/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mimikatz"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:mimikatz"
        ],
        "uuid": "8f0da519-c1bc-4add-9e04-2c429e74564f",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "MimiKatz",
            "malware_alias": null,
            "malware": "win.mimikatz",
            "last_update": "2023-08-15 15:58:09",
            "tags": [
                "Mimikatz",
                "Gh0stRAT",
                "sodinokibi"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "0caad1a288815daed34c428ec855cd746a3e572924e8a30629af59740e5fab65",
                        "timestamp": "2023-08-15 15:58:09"
                    },
                    {
                        "value": "ad9e1593f9d992ddb9d21495f06bd31a7e39ee7746510d66f0596c5dfbc4e8ab",
                        "timestamp": "2021-03-11 10:08:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-08-15 15:58:09",
    "mitre": [],
    "file_name": "mimikatz",
    "analysis": null
};