import numpy as np
import pandas as pd
import uuid
import random

np.random.seed(42)
N_INCIDENTS = 12000   # incidents
EVENTS_PER_INCIDENT = (3, 7)

attack_types = {
    "benign": 0.45,
    "phishing": 0.12,
    "malware": 0.10,
    "bruteforce": 0.08,
    "sql_injection": 0.07,
    "lateral_movement": 0.07,
    "data_exfiltration": 0.06,
    "ddos": 0.05
}

mitre_map = {
    "phishing": "T1566",
    "malware": "T1059",
    "bruteforce": "T1110",
    "sql_injection": "T1190",
    "lateral_movement": "T1021",
    "data_exfiltration": "T1041",
    "ddos": "T1499",
    "benign": "N/A"
}

rows = []

for _ in range(N_INCIDENTS):
    incident_id = str(uuid.uuid4())
    attack = np.random.choice(list(attack_types.keys()),
                              p=list(attack_types.values()))
    events = np.random.randint(*EVENTS_PER_INCIDENT)

    user_avg_data = np.random.gamma(2, 80)

    for _ in range(events):
        row = {
            "incident_id": incident_id,
            "user_id": f"user_{np.random.randint(1,500)}",
            "host_id": f"host_{np.random.randint(1,300)}",
            "attack_type": attack,
            "attack_vector": np.random.choice(["Email","Web","Endpoint","Network"]),
            "mitre_technique": mitre_map[attack],
            "incident_severity": 0 if attack=="benign" else np.random.randint(4,10),

            # Behaviour
            "user_avg_data_mb": user_avg_data,
            "login_hour_skew": abs(np.random.normal(0,1)),
            "rare_process_score": np.random.beta(2,5),

            # Auth
            "failed_logins": np.random.poisson(2),
            "successful_logins": np.random.poisson(3),
            "off_hours_access": np.random.binomial(1,0.2),
            "geo_deviation": np.random.binomial(1,0.1),

            # Network
            "unique_src_ips": np.random.randint(1,4),
            "flow_duration_sec": np.random.gamma(2,30),
            "outbound_bytes": np.random.gamma(2,200),

            # Endpoint
            "command_line_entropy": np.random.uniform(1,6),
            "registry_changes": np.random.poisson(1),
            "api_call_count": np.random.poisson(10),

            # Web / Email
            "url_entropy": np.random.uniform(2,6),
            "special_char_count": np.random.poisson(2),
            "email_subject_urgency": np.random.uniform(0,1),
            "sender_reputation": np.random.uniform(0,1)
        }

        # Attack enrichment (subtle, not perfect)
        if attack != "benign":
            row["failed_logins"] += np.random.randint(3,10)
            row["geo_deviation"] = np.random.binomial(1,0.6)
            row["rare_process_score"] += np.random.uniform(0.2,0.5)

        if attack == "data_exfiltration":
            row["outbound_bytes"] += np.random.randint(1000,8000)

        if attack == "ddos":
            row["unique_src_ips"] += np.random.randint(5,30)

        rows.append(row)

df = pd.DataFrame(rows)
df.to_csv("soc_post_siem_incidents_advanced.csv", index=False)

print("Generated:", df.shape)
