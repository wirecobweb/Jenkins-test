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
    post{
      always {
          
      steps {
        echo 'hola'
      
           }
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
     
  }
}

