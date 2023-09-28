var threatdata = {
    "name": "Industroyer",
    "alias": "Industroyer, Crash, CrashOverride, CRASHOVERRIDE, Win32/Industroyer",
    "category": "Malware",
    "type": "ICS malware, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Industroyer",
        "names": [
            {
                "name": "Industroyer"
            },
            {
                "name": "Crash"
            },
            {
                "name": "CrashOverride"
            },
            {
                "name": "CRASHOVERRIDE"
            },
            {
                "name": "Win32/Industroyer"
            }
        ],
        "description": "(ESET) Industroyer is a particularly dangerous threat, since it is capable of controlling electricity substation switches and circuit breakers directly. To do so, it uses industrial communication protocols used worldwide in power supply infrastructure, transportation control systems, and other critical infrastructure systems (such as water and gas).\n\nThese switches and circuit breakers are digital equivalents of analogue switches; technically they can be engineered to perform various functions. Thus, the potential impact may range from simply turning off power distribution, cascading failures and more serious damage to equipment. The severity may also vary from one substation to another, as well. Needless to say, disruption of such systems can directly or indirectly affect the functioning of vital services.\n\nIndustroyer\u2019s dangerousness lies in the fact that it uses protocols in the way they were designed to be used. The problem is that these protocols were designed decades ago, and back then industrial systems were meant to be isolated from the outside world. Thus, their communication protocols were not designed with security in mind. That means that the attackers didn\u2019t need to be looking for protocol vulnerabilities; all they needed was to teach the malware \u201cto speak\u201d those protocols.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2017/06/12/industroyer-biggest-threat-industrial-control-systems-since-stuxnet/",
            "https://dragos.com/blog/crashoverride/CrashOverride-01.pdf",
            "https://www.welivesecurity.com/wp-content/uploads/2017/06/Win32_Industroyer.pdf",
            "https://www.welivesecurity.com/2018/10/11/new-telebots-backdoor-linking-industroyer-notpetya/",
            "https://en.wikipedia.org/wiki/Industroyer"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0604/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.industroyer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Industroyer"
        ],
        "uuid": "1b2b82e5-fac6-4864-bdca-2a55695dbed4",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "industroyer",
    "analysis": null
};