var threatdata = {
    "name": "DCSync",
    "alias": "DCSync",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "DCSync",
        "names": [
            {
                "name": "DCSync"
            }
        ],
        "description": "(Stealthbits) DCSync is a late-stage kill chain attack that allows an attacker to simulate the behavior of Domain Controller (DC) in order to retrieve password data via domain replication. Once an attacker has access to a privileged account with domain replication rights, the attacker can utilize replication protocols to mimic a domain controller.\n\nDCSync itself is a command within {{Mimikatz}} and relies on utilizing specific commands within the Microsoft Directory Replication Service Remote Protocol (MS-DRSR) to simulates the behavior of a domain controller and asks other domain controllers to replicate information by using the Directory Replication Service Remote Protocol (MS-DRSR). Utilizing these protocols, this attack takes advantage of valid and necessary functions of Active Directory, which cannot be turned off or disabled.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://blog.stealthbits.com/what-is-dcsync-an-introduction/"
        ],
        "uuid": "7a686766-5739-4691-bc3a-3f6f8279ec28",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dcsync",
    "analysis": null,
    "articles": [],
    "mitre": []
};