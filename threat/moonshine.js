var threatdata = {
    "name": "MOONSHINE",
    "alias": "MOONSHINE",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "MOONSHINE",
        "names": [
            {
                "name": "MOONSHINE"
            }
        ],
        "description": "(Citizen Lab) MOONSHINE is designed for stealthy rootless operation, by exploiting popular legitimate Android apps with built-in browsers that request sensitive permissions. MOONSHINE obtains persistence by overwriting an infrequently used shared library (.so) file in one of these apps with itself. When a targeted user opens the legitimate app after exploitation, the app loads the shared library into memory, which causes the spyware to activate. While code in subsequent stages of MOONSHINE suggests that it can be deployed against four apps (Facebook, Facebook Messenger, WeChat, and QQ), the exploit site we tested against did not deliver any exploits for WeChat or QQ User-Agent headers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/"
        ],
        "uuid": "2ea4f916-78e7-4c96-b24d-72a28372ea2c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "moonshine",
    "analysis": null,
    "articles": [],
    "mitre": []
};