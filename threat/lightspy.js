var threatdata = {
    "name": "lightSpy",
    "alias": "lightSpy",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "lightSpy",
        "names": [
            {
                "name": "lightSpy"
            }
        ],
        "description": "(Trend Micro) The iOS malware, which we named 'lightSpy' (detected by Trend Micro as IOS_LightSpy.A), is a modular backdoor that allowed the attacker to remotely execute a shell command and manipulate files on the infected device. It is also implemented with several functionalities through different modules for exfiltrating data from the infected device including:\n\n\u2022 Hardware information\n\u2022 Contacts\n\u2022 Keychain\n\u2022 SMS messages\n\u2022 Phone call history\n\u2022 GPS location\n\u2022 Connected Wi-Fi history\n\u2022 Browser history of Safari and Chrome\n<br/>The malware also reports the surrounding environment of the device by:\n\u2022 Scanning local network IP address\n\u2022 Scanning available Wi-Fi network\n\nThe campaign also employs modules specifically designed to exfiltrate data from popular messenger applications such as QQ, WeChat, and Telegram.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/Tech-Brief-Operation-Poisoned-News-Hong-Kong-Users-Targeted-with-Mobile-Malware-via-Local-News-Links.pdf",
            "https://securelist.com/ios-exploit-chain-deploys-lightspy-malware/96407/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-poisoned-news-hong-kong-users-targeted-with-mobile-malware-via-local-news-links/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ios.lightspy"
        ],
        "uuid": "4c9d4f77-ee82-4452-b187-84072275951e",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "lightspy",
    "analysis": null
};