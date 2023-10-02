var threatdata = {
    "name": "FiXS",
    "alias": "FiXS",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2023-04-25",
    "all_data": {
        "tool": "FiXS",
        "names": [
            {
                "name": "FiXS"
            }
        ],
        "description": "(Metabase Q) Metabase Q recently identified a new malware that is currently affecting Mexican banks. Due to it\u2019s code name in the binary, we dubbed it FiXS.\n\nIt is not clear yet what the vector for the initial infection is. However, since FiXS utilizes an external keyboard (similar to Ploutus), we anticipate that it follows a similar methodology. In the case of Ploutus, a person with access to these teller machines physically connects an external keyboard to to the ATM for the attack to commence.\n\nSo far, we have identified some key relevant characteristics of FiXS malware:\n\u2022 It instructs the ATM to dispense money 30 minutes after the last ATM reboot\n\u2022 It is hidden inside another not-malicious-looking program\n\u2022 It is vendor-agnostic targeting any ATM that supports CEN XFS\n\u2022 It interacts with the crooks via external keyboard\n\u2022 It waits for the Cassettes to be loaded to start dispensing\n\u2022 It contains Russian metadata",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://www.metabaseq.com/fixs-atms-malware/"
        ],
        "uuid": "7b095e59-1cfa-4d33-9ebe-c6b5df3d8fe9",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fixs",
    "analysis": null,
    "articles": [],
    "mitre": []
};