var threatdata = {
    "name": "Byeby",
    "alias": "Byeby",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Byeby",
        "names": [
            {
                "name": "Byeby"
            }
        ],
        "description": "(Palo Alto) BYEBY was named based on a string within the malware itself. Most strings found within this malware are concatenated to 6 characters. One such example was an instance where a debug string contained \u2018BYE BY\u2019, which was likely a concatenated form of the phrase \u2018BYE BYE\u2019.\n\nThis malware is loaded as a DLL, with an export name of ServiceMain.\n\nThe malware is configured to accept a number of commands. These appear to be Base64-encoded strings that, when decoded, provide their true meaning. Only the beginning of the commands are checked. The Base64-decoded strings have been included for the benefit of the reader.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-threat-actors-target-government-belarus-using-cmstar-trojan/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.byeby"
        ],
        "uuid": "8ba1c2a6-3d3d-4dc7-82b4-6fb1913021ac",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "byeby",
    "analysis": null,
    "articles": [],
    "mitre": []
};