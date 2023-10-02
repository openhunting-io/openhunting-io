var threatdata = {
    "name": "Rubeus",
    "alias": "Rubeus",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "Rubeus",
        "names": [
            {
                "name": "Rubeus"
            }
        ],
        "description": "C# toolset for raw Kerberos interaction and abuses.",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://securityonline.info/rubeus/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1071"
        ],
        "uuid": "e0ef998b-c2d4-413b-8d7f-4b0ba813fa53",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rubeus",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rubeus",
            "procedure_code": "s1071",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1071",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/001",
                    "technique_name": "steal or forge kerberos tickets : golden ticket",
                    "technique_description": "adversaries who have the krbtgt account password hash may forge kerberos ticket-granting tickets (tgt), also known as a golden ticket. golden tickets enable adversaries to generate authentication material for any account in active directory.",
                    "procedure_description": "rubeus can forge a ticket-granting ticket.[9]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/002",
                    "technique_name": "steal or forge kerberos tickets : silver ticket",
                    "technique_description": "adversaries who have the password hash of a target service account (e.g. sharepoint, mssql) may forge kerberos ticket granting service (tgs) tickets, also known as silver tickets. kerberos tgs tickets are also known as service tickets.",
                    "procedure_description": "rubeus can create silver tickets.[6]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/003",
                    "technique_name": "steal or forge kerberos tickets : kerberoasting",
                    "technique_description": "adversaries may abuse a valid kerberos ticket-granting ticket (tgt) or sniff network traffic to obtain a ticket-granting service (tgs) ticket that may be vulnerable to brute force.",
                    "procedure_description": "rubeus can use the kerberosrequestorsecuritytoken.getrequest method to request kerberoastable service tickets.[14]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/004",
                    "technique_name": "steal or forge kerberos tickets : as-rep roasting",
                    "technique_description": "adversaries may reveal credentials of accounts that have disabled kerberos preauthentication by password cracking kerberos messages.",
                    "procedure_description": "rubeus can reveal the credentials of accounts that have kerberos pre-authentication disabled through as-rep roasting.[5][6][7]"
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
                    "procedure_description": "rubeus can gather information about domain trusts.[26][27]"
                }
            ]
        }
    ]
};