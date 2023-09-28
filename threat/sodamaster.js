var threatdata = {
    "name": "SodaMaster",
    "alias": "SodaMaster, DelfsCake, dfls, DARKTOWN, HEAVYPOT",
    "category": "Malware",
    "type": "Backdoor, Downloader, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SodaMaster",
        "names": [
            {
                "name": "SodaMaster"
            },
            {
                "name": "DelfsCake"
            },
            {
                "name": "dfls"
            },
            {
                "name": "DARKTOWN"
            },
            {
                "name": "HEAVYPOT"
            }
        ],
        "description": "(Kaspersky) Another payload of the {{Ecipekac}} loader, which we call SodaMaster (a.k.a DelfsCake), is also a new fileless malware. In our research we found more than 10 samples of SodaMaster. All the collected samples of this module were almost identical, with the offsets and hex patterns of all functions perfectly matching. The only differences were in the configuration data, including a hardcoded C2, an encoded RSA key and additional data for calculating a mutex value.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://securelist.com/apt10-sophisticated-multi-layered-loader-ecipekac-discovered-in-a41apt-campaign/101519/",
            "https://jsac.jpcert.or.jp/archive/2021/pdf/JSAC2021_202_niwa-yanagishita_en.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0627/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sodamaster"
        ],
        "uuid": "583bd930-612c-400d-b0c0-ac4ec05023b0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sodamaster",
    "analysis": null
};