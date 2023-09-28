var threatdata = {
    "name": "Remexi",
    "alias": "Remexi, CACHEMONEY",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Remexi",
        "names": [
            {
                "name": "Remexi"
            },
            {
                "name": "CACHEMONEY"
            }
        ],
        "description": "(Kaspersky) Remexi boasts features that allow it to gather keystrokes, take screenshots of windows of interest (as defined in its configuration), steal credentials, logons and the browser history, and execute remote commands. Encryption consists of XOR with a hardcoded key for its configuration and RC4 with a predefined password for encrypting the victim\u2019s data.\n\nRemexi includes different modules that it deploys in its working directory, including configuration decryption and parsing, launching victim activity logging in a separate module, and seven threads for various espionage and auxiliary functions. The Remexi developers seem to rely on legitimate Microsoft utilities.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/chafer-used-remexi-malware/89538/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0375/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remexi"
        ],
        "uuid": "26363b6b-e756-4ba3-93ab-2513e5352143",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "remexi",
    "analysis": null
};