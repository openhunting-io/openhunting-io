var threatdata = {
    "name": "Calypso RAT",
    "alias": "Calypso RAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Calypso RAT",
        "names": [
            {
                "name": "Calypso RAT"
            }
        ],
        "description": "(Positive Technologies) The dropper extracts the payload as an installation BAT script and CAB archive, and saves it to disk. The payload inside the dropper has a magic header that the dropper searches for.\nThe dropper encrypts and decrypts data with a self-developed algorithm that uses CRC32 as a pseudorandom number generator (PRNG). The algorithm performs arithmetic (addition and subtraction) between the generated data and the data that needs to be encrypted or decrypted.\nNow decrypted, the payload is saved to disk at %ALLUSERSPROFILE;\\TMP_%d%d, where the last two numbers are replaced by random numbers returned by the rand() function. Depending on the configuration, the CAB archive contains one of three possibilities: a DLL and encrypted shellcode, a DLL with encoded loader in the resources, or an EXE file. We were unable to detect any instances of the last variant.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.ptsecurity.com/ww-en/analytics/calypso-apt-2019/"
        ],
        "uuid": "f2340394-4915-485e-b3f8-5aeafdb7794c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "calypso_rat",
    "analysis": null
};