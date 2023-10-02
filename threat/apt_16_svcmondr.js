var threatdata = {
    "name": "APT 16, SVCMONDR",
    "alias": "APT 16, SVCMONDR",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "APT 16, SVCMONDR",
        "names": [
            {
                "name": "APT 16",
                "name-giver": "Mandiant"
            },
            {
                "name": "SVCMONDR",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "(FireEye) Between November 26, 2015, and December 1, 2015, known and suspected China-based APT groups launched several spear-phishing attacks targeting Japanese and Taiwanese organizations in the high-tech, government services, media and financial services industries. Each campaign delivered a malicious Microsoft Word document exploiting the aforementioned EPS dict copy use-after-free vulnerability, and the local Windows privilege escalation vulnerability CVE-2015-1701. The successful exploitation of both vulnerabilities led to the delivery of either a downloader that we refer to as IRONHALO, or a backdoor that we refer to as ELMER.",
        "observed-sectors": [
            "Financial",
            "Government",
            "High-Tech",
            "Media"
        ],
        "observed-countries": [
            "Japan",
            "Taiwan",
            "Thailand"
        ],
        "tools": [
            "ELMER",
            "IRONHALO",
            "SVCMONDR"
        ],
        "information": [
            "https://securelist.com/cve-2015-2545-overview-of-current-threats/74828/",
            "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0023/"
        ],
        "uuid": "96d67d0e-dff0-4bbd-99fa-6dbdb433474f",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_16_svcmondr",
    "analysis": null,
    "articles": [],
    "mitre": []
};