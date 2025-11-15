import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function PushNotification() {
  return (
    <div className="fixed bottom-4 right-4 max-w-sm">
      <Card className="bg-blue-600 text-white border-blue-600 animate-slide-in-right">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <Zap className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">3 people in your city joined a tree planting drive!</div>
              <div className="text-blue-100 text-xs mt-1">Join now and earn bonus points</div>
              <Button size="sm" variant="secondary" className="mt-2 text-blue-600">
                Join Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}