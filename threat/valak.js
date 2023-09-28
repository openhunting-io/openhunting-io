var threatdata = {
    "name": "Valak",
    "alias": "Valak, Valek",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Valak",
        "names": [
            {
                "name": "Valak"
            },
            {
                "name": "Valek"
            }
        ],
        "description": "(Cybereason) The Valak Malware: The Valak Malware is a sophisticated malware previously classified as a malware loader. Though it was first observed in late 2019, the Cybereason Nocturnus team has investigated a series of dramatic changes, an evolution of over 30 different versions in less than six months. This research shows that Valak is more than just a loader for other malware, and can also be used independently as an information stealer to target individuals and enterprises.\nTargeting Enterprises: More recent versions of Valak target Microsoft Exchange servers to steal enterprise mailing information and passwords along with the enterprise certificate. This has the potential to access critical enterprise accounts, causing damage to organizations, brand degradation, and ultimately a loss of consumer trust.\nTargets US and Germany: This campaign is specifically targeting enterprises in the US and Germany.\nWith a Rich Modular Architecture: Valak\u2019s basic capabilities are extended with a number of plugin components for reconnaissance and information stealing.\nUsing Fast Development Cycles: Valak has evolved from a loader to a sophisticated, multi-stage modular malware that collects plugins from its C2 server to expand its capabilities. The Cybereason Nocturnus team has observed over 30 different versions in about 6 months.\nDesigned for Stealth: Valak is a stealthy malware that uses advanced evasive techniques like ADS and hiding components in the registry. In addition, over time the developers of Valak chose to abandon using PowerShell, which can be detected and prevented by modern security products.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/valak-more-than-meets-the-eye",
            "https://labs.sentinelone.com/valak-malware-and-the-connection-to-gozi-loader-confcrew/",
            "https://unit42.paloaltonetworks.com/valak-evolution/",
            "https://medium.com/@prsecurity_/casual-analysis-of-valak-c2-3497fdb79bf7",
            "https://security-soup.net/analysis-of-valak-maldoc/",
            "https://blog.talosintelligence.com/2020/07/valak-emerges.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0476/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.valak"
        ],
        "uuid": "5ef667f0-3718-4a30-b4a8-a10d4ee16c70",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "valak",
    "analysis": null
};