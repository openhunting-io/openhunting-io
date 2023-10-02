var threatdata = {
    "name": "RomeoCharlie",
    "alias": "RomeoCharlie",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "RomeoCharlie",
        "names": [
            {
                "name": "RomeoCharlie"
            }
        ],
        "description": "(Novetta) With observed compile dates going back to February 5, 2014, RomeoCharlie is one of the oldest R-C1-based RATs (see Section 2) in the Lazarus Group\u2019s collection. A server-mode RAT, RomeoCharlie uses DNSCALC-style encoding for network communication and RSA encryption for client authentication. There are two observed variants, RomeoCharlie-One and RomeoCharlie-Two. The differences between the two are cosmetic in nature.\n\nWith the configuration of the RomeoCharlie variants loaded into memory, the differences between RomeoCharlie-One and RomeoCharlie-Two cease (save for one exception that will be explained). RomeoCharlie is a server-mode RAT and, as such, must establish a listening port. Before a listening port is established at the Winsock level, RomeoCharlie first opens a hole in the Windows Firewall to allow incoming connections on the desired listening port (as specified in the configuration). The task of opening a firewall port consists of constructing and then issuing the command line.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Tunneling"
        ],
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "uuid": "8b4f43d3-431c-4c8d-a553-0424f728312c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeocharlie",
    "analysis": null,
    "articles": [],
    "mitre": []
};