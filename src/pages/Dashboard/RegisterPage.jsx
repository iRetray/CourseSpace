import React, { Fragment, useEffect, useState } from "react";
import { PageHeader, Input, Layout, Card, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import CourseService from "../../services/CourseService";
import CourseToRegister from "../../components/CourseToRegister";

const { Search } = Input;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;

const RegisterPage = ({ user }) => {
  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, [user]);

  const getCourses = () => {
    const coursesList = CourseService.getCoursesToRegister();
    console.log(coursesList);
    setCourseList(coursesList);
    setFilteredCourses(coursesList);
  };

  const handleSearch = (valueToSearch) => {};

  return (
    <Fragment>
      <div className="RegisterContainer">
        <PageHeader
          style={{ backgroundColor: "white", marginTop: "20px" }}
          title="Registrar"
          subTitle="Nuevos cursos y materias"
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Search
            className="searchBox"
            placeholder="Buscar entre materias y cursos"
            onSearch={handleSearch}
            enterButton
          />
          <div className="resultsSection">
            {filteredCourses &&
              filteredCourses.map((course) => (
                <CourseToRegister
                  id={course.id}
                  key={course.id}
                  name={course.name}
                  credits={course.credits}
                  image={course.image}
                  faculty={course.faculty}
                  color={course.color}
                  isBiannual={course.isBiannual}
                  description={course.description}
                  groupsAvaliable={course.groupsAvaliable}
                />
              ))}
            {filteredCourses &&
              filteredCourses.map((course) => (
                <CourseToRegister
                  id={course.id}
                  key={course.id}
                  name={course.name}
                  credits={course.credits}
                  image={course.image}
                  faculty={course.faculty}
                  color={course.color}
                  isBiannual={course.isBiannual}
                  description={course.description}
                  groupsAvaliable={course.groupsAvaliable}
                />
              ))}
            {filteredCourses && filteredCourses.length === 0 && (
              <Empty description={false} />
            )}
          </div>
        </Content>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
