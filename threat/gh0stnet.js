var threatdata = {
    "name": "Gh0stnet",
    "alias": "Gh0stnet, Ghostnet, Remosh",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Gh0stnet",
        "names": [
            {
                "name": "Gh0stnet"
            },
            {
                "name": "Ghostnet"
            },
            {
                "name": "Remosh"
            }
        ],
        "description": "(UCAM) Our next observation concerns the malware payloads used. These were packaged as either .doc or .pdf files that installed rootkits on the machines of monks who clicked on them. During our initial network monitoring exercise, we observed sensitive files being transferred out of the Office of His Holiness the Dalai Lama (OHHDL) using a modified HTTP protocol: the malware picked up files from local disks and sent them to three servers which, according to APNIC, were in China\u2019s Sichuan province, using a custom protocol based on HTTP. The malware uses HTTP GET and HTTP POST messages to transfer files out and also appears to verify successful transmission. Sichuan, by the way, is the location of the Chinese intelligence unit specifically tasked with monitoring the OHHDL.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-746.pdf",
            "https://securitynews.sonicwall.com/xmlpost/gh0stnet-now-spreads-as-a-fileless-malware-nov-022017/",
            "https://www.nartv.org/2019/03/28/10-years-since-ghostnet/",
            "http://contagiodump.blogspot.com/2011/07/jul-25-mac-olyx-gh0st-backdoor-in-rar.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ghostnet"
        ],
        "uuid": "1ab15fc8-f2d0-4796-b342-2eb5f4527f86",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gh0stnet",
    "analysis": null
};