# QuizMe

QuizMe is an innovative and user-friendly platform designed to revolutionize knowledge testing and exam preparation for students. With QuizMe, users have the power to create personalized quizzes effortlessly, whether by manually crafting questions or utilizing the cutting-edge AI technology to automatically generate questions from their notes. The platform's versatility caters to diverse learning styles and allows users to evaluate their understanding of various subjects, simulate exam conditions, and track their progress over time


## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contact Information](#contact-information)


## Installation

1. Clone the repository:  
   ```git clone https://github.com/j-sabile/quizMe.git```
  
2. Install the dependencies:  
   ```
   cd backend
   npm i  
   ```  
   ```
   cd frontend
   npm i  
   ```
  
3. Create .env in backend/ and frontend/  
   .env in backend
   ```
    DATABASE=mongodb://127.0.0.1:27017/QuizMe
    JWT_SECRET=<SecretString>
    OPENAI_API_KEY=<OpenAIAPIKey>
    ```  
  
   .env in frontend  
   ```
   REACT_APP_API=http://localhost:5000
   ```  
  
4. Start the project:  
   ```
   cd backend
   node ./server.js
   ```  
   ```
   cd frontend
   npm start
   ```  
  
  
## Features  
  
- Custom Quiz Creation  
- AI-Generated Quizzes  
- Exam Simulation  
- Performance Tracking   
  
  
## Contact Information  
  
email: jericosabile@gmail.com  