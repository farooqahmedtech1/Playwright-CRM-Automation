
pipeline {
    agent any

    environment {
        // Load the CRM application URL from Jenkins Credentials.
    Base_URL = credentials('CRM_BASE_URL')

    // Load the CRM username from Jenkins Credentials.
    USER_NAME = credentials('USER_NAME')

    // Load the CRM password from Jenkins Credentials.
    USER_PASSWORD = credentials('USER_PASSWORD')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Playwright CRM project from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm ci'

                echo 'Installing Playwright Chromium browser...'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo 'Executing Playwright CRM test cases...'
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Publishing Playwright HTML report...'

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                
            ])
        }

        success {
            echo 'Playwright CRM Automation completed successfully!'
        }

        failure {
            echo 'Playwright CRM Automation failed. Check Console Output for details.'
        }
    }
}