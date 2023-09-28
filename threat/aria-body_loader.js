var threatdata = {
    "name": "Aria-body loader",
    "alias": "Aria-body loader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Aria-body loader",
        "names": [
            {
                "name": "Aria-body loader"
            }
        ],
        "description": "(Check Point) The functionality of the Aria-body loader has not changed significantly since 2017, but the implementation varied from version to version. This loader appears to be specifically created for the Aria-body backdoor.\n\nOverall, the loader is responsible for the following tasks:\n\n\u2022 Establish persistence via the Startup folder or theRun registry key (some variants).\n\u2022 Inject itself to another process such as rundll32.exe and dllhost.exe (some variants).\n\u2022 Decrypt two blobs: Import Table and the loader configuration.\n\u2022 Utilize a DGA algorithm if required.\n\u2022 Contact the embedded / calculated C&C address in order to retrieve the next stage payload.\n\u2022 Decrypt the received payload DLL ({{Aria-body}} backdoor).\n\u2022 Load and execute an exported function of the DLL \u2013 calculated using djb2 hashing algorithm.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://research.checkpoint.com/2020/naikon-apt-cyber-espionage-reloaded/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ariabody"
        ],
        "uuid": "5eaa1038-46a4-4d05-8982-25ef7e1cf077",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "aria-body_loader",
    "analysis": null
};