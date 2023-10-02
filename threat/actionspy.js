var threatdata = {
    "name": "ActionSpy",
    "alias": "ActionSpy, AxeSpy",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "ActionSpy",
        "names": [
            {
                "name": "ActionSpy"
            },
            {
                "name": "AxeSpy"
            }
        ],
        "description": "(Trend Micro) This malware impersonates a legitimate Uyghur video app called Ekran. The malicious app has the same appearance and features as the original app. It is able to achieve this with VirtualApp. In addition, it\u2019s also protected by Bangcle to evade static analysis and detection.\n\nEvery 30 seconds, ActionSpy will collect basic device information like IMEI, phone number, manufacturer, battery status, etc., which it sends to the C&C server as a heartbeat request. The server may return some commands that will be performed on the compromised device. All the communication traffic between C&C and ActionSpy is encrypted by RSA and transferred via HTTP.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-android-spyware-actionspy-revealed-via-phishing-attacks-from-earth-empusa/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.actionspy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:actionspy"
        ],
        "uuid": "f1efe8d0-5fcc-4443-b2aa-cfe89f0ff366",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "actionspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://about.fb.com/news/2021/03/taking-action-against-hackers-in-china/",
            "date": "2021-03-24",
            "organization": "Facebook",
            "author": "Mike Dvilyanski",
            "title": "Taking Action Against Hackers in China",
            "categories": [
                "ActionSpy"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/f/new-android-spyware-actionspy-revealed-via-phishing-attacks-from-earth-empusa.html",
            "date": "2020-06-11",
            "organization": "Trend Micro",
            "author": "Ecular Xu",
            "title": "Phishing Attacks from Earth Empusa Reveal ActionSpy",
            "categories": [
                "ActionSpy",
                "POISON CARP"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-android-spyware-actionspy-revealed-via-phishing-attacks-from-earth-empusa/",
            "date": "2020-06-11",
            "organization": "Trend Micro",
            "author": "Ecular Xu",
            "title": "New Android Spyware ActionSpy Revealed via Phishing Attacks from Earth Empusa",
            "categories": [
                "ActionSpy",
                "PoisonCarp"
            ]
        }
    ],
    "mitre": []
};