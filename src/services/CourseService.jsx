import courseList from "./internalDataBase.json";

class CourseService {
  getCoursesToRegister() {
    return courseList;
  }
}

const instacedClass = new CourseService();
export default instacedClass;
