var threatdata = {
    "name": "BIOLOAD",
    "alias": "BIOLOAD",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "BIOLOAD",
        "names": [
            {
                "name": "BIOLOAD"
            }
        ],
        "description": "(Fortinet) The loader file name is WinBio.dll (note the uppercase characters) and is placed by the attacker alongside the executable in the same folder ('WinBioPlugIns'), thus leveraging the default DLL search order. Because the file path is under %WINDIR%, it means that in order to plant it the attacker needed to have elevated privileges on the victim\u2019s machine such as administrator or a SYSTEM account.\n\nLike {{Boostwrite}}, this loader was also developed in C++. It exports only a single function which is the one FaceFodUninstaller.exe imports.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/bioload-fin7-boostwrite-lost-twin.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bioload"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BIOLOAD"
        ],
        "uuid": "fa66fc13-61f7-44c0-869d-8c5f8509b1bb",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bioload",
    "analysis": null,
    "articles": [],
    "mitre": []
};