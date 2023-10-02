var threatdata = {
    "name": "Metel",
    "alias": "Metel",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Credential stealer, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Metel",
        "names": [
            {
                "name": "Metel"
            }
        ],
        "description": "(Kaspersky) Metel, the Russian word for blizzard, burrows its way into a financial organization using cleverly crafted spear phishing emails laced with malware, or luring victims to sites hosting the {{Niteris EK}}. The malware steals system information including process lists and screenshots, sending it to the attackers who evaluate whether the infected machine is interesting enough load the remainder of the Metel malware package.\n\nThe malware contains more than 30 modules\u2014some homemade, some taken from publicly available sources. The attackers also use legitimate pen-testing tools such as mimikatz, which is freely available and used by analysts to extract plaintext passwords, hashes, PIN codes and Kerberos tickets from the memory of Windows machines.\n\nUsing this stolen data, the attackers are available to pivot internally, stealing credentials until they landed on a domain controller. With the reins of a domain controller, the attackers could extend their reach onto any machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://threatpost.com/spree-of-bank-robberies-show-cybercriminals-borrowing-from-apt-attacks/116173/"
        ],
        "uuid": "a97eaa90-0c9a-4655-a212-01173f31b286",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "metel",
    "analysis": null,
    "articles": [],
    "mitre": []
};