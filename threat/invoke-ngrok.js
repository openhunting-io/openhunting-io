var threatdata = {
    "name": "Invoke-Ngrok",
    "alias": "Invoke-Ngrok",
    "category": "Tools",
    "type": "Remote command",
    "modified": "2021-04-19",
    "all_data": {
        "tool": "Invoke-Ngrok",
        "names": [
            {
                "name": "Invoke-Ngrok"
            }
        ],
        "description": "Expose local port of a remote victim over Internet. Use it to exploit or access local service remotely without public IP (RDP, SQL, SSH, SMB, FTP ...)",
        "category": "Tools",
        "type": [
            "Remote command"
        ],
        "information": [
            "https://github.com/benyG/Invoke-Ngrok"
        ],
        "uuid": "9af4762a-2041-45d6-ae57-57deb8a93a11",
        "last-card-change": "2021-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "invoke-ngrok",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "ngrok",
            "procedure_code": "s0508",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0508",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "ngrok can provide dga for c2 servers through the use of random url strings that change every 12 hours.[23]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "ngrok can tunnel rdp and other services securely over internet connections.[26][27][28][29]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "ngrok can be used to proxy connections to machines located behind nat or firewalls.[31][32]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "ngrok has been used by threat actors to proxy c2 connections to ngrok service subdomains.[27]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567",
                    "technique_link": "https://attack.mitre.org/techniques/T1567",
                    "technique_name": "exfiltration over web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service to exfiltrate data rather than their primary command and control channel. popular web services acting as an exfiltration mechanism may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to compromise. firewall rules may also already exist to permit traffic to these services.",
                    "procedure_description": "ngrok has been used by threat actors to configure servers for data exfiltration.[6]"
                }
            ]
        }
    ]
};