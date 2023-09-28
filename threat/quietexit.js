var threatdata = {
    "name": "QUIETEXIT",
    "alias": "QUIETEXIT",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "QUIETEXIT",
        "names": [
            {
                "name": "QUIETEXIT"
            }
        ],
        "description": "(Mandiant) QUIETEXIT works as if the traditional client-server roles in an SSH connection were reversed. Once the client, running on a compromised system, establishes a TCP connection to a server, it performs the SSH server role. The QUIETEXIT component running on the threat actor\u2019s infrastructure initiates the SSH connection and sends a password. Once the backdoor establishes a connection, the threat actor can use any of the options available to an SSH client, including proxying traffic via SOCKS. QUIETEXIT has no persistence mechanism; however, we have observed UNC3524 install a run command (rc) as well as hijack legitimate application-specific startup scripts to enable the backdoor to execute on system startup.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.mandiant.com/resources/unc3524-eye-spy-email"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.quietexit"
        ],
        "uuid": "f7540533-ada8-45ac-915d-1c550090338a",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "quietexit",
    "analysis": null
};