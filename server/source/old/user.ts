type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  description: string;
  profilePhoto: URL;
  verified: boolean;
  createdAt: Date;
};

export { User, User as Person };
