var threatdata = {
    "name": "Buran",
    "alias": "Buran, VegaLocker, Vega",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Buran",
        "names": [
            {
                "name": "Buran"
            },
            {
                "name": "VegaLocker"
            },
            {
                "name": "Vega"
            }
        ],
        "description": "(ESET) The component that first attracted our attention is the previously unseen Win32/Filecoder.Buran. It is a Delphi binary that sometimes comes packed. It was mainly distributed during February and March of 2019. It implements the expected behavior of ransomware, discovering local drives and network shares and encrypting files found on these devices. It doesn\u2019t require an internet connection to encrypt its victims\u2019 files, since it doesn\u2019t communicate with a server to send the encryption keys. Instead, it appends a \u201ctoken\u201d at the end of the ransom message and demands that the victims communicate with the operators via email or Bitmessage.\n\nTo encrypt as many important resources as possible, Filecoder.Buran starts a thread dedicated to killing key software that might have open handles on files containing valuable data, thus preventing them being encrypted. The targeted processes are mainly database management systems (DBMS). Furthermore, Filecoder.Buran removes log files and backups, to make it as difficult as possible for victims without any offline backups to recover their files.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.welivesecurity.com/2019/04/30/buhtrap-backdoor-ransomware-advertising-platform/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/buran-ransomware-the-evolution-of-vegalocker/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vegalocker"
        ],
        "uuid": "a9995f6b-30ae-4e92-8fbf-60375500b7db",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "buran",
    "analysis": null
};