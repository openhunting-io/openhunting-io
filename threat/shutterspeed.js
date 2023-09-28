var threatdata = {
    "name": "SHUTTERSPEED",
    "alias": "SHUTTERSPEED",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "SHUTTERSPEED",
        "names": [
            {
                "name": "SHUTTERSPEED"
            }
        ],
        "description": "(FireEye) SHUTTERSPEED is a backdoor that can collect system information, acquire screenshots, and download/execute an arbitrary executable. SHUTTERSPEED typically requires an argument at runtime in order to execute fully. Observed arguments used by SHUTTERSPEED include: 'help', 'console', and 'sample'.\nThe spear phishing email messages contained documents exploiting RTF vulnerability CVE-2017-0199.\n\nMany of the compromised domains in the command and control infrastructure are linked to South Korean companies. Most of these domains host a fake webpage pertinent to targets.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0217/"
        ],
        "uuid": "3745f067-1087-4e50-9797-3424e17781a0",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "shutterspeed",
    "analysis": null
};