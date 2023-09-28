var threatdata = {
    "name": "Downeks",
    "alias": "Downeks",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Downeks",
        "names": [
            {
                "name": "Downeks"
            }
        ],
        "description": "(Palo Alto) The initial infection vector in this attack is not clear, but it results in installing the \u201cDowneks\u201d downloader, which in turn infects the victim computer with the \u201c{{QuasarRAT}}\u201d.\n\nDowneks uses third party websites to determine the external IP of the victim machine, possibly to determine victim location with GeoIP. It also drops decoy documents in an attempt to camouflage the attack.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-downeks-and-quasar-rat-used-in-recent-targeted-attacks-against-governments/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.downeks"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Downeks"
        ],
        "uuid": "16b197ca-adb0-46c1-a237-f48442021c0b",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "downeks",
    "analysis": null
};