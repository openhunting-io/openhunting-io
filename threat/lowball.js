var threatdata = {
    "name": "LOWBALL",
    "alias": "LOWBALL",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "LOWBALL",
        "names": [
            {
                "name": "LOWBALL"
            }
        ],
        "description": "(FireEye) This backdoor, known as LOWBALL, uses the legitimate Dropbox cloud-storage service to act as the CnC server. It uses the Dropbox API with a hardcoded bearer access token and has the ability to download, upload, and execute files. The communication occurs via HTTPS over port 443.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0042/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lowball"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lowball"
        ],
        "uuid": "1cf868dc-4067-40c8-aaec-a47cfac9f37c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lowball",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://kindredsec.wordpress.com/2019/08/12/an-overview-of-public-platform-c2s/",
            "date": "2019-08-12",
            "organization": "Kindred Security",
            "author": "Kindred Security",
            "title": "An Overview of Public Platform C2\u2019s",
            "categories": [
                "HTML5 Encoding",
                "LOWBALL",
                "Makadocs",
                "MiniDuke",
                "RogueRobinNET",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html",
            "date": "2015-12-01",
            "organization": "FireEye",
            "author": "FireEye Threat Intelligence",
            "title": "China-based Cyber Threat Group Uses Dropbox for Malware Communications and Targets Hong Kong Media Outlets",
            "categories": [
                "BUBBLEWRAP",
                "LOWBALL",
                "TEMPER PANDA"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "lowball",
            "procedure_code": "s0042",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0042",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "lowball command and control occurs via https over port 443.[49]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "lowball uses the dropbox api to request two files, one of which is the same file as the one dropped by the malicious email attachment. this is most likely meant to be a mechanism to update the compromised host with a new version of the lowball malware.[268]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "lowball uses the dropbox cloud storage service for command and control.[34]"
                }
            ]
        }
    ]
};