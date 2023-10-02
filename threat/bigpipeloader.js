var threatdata = {
    "name": "BigpipeLoader",
    "alias": "BigpipeLoader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-11-19",
    "all_data": {
        "tool": "BigpipeLoader",
        "names": [
            {
                "name": "BigpipeLoader"
            }
        ],
        "description": "(Trend Micro) Since this loader will read/write encrypted payload through a named pipe, we named this shellcode loader BigpipeLoader. In one of our threat hunting sessions, we found two variants of this loader with different execution procedures. The first variant of BigpipeLoader just drops the decoy file and loads the Cobalt Strike payload into the memory, then proceeds to execute it. In the second variant, however, the attacker creates a dropper, which drops the malicious WTSAPI32.dll designed to be sideloaded by a legitimate application with the file name \u201cwusa.exe\u201d. This launches the encrypted BigpipeLoader (chrome.inf). Both variants of BigpipeLoader use the AES-128-CFB algorithm to decrypt the payload.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/22/k/hack-the-real-box-apt41-new-subgroup-earth-longzhi.html"
        ],
        "uuid": "bf77aa3f-d900-4311-91f0-47f5d8c9a6e1",
        "last-card-change": "2022-11-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bigpipeloader",
    "analysis": null,
    "articles": [],
    "mitre": []
};