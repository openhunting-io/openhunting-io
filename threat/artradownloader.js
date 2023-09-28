var threatdata = {
    "name": "ArtraDownloader",
    "alias": "ArtraDownloader, Artra Downloader",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "ArtraDownloader",
        "names": [
            {
                "name": "ArtraDownloader"
            },
            {
                "name": "Artra Downloader"
            }
        ],
        "description": "(Palo Alto) Overall, the ArtraDownloader malware family is not sophisticated, leveraging simple registry keys for persistence and HTTP requests to download and execute a remote file. Important strings within these samples are obfuscated by adding or subtracting from each byte within a string. This same obfuscation routine is used when sending data via HTTP.\n\nThis downloader has frequently been observed downloading the Remote Access Trojan (RAT) {{BitterRAT}} which is associated with BITTER threat operations.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/multiple-artradownloader-variants-used-by-bitter-to-target-pakistan/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.artra"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ArtraDownloader"
        ],
        "uuid": "b8d91e49-6460-40aa-9a70-28398600fb95",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "artradownloader",
    "analysis": null
};