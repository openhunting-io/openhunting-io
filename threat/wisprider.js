var threatdata = {
    "name": "WispRider",
    "alias": "WispRider",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-23",
    "all_data": {
        "tool": "WispRider",
        "names": [
            {
                "name": "WispRider"
            }
        ],
        "description": "(Check Point) WispRider is a side-loaded DLL which contains both the USB infector component and the backdoor itself. It first creates a mutex to ensure there is a single instance running and checks that the executable that side-loaded it was executed with the proper argument. Next, it searches for a configuration file by first identifying a currently running directory from which the executable runs, and then recursively scanning from that directory to check each file as a potential config file candidate.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://research.checkpoint.com/2023/beyond-the-horizon-traveling-the-world-on-camaro-dragons-usb-flash-drives/"
        ],
        "uuid": "5d476448-f2e8-46dd-b45c-c034edb268a8",
        "last-card-change": "2023-06-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wisprider",
    "analysis": null,
    "articles": [],
    "mitre": []
};