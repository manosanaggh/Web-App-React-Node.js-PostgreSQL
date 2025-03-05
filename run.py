import subprocess

# Define your bash commands
command1 = "npm run build"  # Replace with your first command
command2 = "npm run dev"     # Replace with your second command

# Run the first command
process1 = subprocess.run(command1, shell=True, capture_output=True, text=True)
print(f"Output of first command:\n{process1.stdout}")

# Run the second command
process2 = subprocess.run(command2, shell=True, capture_output=True, text=True)
print(f"Output of second command:\n{process2.stdout}")

