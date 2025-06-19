import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function CreateProjectForm() {
  const [project, setProject] = useState({
    name: "",
    category: "",
    duration: "",
    members: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    // API call or state update here
  };

  return (
    <Card className="max-w-xl mx-auto p-6 mt-10">
      <CardHeader>
        <CardTitle>Create New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              name="name"
              value={project.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              onValueChange={(value) => setProject({ ...project, category: value })}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Website Design">Website Design</SelectItem>
                <SelectItem value="App Development">App Development</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              value={project.duration}
              onChange={handleChange}
              placeholder="e.g., 2 Month"
              required
            />
          </div>

          <div>
            <Label htmlFor="members">Team Members</Label>
            <Input
              id="members"
              name="members"
              value={project.members}
              onChange={handleChange}
              placeholder="e.g., 5"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Brief description of the project"
            />
          </div>

          <Button type="submit" className="w-full">Create Project</Button>
        </form>
      </CardContent>
    </Card>
  );
}
