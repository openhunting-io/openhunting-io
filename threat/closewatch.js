var threatdata = {
    "name": "CLOSEWATCH",
    "alias": "CLOSEWATCH",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-12-26",
    "all_data": {
        "tool": "CLOSEWATCH",
        "names": [
            {
                "name": "CLOSEWATCH"
            }
        ],
        "description": "(Mandiant) CLOSEWATCH is a JSP web shell that communicates with a listener on localhost over a specified port, writes arbitrary files to the victim operating system, executes arbitrary commands on the victim host, disables proxying and issues customizable HTTP GET requests to a range of remote hosts. If the proper HTTP URL parameters are specified, CLOSEWATCH can create a socket connection to localhost on port 16998 where it can send and receive data using HTTP-like communications using chunked transfer-encoding. If the range parameter is specified, CLOSEWATCH can scan a range of IPs and ports using custom parameters.  This malware was observed at one of the earliest FIN13 investigations.  Although a sample has recently appeared on a public repository, this malware hasn\u2019t been observed during more recent investigations. While more than just a recon tool, CLOSEWATCH\u2019s range parameter provides FIN13 with another scanning capability.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/resources/fin13-cybercriminal-mexico"
        ],
        "uuid": "4a246aea-822b-42ba-a994-8240b820cada",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "closewatch",
    "analysis": null
};