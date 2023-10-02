var threatdata = {
    "name": "Domestic Kitten",
    "alias": "Domestic Kitten, APT-C-50, Bouncing Golf",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-31",
    "all_data": {
        "actor": "Domestic Kitten",
        "names": [
            {
                "name": "Domestic Kitten",
                "name-giver": "Check Point"
            },
            {
                "name": "APT-C-50",
                "name-giver": "Check Point"
            },
            {
                "name": "Bouncing Golf",
                "name-giver": "Trend Micro"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Check Point) Recent investigations by Check Point researchers reveal an extensive and targeted attack that has been taking place since 2016 and, until now, has remained under the radar due to the artful deception of its attackers towards their targets. Through the use of mobile applications, those behind the attack use fake decoy content to entice their victims to download such applications, which are in fact loaded with spyware, to then collect sensitive information about them. Interestingly, these targets include Kurdish and Turkish natives and ISIS supporters. Most interesting of all, though, is that all these targets are actually Iranians citizens.\n\nConsidering the nature of the target, the data collected about these groups provides those behind the campaign with highly valuable information that will no doubt be leveraged in further future action against them. Indeed, the malware collects data including contact lists stored on the victim\u2019s mobile device, phone call records, SMS messages, browser history and bookmarks, geo-location of the victim, photos, surrounding voice recordings and more.\n\nThe targets are Kurdish and Turkish natives and ISIS supporters.",
        "observed-countries": [
            "Afghanistan",
            "Iran",
            "Iraq",
            "Pakistan",
            "Turkey",
            "UK",
            "USA",
            "Uzbekistan"
        ],
        "tools": [
            "FurBall",
            "GolfSpy"
        ],
        "operations": [
            {
                "date": "2019-06",
                "activity": "Mobile Campaign \u2018Bouncing Golf\u2019 Affects Middle East\nhttps://www.trendmicro.com/en_us/research/19/f/mobile-cyberespionage-campaign-bouncing-golf-affects-middle-east.html"
            },
            {
                "date": "2020-11",
                "activity": "This operation consists of 10 unique campaigns, which have targeted over 1,200 individuals with more than 600 successful infections.  It includes 4 currently active campaigns, the most recent of which began in November 2020.\nhttps://research.checkpoint.com/2021/domestic-kitten-an-inside-look-at-the-iranian-surveillance-operations/"
            },
            {
                "date": "2022-10",
                "activity": "Domestic Kitten campaign spying on Iranian citizens with new FurBall malware\nhttps://www.welivesecurity.com/2022/10/20/domestic-kitten-campaign-spying-iranian-citizens-furball-malware/"
            }
        ],
        "information": [
            "https://research.checkpoint.com/domestic-kitten-an-iranian-surveillance-operation/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0097/"
        ],
        "uuid": "624ad02b-d8c3-4873-93a4-28d9811b55d5",
        "last-card-change": "2022-12-31",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "domestic_kitten",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/domestic-kitten-apt-operates-in-silence-since-2016/",
            "date": "2018-09-07",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Domestic Kitten APT Operates in Silence Since 2016",
            "categories": [
                "FurBall",
                "Domestic Kitten"
            ]
        }
    ],
    "mitre": []
};