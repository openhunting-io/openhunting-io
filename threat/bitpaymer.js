var threatdata = {
    "name": "BitPaymer",
    "alias": "BitPaymer, FriedEx, IEncrypt, wp_encrypt",
    "category": "Malware",
    "type": "Ransomware, Credential stealer, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BitPaymer",
        "names": [
            {
                "name": "BitPaymer"
            },
            {
                "name": "FriedEx"
            },
            {
                "name": "IEncrypt"
            },
            {
                "name": "wp_encrypt"
            }
        ],
        "description": "(IBM) The submitted file is a custom packed BitPaymer ransomware loader that is designed to run on Windows 7 or above or any version of Windows server. The loader uses Alternate Data Streams to hide its tracks and service hijacking to maintain persistence. The loader uses RC4 to decrypt its configuration data.\n\nThe BitPaymer ransomware is used to encrypt files based on the settings from the configuration data. It has the ability to encrypt local and remote disks and can whitelist various file types that are not to be encrypted. The ransom note follows the same general outline as that of other ransomware families; however, BitPaymer is customized to the company or victim being attacked and contains their names in the configuration data itself.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Credential stealer",
            "Big Game Hunting"
        ],
        "information": [
            "https://exchange.xforce.ibmcloud.com/malware-analysis/guid:14521d85c16836ad5e8cd7176a9f5003",
            "https://nakedsecurity.sophos.com/2017/09/21/how-bitpaymer-ransomware-covers-its-tracks/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/spanish-mssp-targeted-by-bitpaymer-ransomware/",
            "https://blog.morphisec.com/bitpaymer-ransomware-with-new-custom-packer-framework",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/account-with-admin-privileges-abused-to-install-bitpaymer-ransomware-via-psexec/",
            "https://cyware.com/news/bitpaymer-ransomware-an-insight-into-the-ransomwares-attack-campaigns-ced9027b",
            "https://lifars.com/2019/11/analysis-of-dridex-bitpaymer-and-doppelpaymer-campaign/",
            "https://www.welivesecurity.com/2018/01/26/friedex-bitpaymer-ransomware-work-dridex-authors/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/ursnif-emotet-dridex-and-bitpaymer-gangs-linked-by-a-similar-loader/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0570/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.friedex"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Bitpaymer"
        ],
        "uuid": "1d7f3d66-005d-426f-925e-a31a2a49cb46",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bitpaymer",
    "analysis": null
};