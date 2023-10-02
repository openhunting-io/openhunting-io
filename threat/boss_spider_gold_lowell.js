var threatdata = {
    "name": "Boss Spider, Gold Lowell",
    "alias": "Boss Spider, Gold Lowell, CTG-0007",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-26",
    "all_data": {
        "actor": "Boss Spider, Gold Lowell",
        "names": [
            {
                "name": "Boss Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Gold Lowell",
                "name-giver": "SecureWorks"
            },
            {
                "name": "CTG-0007",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2015",
        "description": "(SecureWorks) In late 2015, Secureworks Counter Threat Unit (CTU) researchers began tracking financially motivated campaigns leveraging SamSam ransomware (also known as Samas and SamsamCrypt). CTU researchers associate this activity with the Gold Lowell threat group. Gold Lowell typically scans for and exploits known vulnerabilities in Internet-facing systems to gain an initial foothold in a victim\u2019s network. The threat actors then deploy the SamSam ransomware and demand payment to decrypt the victim\u2019s files. The consistent tools and behaviors associated with SamSam intrusions since 2015 suggest that Gold Lowell is either a defined group or a collection of closely affiliated threat actors. Applying security updates in a timely manner and regularly monitoring for anomalous behaviors on Internet-facing systems are effective defenses against these tactics. Organizations should also create and test response plans for ransomware incidents and use backup solutions that are resilient to corruption or encryption attempts.",
        "observed-sectors": [
            "Education",
            "Government",
            "Healthcare"
        ],
        "tools": [
            "Mimikatz",
            "PsExec",
            "SamSam",
            "SDelete"
        ],
        "counter-operations": [
            {
                "date": "2018-11",
                "activity": "Two Iranian Men Indicted for Deploying Ransomware to Extort Hospitals, Municipalities, and Public Institutions, Causing Over $30 Million in Losses\nhttps://www.justice.gov/opa/pr/two-iranian-men-indicted-deploying-ransomware-extort-hospitals-municipalities-and-public"
            }
        ],
        "information": [
            "https://www.secureworks.com/research/samsam-ransomware-campaigns",
            "https://www.crowdstrike.com/blog/an-in-depth-analysis-of-samsam-ransomware-and-boss-spider/"
        ],
        "uuid": "cdf69db4-97ac-4cd2-a705-a4d5ab2d302e",
        "last-card-change": "2021-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "boss_spider_gold_lowell",
    "analysis": null,
    "articles": [],
    "mitre": []
};