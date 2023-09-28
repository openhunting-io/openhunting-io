var threatdata = {
    "name": "Cotx RAT",
    "alias": "Cotx RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Credential stealer",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Cotx RAT",
        "names": [
            {
                "name": "Cotx RAT"
            }
        ],
        "description": "(Proofpoint) The RasTls.dll contains the Cotx RAT code. The malware is written in C++ using object-oriented programming. We named it by borrowing the name of the location of its stored configuration. The encrypted configuration is stored in the side-loaded DLL file RasTls.dll in a PE section named \u201c.cotx\u201d. The current encrypted configuration is also stored in the registry key \u201cHKEY_LOCAL_MACHINE\\SOFTWARE\\Intel\\Java\\user\u201d.\n\nThe command and control structure of Cotx RAT is proxy aware. It utilizes wolfSSL for TLS encrypted communication. The initial beacon contains \u201c|\u201d-delimited system information. The data included in the beacon is Zlib compressed and encrypted with AES-192 in CBC mode utilizing the same keys as the configuration. The following values are included:\n\n\u2022 'id' value from 'software\\\\intel\\\\java' subkey\n\u2022 Computer name\n\u2022 'mark' field from configuration\n\u2022 Username\n\u2022 Windows version\n\u2022 Architecture\n\u2022 Possible malware version. '0.9.7' is hardcoded in the analyzed sample\n\u2022 Local IP addresses\n\u2022 First adapter's MAC address\n\u2022 Connection type (https or _proxy)\n\u2022 'password' field from configuration",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/chinese-apt-operation-lagtime-it-targets-government-information-technology"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cotx"
        ],
        "uuid": "071fed27-3361-4b37-a553-8e32c65482c8",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cotx_rat",
    "analysis": null
};