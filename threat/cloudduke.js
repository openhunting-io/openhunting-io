var threatdata = {
    "name": "CloudDuke",
    "alias": "CloudDuke, Cloud Duke, MiniDionis, CloudLook",
    "category": "Malware",
    "type": "Backdoor, Loader, Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "CloudDuke",
        "names": [
            {
                "name": "CloudDuke"
            },
            {
                "name": "Cloud Duke"
            },
            {
                "name": "MiniDionis"
            },
            {
                "name": "CloudLook"
            }
        ],
        "description": "(F-Secure) In the beginning of July 2015, the Dukes embarked on yet another large-scale phishing campaign. The malware toolset used for this campaign was the previously unseen CloudDuke and we believe that the July campaign marks the first time that this toolset was deployed by the Dukes, other than possible small-scale testing.\n\nThe CloudDuke toolset consists of at least a loader, a downloader, and two backdoor variants. Both backdoors (internally referred to by their authors as \u201cBastionSolution\u201d and \u201cOneDriveSolution\u201d) essentially allow the operator to remotely execute commands on the compromised machine. The way in which each backdoor does so however is significantly different. While the BastionSolution variant simply retrieves commands from a hard-coded C&C server controlled by the Dukes, the OneDriveSolution utilizes Microsoft\u2019s OneDrive cloud storage service for communicating with its masters, making it significantly harder for defenders to notice the traffic and block the communication channel. What is most significant about the July 2015 CloudDuke campaign is the timeline. The campaign appeared to consist of two distinct waves of spear-phishing, one during the first days of July and the other starting from the 20th of the month. Details of the first wave, including a thorough technical analysis of CloudDuke, was published by Palo Alto Networks on 14th July. This was followed by additional details from Kaspersky in a blog post published on 16th July.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader",
            "Downloader"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0054/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cloud_duke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CloudDuke"
        ],
        "uuid": "806c8a75-8ce9-483d-8bbc-8c63978ed378",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cloudduke",
    "analysis": null
};