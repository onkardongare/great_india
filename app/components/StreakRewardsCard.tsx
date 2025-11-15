import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Gift } from "lucide-react";

export default function StreakRewardsCard({ currentStreak }: { currentStreak: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Flame className="h-5 w-5 text-orange-600" />
          <span>Streak & Rewards</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600">{currentStreak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
          <div className="text-xs text-gray-500 mt-1">Keep it up! 3 more days for bonus rewards</div>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-medium mb-3 flex items-center">
            <Gift className="h-4 w-4 mr-2 text-purple-600" />
            Available Rewards
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
              <span className="text-sm">Coffee Shop 20% Off</span>
              <Button size="sm" variant="outline">
                Claim
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span className="text-sm">Priority Event Access</span>
              <Button size="sm" variant="outline">
                Claim
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}