var threatdata = {
    "name": "GLOOXMAIL",
    "alias": "GLOOXMAIL, Trojan.GTALK",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "GLOOXMAIL",
        "names": [
            {
                "name": "GLOOXMAIL"
            },
            {
                "name": "Trojan.GTALK"
            }
        ],
        "description": "GLOOXMAIL communicates with Google's Jabber/XMPP servers and authenticates with a hard-coded username and password. The malware can accept commands over XMPP that includes file upload and download, provide a remote shell, sending process listings, and terminating specified processes. The malware makes extensive use of the open source gloox library (http://camaya.net/gloox/, version 0.9.9.12) to communicate using the Jabber/XMPP protocol. All communications with the Google XMPP server are encrypted.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0026/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.glooxmail"
        ],
        "uuid": "54d56c5b-b85c-49b4-90de-91a60cb9041a",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "glooxmail",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "glooxmail",
            "procedure_code": "s0026",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0026",
            "techniques": [
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
                    "procedure_description": "glooxmail communicates to servers operated by google using the jabber/xmpp protocol.[13][28]"
                }
            ]
        }
    ]
};