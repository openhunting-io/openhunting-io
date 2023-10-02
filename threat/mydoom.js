var threatdata = {
    "name": "Mydoom",
    "alias": "Mydoom, Novarg, Mimail",
    "category": "Malware",
    "type": "Worm, DDoS",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Mydoom",
        "names": [
            {
                "name": "Mydoom"
            },
            {
                "name": "Novarg"
            },
            {
                "name": "Mimail"
            }
        ],
        "description": "(Palo Alto) MyDoom is an infamous computer worm first noted in early 2004. This malware has been featured in top ten lists of the most destructive computer viruses, causing an estimated $38 billion in damage. Although now well past its heyday, MyDoom continues to be a presence in the cyber threat landscape.\n\nWhile not as prominent as other malware families, MyDoom has remained relatively consistent during the past few years, averaging approximately 1.1 percent of all emails we see with malware attachments. We continue to record tens of thousands of MyDoom samples every month. The vast majority of MyDoom emails come from IP addresses registered in China, with the United States running a distant second. These emails are sent to recipients across the world, mostly targeting high tech, wholesale, retail, healthcare, education, and manufacturing industries.",
        "category": "Malware",
        "type": [
            "Worm",
            "DDoS"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/mydoom-still-active-in-2019/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mydoom"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MyDoom"
        ],
        "uuid": "fa55f904-9712-425b-a988-e81a59cfddaf",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "MyDoom",
            "malware_alias": "Novarg,Mimail",
            "malware": "win.mydoom",
            "last_update": "2021-09-03 13:45:33",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "0ead89a60b4d19bfca4a7d25391acf27e21a2e921eeb45327e1e23737f89a806",
                        "timestamp": "2021-09-03 13:45:33"
                    },
                    {
                        "value": "f2404d51758aff593e8405e3731390f650a15e1dcdbaa3b6969e7fd196784136",
                        "timestamp": "2021-09-03 13:45:32"
                    },
                    {
                        "value": "bc6062cbb58a6c337d1b14602bdcd90dc9cbf678ca8c6e0a90f5422bff601a57",
                        "timestamp": "2021-09-03 13:45:31"
                    },
                    {
                        "value": "861525f3ad7e0efd744472f30b1c7b8f762c606ec91b5663bbf817f2814de2a6",
                        "timestamp": "2021-09-03 13:45:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-03 13:45:33",
    "file_name": "mydoom",
    "analysis": null,
    "articles": [],
    "mitre": []
};