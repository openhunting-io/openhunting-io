var threatdata = {
    "name": "Sprite Spider, Gold Dupont",
    "alias": "Sprite Spider, Gold Dupont",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-27",
    "all_data": {
        "actor": "Sprite Spider, Gold Dupont",
        "names": [
            {
                "name": "Sprite Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Gold Dupont",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2015",
        "description": "(CrowdStrike) In 2020, CrowdStrike Intelligence observed both SPRITE SPIDER (the operators of Defray777) and {{Carbanak, Anunak}} (the operators of DarkSide) deploy Linux versions of their respective ransomware families on ESXi hosts during BGH operations. While ransomware for Linux has existed for many years, BGH actors have historically not targeted Linux, much less ESXi specifically. ESXi is a type of hypervisor that runs on dedicated hardware and manages multiple virtual machines (VMs). With more organizations migrating to virtualization solutions to consolidate legacy IT systems, this is a natural target for ransomware operators looking to increase the impact against a victim.\n\nAll identified incidents were enabled by the acquisition of valid credentials. In four separate Defray777 incidents, SPRITE SPIDER used administrator credentials to log in through the vCenter web interface. In one instance, SPRITE SPIDER likely used the PyXie remote access trojan (RAT) LaZagne module to harvest vCenter administrator credentials stored in a web browser.\n\nBy targeting these hosts, ransomware operators are able to quickly encrypt multiple systems with relatively few actual ransomware deployments. Encrypting one ESXi server inflicts the same amount of damage as individually deploying ransomware on each VM hosted on a given server. Consequently, targeting ESXi hosts can also improve the speed of BGH operations. Additionally, due to their lack of conventional operating systems, ESXi hosts lack endpoint protection software that could prevent or detect ransomware attacks.",
        "observed-sectors": [
            "Education",
            "Healthcare",
            "Manufacturing",
            "Technology"
        ],
        "tools": [
            "Cobalt Strike",
            "Defray777",
            "LaZagne",
            "Metasploit",
            "PyXie",
            "SharpHound",
            "Shifu",
            "SystemBC",
            "Vatet"
        ],
        "operations": [
            {
                "date": "2017-08",
                "activity": "New Defray Ransomware Targets Education and Healthcare Verticals\nhttps://www.proofpoint.com/us/blog/threat-insight/new-defray-ransomware-targets-education-and-healthcare-verticals"
            },
            {
                "date": "2020-05",
                "activity": "Texas Courts hit by ransomware, network disabled to limit spread\nhttps://www.bleepingcomputer.com/news/security/texas-courts-hit-by-ransomware-network-disabled-to-limit-spread/"
            },
            {
                "date": "2020-06",
                "activity": "New Ransom X Ransomware used in Texas TxDOT cyberattack\nhttps://www.bleepingcomputer.com/news/security/new-ransom-x-ransomware-used-in-texas-txdot-cyberattack/"
            },
            {
                "date": "2020-08",
                "activity": "Business technology giant Konica Minolta hit by new ransomware\nhttps://www.bleepingcomputer.com/news/security/business-technology-giant-konica-minolta-hit-by-new-ransomware/"
            },
            {
                "date": "2020-09",
                "activity": "SoftServe hit by ransomware, Windows customization tool exploited\nhttps://www.bleepingcomputer.com/news/security/softserve-hit-by-ransomware-windows-customization-tool-exploited/"
            },
            {
                "date": "2020-09",
                "activity": "Leading U.S. laser developer IPG Photonics hit with ransomware\nhttps://www.bleepingcomputer.com/news/security/leading-us-laser-developer-ipg-photonics-hit-with-ransomware/"
            },
            {
                "date": "2020-09",
                "activity": "Government software provider Tyler Technologies hit by ransomware\nhttps://www.bleepingcomputer.com/news/security/government-software-provider-tyler-technologies-hit-by-ransomware/"
            },
            {
                "date": "2020-10",
                "activity": "Montreal's STM public transport system hit by ransomware attack\nhttps://www.bleepingcomputer.com/news/security/montreals-stm-public-transport-system-hit-by-ransomware-attack/"
            },
            {
                "date": "2020-11",
                "activity": "Brazil's court system under massive RansomExx ransomware attack\nhttps://www.bleepingcomputer.com/news/security/brazils-court-system-under-massive-ransomexx-ransomware-attack/"
            },
            {
                "date": "2020-11",
                "activity": "RansomExx ransomware also encrypts Linux systems\nhttps://www.bleepingcomputer.com/news/security/ransomexx-ransomware-also-encrypts-linux-systems/"
            },
            {
                "date": "2020-12",
                "activity": "Hackers leak data from Embraer, world's third-largest airplane maker\nhttps://www.zdnet.com/article/hackers-leak-data-from-embraer-worlds-third-largest-airplane-maker/"
            },
            {
                "date": "2021-02",
                "activity": "French MNH health insurance company hit by RansomExx ransomware\nhttps://www.bleepingcomputer.com/news/security/french-mnh-health-insurance-company-hit-by-ransomexx-ransomware/"
            },
            {
                "date": "2021-02",
                "activity": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact\nhttps://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/"
            },
            {
                "date": "2021-07",
                "activity": "Ecuador's state-run CNT telco hit by RansomEXX ransomware\nhttps://www.bleepingcomputer.com/news/security/ecuadors-state-run-cnt-telco-hit-by-ransomexx-ransomware/"
            },
            {
                "date": "2021-08",
                "activity": "RansomEXX ransomware leaks files stolen from Italian luxury brand Zegna\nhttps://securityaffairs.co/wordpress/120898/data-breach/ransomexx-ransomware-zegna.html"
            },
            {
                "date": "2021-08",
                "activity": "Computer hardware giant GIGABYTE hit by RansomEXX ransomware\nhttps://www.bleepingcomputer.com/news/security/computer-hardware-giant-gigabyte-hit-by-ransomexx-ransomware/"
            },
            {
                "date": "2021-08",
                "activity": "Ransomware hits Lojas Renner, Brazil\u2019s largest clothing store chain\nhttps://therecord.media/ransomware-hits-lojas-renner-brazils-largest-clothing-store-chain/"
            },
            {
                "date": "2022-03",
                "activity": "Ransomware group attacks Scottish mental health charity\nhttps://therecord.media/ransomware-group-attacks-scottish-mental-health-charity/"
            },
            {
                "date": "2022-10",
                "activity": "RansomExx Leaks 52GB of Barcelona Health Centers' Data\nhttps://www.bankinfosecurity.com/ransomexx-leaks-52-gb-barcelona-health-centers-data-a-20260"
            },
            {
                "date": "2022-11",
                "activity": "RansomExx Upgrades to Rust\nhttps://securityintelligence.com/posts/ransomexx-upgrades-rust/"
            }
        ],
        "information": [
            "https://www.neosecuretendencias2021.com/assets/pdfs/crowdstrike/2021%20Global%20Threat%20Report%20FINAL%20.pdf",
            "https://www.secureworks.com/research/threat-profiles/gold-dupont"
        ],
        "uuid": "20947960-7770-472c-8152-4f88a1f7ea69",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sprite_spider_gold_dupont",
    "analysis": null,
    "articles": [],
    "mitre": []
};