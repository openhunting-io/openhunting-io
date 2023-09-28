var threatdata = {
    "name": "KevDroid",
    "alias": "KevDroid",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "KevDroid",
        "names": [
            {
                "name": "KevDroid"
            }
        ],
        "description": "(Talos) Variant 1:\nThe purpose of the application is to steal information stored on the device. Here is the list of stolen information:\n\n\u2022 Installed applications\n\u2022 Phone number\n\u2022 Phone Unique ID\n\u2022 Location (the application tries to switch on the GPS), this information is collected every 10 seconds, which is aggressive for this kind of spying tool\n\u2022 Stored contacts information (name, phone numbers, emails, photos, etc.)\n\u2022 Stored SMS\n\u2022 Call logs\n\u2022 Stored emails\n\u2022 Photos\n\u2022 Recording calls\n\nVariant 2:\nThe variant contains the same features than the previous version with some additional:\n\n\u2022 Camera recording\n\u2022 Audio recording\n\u2022 Web history stealing\n\u2022 File stealing\n\u2022 Root access on the device",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://blog.talosintelligence.com/2018/04/fake-av-investigation-unearths-kevdroid.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.kevdroid"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KevDroid"
        ],
        "uuid": "322aa827-1bf8-4d95-b773-dc6488aea1b8",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kevdroid",
    "analysis": null
};