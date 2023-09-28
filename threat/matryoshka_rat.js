var threatdata = {
    "name": "Matryoshka RAT",
    "alias": "Matryoshka RAT, Matryoshka",
    "category": "Malware",
    "type": "Backdoor, Dropper, Loader, Info stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Matryoshka RAT",
        "names": [
            {
                "name": "Matryoshka RAT"
            },
            {
                "name": "Matryoshka"
            }
        ],
        "description": "(ClearSky) The Matryoshka infection framework is built of three parts:\n\n\u2022 Dropper\no Obfuscating code and signaling to the C2 that the file has been executed\no Launching the loader and using it to execute functions.\no Comparing anti-analysis logic and reporting it back to C2\n\u2022 Reflective Loader\no Employing anti-debugging and anti-sandboxing techniques\no Runtime API Address resolver\no Covert DLL injection of the RAT library\no Persistence file on disk\n\u2022 RAT component\no Configuring the Reflective Loader to survive reboots and process exits\no DNS Command and Control communication\no Common RAT functionalities",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Dropper",
            "Loader",
            "Info stealer"
        ],
        "information": [
            "https://s3-eu-west-1.amazonaws.com/minervaresearchpublic/CopyKittens/CopyKittens.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0167/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.matryoshka_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Matryoshka"
        ],
        "uuid": "dc27057d-c0bb-48f2-a418-4293b46366fc",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "matryoshka_rat",
    "analysis": null
};