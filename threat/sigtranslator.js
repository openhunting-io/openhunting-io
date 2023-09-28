var threatdata = {
    "name": "SIGTRANslator",
    "alias": "SIGTRANslator",
    "category": "Malware",
    "type": "Exfiltration, Tunneling",
    "modified": "2021-11-03",
    "all_data": {
        "tool": "SIGTRANslator",
        "names": [
            {
                "name": "SIGTRANslator"
            }
        ],
        "description": "(CrowdStrike) This executable provides LightBasin with the ability to transmit data via telecommunication-specific protocols, while monitoring the data being transmitted. SIGTRANslator is a Linux ELF binary capable of sending and receiving data via various SIGTRAN protocols, which are used to carry public switched telephone network (PSTN) signaling over IP networks. This signaling data includes valuable metadata such as telephone numbers called by a specific mobile station. Data transmitted to and from SIGTRANslator via these protocols is also sent to a remote C2 host that connects to a port opened by the binary. This allows the remote C2 server to siphon data flowing through the binary and send data to SIGTRANslator from the C2 to be re-sent via a SIGTRAN protocol.",
        "category": "Malware",
        "type": [
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/an-analysis-of-lightbasin-telecommunications-attacks/"
        ],
        "uuid": "b8f0aab4-4597-4980-ae51-d65bda1e64e4",
        "last-card-change": "2021-11-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sigtranslator",
    "analysis": null
};