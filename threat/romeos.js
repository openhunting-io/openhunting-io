var threatdata = {
    "name": "Romeos",
    "alias": "Romeos, RomeoCore, Romeo-CoreOne, R-C1",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Romeos",
        "names": [
            {
                "name": "Romeos"
            },
            {
                "name": "RomeoCore"
            },
            {
                "name": "Romeo-CoreOne"
            },
            {
                "name": "R-C1"
            }
        ],
        "description": "(Novetta) A large portion of the Lazarus Group\u2019s RAT collection stems from a common core, Romeo-CoreOne (R-C1); the individual families that use R-C1 need only provide the scaffolding to support the R-C1 code. At a minimum, each family that is built upon R-C1 must provide an interface to their specific communications abstraction and a method by which to activate the R-C1 functionality.\n\nThe general flow of execution for families that use R-C1 is as follows:\n1. Dynamically load API functions\n2. Perform any configuration management tasks that the family may require (e.g., loading the configuration, opening listening ports, establishing persistence)\n3. Establish a communication channel with controlling endpoint\n4. Pass off the channel to the R-C1 component\n\nThere are five known families that are based on, or that incorporate, R-C1 (Figure 2-1): {{RomeoAlfa}}, {{RomeoBravo}}, {{RomeoCharlie}}, {{RomeoHotel}}, and {{RomeoNovember}}. In addition to the four families having commonality through the use of R-C1, two of the families, {{RomeoAlfa}} and {{RomeoHotel}}, share the distinctive fake TLS communication scheme and use the Caracachs encryption scheme as their underlying communication encryption. {{RomeoBravo}}, {{RomeoCharlie}}, and {{RomeoNovember}} use DNSCALC-style encoding for communication encryption.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.romeos"
        ],
        "uuid": "f9e598ab-266d-4460-9d22-d945de9498d3",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeos",
    "analysis": null,
    "articles": [],
    "mitre": []
};