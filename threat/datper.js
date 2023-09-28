var threatdata = {
    "name": "Datper",
    "alias": "Datper",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Datper",
        "names": [
            {
                "name": "Datper"
            }
        ],
        "description": "(JPCERT/CC) Datper communicates with a C&C server using HTTP protocol and operates based on the received commands. One of the characteristics is that it only communicates within a specific period of time.\n\nThe malware receives a command as a response to the above HTTP request, and it executes functions based on the commands. Functions that Datper can execute are the following:\n\u2022 Obtain host names, OS versions etc.\n\u2022 Obtain drive information\n\u2022 Configure communication intervals\n\u2022 Sleep for a set period of time\n\u2022 Execute a program\n\u2022 Operate on files (Obtain file lists, download, upload, delete)\n\u2022 Execute shell commands\n\nAfter executing these functions, Datper sends the results to a C&C server.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blogs.jpcert.or.jp/en/2017/08/detecting-datper-malware-from-proxy-logs.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
            "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.datper"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Datper"
        ],
        "uuid": "26cad6ce-54da-4ad1-8f06-24d59dd4603d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "datper",
    "analysis": null
};