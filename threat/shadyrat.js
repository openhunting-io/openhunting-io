var threatdata = {
    "name": "ShadyRAT",
    "alias": "ShadyRAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "ShadyRAT",
        "names": [
            {
                "name": "ShadyRAT"
            }
        ],
        "description": "(Trend Micro) This notorious data-stealing spying Trojan also used blogging platforms as a C&C channel, except that the commands are encrypted and encoded into HTML comments, interspersed with what appears to be legitimate content. This makes the traffic look like it comes from a real user visiting a blog with a regular web browser. In fact, the page is not being displayed at all on the infected system; the Trojan just decodes the information within the comments and is able to understand the commands the attacker is sending. On a cursory look to the actual blog, a visitor would never spot any of this, since the comments are never displayed on the browser either.\n\nThis is a perfect vehicle for these attackers, who are trying to stay undetected for as long as possible. ShadyRAT was the first major targeted attack that was spotted in the wild, and this technique was possibly a contributing factor. The network traffic looks perfectly tame to any traffic observer or security device.\n\nOn top of this, ShadyRAT was also able to decrypt and decode C&C commands hidden within JPG files using the LSB technique as seen in the first entry of this series. A shady one indeed.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/steganography-and-malware-concealing-code-and-cc-traffic/"
        ],
        "uuid": "851d2801-ccbb-48b1-869d-2ba82ad45c9d",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "shadyrat",
    "analysis": null
};