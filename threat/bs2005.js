var threatdata = {
    "name": "BS2005",
    "alias": "BS2005",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "BS2005",
        "names": [
            {
                "name": "BS2005"
            }
        ],
        "description": "(FireEye) Over the years, the Ke3chang attackers have used three types of malware that we call: \u201cBS2005\u201d, \u201cBMW\u201d, and \u201cMyWeb\u201d. We believe these three types of malware are an evolution of a single project from a single developer or small team of developers sharing code. Functionally, it is a typical first stage backdoor commonly found in APT attacks. It has the ability to upload and download files, run shell commands, and sleep for a configurable length of time. All of the CnC communications are performed over the HTTP protocol.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-ke3chang.pdf",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/march/apt15-is-alive-and-strong-an-analysis-of-royalcli-and-royaldns/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0014/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bs2005"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:bs2005"
        ],
        "uuid": "34bcb564-8614-460b-9937-3a01f8d95637",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bs2005",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-palace",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE PALACE",
            "categories": [
                "BS2005",
                "Enfal",
                "Mirage",
                "RoyalCli",
                "Royal DNS",
                "APT15"
            ]
        },
        {
            "data_url": "https://github.com/nccgroup/Royal_APT",
            "date": "2018-03-16",
            "organization": "Github (nccgroup)",
            "author": "NCC Group PLC",
            "title": "Royal APT - APT15 Repository",
            "categories": [
                "BS2005",
                "MS Exchange Tool",
                "RoyalCli",
                "Royal DNS",
                "APT15"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2018/03/10/apt15-is-alive-and-strong-an-analysis-of-royalcli-and-royaldns/",
            "date": "2018-03-10",
            "organization": "NCC Group",
            "author": "Rob Smallridge",
            "title": "APT15 is alive and strong: An analysis of RoyalCli and RoyalDNS",
            "categories": [
                "BS2005",
                "MS Exchange Tool",
                "RoyalCli",
                "Royal DNS",
                "APT15"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bs2005",
            "procedure_code": "s0014",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0014",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "bs2005 uses base64 encoding for communication in the message body of an http request.[16]"
                }
            ]
        }
    ]
};