var threatdata = {
    "name": "NetFlash",
    "alias": "NetFlash",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "NetFlash",
        "names": [
            {
                "name": "NetFlash"
            }
        ],
        "description": "(ESET) a .NET application that dropped an installer for Adobe Flash v32 in %TEMP%\\adobe.exe, and NetFlash (a .NET downloader) in %TEMP%\\winhost.exe.\n\nAccording to their compilation timestamps, the malware samples were compiled at the end of August 2019 and at the beginning on September 2019, right before being uploaded to the watering hole\u2019s C&C server.\n\nNetFlash downloads its second stage malware from a hardcoded URL and establishes persistence for this new backdoor using a Windows scheduled task. Figure 5 shows the NetFlash function that downloads the second stage malware, named {{PyFlash}}.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/03/12/tracking-turla-new-backdoor-armenian-watering-holes/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.netflash"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:NetFlash"
        ],
        "uuid": "8f1534db-c4ab-4e5d-927f-36b3cd4c632d",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "netflash",
    "analysis": null
};