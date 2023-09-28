var threatdata = {
    "name": "China Chopper",
    "alias": "China Chopper, CHINACHOPPER, SinoChopper",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "China Chopper",
        "names": [
            {
                "name": "China Chopper"
            },
            {
                "name": "CHINACHOPPER"
            },
            {
                "name": "SinoChopper"
            }
        ],
        "description": "(Talos) China Chopper is a tool that allows attackers to remotely control the target system that needs to be running a web server application before it can be targeted by the tool. The web shell works on different platforms, but in this case, we focused only on compromised Windows hosts. China Chopper is a tool that has been used by some state-sponsored actors such as Leviathan and Threat Group-3390, but during our investigation we've seen actors with varying skill levels.\n\nIn our research, we discovered both Internet Information Services (IIS) and Apache web servers compromised with China Chopper web shells. We do not have additional data about how the web shell was installed, but there are several web application frameworks such as older versions of Oracle WebLogic or WordPress that may have been targeted with known remote code execution or file inclusion exploits.\n\nChina Chopper provides the actor with a simple GUI that allows them to configure servers to connect to and generate server-side code that must be added to the targeted website code in order to communicate.\n\nThe server-side code is extremely simple and contains, depending on the application platform, just a single line of code. The backdoor supports .NET Active Server Pages or PHP.\n\nWe cannot be sure if the simplicity of the server code was a deliberate decision on the part of the China Chopper developers to make detection more difficult, but using pattern matching on such as short snippet may produce some false positive detections.\n\nThe China Chopper client communicates with affected servers using HTTP POST requests. The only function of the server-side code is to evaluate the request parameter specified during the configuration of the server code in the client GUI. In our example, the expected parameter name is 'test.' The communication over HTTP can be easily spotted in the network packet captures.\n\nChina Chopper contains a remote shell (Virtual Terminal) function that has a first suggested command of 'netstat an|find 'ESTABLISHED.'' and it is very likely that this command will be seen in process creation logs on affected systems.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/08/china-chopper-still-active-9-years-later.html",
            "https://informationonsecurity.blogspot.com/2012/11/china-chopper-webshell.html",
            "https://www.fireeye.com/blog/threat-research/2013/08/breaking-down-the-china-chopper-web-shell-part-i.html",
            "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html",
            "https://en.wikipedia.org/wiki/China_Chopper"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0020/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chinachopper"
        ],
        "uuid": "f712900d-e7eb-4873-93b7-eefd7aba61c2",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "china_chopper",
    "analysis": null
};