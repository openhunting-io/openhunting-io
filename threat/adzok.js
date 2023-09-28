var threatdata = {
    "name": "Adzok",
    "alias": "Adzok, Invisible Remote Administrator",
    "category": "Tools",
    "type": "Reconnaissance, Backdoor, Credential stealer, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Adzok",
        "names": [
            {
                "name": "Adzok"
            },
            {
                "name": "Invisible Remote Administrator"
            }
        ],
        "description": "(Citizen Lab) Similar to {{Adwind}} in functionality, the java-based Adzok is apparently from Bolivia. The premium version costs $990, but it appears that Packrat is using the \u201cfree\u201d version. This version of Adzok does not use obfuscation, which makes it possible to simply uncompress the jar files within the docx and read the clear-text configuration file. Given the obfuscated nature of the other RATs that Packrat has used, their use of Adzok is surprising. It is possible that they were having stability, compatibility, or detection problems with other RATs and that Adzok served a specific requirement.",
        "category": "Tools",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Credential stealer",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://citizenlab.ca/2015/12/packrat-report/",
            "https://adzok.com/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/jar.adzok"
        ],
        "uuid": "cc7e8c06-7e44-4441-9fe0-5479cdb262fa",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "adzok",
    "analysis": null
};