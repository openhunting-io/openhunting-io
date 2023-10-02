var threatdata = {
    "name": "DropPhone",
    "alias": "DropPhone",
    "category": "Malware",
    "type": "Reconnaissance, Info stealer",
    "modified": "2021-05-15",
    "all_data": {
        "tool": "DropPhone",
        "names": [
            {
                "name": "DropPhone"
            }
        ],
        "description": "(Kaspersky) DropPhone launches sdclt.exe, then collects environment information from the victim machine and sends it to {{Dropbox}}. The last thing this implant does is delete data.dat without ever accessing its contents. We speculate that they are consumed by sdclt.exe, and that this is another way to lock together the execution of two components, frustrating the efforts of the reverse-engineers who are missing pieces of the puzzle \u2013 as is our case here.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/the-leap-of-a-cycldek-related-threat-actor/101243/"
        ],
        "uuid": "bf1718cb-52e1-4429-abc9-1c49a73c8f57",
        "last-card-change": "2021-05-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dropphone",
    "analysis": null,
    "articles": [],
    "mitre": []
};