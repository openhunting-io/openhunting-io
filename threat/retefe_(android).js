var threatdata = {
    "name": "Retefe (Android)",
    "alias": "Retefe (Android)",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer, Botnet",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Retefe (Android)",
        "names": [
            {
                "name": "Retefe (Android)"
            }
        ],
        "description": "(GovCERT.ch) Recently, some anti-virus companies and newspapers reported that Retefe is distributing the Signal App (a secure messenger). Rumours say that the threat actor may use the Signal App as a communication channel with the victim. This is not the case. As a matter of fact, the Signal App is just decoy that the Retefe Gang serves to IP addresses who are not geo located in Switzerland and whose user agent does not correspond to an Android device. If the accessing IP address uses an Android user agent and is geographically located in Switzerland, the APK server will serve an Android trojan that the Retefe gang use to commit e-banking fraud.\n\nThe trojan is an SMS stealer which allows the threat actor to steal text messages sent by the bank to the customer for two factor authentication (2FA) and transaction signing (so called mobile TAN or mTAN). To have the victim install the android trojan, the Retefe gang uses social engineering to convince the victim to either enter his mobile phone number where he then receives an SMS from the threat actor with a link to the Android APK, or to scan a QR code displayed by the threat actor in the fake e-banking portal, which also leads to the Android APK. But the Android trojan is more than just an SMS stealer. It is also able to send text messages to other victim\u2019s and uses a sophisticated anti VM detection technique. Unlike Retefe itself, which doesn\u2019t have any botnet C&C channel, the SMS stealer has such one. It uses two hard coded botnet C&Cs which are usually hosted on compromised websites.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.govcert.ch/blog/the-retefe-saga/",
            "http://blog.angelalonso.es/2015/10/reversing-c2c-http-emmental.html",
            "http://blog.angelalonso.es/2017/02/hunting-retefe-with-splunk-some24.html",
            "http://maldr0id.blogspot.ch/2014/09/android-malware-based-on-sms-encryption.html",
            "http://blog.angelalonso.es/2015/11/reversing-sms-c-protocol-of-emmental.html",
            "http://blog.dornea.nu/2014/07/07/disect-android-apks-like-a-pro-static-code-analysis/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.retefe"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Retefe"
        ],
        "uuid": "07d8d046-a4f0-434c-b7a4-d971f660b0d4",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "retefe_(android)",
    "analysis": null,
    "articles": [],
    "mitre": []
};