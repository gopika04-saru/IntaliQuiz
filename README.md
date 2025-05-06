# 🎯 Quiz Application

This is a full-stack Quiz Application where users can create quizzes, add questions by category, and test their knowledge. It uses **Spring Boot** for the backend and **React** for the frontend.

---

## 🚀 Tech Stack

| Layer       | Technology                 |
|-------------|-----------------------------|
| Frontend    | React.js, CSS               |
| Backend     | Spring Boot, Spring MVC, JPA|
| Database    | H2 / PostgreSQL             |
| Build Tool  | Maven                       |
| Tools       | IntelliJ IDEA, Postman      |

---

## 📦 Backend Dependencies (`pom.xml`)

```xml

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  <dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
  </dependency>
</dependencies> 

```
___


## 📡 API Endpoints

### 🔸 Question Endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/api/questions`                 | Get all quiz questions               |
| GET    | `/api/questions?category=java`   | Get questions by category            |
| POST   | `/api/questions`                 | Add a new question                   |

### 🔸 Quiz Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| POST   | `/api/quizzes`         | Create a new quiz      |
| GET    | `/api/quizzes/{id}`    | Get quiz by ID         |

---

## 📂 Frontend Folder Structure

```bash
quiz-client/
├── public/
├── src/
│   ├── assets/
│   │   ├── background.png
│   │   └── neon-bg.jpg
│   ├── components/
│   │   └── Navbar.js
│   └── pages/
│       ├── AddQuestion.js
│       ├── AllQuestions.js
│       ├── CreateQuiz.js
│       ├── QuizPage.js
│       └── ResultPage.js

```

---

## ✨ Features

- 📝 Add Questions with Category & Difficulty
- 🧠 Generate Quizzes Dynamically
- 🧪 Take Quizzes and Submit Answers
- 📊 Result Calculation and Display
- 🎨 Beautiful UI with Neon Game Theme

---

## ⚙️ Run the Project

### 🔹 Backend (Spring Boot)

```bash
cd quiz-backend
./mvnw spring-boot:run

```

___

## 🔹 Frontend (React)

```bash
cd quiz-client
npm install
npm start

```

___

## 🔧 Configuration

| File                          | Description                              |
|-------------------------------|------------------------------------------|
| `application.properties`      | Backend configuration (Spring Boot)      |
| `pom.xml`                     | Maven dependencies and plugins           |
| `axios.js` (frontend utils)   | Axios base URL and instance setup        |
| `.env` (optional frontend)    | Store environment variables like API URL |

---

## 📸 Output ScreenShots

### 🔐 Home Page  
![Home](ScreenShots/HomePage.bmp)

### 🔐 Add Question Page
![Add Question](ScreenShots/AddQuestion.bmp)

### 📋 All Questions Page  
![All Questions](ScreenShots/AllQuestions.bmp)

### 📋 Quiz Question Page  
![Quiz Question](ScreenShots/QuizQuestion.bmp)

### 📋 Result Page  
![Result](ScreenShots/Result.bmp)

---

## 📬 Contact

- 📧 Email: [kotakalagopika@gmail.com]
- 🐙 GitHub: [https://github.com/gopika04-saru]



