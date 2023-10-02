var threatdata = {
    "name": "CamCapture Plugin",
    "alias": "CamCapture Plugin",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "CamCapture Plugin",
        "names": [
            {
                "name": "CamCapture Plugin"
            }
        ],
        "description": "(Cylance) This Win32 PE DLL arrives in a partially obfuscated form with its entry point obscured by garbage opcodes, useless instructions, and non-linear code flow. It exports several functions that can possibly be invoked with the use of {{Roland}} backdoor\u2019s run_dll command.\n\nMost of these exports provide various screenshot and video capture functionality.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf"
        ],
        "uuid": "f02f03d7-3d90-4cb2-8774-dd53a2718b70",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "camcapture_plugin",
    "analysis": null,
    "articles": [],
    "mitre": []
};