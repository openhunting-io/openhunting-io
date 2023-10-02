const rule = {
    "id": "7b1513d2-d7fa-4f2e-89a0-53c4dd27b1a2",
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
                        "hertanza.click",
                        "bekiza.shop",
                        "bortasy.click",
                        "torhamisa.click",
                        "hunazora.click",
                        "haneri.shop",
                        "facratnu.click",
                        "curizpa.click",
                        "baruzatek.click",
                        "gopposa.click",
                        "mta-sts.haneri.shop",
                        "tarezmi.shop",
                        "gahvaperos.shop",
                        "burimak.click",
                        "zoppara.click",
                        "emv1.nertun.shop",
                        "taviroza.click",
                        "nertun.shop",
                        "nuzzar.click",
                        "cafirran.click",
                        "cunnate.click",
                        "arezo.click",
                        "fimyare.click",
                        "tappose.click",
                        "dacazara.click",
                        "playprotect.click",
                        "wannertop.click",
                        "juzzako.click",
                        "mta-sts.periza.click",
                        "periza.click",
                        "ehtemu.click",
                        "fazzare.click",
                        "ramzartey.click"
                    ]
                }
            ]
        }
    ]
};