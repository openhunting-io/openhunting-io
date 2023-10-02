var threatdata = {
    "name": "HotelAlfa",
    "alias": "HotelAlfa",
    "category": "Other",
    "type": "-",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "HotelAlfa",
        "names": [
            {
                "name": "HotelAlfa"
            }
        ],
        "description": "(Novetta) HotelAlfa is a stripped down HTTP server that hosted the Guardians of Peace (GOP) hackers\u2019 webpage announcing their demands against SPE as well as the locations of the data that the GOP attackers stole. Consisting of only 4 functions, HotelAlfa is an extremely simple piece of code and is clearly created for a limited purpose.\n\nFor each incoming connection, HotelAlfa spins off a new thread to handle the request. The thread reads up to 4096 bytes from the client and scans the response for specific keywords. The request from the client does not necessarily need to conform or comply with the HTTP request standard. Instead, the request merely must contain the appropriate file extension otherwise the default HTML page is returned. HotelAlfa responds to .wav and .j p g file extensions with the appropriate file.\n\nHotelAlfa only supplies three files to the client: an HTML page, a WAV sound file, and a JPG image. These files are stored within the HotelAlfa binary\u2019s resource section under the RC_DATA branch. Each file is encoded with XOR 0x63, requiring HotelAlfa to decode each file prior to transmitting the data back to the requesting client. When HotelAlfa sends a response back to the client, the response does conform to the HTTP 1.1 standard.",
        "category": "Other",
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "uuid": "2e259248-38c4-4ceb-9506-b28d0058c464",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hotelalfa",
    "analysis": null,
    "articles": [],
    "mitre": []
};