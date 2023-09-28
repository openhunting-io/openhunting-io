var threatdata = {
    "name": "Syscon",
    "alias": "Syscon, SYSCON, Sanny",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Syscon",
        "names": [
            {
                "name": "Syscon"
            },
            {
                "name": "SYSCON"
            },
            {
                "name": "Sanny"
            }
        ],
        "description": "(Trend Micro) Bots can use various methods to establish a line of communication between themselves and their command-and-control (C&C) server. Usually, these are done via HTTP or other TCP/IP connections. However, we recently encountered a botnet that uses a more unusual method: an FTP server that, in effect, acts as a C&C server.\n\nUsing an FTP server has some advantages. It is less common, and this fact may allow it to slip unnoticed by administrators and researchers. However, this also leaves the C&C traffic open for monitoring by others, including security researchers. In addition, thanks to a coding mistake by the attackers, this particular backdoor does not always run the right commands.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/syscon-backdoor-uses-ftp-as-a-cc-channel/",
            "https://securingtomorrow.mcafee.com/mcafee-labs/mcafee-uncovers-operation-honeybee-malicious-document-campaign-targeting-humanitarian-aid-groups/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0464/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.syscon"
        ],
        "uuid": "60d69ed9-e971-40af-9ea7-658d46c130c4",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "syscon",
    "analysis": null
};