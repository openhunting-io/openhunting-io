var threatdata = {
    "name": "RtPOS",
    "alias": "RtPOS",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Backdoor, Credential stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "RtPOS",
        "names": [
            {
                "name": "RtPOS"
            }
        ],
        "description": "(Booz Allen) RtPOS is unique in comparison to other fully featured POS malware like Project Hook and TreasureHunter, in that it has no native exfiltration capability. While other POS malware families are perfectly capable of sending captured Track1 and Track2 data to a C2 server, RtPOS merely saves the data locally. As this activity is similar to some POS utilities, this is likely intended to reduce the network activity footprint of RtPOS and ensure the malware remains undetected for longer, thus earning the controllers a healthier profit. The RtPOS malware is also simplistic in features, largely automated in operation, and lacks many of the features that more mature POS malware families do.\n\nThe lack of a network exfiltration feature, interaction and user commands, as well as a dropper component hints at more serious implications: in order for RtPOS to execute and in order to retrieve the captured payment card data, the attackers would have existing access to the victim\u2019s machine(s). RtPOS may simply be an in-development POS malware family, though review and analysis suggests RtPOS is a post-compromise tool instead of a standalone malware, and may even be part of a larger, heretofore unidentified tool set.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.boozallen.com/c/insight/blog/new-point-of-sale-malware-family-uncovered.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rtpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:RtPOS"
        ],
        "uuid": "ab3b05c0-27a8-4225-bc9c-8ccc5b4796c1",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rtpos",
    "analysis": null,
    "articles": [],
    "mitre": []
};