import json

# Your list of objects (nested inside a outer list)
data = [[ 
    { "email": "25eg505v01@anurag.edu.in", "ip": " 40.0.24.241", "name": "Muthyala Varshini" }, 
    { "email": "24eg105v37@anurag.edu.in", "ip": "192.168.137.73", "name": "Vikanth Reddy" }, 
    { "email": "24eg105v34@anurag.edu.in", "ip": "40.0.10.30", "name": "Abyas Joy" }, 
    { "email": "24eg105v08@anurag.edu.in", "ip": "192.168.137.139:4040", "name": "Koteswara Rao" }, 
    { "email": "24eg105v05@anurag.edu.in", "ip": "40.0.8.150", "name": "jeevana" }, 
    { "email": "24EG106D34@anurag.edu.in", "ip": "40.0.8.201", "name": "Teja" }, 
    { "email": "25eg506d02@anurag.edu.in", "ip": "40.0.10.150", "name": "Yashhwanth" }, 
    { "email": "24EG106D03", "ip": "40.0.10.157", "name": "aravind" }, 
    { "email": "24eg105v04", "ip": " 40.0.10.45", "name": "pravalika" }, 
    { "email": "24eg105v09@anurag.edu.in", "ip": "40.0.9.189", "name": "thum suchith" }, 
    { "email": "24eg106d13@anurag.edu.in", "ip": "40.0.6.139", "name": "Asmita Y" }, 
    { "email": "24eg105v12@anurag.edu.in", "ip": "192.168.1.10", "name": "Dhanesh" }, 
    { "email": "24eg105v07@anurag.edu.in", "ip": "10.5.10.63", "name": "Harish" }, 
    { "email": "25eg506d01@anurag.edu.in", "ip": "40.0.10.3", "name": "Ram Ambati" }, 
    { "email": "24EG106D05", "ip": "40.0.10.157", "name": "D Mahesh" }, 
    { "email": "24eg105v10@anurag.edu.in", "ip": "40.0.8.219", "name": "bhavini suri" }, 
    { "email": "24eg106d01@anurag.edu.in", "ip": "40.0.25.203", "name": "Suman" }, 
    { "email": "23eg105v32@anurag.edu.in", "ip": "40.0.60.254", "name": "abhinand" }, 
    { "email": "24eg105v03", "ip": "40.0.10.73", "name": "krishnaveni" }, 
    { "email": "24eg105v59@anurag.edu.in", "ip": "192.168.137.161", "name": None }, 
    { "email": "24eg106d07@anurag.edu.in", "ip": "40.0.25.203", "name": "Srinija" }, 
    { "email": "24eg106d20@anurag.edu.in", "ip": None, "name": "Tanishq" }, 
    { "email": "24eg106d33@anurag.edu.in", "ip": "40.0.50.216:4040", "name": "G VINAYKUMAR" }, 
    { "email": "24EG106D31", "ip": "40.0.10.146", "name": "shivani" }, 
    { "email": "24eg106d18@anuarg.edu.in", "ip": "192.168.137.157", "name": "ajay" }, 
    { "email": "24eg105v46@anurag.edu.in", "ip": " 40.0.9.254", "name": "srinivas" }, 
    { "email": "24eg105v15@anurag.edu.in", "ip": "40.0.10.114", "name": "karthik" }, 
    { "email": "24eg106d30@anurag.edu.in", "ip": "40.0.10.33", "name": "DARLA SAI CHARAN" }, 
    { "email": "24eg106do4@gmail.com", "ip": "40.0.42.207", "name": "Snehitha" }, 
    { "email": "24eg106d37", "ip": "40.0.10.94", "name": "anjali" }, 
    { "email": "24eg105v57@anurag.edu.in", "ip": "40.0.9.216", "name": "Samith" }, 
    { "email": "24eg105v16@anurag.edu.in", "ip": "40.0.7.156", "name": "P. Revanth" }, 
    { "email": "24eg105v39@anurag.edu.in", "ip": "40.0.9.12", "name": "Bhanu" }, 
    { "email": "24eg105v60@anurag.edu.in", "ip": "40.0.10.54", "name": "Vaishnavi" }, 
    { "email": "24eg105v01@anurag.edu.in", "ip": "40.0.9.166", "name": "Bindu" }, 
    { "email": "24eg105v48@anurag.edu.in", "ip": "40.0.8.153", "name": "Usharani" }, 
    { "email": None, "ip": "40.0.9.92", "name": None }, 
    { "email": None, "ip": "40.0.9.92", "name": None }, 
    { "email": "24eg105v58@anurag.edu.in", "ip": "40.0.9.171", "name": "poojitha" }, 
    { "email": "24eg105v40@anurag.edu.in", "ip": "40.0.10.115", "name": "vaishnavi" }, 
    { "email": "25eg506d03", "ip": "10.5.10.65", "name": "nagalaxmi" }, 
    { "email": "24eg106d12@anurag.edu.in", "ip": "40.0.8.164", "name": "Srutakeerthi" }, 
    { "email": "24EG106D28@anurag.edu.in", "ip": "40.0.9.242", "name": "Tarun" }, 
    { "email": None, "ip": "40.0.9.92", "name": None }, 
    { "email": "24eg106d39@anurag.edu.in", "ip": "40.0.8.198", "name": "Avinash" }, 
    { "email": "24eg105v51@anurag.edu.in", "ip": "40.0.9.92", "name": "Hasini Oruganti" }, 
    { "email": "25eg506d04@anurag.edu.in", "ip": "40.0.9.218", "name": "sindhu" } 
]]

# Define the output file name
output_filename = "output.json"

# Write the data to a JSON file
with open(output_filename, "w", encoding="utf-8") as json_file:
    # indent=4 makes the file easy to read for humans
    json.dump(data, json_file, indent=4)

print(f"Success! Data successfully saved to {output_filename}")
