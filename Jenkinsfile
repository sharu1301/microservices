pipeline {
    agent any

    tools {
        jdk 'OpenJDK17'
    }

    stages {
        stage('Build Artifact') {
            steps {
                dir('/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend') {
                    script {
                        sh '''
                            export NVM_DIR="/var/lib/jenkins/.nvm"
                            . "$NVM_DIR/nvm.sh"
                            nvm install v20.10.0
                            nvm alias default v20.10.0
                            nvm use default
                            echo "Node.js version"
                            node -v
                            echo "NPM version"
                            npm -v
                            npm install --legacy-peer-deps
                            CI=false npm run build
                        '''
                    }
                }
            }
        }                                                                                                                                                                                                                                                                                                                                           
        stage('SonarQube Analysis') {
            steps {
                script {
                 scannerHome = tool 'SonarQube'; 
                }
                withSonarQubeEnv('SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=HINDS-MACHINE-KEY"
                }
            }
        }
        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
        }
        stage("quality gate-2"){
           steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'HINDS-MACHINE-KEY-sonar' 
                }
            } 
        }
        stage('Check Code Coverage') {
            steps {
                script {
                    // Extract code coverage from SonarQube API
                    def codeCoverage = sh(script: 'curl -s -u SONARQUBE_TOKEN: -X GET "http://sonarqube-server/api/measures/component?component=${JOB_NAME}&metricKeys=coverage"',
                            returnStdout: true).trim()

                    // Convert code coverage to a float value
                    def coverageValue = codeCoverage.toFloat()

                    // Check if code coverage is less than 50%
                    if (coverageValue < 50) {
                        // Create a Jira ticket using Jira REST API
                        sh 'curl -D- -u JIRA_USERNAME:JIRA_PASSWORD -X POST -H "Content-Type: application/json" --data \'{"fields":{"project":{"key": "HNI"},"summary":"Low Code Coverage","description":"Code coverage is less than 50%","issuetype":{"name":"Bug"}}}\' http://jira-server/rest/api/2/issue/'
                    }
                }
            }
        }

        stage('Upload to S3') {
            steps {
                dir("/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend/build") {
                    script {
                        s3Upload(
                            consoleLogLevel: 'INFO',
                            dontSetBuildResultOnFailure: false,
                            dontWaitForConcurrentBuildCompletion: false,
                            entries: [
                                [
                                    bucket: 'hindm-test',
                                    excludedFile: '',
                                    flatten: false,
                                    gzipFiles: false,
                                    keepForever: false,
                                    managedArtifacts: false,
                                    noUploadOnFailure: false,
                                    selectedRegion: 'us-east-1',
                                    showDirectlyInBrowser: false,
                                    sourceFile: '**/*',
                                    storageClass: 'STANDARD',
                                    uploadFromSlave: false,
                                    useServerSideEncryption: false
                                ]
                            ],
                            pluginFailureResultConstraint: 'FAILURE',
                            profileName: 'S3-Upload',
                            userMetadata: []
                        )
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                // If the build is successful, create a new Jira ticket
                def jiraIssue = [
                    fields: [
                        project: [key: 'HIN'],
                        summary: 'New JIRA Created on Build Success',
                        description: 'A new Jira ticket created automatically because the build succeeded.',
                        issuetype: [name: 'Task']
                    ]
                ]

                def jiraResponse = jiraNewIssue issue: jiraIssue, site: 'hindsmachines'
                echo "JIRA Ticket Creation Status: ${jiraResponse.successful}"
                echo "JIRA Response Data: ${jiraResponse.data}"
            }
        }

        failure {
            script {
                // If the build fails, you can optionally perform actions or notifications here
                echo "Build failed. No Jira ticket will be created."
            }
        }
    }
}
