pipeline {
    agent any

    stages {
        // Stage 1: Creating a Jira ticket
        stage('Creating a Jira ticket.') {
            steps {
                script {
                    // Define Jira issue details
                    def jiraIssue = [
                        fields: [
                            project: [key: 'HIN'],
                            summary: 'This ticket includes each stage and its corresponding status',
                            description: "A new Jira ticket has been automatically created to display the pipeline status. With build number is:: ${env.BUILD_NUMBER}.",
                            issuetype: [name: 'Task']
                        ]
                    ]

                    // Capture the Jira response
                    def jiraResponse = jiraNewIssue(issue: jiraIssue, site: 'hindsmachines', credentialsId: 'Jira-Jenkins-Integration')
                    
                    // Check if Jira issue creation was successful
                    if (jiraResponse && jiraResponse.data && jiraResponse.data.key) {
                        def jiraIssueKey = jiraResponse.data.key
                        
                        // Update Jenkins build description with Jira Issue Key
                        currentBuild.description = "Jira Issue Key: ${jiraIssueKey}"
                        env.JIRA_ISSUE_KEY = jiraIssueKey
                    }
                }
            }
        }

        // Stage 2: Build Artifact
        stage('Build Artifact') {
            steps {
                dir('/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend') {
                    script {
                        sh '''
                            # Set up Node.js environment
                            export NVM_DIR="/var/lib/jenkins/.nvm"
                            . "$NVM_DIR/nvm.sh"
                            nvm install v20.10.0
                            nvm alias default v20.10.0
                            nvm use default

                            # Display Node.js and NPM versions
                            echo "Node.js version"
                            node -v
                            echo "NPM version"
                            npm -v

                            # Install dependencies and build
                            npm install --legacy-peer-deps
                            CI=false npm run build
                        '''

                        // Check build result
                        def buildResult = sh script: 'echo build failed', returnStatus: true
                        if (buildResult != 0) {
                            // If build fails, add a comment to the Jira ticket
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Build Failed", site: 'hindsmachines')
                        } else {
                            // If build is successful, add a comment to the Jira ticket
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Build Success", site: 'hindsmachines')
                        }
                    }
                }
            }
        }

        // Stage 3: SonarQube Analysis
        stage('SonarQube Analysis') {
            steps {
                script {
                    // Get SonarQube scanner tool
                    def scannerHome = tool 'SonarQube'

                    // Run SonarQube analysis
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectName=HINDS-MACHINE -Dsonar.projectKey=HINDS-MACHINE-KEY"
                    }
                }
            }
        }

        // Stage 4: Quality Gate
        stage('Quality Gate') {
            steps {
                script {
                    // Wait for Quality Gate results
                    timeout(time: 1, unit: 'HOURS') {
                        def qg = waitForQualityGate()
                        
                        // Check Quality Gate status and update Jira ticket
                        if (qg.status != 'OK') {
                            echo "Quality gate failed"
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Quality gate failed", site: 'hindsmachines')
                        } else {
                            echo "Quality gate PASS"
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "Quality gate PASS", site: 'hindsmachines')
                        }
                    }
                }
            }    
        }

        // Stage 5: Upload to S3
        stage('Upload to S3') {
            steps {
                dir("/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend/build") {
                    script {
                        // Upload artifacts to S3 bucket
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

                        // Check S3 upload result
                        def s3UploadResult = sh script: 'echo s3-upload failed', returnStatus: true
                        if (s3UploadResult != 0) {
                            // If S3 upload fails, add a comment to the Jira ticket and fail the build
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "S3 Upload Failed", site: 'hindsmachines')
                            error "S3 Upload Failed"
                        } else {
                            // If S3 upload is successful, add a comment to the Jira ticket
                            jiraAddComment(idOrKey: env.JIRA_ISSUE_KEY, comment: "S3 Upload Successful", site: 'hindsmachines')
                        }
                    }
                }
            }
        }
    }
}

//
