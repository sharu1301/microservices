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
        stage('Clean Old Directory') {
            steps {
                script {
                    // Clean the old microservices directory if it exists
                    sh """
                        if [ -d "${WORKING_DIR}" ]; then
                            sudo rm -rf ${WORKING_DIR}
                            echo "Old directory ${WORKING_DIR} cleaned."
                        fi
                    """
                }
            }
        }

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
                        sh 'sudo apt-get update && sudo apt-get install -y npm'
                        sh 'sudo npm install || npm install'
                    }
                }
            }
        }

        stage('Stop Existing Processes') {
            steps {
                script {
                    sh '''
                        if [ -z "${PORT}" ]; then
                            echo "Error: PORT parameter is not set."
                            exit 1
                        fi
                        pid=$(sudo lsof -ti :${PORT})
                        if [ -n "$pid" ]; then
                            echo "Killing process $pid running on port ${PORT}"
                            sudo kill -9 $pid
                        else
                            echo "No process is running on port ${PORT}"
                        fi
                    '''
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

        stage('Verify Deployment') {
            steps {
                script {
                    // Verify the deployment by checking the port
                    sh "curl -I http://localhost:${PORT}"
                }
            }
        }
    }
}
