var threatdata = {
    "name": "CarbonSteal",
    "alias": "CarbonSteal",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "CarbonSteal",
        "names": [
            {
                "name": "CarbonSteal"
            }
        ],
        "description": "(Lookout) CarbonSteal is Android surveillanceware that has been tracked by Lookout since 2017, and more than 500 samples have been seen to date. While not as sophisticated as HenBox, certain samples of CarbonSteal do make use of a combination of native libraries and DEX classes, while others do not and are much simpler.\n\nHallmarks of CarbonSteal include extensive audio recording functionality in a variety of codecs and audio formats, as well as the capability in later samples to control an infected device through specially crafted SMS messages. Attackers can also perform audio surveillance through the malware\u2019s ability to silently answer a call from a specific phone number and allow the attacker to listen in to sounds around an infected device. Based on this functionality, we suspect that CarbonSteal might be deployed in areas with insufficient or no mobile data coverage.\n\nSamples of CarbonSteal and {{HenBox}} also use the same non-compromised signing certificates in many cases, suggesting the actor behind their deployment is the same. Furthermore, overlapping validity dates of these certificates may indicate that the samples were produced around the same time frame. This evidence led Lookout researchers to the theory that these tools were primarily used in an ongoing malware campaign (at the time) and against similar targets, with titles and languages once again suggesting a Uyghur focused interest.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0529/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.carbonsteal"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CarbonSteal"
        ],
        "uuid": "b0732e1a-4e75-4e04-9115-2e8c7fbd19c9",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "carbonsteal",
    "analysis": null
};