var threatdata = {
    "name": "LATCHKEY",
    "alias": "LATCHKEY",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2021-12-26",
    "all_data": {
        "tool": "LATCHKEY",
        "names": [
            {
                "name": "LATCHKEY"
            }
        ],
        "description": "(Mandiant) In one intrusion, FIN13 utilized certutil to decode a base64 encoded version of the custom dropper LATCHKEY. LATCHKEY is a PowerShell to EXE (PS2EXE) compiled dropper that base64 decodes and executes the {{PowerSploit}} function Out-Minidump which generates a minidump for the LSASS system process to disk.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/fin13-cybercriminal-mexico"
        ],
        "uuid": "57b52cc9-fe02-4d62-b3a3-7e8c8796ac3c",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "latchkey",
    "analysis": null
};