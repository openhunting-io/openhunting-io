var threatdata = {
    "name": "SpyWaller",
    "alias": "SpyWaller",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-07-02",
    "all_data": {
        "tool": "SpyWaller",
        "names": [
            {
                "name": "SpyWaller"
            }
        ],
        "description": "(Lookout) The latest SpyWaller variants are capable of accessing the sensitive data of over 20 different apps, in addition to being able to record calls, capture surrounding audio, track a device's location, take pictures with the camera, and retrieve a list of installed packages.\n\nInitial infection is followed by requests to command and control infrastructure for the latest native code component that contains the bulk of SpyWaller's surveillanceware functionality. While we found the native code that is bundled up in the app is somewhat obfuscated, the latest binary served up by attacker infrastructure was not, and contains new code to target Facebook and Google Hangouts. These improvements in capability suggest that the actor behind SpyWaller may be deploying it in campaigns outside of China, where we believe the majority of previous activity to have been conducted.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.lookout.com/spywaller-mobile-threat"
        ],
        "uuid": "3153ac82-3419-4d2b-8702-1e621e0bab17",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "spywaller",
    "analysis": null,
    "articles": [],
    "mitre": []
};