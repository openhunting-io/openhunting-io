var threatdata = {
    "name": "MgBot",
    "alias": "MgBot, BLame, Mgmbot",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-08-10",
    "all_data": {
        "tool": "MgBot",
        "names": [
            {
                "name": "MgBot"
            },
            {
                "name": "BLame"
            },
            {
                "name": "Mgmbot"
            }
        ],
        "description": "(Malwarebytes) MgBot uses several anti-analysis and anti-virtualization techniques. The code is self modifying which means it alters its code sections during runtime. This makes static analysis of the sample harder.\n\nMgBot tries to avoid running in known virtualized environment such as VmWare, Sandboxie and VirtualBox. To identify if it\u2019s running in one of these environments, it looks for the following DLL files: vmhgfs.dll, sbiedll.dll and vboxogl.dll and if it finds any of these DLLs, it goes to an infinite loop without doing any malicious activity.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.malwarebytes.com/threat-analysis/2020/07/chinese-apt-group-targets-india-and-hong-kong-using-new-variant-of-mgbot-malware/",
            "https://vb2020.vblocalhost.com/uploads/VB2020-43.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mgbot"
        ],
        "uuid": "ff3865c1-fb45-4197-89a2-2cce3bed17bb",
        "last-card-change": "2021-08-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "mgbot",
    "analysis": null
};