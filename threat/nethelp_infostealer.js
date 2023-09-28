var threatdata = {
    "name": "NetHelp Infostealer",
    "alias": "NetHelp Infostealer, NetHelp Striker",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "NetHelp Infostealer",
        "names": [
            {
                "name": "NetHelp Infostealer"
            },
            {
                "name": "NetHelp Striker"
            }
        ],
        "description": "(Recorded Future) The NetHelp payload was only designed to work as a service (a persistence method established by the audio dropper of matching bitness). The payload dynamically links APIs at runtime via GetProcAddress and LoadLibrary.\n\nThe implant simultaneously relied on two methods of communication: creating a separate thread with an open socket to the server on port 80, as well as issuing POST requests to the C2 server with the specific User-Agent.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.recordedfuture.com/redalpha-cyber-campaigns/"
        ],
        "uuid": "7db71641-766e-4bfb-90a8-2b7626e526e7",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "nethelp_infostealer",
    "analysis": null
};