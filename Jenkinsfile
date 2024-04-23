pipeline {
    agent { label 'jenkins-slave'}

    stages {
        stage('Build'){
            steps{
                script{
                    def runningProcesses = sh(script: 'sudo lsof -i:3002 | wc -l', returnStdout: true).trim()
                    sh '''
                       echo ${runningProcesses}
                    '''
                }
            }
        }

    }
}



