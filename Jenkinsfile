pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/sharu1301/microservices.git'
        WORKING_DIR = 'microservices'
        PORT = '3003'
        PM2_SERVICE_NAME = 'UniversalDashboard'
    }

    stages {
        stage('Clean Old Directory') {
            steps {
                script {
                    // Clean the old microservices directory if it exists
                    sh """
                        if [ -d "${WORKING_DIR}" ]; then
                            rm -rf ${WORKING_DIR}
                            echo "Old directory ${WORKING_DIR} cleaned."
                        fi
                    """
                }
            }
        }

        stage('Clone Repository') {
            steps {
                script {
                    // Clone the repository
                    sh "git clone ${REPO_URL}"
                }
            }
        }
        
        stage('Navigate to Directory') {
            steps {
                script {
                    // Change to the directory containing package.json
                    dir("${WORKING_DIR}") {
                        sh "ls -al"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    dir("${WORKING_DIR}") {
                        sh "sudo npm install || npm install"
                    }
                }
            }
        }

        stage('Stop and Delete Existing PM2 Service') {
            steps {
                script {
                    // Stop and delete existing PM2 service
                    sh """
                    pm2 stop ${PORT} || true
                    pm2 delete ${PORT} || true
                    """
                }
            }
        }

        stage('Check and Kill Process on Port') {
            steps {
                script {
                    // Check and kill process on the port if running
                    sh """
                    sudo lsof -i :${PORT} || true
                    if [ \$? -eq 0 ]; then
                        sudo kill -9 \$(sudo lsof -t -i :${PORT}) || true
                    fi
                    """
                }
            }
        }

        stage('Pull Latest Code') {
            steps {
                script {
                    // Pull latest code
                    dir("${WORKING_DIR}") {
                        sh "git pull"
                    }
                }
            }
        }

        stage('Start Application') {
            steps {
                script {
                    // Start the application using npm
                    dir("${WORKING_DIR}") {
                        sh "sudo npm run dev"
                    }
                }
            }
        }

        stage('Start PM2 Process') {
            steps {
                script {
                    // Start the process using PM2 and save it
                    dir("${WORKING_DIR}") {
                        sh """
                        pm2 start --name ${PM2_SERVICE_NAME} "sudo npm run dev"
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
