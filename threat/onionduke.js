var threatdata = {
    "name": "OnionDuke",
    "alias": "OnionDuke",
    "category": "Malware",
    "type": "Dropper, Loader, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "OnionDuke",
        "names": [
            {
                "name": "OnionDuke"
            }
        ],
        "description": "(F-Secure) The OnionDuke toolset includes at least a dropper, a loader, an information stealer trojan and multiple modular variants with associated modules.\n\nOnionDuke first caught our attention because it was being spread via a malicious Tor exit node. The Tor node would intercept any unencrypted executable files being downloaded and modify those executables by adding a malicious wrapper contained an embedded OnionDuke. Once the victim finished downloading the file and executed it, the wrapper would infect the victim\u2019s computer with OnionDuke before executing the original legitimate executable.\n\nThe same wrapper has also been used to wrap legitimate executable files, which were then made available for users to download from torrent sites. Again, if a victim downloaded a torrent containing a wrapped executable, they would get infected with OnionDuke.\n\nFinally, we have also observed victims being infected with OnionDuke after they were already infected with {{CozyDuke}}. In these cases, CozyDuke was instructed by its C&C server to download and execute OnionDuke toolset.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Loader",
            "Info stealer"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "http://contagiodump.blogspot.com/2014/11/onionduke-samples.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0052/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.onionduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:onionduke"
        ],
        "uuid": "4b23da0a-7140-4fc2-b9fa-cc896215964e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "onionduke",
    "analysis": null
};