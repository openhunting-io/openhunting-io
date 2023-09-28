var threatdata = {
    "name": "KimJongRAT",
    "alias": "KimJongRAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "KimJongRAT",
        "names": [
            {
                "name": "KimJongRAT"
            }
        ],
        "description": "(Palo Alto) As the original filename \u201ccow_pass.fig\u201d suggests, KimJongRAT seems to be wholly used as a password extraction and information stealer tool by the threat actor, and the collected data are exfiltrated to C2 with support from other malware such as {{BabyShark}} or {{Gh0st RAT}}. The information that the KimJongRAT malware steals from victim machines include email credentials from Microsoft Outlook and Mozilla Thunderbird, login credentials for Google, Facebook, and Yahoo accounts from browsers Internet Explorer, Chrome, Mozilla Firefox, and Yandex Browser.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/babyshark-malware-part-two-attacks-continue-using-kimjongrat-and-pcrat/",
            "https://unit42.paloaltonetworks.com/new-babyshark-malware-targets-u-s-national-security-think-tanks/",
            "https://malware.lu/assets/files/articles/RAP003_KimJongRAT-Stealer_Analysis.1.0.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kimjongrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KimJongRAT"
        ],
        "uuid": "1981c06c-cc55-4efe-99e1-ac799d04d3b6",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kimjongrat",
    "analysis": null
};