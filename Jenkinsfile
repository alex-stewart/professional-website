pipeline {
    agent any
    stages {
        stage('Gradle Build' ) {
            steps {
                echo 'Building Project'
                sh "./gradlew clean build"
            }
        }
        stage('Docker Build and Publish') {
            steps {
                echo 'Build and Publish Docker Image'

                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
                        def image = docker.build("alestew/professional-webpage ")
                        image.push("${BRANCH_NAME}-${BUILD_NUMBER}")
                        image.push("latest")
                    }
                }
            }
        }
    }
}