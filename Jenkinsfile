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
      always{
        echo 'ñiuummmmmmm'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }  
    post{
      always{
        echo 'ñiuummmmmmm'
      }
      failure{
       
        echo ' de ñiummm nada'
      }
      
       success{
         echo 'test okokokokokoko'
        }
    }
     stage('Coverage') {
      steps {
         sh 'npm run test:coverage'
      }
    }
     
  }
}


