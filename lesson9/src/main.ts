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
