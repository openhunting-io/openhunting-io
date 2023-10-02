var threatdata = {
    "name": "PluginPhantom",
    "alias": "PluginPhantom",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2020-07-02",
    "all_data": {
        "tool": "PluginPhantom",
        "names": [
            {
                "name": "PluginPhantom"
            }
        ],
        "description": "(Palo Alto) Recently, we discovered a new Google Android Trojan named \u201cPluginPhantom\u201d, which steals many types of user information including: files, location data, contacts and Wi-Fi information. It also takes pictures, captures screenshots, records audios, intercepts and sends SMS messages. In addition, it can log the keyboard input by the Android accessibility service, acting as a keylogger.\n\nPluginPhantom is a new class of Google Android Trojan: it is the first to use updating and to evade static detection. It does this by leveraging the Android plugin technology. It abuses the legitimate and popular open source framework \u201cDroidPlugin\u201d, which allows an app to dynamically launch any apps as plugins without installing them in the system. PluginPhantom implements each element of malicious functionality as a plugin, and utilizes a host app to control the plugins. With the new architecture, PluginPhantom achieves more flexibility to update its modules without reinstalling apps. PluginPhantom also gains the ability to evade the static detection by hiding malicious behaviors in plugins. Since the plugin development pattern is generic and the plugin SDK can be easily embedded, the plugin architecture could be a trend among Android malware in the future.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-pluginphantom-new-android-trojan-abuses-droidplugin-framework/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:pluginphantom"
        ],
        "uuid": "a56b62e0-d456-4098-bfae-a86aeae21b49",
        "last-card-change": "2020-07-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pluginphantom",
    "analysis": null,
    "articles": [],
    "mitre": []
};