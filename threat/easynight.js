var threatdata = {
    "name": "EasyNight",
    "alias": "EasyNight",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "EasyNight",
        "names": [
            {
                "name": "EasyNight"
            }
        ],
        "description": "FireEye describes EASYNIGHT is a loader observed used with several malware families, including HIGHNOON and HIGHNOON.LITE. The loader often acts as a persistence mechanism via search order hijacking.\n\nExamples include a patched bcrypt.dll with no other modification than an additional import entry, in the observed case 'printwin.dll!gzwrite64' (breaking the file signature).",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://docplayer.net/161018432-Double-dragon-apt41-a-dual-espionage-and-cyber-crime-operation.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.easynight"
        ],
        "uuid": "2bf18644-2db8-4740-ac27-914991212366",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "easynight",
    "analysis": null,
    "articles": [],
    "mitre": []
};