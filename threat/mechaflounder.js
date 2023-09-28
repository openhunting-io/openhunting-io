var threatdata = {
    "name": "MechaFlounder",
    "alias": "MechaFlounder",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "MechaFlounder",
        "names": [
            {
                "name": "MechaFlounder"
            }
        ],
        "description": "(Palo Alto) MechaFlounder begins by entering a loop that will continuously attempt to communicate with its C2 server. The Trojan will use HTTP to send an outbound beacon to its C2 server that contains the user\u2019s account name and hostname in the URL. The code builds the URL by concatenating the username and hostname with two dashes \u201c\u2013\u201d between the two strings. The code then creates the URL string by using the username and hostname string twice with the back-slash \u201c\\\u201d character between the two and by appending the string \u201c-sample.html\u201d.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/new-python-based-payload-mechaflounder-used-by-chafer/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0459/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MechaFlounder"
        ],
        "uuid": "662241e8-4952-4cfc-8d1f-e96dc38593e5",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "mechaflounder",
    "analysis": null
};