pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/wirecobweb/Jenkins-test'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }    
     stage('Coverage') {
      steps {
         sh 'npm run test:coverage'
      }
    }
     stage('git') {
      steps {
         sh 'git add .'
         sh 'git commit -m 'test jenkins'
          sh 'git push'
      }
    }
  }
}


