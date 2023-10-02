var threatdata = {
    "name": "The Big Bang",
    "alias": "The Big Bang",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "The Big Bang",
        "names": [
            {
                "name": "The Big Bang",
                "name-giver": "Check Point"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Talos) Talos continuously monitors malicious emails campaigns. We identified one specific spear phishing campaign launched against targets within Palestine, and specifically against Palestinian law enforcement agencies. This campaign started in April 2017, using a spear phishing campaign to deliver the MICROPSIA payload in order to remotely control infected systems. Although this technique is not new, it remains an effective technique for attackers.\n\nThe malware itself was developed in Delphi; in this article, we describe the features and the network communication to the command and control server used by the attackers. The threat actor has chosen to reference TV show characters and include German language words within the attack. Most significantly, the attacker has appeared to have used genuine documents stolen from Palestinian sources as well as a controversial music video as part of the attack.\n\n(Check Point) While the APT has gone through significant upgrades over the past year, the conductors of these campaigns maintained evident fingerprints, both in the delivery methods and malware development conventions. These unique traces assisted us in correlating the current wave to past attacks, and may also have some resemblance to attacks related to the {{Molerats, Extreme Jackal, Gaza Cybergang}} APT group.",
        "observed-sectors": [
            "Law enforcement",
            "others"
        ],
        "observed-countries": [
            "Palestine",
            "Middle East"
        ],
        "tools": [
            "Micropsia"
        ],
        "information": [
            "https://blog.talosintelligence.com/2017/06/palestine-delphi.html",
            "https://research.checkpoint.com/2018/apt-attack-middle-east-big-bang/"
        ],
        "uuid": "28f87cac-ce5e-4c5a-be4c-e0db7a70faef",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "the_big_bang",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/apt-attack-middle-east-big-bang/",
            "date": "2018-07-08",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "APT Attack In the Middle East: The Big Bang",
            "categories": [
                "Micropsia",
                "The Big Bang"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2017/06/palestine-delphi.html",
            "date": "2017-06-19",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "Delphi Used To Score Against Palestine",
            "categories": [
                "The Big Bang"
            ]
        }
    ],
    "mitre": []
};