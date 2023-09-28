var threatdata = {
    "name": "Machete",
    "alias": "Machete, El Machete",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Machete",
        "names": [
            {
                "name": "Machete"
            },
            {
                "name": "El Machete"
            }
        ],
        "description": "According to ESET, Machete\u2019s dropper is a RAR SFX executable. Three py2exe components are dropped: GoogleCrash.exe, Chrome.exe and GoogleUpdate.exe. A single configuration file, jer.dll, is dropped, and it contains base64-encoded text that corresponds to AES-encrypted strings.\nGoogleCrash.exe is the main component of the malware. It schedules execution of the other two components and creates Windows Task Scheduler tasks to achieve persistence.\nRegarding the geolocation of victims, Chrome.exe collects data about nearby Wi-Fi networks and sends it to the Mozilla Location Service API. In short, this application provides geolocation coordinates when it\u2019s given other sources of data such as Bluetooth beacons, cell towers or Wi-Fi access points. Then the malware takes latitude and longitude coordinates to build a Google Maps URL.\nThe GoogleUpdate.exe component is responsible for communicating with the remote C&C server. The configuration to set the connection is read from the jer.dll file: domain name, username and password. The principal means of communication for Machete is via FTP, although HTTP communication was implemented as a fallback in 2019.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2019/08/ESET_Machete.pdf",
            "https://securelist.com/el-machete/66108/",
            "https://www.cylance.com/en_us/blog/el-machete-malware-attacks-cut-through-latam.html",
            "https://medium.com/@verovaleros/el-machete-what-do-we-know-about-the-apt-targeting-latin-america-be7d11e690e6"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0409/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.machete"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Machete"
        ],
        "uuid": "0abfd804-c6f6-483e-987b-3714073798bc",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Machete",
            "malware_alias": "El Machete",
            "malware": "win.machete",
            "last_update": "2022-05-03 22:25:55",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "05a9724fc96b9a8093a1f437c3030ca8",
                        "timestamp": "2022-05-03 22:25:55"
                    },
                    {
                        "value": "21388527c8e63a333892d922faae5826",
                        "timestamp": "2022-05-03 22:25:55"
                    },
                    {
                        "value": "2f665e4c068d2f09fef3ddf10caaef6f",
                        "timestamp": "2022-05-03 08:25:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-03 22:25:55",
    "mitre": [],
    "file_name": "machete",
    "analysis": null
};