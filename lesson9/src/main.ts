// utility types

// partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

// required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<string, Grades> = {
  sara: { assign1: 85, assign2: 93 },
};

// pick and omit

// pick:picked what we want to user from assigment
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = { studentId: '1234', grade: 123 };

// what we dont wantto have
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = { studentId: '123', title: 'final projects' };

// exclude and extract

type LetterGrades = 'a' | 'b' | 'c' | 'd';

// everything exept 'd'
type adjustedGrade = Exclude<LetterGrades, 'd'>;

// only a and b
type highGrades = Extract<LetterGrades, 'a' | 'b'>;

//non ullable
type allPossibleGrades = 'dave' | 'john' | null | undefined;

type namesOnly = NonNullable<allPossibleGrades>;

// return type
// type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// if we change function the return type also will be updated
type newAssign = ReturnType<typeof createNewAssign>;


// parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ['generics', 100];

// awaited help us with return type of a promise
