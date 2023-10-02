var threatdata = {
    "name": "agfSpy",
    "alias": "agfSpy",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "agfSpy",
        "names": [
            {
                "name": "agfSpy"
            }
        ],
        "description": "The agfSpy backdoor retrieves configuration and commands from its C&C server. These commands allow the backdoor to execute shell commands and send the execution results back to the server. It also enumerates directories and can list, upload, download, and execute files, among other functions. The capabilities of agfSpy are very similar to {{dneSpy}}, except each backdoor uses a different C&C server and various formats in message exchanges.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-kitsune.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.agfspy"
        ],
        "uuid": "20206555-8dd2-4fbe-b878-7edba075b872",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "agfspy",
    "analysis": null,
    "articles": [],
    "mitre": []
};