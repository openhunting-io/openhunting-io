var threatdata = {
    "name": "DreamBot",
    "alias": "DreamBot",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Botnet",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "DreamBot",
        "names": [
            {
                "name": "DreamBot"
            }
        ],
        "description": "(Proofpoint) The Dreambot malware is still in active development and over the last few months we have seen multiple versions of it spreading in the wild. The Tor-enabled version of Dreambot has been active since at least July 2016, when we first observed the malware successfully download the Tor client and connect to the Tor network. Today, many Dreambot samples include this functionality, but few use it as their primary mode of communication with their command and control (C&C) infrastructure. However, in the future this feature may be utilized much more frequently, creating additional problems for defenders.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/ursnif-variant-dreambot-adds-tor-functionality",
            "https://lokalhost.pl/gozi_tree.txt"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dreambot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=DreamBot"
        ],
        "uuid": "f979f85d-68d3-44b5-a2b6-ef0774f7c717",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "DreamBot",
            "malware_alias": null,
            "malware": "win.dreambot",
            "last_update": "2022-08-18 17:41:15",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "4103f92313df741c926014545472ca43",
                        "timestamp": "2022-08-18 17:41:15"
                    },
                    {
                        "value": "a908e3261ee99c8fe331293b2fc11d6f",
                        "timestamp": "2022-08-18 17:41:15"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-18 17:41:15",
    "mitre": [],
    "file_name": "dreambot",
    "analysis": null
};