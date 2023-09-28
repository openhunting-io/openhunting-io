var threatdata = {
    "name": "FormerFirstRAT",
    "alias": "FormerFirstRAT, FF-RAT, ffrat",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "FormerFirstRAT",
        "names": [
            {
                "name": "FormerFirstRAT"
            },
            {
                "name": "FF-RAT"
            },
            {
                "name": "ffrat"
            }
        ],
        "description": "(Palo Alto) This remote administration tool (RAT) is referred to as \u201cFormerFirstRAT\u201d by its authors. FormerFirstRAT communicates using unencrypted HTTP over port 443; the use of mismatching ports and communication protocols is not uncommon in targeted attack campaigns. In addition, port / protocol mis-match traffic can be an indicator of bad activity.\n\nThe remote server has the ability to respond and provide instructions to the RAT. We have identified the following functionalities:\n\u2022 Modify sleep timer between requests\n\u2022 Execute a command and return the command output\n\u2022 Browse the file system\n\u2022 Download files\n\u2022 Delete files\n\u2022 Exfiltrate victim information",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.former_first_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:formerfirstrat"
        ],
        "uuid": "d04ba5af-cabc-4710-bf6e-84688a211480",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "formerfirstrat",
    "analysis": null
};