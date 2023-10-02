var threatdata = {
    "name": "dmsSpy",
    "alias": "dmsSpy",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "dmsSpy",
        "names": [
            {
                "name": "dmsSpy"
            }
        ],
        "description": "(Trend Micro) Another APK link was disguised as a calendar application for checking the schedule of upcoming political events in Hong Kong. Though the link was also down, we managed to find the original file downloaded from it.\n\nThe calendar application shown above requires manysensitive permissions such as READ_CONTACTS, RECEIVE_SMS, READ_SMS, CALL_PHONE, ACCESS_LOCATION, and WRITE/READ EXTERNAL_STORAGE. When launched, it first collects device information such as device ID, brand, model, OS version, physicallocation, and SDcard file list. It then sends the collected information back to the C&C server.\n\nIt also steals contact and  SMS information stored in  the device. Furthermore, it registers a receiver  that monitors new incoming SMS messages and syncs messages with the C&C server in real-time.\n\nThe appcan perform an update by querying the C&C server to fetch the URL of the latest APK file, then download and install it.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/Tech-Brief-Operation-Poisoned-News-Hong-Kong-Users-Targeted-with-Mobile-Malware-via-Local-News-Links.pdf",
            "https://securelist.com/ios-exploit-chain-deploys-lightspy-malware/96407/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-poisoned-news-hong-kong-users-targeted-with-mobile-malware-via-local-news-links/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.dmsspy"
        ],
        "uuid": "94171b88-29ea-4840-8f84-61096123d0b0",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dmsspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/ios-exploit-chain-deploys-lightspy-malware/96407/",
            "date": "2020-03-26",
            "organization": "Kaspersky Labs",
            "author": "Alexey Firsh",
            "title": "iOS exploit chain deploys LightSpy feature-rich malware",
            "categories": [
                "dmsSpy",
                "lightSpy"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/Tech-Brief-Operation-Poisoned-News-Hong-Kong-Users-Targeted-with-Mobile-Malware-via-Local-News-Links.pdf",
            "date": "2020-03-24",
            "organization": "Trend Micro",
            "author": "Elliot Cao",
            "title": "Technical Brief: Operation Poisoned News: Hong Kong Users Targeted with Mobile Malware via Local News Links",
            "categories": [
                "dmsSpy",
                "lightSpy"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-poisoned-news-hong-kong-users-targeted-with-mobile-malware-via-local-news-links/",
            "date": "2020-03-24",
            "organization": "Trend Micro",
            "author": "Elliot Cao",
            "title": "Operation Poisoned News: Hong Kong Users Targeted With Mobile Malware via Local News Links",
            "categories": [
                "dmsSpy",
                "lightSpy"
            ]
        }
    ],
    "mitre": []
};