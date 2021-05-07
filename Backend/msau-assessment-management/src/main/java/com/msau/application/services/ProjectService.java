package com.msau.application.services;

import com.msau.application.models.Project;
import com.msau.application.models.User;
import com.msau.application.repository.ProjectRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ProjectService {

    private final ProjectRepository courseRepository;
    private final UserService userService;

    public ProjectService(UserService userService, ProjectRepository courseRepository){
        this.userService = userService;
        this.courseRepository = courseRepository;
    }

    @Transactional
    public List<Project> getAllCourses(){
        return StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public Project saveCourse(Project course){
        return courseRepository.save(course);
    }

    @Transactional
    public Project getCourseById(Long courseId){
        return courseRepository.findById(courseId).get();
    }

    @Transactional
    public void deleteCourseById(Long courseId){
        courseRepository.deleteById(courseId);
    }

    public Project addUserSaveCourse(User user, Project course){
        course.setUser(user);
        return this.saveCourse(course);
    }

    public Project addUserByIdSaveCourse(String userId, Project course){
        User user = this.userService.getUserById(userId);
        return addUserSaveCourse(user, course);
    }

    public Project checkUserByIdSaveCourse(String userId, Project course) throws UnAuthorizedAccessException {
        if(!course.getUser().getId().equals(userId)) throw new UnAuthorizedAccessException("User does not have access to this Course");
        return this.saveCourse(course);
    }

    public void checkUserByIdDeleteCourseById(String userId, Long courseId) throws UnAuthorizedAccessException{
        Project course = this.getCourseById(courseId);
        if(!course.getUser().getId().equals(userId)) throw new UnAuthorizedAccessException("User does not have access to this Course");
        this.deleteCourseById(courseId);
    }
}
