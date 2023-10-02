var threatdata = {
    "name": "CloudDuke",
    "alias": "CloudDuke, Cloud Duke, MiniDionis, CloudLook",
    "category": "Malware",
    "type": "Backdoor, Loader, Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "CloudDuke",
        "names": [
            {
                "name": "CloudDuke"
            },
            {
                "name": "Cloud Duke"
            },
            {
                "name": "MiniDionis"
            },
            {
                "name": "CloudLook"
            }
        ],
        "description": "(F-Secure) In the beginning of July 2015, the Dukes embarked on yet another large-scale phishing campaign. The malware toolset used for this campaign was the previously unseen CloudDuke and we believe that the July campaign marks the first time that this toolset was deployed by the Dukes, other than possible small-scale testing.\n\nThe CloudDuke toolset consists of at least a loader, a downloader, and two backdoor variants. Both backdoors (internally referred to by their authors as \u201cBastionSolution\u201d and \u201cOneDriveSolution\u201d) essentially allow the operator to remotely execute commands on the compromised machine. The way in which each backdoor does so however is significantly different. While the BastionSolution variant simply retrieves commands from a hard-coded C&C server controlled by the Dukes, the OneDriveSolution utilizes Microsoft\u2019s OneDrive cloud storage service for communicating with its masters, making it significantly harder for defenders to notice the traffic and block the communication channel. What is most significant about the July 2015 CloudDuke campaign is the timeline. The campaign appeared to consist of two distinct waves of spear-phishing, one during the first days of July and the other starting from the 20th of the month. Details of the first wave, including a thorough technical analysis of CloudDuke, was published by Palo Alto Networks on 14th July. This was followed by additional details from Kaspersky in a blog post published on 16th July.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader",
            "Downloader"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0054/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cloud_duke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CloudDuke"
        ],
        "uuid": "806c8a75-8ce9-483d-8bbc-8c63978ed378",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cloudduke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.f-secure.com/weblog/archives/00002822.html",
            "date": "2015-07-22",
            "organization": "F-Secure",
            "author": "Artturi Lehti\u00f6",
            "title": "Duke APT group's latest tools: cloud services and Linux support",
            "categories": [
                "CloudDuke"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "cloudduke",
            "procedure_code": "s0054",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0054",
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
                    "procedure_description": "one variant of cloudduke uses http and https for c2.[66]"
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
                    "procedure_description": "cloudduke downloads and executes additional malware from either a web address or a microsoft onedrive account.[22]"
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
                    "procedure_description": "one variant of cloudduke uses a microsoft onedrive account to exchange commands and stolen data with its operators.[18]"
                }
            ]
        }
    ]
};