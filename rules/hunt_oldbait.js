const rule = {
    "id": "824285a9-af77-47ed-8ccd-3b77dc542d00",
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
                        "login.qwwxthn.xyz",
                        "login.seafoodsconnection.com",
                        "login.sunmarks.co.uk",
                        "login.tfosorcimonline.xyz",
                        "login.whitmanlab.uk",
                        "login.yi087011.xyz",
                        "login.mcrsfts-update.cloud",
                        "login.mcrsfts-update.digital",
                        "login.mcrsfts-virtualofficevm.com",
                        "login.mcrsftsvm-app.digital",
                        "login.mcrsftsvm-app.live",
                        "login.mcrsfts-voiceapp.digital",
                        "login.mcrsftsvoice-mail.cloud",
                        "login.microsecurity.us",
                        "login.microstoff.xyz",
                        "login.mljs365.xyz",
                        "login.mwhhncndn.xyz",
                        "login.mycrsfts-passwd.live",
                        "login.hfs923.shop",
                        "login.karlandpearson.com",
                        "login.klm2136.click",
                        "login.login-micro.mcrsfts-passwdupdate.com",
                        "login.mcrosfts-updata.live",
                        "login.mcrosfts-update.cloud",
                        "login.mcrosfts-update.digital",
                        "login.mcrosftts-update.cloud",
                        "login.mcrsft-audio.xyz",
                        "login.mcrsfts-cloud.live",
                        "login.mcrsfts-passwd.cloud",
                        "login.mcrsfts-passwd.digital",
                        "login.mcrsfts-passwdupdate.com",
                        "login.actionspsort.cam",
                        "login.akasmisoft.xyz",
                        "login.aueuth11.live",
                        "login.auth009.xyz",
                        "login.auth2022.live",
                        "login.auth83kl.live",
                        "login.bittermann-hh.co",
                        "login.cbhbanlc.com",
                        "login.cleanifl.com",
                        "login.clfonl365.xyz",
                        "login.gddss36.live",
                        "login.grodno-pl.com"
                    ]
                }
            ]
        }
    ]
};