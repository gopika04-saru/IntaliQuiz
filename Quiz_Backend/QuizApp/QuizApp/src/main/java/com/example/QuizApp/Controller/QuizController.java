package com.example.QuizApp.Controller;

import com.example.QuizApp.model.QuestionWrapper;
import com.example.QuizApp.model.Response;
import com.example.QuizApp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Quiz")
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<Integer> createQuiz(@RequestParam String category,
                                              @RequestParam int numQ,
                                              @RequestParam String title) {
        Integer quizId = quizService.createQuiz(category, numQ, title);
        return ResponseEntity.status(201).body(quizId);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id) {
        List<QuestionWrapper> questionWrappers = quizService.getQuizQuestions(id);
        return ResponseEntity.ok(questionWrappers);
    }

    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> responses) {
        Integer result = quizService.calculateResult(id, responses);
        return ResponseEntity.ok(result);
    }
}
