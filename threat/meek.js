var threatdata = {
    "name": "meek",
    "alias": "meek",
    "category": "Tools",
    "type": "Tunneling",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "meek",
        "names": [
            {
                "name": "meek"
            }
        ],
        "description": "meek is an open-source Tor plugin that tunnels Tor traffic through HTTPS connections.",
        "category": "Tools",
        "type": [
            "Tunneling"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0175/"
        ],
        "uuid": "e6295061-4a95-47af-8a8f-b567a33fa66e",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "meek",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "meek",
            "procedure_code": "s0175",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0175",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/004",
                    "technique_name": "proxy : domain fronting",
                    "technique_description": "adversaries may take advantage of routing schemes in content delivery networks (cdns) and other services which host multiple domains to obfuscate the intended destination of https traffic or traffic tunneled through https.  domain fronting involves using different domain names in the sni field of the tls header and the host field of the http header. if both domains are served from the same cdn, then the cdn may route to the address specified in the http header after unwrapping the tls header. a variation of the the technique, \"domainless\" fronting, utilizes a sni field that is left blank; this may allow the fronting to work even when the cdn attempts to validate that the sni and http host fields match (if the blank sni fields are ignored).",
                    "procedure_description": "meek uses domain fronting to disguise the destination of network traffic as another server that is hosted in the same content delivery network (cdn) as the intended destination."
                }
            ]
        }
    ]
};