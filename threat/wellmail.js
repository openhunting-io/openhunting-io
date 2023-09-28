var threatdata = {
    "name": "WellMail",
    "alias": "WellMail",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WellMail",
        "names": [
            {
                "name": "WellMail"
            }
        ],
        "description": "(NCSC-UK) WellMail is a lightweight tool designed to run commands or scripts with the results being sent to a hardcoded Command and Control (C2) server.\n\nThe NCSC has named this malware \u2018WellMail\u2019 due to file paths containing the word \u2018mail\u2019 and the use of server port 25 present in the sample analysed. Similar to {{WellMess}}, WellMail uses hard-coded client and certificate authority TLS certificates to communicate with C2 servers.\n\nThe binary is an ELF utility written in Golang which receives a command or script to be run through the Linux shell. To our knowledge, WellMail has not been previously named in the public domain.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-198c",
            "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "https://www.pwc.co.uk/issues/cyber-security-services/insights/wellmail.html",
            "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "https://www.ncsc.gov.uk/files/Advisory-APT29-targets-COVID-19-vaccine-development.pdf",
            "https://www.intezer.com/wp-content/uploads/2021/02/Intezer-2020-Go-Malware-Round-Up.pdf",
            "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "https://blog.talosintelligence.com/2020/08/attribution-puzzle.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0515/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.wellmail"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:WellMail"
        ],
        "uuid": "011052ce-7891-4761-88ca-b493dcf2f15d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "WellMail",
            "malware_alias": null,
            "malware": "elf.wellmail",
            "last_update": "2021-07-13 14:41:10",
            "tags": [
                "golang",
                "apt29",
                "wellmail"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "01d322dcac438d2bb6bce2bae8d613cb",
                        "timestamp": "2021-07-13 14:41:10"
                    },
                    {
                        "value": "d5c26128127f2fac6e3ff2c87b473d74",
                        "timestamp": "2021-07-13 14:41:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-13 14:41:10",
    "mitre": [],
    "file_name": "wellmail",
    "analysis": null
};