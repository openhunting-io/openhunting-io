var threatdata = {
    "name": "AndoServer",
    "alias": "AndoServer",
    "category": "Malware",
    "type": "Backdoor, Reconnaissance, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "AndoServer",
        "names": [
            {
                "name": "AndoServer"
            }
        ],
        "description": "(Lookout) Some AndoServer samples are purely surveillanceware that do not even pretend to be anything else, while others, like this sample here, contain legitimate applications inside the malware, with the benign APK hidden in the res/raw folder.\n\nAndoServer samples receive commands, and are capable of:\n\n\u2022 Taking a screenshot\n\u2022 Getting battery levels and if the device is plugged in\n\u2022 Reporting location (latitude and longitude)\n\u2022 Getting a list of installed applications\n\u2022 Launching an application specified by the malicious actor\n\u2022 Checking the number of cameras on a device\n\u2022 Choosing a specific camera to access\n\u2022 Creating a specific pop-up message (toast)\n\u2022 Recording audio\n\u2022 Creating a file on external storage\n\u2022 Exfiltrating call logs\n\u2022 Listing files contained in a specified directory\n\u2022 Calling a phone number\n\u2022 Exfiltrating SMS messages\n\u2022 Sending SMS to a phone number\n\u2022 Exfiltrating the contact list\n\u2022 Playing a ringtone and then sleeping\n\nAndoServer malware has its C2 domain or IP address hard coded into the source code. Each sample also has its own unique identifier string at the start of its communication with C2 servers, that appears to be for the actor to monitor which application in their arsenal is responsible for the compromise, as they can see the unique application installed by the specific victim. While not always the case, some unique identifiers are similar to the name of the C2 domain, while other times they refer to the title of the application, highlighting another level of customization of this malware.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Reconnaissance",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.lookout.com/nation-state-mobile-malware-targets-syrians-with-covid-19-lures"
        ],
        "uuid": "07eb732e-d8d4-45a1-8727-f5ef8f8f3ef6",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "andoserver",
    "analysis": null,
    "articles": [],
    "mitre": []
};