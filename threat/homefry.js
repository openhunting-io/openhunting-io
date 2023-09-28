var threatdata = {
    "name": "HOMEFRY",
    "alias": "HOMEFRY",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "HOMEFRY",
        "names": [
            {
                "name": "HOMEFRY"
            }
        ],
        "description": "(FireEye) HOMEFRY: a 64-bit Windows password dumper/cracker that has previously been used in conjunction with {{AIRBREAK}} and {{BADFLICK}} backdoors. Some strings are obfuscated with XOR x56. The malware accepts up to two arguments at the command line: one to display cleartext credentials for each login session, and a second to display cleartext credentials, NTLM hashes, and malware version for each login session.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0232/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.homefry"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HOMEFRY"
        ],
        "uuid": "422daad9-87c7-42e2-84a4-e634f311d1ba",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "homefry",
    "analysis": null
};