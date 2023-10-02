var threatdata = {
    "name": "GOGGLES",
    "alias": "GOGGLES, TROJAN.FOXY",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "GOGGLES",
        "names": [
            {
                "name": "GOGGLES"
            },
            {
                "name": "TROJAN.FOXY"
            }
        ],
        "description": "(Citizen Lab) a simple downloader that is controlled via encoded markers in files accessed over HTTP.\n\nThe C2 communication method, commands, and particularly the data encoding method in GOGGLES are very similar to the sample we analyzed. The connection was initially noticed due to a shared string used in decoding methods, and the presence of the same two commands for each program. Follow-up code analysis confirmed that these programs share much of the same code, and use the same C2 server. It is very likely that GOGGLES is a later version of {{GLASSES}}.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://citizenlab.ca/2013/02/apt1s-glasses-watching-a-human-rights-organization/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.goggles"
        ],
        "uuid": "b895fdbf-6989-4e6d-995a-01f508738cfb",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "goggles",
    "analysis": null,
    "articles": [],
    "mitre": []
};