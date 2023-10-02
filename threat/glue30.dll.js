var threatdata = {
    "name": "glue30.dll",
    "alias": "glue30.dll",
    "category": "Malware",
    "type": "Keylogger",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "glue30.dll",
        "names": [
            {
                "name": "glue30.dll"
            }
        ],
        "description": "(Kaspersky) The glue30.dll malware module provides keylogging functionality. The updater.mod module uses the Win API function SetWindowsHookExW to install hooks for the keyboard and to inject glue30.dll into processes that get keyboard input. After that, glue30.dll loads and begins intercepting input in the context of each hooked process.",
        "category": "Malware",
        "type": [
            "Keylogger"
        ],
        "information": [
            "https://securelist.com/darkuniverse-the-mysterious-apt-framework-27/94897/"
        ],
        "uuid": "83b4e3f9-419c-4382-a035-6490a4901d2a",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "glue30.dll",
    "analysis": null,
    "articles": [],
    "mitre": []
};