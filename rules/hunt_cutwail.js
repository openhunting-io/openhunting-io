const rule = {
    "id": "0203d360-13c7-4fc6-86e6-0c297783fe61",
    "info": {
        "name": "Rules Detect Cutwail",
        "author": "Openhunting",
        "date": "2022-02-08",
        "modified": "2022-11-10 11:06:37",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Cutwail",
        "tags": [
            "cutwail",
            "maldoc",
            "Cutwail"
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
                        "47f7006dc586d532962011c15595100c",
                        "4e52c38e4a7aa11b53b1432f66383a5f",
                        "18625572bfa5c43e880823c53bed502c",
                        "38eee9f09cc38dad8af2cff7e9be0db2",
                        "9737703391db4a58cead1e1525719cb0",
                        "83abd103d768757014043bc25a2e73ab",
                        "ac50c89f3656c1386a6c43ca01a6156d",
                        "eae2fa763b7c00ca4b7d5f57c5d3ea0d",
                        "c8cd88ef38e0c74a74e255df1cfb35ab",
                        "14542a3509c7fbc2888a5962ee69e07c",
                        "4e8ec74a93b831a92a1b016722e79365",
                        "19dba59c1cd8667fd8ede1e0ef7a2e71",
                        "44bbbdac3334b73c0f8773202d36cc60",
                        "cf850d35ca73d2f7565ff71628c1b620",
                        "a7c46f5427a76c8e4338ea9fdf0056c8",
                        "4cacbcdb4b03ddc0f1af39b11acbda32"
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
                        "dokpio.com",
                        "euconsalting.com",
                        "managmentoria.com",
                        "investprides.com"
                    ]
                }
            ]
        }
    ]
};