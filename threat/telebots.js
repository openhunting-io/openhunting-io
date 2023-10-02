var threatdata = {
    "name": "TeleBots",
    "alias": "TeleBots",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "TeleBots",
        "names": [
            {
                "name": "TeleBots",
                "name-giver": "ESET"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, GRU",
        "motivation": [
            "Sabotage and destruction"
        ],
        "first-seen": "2015",
        "description": "(ESET) In the second half of 2016, ESET researchers identified a unique malicious toolset that was used in targeted cyberattacks against high-value targets in the Ukrainian financial sector. We believe that the main goal of attackers using these tools is cybersabotage. This blog post outlines the details about the campaign that we discovered.\n\nWe will refer to the gang behind the malware as TeleBots. However it\u2019s important to say that these attackers, and the toolset used, share a number of similarities with the BlackEnergy group, which conducted attacks against the energy industry in Ukraine in December 2015 and January 2016. In fact, we think that the BlackEnergy group has evolved into the TeleBots group.\n\nThis group appears to be closely associated with, or evolved from, {{Sandworm Team, Iron Viking, Voodoo Bear}}.",
        "observed-sectors": [
            "Financial",
            "Transportation",
            "Software companies"
        ],
        "observed-countries": [
            "Ukraine",
            "Worldwide (NotPetya)"
        ],
        "tools": [
            "BadRabbit",
            "BlackEnergy",
            "CredRaptor",
            "Exaramel",
            "FakeTC",
            "Felixroot",
            "GreyEnergy",
            "KillDisk",
            "NotPetya",
            "TeleBot",
            "TeleDoor",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2016-12",
                "activity": "These recent ransomware KillDisk variants are not only able to target Windows systems, but also Linux machines, which is certainly something we don\u2019t see every day. This may include not only Linux workstations but also servers, amplifying the damage potential.\nhttps://www.welivesecurity.com/2017/01/05/killdisk-now-targeting-linux-demands-250k-ransom-cant-decrypt/"
            },
            {
                "date": "2017-03",
                "activity": "In 2017, the TeleBots group didn\u2019t stop their cyberattacks; in fact, they became more sophisticated. In the period between January and March 2017 the TeleBots attackers compromised a software company in Ukraine (not related to M.E. Doc), and, using VPN tunnels from there, gained access to the internal networks of several financial institutions.\nhttps://www.welivesecurity.com/2017/06/30/telebots-back-supply-chain-attacks-against-ukraine/"
            },
            {
                "date": "2017-05",
                "activity": "XData ransomware making rounds amid global WannaCryptor scare\nA week after the global outbreak of WannaCryptor, also known as WannaCry, another ransomware variant has been making the rounds.\nDetected by ESET as Win32/Filecoder.AESNI.C, and also known as Xdata ransomware, the threat has been most prevalent in Ukraine, with 96% of the total detections between May 17th and May 22th, and peaking on Friday, May 19th. ESET has protected its customers against this threat since May 18th.\nhttps://www.welivesecurity.com/2017/05/23/xdata-ransomware-making-rounds-amid-global-wannacryptor-scare/"
            },
            {
                "date": "2017-06",
                "activity": "NotPetya ransomware\nhttps://www.welivesecurity.com/2017/06/27/new-ransomware-attack-hits-ukraine/\nThaiCERT's whitepaper:\nhttps://www.dropbox.com/s/hksfa7zzc17jgrq/Whitepaper Petya Ransomware.pdf?dl=0"
            },
            {
                "date": "2017-10",
                "activity": "Bad Rabbit ransomware\nhttps://www.welivesecurity.com/2017/10/24/bad-rabbit-not-petya-back/\nThaiCERT's whitepaper:\nhttps://www.dropbox.com/s/tb8qmb98082p9e7/Whitepaper BadRabbit Ransomware.pdf?dl=0"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-07",
                "activity": "EU imposes the first ever sanctions against cyber-attacks\nhttps://www.consilium.europa.eu/en/press/press-releases/2020/07/30/eu-imposes-the-first-ever-sanctions-against-cyber-attacks/"
            },
            {
                "date": "2020-10",
                "activity": "Six Russian GRU Officers Charged in Connection with Worldwide Deployment of Destructive Malware and Other Disruptive Actions in Cyberspace\nhttps://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and"
            }
        ],
        "information": [
            "https://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/timeline-of-sandworm-attacks/"
        ],
        "uuid": "e84ec224-5c5f-4d2c-a3e6-0ee398ba1136",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "telebots",
    "analysis": null,
    "articles": [],
    "mitre": []
};