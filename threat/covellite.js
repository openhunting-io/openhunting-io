var threatdata = {
    "name": "Covellite",
    "alias": "Covellite, CTG-2460, Nickel Academy, Black Artemis",
    "category": "APT",
    "type": "-",
    "modified": "2021-01-07",
    "all_data": {
        "actor": "Covellite",
        "names": [
            {
                "name": "Covellite",
                "name-giver": "Dragos"
            },
            {
                "name": "CTG-2460",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Nickel Academy",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Black Artemis",
                "name-giver": "PWC"
            }
        ],
        "country": [
            "North Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Dragos) Covellite compromises networks associated with civilian electric energy worldwide and gathers intelligence on intellectual property and internal industrial operations. Covellite lacks an industrial control system (ICS) specific capability at this time.\n\nCovellite operates globally with targets primarily in Europe, East Asia, and North America. US targets emerged in September 2017 with a small, targeted phishing campaign directed at select U.S. electric companies. The phishing emails contained a malicious Microsoft Word document and infected computers with malware.\n\nThe malicious emails discovered in the fall masqueraded as resumes or invitations. They delivered a remote access tool (RAT) payload which was used to conduct reconnaissance and enable persistent, covert access to victims\u2019 machines.\n\nCovellite\u2019s infrastructure and malware are similar to the hacking organization known as {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}} by Novetta and Hidden Cobra by the U.S. Department of Homeland Security.\n\nLazarus Group is responsible for attacks ranging from the 2014 attack on Sony Pictures to a number of Bitcoin heists in 2017. Technical analysis of Covellite malware indicates an evolution from known Lazarus toolkits. However, aside from technical overlap, it is not known how the capabilities and operations between Covellite and Lazarus are related.\n\nCovellite remains active but appears to have abandoned North American targets, with indications of activity in Europe and East Asia. Given the group\u2019s specific interest in infrastructure operations, rapidly improving capabilities, and history of aggressive targeting, Dragos considers this group a primary threat to the ICS industry.",
        "observed-sectors": [
            "Energy"
        ],
        "observed-countries": [
            "USA",
            "Europe and East Asia"
        ],
        "information": [
            "https://dragos.com/resource/covellite/"
        ],
        "uuid": "f04ded49-5b0e-4422-9c6c-4c6e2ed7d3d3",
        "last-card-change": "2021-01-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "covellite",
    "analysis": null,
    "articles": [],
    "mitre": []
};