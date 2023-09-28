var threatdata = {
    "name": "POWERTON",
    "alias": "POWERTON",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "POWERTON",
        "names": [
            {
                "name": "POWERTON"
            }
        ],
        "description": "(FireEye) POWERTON is a backdoor written in PowerShell; FireEye has not yet identified any publicly available toolset with a similar code base, indicating that it is likely custom-built. POWERTON is designed to support multiple persistence mechanisms, including WMI and auto-run registry key. Communications with the C2 are over TCP/HTTP(S) and leverage AES encryption for communication traffic to and from the C2. POWERTON typically gets deployed as a later stage backdoor and is obfuscated several layers.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0371/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powerton"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:powerton"
        ],
        "uuid": "cdb68988-cc6c-4324-9767-7bffc666d6de",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powerton",
    "analysis": null
};