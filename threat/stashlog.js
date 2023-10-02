var threatdata = {
    "name": "STASHLOG",
    "alias": "STASHLOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "STASHLOG",
        "names": [
            {
                "name": "STASHLOG"
            }
        ],
        "description": "(Cybereason) STASHLOG (shiver.exe / forsrv.exe) is a 32 bit executable that is being used to prepare the victim machine for further compromise, and to \u201cstash\u201d a malicious, encrypted payload to a CLFS log file. This payload will be decrypted at each phase to deliver the next phase in the infection.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "https://www.mandiant.com/resources/unknown-actor-using-clfs-log-files-for-stealth"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.stashlog"
        ],
        "uuid": "073125dd-411b-4292-bb14-5b42780ee33d",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "stashlog",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-deep-dive-into-stealthy-winnti-techniques",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: Deep-Dive into Stealthy Winnti Techniques",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: A Winnti Malware Arsenal Deep-Dive",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1433819369784610828",
            "date": "2021-09-03",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Twitter thread on SPARKLOG, a launcher component for PRIVATELOG along with STASHLOG",
            "categories": [
                "PRIVATELOG",
                "STASHLOG"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/09/unknown-actor-using-clfs-log-files-for-stealth.html",
            "date": "2021-09-01",
            "organization": "FireEye",
            "author": "Adrien Bataille",
            "title": "Too Log; Didn't Read \u2014 Unknown Actor Using CLFS Log Files for Stealth",
            "categories": [
                "PRIVATELOG",
                "STASHLOG"
            ]
        }
    ],
    "mitre": []
};