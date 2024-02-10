pipeline {
    agent any

    stages {


        // Stage 2: Build Artifact
        stage('Build Artifact') {
            steps {
                dir('/var/lib/jenkins/workspace/Hinds Machine/Frontend') {
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
                dir("/var/lib/jenkins/workspace/Hinds Machine/Frontend/build") {
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
}
