var threatdata = {
    "name": "Andaratm",
    "alias": "Andaratm",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Andaratm",
        "names": [
            {
                "name": "Andaratm"
            }
        ],
        "description": "(AhnLab) Andaratm malware was used in attacks on military agencies in 2016, on ATMs and financial institutions in 2017, and on cryptocurrencyexchanges in 2018. 18 variants have been identified as of May 2018.The codesof Andaratm include strings such as '%s\\cmd.exe /c echo | %s > %s'and '%s*****%s.'\n\nWhen Andaratm is executed, it acquires information, such as the computer name and username, attempts to connect to the designated C2 server, and receives and executes the command.\n\nThe encryption method of Andaratm is similar to the methods generally used by malware.\n\nAndaratm only executes simple commands, such as downloading files, uploading files, and running cmd.exe files.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://global.ahnlab.com/global/upload/download/techreport/%5BAhnLab%5DAndariel_a_Subgroup_of_Lazarus%20(3).pdf"
        ],
        "uuid": "e10666f4-2aa9-4405-bfcf-20ea4827fef2",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "andaratm",
    "analysis": null
};