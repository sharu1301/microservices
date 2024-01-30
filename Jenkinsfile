pipeline {
    agent any

    stages {
        stage('Creating a Jira ticket') {
            steps {
                script {
                    def jiraIssue = [
                        fields: [
                            project: [key: 'HIN'],
                            summary: 'This ticket includes each stage and its corresponding status',
                            description: "A new Jira ticket has been automatically created to display the pipeline status.With build number is:: ${env.BUILD_NUMBER}.",
                            issuetype: [name: 'Task']
                        ]
                    ]

                    // Capture the Jira response
                    def jiraResponse = jiraNewIssue(issue: jiraIssue, site: 'hindsmachines', credentialsId: 'Jira-Jenkins-Integration')
                    // Check if Jira issue creation was successful
                       (jiraResponse && jiraResponse.data && jiraResponse.data.key) 
                        def jiraIssueKey = jiraResponse.data.key
                        currentBuild.description = "Jira Issue Key: ${jiraIssueKey}"
                        env.JIRA_ISSUE_KEY = jiraIssueKey
                }
            }
        }

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

                        def buildResult = sh script: 'echo build failed', returnStatus: true
                        if (buildResult != 0) {
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Build Failed",site: 'hindsmachines')
                        } else {
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Build Success",site: 'hindsmachines')
                        }
                    }
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQube'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectName=HINDS-MACHINE -Dsonar.projectKey=HINDS-MACHINE-KEY"
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                script {
                    timeout(time: 1, unit: 'HOURS') {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            echo "Quality gate failed"
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Quality gate failed",site: 'hindsmachines')
                        } else {
                            echo "Quality gate PASS"
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Quality gate PASS",site: 'hindsmachines')
                        }
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
                        def s3UploadResult = sh script: 'echo s3-upload failed', returnStatus: true
                        if (s3UploadResult != 0) {
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "S3 Upload Failed", site: 'hindsmachines')
                            error "S3 Upload Failed"
                        } else {
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "S3 Upload Successful", site: 'hindsmachines')
                        }
                    }
                }
            }

        }
    }
}

