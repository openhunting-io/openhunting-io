var threatdata = {
    "name": "Powersing",
    "alias": "Powersing",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-08-27",
    "all_data": {
        "tool": "Powersing",
        "names": [
            {
                "name": "Powersing"
            }
        ],
        "description": "(Kaspersky) \u2022 Stage 0\u2019s role is to extract and execute the next element of the chain, as well as a decoy document embedded inside the LNK file to display to the user. This creates the illusion of having clicked on a real document and ensures the victim doesn\u2019t get suspicious.\n\u2022 Stage 1 is a PowerShell script containing C# assembly designed to connect to a dead drop resolver (more on this in the next paragraph) and obtain cryptographic material used to decode the last stage of the chain by extracting a \u201cDLL\u201d file from the shortcut and locating a Base64-encoded list of URLs at a fixed offset. This establishes persistence by creating a shortcut (using the dropped icon) in the Windows startup folder pointing to the VBE startup script.\n\u2022 Finally, on stage 2, the actual malware implant used to take control of the victim\u2019s machine. It connects to one of the dead drop resolvers to get the address of the real C&C server and enters a loop that looks for orders every few seconds.\n\u2022 Upon system restart, the VBE startup script \u2013 which closely resembles stage 0 \u2013 is automatically executed, once again leading all the way to Powersing stage 2.\n\nCommunications with the C&C server involve the exchange of JSON-encoded objects. Powersing only has two tasks:\n\n\u2022 Capture periodic screenshots from the victim\u2019s machine, which are immediately sent to the C&C server (two built-in commands allow operators to change screenshot quality and periodicity)\n\u2022 Execute arbitrary Powershell scripts provided by the C&C",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/"
        ],
        "uuid": "f2cc1a5e-e273-4b56-b1e1-d4003e8d2f66",
        "last-card-change": "2020-08-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powersing",
    "analysis": null,
    "articles": [],
    "mitre": []
};