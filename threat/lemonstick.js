var threatdata = {
    "name": "LEMONSTICK",
    "alias": "LEMONSTICK",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-04-03",
    "all_data": {
        "tool": "LEMONSTICK",
        "names": [
            {
                "name": "LEMONSTICK"
            }
        ],
        "description": "(FireEye) LEMONSTICK is a Linux executable command line utility with backdoor capabilities. The backdoor can execute files, transfer files, and tunnel connections. LEMONSTICK can be started in two different ways: passing the `-c` command line argument (with an optional file) and setting the \u2018OCB\u2019 environment variable. When started with the `-c` command line argument, LEMONSTICK spawns an interactive shell. When started in OCB mode, LEMONSTICK expects to read from STDIN. The STDIN data is expected to be encrypted with the blowfish algorithm. After decrypting, it dispatches commands based on the name\u2014for example: \u2018executes terminal command\u2019, \u2018connect to remote system\u2019, \u2018send & retrieve file\u2019, \u2018create socket connection\u2019.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.mandiant.com/resources/live-off-the-land-an-overview-of-unc1945"
        ],
        "uuid": "302afb62-797f-4e51-a073-f193e9e0030f",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lemonstick",
    "analysis": null,
    "articles": [],
    "mitre": []
};