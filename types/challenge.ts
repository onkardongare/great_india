export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  durationDays?: number;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'one-time';
  pointsReward: number;
  startDate: string;
  participants: number;
  endDate?: string;
  imageUrl?: string;
  requirements?: string[];
  tasks: Array<{
    taskTitle: string;
    taskDescription?: string;
  }>;
  createdBy: string;  
}

export interface UserChallenge {
  id: string;
  userId: string;
  challengeId: Challenge;  // Changed from string to Challenge type
  startDate: string;
  tasks: Array<{
    taskTitle: string;
    taskDescription?: string;
    completed: boolean;
  }>;
  endDate?: string;
  completed: boolean;
  completedTasks: string[]; // Array of task IDs that are completed
  pointsEarned: number;
  rank?: number;
}
