pipeline {
    agent any

    tools {
        jdk 'OpenJDK17'
    }

    stages {
        stage('Build Artifact') {
            steps {
                dir('/var/lib/jenkins/workspace/Hinds Machine/ics-ics-hind-machine/Frontend') {
                    script {
                        sh '''
                            git pull https://gitlab.insigniaconsultancy.com/js-devs/ics-ics-hind-machine.git
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
                        if (qg.status == 'OK') {
                            echo "Quality gate passed, generating ticket..."
                            // Add your ticket generation code here
                            def jiraIssue = [
                                fields: [
                                    project: [key: 'HIN'],
                                    summary: 'SonarQube Quality Gates Passed',
                                    description: "SonarQube Quality Gates passed for build ${env.BUILD_NUMBER}.",
                                    issuetype: [name: 'Task']
                                ]
                            ]
                            jiraNewIssue(issue: jiraIssue, site: 'hindsmachines', credentialsId: 'Jira-Jenkins-Integration')
                        } else {
                            // Generate ticket for failed quality gate
                            echo "Quality gate failed, generating ticket..."
                            // Add your ticket generation code here
                            def jiraIssue = [
                                fields: [
                                    project: [key: 'HIN'],
                                    summary: 'SonarQube Quality Gates failed',
                                    description: "SonarQube Quality Gates failed for build ${env.BUILD_NUMBER}.",
                                    issuetype: [name: 'Bug']
                                ]
                            ]
                            jiraNewIssue(issue: jiraIssue, site: 'hindsmachines', credentialsId: 'Jira-Jenkins-Integration')
                        }
                    }
                }
            }
        }

        stage('Upload to S3') {
            steps {
                dir("/var/lib/jenkins/workspace/Hinds Machine/ics-ics-hind-machine/Frontend/build") {
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
                def jiraIssue = [
                    fields: [
                        project: [key: 'HIN'],
                        summary: 'New JIRA Created on Build Success',
                        description: 'A new Jira ticket created automatically because the build succeeded.',
                        issuetype: [name: 'Task']
                    ]
                ]

                jiraNewIssue(issue: jiraIssue, site: 'hindsmachines', credentialsId: 'Jira-Jenkins-Integration')
            }
        }

        failure {
            script {
                echo "Build failed. No Jira ticket will be created."
            }
        }
    }
}
/// aaded comment
