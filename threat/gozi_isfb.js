var threatdata = {
    "name": "Gozi ISFB",
    "alias": "Gozi ISFB, ISFB, Pandemyia",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Botnet",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Gozi ISFB",
        "names": [
            {
                "name": "Gozi ISFB"
            },
            {
                "name": "ISFB"
            },
            {
                "name": "Pandemyia"
            }
        ],
        "description": "2006 {{Gozi}} v1.0, Gozi CRM, CRM, Papras\n2010 Gozi v2.0, Gozi ISFB, ISFB, Pandemyia(*)\n\nIn September 2010, the source code of a particular Gozi CRM dll version was leaked. This led to two main branches: one became known as {{Gozi v2}}, which was merged with Pony and became {{Vawtrak}}/Neverquest.\n\nThe other branch became known as Gozi ISFB, or ISFB in short. Webinject functionality was added to this version.\n\nThere is one panel which often was used in combination with ISFB: {{IAP}}. The panel's login page comes with the title 'Login - IAP'. The body contains 'AUTHORIZATION', 'Name:', 'Password:' and a single button 'Sign in' in a minimal design. Often, the panel is directly accessible by entering the C2 IP address in a browser. But there are ISFB versions which are not directly using IAP. The bot accesses a gate, which is called the '{{DreamBot}}' gate.\n\nISFB often was protected by Rovnix. This led to a further complication in the naming scheme - many companies started to call ISFB Rovnix. Because the signatures started to look for Rovnix, other trojans protected by Rovnix (in particular ReactorBot and Rerdom) sometimes got wrongly labelled.\n\nIn April 2016 a combination of Gozi ISFB and {{Nymaim}} was detected. This breed became known as {{GozNym}}. The merge uses a shellcode-like version of Gozi ISFB, that needs Nymaim to run. The C2 communication is performed by Nymaim.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.prodefence.org/malware-analysis-gozi-ifsb-bank-trojan-aka-ursnif/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/ursnif-emotet-dridex-and-bitpaymer-gangs-linked-by-a-similar-loader/",
            "https://blog.talosintelligence.com/2019/01/amp-tracks-ursnif.html",
            "https://blog.minerva-labs.com/attackers-insert-themselves-into-the-email-conversation-to-spread-malware",
            "https://lokalhost.pl/gozi_tree.txt",
            "https://isc.sans.edu/forums/diary/Reviewing+the+spam+filters+Malspam+pushing+GoziISFB/23245",
            "http://blog.talosintelligence.com/2018/03/gozi-isfb-remains-active-in-2018.html",
            "https://www.cylance.com/en_us/blog/threat-spotlight-ursnif-infostealer-malware.html",
            "https://www.vkremez.com/2018/08/lets-learn-in-depth-reversing-of-recent.html",
            "https://www.rsa.com/de-de/resources/pandemiya-emerges-new-malware-alternative-zeus-based",
            "https://blog.malwarebytes.com/threat-analysis/2017/04/binary-options-malvertising-campaign-drops-isfb-banking-trojan/",
            "https://www.cyberbit.com/blog/endpoint-security/new-ursnif-malware-variant/",
            "https://journal.cecyf.fr/ojs/index.php/cybin/article/view/15",
            "https://0ffset.net/reverse-engineering/analyzing-com-mechanisms-in-malware/",
            "https://www.fireeye.com/blog/threat-research/2017/11/ursnif-variant-malicious-tls-callback-technique.html",
            "https://0ffset.net/reverse-engineering/malware-analysis/analysing-isfb-loader/",
            "https://arielkoren.com/blog/2016/11/01/ursnif-malware-deep-technical-dive/",
            "https://github.com/gbrindisi/malware/tree/master/windows/gozi-isfb",
            "https://blog.yoroi.company/research/ursnif-the-latest-evolution-of-the-most-popular-banking-malware/",
            "https://www.cybereason.com/blog/new-ursnif-variant-targets-japan-packed-with-new-features",
            "https://www.telekom.com/en/blog/group/article/lolsnif-tracking-another-ursnif-based-targeted-campaign-600062"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0386/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.isfb"
        ],
        "uuid": "9bbd1a95-2295-44d3-9bbf-9db87a98adb3",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gozi_isfb",
    "analysis": null
};