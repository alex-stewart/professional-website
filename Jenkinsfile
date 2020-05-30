pipeline {
    agent any
    stages {
        stage('Deploy to GitHub Pages' ) {
            steps {
                echo 'Deploying'
                sh "./deploy.sh"
            }
        }
    }
}