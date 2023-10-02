var threatdata = {
    "name": "Flax Typhoon",
    "alias": "Flax Typhoon, Ethereal Panda",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Flax Typhoon",
        "names": [
            {
                "name": "Flax Typhoon",
                "name-giver": "Microsoft"
            },
            {
                "name": "Ethereal Panda",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(Microsoft) Flax Typhoon has been active since mid-2021 and has targeted government agencies and education, critical manufacturing, and information technology organizations in Taiwan. Some victims have also been observed elsewhere in Southeast Asia, as well as in North America and Africa. Flax Typhoon focuses on persistence, lateral movement, and credential access. As with any observed nation-state actor activity, Microsoft has directly notified targeted or compromised customers, providing them with important information needed to secure their environments.\n\nFlax Typhoon is known to use the China Chopper web shell, Metasploit, Juicy Potato privilege escalation tool, Mimikatz, and SoftEther virtual private network (VPN) client. However, Flax Typhoon primarily relies on living-off-the-land techniques and hands-on-keyboard activity. Flax Typhoon achieves initial access by exploiting known vulnerabilities in public-facing servers and deploying web shells like China Chopper. Following initial access, Flax Typhoon uses command-line tools to first establish persistent access over the remote desktop protocol, then deploy a VPN connection to actor-controlled network infrastructure, and finally collect credentials from compromised systems. Flax Typhoon further uses this VPN access to scan for vulnerabilities on targeted systems and organizations from the compromised systems.",
        "observed-sectors": [
            "Education",
            "Government",
            "IT",
            "Manufacturing"
        ],
        "observed-countries": [
            "Taiwan",
            "Southeast Asia, North America and Africa"
        ],
        "tools": [
            "China Chopper",
            "BadPotato",
            "JuicyPotato",
            "Metasploit",
            "Mimikatz",
            "SoftEther VPN",
            "Living off the Land"
        ],
        "information": [
            "https://www.microsoft.com/en-us/security/blog/2023/08/24/flax-typhoon-using-legitimate-software-to-quietly-access-taiwanese-organizations/"
        ],
        "uuid": "653faab6-7686-4258-82ce-691c8c539a8b",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flax_typhoon",
    "analysis": null,
    "articles": [],
    "mitre": []
};