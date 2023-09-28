var threatdata = {
    "name": "Olympic Destroyer",
    "alias": "Olympic Destroyer, SOURGRAPE",
    "category": "Malware",
    "type": "Credential stealer, Wiper, Worm, Remote command",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Olympic Destroyer",
        "names": [
            {
                "name": "Olympic Destroyer"
            },
            {
                "name": "SOURGRAPE"
            }
        ],
        "description": "(Kaspersky) The main malware module is a network worm that consists of multiple components, including a legitimate {{PsExec}} tool from {{SysInternals}}\u2019 suite, a few credential stealer modules and a wiper. From a technical perspective, the purpose of the malware is to deliver and start the wiper payload which attempts to destroy files on the remote network shares over the next 60 minutes. Meanwhile, the main module collects user passwords from browser and Windows storage and crafts a new generation of the worm that contains old and freshly collected compromised credentials. The new generation of the worm is pushed to accessible local network computers and starts using the PsExec tool, leveraging the collected credentials and current user privileges.\n\nOnce the wiper has run for 60 minutes it cleans Windows event logs, resets backups, deletes shadow copies from the file system, disables the recovery item in the Windows boot menu, disables all the services on the system and reboots the computer. Those files on the network shares that it managed to wipe within 60 minutes remain destroyed. The malware doesn\u2019t use any persistence and even contains protection (also a killswitch) against recurring reinfection. Incidentally, only 1MB of the remote files are fully overwritten with zeroes; larger files were wiped with just 1K of zeroes in the header. The local files are not destroyed and the worm doesn\u2019t wipe itself or its components.",
        "category": "Malware",
        "type": [
            "Credential stealer",
            "Wiper",
            "Worm",
            "Remote command"
        ],
        "information": [
            "https://securelist.com/olympicdestroyer-is-here-to-trick-the-industry/84295/",
            "http://blog.talosintelligence.com/2018/02/olympic-destroyer.html",
            "https://www.lastline.com/labsblog/olympic-destroyer-south-korea/",
            "https://securelist.com/the-devils-in-the-rich-header/84348/",
            "https://cyber.wtf/2018/03/28/dissecting-olympic-destroyer-a-walk-through/",
            "https://securelist.com/olympic-destroyer-is-still-alive/86169/",
            "http://blog.talosintelligence.com/2018/02/who-wasnt-responsible-for-olympic.html",
            "https://www.lastline.com/labsblog/attribution-from-russia-with-code/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0365/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.olympic_destroyer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Olympic%20Destroyer"
        ],
        "uuid": "0662a96f-61af-4f1c-b978-9f42d155cf0c",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "olympic_destroyer",
    "analysis": null
};