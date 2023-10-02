var threatdata = {
    "name": "PORTHOLE",
    "alias": "PORTHOLE",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2021-12-26",
    "all_data": {
        "tool": "PORTHOLE",
        "names": [
            {
                "name": "PORTHOLE"
            }
        ],
        "description": "(Mandiant) FIN13 used PORTHOLE, a Java-based port scanner, to conduct network research. PORTHOLE may attempt multiple socket connections to many IPs and ports and, as it is multi-threaded, can execute this operation rapidly with potentially multiple overlapping connections. The malware accepts as its first argument either an IP address with wildcards in the address, or a filename. The second argument is the starting port range to scan for each IP, and the third is the ending port range.",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://www.mandiant.com/resources/fin13-cybercriminal-mexico"
        ],
        "uuid": "c840fb35-74e8-4953-a1a5-58b7607053bf",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "porthole",
    "analysis": null,
    "articles": [],
    "mitre": []
};