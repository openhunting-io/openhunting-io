var threatdata = {
    "name": "StrongPity3",
    "alias": "StrongPity3",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-07-01",
    "all_data": {
        "tool": "StrongPity3",
        "names": [
            {
                "name": "StrongPity3"
            }
        ],
        "description": "(Talos) StrongPity3 is the evolution of {{StrongPity2}}, with a few differences. The latter does not use libcurl anymore and now uses winhttp to perform all requests to C2. The usage of the HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run registry key has a persistence mechanism that has been replaced by the creation of a service. This service changes its name from package to package. The service executable's only job is to launch the C2 contact module upon service startup. The remaining malware flow is the same on both versions.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/06/promethium-extends-with-strongpity3.html"
        ],
        "uuid": "8fa25345-1e8e-47d1-a86f-8c58be2b14b2",
        "last-card-change": "2020-07-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "strongpity3",
    "analysis": null
};