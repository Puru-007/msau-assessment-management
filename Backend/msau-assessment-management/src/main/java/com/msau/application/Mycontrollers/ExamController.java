package com.msau.application.Mycontrollers;

import com.msau.application.models.Quiz;
import com.msau.application.models.Result;
import com.msau.application.services.ExamService;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService){
        this.examService = examService;
    }

    @GetMapping("/api/exams")
    public List<Quiz> getAllExams(){
        return  examService.getAllExams();
    }

    @GetMapping("/api/exam/result/{quizId}")
    public Result getResult(@PathVariable Long quizId, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        return examService.getResultByQuizIdAndUserId(quizId, userId);
    }

    @GetMapping("/api/exam/{quizId}")
    public Quiz getExam(@PathVariable Long quizId, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        return examService.getExamByQuizIdAndUserId(quizId, userId);
    }

    @PostMapping("/api/exam/{quizId}")
    public Result evalExam(@RequestBody Quiz exam, @PathVariable Long quizId, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        return examService.evaluateExam(exam, quizId, userId);
    }

}
