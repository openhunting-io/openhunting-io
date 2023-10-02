var threatdata = {
    "name": "SodomNormal",
    "alias": "SodomNormal",
    "category": "Malware",
    "type": "Exfiltration, Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SodomNormal",
        "names": [
            {
                "name": "SodomNormal"
            }
        ],
        "description": "(Proofpoint) The\u202fSodomNormal\u202fCommunications module runs within the libcurl.dll\u202floader as a\u202floaded DLL.\u202fIts primary function is to communicate data gathered by the\u202f{{SodomMain}}\u202fremote access Trojan module with the {{GUP Proxy Tool}}. It attempts to acquire\u202fan existing configuration from the file sodom.ini. However, it appears the configuration is dropped in the file sodom.txt instead. If that configuration is not available, it utilizes a hardcoded configuration in the binary.\nThe tool uses a custom binary protocol over sockets for its command and control communication with the GUP Proxy Tool and all transferred data is encrypted using a modified version of RC4 encryption. It has limited functionality which includes an initial beacon, an initial beacon response that includes encoded data containing the\u202fSodomMain\u202fRAT, and a command poll which passes header and decrypted data in an exported function enabling the\u202fSodomMain\u202fRAT to run.",
        "category": "Malware",
        "type": [
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/lookback-malware-targets-united-states-utilities-sector-phishing-attacks"
        ],
        "uuid": "c3cba930-cea7-4a10-8a8d-d51044f34e47",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sodomnormal",
    "analysis": null,
    "articles": [],
    "mitre": []
};