interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Solomon',
    lastName: 'Moses',
    age: 30,
    location: 'Igbope'

}

const student2: Student = {
    firstName: 'Arisekola',
    lastName: 'Ai',
    age: 30,
    location: 'Igbope'
}

const studentsList: Student[] = [student1, student2];
export default studentsList;
