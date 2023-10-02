var threatdata = {
    "name": "Md_client",
    "alias": "Md_client",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Exfiltration",
    "modified": "2021-01-06",
    "all_data": {
        "tool": "Md_client",
        "names": [
            {
                "name": "Md_client"
            }
        ],
        "description": "(Bitdefender) This component uses the UDP and the 53 port to communicate with the C&C server and is capable of:\n\u2022 Collecting system information like computer name, user name, osverion, processor architecture;\n\u2022 Creating a remote shell by running a cmd.exe with stdin/stdout/stderr \u201cconnected\u201d to the C&C\n\u2022 Sending the Logical Drive Strings\n\u2022 Listing a directory\n\u2022 Uploading and downloading a file\n\u2022 Deleting a directory\n\u2022 Executing a command using ShellExecuteW\n\u2022 Executing a command using CreateDesktop (\u201cmydktop1\u201d) and CreateProcess",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf"
        ],
        "uuid": "334f29bc-e758-4e35-ac9b-d35e4d4e5179",
        "last-card-change": "2021-01-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "md_client",
    "analysis": null,
    "articles": [],
    "mitre": []
};