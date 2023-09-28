var threatdata = {
    "name": "PowGoop",
    "alias": "PowGoop",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PowGoop",
        "names": [
            {
                "name": "PowGoop"
            }
        ],
        "description": "(Palo Alto) The PowGoop downloader has two components: a DLL loader and a PowerShell-based downloader. The PowGoop loader component is responsible for decrypting and running the PowerShell code that comprises the PowGoop downloader. The PowGoop loader DLL that existed in the same environment as LogicalDuckBill had a filename of goopdate.dll that was likely sideloaded by the legitimate and signed Google Update executable. The sideloading process would start with the legitimate GoogleUpdate.exe file loading a legitimate DLL with a name of goopdate86.dll. The sideloading would occur when the goopdate86.dll library loads the goopdate.dll file, which effectively runs the PowGoop loader.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/thanos-ransomware/",
            "https://www.clearskysec.com/wp-content/uploads/2020/10/Operation-Quicksand.pdf",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/seedworm-apt-iran-middle-east"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1046/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powgoop"
        ],
        "uuid": "5bb80638-3bd5-4921-adc9-ef529ced2d91",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powgoop",
    "analysis": null
};