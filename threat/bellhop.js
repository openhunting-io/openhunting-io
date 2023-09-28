var threatdata = {
    "name": "BELLHOP",
    "alias": "BELLHOP",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "BELLHOP",
        "names": [
            {
                "name": "BELLHOP"
            }
        ],
        "description": "BELLHOP is a JavaScript backdoor interpreted using the native Windows Scripting Host (WSH).\nAfter performing some basic host information gathering, the BELLHOP dropper downloads a base64-encoded blob of JavaScript to disk and sets up persistence in three ways:\n\u2022 Creating a Run key in the Registry\n\u2022 Creating a RunOnce key in the Registry\n\u2022 Creating a persistent named scheduled task\n\u2022 BELLHOP communicates using HTTP and HTTPS with primarily benign sites such as Google Docs and PasteBin.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.bellhop"
        ],
        "uuid": "d4b98d7f-6fe7-4cee-9e84-dc702c41bab5",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bellhop",
    "analysis": null
};