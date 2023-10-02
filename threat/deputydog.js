var threatdata = {
    "name": "DeputyDog",
    "alias": "DeputyDog, Fexel",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-26",
    "all_data": {
        "tool": "DeputyDog",
        "names": [
            {
                "name": "DeputyDog"
            },
            {
                "name": "Fexel"
            }
        ],
        "description": "(FireEye) FireEye detected the payload used in these attacks on August 23, 2013 in Japan. The payload was hosted on a server in Hong Kong (210.176.3.130) and was named \u201cimg20130823.jpg\u201d. Although it had a .jpg file extension, it was not an image file. The file, when XORed with 0x95, was an executable (MD5: 8aba4b5184072f2a50cbc5ecfe326701).\n\nUpon execution, 8aba4b5184072f2a50cbc5ecfe326701 writes \u201c28542CC0.dll\u201d (MD5: 46fd936bada07819f61ec3790cb08e19) to this location:\nC:\\Documents and Settings\\All Users\\Application Data\\28542CC0.dll\n\nIn order to maintain persistence, the original malware adds this registry key:\nHKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\28542CC0\nThe registry key has this value:\nrundll32.exe \u201cC:\\Documents and Settings\\All Users\\Application Data\\28542CC0.dll\u201d,Launch\n\nThe malware (8aba4b5184072f2a50cbc5ecfe326701) then connects to a host in South Korea (180.150.228.102). This callback traffic is HTTP over port 443 (which is typically used for HTTPS encrypted traffic; however, the traffic is not HTTPS nor SSL encrypted).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2013/09/operation-deputydog-zero-day-cve-2013-3893-attack-against-japanese-targets.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.deputydog"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:deputydog"
        ],
        "uuid": "af3da544-f3b5-4e82-805b-4cd731f625ca",
        "last-card-change": "2020-05-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "deputydog",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-keystone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE KEYSTONE",
            "categories": [
                "9002 RAT",
                "BLACKCOFFEE",
                "DeputyDog",
                "Derusbi",
                "HiKit",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20130924130243/https://www.fireeye.com/blog/technical/cyber-exploits/2013/09/operation-deputydog-zero-day-cve-2013-3893-attack-against-japanese-targets.html",
            "date": "2013-09-21",
            "organization": "FireEye",
            "author": "Ned Moran",
            "title": "Operation DeputyDog: Zero-Day (CVE-2013-3893) Attack Against Japanese Targets",
            "categories": [
                "DeputyDog",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/09/operation-deputydog-zero-day-cve-2013-3893-attack-against-japanese-targets.html",
            "date": "2013-09-21",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "Operation DeputyDog: Zero-Day (CVE-2013-3893) Attack Against Japanese Targets",
            "categories": [
                "DeputyDog"
            ]
        }
    ],
    "mitre": []
};