var threatdata = {
    "name": "DoubleAgent",
    "alias": "DoubleAgent",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "DoubleAgent",
        "names": [
            {
                "name": "DoubleAgent"
            }
        ],
        "description": "(Lookout) In 2013 Citizen Lab reported on a compromised version of KakaoTalk, which had been used to target a prominent individual in the Tibetan community. This app was the first publicly exposed sample of a malware family called DoubleAgent. When Lookout initially investigated DoubleAgent in 2015, it was already an advanced Android remote access tool (RAT). Early versions of this family trojanized apps such as Voxer and TalkBox, as well as Amaq News, the official Daesh news application. The extent of this malware family and its connections to other campaigns has not been publicly reported on until now. Lookout researchers have seen DoubleAgent used exclusively against groups with contentious relationships with the Chinese government.\n\nAlthough Lookout has been tracking this malware family for many years, new samples discovered in the last year indicated that the actors behind DoubleAgent were continuing to evolve the surveillanceware and use new infrastructure. However, they maintained the same targeting, as well as several key malware characteristics, such as similar decryption keys for configuration files.\n\nThese recent samples, discovered in late 2019, are the focus of this section on DoubleAgent. A decryption of the configuration files from these samples revealed a direct overlap in C2 infrastructure between the operators of DoubleAgent and {{SilkBean}} at a time when both malware families appeared to be active.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf",
            "https://citizenlab.ca/2013/04/permission-to-spy-an-analysis-of-android-malware-targeting-tibetans/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0550/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.doubleagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DoubleAgent"
        ],
        "uuid": "70767fb4-c613-4566-837f-81dc2e9d5ece",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "doubleagent",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf",
            "date": "2020-06",
            "organization": "Lookout",
            "author": "Apurva Kumar",
            "title": "Mobile APT SurveillanceCampaigns Targeting Uyghurs A collection of long-running Android tooling connected to a Chinese mAPT actor",
            "categories": [
                "CarbonSteal",
                "DoubleAgent",
                "GoldenEagle",
                "SilkBean"
            ]
        }
    ],
    "mitre": []
};