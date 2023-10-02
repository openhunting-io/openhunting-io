var threatdata = {
    "name": "Pusikurac",
    "alias": "Pusikurac",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-29",
    "all_data": {
        "actor": "Pusikurac",
        "names": [
            {
                "name": "Pusikurac",
                "name-giver": "Morphisec"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Morphisec) A new, highly sophisticated campaign that delivers the Orcus Remote Access Trojan is hitting victims in ongoing, targeted attacks. Morphisec identified the campaign after receiving notifications from its advanced prevention solution at several deployment sites. (Morphisec\u2019s Moving Target Defense technology immediately stopped the threat.) The attack uses multiple advanced evasive techniques to bypass security tools. In a successful attack, the Orcus RAT can steal browser cookies and passwords, launch server stress tests (DDoS attacks), disable the webcam activity light, record microphone input, spoof file extensions, log keystrokes and more.\n\nThe forensic data captured by Morphisec from the attack showed a high correlation to additional samples in the wild, indicating a single threat actor is behind multiple campaigns, including this one.\n\nThis threat actor specifically focuses on information stealing and .NET evasion. Based on unique strings in the malware, we have dubbed the actor PUSIKURAC. Before executing the attacks, PUSIKURAC registers domains through FreeDns services. It also utilizes legitimate free text storage services like paste, signs its executables, heavily misuses commercial .NET packers and embeds payloads within video files and images.",
        "tools": [
            "Orcus RAT"
        ],
        "information": [
            "https://blog.morphisec.com/new-campaign-delivering-orcus-rat"
        ],
        "uuid": "e34230e0-182e-402d-a351-0479525fa0eb",
        "last-card-change": "2020-04-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pusikurac",
    "analysis": null,
    "articles": [],
    "mitre": []
};