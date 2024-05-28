import Student  from "./student.js";
class student_Manager {
    students: Student[];
    constructor() {
      this.students = [];
    }
    find_student(student_id: number) {
      return this.students.find((std) => std.id == student_id);
    }
  
    add_student(name: string) {
      let student = new Student(name);
      this.students.push(student);
      console.log("\n__________________________________________")
      console.log(
        `Student ID    : ${student.id}\nStudent Name  : ${name}\n \tAdded Successfully!!!!. `
      );
      console.log("___________________________________________")
    }
  
    enroll_student(student_id: number, course: string) {
      let student = this.find_student(student_id);
      if (student) {
        student.enroll_course(course);
        console.log("\n_________________________________________________________________")
        console.log(` ${student.name} enrolled in ${course} sucessfully`);
        console.log("_________________________________________________________________")
      }
    }
  
    view_student_balance(student_id: number) {
      let student = this.find_student(student_id);
      if (student) {
        student.view_balance();
      } else {
          console.log("\n_________________________________________________________________")
        console.log("Student not Found !!!\nPlease Enter a Correct Student ID");
        console.log("_________________________________________________________________")
      }
    }
  
    pay_student_fees(student_id: number, amount: number) {
      let student = this.find_student(student_id);
      
      if (student) {
        student.pay_fees(amount);
      } else {
          console.log("\n_________________________________________________________________")
      
        console.log("Student not Found !!! \nPlease Enter a Correct Student ID");
        console.log("_________________________________________________________________")
      }
    }
  
    show_student_status(student_id: number) {
      let student = this.find_student(student_id);
      if (student) {
        student.show_status();
      } else {
          console.log("\n_________________________________________________________________")
        console.log("Student not Found !!!\nPlease Enter a Correct Student ID");
        console.log("_________________________________________________________________")
      }
    }
  }

export default student_Manager