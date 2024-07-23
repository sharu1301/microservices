pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/sharu1301/microservices.git'
        WORKING_DIR = 'microservices'
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'development', description: 'Branch to build')
        choice(name: 'APPLICATION', choices: ['Dashboard-dev', 'Dashboard-stage', 'Rampsure', 'Hinds', 'ICS-dev', 'ICS-stage', 'ICS-prod'], description: 'Application to deploy')
        string(name: 'PORT', defaultValue: '3001', description: 'Port number to check and stop the process if running')
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Clone the specific branch
                    sh "git clone -b ${params.BRANCH_NAME} ${REPO_URL} ${WORKING_DIR}"
                    // Navigate into the repository directory
                    dir("${WORKING_DIR}") {
                        sh 'ls -la' // List files to ensure it's the correct directory
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    dir("${WORKING_DIR}") {
                        sh 'sudo npm install'
                    }
                }
            }
        }

        stage('Stop Existing Processes') {
            steps {
                script {
                    sh """
                        pid=\$(sudo lsof -ti :${params.PORT})
                        if [ -n "\$pid" ]; then
                            sudo kill -9 \$pid
                            echo "Process on port ${params.PORT} killed successfully."
                        fi
                    """
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    dir("${WORKING_DIR}") {
                        // Start the application using pm2
                        sh """
                            pm2 start --name ${params.APPLICATION} "sudo npm run dev"
                            pm2 save
                        """
                    }
                }
            }
        }
    }
}
