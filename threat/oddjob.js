var threatdata = {
    "name": "OddJob",
    "alias": "OddJob",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "OddJob",
        "names": [
            {
                "name": "OddJob"
            }
        ],
        "description": "(IBM) OddJob\u2019s most obvious characteristic is that it is designed to intercept user communications through the browser to steal or inject information and terminate user sessions inside Internet Explorer and Firefox. We have extracted OddJob\u2019s configuration data and concluded that it is capable of performing different actions on targeted websites, depending on its configuration. The code is capable of logging GET and POST requests, grabbing full pages, terminating connections and injecting data into Web pages.\n\nAll logged requests and grabbed pages are sent to the C&C server in real time, allowing fraudsters to perform session hijacks \u2014 also in real time but hidden from the legitimate user of the online bank account. By tapping the session ID token, which banks use to identify a user\u2019s online banking session, the fraudsters can electronically impersonate the legitimate user and complete a range of banking operations.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://securityintelligence.com/oddjob-new-financial-trojan-keeps-online-banking-sessions-open-after-users-logout/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.oddjob"
        ],
        "uuid": "e86e1ae5-b560-4be2-bdf5-a5ee26ebcaa9",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "oddjob",
    "analysis": null,
    "articles": [],
    "mitre": []
};