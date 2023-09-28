var threatdata = {
    "name": "DNSpionage",
    "alias": "DNSpionage, Agent Drable, AgentDrable",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "DNSpionage",
        "names": [
            {
                "name": "DNSpionage"
            },
            {
                "name": "Agent Drable"
            },
            {
                "name": "AgentDrable"
            }
        ],
        "description": "(Talos) Based on this actor's infrastructure and TTPs, we haven't been able to connect them with any other campaign or actor that's been observed recently. This particular campaign utilizes two fake, malicious websites containing job postings that are used to compromise targets via malicious Microsoft Office documents with embedded macros. The malware utilized by this actor, which we are calling 'DNSpionage,' supports HTTP and DNS communication with the attackers.\n\nIn a separate campaign, the attackers used the same IP to redirect the DNS of legitimate .gov and private company domains. During each DNS compromise, the actor carefully generated Let's Encrypt certificates for the redirected domains. These certificates provide X.509 certificates for TLS free of charge to the user. We don't know at this time if the DNS redirections were successful.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html",
            "https://www.us-cert.gov/ncas/alerts/AA19-024A",
            "https://blog-cert.opmd.fr/dnspionage-focus-on-internal-actions/",
            "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/",
            "https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html",
            "https://www.lastline.com/labsblog/threat-actor-cold-river-network-traffic-analysis-and-a-deep-dive-on-agent-drable/",
            "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dnspionage"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DNSpionage"
        ],
        "uuid": "3b9f0a41-e890-4c2e-aacb-fab6def66f87",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dnspionage",
    "analysis": null
};