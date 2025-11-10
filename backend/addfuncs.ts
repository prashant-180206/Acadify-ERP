"use server";

import { StudentSchemaType } from "@/app/admin/add_student/schema";
import { TeacherSchemaType } from "@/app/admin/add_teacher/schema";
import { supabase } from "@/lib/supabase";

export async function addStudent(student: StudentSchemaType) {
  const { data, error } = await supabase
    .from('student')
    .insert([
      {
        first_name: student.firstName,
        last_name: student.lastName,
        father_name: student.fatherName,
        mother_name: student.motherName,
        date_of_birth: student.dateOfBirth,
        gender: student.gender,
        contact_no: student.contactNo,
        email: student.email,
        state: student.state,
        address: student.address,
        city: student.city,
        pin: student.pin,
        hsc_score: student.HSC_score,
        cet_score: student.CET_Score,
        aadhar: student.aadhar,
        pan: student.pan,
        category: student.category,
        dep_id: student.dep_id,
      }
    ]);

  if (error) throw error;
  return data;
}

export async function addTeacher(teacher: TeacherSchemaType) {
  const { data, error } = await supabase
    .from('teachers')
    .insert([
      {
        first_name: teacher.firstName,
        last_name: teacher.lastName,
        date_of_birth: teacher.dateOfBirth,
        gender: teacher.gender,
        contact_no: teacher.contactNo,
        email: teacher.email,
        state: teacher.state,
        address: teacher.address,
        city: teacher.city,
        pin: teacher.pin,
        university_name: teacher.University_name,
        highest_qualification: teacher.highestQualification,
        aadhar: teacher.aadhar,
        pan: teacher.pan,
        bank_name: teacher.bankName,
        account_no: teacher.accountNo,
        salary: teacher.salary,
        department: teacher.department,
        designation: teacher.designation,
      }
    ]);
  
  if (error) throw error;
  return data;
}

export async function assignTeacherToCourse(teacherId: number, courseIds: number[]) {
  // Step 1: Fetch all valid course IDs from the database
  const { data: validCourses, error: fetchError } = await supabase
    .from('courses')
    .select('course_id');

  if (fetchError || !validCourses) {
    console.error('Failed to fetch courses:', fetchError);
    return false;
  }

  const validCourseIds = validCourses.map((c) => c.course_id);

  // Step 2: Filter only valid course IDs
  const filteredCourseIds = courseIds.filter((id) => validCourseIds.includes(id));

  if (filteredCourseIds.length === 0) {
    console.warn('No valid course IDs provided.');
    return false;
  }

  // Step 3: Prepare insert payload
  const insertPayload = filteredCourseIds.map((courseId) => ({
    teacher_id: teacherId,
    course_id: courseId,
  }));

  // Step 4: Insert into teacher_courses
  const { error: insertError } = await supabase
    .from('teacher_courses')
    .insert(insertPayload);

  if (insertError) {
    console.error('Error assigning teacher to courses:', insertError);
    return false;
  }

  return true;
}