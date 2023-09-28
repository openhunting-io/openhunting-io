var threatdata = {
    "name": "Catelites Bot",
    "alias": "Catelites Bot, Catelites",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Catelites Bot",
        "names": [
            {
                "name": "Catelites Bot"
            },
            {
                "name": "Catelites"
            }
        ],
        "description": "(Avast) Now, the Avast Threat Labs team have uncovered and analyzed with SfyLabs a new version of the malware, dubbed Catelites Bot, which shares similarities with the malware used for {{CronBot}}.\n\nWhile we are still investigating the details of this malware, here is what we know: this malware gets \u201cdropped\u201d onto your device after you download an app from a third-party app store (not official shops like Google Play) or from malicious adware (malvertisements) or phishing sites. Once dropped onto your Android device, the malicious app looks like the icon seen in the screen below and is titled \u201cSystem Application.\u201d\n\nWorse still, this piece of malware can also go after your bank account login details. This malware has the ability to pose as over 2,200 banks and financial institutions. It does so by adopting the logo and mobile application name of a bank used in the Google Play Store, allowing the author to use simple templates to harvest username and password or credit card information. The overlay is HTML-based and not as sophisticated as other Android banking malware such as {{LokiBot}}, {{Red Alert}}, or {{ExoBot}}, but the power here is clearly in the shotgun approach: using simple phishing overlay screens, the criminals are able to target many more users, increasing their likelihood of financial gain.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://blog.avast.com/new-version-of-mobile-malware-catelites-possibly-linked-to-cron-cyber-gang"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.catelites"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Catelites"
        ],
        "uuid": "7792fc81-4715-436d-8eab-ccc560958972",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "catelites_bot",
    "analysis": null
};