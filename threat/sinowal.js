var threatdata = {
    "name": "Sinowal",
    "alias": "Sinowal, Anserin, Mebroot, Quarian, Theola, Torpig",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Downloader, Exfiltration",
    "modified": "2020-05-22",
    "all_data": {
        "tool": "Sinowal",
        "names": [
            {
                "name": "Sinowal"
            },
            {
                "name": "Anserin"
            },
            {
                "name": "Mebroot"
            },
            {
                "name": "Quarian"
            },
            {
                "name": "Theola"
            },
            {
                "name": "Torpig"
            }
        ],
        "description": "(Fortinet) The installer drops a dynamic-link library (DLL) onto the local hard disk. The DLL acts as a loader module and will load other components, if any exist, and download a manager module which plays a central role in conducting banking fraud. The manager module downloads several plug-in modules from the C&C server, aimed at different target applications. These modules are used to steal sensitive information including bank account details, email addresses and FTP accounts. All plug-in modules contact the manager module through a named pipe, while the manager module communicates directly with the C&C server, uploading stolen information, reporting the local status of the trojan and downloading configuration and plug-in modules, as well as script commands for the plug-in modules to run.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.virusbulletin.com/virusbulletin/2014/06/sinowal-banking-trojan",
            "https://www.welivesecurity.com/2013/03/13/how-theola-malware-uses-a-chrome-plugin-for-banking-fraud/",
            "https://en.wikipedia.org/wiki/Torpig"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sinowal"
        ],
        "uuid": "40636fe0-6160-4e7e-a7d0-e0dbc599d7aa",
        "last-card-change": "2020-05-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sinowal",
    "analysis": null
};