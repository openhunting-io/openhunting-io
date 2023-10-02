var threatdata = {
    "name": "Remcom",
    "alias": "Remcom, RemoteCommandExecution",
    "category": "Tools",
    "type": "Backdoor, Remote command",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Remcom",
        "names": [
            {
                "name": "Remcom"
            },
            {
                "name": "RemoteCommandExecution"
            }
        ],
        "description": "RemCom is an open-source, redistributable utility providing the same remote management functions. It achieved a level of notoriety after adversaries used it to move laterally in their attack on the Democratic National Committee in 2016. However, it\u2019s also included in several legitimate software packages. By default, RemCom sends RemComSvc.exe to a remote computer, which then uses the named pipe \\\\.\\pipe\\remcom_comunication (misspelling and all) in the place of {{PsExec}}\u2019s named pipe. In addition, the process\u2019s internal name has a value of remcom.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Remote command"
        ],
        "information": [
            "https://redcanary.com/blog/threat-hunting-psexec-lateral-movement/",
            "https://doublepulsar.com/second-zerologon-attacker-seen-exploiting-internet-honeypot-c7fb074451ef"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remcom"
        ],
        "uuid": "36ef119d-9261-4c84-ade0-694c3c86428e",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "remcom",
    "analysis": null,
    "articles": [],
    "mitre": []
};