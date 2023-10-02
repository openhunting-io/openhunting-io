const rule = {
    "id": "c682d744-2a67-4ae7-83b8-330f7e29384c",
    "info": {
        "name": "Rules Detect OLDBAIT",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2022-07-14 20:12:39",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for OLDBAIT",
        "tags": [],
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
                        "login.auth2022.live",
                        "login.cbhbanlc.com",
                        "login.karlandpearson.com",
                        "login.clfonl365.xyz",
                        "login.sunmarks.co.uk",
                        "login.bittermann-hh.co",
                        "login.hfs923.shop",
                        "login.mcrosfts-updata.live",
                        "login.mcrsft-audio.xyz",
                        "login.cleanifl.com",
                        "login.mcrosftts-update.cloud",
                        "login.actionspsort.cam",
                        "login.mwhhncndn.xyz",
                        "login.aueuth11.live",
                        "login.gddss36.live",
                        "login.akasmisoft.xyz",
                        "login.yi087011.xyz",
                        "login.mcrsfts-passwdupdate.com",
                        "login.mcrosfts-update.cloud",
                        "login.mcrsfts-update.digital",
                        "login.auth009.xyz",
                        "login.mcrsfts-voiceapp.digital",
                        "login.mcrsfts-cloud.live",
                        "login.mcrsfts-virtualofficevm.com",
                        "login.seafoodsconnection.com",
                        "login.mcrsftsvoice-mail.cloud",
                        "login.grodno-pl.com",
                        "login.mcrosfts-update.digital",
                        "login.mljs365.xyz",
                        "login.auth83kl.live",
                        "login.login-micro.mcrsfts-passwdupdate.com",
                        "login.qwwxthn.xyz",
                        "login.mcrsftsvm-app.live",
                        "login.mcrsfts-passwd.cloud",
                        "login.microsecurity.us",
                        "login.klm2136.click",
                        "login.mcrsftsvm-app.digital",
                        "login.mycrsfts-passwd.live",
                        "login.tfosorcimonline.xyz",
                        "login.microstoff.xyz",
                        "login.whitmanlab.uk",
                        "login.mcrsfts-update.cloud",
                        "login.mcrsfts-passwd.digital"
                    ]
                }
            ]
        }
    ]
};