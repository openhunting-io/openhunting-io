var threatdata = {
    "name": "Bvp47",
    "alias": "Bvp47",
    "category": "Malware",
    "type": "Backdoor, Rootkit",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Bvp47",
        "names": [
            {
                "name": "Bvp47"
            }
        ],
        "description": "(Pangu Lab) In a certain month of 2013, during an in-depth forensic investigation of a host in a key domestic department, researchers from the Pangu Lab extracted a set of advanced backdoors on the Linux platform, which used advanced covert channel behavior based on TCP SYN packets, code obfuscation, system hiding, and self-destruction design. In case of failure to fully decrypt, It is further found that this backdoor needs the check code bound to the host to run normally. Then the researchers cracked the check code and successfully ran the backdoor. Judging from some behavioral functions, this is a top-tier APT backdoor, but further investigation requires the attacker's asymmetric encrypted private key to activate the remote control function. Based on the most common string 'Bvp' in the sample and the numerical value 0x47 used in the encryption algorithm, the team named the corresponding malicious code 'Bvp47' at the time.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit"
        ],
        "information": [
            "https://www.pangulab.cn/en/post/the_bvp47_a_top-tier_backdoor_of_us_nsa_equation_group/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.bvp47"
        ],
        "uuid": "d0d15a43-82da-4a66-8a73-10380794926b",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bvp47",
    "analysis": null
};