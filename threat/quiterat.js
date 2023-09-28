var threatdata = {
    "name": "QuiteRAT",
    "alias": "QuiteRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "QuiteRAT",
        "names": [
            {
                "name": "QuiteRAT"
            }
        ],
        "description": "(Talos) QuiteRAT is a fairly simple remote access trojan (RAT). It consists of a compact set of statically linked Qt libraries along with some user-written code. The Qt framework is a platform for developing cross-platform applications. However, it is immensely popular for developing Graphical User Interface in applications. Although QuiteRAT, just like MagicRAT, uses embedded Qt libraries, none of these implants have a Graphical User Interface. .As seen with Lazarus Group\u2019s MagicRAT malware, the use of Qt increases the code complexity, making human analysis harder. Using Qt also makes machine learning and heuristic analysis detection less reliable, since Qt is rarely used in malware development.\n\nBased on QuiteRAT\u2019s technical characteristics, including the usage of the Qt framework, we assess that this implant belongs to the previously disclosed MagicRAT family. QuiteRAT was briefly discussed in WithSecure\u2019s report from early 2023. The new campaign we\u2019re disclosing exploited a ManageEngine ServiceDesk vulnerability (CVE-2022-47966) \u2014 which has a Kenna risk score of 100 out of 100 \u2014 to deploy QuiteRAT.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/lazarus-quiterat/"
        ],
        "uuid": "dd8d965b-57b6-4d45-89a5-a62ae4688b98",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "quiterat",
    "analysis": null
};