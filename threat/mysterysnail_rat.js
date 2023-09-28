var threatdata = {
    "name": "MysterySnail RAT",
    "alias": "MysterySnail RAT, MysterySnail",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "MysterySnail RAT",
        "names": [
            {
                "name": "MysterySnail RAT"
            },
            {
                "name": "MysterySnail"
            }
        ],
        "description": "(Kaspersky) Our deep dive into the MysterySnail RAT family started with an analysis of a previously unknown remote shell-type Trojan that was intended to be executed by an elevation of privilege exploit. The sample which we analyzed was also uploaded to VT on August 10, 2021. The sample is very big \u2013 8.29MB. One of the reasons for the file size is that it\u2019s statically compiled with the OpenSSL library and contains unused code and data belonging to that library. But the main reason for its size is the presence of two very large functions that do nothing but waste processor clock cycles. These functions also \u201cuse\u201d randomly generated strings that are also present in a binary.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/mysterysnail-attacks-with-windows-zero-day/104509/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mystery_snail"
        ],
        "uuid": "582092bf-4d53-40c0-bb80-c7c1508127b2",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "mysterysnail_rat",
    "analysis": null
};