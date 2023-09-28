var threatdata = {
    "name": "XDMonitor",
    "alias": "XDMonitor",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "XDMonitor",
        "names": [
            {
                "name": "XDMonitor"
            }
        ],
        "description": "(ESET) XDMonitor is intended to monitor the machine\u2019s activity. It monitors when removable drives are inserted by creating a new hidden window and registering it for device notification (using RegisterDeviceNotificationW and the GUID GUID_DEVINTERFACE_DISK). When a new drive is inserted, it crawls it recursively. When a file with an interesting extension (the same list as for XDList) is found, it encrypts it using RC4 (the hard-coded key is 1234123412341234) and uploads it to the C&C server.\nIt also takes a screenshot every minute. Unlike the screenshots taken by {{XDList}}, the image is not encrypted and is stored in %TEMP%\\tmp%YEAR%%MONTH%%DAY%_%TICK_COUNT%.s. The screenshot is uploaded to the C&C immediately after being taken.\nFinally, XDMonitor sends regular debug messages to the C&C server.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "87dcdd53-b099-4067-ae5e-2bf242977fa0",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "xdmonitor",
    "analysis": null
};