var threatdata = {
    "name": "Hurricane Panda",
    "alias": "Hurricane Panda",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Hurricane Panda",
        "names": [
            {
                "name": "Hurricane Panda",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(CrowdStrike) We have investigated their intrusions since 2013 and have been battling them nonstop over the last year at several large telecommunications and technology companies. The determination of this China-based adversary is truly impressive: they are like a dog with a bone.\n\nHurricane Panda\u2019s preferred initial vector of compromise and persistence is a China Chopper webshell \u2013 a tiny and easily obfuscated 70 byte text file that consists of an \u2018eval()\u2019 command, which is then used to provide full command execution and file upload/download capabilities to the attackers. This script is typically uploaded to a web server via a SQL injection or WebDAV vulnerability, which is often trivial to uncover in a company with a large external web presence.\n\nOnce inside, the adversary immediately moves on to execution of a credential theft tool such as Mimikatz (repacked to avoid AV detection). If they are lucky to have caught an administrator who might be logged into that web server at the time, they will have gained domain administrator credentials and can now roam your network at will via \u2018net use\u2019 and \u2018wmic\u2019 commands executed through the webshell terminal.",
        "observed-sectors": [
            "Technology",
            "Telecommunications"
        ],
        "tools": [
            "China Chopper",
            "Mimikatz"
        ],
        "operations": [
            {
                "date": "2014-03",
                "activity": "Operation \u201cPoisoned Hurricane\u201d\nhttps://www.fireeye.com/blog/threat-research/2014/08/operation-poisoned-hurricane.html"
            }
        ],
        "information": [
            "https://www.crowdstrike.com/blog/cyber-deterrence-in-action-a-story-of-one-long-hurricane-panda-campaign/"
        ],
        "uuid": "14545b70-34d1-4034-a41e-5533fa30be7f",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hurricane_panda",
    "analysis": null,
    "articles": [],
    "mitre": []
};