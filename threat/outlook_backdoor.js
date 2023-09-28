var threatdata = {
    "name": "Outlook Backdoor",
    "alias": "Outlook Backdoor, FACADE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Outlook Backdoor",
        "names": [
            {
                "name": "Outlook Backdoor"
            },
            {
                "name": "FACADE"
            }
        ],
        "description": "(ESET) The Turla Outlook backdoor has two interesting functionalities.\nFirst, it steals emails by forwarding all outgoing emails to the attackers. It mainly targets Microsoft Outlook, a widely used mail client, but also targets The Bat!, a mail client very popular in Eastern Europe.\nSecond, it uses email messages as a transport layer for its Command & Control (C&C) protocol. Data, such as files requested via a command of the backdoor, is exfiltrated in specially-crafted PDF documents attached to emails, and commands are also received in PDF attachments. Thus, its behavior is particularly stealthy. It is important to note that no vulnerabilities were used either in PDF readers nor in Outlook. What actually happens is that the malware is able to decode data from the PDF documents and interpret it as commands for the backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/08/Eset-Turla-Outlook-Backdoor.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.outlook_backdoor"
        ],
        "uuid": "4deb4745-67e2-4865-ad95-c02d48c33726",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "outlook_backdoor",
    "analysis": null
};