var threatdata = {
    "name": "PyDCrypt",
    "alias": "PyDCrypt",
    "category": "Malware",
    "type": "Remote command, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PyDCrypt",
        "names": [
            {
                "name": "PyDCrypt"
            }
        ],
        "description": "(Check Point) The main goals of PyDCrypt are to infect other computers and to make sure the main payload, {{DCSrv}}, is executed properly. The executable is written in Python and compiled with PyInstaller with encryption, using the --key flag during the build phase. As we mentioned previously, the attackers build a new sample for each infected organization, and hardcode the parameters collected from the victim\u2019s environment.",
        "category": "Malware",
        "type": [
            "Remote command",
            "Loader"
        ],
        "information": [
            "https://research.checkpoint.com/2021/mosesstaff-targeting-israeli-companies/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1032/"
        ],
        "uuid": "6d7303ed-87b7-4c75-89e0-80cbce684a85",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pydcrypt",
    "analysis": null
};