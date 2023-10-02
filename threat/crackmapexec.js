var threatdata = {
    "name": "CrackMapExec",
    "alias": "CrackMapExec",
    "category": "Tools",
    "type": "Vulnerability scanner",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "CrackMapExec",
        "names": [
            {
                "name": "CrackMapExec"
            }
        ],
        "description": "A swiss army knife for pentesting networks.",
        "category": "Tools",
        "type": [
            "Vulnerability scanner"
        ],
        "information": [
            "https://github.com/byt3bl33d3r/CrackMapExec"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0488/"
        ],
        "uuid": "19b78546-f2b0-43b4-bc50-c18b025371de",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "crackmapexec",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "crackmapexec",
            "procedure_code": "s0488",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0488",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "crackmapexec can execute powershell commands via wmi.[67]"
                },
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
                    "procedure_description": "crackmapexec can set a scheduled task on the target system to execute commands remotely using at.[6]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "crackmapexec can execute remote commands using windows management instrumentation.[31]"
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
                    "procedure_description": "crackmapexec can set a scheduled task on the target system to execute commands remotely using at.[6]"
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
                    "procedure_description": "crackmapexec can set a scheduled task on the target system to execute commands remotely using at.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "crackmapexec can create a registry key using wdigest.[43]"
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
                    "procedure_description": "crackmapexec can pass the hash to authenticate via smb.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110",
                    "technique_link": "https://attack.mitre.org/techniques/T1110",
                    "technique_name": "brute force",
                    "technique_description": "adversaries may use brute force techniques to gain access to accounts when passwords are unknown or when password hashes are obtained. without knowledge of the password for an account or set of accounts, an adversary may systematically guess the password using a repetitive or iterative mechanism. brute forcing passwords can take place via interaction with a service that will check the validity of those credentials or offline against previously acquired credential data, such as password hashes.",
                    "procedure_description": "crackmapexec can brute force supplied user credentials across a network range.[9]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/001",
                    "technique_name": "brute force : password guessing",
                    "technique_description": "adversaries with no prior knowledge of legitimate credentials within the system or environment may guess passwords to attempt access to accounts. without knowledge of the password for an account, an adversary may opt to systematically guess the password using a repetitive or iterative mechanism. an adversary may guess login credentials without prior knowledge of system or environment passwords during an operation by using a list of common passwords. password guessing may or may not take into account the target's policies on password complexity or use policies that may lock accounts out after a number of failed attempts.",
                    "procedure_description": "crackmapexec can brute force passwords for a specified user on a single target system or across an entire network.[8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/003",
                    "technique_name": "brute force : password spraying",
                    "technique_description": "adversaries may use a single or small list of commonly used passwords against many different accounts to attempt to acquire valid account credentials. password spraying uses one password (e.g. 'password01'), or a small list of commonly used passwords, that may match the complexity policy of the domain. logins are attempted with that password against many different accounts on a network to avoid account lockouts that would normally occur when brute forcing a single account with many passwords.",
                    "procedure_description": "crackmapexec can brute force credential authentication by using a supplied list of usernames and a single password.[12]"
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
                    "procedure_description": "crackmapexec can dump usernames and hashed passwords from the sam.[6]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/003",
                    "technique_name": "os credential dumping : ntds",
                    "technique_description": "adversaries may attempt to access or create a copy of the active directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. by default, the ntds file (ntds.dit) is located in %systemroot%\\ntds\\ntds.dit of a domain controller.",
                    "procedure_description": "crackmapexec can dump hashed passwords associated with active directory using windows' directory replication services api (drsuapi), or volume shadow copy.[6]"
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
                    "procedure_description": "crackmapexec can dump hashed passwords from lsa secrets for the targeted system.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "crackmapexec can enumerate the domain user accounts on a targeted system.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crackmapexec can discover specified filetypes and log files on a targeted system.[86]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "crackmapexec can enumerate the shared folders and associated permissions for a targeted network.[25]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "crackmapexec can discover the password policies applied to the target system.[7]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "crackmapexec can gather the user accounts within domain groups.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "crackmapexec can discover active ip addresses, along with the machine name, within a targeted network.[30]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "crackmapexec can enumerate the system drives and associated system name.[97]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "crackmapexec can collect dns information from the targeted system.[61]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "crackmapexec can discover active sessions for a targeted system.[26]"
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
                    "procedure_description": "crackmapexec can pass the hash to authenticate via smb.[7]"
                }
            ]
        }
    ]
};