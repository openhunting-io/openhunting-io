var threatdata = {
    "name": "MoneyTaker",
    "alias": "MoneyTaker",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "MoneyTaker",
        "names": [
            {
                "name": "MoneyTaker"
            }
        ],
        "description": "(Group-IB) In an attack on a Russian bank through the AWS CBR, hackers used a tool called MoneyTaker v5.0, which the group has been named after. Each component of this modular program performs a certain action: searches for payment orders and modifies them, replaces original payment details with fraudulent ones, and then erases traces. The success of replacement is due to the fact that at this stage the payment order has not yet been signed, which will occur after payment details are replaced. In addition to hiding the tracks, the concealment module again substitutes the fraudulent payment details in a debit advice after the transaction back with the original ones. This means that the payment order is sent and accepted for execution with the fraudulent payment details, and the responses come as if the payment details were the initial ones. This gives cybercriminals extra time to mule funds before the theft is detected.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://www.group-ib.com/blog/moneytaker"
        ],
        "uuid": "37a3a707-92e1-4ac7-bd2d-7a1779e5b3bb",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "moneytaker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/moneytaker-hacker-group-steals-millions-from-us-and-russian-banks/",
            "date": "2017-12-12",
            "organization": "Bleeping Computer",
            "author": "Catalin Cimpanu",
            "title": "MoneyTaker Hacker Group Steals Millions from US and Russian Banks",
            "categories": [
                "MoneyTaker"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/blog/moneytaker",
            "date": "2017-12-11",
            "organization": "Group-IB",
            "author": "Dmitry Volkov",
            "title": "MoneyTaker: in pursuit of the invisible",
            "categories": [
                "MoneyTaker"
            ]
        }
    ]
};