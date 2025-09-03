import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Award } from "lucide-react";

interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  projects: number;
  image: string;
  skills: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-smooth bg-card">
      <div className="aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {course.level}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {course.duration}
          </div>
        </div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="mr-1 h-3 w-3" />
            {course.projects} Projects
          </div>
          <div className="flex items-center">
            <Award className="mr-1 h-3 w-3" />
            Certificate
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {course.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {course.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{course.skills.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth">
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;