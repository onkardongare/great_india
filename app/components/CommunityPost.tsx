import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MapPin } from "lucide-react";

interface CommunityPost {
  user: string;
  avatar: string;
  action: string;
  location: string;
  time: string;
  image: string;
  likes: number;
  comments: number;
}

export default function CommunityPost({ user, avatar, action, location, time, image, likes, comments }: CommunityPost) {
  return (
    <div className="border-b pb-6 last:border-b-0">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{user.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-medium">{user}</span>
            <span className="text-gray-600">{action}</span>
            <span className="text-gray-400">•</span>
            <div className="flex items-center space-x-1 text-gray-500">
              <MapPin className="h-3 w-3" />
              <span className="text-sm">{location}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <img src={image} alt="Community activity" className="rounded-lg mb-3 w-full max-w-md" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}