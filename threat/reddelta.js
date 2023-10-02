var threatdata = {
    "name": "RedDelta",
    "alias": "RedDelta, TA416",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-03",
    "all_data": {
        "actor": "RedDelta",
        "names": [
            {
                "name": "RedDelta",
                "name-giver": "Recorded Future"
            },
            {
                "name": "TA416",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Recorded Future) From early May 2020, The Vatican and the Catholic Diocese of Hong Kong were among several Catholic Church-related organizations that were targeted by RedDelta, a Chinese-state sponsored threat activity group tracked by Insikt Group. This series of suspected network intrusions also targeted the Hong Kong Study Mission to China and the Pontifical Institute for Foreign Missions (PIME), Italy. These organizations have not been publicly reported as targets of Chinese threat activity groups prior to this campaign.\n\nThese network intrusions occured ahead of the anticipated September 2020 renewal of the landmark 2018 China-Vatican provisional agreement, a deal which reportedly resulted in the Chinese Communist Party (CCP) gaining more control and oversight over the country\u2019s historically persecuted \u201cunderground\u201d Catholic community. In addition to the Holy See itself, another likely target of the campaign includes the current head of the Hong Kong Study Mission to China, whose predecessor was considered to have played a vital role in the 2018 agreement.\n\nThe suspected intrusion into the Vatican would offer RedDelta insight into the negotiating position of the Holy See ahead of the deal\u2019s September 2020 renewal. The targeting of the Hong Kong Study Mission and its Catholic Diocese could also provide a valuable intelligence source for both monitoring the diocese\u2019s relations with the Vatican and its position on Hong Kong\u2019s pro-democracy movement amidst widespread protests and the recent sweeping Hong Kong national security law.\n\nWhile there is considerable overlap between the observed TTPs of RedDelta and the threat activity group publicly referred to as {{Mustang Panda, Bronze President}} (also known as BRONZE PRESIDENT and HoneyMyte), there are a few notable distinctions which lead us to designate this activity as RedDelta:\n\u2022 The version of PlugX used by RedDelta in this campaign uses a different C2 traffic encryption method and has a different configuration encryption mechanism than traditional PlugX.\n\u2022 The malware infection chain employed in this campaign has not been publicly reported as used by Mustang Panda.\n\nIn addition to the targeting of entities related to the Catholic Church, Insikt Group also identified RedDelta targeting law enforcement and government entities in India and a government organization in Indonesia.",
        "observed-sectors": [
            "Government",
            "Law enforcement",
            "Telecommunications",
            "The Vatican and Catholic Church-related organizations"
        ],
        "observed-countries": [
            "Australia",
            "China",
            "Czech",
            "Ethiopia",
            "Germany",
            "Hong Kong",
            "India",
            "Indonesia",
            "Italy",
            "Myanmar",
            "Slovakia",
            "Spain",
            "Ukraine",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "Cobalt Strike",
            "PlugX",
            "Poison Ivy"
        ],
        "operations": [
            {
                "date": "2020-08",
                "activity": "RedDelta Resumes Its Targeting of the Vatican and Hong Kong Catholic Diocese\nhttps://go.recordedfuture.com/hubfs/reports/cta-2020-0915.pdf"
            },
            {
                "date": "2020-09",
                "activity": "Following the Chinese National Day holiday in September, Proofpoint researchers observed a resumption of activity by the APT actor TA416.\nhttps://www.proofpoint.com/us/blog/threat-insight/ta416-goes-ground-and-returns-golang-plugx-malware-loader"
            },
            {
                "date": "2021-03",
                "activity": "Operation \u201cDianxun\u201d\nOperation Di\u00e0nx\u00f9n: Cyberespionage Campaign Targeting Telecommunication Companies\nhttps://www.mcafee.com/blogs/other-blogs/mcafee-labs/operation-dianxun-cyberespionage-campaign-targeting-telecommunication-companies/"
            },
            {
                "date": "2022-02",
                "activity": "Most recently on February 28, 2022, TA416 began using a compromised email address of a diplomat from a European NATO country to target a different country\u2019s diplomatic offices. The targeted individual worked in refugee and migrant services.\nhttps://www.proofpoint.com/us/blog/threat-insight/good-bad-and-web-bug-ta416-increases-operational-tempo-against-european"
            }
        ],
        "information": [
            "https://go.recordedfuture.com/hubfs/reports/cta-2020-0728.pdf"
        ],
        "uuid": "86850f9f-15d7-417a-8345-6fae5223f81a",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "reddelta",
    "analysis": null,
    "articles": [],
    "mitre": []
};