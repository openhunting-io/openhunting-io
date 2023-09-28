var threatdata = {
    "name": "Hermes",
    "alias": "Hermes",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Hermes",
        "names": [
            {
                "name": "Hermes"
            }
        ],
        "description": "(Malwarebytes) The ransomware copies itself into %TEMP% under the name svchosta.exe and redeploys itself from that location. The initial sample is then deleted.\n\nThe ransomware is not particularly stealthy\u2014some windows pop up during its run. For example, we are asked to run a batch script with administrator privileges.\n\nThe authors didn\u2019t bother to deploy any UAC bypass technique, relying only on social engineering for this. The pop-up is deployed in a loop, and by this way it tries to force the user into accepting it. But even if we don\u2019t let the batch script be deployed, the main executable proceeds with encryption.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://blog.malwarebytes.com/threat-analysis/2018/03/hermes-ransomware-distributed-to-south-koreans-via-recent-flash-zero-day/",
            "https://blog.dcso.de/enterprise-malware-as-a-service/",
            "https://www.proofpoint.com/us/threat-insight/post/new-version-azorult-stealer-improves-loading-features-spreads-alongside"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hermes"
        ],
        "uuid": "af449984-8b3c-48da-aec9-bf6a133f3f8c",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hermes",
    "analysis": null
};