#!/bin/bash

# Check if PORT parameter is set
if [ -z "$PORT" ]; then 
    echo "Error: PORT parameter is not set."
    exit 1
fi

# Clean old directory if it exists
if [ -d "$WORKING_DIR" ]; then
    sudo rm -rf "$WORKING_DIR"
    echo "Old directory $WORKING_DIR cleaned."
fi

# Clone the repository and checkout the specific branch
git clone -b "$BRANCH_NAME" "$REPO_URL" "$WORKING_DIR"

# Navigate into the repository directory
cd "$WORKING_DIR" || exit
ls -la # List files to ensure it's the correct directory

# Install dependencies
sudo apt-get update && sudo apt-get install -y npm
sudo npm install || npm install

# Stop existing process if running on the specified port
pid=$(sudo lsof -ti :"$PORT")

if [ -z "$pid" ]; then 
    echo "No process is running on port $PORT"
else 
    echo "Killing process $pid running on port $PORT"
    sudo kill -9 "$pid"
fi

# Deploy the application using pm2
pm2 start --name "$APPLICATION" "sudo npm run dev"
pm2 save

# Verify the deployment by checking the port
curl -I "http://localhost:$PORT"
