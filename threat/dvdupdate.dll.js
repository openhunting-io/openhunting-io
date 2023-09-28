var threatdata = {
    "name": "DvDupdate.dll",
    "alias": "DvDupdate.dll",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "DvDupdate.dll",
        "names": [
            {
                "name": "DvDupdate.dll"
            }
        ],
        "description": "(Kaspersky) This is a service DLL, but with all the same exports you would expect from a COM object. Basically, it\u2019s a payload loader.\n\nThe whole code is obfuscated with different Windows API calls and loops. It wasn\u2019t designed to confuse a reverse engineer or to make reverse engineering harder, but to bypass some simple AV emulation engines.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://securelist.com/titanium-the-platinum-group-strikes-again/94961/"
        ],
        "uuid": "385daa4a-b683-4d5f-b74b-fc7890615a3a",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dvdupdate.dll",
    "analysis": null
};