pipeline {
  agent any
  tools {
    jdk 'OpenJDK17'
  }
  stages {
    stage('Build Artifact') {
      steps {
        dir('/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend') {
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
    stage('Upload to S3') {
      steps {
        dir("/var/lib/jenkins/workspace/Test-automation/ics-ics-hind-machine/Frontend/build"){
        s3Upload consoleLogLevel: 'INFO', dontSetBuildResultOnFailure: false, dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: 'hindm-test', excludedFile: '', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: false, selectedRegion: 'us-east-1', showDirectlyInBrowser: false, sourceFile: '**/*', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false]], pluginFailureResultConstraint: 'FAILURE', profileName: 'S3-Upload', userMetadata: []
        }
      }
    }
    stage('post build action') {
      steps {
        success {
          script {
            def jiraConfig = [
              credentialsId: 'Jenkins', // Jenkins credential ID for Jira
              site: 'https://hindsmachines.atlassian.net/', // Jira instance URL
              projectKey: 'HIN', // Jira project key
              issueType: 'Bug', // Jira issue type
              summary: "Build Successful - ${currentBuild.fullDisplayName}",
              description: "Build ${currentBuild.fullDisplayName} was successful.\n\n [Jenkins Build Info|${env.BUILD_URL}]"
            ]
            jiraSendBuildInfo jiraConfig
          }
        }
        failure {
          script {
            def jiraConfig = [
              credentialsId: 'Jenkins', // Jenkins credential ID for Jira
              site: 'https://hindsmachines.atlassian.net', // Jira instance URL
              projectKey: 'HIN', // Jira project key
              issueType: 'Bug', // Jira issue type
              summary: "Build Failed - ${currentBuild.fullDisplayName}",
              description: "Build ${currentBuild.fullDisplayName} failed.\n\n [Jenkins Build Info|${env.BUILD_URL}]"
            ]
            catchError {
              jiraSendBuildInfo jiraConfig
            }
          }
        }
      }
    }
  } 
}

