var threatdata = {
    "name": "PRIVATELOG",
    "alias": "PRIVATELOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "PRIVATELOG",
        "names": [
            {
                "name": "PRIVATELOG"
            }
        ],
        "description": "(Cybereason) PRIVATELOG is a module that exists in 2 forms:\n<BR />\u2022 Wlbsctrl.dll: A DLL to be side-loaded by the IKEEXT service, aiming to execute on Windows Vista to Windows 7 operating systems.\n\u2022 Prntvpt.dll: A DLL to be side loaded by the PrintNotify service, aiming to execute on Windows Server 2012 to Windows 10 operating systems.\n\nAs both of the DLLs are being loaded by native Windows services, they both live in the context of the svchost process, but differ in their execution flow.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "https://www.mandiant.com/resources/unknown-actor-using-clfs-log-files-for-stealth"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.privatelog"
        ],
        "uuid": "3f25cda3-f293-4a3a-9b3a-7cdef172f7d9",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "privatelog",
    "analysis": null
};