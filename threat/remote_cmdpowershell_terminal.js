var threatdata = {
    "name": "Remote CMD/PowerShell terminal",
    "alias": "Remote CMD/PowerShell terminal",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Remote CMD/PowerShell terminal",
        "names": [
            {
                "name": "Remote CMD/PowerShell terminal"
            }
        ],
        "description": "(Kaspersky) The malware was first seen packed with VMProtect; when unpacked the sample didn\u2019t show any similarities with previously known malware. All the strings and settings were encrypted and obfuscated. Functionality was identified that enables HTTP communication with the C&C server and invokes \u201cprocesscreate\u201d based on parameters received as a response.\n\nThe configuration and strings are encrypted using 3DES and Base64 encoding. Data sent to the C&C server is also encrypted using 3DES and Base64. Different keys are used for local and network encryption.\n\nThe malware starts communicating with the C&C server by sending basic information about the infected machine. The C&C server then replies with the encrypted serialized configuration.\n\nThe malware basically provides a remote CMD/PowerShell terminal for the attackers, enabling them to execute scripts/commands and receive the results via HTTP requests.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/operation-parliament-who-is-doing-what/85237/"
        ],
        "uuid": "d67dfeb0-ad1f-48f7-ac1e-8d932318b044",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "remote_cmdpowershell_terminal",
    "analysis": null
};