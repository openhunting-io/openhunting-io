var threatdata = {
    "name": "AdFind",
    "alias": "AdFind",
    "category": "Tools",
    "type": "Info stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "AdFind",
        "names": [
            {
                "name": "AdFind"
            }
        ],
        "description": "Command line Active Directory query tool. Mixture of ldapsearch, search.vbs, ldp, dsquery, and dsget tools with a ton of other cool features thrown in for good measure. This tool proceeded dsquery/dsget/etc by years though I did adopt some of the useful stuff from those tools.",
        "category": "Tools",
        "type": [
            "Info stealer"
        ],
        "information": [
            "http://www.joeware.net/freetools/tools/adfind/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0552/"
        ],
        "uuid": "4a6285af-8694-43b1-8300-74afd8f0a835",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "adfind",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "adfind",
            "procedure_code": "s0552",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0552",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "adfind can enumerate domain users.[1][2][3][4][5]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1482",
                    "technique_link": "https://attack.mitre.org/techniques/T1482",
                    "technique_name": "domain trust discovery",
                    "technique_description": "adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in windows multi-domain/forest environments. domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain. domain trusts allow the users of the trusted domain to access resources in the trusting domain. the information discovered may help the adversary conduct sid-history injection, pass the ticket, and kerberoasting. domain trusts can be enumerated using the dsenumeratedomaintrusts() win32 api call, .net methods, and ldap. the windows utility nltest is known to be used by adversaries to enumerate domain trusts.",
                    "procedure_description": "adfind can gather information about organizational units (ous) and domain trusts from active directory.[5][6][7][8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "adfind can enumerate domain groups.[1][2][3][4]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "adfind has the ability to query active directory for computers.[4][5][6][7]"
                },
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
                    "procedure_description": "adfind can extract subnet information from active directory.[4][5][6]"
                }
            ]
        }
    ]
};