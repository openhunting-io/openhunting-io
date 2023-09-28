var threatdata = {
    "name": "LockerGoga",
    "alias": "LockerGoga",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-11-18",
    "all_data": {
        "tool": "LockerGoga",
        "names": [
            {
                "name": "LockerGoga"
            }
        ],
        "description": "(Fortinet) The binary for this particular variant of LockerGoga does not utilize any type of security evasion or obfuscation. Instead, the binary only goes as far as encoding the RSA public key that is used in its later stages for file encryption. It\u2019s possible to speculate that the attackers may have already been fully aware of the target companies\u2019 security measures, and were therefore confident that their malware would not be intercepted even without any obfuscation.\n\nAnother interesting fact is that the malware uses open-source Boost libraries for its filesystem, and inter-process communication and Crypto++ (Cryptopp) for file encryption. One of the advantages of using these libraries is easier development and implementation since developers only need to work with wrapper functions instead of calling individual native APIs to achieve the same goal. And since this utilizes a higher level of programming, statically and dynamically analysing the application without source code is more complicated than just reading a straight sequence of Windows APIs. However, since they do not use standard libraries, they need to be manually linked and the functions need to be physically added to the final binary, which results a larger file size than usual.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/lockergoga-ransomeware-targeting-critical-infrastructure.html",
            "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/what-you-need-to-know-about-the-lockergoga-ransomware",
            "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "https://www.abuse.io/lockergoga.txt",
            "https://doublepulsar.com/how-lockergoga-took-down-hydro-ransomware-used-in-targeted-attacks-aimed-at-big-business-c666551f5880",
            "https://www.bleepingcomputer.com/news/security/new-lockergoga-ransomware-allegedly-used-in-altran-attack/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0372/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lockergoga"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:LockerGoga"
        ],
        "playbook": [
            "https://www.bleepingcomputer.com/news/security/bitdefender-releases-free-decryptor-for-lockergoga-ransomware/"
        ],
        "uuid": "8cdd2a40-7ddd-4caf-b7d0-94af5984a979",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "lockergoga",
    "analysis": null
};