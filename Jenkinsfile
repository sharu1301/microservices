pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/sharu1301/microservices.git'
        REPO_DIR = 'Frontend'
        WORKING_DIR = 'Frontend'
        PORT = '3003'
        PM2_SERVICE_NAME = 'UniversalDashboard'
    }

    stages {
        stage('Clean Old Directory') {
            steps {
                script {
                    // Clean the old microservices directory if it exists
                    sh """
                        if [ -d "${REPO_DIR}" ]; then
                            rm -rf ${REPO_DIR}
                            echo "Old directory ${REPO_DIR} cleaned."
                        fi
                    """
                }
            }
        }

        stage('Clone Repository') {
            steps {
                script {
                    // Clone the repository
                    sh "git clone ${REPO_URL} ${REPO_DIR}"
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

        stage('Verify Public Directory') {
            steps {
                script {
                    // Check if the public directory and index.html exist
                    dir("${WORKING_DIR}") {
                        sh """
                            if [ ! -f "public/index.html" ]; then
                                echo "Error: public/index.html not found."
                                exit 1
                            fi
                        """
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    dir("${WORKING_DIR}") {
                        sh "npm install"
                    }
                }
            }
        }

        stage('Stop and Delete Existing PM2 Service') {
            steps {
                script {
                    // Stop and delete existing PM2 service
                    sh """
                    if pm2 list | grep ${PM2_SERVICE_NAME}; then
                        pm2 stop ${PM2_SERVICE_NAME}
                        pm2 delete ${PM2_SERVICE_NAME}
                    else
                        echo "PM2 service ${PM2_SERVICE_NAME} not found"
                    fi
                    """
                }
            }
        }

        stage('Check and Kill Process on Port') {
            steps {
                script {
                    // Check and kill process on the port if running
                    sh """
                    if sudo lsof -i :${PORT}; then
                        sudo kill -9 \$(sudo lsof -t -i :${PORT}) || true
                    else
                        echo "No process running on port ${PORT}"
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
                        sh "npm start"
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
                        pm2 start --name ${PM2_SERVICE_NAME} "npm start"
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
