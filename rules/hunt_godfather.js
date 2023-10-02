const rule = {
    "id": "bd9abb2c-27cb-4da1-a359-0405dfb633d6",
    "info": {
        "name": "Rules Detect GodFather",
        "author": "Openhunting",
        "date": "2023-06-22",
        "modified": "2023-09-19 11:59:19",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for GodFather",
        "tags": [
            "godfather"
        ],
        "references": []
    },
    "method": [
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "ehtemu.click",
                        "nuzzar.click",
                        "playprotect.click",
                        "ramzartey.click",
                        "tappose.click",
                        "taviroza.click",
                        "torhamisa.click",
                        "wannertop.click",
                        "zoppara.click",
                        "juzzako.click",
                        "hertanza.click",
                        "hunazora.click",
                        "fazzare.click",
                        "fimyare.click",
                        "dacazara.click",
                        "facratnu.click",
                        "cunnate.click",
                        "curizpa.click",
                        "burimak.click",
                        "cafirran.click",
                        "baruzatek.click",
                        "arezo.click",
                        "bekiza.shop",
                        "bortasy.click",
                        "gopposa.click",
                        "haneri.shop",
                        "nertun.shop",
                        "periza.click",
                        "tarezmi.shop",
                        "emv1.nertun.shop",
                        "mta-sts.haneri.shop",
                        "mta-sts.periza.click",
                        "gahvaperos.shop"
                    ]
                }
            ]
        }
    ]
};