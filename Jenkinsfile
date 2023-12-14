pipeline {
  agent any
  tools {
    jdk 'OpenJDK17'
  }
  environment {
    AWS_ACCESS_KEY_ID = 'AKIA3WJJAU2D4PYO7P4J'
    AWS_SECRET_ACCESS_KEY = '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'
    AWS_DEFAULT_REGION = 'us-east-1'
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
  }
}
