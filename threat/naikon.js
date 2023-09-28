var threatdata = {
    "name": "Naikon",
    "alias": "Naikon, XsFunction, Sacto",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Naikon",
        "names": [
            {
                "name": "Naikon"
            },
            {
                "name": "XsFunction"
            },
            {
                "name": "Sacto"
            }
        ],
        "description": "(Kaspersky) The Naikon tool of choice generates a special, small, encrypted file which is 8,000 bytes in size, containing code to be injected into the browser along with configuration data. With the help of a start-up module, this whole file is injected into the browser memory and decrypts the configuration block containing the following:\n\n\u2022 C&C server\n\u2022 Ports and path to the server\n\u2022 User-agent string\n\u2022 Filenames and paths to its components\n\u2022 Hash sums of the user API functions\n\nThe same code then downloads its main body from the C&C server using the SSL protocol, loads it independently from the operating system functions and, without saving it to the hard drive, hands over control to the XS02 function. All functionality is handled in memory.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/the-naikon-apt/69953/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.naikon"
        ],
        "uuid": "52cf9ec4-416a-49b4-9d0c-ade91208018e",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "naikon",
    "analysis": null
};