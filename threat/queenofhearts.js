var threatdata = {
    "name": "QueenOfHearts",
    "alias": "QueenOfHearts",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "QueenOfHearts",
        "names": [
            {
                "name": "QueenOfHearts"
            }
        ],
        "description": "(Kaspersky) While it does not contain the anti-analysis countermeasures of its cousin, the rest of its features and overall design decisions map to {{KingOfHearts}} almost one to one. QueenOfHearts seems to have appeared somewhere in 2017. It is the family designated as PowerPool by our esteemed colleagues from ESET.\n\nQueenOfHearts also interacts with its C2 server over HTTP. It sends simple GET requests containing a backdoor identifier and optional victim machine information, then reads orders located in the cookie header of the reply. Orders come in the form of two-letter codes (e.g.: \u201cxe\u201d to list drives) which tend to vary between samples. As of today, this family is still in active development, and we have observed code refactoring as well as incremental upgrades over 2020. For instance, earlier backdoor responses were sent as base64-encoded payloads in POST requests. They are now compressed beforehand, and additionally supplied through the cookie header.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/iamtheking-and-the-slothfulmedia-malware-family/99000/"
        ],
        "uuid": "eb7ca7d2-3c84-4f3d-a29e-5a759cc35ea0",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "queenofhearts",
    "analysis": null,
    "articles": [],
    "mitre": []
};