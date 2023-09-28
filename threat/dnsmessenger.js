var threatdata = {
    "name": "DNSMessenger",
    "alias": "DNSMessenger, TEXTMATE",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "DNSMessenger",
        "names": [
            {
                "name": "DNSMessenger"
            },
            {
                "name": "TEXTMATE"
            }
        ],
        "description": "DNSMessenger makes use of DNS TXT record queries and responses to create a bidirectional Command and Control (C2) channel. This allows the attacker to use DNS communications to submit new commands to be run on infected machines and return the results of the command execution to the attacker.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://blog.talosintelligence.com/2017/03/dnsmessenger.html",
            "https://blog.talosintelligence.com/2017/10/dnsmessenger-sec-campaign.html",
            "http://wraithhacker.com/2017/10/11/more-info-on-evolved-dnsmessenger/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0146/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dnsmessenger"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DNSmessenger"
        ],
        "uuid": "144b25e9-f0dc-479b-8eec-9fbeba5560d2",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dnsmessenger",
    "analysis": null
};