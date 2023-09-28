var threatdata = {
    "name": "Micropsia",
    "alias": "Micropsia",
    "category": "Malware",
    "type": "Info stealer, Keylogger, Exfiltration",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Micropsia",
        "names": [
            {
                "name": "Micropsia"
            }
        ],
        "description": "(Palo Alto) The MICROPSIA malware family is written in Delphi and is an information stealing malware family with a wide range of data theft functionality built in.\n\nThe main capabilities of the malware are as follows:\n\u2022 Logging of keystrokes to a hardcoded text file and exfiltration to a remote server\n\u2022 Capturing screenshots of the infected machines\n\u2022 Searching for files with extensions matching Microsoft Office documents and using WinRAR to archive these prior to exfiltration.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Keylogger",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-targeted-attacks-middle-east-using-kasperagent-micropsia/",
            "http://blog.talosintelligence.com/2017/06/palestine-delphi.html",
            "https://research.checkpoint.com/apt-attack-middle-east-big-bang/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0339/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.micropsia"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Micropsia"
        ],
        "uuid": "f0b0c482-814c-4f97-a2cb-e5e963ed448a",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Micropsia",
            "malware_alias": null,
            "malware": "win.micropsia",
            "last_update": "2021-08-14 22:45:08",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8c560cf2281320736e03f126d978ba28",
                        "timestamp": "2021-08-14 22:45:08"
                    },
                    {
                        "value": "cb142b1fe66cd3720b7d2cb054d50f82",
                        "timestamp": "2021-08-14 22:45:08"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-14 22:45:08",
    "mitre": [],
    "file_name": "micropsia",
    "analysis": null
};