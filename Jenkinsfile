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
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectName=HINDS-MACHINE -Dsonar.projectKey=HINDS-MACHINE-KEY"
                }
            }
        }
        stage('Check Quality Gates') {
            steps {
                script {
                    def qualityGates = waitForQualityGate()
                    
                    if (qualityGates.status == 'ERROR' || qualityGates.status == 'FAILED') {
                        echo "Quality gates failed. Generating Jira ticket."

                        def jiraIssue = jiraNewIssue(
                            serverUrl: https://hindsmachines.atlassian.net/,
                            credentialsId: 'Jira-Jenkins-Integration',
                            issueType: 'Bug',
                            projectKey: HIN,
                            summary: 'SonarQube Quality Gates Failed',
                            description: "SonarQube Quality Gates failed for build ${env.BUILD_NUMBER}."
                        )

                        echo "Jira Issue Key: ${jiraIssue.key}"
                    } 
                    else {
                        echo "Quality gates passed. No Jira ticket needed."
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

