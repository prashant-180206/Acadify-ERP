-- CreateTable
CREATE TABLE `course` (
    `course_id` INTEGER NOT NULL,
    `course_name` VARCHAR(100) NULL,
    `credits` INTEGER NULL,
    `num_lectures` INTEGER NULL,
    `department_id` INTEGER NULL,
    `semester` INTEGER NULL,

    PRIMARY KEY (`course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `d_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `HodId` INTEGER NULL,
    `Email` VARCHAR(100) NULL,

    PRIMARY KEY (`d_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `PRN_Number` INTEGER NOT NULL,
    `Password` VARCHAR(50) NULL,
    `First_Name` VARCHAR(50) NULL,
    `Middle_Name` VARCHAR(50) NULL,
    `Last_Name` VARCHAR(50) NULL,
    `Name` VARCHAR(100) NULL,
    `Mothers_Name` VARCHAR(100) NULL,
    `Email` VARCHAR(100) NULL,
    `Gender` ENUM('Male', 'Female', 'Other') NULL,
    `Date_of_Birth` DATE NULL,
    `Date_of_Admission` DATE NULL,
    `Street_and_House` VARCHAR(100) NULL,
    `City` VARCHAR(50) NULL,
    `State` VARCHAR(50) NULL,
    `PIN_Code` VARCHAR(10) NULL,
    `Contact_Number` VARCHAR(15) NULL,
    `Aadhar_Card_Number` VARCHAR(20) NULL,
    `Department_id` INTEGER NULL,
    `Class` VARCHAR(10) NULL,
    `Roll_No` VARCHAR(10) NULL,
    `HSC_Score` FLOAT NULL,
    `CET_Percentile` FLOAT NULL,
    `Semester` VARCHAR(10) NULL,
    `Category` VARCHAR(20) NULL,
    `Year` INTEGER NULL,

    PRIMARY KEY (`PRN_Number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher` (
    `t_id` INTEGER NOT NULL AUTO_INCREMENT,
    `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
    `qualification` VARCHAR(100) NOT NULL,
    `designation` ENUM('Lecturer', 'HOD') NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `contact_number` VARCHAR(15) NULL,
    `join_date` DATE NOT NULL,
    `department_id` INTEGER NULL,
    `name` VARCHAR(40) NULL,
    `salary` INTEGER NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`t_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacher_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,

    UNIQUE INDEX `teacher_course_teacher_id_course_id_key`(`teacher_id`, `course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `teacher_id` INTEGER NOT NULL,
    `lecture_date` DATETIME(3) NOT NULL,
    `topic` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `present` BOOLEAN NOT NULL,
    `teacher_id` INTEGER NOT NULL,

    UNIQUE INDEX `attendance_course_id_date_teacher_id_key`(`course_id`, `date`, `teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignment_submission` (
    `submission_id` INTEGER NOT NULL AUTO_INCREMENT,
    `assignment_id` INTEGER NOT NULL,
    `student_course_code` VARCHAR(50) NOT NULL,
    `submissionDate` DATETIME NULL,
    `status` VARCHAR(50) NOT NULL,
    `grade` VARCHAR(20) NULL,
    `remarks` VARCHAR(255) NULL,

    PRIMARY KEY (`submission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `teacher_course` ADD CONSTRAINT `teacher_course_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`t_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacher_course` ADD CONSTRAINT `teacher_course_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lecture` ADD CONSTRAINT `lecture_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lecture` ADD CONSTRAINT `lecture_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`t_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendance` ADD CONSTRAINT `attendance_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendance` ADD CONSTRAINT `attendance_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`t_id`) ON DELETE CASCADE ON UPDATE CASCADE;
