package com.assignment2.assignment.reositories;

import com.assignment2.assignment.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,Long> {
}
