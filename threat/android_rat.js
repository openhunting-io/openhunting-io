var threatdata = {
    "name": "Android RAT",
    "alias": "Android RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-08-27",
    "all_data": {
        "tool": "Android RAT",
        "names": [
            {
                "name": "Android RAT"
            }
        ],
        "description": "(Kaspersky) The first application on the list that is not installed on the system will be selected as the target application. The malware embeds multiple APK files, which are stored in a directory named \u201cassets\u201d. The analyzed sample includes the following packages:\n\napk a20fc273a49c3b882845ac8d6cc5beac\napk 53cd72147b0ef6bf6e64d266bf3ccafe\napk bae69f2ce9f002a11238dcf29101c14f\napk b8006e986453a6f25fd94db6b7114ac2\napk 4556ccecbf24b2e3e07d3856f42c7072\napk 6c3308cd8a060327d841626a677a0549\n\nThe selected APK is copied to /.System/APK/. By default, the application tries to save the file to external storage, otherwise it saves it to the data directory.\n\nFinally, the application tries to install the copied APK. The final malware is a modified version of the AhMyth Android RAT, open-source malware downloadable from GitHub, which is built by binding the malicious payload inside other legitimate applications.\n\nBasically, it provides the following features:\n\n\u2022 camera manager (list devices and steal screenshots)\n\u2022 file manager (enumerate files and upload these to the C2)\n\u2022 SMS manager (get a list of text messages or send a text)\n\u2022 get the call log\n\u2022 get the contact list\n\u2022 microphone manager\n\u2022 location manager (track the device location)\n\nThe RAT that we analyzed is slightly different from the original. It includes new features added by the attackers to improve data exfiltration, whereas some of the core features, such as the ability to steal pictures from the camera, are missing.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/transparent-tribe-part-2/98233/"
        ],
        "uuid": "6d0531f4-46f8-4b78-a3d9-44c73aeefbcc",
        "last-card-change": "2020-08-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "android_rat",
    "analysis": null
};