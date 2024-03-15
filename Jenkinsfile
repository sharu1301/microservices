pipeline {
     agent { label 'jenkins-slave'}

    stages {
        // Stage 1: Handle GitLab Webhook
        stage('Handle GitLab Webhook') {
            when {
                expression {
                    env.BRANCH_NAME == null
                }
            }
            steps {
                script {
                    // Extract Git information
                    def commitMessage = sh(script: 'git log --format=%B -n 1 HEAD', returnStdout: true).trim()
                    def committerEmail = sh(script: 'git log -1 --pretty=format:"%ae"', returnStdout: true).trim()
                    def commitAuthor = sh(script: 'git log -1 --pretty=format:"%an"', returnStdout: true).trim()

                    // Store webhook information in environment variable
                    env.WEBHOOK_INFO = "Commit pushed by: ${commitAuthor} (${committerEmail})\nCommit Comment: ${commitMessage}"
                }
            }
        }
        // Stage 2: Build Artifact
        stage('Build Artifact') {
            steps {
                dir('/home/ubuntu/workspace/Hinds Machine/Frontend') {
                    script {
                        sh '''
                            # Set up Node.js environment
                            export NVM_DIR="/home/ubuntu/.nvm"
                            . "$NVM_DIR/nvm.sh"
                            nvm install v21.7.1
                            nvm alias default v21.7.1
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
                    }
                }
            }    
        }

        // Stage 5: Upload to S3
        stage('Upload to S3') {
            steps {
                dir("/home/ubuntu/workspace/Hinds Machine/Frontend/build") {
                    script {
                        // Upload artifacts to S3 bucket
                        s3Upload(
                            consoleLogLevel: 'INFO',
                            dontSetBuildResultOnFailure: false,
                            dontWaitForConcurrentBuildCompletion: false,
                            entries: [
                                [
                                    bucket: 'dev-hindsmachines.insigniaconsultancy.com',
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
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                // Existing post-build steps
                def buildStatus = currentBuild.result
                if (buildStatus == 'FAILURE') {
                    emailext(
                        // ... (your existing failure email configuration)
                        body: 'This mail is from Jenkins. The build has failed. Error message: ${BUILD_LOG, maxLines=10}',
                        recipientProviders: [developers()],
                        subject: 'Hindsmachines Build Failure',
                        to: 'shaik@insigniaconsultancy.com,sridhar.k@insigniaconsultancy.com,nikhil@insigniaconsultancy.com,rajesh@insigniaconsultancy.com,ramya@creativesabode.com'
                    )
                }

                // Include webhook information in the email body
                def emailBody = """
                    
                    This mail is from Jenkins.
                    ${env.WEBHOOK_INFO}

                    Build ${currentBuild.result == 'FAILURE' ? 'failed' : 'successful'} of hindsmachines.
                """
                
                emailext(
                    body: emailBody,
                    // Existing email configuration
                    recipientProviders: [developers()],
                    subject: 'Hindsmachines Build successful',
                    to: 'shaik@insigniaconsultancy.com,sridhar.k@insigniaconsultancy.com,nikhil@insigniaconsultancy.com,rajesh@insigniaconsultancy.com,ramya@creativesabode.com'
                )
            }
        }
    }
}

////

