"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Business Insider",
    avatar: "B",
    title: " AI lands more dates",
    description: "Online dating can be tough, but using AI in dating might be making it a little bit easier...",   
    
  },
  {
    name: "Forbes",
    avatar: "F",
    title: "AI revolutionizes online dating",
    description: "Using AI in Dating raises the potential for even more personalized and successful matches...",
  },
  {
    name: "CNN",
    avatar: "C",
    title: "Falling in love with AI",
    description: "AI is taking over the dating world, in the form of advisor, trainer and matchmaker...",
  },
  {
    name: "Mashable",
    avatar: "M",
    title: "Say cheese for the chatbots",
    description: "Getting a bunch of clever opening suggestions from AI, helps to activate interesting conversations...",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">About AI Dating</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}