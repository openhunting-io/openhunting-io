var threatdata = {
    "name": "VEILEDSIGNAL",
    "alias": "VEILEDSIGNAL",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "VEILEDSIGNAL",
        "names": [
            {
                "name": "VEILEDSIGNAL"
            }
        ],
        "description": "(Mandiant) {{SIGFLIP}} and {{DAVESHELL}} extract and execute a modular backdoor, VEILEDSIGNAL, and two corresponding modules. VEILEDSIGNAL relies on the two extracted modules for process injection and communications with the Command and Control (C2) server.\n\nVEILEDSIGNAL and the accompanying two components provide the following functionality:\n\n\u2022 The VEILEDSIGNAL backdoor supports three commands: send implant data, execute shellcode, and terminate itself.\n\u2022 The process injection module injects the C2 module in the first found process instance of Chrome, Firefox, or Edge. It also monitors the named pipe and reinjects the communication module if necessary.\n\u2022 The C2 module creates a Windows named pipe and listens for incoming communications, which it then sends to the C2 server encrypted with AES-256 in Galois Counter Mode (GCM).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/3cx-software-supply-chain-compromise"
        ],
        "uuid": "a459f3f3-ccd1-40f9-96b3-f15763d2051e",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "veiledsignal",
    "analysis": null
};