var threatdata = {
    "name": "Cmstar",
    "alias": "Cmstar, meciv",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Cmstar",
        "names": [
            {
                "name": "Cmstar"
            },
            {
                "name": "meciv"
            }
        ],
        "description": "(Palo Alto) This specific downloader, Cmstar, is associated with the Lurid downloader also known as \u2018{{Enfal}}\u2019. Cmstar was named for the log message \u2018CM**\u2019 used by the downloader.\n\nThe Cmstar downloader starts by manually building its import address table (IAT), much like shellcode would; however, it uses a rather unique technique. Instead of finding API function names based on their hashed values, this malware enumerates libraries\u2019 export address table (EAT) and searches for the name of the API function the payload needs to load by using a character to offset array. The payload pairs several comma-separated lists of characters with comma-separated lists of numbers. Each list of characters consists of the set found within the API function name the payload seeks to add to its IAT, while the corresponding list of numbers specifies the offset in the function name where those characters should be placed.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/cmstar-downloader-lurid-and-enfals-new-cousin/",
            "https://researchcenter.paloaltonetworks.com/2016/03/digital-quartermaster-scenario-demonstrated-in-attacks-against-the-mongolian-government/",
            "https://researchcenter.paloaltonetworks.com/2017/09/unit42-threat-actors-target-government-belarus-using-cmstar-trojan",
            "https://www.votiro.com/single-post/2018/02/13/New-campaign-targeting-Ukrainians-holds-secrets-in-documents-properties"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cmstar"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cmstar"
        ],
        "uuid": "fc200bd2-4771-4e16-8d49-e231c20fdf63",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cmstar",
    "analysis": null,
    "articles": [],
    "mitre": []
};