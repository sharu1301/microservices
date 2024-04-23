pipeline {
    agent { label 'jenkins-slave'}

    stages {
        stage('SSH transfer'){
            steps([$class: 'BapSshPromotionPublisherPlugin']) {
                sshPublisher(
                publishers: [
                sshPublisherDesc(
                configName: 'ics-dev-server', 
                transfers: [
                    sshTransfer(
                        sourceFiles: 'Backend/',
                        execCommand: '''
                                #!/bin/bash

                                # Run the command to find the process ID
                                pid=$(sudo lsof -ti :3002)

                                # Check if PID is not empty
                                if [ -n "$pid" ]; then
                                    sudo kill $pid
                                    echo "Process killed successfully."
                                fi
                                cd ics-test-hinds-machine
                                npm install
                                npm run dev
                        ''')
                ], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: false)
                ]
            )
        }
      }
    }
}



