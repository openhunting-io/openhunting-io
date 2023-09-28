var threatdata = {
    "name": "KeyBoy",
    "alias": "KeyBoy, TSSL",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "KeyBoy",
        "names": [
            {
                "name": "KeyBoy"
            },
            {
                "name": "TSSL"
            }
        ],
        "description": "(PWC) The malware leveraged by KeyBoy has a plethora of functionality, including, but not limited to:\n\n\u2022 Screen grabbing/taking screenshots;\n\u2022 Determine public or WAN IP address (using a public IP service), likely for determining a suited target;\n\u2022 Gather extended system information, such as information about the operating system, disks, memory and so on;\n\u2022 A \u2018file browser\u2019 or explorer;\n\u2022 Shutdown and reboot commands (in addition to the point below);\n\u2022 Launching interactive shells for communicating with the victim machine;\n\u2022 Download and upload functionality; and\n\u2022 Usage of custom SSL libraries for masquerading C2 traffic.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.pwc.co.uk/issues/cyber-security-data-privacy/research/the-keyboys-are-back-in-town.html",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/tropic-trooper-new-strategy/",
            "https://citizenlab.ca/2016/11/parliament-keyboy/",
            "https://blog.rapid7.com/2013/06/07/keyboy-targeted-attacks-against-vietnam-and-india/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0387/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.keyboy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:keyboy"
        ],
        "uuid": "dbec73b9-60b1-42a5-a4b3-ab5bef525f2b",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "keyboy",
    "analysis": null
};