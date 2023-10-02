var threatdata = {
    "name": "SeDLL",
    "alias": "SeDLL",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "SeDLL",
        "names": [
            {
                "name": "SeDLL"
            }
        ],
        "description": "(Proofpoint) This DLL is used for decrypting and executing another JavaScript backdoor such as {{AIRBREAK}}. The DLL is registered by the installer using regsvr32. The DllRegisterServer export is then called, which performs checks on the commandline parameter. If the string \u201cDR\u201d is passed as an argument, or if the DLL is running in the active session with a username that is not \u201csystem\u201d, the final JavaScript backdoor is decoded using a custom base64 alphabet. This backdoor has to be present in the same directory as the dll, with a \u201c.tmp\u201d file extension. The backdoor script is then executed using the IActiveScript and IActiveScriptParse32 COM interfaces.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/leviathan-espionage-actor-spearphishes-maritime-and-defense-targets",
            "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html",
            "https://www.recordedfuture.com/chinese-threat-actor-tempperiscope/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sedll"
        ],
        "uuid": "caedd5d3-ee3f-4114-bc90-68648be98917",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SeDll",
            "malware_alias": null,
            "malware": "win.sedll",
            "last_update": "2021-03-27 13:50:57",
            "tags": [
                "dll",
                "suspicious"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "7523febf9a1f3c596bb1b81044d5deba4c3869eda1e947e08747d18c97858cca",
                        "timestamp": "2021-03-27 13:50:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-27 13:50:57",
    "file_name": "sedll",
    "analysis": null,
    "articles": [],
    "mitre": []
};