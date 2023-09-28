var threatdata = {
    "name": "SkeletonKeyInjector",
    "alias": "SkeletonKeyInjector",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SkeletonKeyInjector",
        "names": [
            {
                "name": "SkeletonKeyInjector"
            }
        ],
        "description": "(CyCraft) The discovery of a related binary led us to initially believe the sample was a Dumpert. However, a more in-depth analysis revealed that the d3d11.dll sample implanted a skeleton key, where adversaries could persistently control (before the system reboot) the infected machine and machines under the infected AD. More specifically, the malware was an account manipulation tool that contained code extracted from both Dumpert and {{Mimikatz}}. We called this malware SkeletonKeyInjector. The malware employed a technique that altered the NTLM authentication program and implanted a skeleton key to allow adversaries to log-in without a valid credential. This allowed the adversary to achieve the following objectives:\n\u25cf Persistence: After the code in memory was altered, the adversary could gain access to the compromised machines before the next system reboot. As AD machines are rarely rebooted, the adversary was able to control the machines for a very long time.\n\u25cf Defense Evasion: Aside from the different login password and login algorithm scheme, there was no difference when compared to a normal login activity. Furthermore, normal users could still log-in to the system via their original password. Thus, the probability of being exposed was low.\n\u25cf Lateral Movement: Adversaries could use the skeleton key to login to other machines that were in the same domain. This made it easier for an adversary to conduct lateral movement.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://cycraft.com/download/%5BTLP-White%5D20200415%20Chimera_V4.1.pdf"
        ],
        "uuid": "ac256455-69de-4b40-9ca5-bb207aaf5b08",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "skeletonkeyinjector",
    "analysis": null
};