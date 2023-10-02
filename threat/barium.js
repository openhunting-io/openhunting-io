var threatdata = {
    "name": "Barium",
    "alias": "Barium, Pigfish, Brass Typhoon",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Barium",
        "names": [
            {
                "name": "Barium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Pigfish",
                "name-giver": "iDefense"
            },
            {
                "name": "Brass Typhoon",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Microsoft) Barium begins its attacks by cultivating relationships with potential victims\u2014particularly those working in Business Development or Human Resources\u2014on various social media platforms. Once Barium has established rapport, they spear-phish the victim using a variety of unsophisticated malware installation vectors, including malicious shortcut (.lnk) files with hidden payloads, compiled HTML help (.chm) files, or Microsoft Office documents containing macros or exploits. Initial intrusion stages feature the Win32/Barlaiy implant\u2014notable for its use of social network profiles, collaborative document editing sites, and blogs for C&C. Later stages of the intrusions rely upon Winnti for persistent access. The majority of victims recorded to date have been in electronic gaming, multimedia, and Internet content industries, although occasional intrusions against technology companies have occurred.\n\nAlso see {{APT 41}} and {{RedGolf}}, which overlap with Barium.",
        "observed-sectors": [
            "Media",
            "Online video game companies",
            "Technology"
        ],
        "tools": [
            "Barlaiy",
            "Cobalt Strike",
            "PlugX",
            "Winnti"
        ],
        "counter-operations": [
            {
                "date": "2017-11",
                "activity": "Microsoft Asks Judge to Take Down Barium Hackers\nhttps://www.courthousenews.com/wp-content/uploads/2017/11/barium.pdf"
            }
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/digitally-signed-malware-targeting-gaming-companies.html"
        ],
        "uuid": "9fdef7ae-928b-4e3b-941c-bc36926ac0bd",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "barium",
    "analysis": null,
    "articles": [],
    "mitre": []
};