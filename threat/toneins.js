var threatdata = {
    "name": "TONEINS",
    "alias": "TONEINS",
    "category": "Malware",
    "type": "Dropper, Loader",
    "modified": "2022-11-19",
    "all_data": {
        "tool": "TONEINS",
        "names": [
            {
                "name": "TONEINS"
            }
        ],
        "description": "(Trend Micro) Trojan.Win32.TONEINS is the installer for {{TONESHELL}} backdoors. The installer drops the TONESHELL malware to the %PUBLIC% folder and establishes the persistence for it. TONEINS malware usually comes in the lure archives, and in most cases, the name of the TONEINS DLL is libcef.dll. The malicious routine is triggered via calling its export function cef_api_hash.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Loader"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/22/k/earth-preta-spear-phishing-governments-worldwide.html"
        ],
        "uuid": "7259ece1-262f-4880-baa1-8a4e0d0f6752",
        "last-card-change": "2022-11-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "toneins",
    "analysis": null,
    "articles": [],
    "mitre": []
};