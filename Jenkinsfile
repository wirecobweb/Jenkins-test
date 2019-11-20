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
    post{
     
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

