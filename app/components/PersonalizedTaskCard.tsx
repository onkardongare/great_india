import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";
import { Challenge } from "@/types/challenge";


export default function PersonalizedTaskCard({task}: {task: Challenge}) {
  return (
    <Card className="bg-gradient-to-r from-gray-400 to-yellow-400 border-l-4 shadow-2xl border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <Badge variant="outline">{task.difficulty}</Badge>
        </div>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">{task.pointsReward} pts</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{task.participants}</span>
            </div>
          </div>
          <Button size="sm">Join</Button>
        </div>
      </CardContent>
    </Card>
  );
}