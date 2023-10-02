var threatdata = {
    "name": "PyFlash",
    "alias": "PyFlash",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "PyFlash",
        "names": [
            {
                "name": "PyFlash"
            }
        ],
        "description": "(ESET) This second stage backdoor is a py2exe executable. py2exe is a Python extension to convert a Python script into a standalone Windows executable. To our knowledge, this is the first time the Turla developers have used the Python language in a backdoor.\n\nThe backdoor communicates with its hardcoded C&C server via HTTP. The C&C URL and other parameters such as the AES key and IV used to encrypt all network communications are specified at the beginning of the script.\n\nThe C&C server can also send backdoor commands in JSON format. The commands implemented in this version of PyFlash are:\n\u2022 Download additional files from a given HTTP(S) link.\n\u2022 Execute a Windows command using the Python function subprocess32.Popen.\n\u2022 Change the execution delay: modifies the Windows task that regularly (every X minutes; 5 by default) launches the malware.\n\u2022 Kill (uninstall) the malware.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/03/12/tracking-turla-new-backdoor-armenian-watering-holes/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PyFlash"
        ],
        "uuid": "c48d96e8-d9ad-4bfa-beb4-ba44b70c77cd",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pyflash",
    "analysis": null,
    "articles": [],
    "mitre": []
};