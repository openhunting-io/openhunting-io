var threatdata = {
    "name": "nbtstat",
    "alias": "nbtstat",
    "category": "Tools",
    "type": "Reconnaissance",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "nbtstat",
        "names": [
            {
                "name": "nbtstat"
            }
        ],
        "description": "nbtstat is a utility used to troubleshoot NetBIOS name resolution.",
        "category": "Tools",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://www.securitynewspaper.com/2018/11/28/netbios-over-tcp-ip-nbtstat-usage-in-detail/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0102/"
        ],
        "uuid": "e15b1edc-b515-418b-9df2-579e79605129",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": {
        "procedure_name": "nbtstat",
        "procedure_code": "s0102",
        "procedure_type": "software",
        "procedure_link": "https://attack.mitre.org/software/S0102",
        "techniques": [
            {
                "tactic_code": "ta0007",
                "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                "tactic_name": "discovery",
                "tactic_alias": "discovery",
                "tactic_description": "The adversary is trying to figure out your environment.",
                "technique_code": "t1016",
                "technique_link": "https://attack.mitre.org/techniques/T1016",
                "technique_name": "system network configuration discovery",
                "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                "procedure_description": "nbtstat can be used to discover local netbios domain names."
            },
            {
                "tactic_code": "ta0007",
                "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                "tactic_name": "discovery",
                "tactic_alias": "discovery",
                "tactic_description": "The adversary is trying to figure out your environment.",
                "technique_code": "t1049",
                "technique_link": "https://attack.mitre.org/techniques/T1049",
                "technique_name": "system network connections discovery",
                "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                "procedure_description": "nbtstat can be used to discover current netbios sessions."
            }
        ]
    },
    "file_name": "nbtstat",
    "analysis": null
};