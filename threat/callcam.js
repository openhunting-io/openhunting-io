var threatdata = {
    "name": "callCam",
    "alias": "callCam",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-29",
    "all_data": {
        "tool": "callCam",
        "names": [
            {
                "name": "callCam"
            }
        ],
        "description": "(Trend Micro) The apps Camero and FileCrypt Manger act as droppers. After downloading the extra DEX file from the C&C server, the second-layer droppers invoke extra code to download, install, and launch the callCam app on the device.\n\nThe app callCam hides its icon on the device after being launched. It collects the following information and sends it back to the C&C server in the background:\n\n\u2022 Location\n\u2022 Battery status\n\u2022 Files on device\n\u2022 Installed app list\n\u2022 Device information\n\u2022 Sensor information\n\u2022 Camera information\n\u2022 Screenshot\n\u2022 Account\n\u2022 Wifi information\n\u2022 Data of WeChat, Outlook, Twitter, Yahoo Mail, Facebook, Gmail, and Chrome\n\nThe app encrypts all stolen data using RSA and AES encryption algorithms. It uses SHA256 to verify data integrity and customize the encoding routine. When encrypting, it creates a block of data we named headData. This block contains the first 9 bytes of origin data, origin data length, random AES IV, the RSA-encrypted AES encrypt key, and the SHA256 value of AES-encrypted origin data. Then the headData is encoded through the customized routine. After the encoding, it is stored in the head of the final encrypted file followed by the data of the AES-encrypted original data.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/first-active-attack-exploiting-cve-2019-2215-found-on-google-play-linked-to-sidewinder-apt-group/"
        ],
        "uuid": "c5e4e318-c0f6-4b6e-b74b-935daae939ee",
        "last-card-change": "2020-04-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "callcam",
    "analysis": null,
    "articles": [],
    "mitre": []
};