#!/bin/groovy
pipeline {
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
      
    }
    stage('Test2') {
      steps {
        script {
          sh 'npm run test:coverage'
        }
      }
      
    }
    
   
     
    }
  }


