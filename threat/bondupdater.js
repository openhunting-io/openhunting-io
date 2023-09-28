var threatdata = {
    "name": "BONDUPDATER",
    "alias": "BONDUPDATER, Poison Frog, Glimpse",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "BONDUPDATER",
        "names": [
            {
                "name": "BONDUPDATER"
            },
            {
                "name": "Poison Frog"
            },
            {
                "name": "Glimpse"
            }
        ],
        "description": "(Palo Alto) BONDUPDATER is a PowerShell-based Trojan first discovered by FireEye in mid-November 2017, when OilRig targeted a different Middle Eastern governmental organization.\n\nThe BONDUPDATER Trojan contains basic backdoor functionality, allowing threat actors to upload and download files, as well as the ability to execute commands. BONDUPDATER, like other OilRig tools, uses DNS tunneling to communicate with its C2 server. During the past month, Unit 42 observed several attacks against a Middle Eastern government leveraging an updated version of the BONDUPDATER malware, which now includes the ability to use TXT records within its DNS tunneling protocol for its C2 communications.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-updated-bondupdater-target-middle-eastern-government/",
            "https://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html",
            "https://www.boozallen.com/s/insight/blog/dark-labs-discovers-apt34-malware-variants.html",
            "https://unit42.paloaltonetworks.com/dns-tunneling-in-the-wild-overview-of-oilrigs-dns-tunneling/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0360/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.bondupdater"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BONDUPDATER"
        ],
        "uuid": "5ca10b6c-95cb-4ff3-abb0-afc59394a633",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bondupdater",
    "analysis": null
};