"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Share2, MapPin, ThumbsUp, Camera } from "lucide-react"

export default function Community() {
  const communityFeed = [
    {
      user: "Onkar",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "planted 5 trees",
      location: "Central Park",
      time: "2 hours ago",
      image: "/placeholder.svg?height=200&width=300",
      likes: 23,
      comments: 5,
      description: "Amazing turnout for today's tree planting event! The community really came together. 🌱",
    },
    {
      user: "Shreya",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "taught coding to kids",
      location: "Community Center",
      time: "4 hours ago",
      image: "/placeholder.svg?height=200&width=300",
      likes: 18,
      comments: 3,
      description: "These kids are so eager to learn! Teaching them basic programming concepts today.",
    },
    {
      user: "Raj",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "organized beach cleanup",
      location: "Sunset Beach",
      time: "1 day ago",
      image: "/placeholder.svg?height=200&width=300",
      likes: 45,
      comments: 12,
      description: "Collected over 50 bags of trash today! Our beach is looking beautiful again. 🏖️",
    },
    {
      user: "Pratik",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "delivered meals to seniors",
      location: "Downtown Area",
      time: "2 days ago",
      image: "/placeholder.svg?height=200&width=300",
      likes: 31,
      comments: 8,
      description: "Spent the morning delivering hot meals to our elderly neighbors. Their smiles made my day! ❤️",
    },
  ]

  const topContributors = [
    { name: "Onkar", points: 3450, badge: "Community Leader", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Raj", points: 3200, badge: "Green Champion", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Shreya", points: 2890, badge: "Education Hero", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Pratik", points: 2650, badge: "Social Impact", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-1 lg:px-8 lg:py-8">
      <div className="flex justify-between items-center pb-1">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">Community Feed</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Camera className="h-4 w-4" />
              Share Activity
            </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* ✅ Sidebar → below feed on mobile, left on desktop */}
        <div className="space-y-6 lg:order-2 order-1">
          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Top Contributors</span>
              </CardTitle>
              <CardDescription>This month's community leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {contributor.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{contributor.name}</div>
                      <div className="text-xs text-gray-500">{contributor.badge}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{contributor.points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
  
          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Activities Today</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Impact Points</span>
                  <span className="font-semibold">1.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cities Participating</span>
                  <span className="font-semibold">47</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* ✅ Community Feed → always first on mobile, right side on desktop */}
        <div className="space-y-6 lg:col-span-2 order-2 lg:order-1">  
          <div className="space-y-6">
            {communityFeed.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex-row">
                    <div className="flex">
                      <Avatar className="h-10 w-10 border-2 border-blue-500">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.user.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-wrap items-center gap-2 mb-2 ml-2 text-sm">
                        <span className="font-bold text-gray-900">{post.user}</span>
                        <span className="text-gray-600">{post.action}</span>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{post.location}</span>
                        </div>
                        <span className="text-gray-500">{post.time}</span>
                      </div>
                    </div>
  
                    <p className="text-gray-700 mb-3">{post.description}</p>
  
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Community activity"
                      className="rounded-lg mb-4 w-full h-auto max-w-full"
                    />
  
                    <div className="flex items-center space-x-6">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 p-0">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 p-0">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600 p-0">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )  
}
