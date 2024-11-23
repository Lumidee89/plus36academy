const Course = require("../models/Course");

const createCourse = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      estimatedPrice,
      tags,
      categories,
      level,
      demoUrl,
      benefits,
      prerequisites,
      videos,
    } = req.body;

    const thumbnail = req.file?.path; 

    if (!name || !description || !price || !tags || !categories || !level || !benefits || !prerequisites || !videos) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const course = new Course({
      name,
      description,
      price,
      estimatedPrice,
      tags,
      categories,
      level,
      demoUrl,
      thumbnail,
      benefits,
      prerequisites,
      videos,
      createdBy: req.userId,
    });

    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating course", error: error.message });
  }
};

const getCourses = async (req, res) => {
    try {
      const courses = await Course.find().populate("createdBy", "name email role");
  
      res.status(200).json({ message: "Courses fetched successfully", courses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
  };

module.exports = { createCourse, getCourses };