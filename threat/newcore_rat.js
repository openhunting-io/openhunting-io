var threatdata = {
    "name": "NewCore RAT",
    "alias": "NewCore RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration, Tunneling",
    "modified": "2020-06-04",
    "all_data": {
        "tool": "NewCore RAT",
        "names": [
            {
                "name": "NewCore RAT"
            }
        ],
        "description": "(Fortinet) This RAT is a DLL file. Its malicious routines are contained in its imported function \u201cProcessTrans\u201d. However, executing the DLL without using the downloader will not work as the C&C server string is not embedded in its body. When the downloader calls the function \u201cProcessTrans\u201d, it supplies to the function the C&C server string and a handle to the C&C server internet session. In this case, Heuristic detection based on behavior will not work on the DLL alone.\n\nThis RAT is capable of the following:\n\n\u2022 Shutdown the machine\n\u2022 Restart the machine\n\u2022 Get disk list\n\u2022 Get directory list\n\u2022 Get file information\n\u2022 Get disk information\n\u2022 Rename files\n\u2022 Copy files\n\u2022 Delete files\n\u2022 Execute files\n\u2022 Search files\n\u2022 Download files\n\u2022 Upload files\n\u2022 Screen monitoring\n\u2022 Start command shell\n\nNewCore RAT may just be a rehashed {{PCClient}} RAT, but it proves to be effective in evading AV detection by using a combination of simple techniques such as DLL-hijacking, file-less execution of downloaded malware, and passing C&C information as parameter from downloader to the downloaded file.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/rehashed-rat-used-in-apt-campaign-against-vietnamese-organizations.html",
            "https://securelist.com/cycldek-bridging-the-air-gap/97157/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.newcore_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:NewCore"
        ],
        "uuid": "55a366cc-0771-4854-85a3-5eed99e33f9e",
        "last-card-change": "2020-06-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "newcore_rat",
    "analysis": null
};