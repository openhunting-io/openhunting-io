var threatdata = {
    "name": "AndroRAT",
    "alias": "AndroRAT",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "AndroRAT",
        "names": [
            {
                "name": "AndroRAT"
            }
        ],
        "description": "(Trend Micro) RATs have long been a common Windows threat, so it shouldn\u2019t be a surprise that it has come to Android. A RAT has to gain root access \u2014 usually by exploiting a vulnerability \u2014 in order to have control over a system. Discovered in 2012, the original authors intended AndroRAT \u2014 initially a university project \u2014 as an open-source client/server application that can provide remote control of an Android system, which naturally attracted cybercriminals.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-androrat-exploits-dated-permanent-rooting-vulnerability-allows-privilege-escalation/",
            "https://github.com/DesignativeDave/androrat"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0292/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.androrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:androrat"
        ],
        "uuid": "6ffe1e33-df8a-4f99-ad66-e6edb0f23e5c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "AndroRAT",
            "malware_alias": null,
            "malware": "apk.androrat",
            "last_update": "2023-05-11 05:43:05",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "347f1b018f643de0b9c946c94bd490a7426503869a0828b0a70b4d318fa097d6",
                        "timestamp": "2023-05-11 05:43:05"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-05-11 05:43:05",
    "mitre": [],
    "file_name": "androrat",
    "analysis": null
};