var threatdata = {
    "name": "DNSExfitrator",
    "alias": "DNSExfitrator",
    "category": "Malware",
    "type": "Exfiltration, Tunneling",
    "modified": "2020-07-30",
    "all_data": {
        "tool": "DNSExfitrator",
        "names": [
            {
                "name": "DNSExfitrator"
            }
        ],
        "description": "(Kasperksy) At the end of May, we observed that Oilrig had included the DNSExfitrator tool in its toolset. It allows the threat actor to use the DNS over HTTPS (DoH) protocol. Use of the DNS protocol for malware communications is a technique that Oilrig has been using for a long time. The difference between DNS- and DoH-based requests is that, instead of plain text requests to port 53, they would use port 443 in encrypted packets. Oilrig added the publicly available DNSExfiltrator tool to its arsenal, which allows DoH queries to Google and Cloudflare services. This time, the operators decided to use subdomains of a COVID-related domain which are hardcoded in the DNSExfitrator detected samples.",
        "category": "Malware",
        "type": [
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://securelist.com/apt-trends-report-q2-2020/97937/"
        ],
        "uuid": "135f3617-9251-4daf-999e-3fa79a029b5d",
        "last-card-change": "2020-07-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dnsexfitrator",
    "analysis": null
};