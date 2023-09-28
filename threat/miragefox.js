var threatdata = {
    "name": "MirageFox",
    "alias": "MirageFox",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "MirageFox",
        "names": [
            {
                "name": "MirageFox"
            }
        ],
        "description": "MirageFox is a remote access tool used against Windows systems. It appears to be an upgraded version of a tool known as Mirage, which is a RAT believed to originate in 2012.\n\n(SecureWorks) Mirage phones home to its C2 servers using a standard HTTP request. From the activity CTU researchers have observed when executing Mirage in a malware sandbox, this communication commonly occurs over ports 80, 443 and 8080, and it can implement SSL for added security.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.secureworks.com/research/the-mirage-campaign",
            "https://www.intezer.com/miragefox-apt15-resurfaces-with-new-tools-based-on-old-ones/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0280/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.miragefox"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MirageFox"
        ],
        "uuid": "850be0f0-e2cf-4c68-a739-6691ec513e99",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "miragefox",
    "analysis": null
};