var threatdata = {
    "name": "logon.dll",
    "alias": "logon.dll",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-18",
    "all_data": {
        "tool": "logon.dll",
        "names": [
            {
                "name": "logon.dll"
            }
        ],
        "description": "(Avast) Both DLLs, {{sqllauncher.dll}} and logon.dll, are primarily used as backdoors. These are installed as services by the aforementioned batch file. They both create a log file under the path: %COMMON_DOCUMENT%\\WZ9JuN00.tmp aggregating errors during the backdoor\u2019s runtime. Each entry contains an error code, an error message, and a timestamp formatted as \u201c[yyyy-mm-dd hh-mm-ss] %error code% %message%\u201d.\n\nIf the infected device can\u2019t connect to the C&C server, the malware attempts to determine whether the traffic is routed through a proxy. This information may be retrieved either from %WINDOWS%\\debug\\netlogon.cfg or from the TCP table. After successfully connecting to the C&C server, a secure communication channel (Schannel) is established and telemetry (OS version, username) is sent to the C&C server.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia/"
        ],
        "uuid": "9b5b72b0-de00-47a7-8426-0afee097cae3",
        "last-card-change": "2020-05-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "logon.dll",
    "analysis": null,
    "articles": [],
    "mitre": []
};