var threatdata = {
    "name": "zhMimikatz",
    "alias": "zhMimikatz",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "zhMimikatz",
        "names": [
            {
                "name": "zhMimikatz"
            }
        ],
        "description": "(Cylance) zhMimikatz executes the correct version of {{Mimikatz}} for the current system, and parses the results for any cached credentials.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance/pages/operation-cleaver/Cylance_Operation_Cleaver_Report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zhmimikatz"
        ],
        "uuid": "776c2d53-f0a8-4647-8f66-f2025b212948",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "zhmimikatz",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        },
        {
            "procedure_name": "mimikatz",
            "procedure_code": "s0002",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0002",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "the mimikatz credential dumper has been extended to include skeleton key domain controller authentication bypass functionality. the lsadump::changentlm and lsadump::setntlm modules can also manipulate the password hash of an account without knowing the clear text value.[11][12]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/005",
                    "technique_name": "boot or logon autostart execution : security support provider",
                    "technique_description": "adversaries may abuse security support providers (ssps) to execute dlls when the system boots. windows ssp dlls are loaded into the local security authority (lsa) process at system start. once loaded into the lsa, ssp dlls have access to encrypted and plaintext passwords that are stored in windows, such as any logged-on user's domain password or smart card pins.",
                    "procedure_description": "the mimikatz credential dumper contains an implementation of an ssp.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/005",
                    "technique_name": "access token manipulation : sid-history injection",
                    "technique_description": "adversaries may use sid-history injection to escalate privileges and bypass access controls. the windows security identifier (sid) is a unique value that identifies a user or group account. sids are used by windows security in both security descriptors and access tokens.  an account can hold additional sids in the sid-history active directory attribute , allowing inter-operable account migration between domains (e.g., all values in sid-history are included in access tokens).",
                    "procedure_description": "mimikatz's misc::addsid module can appended any sid or user/group account to a user's sid-history. mimikatz also utilizes sid-history injection to expand the scope of other components such as generated kerberos golden tickets and dcsync beyond a single domain.[5][6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/005",
                    "technique_name": "boot or logon autostart execution : security support provider",
                    "technique_description": "adversaries may abuse security support providers (ssps) to execute dlls when the system boots. windows ssp dlls are loaded into the local security authority (lsa) process at system start. once loaded into the lsa, ssp dlls have access to encrypted and plaintext passwords that are stored in windows, such as any logged-on user's domain password or smart card pins.",
                    "procedure_description": "the mimikatz credential dumper contains an implementation of an ssp.[3]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/005",
                    "technique_name": "access token manipulation : sid-history injection",
                    "technique_description": "adversaries may use sid-history injection to escalate privileges and bypass access controls. the windows security identifier (sid) is a unique value that identifies a user or group account. sids are used by windows security in both security descriptors and access tokens.  an account can hold additional sids in the sid-history active directory attribute , allowing inter-operable account migration between domains (e.g., all values in sid-history are included in access tokens).",
                    "procedure_description": "mimikatz's misc::addsid module can appended any sid or user/group account to a user's sid-history. mimikatz also utilizes sid-history injection to expand the scope of other components such as generated kerberos golden tickets and dcsync beyond a single domain.[5][6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1207",
                    "technique_link": "https://attack.mitre.org/techniques/T1207",
                    "technique_name": "rogue domain controller",
                    "technique_description": "adversaries may register a rogue domain controller to enable manipulation of active directory data. dcshadow may be used to create a rogue domain controller (dc). dcshadow is a method of manipulating active directory (ad) data, including objects and schemas, by registering (or reusing an inactive registration) and simulating the behavior of a dc.  once registered, a rogue dc may be able to inject and replicate changes into ad infrastructure for any domain object, including credentials and keys.",
                    "procedure_description": "mimikatz\u2019s lsadump::dcshadow module can be used to make ad updates by temporarily setting a computer to be a dc.[3][2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "mimikatz's sekurlsa::pth module can impersonate a user, with only a password hash, to execute arbitrary commands.[12][13][14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "mimikatz\u2019s lsadump::dcsync and kerberos::ptt modules implement the three steps required to extract the krbtgt account hash and create/use kerberos tickets.[8][9][10][11]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from the credential vault and dpapi.[17][18][19][20][21]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from dpapi.[49][50][51][52]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/004",
                    "technique_name": "credentials from password stores : windows credential manager",
                    "technique_description": "adversaries may acquire credentials from the windows credential manager. the credential manager stores credentials for signing into websites, applications, and/or devices that request authentication through ntlm or kerberos in credential lockers (previously known as windows vaults).",
                    "procedure_description": "mimikatz contains functionality to acquire credentials from the windows credential manager.[6]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from the lsass memory.[56][57][58][59]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from the sam table.[19][20][21][22]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from the lsa.[21][22][23][24]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/006",
                    "technique_name": "os credential dumping : dcsync",
                    "technique_description": "adversaries may attempt to access credentials and other sensitive information by abusing a windows domain controller's application programming interface (api)    to simulate the replication process from a remote domain controller using a technique called dcsync.",
                    "procedure_description": "mimikatz performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. it contains functionality to acquire information about credentials in many ways, including from dcsync/netsync.[12][8][13][14][15]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1649",
                    "technique_link": "https://attack.mitre.org/techniques/T1649",
                    "technique_name": "steal or forge authentication certificates",
                    "technique_description": "adversaries may steal or forge certificates used for authentication to access remote systems or resources. digital certificates are often used to sign and encrypt messages and/or files. certificates are also used as authentication material. for example, azure ad device certificates and active directory certificate services (ad cs) certificates bind to an identity and can be used as credentials for domain accounts.",
                    "procedure_description": "mimikatz's crypto module can create and export various types of authentication certificates.[10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/001",
                    "technique_name": "steal or forge kerberos tickets : golden ticket",
                    "technique_description": "adversaries who have the krbtgt account password hash may forge kerberos ticket-granting tickets (tgt), also known as a golden ticket. golden tickets enable adversaries to generate authentication material for any account in active directory.",
                    "procedure_description": "mimikatz's kerberos module can create golden tickets.[7][8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/002",
                    "technique_name": "steal or forge kerberos tickets : silver ticket",
                    "technique_description": "adversaries who have the password hash of a target service account (e.g. sharepoint, mssql) may forge kerberos ticket granting service (tgs) tickets, also known as silver tickets. kerberos tgs tickets are also known as service tickets.",
                    "procedure_description": "mimikatz's kerberos module can create silver tickets.[5]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/004",
                    "technique_name": "unsecured credentials : private keys",
                    "technique_description": "adversaries may search for private key certificate files on compromised systems for insecurely stored credentials. private cryptographic keys and certificates are used for authentication, encryption/decryption, and digital signatures. common key and certificate file extensions include: .key, .pgp, .gpg, .ppk., .p12, .pem, .pfx, .cer, .p7b, .asc.",
                    "procedure_description": "mimikatz's crypto::extract module can extract keys by interacting with windows cryptographic application programming interface (api) functions.[16]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/002",
                    "technique_name": "use alternate authentication material : pass the hash",
                    "technique_description": "adversaries may \"pass the hash\" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. pass the hash (pth) is a method of authenticating as a user without having access to the user's cleartext password. this method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.",
                    "procedure_description": "mimikatz's sekurlsa::pth module can impersonate a user, with only a password hash, to execute arbitrary commands.[12][13][14]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "mimikatz\u2019s lsadump::dcsync and kerberos::ptt modules implement the three steps required to extract the krbtgt account hash and create/use kerberos tickets.[8][9][10][11]"
                }
            ]
        }
    ]
};