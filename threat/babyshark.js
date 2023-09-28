var threatdata = {
    "name": "BabyShark",
    "alias": "BabyShark",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-16",
    "all_data": {
        "tool": "BabyShark",
        "names": [
            {
                "name": "BabyShark"
            }
        ],
        "description": "BabyShark is Microsoft Visual Basic (VB) script-based malware family first seen in November 2018. The malware is launched by executing the first stage HTA from a remote location, thus it can be delivered via different file types including PE files as well as malicious documents. It exfiltrates system information to C2 server, maintains persistence on the system, and waits for further instruction from the operator.\n\n(Palo Alto) Based on our research, it appears the malware author calls the encoded secondary payload \u201cCowboy\u201d regardless of what malware family is delivered.\n\nIn our analysis, we found BabyShark attacks were using {{KimJongRAT}} and {{Gh0st RAT}} as the encoded secondary payload and thus were the \u201cCowboys\u201d.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/new-babyshark-malware-targets-u-s-national-security-think-tanks/",
            "https://unit42.paloaltonetworks.com/babyshark-malware-part-two-attacks-continue-using-kimjongrat-and-pcrat/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0414/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.babyshark"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BabyShark"
        ],
        "uuid": "6740d62a-db55-4938-a560-47d7ff7a529c",
        "last-card-change": "2020-05-16",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "babyshark",
    "analysis": null
};