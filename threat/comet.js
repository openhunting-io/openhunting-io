var threatdata = {
    "name": "Comet",
    "alias": "Comet, Meteor, Stardust",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2021-11-01",
    "all_data": {
        "tool": "Comet",
        "names": [
            {
                "name": "Comet"
            },
            {
                "name": "Meteor"
            },
            {
                "name": "Stardust"
            }
        ],
        "description": "(Check Point) The wiping procedure itself is pretty simple. First, the malware goes over the files and directories from the paths_to_wipe config, fills them with zero-bytes instead of their real content, and then deletes them.\nAfter the wiping procedure, the malware tries to delete the shadow copies by running the following commands: vssadmin.exe delete shadows /all /quiet **and **C:\\\\Windows\\\\system32\\\\wbem\\\\wmic.exe shadowcopy delete. Finally, the malware enters an infinite loop where it sleeps based on the is_alive_loop_interval value from the configuration file and writes 'Meteor is still alive.' to the log in every iteration.\nIf all this rings familiar to you, it should; it\u2019s all straight out from the ransomware playbook \u2014 except this isn\u2019t ransomware, which requires delicate orchestration of public-key and private-key cryptography to make the machine ultimately recoverable; this is Nuke-it-From-Orbit-ware. It\u2019s a one-way trip.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://research.checkpoint.com/2021/indra-hackers-behind-recent-attacks-on-iran/"
        ],
        "uuid": "0af6db50-df36-41ae-89d1-4f9674b87efe",
        "last-card-change": "2021-11-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "comet",
    "analysis": null
};