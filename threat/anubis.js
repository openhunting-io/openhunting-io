var threatdata = {
    "name": "Anubis",
    "alias": "Anubis, BankBot, Go_P00t, android.bankbot, android.bankspy",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Anubis",
        "names": [
            {
                "name": "Anubis"
            },
            {
                "name": "BankBot"
            },
            {
                "name": "Go_P00t"
            },
            {
                "name": "android.bankbot"
            },
            {
                "name": "android.bankspy"
            }
        ],
        "description": "(Trend Micro) The Anubis malware masquerades as a benign app, prompts the user to grant it accessibility rights, and also tries to steal account information. Banking trojans usually launch a fake overlay screen when the user accesses a target app and tries to steal information when the user inputs account credentials into the overlay. However, Anubis\u2019 process is a little different. It has a built-in keylogger that can simply steal a users\u2019 account credentials by logging the keystrokes. The malware can also take a screenshot of the infected users\u2019 screen, which is another way to get the victims credentials.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/google-play-apps-drop-anubis-banking-malware-use-motion-based-evasion-tactics/",
            "https://blogs.quickheal.com/android-malware-combines-banking-trojan-keylogger-ransomware-one-package/",
            "https://securityintelligence.com/after-big-takedown-efforts-20-more-bankbot-mobile-malware-apps-make-it-into-google-play/",
            "https://securityintelligence.com/anubis-strikes-again-mobile-malware-continues-to-plague-users-in-official-app-stores/",
            "http://b0n1.blogspot.de/2017/05/tracking-android-bankbot.html",
            "http://blog.koodous.com/2017/04/decrypting-bankbot-communications.html",
            "https://www.welivesecurity.com/2017/11/21/new-campaigns-spread-banking-malware-google-play/",
            "http://blog.koodous.com/2017/05/bankbot-on-google-play.html",
            "https://www.fortinet.com/blog/threat-research/bankbot-the-prequel.html",
            "https://eybisi.run/Mobile-Malware-Analysis-Tricks-used-in-Anubis/",
            "https://pentest.blog/n-ways-to-unpack-mobile-malware/",
            "https://info.phishlabs.com/blog/new-variant-bankbot-banking-trojan-aubis",
            "https://www.fortinet.com/blog/threat-research/a-look-into-the-new-strain-of-bankbot.html",
            "https://sysopfb.github.io/malware,/reverse-engineering/2018/08/30/Unpacking-Anubis-APK.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0422/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.anubis"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Anubis"
        ],
        "uuid": "0a30f599-8c6c-4721-a736-4b21c8def62b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Anubis",
            "malware_alias": "BankBot,android.bankbot,android.bankspy",
            "malware": "apk.anubis",
            "last_update": "2023-03-29 06:03:40",
            "tags": [
                "Anubis",
                "BankBot"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "47.89.185.156:443",
                        "timestamp": "2023-03-29 06:03:40"
                    }
                ],
                "url": [
                    {
                        "value": "https://zektarmunoza.shop/z.php",
                        "timestamp": "2023-03-29 06:02:31"
                    },
                    {
                        "value": "http://monitorarbitcoin.org/",
                        "timestamp": "2021-10-08 21:08:25"
                    }
                ],
                "domain": [
                    {
                        "value": "zektarmunoza.shop",
                        "timestamp": "2023-03-29 06:02:07"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "cf3e16d6328d572cdf4476809e25c52790d77bec8ac1a52a7129485c55a7c6a7",
                        "timestamp": "2021-07-28 11:29:19"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-29 06:03:40",
    "mitre": [],
    "file_name": "anubis",
    "analysis": null
};