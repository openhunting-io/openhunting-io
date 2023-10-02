var threatdata = {
    "name": "MysteryBot",
    "alias": "MysteryBot",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2020-05-21",
    "all_data": {
        "tool": "MysteryBot",
        "names": [
            {
                "name": "MysteryBot"
            }
        ],
        "description": "(Threat Fabric) While processing our daily set of suspicious samples, our detection rule for the Android banking trojan {{LokiBot}} matched a sample that seemed quite different than LokiBot itself, urging us to take a closer look at it. Looking at the bot commands, we first thought that LokiBot had been improved. However, we quickly realized that there is more going on: the name of the bot and the name of the panel changed to 'MysteryBot', even the network communication changed.\n\nDuring investigation of its network activity we found out that MysteryBot and LokiBot Android banker are both running on the same C&C server. This quickly brought us to an early conclusion that this newly discovered Malware is either an update to Lokibot, either another banking trojan developed by the same actor.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://www.threatfabric.com/blogs/mysterybot__a_new_android_banking_trojan_ready_for_android_7_and_8.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.mysterybot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MysteryBot"
        ],
        "uuid": "8131616a-548c-48a4-98ed-6b043afee311",
        "last-card-change": "2020-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mysterybot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.threatfabric.com/blogs/mysterybot__a_new_android_banking_trojan_ready_for_android_7_and_8.html",
            "date": "2018-06",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "MysteryBot; a new Android banking Trojan ready for Android 7 and 8",
            "categories": [
                "MysteryBot"
            ]
        }
    ],
    "mitre": []
};