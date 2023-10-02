var threatdata = {
    "name": "LightBasin",
    "alias": "LightBasin, UNC1945, TH-239",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-03",
    "all_data": {
        "actor": "LightBasin",
        "names": [
            {
                "name": "LightBasin",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "UNC1945",
                "name-giver": "FireEye"
            },
            {
                "name": "TH-239",
                "name-giver": "Yoroi"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(CrowdStrike) CrowdStrike Services, CrowdStrike Intelligence and Falcon OverWatch\u2122 have investigated multiple intrusions within the telecommunications sector from a sophisticated actor tracked as the LightBasin activity cluster, also publicly known as UNC1945. Active since at least 2016, LightBasin employs significant operational security (OPSEC) measures, primarily establishing implants across Linux and Solaris servers, with a particular focus on specific telecommunications systems,1 and only interacting with Windows systems as needed. LightBasin\u2019s focus on Linux and Solaris systems is likely due to the combination of critical telecommunications infrastructure running on those operating systems, in addition to the comparatively lax security measures and monitoring solutions on Linux/Solaris systems that are typically in place on Windows operating systems within an organization.\n\nLightBasin managed to initially compromise one of the telecommunication companies in a recent CrowdStrike Services investigation by leveraging external DNS (eDNS) servers \u2014 which are part of the General Packet Radio Service (GPRS) network and play a role in roaming between different mobile operators \u2014 to connect directly to and from other compromised telecommunication companies\u2019 GPRS networks via SSH and through previously established implants. CrowdStrike identified evidence of at least 13 telecommunication companies across the world compromised by LightBasin dating back to at least 2019.\n\nThere is some overlap with {{UNC2891}}.",
        "observed-sectors": [
            "Financial",
            "IT",
            "Telecommunications"
        ],
        "tools": [
            "CordScan",
            "EVILSUN",
            "FRP",
            "Impacket",
            "LEMONSTICK",
            "LOGBLEACH",
            "OKSOLO",
            "OPENSHACKLE",
            "ProxyChains",
            "PupyRAT",
            "SIGTRANslator",
            "SLAPSTICK",
            "SMBExec",
            "STEELCORGI",
            "Tiny SHell",
            "Living off the Land"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/an-analysis-of-lightbasin-telecommunications-attacks/",
            "https://www.mandiant.com/resources/live-off-the-land-an-overview-of-unc1945"
        ],
        "uuid": "19246de9-ed86-49fc-9153-49f0bbe20feb",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lightbasin",
    "analysis": null,
    "articles": [],
    "mitre": []
};