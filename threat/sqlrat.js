var threatdata = {
    "name": "SQLRAT",
    "alias": "SQLRAT",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "SQLRAT",
        "names": [
            {
                "name": "SQLRAT"
            }
        ],
        "description": "(Flashpoint) The SQLRat script is designed to make a direct SQL connection to a Microsoft database controlled by the attackers and execute the contents of various tables. The script retrieves an item from the bindata table and writes the file to disk. This file appears to primarily be a version of {{TinyMet}}\u2014an open source Meterpreter stager\u2014but the actors have the option to store and execute any binary loaded into the table.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.flashpoint-intel.com/blog/fin7-revisited-inside-astra-panel-and-sqlrat-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0390/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.sqlrat"
        ],
        "uuid": "15b99961-7edf-4f39-a9eb-b74bfac2557d",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sqlrat",
    "analysis": null
};