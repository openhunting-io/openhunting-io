var threatdata = {
    "name": "GreyEnergy",
    "alias": "GreyEnergy",
    "category": "Malware",
    "type": "ICS malware, Backdoor, Downloader, Tunneling",
    "modified": "2020-06-13",
    "all_data": {
        "tool": "GreyEnergy",
        "names": [
            {
                "name": "GreyEnergy"
            }
        ],
        "description": "(ESET) This malware requires administrator privileges, which must already have been obtained before this stage is reached. According to our research, the GreyEnergy actors deploy this backdoor mainly on two types of endpoints: servers with high uptime, and workstations used to control ICS environments.\n\nTo make communication with command and control (C&C) servers stealthier, the malicious actors may deploy additional software on internal servers in the compromised network, so each server would act as a proxy. Such a proxy C&C redirects requests from infected nodes inside the network to an external C&C server on the internet. This way, it might be less suspicious to a defender who notices that multiple computers are \u201ctalking\u201d to an internal server, rather than to a remote server. This technique can be also used by attackers to control the malware in different segments of a compromised network. A similar technique using internal servers as C&C proxies was used by the Duqu 2.0 APT.\n\nIf an affected organization has public-facing web servers connected to an internal network, the attackers may deploy \u201cbackup\u201d backdoors onto these servers. These backdoors are used to regain access to the network in the event that the main backdoors are detected and removed.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Backdoor",
            "Downloader",
            "Tunneling"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/10/ESET_GreyEnergy.pdf",
            "https://www.eset.com/int/greyenergy-exposed/",
            "https://www.nozominetworks.com/2019/02/12/blog/greyenergy-malware-research-paper-maldoc-to-backdoor/",
            "https://securelist.com/greyenergys-overlap-with-zebrocy/89506/",
            "https://github.com/NozomiNetworks/greyenergy-unpacker"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0342/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grey_energy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:greyenergy"
        ],
        "uuid": "a0fb90eb-ee97-4be7-a141-64b5d0a2d223",
        "last-card-change": "2020-06-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "greyenergy",
    "analysis": null
};