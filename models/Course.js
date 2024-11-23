const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  estimatedPrice: { type: Number },
  tags: { type: [String], required: true },
  categories: { type: [String], required: true },
  level: { type: String, required: true },
  demoUrl: { type: String },
  thumbnail: { type: String },
  benefits: { type: [String], required: true },
  prerequisites: { type: [String], required: true },
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
      length: { type: String, required: true },
      description: { type: String },
      link: { type: String },
    },
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);