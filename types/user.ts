export interface UserStats {
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  tasksCompleted: number;
  hoursVolunteered: number;
  rank: number;
}

export interface Badge {
  name: string;
  icon: any; // Using 'any' for Lucide icons
  color: string;
  earned: boolean;
  earnedDate: string;
  progress: number;
}

export interface Activity {
  title: string;
  date: string;
  points: number;
  participants: number;
}

export interface Reward {
  title: string;
  description: string;
  cost: number;
  available: boolean;
}

export interface UserData {
  name: string;
  email: string;
  joinDate: string;
  location: string;
  bio: string;
  avatar: string;
  userStats?: UserStats;
  badges?: Badge[];
  recentActivities?: Activity[];
  availableRewards?: Reward[];
}

export interface AuthState {
  userData: UserData | null;
  // Add other auth state properties here if needed
}
