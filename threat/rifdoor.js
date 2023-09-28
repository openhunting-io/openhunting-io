var threatdata = {
    "name": "Rifdoor",
    "alias": "Rifdoor",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Rifdoor",
        "names": [
            {
                "name": "Rifdoor"
            }
        ],
        "description": "(AhnLab) Rifdoor was first discovered in November 2015, and it remained active until early 2016. A Rifdoor variant was used to attack SEOUL ADEX exhibitors in 2015 and was found in the hacking incidents of security companies in early 2016.\n\nWhen it enters the system, Rifdoor generates a file by adding garbage data to the 4 bytes of the last part of the file. Therefore, since the hash value changes each time the system is infected, the malware cannot be found in the system with a simple hash value.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://global.ahnlab.com/global/upload/download/techreport/%5BAhnLab%5DAndariel_a_Subgroup_of_Lazarus%20(3).pdf",
            "https://www.carbonblack.com/2020/04/16/vmware-carbon-black-tau-threat-analysis-the-evolution-of-lazarus/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0433/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rifdoor"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Rifdoor"
        ],
        "uuid": "52c89d28-fe3b-4d5f-9881-a0df2180f712",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "rifdoor",
    "analysis": null
};