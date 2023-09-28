var threatdata = {
    "name": "KillDisk",
    "alias": "KillDisk, Win32/KillDisk.NBI, Win32/KillDisk.NBH, Win32/KillDisk.NBD, Win32/KillDisk.NBC, Win32/KillDisk.NBB",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "KillDisk",
        "names": [
            {
                "name": "KillDisk"
            },
            {
                "name": "Win32/KillDisk.NBI"
            },
            {
                "name": "Win32/KillDisk.NBH"
            },
            {
                "name": "Win32/KillDisk.NBD"
            },
            {
                "name": "Win32/KillDisk.NBC"
            },
            {
                "name": "Win32/KillDisk.NBB"
            }
        ],
        "description": "(Trend Micro) The malware has since metamorphosed into a threat used for digital extortion, affecting Windows and Linux platforms. The note accompanying the ransomware versions, like in the case of Petya, was a ruse: Because KillDisk also overwrites and deletes files (and don\u2019t store the encryption keys on disk or online), recovering the scrambled files was out of the question. The new variant we found, however, does not include a ransom note.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-killdisk-variant-hits-financial-organizations-in-latin-america/",
            "http://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0607/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.killdisk"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:killdisk"
        ],
        "uuid": "b3b552bc-dd11-4722-9d0b-5f00e4707473",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "killdisk",
    "analysis": null
};