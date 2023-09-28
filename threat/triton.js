var threatdata = {
    "name": "Triton",
    "alias": "Triton, TRITON, Trisis, TRISIS, HatMan",
    "category": "Malware",
    "type": "ICS malware, Reconnaissance, Backdoor, Downloader, Info stealer, Remote command",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Triton",
        "names": [
            {
                "name": "Triton"
            },
            {
                "name": "TRITON"
            },
            {
                "name": "Trisis"
            },
            {
                "name": "TRISIS"
            },
            {
                "name": "HatMan"
            }
        ],
        "description": "(FireEye) The TRITON attack tool was built with a number of features, including the ability to read and write programs, read and write individual functions and query the state of the SIS controller. However, only some of these capabilities were leveraged in the trilog.exe sample (e.g. the attacker did not leverage all of TRITON\u2019s extensive reconnaissance capabilities).\n\nThe TRITON malware contained the capability to communicate with Triconex SIS controllers (e.g. send specific commands such as halt or read its memory content) and remotely reprogram them with an attacker-defined payload. The TRITON sample Mandiant analyzed added an attacker-provided program to the execution table of the Triconex controller. This sample left legitimate programs in place, expecting the controller to continue operating without a fault or exception. If the controller failed, TRITON would attempt to return it to a running state. If the controller did not recover within a defined time window, this sample would overwrite the malicious program with invalid data to cover its tracks.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Info stealer",
            "Remote command"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html",
            "https://www.midnightbluelabs.com/blog/2018/1/16/analyzing-the-triton-industrial-malware",
            "https://dragos.com/blog/trisis/TRISIS-01.pdf",
            "https://ics-cert.us-cert.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf",
            "https://github.com/ICSrepo/TRISIS-TRITON-HATMAN",
            "https://www.fireeye.com/blog/threat-research/2018/10/triton-attribution-russian-government-owned-lab-most-likely-built-tools.html",
            "https://blogs.cisco.com/security/how-does-triton-attack-triconex-industrial-safety-systems"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0609/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.triton"
        ],
        "uuid": "e331cfc5-45c9-4a74-a79f-dac9c622e39f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "triton",
    "analysis": null
};