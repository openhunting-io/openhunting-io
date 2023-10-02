const rule = {
    "id": "3968a715-eb75-4324-ba3d-17b3b67f1a3f",
    "info": {
        "name": "Rules Detect Confucius",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-08-27 22:24:53",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Confucius",
        "tags": [
            "Confucius"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "a91be9529d06cd4a6c06a01b5c595630",
                        "a61a50f712b2cf3262c07ec7516c766e",
                        "ae3e8679df2976d31da858fd7af67185",
                        "66a9b9955fa7240b45137d09dc265306ae751541de510cd9f4288f1a9972b02c",
                        "b1fecb0b98a86e2243b2163d9d720dc0",
                        "5397cbaf89ff40a8b08004ac5164c8a0",
                        "5b817c7dc6bf17ef2fa32136b9c106cd",
                        "f82bd6ccf7370b37b306654a44c3189c"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "bonimoni.xyz",
                        "viterwin.club"
                    ]
                }
            ]
        }
    ]
};