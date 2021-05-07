package com.msau.application.Mycontrollers;

import com.msau.application.models.Quiz;
import com.msau.application.services.QuizService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService){
        this.quizService = quizService;
    }

    @GetMapping("/api/quizes")
    public List<Quiz> getQuizes(){
        return  quizService.getAllQuizes();
    }

    @PostMapping("/api/quiz")
    public Quiz saveQuiz(@RequestBody Quiz quiz){
        return quizService.saveQuiz(quiz);
    }
}
