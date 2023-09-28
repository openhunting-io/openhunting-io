var threatdata = {
    "name": "Harpoon",
    "alias": "Harpoon, Garpun",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Harpoon",
        "names": [
            {
                "name": "Harpoon"
            },
            {
                "name": "Garpun"
            }
        ],
        "description": "(Qihoo 360) [Google translated] Harpoon is a backdoor program for specific users independently developed by the Golden Eagle (APT-C-34) organization, which is implemented using Delphi. We obtained the instruction manual of the backdoor. The backdoor has powerful information collection functions, including screen captures, audio recordings, clipboard records, keyboard records, and stealing files with specific extensions.\n\nThe STS Harpoon program provides the following functions:\n\u2022 Keylogger\n\u2022 Clipboard record\n\u2022 Take screenshots of the active window on the desktop of the target computer at predetermined intervals;\n\u2022 List the contents of a given directory on the hard disk of the target computer;\n\u2022 Get Skype login name, contact list and chat messages;\n\u2022 Get Skype and Google Hangouts callers and voice records;\n\u2022 Record sound from the microphone and eavesdrop;\n\u2022 Copy the specified file from the target computer;\n\u2022 Automatically copy document files from removable media on the target computer;\n\u2022 Package all the intercepted and copied information into an encrypted dat file, and then save them in the specified directory;\n\u2022 Send the obtained information to the specified FTP;\n\u2022 Run programs or operating system commands;\n\u2022 Download files from a given FTP and release them to a specified directory;\n\u2022 Remotely reconfigure and update components;\n\u2022 Receive information from a given FTP and automatically unzip the file to a specified directory;\n\u2022 Self-destruct\n\nThe information collected by the backdoor is encrypted and uploaded to the designated FTP server. The related collected information is in the encrypted configuration file.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "http://blogs.360.cn/post/APT-C-34_Golden_Falcon.html"
        ],
        "uuid": "e74394ee-e4ab-4642-aca4-fa84d0dcabbf",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "harpoon",
    "analysis": null
};