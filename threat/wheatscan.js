var threatdata = {
    "name": "WHEATSCAN",
    "alias": "WHEATSCAN",
    "category": "Malware",
    "type": "Vulnerability scanner",
    "modified": "2021-11-01",
    "all_data": {
        "tool": "WHEATSCAN",
        "names": [
            {
                "name": "WHEATSCAN"
            }
        ],
        "description": "(FireEye) After gaining initial access, the operators conduct credential harvesting and extensive internal network reconnaissance. This includes running native Windows commands on compromised servers, executing {{AdFind}} on the Active Directory, and scanning the internal network with numerous publicly available tools and a non-public scanner we named WHEATSCAN. The operators made a consistent effort to delete these tools and remove any residual forensic artifacts from compromised systems.",
        "category": "Malware",
        "type": [
            "Vulnerability scanner"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2021/08/unc215-chinese-espionage-campaign-in-israel.html"
        ],
        "uuid": "84f91da3-6425-433b-bdbf-ff37b64b8335",
        "last-card-change": "2021-11-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "wheatscan",
    "analysis": null
};