package com.msau.application.Mycontrollers;

import com.msau.application.models.Project;
import com.msau.application.services.ProjectService;
import com.msau.application.services.UnAuthorizedAccessException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @GetMapping("/api/projects")
    public ResponseEntity<?> getCourses(){
        return new ResponseEntity<List<Project>>(projectService.getAllCourses(), HttpStatus.OK);
    }

    @PostMapping("/api/project")
    public ResponseEntity<?> saveCourse(@RequestBody Project course, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        return new ResponseEntity<Project>(this.projectService.addUserByIdSaveCourse(userId, course), HttpStatus.CREATED);
    }

    @PutMapping("/api/project/{id}")
    public ResponseEntity<?> editCourse(@RequestBody Project course, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        try{
            Project editedCourse = projectService.checkUserByIdSaveCourse(userId, course);
            return new ResponseEntity<>(editedCourse, HttpStatus.OK);
        }catch(UnAuthorizedAccessException e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @DeleteMapping("/api/project/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id, @AuthenticationPrincipal OAuth2User principal){
        String userId = (String) principal.getAttribute("sub");
        try{
            this.projectService.checkUserByIdDeleteCourseById(userId, id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(UnAuthorizedAccessException e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
