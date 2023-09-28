var threatdata = {
    "name": "More_eggs",
    "alias": "More_eggs, SpicyOmelette, Terra Loader, SKID",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2022-05-03",
    "all_data": {
        "tool": "More_eggs",
        "names": [
            {
                "name": "More_eggs"
            },
            {
                "name": "SpicyOmelette"
            },
            {
                "name": "Terra Loader"
            },
            {
                "name": "SKID"
            }
        ],
        "description": "More_eggs is a JavaScript backdoor used by the Cobalt group. It attempts to connect to its C&C server and retrieve tasks to carry out, some of which are:\n- d&exec = download and execute PE file\n- gtfo = delete files/startup entries and terminate\n- more_eggs = download additional/new scripts\n- more_onion = run new script and terminate current script\n- more_power = run command shell commands",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses/",
            "https://reaqta.com/2018/03/spear-phishing-campaign-leveraging-msxsl/",
            "https://www.secureworks.com/blog/cybercriminals-increasingly-trying-to-ensnare-the-big-financial-fish",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/cobalt-spam-runs-use-macros-cve-2017-8759-exploit/",
            "https://blog.talosintelligence.com/2018/07/multiple-cobalt-personality-disorder.html",
            "https://www.proofpoint.com/us/threat-insight/post/fake-jobs-campaigns-delivering-moreeggs-backdoor-fake-job-offers",
            "https://asert.arbornetworks.com/double-the-infection-double-the-fun/",
            "https://quointelligence.eu/2018/11/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using/",
            "https://www.esentire.com/blog/hackers-spearphish-corporate-hiring-managers-with-poisoned-resumes-infecting-them-with-the-more-eggs-malware"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0284/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.more_eggs"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:More_eggs"
        ],
        "uuid": "a23df665-46df-4134-8375-0b05c14f617b",
        "last-card-change": "2022-05-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "more_eggs",
    "analysis": null
};