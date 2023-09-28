var threatdata = {
    "name": "PSLogger",
    "alias": "PSLogger, ECCENTRICBANDWAGON",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Credential stealer, Info stealer",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "PSLogger",
        "names": [
            {
                "name": "PSLogger"
            },
            {
                "name": "ECCENTRICBANDWAGON"
            }
        ],
        "description": "The keylogging routine uses the GetKeyState and GetAsyncKeyState APIs and is not sophisticated, and logged keystroke and clipboard context is saved in plaintext.\n\nThe malware\u2019s other functionality is to capture the desktop, compressing the images and saving them in the same directory.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://norfolkinfosec.com/a-lazarus-keylogger-pslogger/",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-239a"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pslogger"
        ],
        "uuid": "2744d3b4-396f-45ab-8d05-a2d08082c97f",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pslogger",
    "analysis": null
};