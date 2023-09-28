var threatdata = {
    "name": "Flashflood",
    "alias": "Flashflood",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Flashflood",
        "names": [
            {
                "name": "Flashflood"
            }
        ],
        "description": "(Kaspersky) FLASHFLOOD is responsible for copying files from an inserted removable drive to the hard drive of an infected computer, presumably to remove files transferred from the air-gapped system to an Internet-connected machine for removal from the victim network. FLASHFLOOD will scan both the infected system and any inserted removable drive for specific files (based on file extension or last modified time) and copy them to a specified location, using the same compression and encoding method as SPACESHIP. FLASHFLOOD may also log additional information about the victim host, including system information and data from the user\u2019s Windows Address Book.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2015/05/20081935/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0036/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flashflood"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:flashflood"
        ],
        "uuid": "e2853862-6433-4ecc-82d3-9f5205197047",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "flashflood",
    "analysis": null
};