
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Toolbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <Heart className="h-6 w-6 text-pink-500" />
        
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link to="/">
              Portfolio
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/metaprompting">
              Metaprompting
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="https://tf.catherine.it.com/">
              Terraform 
            </Link>          
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Resources
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  CNCF
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://github.com/infracost/infracost" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  infracost
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://github.com/kubecost" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  kubecost
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://github.com/aquasecurity/trivy" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  trivy
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
