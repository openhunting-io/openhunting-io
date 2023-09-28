var threatdata = {
    "name": "Mudwater",
    "alias": "Mudwater",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Exfiltration, Downloader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Mudwater",
        "names": [
            {
                "name": "Mudwater"
            }
        ],
        "description": "(Trend Micro) In addition to uncovering new campaigns, we were also able to find connections between MuddyWater and four Android malware variants that posed as legitimate applications. We were able to establish proof of connection through their shared infrastructure, e.g., IP addresses and C&C servers, and the code similarities between some of the malware families.\n\nWe first noticed the first Android malware variant (AndroidOS_Mudwater.HRX) when we discovered that its IP address and C&C server, 78[.]129[.]139[.]131, was used as the final C&C server of a MuddyWater campaign. In the said campaign, we saw victims receiving commands for downloading a second stage payload from the abovementioned IP address.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/white_papers/wp_new_muddywater_findings_uncovered.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.mudwater"
        ],
        "uuid": "438f9a8a-34ec-4d7e-a6ab-a59238b4bcd3",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "mudwater",
    "analysis": null
};