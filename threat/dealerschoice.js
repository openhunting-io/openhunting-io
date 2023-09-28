var threatdata = {
    "name": "DealersChoice",
    "alias": "DealersChoice",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "DealersChoice",
        "names": [
            {
                "name": "DealersChoice"
            }
        ],
        "description": "(Palo Alto) Weaponizing documents to exploit known Microsoft Word vulnerabilities is a common tactic deployed by many adversary groups, but in this example, we discovered RTF documents containing embedded OLE Word documents further containing embedded Adobe Flash (.SWF) files, designed to exploit Flash vulnerabilities rather than Microsoft Word. We have named this tool that generates these documents DealersChoice.\n\nIn addition to the discovery of this new tactic, we were able to identify two different variants of the embedded SWF files: the first being a standalone version containing a compressed payload which we have dubbed DealersChoice.A and a second variant being a much more modular version deploying additional anti-analysis techniques which we have dubbed DealersChoice.B. The unearthing of DealersChoice.B suggests a possible code evolution of the initial DealersChoice.A variant. Also, artifacts within DealersChoice suggests that Sofacy created it with the intentions to target both Windows and OSX operating systems, as DealersChoice could potentially be cross-platform due to its use of Adobe Flash files.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-dealerschoice-sofacys-flash-player-exploit-platform/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0243/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DealersChoice"
        ],
        "uuid": "8c0669d9-d7f3-401a-acfa-58e3a502e38e",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dealerschoice",
    "analysis": null
};