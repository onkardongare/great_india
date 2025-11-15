import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface ImpactStats {
  treesPlanted: number;
  kidsEducated: number;
  cleanupEvents: number;
  volunteersActive: number;
}

export default function ImpactStatsCard({ treesPlanted, kidsEducated, cleanupEvents, volunteersActive }: ImpactStats) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <span>Community Impact This Month</span>
        </CardTitle>
      </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{treesPlanted.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Trees Planted</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{kidsEducated.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Kids Educated</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{cleanupEvents}</div>
          <div className="text-sm text-gray-600">Cleanup Events</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{volunteersActive.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Active Volunteers</div>
        </div>
      </div>
    </CardContent>
  </Card>
  );
}