var threatdata = {
    "name": "HUI Loader",
    "alias": "HUI Loader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "HUI Loader",
        "names": [
            {
                "name": "HUI Loader"
            }
        ],
        "description": "(SecureWorks) HUI Loader is a custom DLL loader whose name is derived from a string in the loader (see Figure 1). The malware is loaded by legitimate programs that are vulnerable to DLL search order hijacking. HUI Loader decrypts and loads a third file containing an encrypted payload that is also deployed to the compromised host. CTU researchers have observed HUI Loader loading RATs such as {{SodaMaster}}, {{PlugX}}, {{Cobalt Strike}}, and {{QuasarRAT}}.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hui_loader"
        ],
        "uuid": "afe97e74-7cbf-4bc0-8425-4520ad9f325d",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hui_loader",
    "analysis": null
};