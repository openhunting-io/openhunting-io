var threatdata = {
    "name": "Aggah",
    "alias": "Aggah",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Aggah",
        "names": [
            {
                "name": "Aggah",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage",
            "Financial gain"
        ],
        "first-seen": "2018",
        "description": "(Palo Alto) In March 2019, Unit 42 began looking into an attack campaign that appeared to be primarily focused on organizations within a Middle Eastern country. Further analysis revealed that this activity is likely part of a much larger campaign impacting not only that region but also the United States, and throughout Europe and Asia.\n\nOur analysis of the delivery document revealed it was built to load a malicious macro-enabled document from a remote server via Template Injection. These macros use BlogSpot posts to obtain a script that uses multiple Pastebin pastes to download additional scripts, which ultimately result in the final payload being RevengeRAT configured with a duckdns[.]org domain for C2. During our research, we found several related delivery documents that followed the same process to ultimately install RevengeRAT hosted on Pastebin, which suggests the actors used these TTPs throughout their attack campaign.\n\nInitially, we believed this activity to be potentially associated with the {{Gorgon Group}}. Our hypothesis was based on the high level TTPs including the use of RevengeRAT. However, Unit 42 has not yet identified direct overlaps with other high-fidelity Gorgon Group indicators. Based on this, we are not able to assign this activity to the Gorgon group with an appropriate level of certainty.\n\nIn light of that, Unit 42 refers to the activity described in this blog as the Aggah Campaign based on the actor\u2019s alias \u201chagga\u201d, which was used to split data sent to the RevengeRAT C2 server and was the name of one of the Pastebin accounts used to host the RevengeRAT payloads.",
        "observed-sectors": [
            "Automotive",
            "Education",
            "Government",
            "Healthcare",
            "Hospitality",
            "Manufacturing",
            "Media",
            "Retail",
            "Technology"
        ],
        "observed-countries": [
            "Austria",
            "Bahrain",
            "Brazil",
            "Canada",
            "China",
            "Egypt",
            "France",
            "Germany",
            "India",
            "Ireland",
            "Israel",
            "Italy",
            "Japan",
            "Norway",
            "Romania",
            "Russia",
            "Saudi Arabia",
            "South Korea",
            "Spain",
            "Sweden",
            "Taiwan",
            "UK",
            "UAE",
            "USA"
        ],
        "tools": [
            "Agent Tesla",
            "Aggah",
            "NanoCore RAT",
            "njRAT",
            "RevengeRAT",
            "Warzone RAT"
        ],
        "operations": [
            {
                "date": "2018-12",
                "activity": "Operation \u201cRoma225\u201d\nThe Cybaze-Yoroi ZLab researchers investigated a recent espionage malware implant weaponized to target companies in the Italian automotive sector. The malware was spread through well written phishing email trying to impersonate a senior partner of one of the major Brazilian business law firms: \u201cVeirano Advogados\u201d.\nhttps://yoroi.company/research/the-enigmatic-roma225-campaign/"
            },
            {
                "date": "2019-06",
                "activity": "The Evolution of Aggah: From Roma225 to the RG Campaign\nhttps://yoroi.company/research/the-evolution-of-aggah-from-roma225-to-the-rg-campaign/"
            },
            {
                "date": "2019-09",
                "activity": "During our threat monitoring activities, we discovered an interesting drop chain related to the well-known Aggah campaign\nhttps://yoroi.company/research/apt-or-not-apt-whats-behind-the-aggah-campaign/"
            },
            {
                "date": "2020-01",
                "activity": "Recently, during our Cyber Defence monitoring operations, we spotted other attack attempts directed to some Italian companies operating in the Retail sector.\nhttps://yoroi.company/research/aggah-how-to-run-a-botnet-without-renting-a-server-for-more-than-a-year/"
            },
            {
                "date": "2020-04",
                "activity": "Upgraded Aggah malspam campaign delivers multiple RATs\nhttps://blog.talosintelligence.com/2020/04/upgraded-aggah-malspam-campaign.html"
            },
            {
                "date": "2020-05",
                "activity": "During our Cyber Threat Intelligence monitoring we spotted new malicious activities targeting some Italian companies operating worldwide in the manufacturing sector, some of them also part of the automotive production chain.\nhttps://yoroi.company/research/cyber-criminal-espionage-operation-insists-on-italian-manufacturing/"
            },
            {
                "date": "2020-05",
                "activity": "In the past months since the Covid-19 outbreak, we have seen an enormous rise in mal-spam campaigns where hackers abuse the pandemic to try and claim victims. One such campaign that we spotted is a new variant of a unique malware loader named \u2018Aggah\u2019.\nhttps://www.deepinstinct.com/2020/05/25/aghast-at-aggah-teasing-security-controls-with-advanced-evasion-techniques/"
            },
            {
                "date": "2021-07",
                "activity": "Aggah Using Compromised Websites to Target Businesses Across Asia, Including Taiwan Manufacturing Industry\nhttps://www.anomali.com/blog/aggah-using-compromised-websites-to-target-businesses-across-asia-including-taiwan-manufacturing-industry"
            },
            {
                "date": "2021-10",
                "activity": "New Aggah Campaign Hijacks Clipboards to Replace Cryptocurrency Addresses\nhttps://www.riskiq.com/blog/external-threat-management/aggah-clipboard-hijack-crypto/"
            },
            {
                "date": "2022-06",
                "activity": "Operation \u201cRed Deer\u201d\nhttps://perception-point.io/blog/operation-red-deer/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/aggah-campaign-bit-ly-blogspot-and-pastebin-used-for-c2-in-large-scale-campaign/"
        ],
        "uuid": "19517715-8aad-4c96-8514-814d74e27830",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "aggah",
    "analysis": null,
    "articles": [],
    "mitre": []
};