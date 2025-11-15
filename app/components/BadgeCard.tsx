import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Badge {
  name: string;
  icon: any;
  color: string;
  earned: boolean;
}

interface BadgeCardProps {
  badges: Badge[];
}

export default function BadgeCard({ badges }: BadgeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span>Your Badges</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-lg text-center ${badge.earned ? "bg-gray-50" : "bg-gray-100 opacity-50"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${badge.color} flex items-center justify-center mx-auto mb-2 ${
                    !badge.earned ? "grayscale" : ""
                  }`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium">{badge.name}</div>
                {!badge.earned && <div className="text-xs text-gray-500 mt-1">Not earned yet</div>}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}