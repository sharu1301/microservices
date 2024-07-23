pipeline {
  agent { label 'jenkins-slave' }

  tools {
    maven 'Maven-Test'
    jdk 'OpenJDK17'
  }
  
  stages {
    stage('Build Artifact') {
      steps {
        sh 'mvn clean install -U'
      }
    }
    stage('Deploy to server using Ansible') {
      steps {
         script {
      sh '''
        ansible-playbook playbook.yml \
        -i dev.inv \
          -e 'ansible_ssh_extra_args=-o ProxyCommand="ssh -W %h:%p ubuntu@18.218.132.187"  ubuntu@10.10.0.7
'
      '''
        }
      }
    }
  }
}

