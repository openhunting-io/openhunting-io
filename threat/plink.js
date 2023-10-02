var threatdata = {
    "name": "Plink",
    "alias": "Plink, PuTTY Link",
    "category": "Tools",
    "type": "Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Plink",
        "names": [
            {
                "name": "Plink"
            },
            {
                "name": "PuTTY Link"
            }
        ],
        "description": "(FireEye) A common utility used to tunnel RDP sessions is PuTTY Link, commonly known as Plink. Plink can be used to establish secure shell (SSH) network connections to other systems using arbitrary source and destination ports. Since many IT environments either do not perform protocol inspection or do not block SSH communications outbound from their network, attackers such as FIN8 have used Plink to create encrypted tunnels that allow RDP ports on infected systems to communicate back to the attacker command and control (C2) server.",
        "category": "Tools",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/01/bypassing-network-restrictions-through-rdp-tunneling.html"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:plink"
        ],
        "uuid": "598b6f11-cd88-4ce8-8179-ad644c424419",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "plink",
    "analysis": null,
    "articles": [],
    "mitre": []
};