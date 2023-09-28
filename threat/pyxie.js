var threatdata = {
    "name": "PyXie",
    "alias": "PyXie, PyXie RAT",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "PyXie",
        "names": [
            {
                "name": "PyXie"
            },
            {
                "name": "PyXie RAT"
            }
        ],
        "description": "(BlackBerry) PyXie has been deployed in an ongoing campaign that targets a wide range of industries. It has been seen in conjunction with {{Cobalt Strike}} beacons as well as a downloader that has similarities to the {{Shifu}} banking Trojan. Analysts have observed evidence of the threat actors attempting to deliver ransomware to the healthcare and education industries with PyXie.\n\nKey highlights of the PyXie campaign include:\n\u2022 Legitimate LogMeIn and Google binaries used to sideload payloads.\n\u2022 A Trojanized Tetris app to load and execute Cobalt Strike stagers from internal network shares.\n\u2022 Use of a downloader with similarities to Shifu named 'Cobalt Mode'.\n\u2022 Use of {{SharpHound}} to collect active directory information from victims.\n\u2022 A custom compiled Python interpreter that uses scrambled opcodes to hinder analysis.\n\u2022 Use of a modified RC4 algorithm to encrypt payloads with a unique key per infected host.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2019/12/meet-pyxie-a-nefarious-new-python-rat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pyxie"
        ],
        "uuid": "4e675551-3b29-4764-819b-0b8b68e3dcb4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pyxie",
    "analysis": null
};