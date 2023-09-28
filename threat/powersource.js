var threatdata = {
    "name": "POWERSOURCE",
    "alias": "POWERSOURCE",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "POWERSOURCE",
        "names": [
            {
                "name": "POWERSOURCE"
            }
        ],
        "description": "(FireEye) POWERSOURCE is a heavily obfuscated and modified version of the publicly available tool DNS_TXT_Pwnage. The backdoor uses DNS TXT requests for command and control and is installed in the registry or Alternate Data Streams. Using DNS TXT records to communicate is not an entirely new finding, but it should be noted that this has been a rising trend since 2013 likely because it makes detection and hunting for command and control traffic difficult.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/03/fin7_spear_phishing.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0145/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powersource"
        ],
        "uuid": "bfd159e4-ca5e-493f-a580-a1c803026c5d",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powersource",
    "analysis": null
};