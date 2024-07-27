pipeline {
    agent any
    environment {
        REPO_URL = 'https://github.com/sharu1301/microservices.git'
        WORKING_DIR = 'microservices'
    }
    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'development', description: 'Branch to build')
        choice(name: 'APPLICATION', choices: ['Dashboard-dev', 'Dashboard-stage', 'Rampsure', 'Hinds', 'ICS-dev', 'ICS-stage', 'ICS-prod'], description: 'Application to deploy')
        choice(name: 'PORT', choices: ['3000', '3001'], description: 'Port number to check and stop the process if running')
    }
    stages {
        stage('Deploy Application') {
            steps {
                script {
                    sh """
                        export REPO_URL='${REPO_URL}'
                        export WORKING_DIR='${WORKING_DIR}'
                        export BRANCH_NAME='${params.BRANCH_NAME}'
                        export APPLICATION='${params.APPLICATION}'
                        export PORT='${params.PORT}'
                        bash ./deploy.sh
                    """
                }
            }
        }
    }
}
