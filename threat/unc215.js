var threatdata = {
    "name": "UNC215",
    "alias": "UNC215",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-29",
    "all_data": {
        "actor": "UNC215",
        "names": [
            {
                "name": "UNC215",
                "name-giver": "FireEye"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(FireEye) In early 2019, Mandiant began identifying and responding to intrusions in the Middle East by Chinese espionage group UNC215. These intrusions exploited the Microsoft SharePoint vulnerability CVE-2019-0604 to install web shells and FOCUSFJORD payloads at targets in the Middle East and Central Asia. There are targeting and high level technique overlaps with between UNC215 and {{Emissary Panda, APT 27, LuckyMouse, Bronze Union}}, but we do not have sufficient evidence to say that the same actor is responsible for both sets of activity. APT27 has not been seen since 2015, and UNC215 is targeting many of the regions that APT27 previously focused on; however, we have not seen direct connection or shared tools, so we are only able to assess this link with low confidence.",
        "observed-sectors": [
            "Education",
            "Government",
            "IT",
            "Telecommunications"
        ],
        "observed-countries": [
            "Israel",
            "USA",
            "Middle East, Europe and Asia"
        ],
        "tools": [
            "AdFind",
            "certutil",
            "China Chopper",
            "HyperBro",
            "Mimikatz",
            "nbtscan",
            "ProcDump",
            "PsExec",
            "SysUpdate",
            "TwoFace",
            "WHEATSCAN",
            "WinRAR"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2021/08/unc215-chinese-espionage-campaign-in-israel.html"
        ],
        "uuid": "987d237f-22bf-4c13-913b-5c445d609305",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "unc215",
    "analysis": null,
    "articles": [],
    "mitre": []
};