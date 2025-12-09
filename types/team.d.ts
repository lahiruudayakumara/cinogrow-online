interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string; // Path to the team member's image
  bio: string; // Short biography of the team member
}

export type { TeamMember };