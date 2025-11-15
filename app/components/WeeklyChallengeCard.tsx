import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface WeeklyChallenge {
  title: string;
  description: string;
  progress: number;
  participants: number;
  daysLeft: number;
}

export default function WeeklyChallengeCard({ title, description, progress, participants, daysLeft }: WeeklyChallenge) {
  return (
    <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-green-100">{description}</CardDescription>
          </div>
          <Badge variant="secondary" className="bg-white text-green-600">
            {daysLeft} days left
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Your Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="bg-green-200" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">{participants.toLocaleString()} participants</span>
            </div>
            <Button variant="sm"> secondary</Button>
            Join Challenge
          </div>
        </div>
      </CardContent>
    </Card>
  );
}