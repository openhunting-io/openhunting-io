var threatdata = {
    "name": "MMRat",
    "alias": "MMRat",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "MMRat",
        "names": [
            {
                "name": "MMRat"
            }
        ],
        "description": "(Trend Micro) The Trend Micro Mobile Application Reputation Service (MARS) team discovered a new, fully undetected Android banking trojan, dubbed MMRat (detected by TrendMicro as AndroidOS_MMRat.HRX), that has been targeting mobile users in Southeast Asia since late June 2023. The malware, named after its distinctive package name com.mm.user, can capture user input and screen content, and can also remotely control victim devices through various techniques, enabling its operators to carry out bank fraud on the victim\u2019s device.\n\nFurthermore, MMRat uses a special customized command-and-control (C&C) protocol based on protocol buffers (aka Protobuf), an open-source data format used for serializing structured data. This feature, which is rarely seen in Android banking trojans, enhances its performance during the transfer of large volumes of data.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/23/h/mmrat-carries-out-bank-fraud-via-fake-app-stores.html"
        ],
        "uuid": "cddf5428-abee-4308-8ab6-ac5bb744e312",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "mmrat",
    "analysis": null
};