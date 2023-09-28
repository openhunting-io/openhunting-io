var threatdata = {
    "name": "BlackCoffee",
    "alias": "BlackCoffee, PNGRAT, ZoxPNG, gresim",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "BlackCoffee",
        "names": [
            {
                "name": "BlackCoffee"
            },
            {
                "name": "PNGRAT"
            },
            {
                "name": "ZoxPNG"
            },
            {
                "name": "gresim"
            }
        ],
        "description": "(Novetta) ZoxPNG is a very simple RAT that uses the PNG image file format as the carrier for data going to and from the C2 server. ZoxPNG supports 13 commands natively. In addition, ZoxPNG has the ability to load and execute arbitrary code from the C2 server providing an almost unlimited feature set. For instance, ZoxPNG provides no functionality for key logging, screen grabbing or file execution. If an attacker required such functionality, the attacker would construct a simple shell-code binary which the ZoxPNG binary could execute thereby expanding the feature set of the Trojan.\nZoxPNG does not contain any configuration information. The attacker using ZoxPNG must specify the C2 server address as a command line argument.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.novetta.com/wp-content/uploads/2014/11/ZoxPNG.pdf",
            "https://www.fireeye.com/current-threats/apt-groups/rpt-apt17.html",
            "https://www.zdnet.com/article/fireeye-microsoft-wipe-technet-clean-of-malware-hidden-by-hackers/",
            "http://malware-log.hatenablog.com/entry/2015/05/18/000000_1"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0069/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackcoffee"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BLACKCOFFEE"
        ],
        "uuid": "12cdfcf1-3407-4838-9e6f-aae75fd69dac",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "blackcoffee",
    "analysis": null
};