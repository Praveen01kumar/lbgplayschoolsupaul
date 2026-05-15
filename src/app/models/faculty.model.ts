export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  photo: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}