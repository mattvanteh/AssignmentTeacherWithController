package com.assignment2.assignment.controller;

import com.assignment2.assignment.model.Course;
import com.assignment2.assignment.reositories.CourseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/course")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;


    @GetMapping
    public List<Course> getCourses(){
        return courseRepository.findAll();

    }
    @PostMapping
    public void addCourse(@RequestBody Course course){

        courseRepository.save(course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id){

        courseRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateCourse(@PathVariable Long id, @RequestBody Course course){
        course.setId(id);
        courseRepository.save(course);
    }
}
